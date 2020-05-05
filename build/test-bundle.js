class HttpRequest {
    constructor(url) {
        this.method = "get";
        this.params = new Map();
        this.contentType = "application/json; charset=UTF-8";
        this.validateHttpsCertificates = true;
        this.followRedirects = true;
        this.muteHttpExceptions = false;
        this.escaping = true;
        //TODO parse url
        this.url = url;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    addHeader(name, value) {
        if (this.headers == null) {
            this.headers = new Object();
        }
        this.headers[name] = value;
        return this;
    }
    addParam(name, value) {
        this.params.set(name, value);
        return this;
    }
    setContentType(contentType) {
        this.contentType = contentType;
        return this;
    }
    setPayload(payload) {
        this.payload = payload;
        return this;
    }
    setValidateHttpsCertificates(validateHttpsCertificates) {
        this.validateHttpsCertificates = validateHttpsCertificates;
        return this;
    }
    setFollowRedirects(followRedirects) {
        this.followRedirects = followRedirects;
        return this;
    }
    setMuteHttpExceptions(muteHttpExceptions) {
        this.muteHttpExceptions = muteHttpExceptions;
        return this;
    }
    getUrl() {
        let url = this.url;
        if (this.params.size > 0) {
            url += '?';
            let i = 0;
            for (let [key, value] of this.params) {
                if (i > 0) {
                    url += "&";
                }
                if (value != null) {
                    url += key + "=" + encodeURIComponent(value);
                    i++;
                }
            }
        }
        return url;
    }
}
function newHttpRequest(url) {
    return new HttpRequest(url);
}
var expect = require('chai').expect;
describe('HttpRequest', () => {
    it('should accept url with no params', () => {
        let httpRequest = new HttpRequest("https://api.exchangeratesapi.io/latest");
        expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/latest");
    });
    it('should append one param', () => {
        let httpRequest = new HttpRequest("https://api.exchangeratesapi.io/latest");
        httpRequest.addParam('base', 'USD');
        expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/latest?base=USD");
    });
    it('should append multiple params', () => {
        let httpRequest = new HttpRequest("https://api.exchangeratesapi.io/history");
        httpRequest.addParam('start_at', '2018-01-01');
        httpRequest.addParam('end_at', '2018-09-01');
        expect(httpRequest.getUrl()).to.equal("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01");
    });
});
//# sourceMappingURL=test-bundle.js.map