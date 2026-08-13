(() => {
  const request = typeof $request !== "undefined" && $request ? $request : {};
  const response = typeof $response !== "undefined" && $response ? $response : {};
  const url = request.url || "";
  const argument = typeof $argument === "string" ? $argument : "";
  const responseBody = response.body || "";

  const jsonHeaders = {
    "Content-Type": "application/json; charset=utf-8"
  };

  const finishBody = body => $done({ body });
  const finishResponse = (body, headers = jsonHeaders) => {
    $done({
      response: {
        status: 200,
        headers,
        body
      }
    });
  };

  const scrubObject = value => {
    if (!value || typeof value !== "object") return value;
    if (Array.isArray(value)) {
      value.forEach(scrubObject);
      return value;
    }

    Object.keys(value).forEach(key => {
      const lower = key.toLowerCase();
      const isAdKey = /(^|_)(ad|ads|advertisement|advertisements|promotion|promote|cps)(_|$)/.test(lower) ||
        ["appmsgad", "app_msg_ad_info", "appmsg_ad_info", "advertisement_info", "cps_product_info"].includes(lower);

      if (isAdKey) {
        if (Array.isArray(value[key])) value[key] = [];
        else if (typeof value[key] === "number") value[key] = 0;
        else if (typeof value[key] === "boolean") value[key] = false;
        else if (value[key] && typeof value[key] === "object") value[key] = {};
        else value[key] = "";
      } else {
        scrubObject(value[key]);
      }
    });

    return value;
  };

  const emptySuccess = JSON.stringify({ code: 200, msg: "success", data: [] });
  const emptyObject = "{}";

  if (/shunchangzhixing\.com\//i.test(url)) {
    if (/\/base\/\d+/i.test(url)) {
      finishResponse(JSON.stringify({ code: 200, msg: "success", data: {} }));
      return;
    }
    finishResponse(emptySuccess);
    return;
  }

  if (/issuecdn\.baidupcs\.com\/issue\/netdisk\/(?:guanggao|ts_ad)/i.test(url)) {
    finishResponse(" ", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  if (/pan\.baidu\.com\/(?:act\/|api\/|component\/|pmall\/|rest\/)|update\.pan\.baidu\.com\/statistics/i.test(url)) {
    finishResponse(emptyObject);
    return;
  }

  if (/mp\.weixin\.qq\.com\/mp\/(?:getappmsgad|appmsgad|advertisement|ad|masonryfeed|relatedarticle|relatedsearchword|cps_product_info|jsmonitor)(?:\?|$)/i.test(url)) {
    finishResponse(JSON.stringify({
      advertisement_info: [],
      advertisement_num: 0,
      app_msg_ad_info: {},
      appmsg_ad_info: {},
      ad_info: [],
      ret: 0,
      err_msg: "ok"
    }));
    return;
  }

  if (argument.includes("wechat") && responseBody) {
    let body = responseBody;
    const trimmed = body.trim();

    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        finishBody(JSON.stringify(scrubObject(JSON.parse(body))));
        return;
      } catch (_) {}
    }

    body = body
      .replace(/var\s+advertisement_info\s*=\s*(?:\[[\s\S]*?\]|\{[\s\S]*?\}|null|undefined)\s*;/g, "var advertisement_info = [];")
      .replace(/window\.advertisement_info\s*=\s*(?:\[[\s\S]*?\]|\{[\s\S]*?\}|null|undefined)\s*;/g, "window.advertisement_info = [];")
      .replace(/"advertisement_info"\s*:\s*\[[\s\S]*?\]/g, "\"advertisement_info\":[]")
      .replace(/"app_msg_ad_info"\s*:\s*\{[\s\S]*?\}/g, "\"app_msg_ad_info\":{}")
      .replace(/"appmsg_ad_info"\s*:\s*\{[\s\S]*?\}/g, "\"appmsg_ad_info\":{}")
      .replace(/"cps_product_info"\s*:\s*\{[\s\S]*?\}/g, "\"cps_product_info\":{}");

    const style = "<style id=\"codex_wechat_adblock\">#js_ad_area,#js_bottom_ad_area,#js_pc_qr_code,.js_ad_area,.js_ad_link,.mpad_more_list,.mpda_bottom_container,.mpad,.advertisement,.rich_media_tool__ad,.js_product_container,.js_cps_area,.js_related_ad_area,.js_related_area{display:none!important;height:0!important;max-height:0!important;overflow:hidden!important;}</style>";
    if (body.includes("</head>") && !body.includes("codex_wechat_adblock")) {
      body = body.replace("</head>", style + "</head>");
    }

    body = body.replace(/<div\b(?=[^>]*(?:id|class)=["'][^"']*(?:js_ad_area|js_bottom_ad_area|mpda_bottom_container|mpad|advertisement|js_product_container|js_cps_area|js_related_ad_area)[^"']*["'])[^>]*>[\s\S]*?<\/div>/gi, "");
    finishBody(body);
    return;
  }

  $done({});
})();
