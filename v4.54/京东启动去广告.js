const responseBody = $response.body;

if (!responseBody) {
  $done({});
} else {
  try {
    const responseObject = JSON.parse(responseBody);
    if (Array.isArray(responseObject.images)) {
      responseObject.images = [];
    }
    if (Object.prototype.hasOwnProperty.call(responseObject, "showTimesDaily")) {
      responseObject.showTimesDaily = 0;
    }
    $done({ body: JSON.stringify(responseObject) });
  } catch (error) {
    $done({});
  }
}
