function getLinksFromMd(text) {
  if (text === "" || text === undefined) {
    throw new Error("Parâmetro não encontrado. Isira um parâmetro.");
  }

  if (typeof text !== "string" || typeof text === "number") {
    throw new Error("Numbers are not allowed. Insert a text");
  } else {
    var result = [];
    let exportUrl = new RegExp (/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g);
    let exportpText = new RegExp (/(?<=\[)([a-z0-9]*)(?=\])/g);
    let urls = text.match(exportpUrl);
    let mdText = text.match(exportText);
    if (mdText !== null && urls !== null) {
      result = urls.map((url, i) => ({
        href: url,
        text: mdText[i]
      }));
    }
    return urls ? result : [];
  }
};
module.exports.getLinksFromMd = getLinksFromMd;

