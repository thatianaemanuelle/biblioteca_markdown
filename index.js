function getLinksFromMd(text) {
  if (text === "" || text === undefined) {
    throw new Error("Parametro não encontrado.");
  }

  if (typeof text !== "string" || typeof text === "number") {
    throw new Error("Não aceita numeros.");
  } else {
    var result = [];
    let regExportUrl = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/gi);
    let regExportText = new RegExp(/(?<=\[)([a-z0-9]*)(?=\])/gi);
    let urlSite = text.match(regExportUrl);
    let textMD = text.match(regExportText);
    if (textMD !== null && urlSite !== null) {
      result = urlSite.map((url, i) => ({
        href: url,
        text: textMD[i]
      }));
    }
    return urlSite ? result : [];
  }
};
module.exports.getLinksFromMd = getLinksFromMd;