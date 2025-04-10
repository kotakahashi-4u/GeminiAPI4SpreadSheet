const GEMINI_API = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// GEMINI_APIの作成の仕方はYoutubeで！

/**
 * key1, key2で指定した値を用いて「key1のkey2について簡潔に教えてください。」とGeminiに問い合わせる関数
 * 
 * @param {北海道} key1  問い合わせる対象の1番目
 * @param {人口} key2  問い合わせる対象の2番目。なおkey2は省略可能で、省略された場合は「key1について教えてください。」と問い合わせる。
 * @customfunction
 */
function GeminiHelp(key1, key2) {
  try {
    // モデルはサポート切れを起こすこともあるため、その時に応じて最適なものを設定すること
    // モデル一覧：https://ai.google.dev/gemini-api/docs/models?hl=ja
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-exp-03-25:generateContent?key=${GEMINI_API}`,
          payload = {
            'contents': [{
              'parts': [{
                'text': key2!==undefined ? key1+'の'+key2+'について簡潔に教えてください。' : key1+'について簡潔に教えてください。'
              }]
            }]
          },
          options = {
            'method': 'post',
            'contentType': 'application/json',
            'payload': JSON.stringify(payload)
          },
          res = UrlFetchApp.fetch(url, options),
          resJson = JSON.parse(res.getContentText());
    if (resJson && resJson.candidates && resJson.candidates.length > 0) {
      return resJson.candidates[0].content.parts[0].text;
    } else {
      return '申し訳ございません。お答えできません。';
    }
  } catch (ex) {
    console.log(ex.toString());
    return '申し訳ございません。しばらく時間をおいてからお試しください。';
  }
}
