var expect = require('chai').expect;

describe('HttpRequest', () => {
  it('should accept url with no params', () => {
     let httpRequest = newRequest("https://api.exchangeratesapi.io/latest")
     expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/latest");
  });

  it('should append one param', () => {
    let httpRequest = newRequest("https://api.exchangeratesapi.io/latest")
    .addParam('base', 'USD')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/latest?base=USD");
  });  

  it('should append multiple params', () => {
    let httpRequest = newRequest("https://api.exchangeratesapi.io/history")
    .addParam('start_at', '2018-01-01')
    .addParam('end_at', '2018-09-01')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01");
  });  

  it('should allow multiple params with same namee', () => {
    let httpRequest = newRequest("https://api.exchangeratesapi.io/history")
    .addParam('id', 'x')
    .addParam('id', 'y')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/history?id=x&id=y");
  });  

  it('should not append ? twice', () => {
    let httpRequest = newRequest("https://api.exchangeratesapi.io/history?key=xxx")
    .addParam('start_at', '2018-01-01')
    .addParam('end_at', '2018-09-01')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/history?key=xxx&start_at=2018-01-01&end_at=2018-09-01");
  });  

  it('should parse query on constructor', () => {
    let httpRequest = newRequest("https://api.exchangeratesapi.io/history?key=xxx&id=yyy")
    .addParam('start_at', '2018-01-01')
    .addParam('end_at', '2018-09-01')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/history?key=xxx&id=yyy&start_at=2018-01-01&end_at=2018-09-01");
  });  

});