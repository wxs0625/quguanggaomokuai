function shouldDropKey(key) {
  return /(^|_|-|\.)(ad|ads|adx|advert|advertise|advertisement|banner|splash|popup|popwin|popwindow|promotion|promote|marketing|commercial|sponsor|sponsored|material|reward_ad|feed_ad|open_screen|openscreen|launch_ad|startup_ad|ykad|alimama|gdt|pangolin|bytedance|watermark)(_|-|\.|$)/i.test(key);
}
function hasAdText(text) {
  if (typeof text !== 'string') return false;
  const cnPattern = /(\u5e7f\u544a|\u63a8\u5e7f|\u8d5e\u52a9|\u5f00\u5c4f|\u5f39\u7a97|\u798f\u5229|\u501f\u94b1|\u514d\u6d41\u91cf\u7279\u6743|\u7acb\u5373\u4e0b\u8f7d)/;
  return cnPattern.test(text) || /(ad_|_ad|splash|sponsor|promotion|download.*earn|OCD)/i.test(text);
}
function emptyLike(value) {
  if (Array.isArray(value)) return [];
  if (value && typeof value === 'object') return {};
  if (typeof value === 'number') return 0;
  if (typeof value === 'boolean') return false;
  return '';
}
function clean(value) {
  if (Array.isArray(value)) return value.map(clean).filter(item => item !== undefined);
  if (!value || typeof value !== 'object') return hasAdText(value) ? undefined : value;
  const output = {};
  for (const [key, raw] of Object.entries(value)) {
    if (shouldDropKey(key)) {
      output[key] = emptyLike(raw);
      continue;
    }
    const cleaned = clean(raw);
    if (cleaned !== undefined) output[key] = cleaned;
  }
  const fields = ['type', 'name', 'title', 'desc', 'description', 'label', 'tag', 'template', 'entityTemplate', 'cardType', 'moduleName', 'scene'];
  for (const field of fields) if (hasAdText(output[field])) return undefined;
  if (/ad|advert|splash|popup|banner|promotion|sponsor|ykad|alimama|gdt|pangolin/i.test(String(output.type || output.cardType || output.template || output.entityTemplate || ''))) return undefined;
  return output;
}
try {
  const body = $response.body || '';
  if (!body) $done({});
  const data = JSON.parse(body);
  $done({ body: JSON.stringify(clean(data)) });
} catch (error) {
  $done({});
}
