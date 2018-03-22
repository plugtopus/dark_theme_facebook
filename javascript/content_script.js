var _createClass = function () {
  function a(b, c) {
    for (var e, d = 0; d < c.length; d++) e = c[d], e.enumerable = e.enumerable || !1, e.configurable = !0, 'value' in e && (e.writable = !0), Object.defineProperty(b, e.key, e)
  }
  return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b
  }
}();

function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var StyleSwitcher = function () {
    function a() {
      _classCallCheck(this, a), this.head = document.getElementsByTagName('head')[0], this.link = document.createElement('link'), this.link.id = 'dark-facebook-styles', this.link.rel = 'stylesheet', this.link.type = 'text/css', this.link.href = this.styleURL(), this.link.media = 'screen', this.active = !1
    }
    return _createClass(a, [{
      key: 'activate',
      value: function () {
        this.active || (this.active = !0, this.head.appendChild(this.link))
      }
    }, {
      key: 'deactivate',
      value: function () {
        this.active && (this.active = !1, this.head.removeChild(this.link))
      }
    }, {
      key: 'switch',
      value: function (c) {
        c ? this.activate() : this.deactivate()
      }
    }, {
      key: 'styleURL',
      value: function () {
        return chrome.extension.getURL('../css/css.css')
      }
    }]), a
  }(),
  port = chrome.runtime.connect({
    name: 'black-facebook'
  }),
  interval = setInterval(function () {
    if (document.querySelector('body > *')) try {
      var a = new StyleSwitcher;
      port.onMessage.addListener(function (b) {
        'undefined' != typeof b.active && a.switch(b.active)
      }), port.postMessage({
        method: 'notifyActiveStatus',
        args: {}
      })
    } finally {
      clearInterval(interval)
    }
  }, 100);