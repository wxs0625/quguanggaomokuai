function removeAds(value) {
  if (Array.isArray(value)) return value.map(removeAds).filter(item => item !== undefined);
  if (!value || typeof value !== 'object') return value;
  const dropKeys = /(^|_)(ad|ads|advert|advertise|advertisement|banner|popup|pop|splash|promotion|promote|marketing|recommend_ad|feed_ad|material|watermark|ykad|userRed|topActBanner|bmArea|freeMarketTabLeadPop|topOperations|reward_ad_banner)(_|$)/i;
  const dropValues = /(video_track_mix|priority_display)/;
  const cnWords = ['\u5e7f\u544a','\u63a8\u5e7f','\u8d5e\u52a9','\u5f00\u5c4f','\u5f39\u7a97','\u798f\u5229','\u501f\u94b1','\u514d\u6d41\u91cf\u7279\u6743','OCD\u6302\u4ef6'];
  const hasAdWord = text => dropValues.test(text) || cnWords.some(word => text.includes(word));
  const output = {};
  for (const [key, raw] of Object.entries(value)) {
    if (dropKeys.test(key)) continue;
    const cleaned = removeAds(raw);
    if (cleaned === undefined) continue;
    if (typeof cleaned === 'string' && hasAdWord(cleaned)) continue;
    output[key] = cleaned;
  }
  if (output.type === 'video_track_mix' || output.entityTemplate === 'sponsorCard') return undefined;
  if (typeof output.name === 'string' && hasAdWord(output.name)) return undefined;
  if (typeof output.title === 'string' && hasAdWord(output.title)) return undefined;
  return output;
}
try {
  const body = $response.body || '{}';
  $done({ body: JSON.stringify(removeAds(JSON.parse(body))) });
} catch (e) {
  $done({});
}
