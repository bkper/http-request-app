var expect = require('chai').expect;

describe('HttpRequest', () => {
  it('should accept url with no params', () => {
     let httpRequest = new HttpRequest("https://api.exchangeratesapi.io/latest")
     expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/latest");
  });

  it('should append one param', () => {
    let httpRequest = new HttpRequest("https://api.exchangeratesapi.io/latest")
    httpRequest.addParam('base', 'USD')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/latest?base=USD");
  });  

  it('should append multiple params', () => {
    let httpRequest = new HttpRequest("https://api.exchangeratesapi.io/history")
    httpRequest.addParam('start_at', '2018-01-01')
    httpRequest.addParam('end_at', '2018-09-01')
    expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01");
  });  

});