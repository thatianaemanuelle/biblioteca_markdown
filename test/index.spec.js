const mocha = require("mocha");
const chai = require("chai");
const index = require("../index");
const expect = chai.expect;

describe("index", function() {
  describe("#getLinksFromMd", function() {

    describe("Quando nao houver parametro deve lancar um erro.", function() {
      it("Lançar um erro.", () => {
        expect(() => index.getLinksFromMd()).to.throw("Parameter not found. You must enter a parameter");
        expect(() => index.getLinksFromMd("")).to.throw("Parameter not found. You must enter a parameter");
      });
    });

    describe("Quando o texto for um numero deve lancar um erro.", function() {
      it("Lançar um erro.", () => {
        expect(() => index.getLinksFromMd(468)).to.throw("Numbers are not allowed. Insert a text");
      });
    });

    describe("Quando o texto for uma string e nao houver url deve retornar um array vazio.", function() {
      it("Retornar uma array vazia.", () => {
        expect(index.getLinksFromMd("bom dia")).to.be.empty;
        expect(index.getLinksFromMd("oi")).to.be.an("array");
      });
    });

    describe("Quando o texto for uma string e houver uma url deve retornar um array com o objeto com a url e o link do markdown.", function() {
      it("Retornar um array com objeto tendo url e texto do markdown.", () => {
        expect(index.getLinksFromMd("Oi você quer entrar no site [google](www.google.com)?")).to.deep.equal([{href: "www.google.com", text: "google"}]);
      });
    });

    describe("Quando o texto for uma string e houver tres urls diferentes deve retornar o objeto dentro do array.", function() {
      it("Retornar uma array com objects.", () => {
        expect(index.getLinksFromMd("[labore](https://en.wiktionary.org/wiki/labore), et [dolore](https://en.wiktionary.org/wiki/dolore), henlow [foo](http://foo.com)"))
          .to.deep.equal([
            {href: "https://en.wiktionary.org/wiki/labore", text: "labore"},
            {href: "https://en.wiktionary.org/wiki/dolore", text: "dolore"},
            {href: "http://foo.com", text: "foo"},
          ]);
      });
    });

  });
});