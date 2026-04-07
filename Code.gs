
/**
 * Simple RSS Proxy for CDN Status Feeds
 * Bypasses CORS to allow frontend fetching
 */
function doGet(e) {
  const feedUrl = e.parameter.url;
  if (!feedUrl) return ContentService.createTextOutput("No URL").setMimeType(ContentService.MimeType.TEXT);

  try {
    const response = UrlFetchApp.fetch(feedUrl);
    return ContentService.createTextOutput(response.getContentText())
                 .setMimeType(ContentService.MimeType.XML);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err).setMimeType(ContentService.MimeType.TEXT);
  }
}
