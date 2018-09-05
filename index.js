function getLinksFromMd(text) {
  if (text === "" || text === undefined) {
    throw new Error("Parametro não encontrado.");
  }

  if (typeof text !== "string" || typeof text === "number") {
    throw new Error("Não aceita numeros.");
  } else {
    var expected = [];
    let exportUrl = new RegExp (/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g);
    let exportpText = new RegExp (/(?<=\[)([a-z0-9]*)(?=\])/g);
    let urls = text.match(exportUrl);
    let mdText = text.match(exportpText);
    if (mdText !== null && urls !== null) {
      expected = urls.map((url, i) => ({
        href: url,
        text: mdText[i]
      }));
    }
    return urls ? expected : [];
  }
};
module.exports.getLinksFromMd = getLinksFromMd;