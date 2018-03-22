var _createClass = function () {
  function a(b, c) {
    for (var f, d = 0; d < c.length; d++) f = c[d], f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(b, f.key, f)
  }
  return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b
  }
}();

function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var ConfigStore = function () {
  function a() {
    _classCallCheck(this, a)
  }
  return _createClass(a, [{
    key: 'defaults',
    value: function () {
      return {
        active: !0
      }
    }
  }, {
    key: 'get',
    value: function () {
      var c = localStorage.getItem('facebook_skin');
      return c ? JSON.parse(c) : this.defaults()
    }
  }, {
    key: 'set',
    value: function (c) {
      var d = this.get();
      Object.keys(c).forEach(function (f) {
        d[f] = c[f]
      }), this.replace(c)
    }
  }, {
    key: 'replace',
    value: function (c) {
      localStorage.setItem('facebook_skin', JSON.stringify(c))
    }
  }]), a
}();
var _createClass = function () {
  function a(b, c) {
    for (var f, d = 0; d < c.length; d++) f = c[d], f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(b, f.key, f)
  }
  return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b
  }
}();

function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c
  }
  return Array.from(a)
}

function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var Controller = function () {
  function a(b) {
    var c = this;
    _classCallCheck(this, a), this.config = b, this.listener = function () {}, this.accessibleMethods = {
      notifyActiveStatus: function () {
        return c.listener(c.config.get())
      }
    }
  }
  return _createClass(a, [{
    key: 'callMethod',
    value: function (c, d) {
      var f;
      return this.accessibleMethods[c] ? (f = this.accessibleMethods)[c].apply(f, _toConsumableArray(d)) : void 0
    }
  }, {
    key: 'onUpdate',
    value: function (c) {
      this.listener = c, this.listener(this.config.get())
    }
  }, {
    key: 'isActive',
    value: function () {
      return this.config.get().active
    }
  }, {
    key: 'updateActive',
    value: function (c) {
      this.config.set({
        active: c
      }), this.listener(this.config.get())
    }
  }, {
    key: 'toggleActive',
    value: function () {
      this.updateActive(!this.isActive())
    }
  }]), a
}();
var _createClass = function () {
  function a(b, c) {
    for (var f, d = 0; d < c.length; d++) f = c[d], f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(b, f.key, f)
  }
  return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b
  }
}();

function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var Messenger = function () {
  function a(b) {
    var c = this;
    _classCallCheck(this, a), this.runtime = b, this.listener = function () {}, this.ports = [], this.runtime.onConnect.addListener(function (d) {
      return c.handleConnect(d)
    })
  }
  return _createClass(a, [{
    key: 'onMessage',
    value: function (c) {
      this.listener = c
    }
  }, {
    key: 'handleConnect',
    value: function (c) {
      var d = this;
      'black-facebook' !== c.name || (this.ports.push(c), c.onMessage.addListener(function (f) {
        return d.listener(f)
      }), c.onDisconnect.addListener(function () {
        return d.removePort(c)
      }))
    }
  }, {
    key: 'removePort',
    value: function (c) {
      this.ports.splice(this.ports.indexOf(c), 1)
    }
  }, {
    key: 'notify',
    value: function (c) {
      this.ports.forEach(function (d) {
        try {
          d.postMessage(c)
        } catch (f) {
          console.error('Could not send message to port', f)
        }
      })
    }
  }]), a
}();
var configStore = new ConfigStore,
  messenger = new Messenger(chrome.runtime),
  controller = new Controller(configStore, messenger);
messenger.onMessage(function (a) {
  controller.callMethod(a.method, a.arguments || {})
}), chrome.browserAction.onClicked.addListener(function () {
  return controller.toggleActive()
}), controller.onUpdate(function (a) {
  var b = a.active ? 'img/black_facebook_19.png' : 'img/white_facebook_19.png';
  chrome.browserAction.setIcon({
    path: b
  }), messenger.notify({
    active: controller.isActive()
  })
});