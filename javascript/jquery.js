(function (o, r) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = o.document ? r(o, !0) : function (d) {
        if (!d.document) throw new Error("jQuery requires a window with a document");
        return r(d)
    } : r(o)
})("undefined" == typeof window ? this : window, function (o, r) {
    function d(nn) {
        var an = !!nn && "length" in nn && nn.length,
            sn = be.type(nn);
        return "function" === sn || be.isWindow(nn) ? !1 : "array" === sn || 0 === an || "number" == typeof an && 0 < an && an - 1 in nn
    }

    function c(nn, an, sn) {
        if (be.isFunction(an)) return be.grep(nn, function (rn, dn) {
            return !!an.call(rn, dn, rn) !== sn
        });
        if (an.nodeType) return be.grep(nn, function (rn) {
            return rn === an !== sn
        });
        if ("string" == typeof an) {
            if (Ee.test(an)) return be.filter(an, nn, sn);
            an = be.filter(an, nn)
        }
        return be.grep(nn, function (rn) {
            return -1 < fe.call(an, rn) !== sn
        })
    }

    function u(nn, an) {
        for (;
            (nn = nn[an]) && 1 !== nn.nodeType;);
        return nn
    }

    function f(nn) {
        var an = {};
        return be.each(nn.match(Pe) || [], function (sn, rn) {
            an[rn] = !0
        }), an
    }

    function h() {
        le.removeEventListener("DOMContentLoaded", h), o.removeEventListener("load", h), be.ready()
    }

    function g() {
        this.expando = be.expando + g.uid++
    }

    function y(nn, an, sn) {
        var rn;
        if (void 0 === sn && 1 === nn.nodeType)
            if (rn = "data-" + an.replace(_e, "-$&").toLowerCase(), sn = nn.getAttribute(rn), "string" == typeof sn) {
                try {
                    sn = "true" === sn || "false" !== sn && ("null" === sn ? null : +sn + "" === sn ? +sn : Be.test(sn) ? be.parseJSON(sn) : sn)
                } catch (dn) {}
                Re.set(nn, an, sn)
            } else sn = void 0;
        return sn
    }

    function x(nn, an, sn, rn) {
        var ln = 1,
            pn = 20,
            cn = rn ? function () {
                return rn.cur()
            } : function () {
                return be.css(nn, an, "")
            },
            un = cn(),
            hn = sn && sn[3] || (be.cssNumber[an] ? "" : "px"),
            mn = (be.cssNumber[an] || "px" !== hn && +un) && Xe.exec(be.css(nn, an)),
            dn;
        if (mn && mn[3] !== hn) {
            hn = hn || mn[3], sn = sn || [], mn = +un || 1;
            do ln = ln || ".5", mn /= ln, be.style(nn, an, mn + hn); while (ln != (ln = cn() / un) && 1 != ln && --pn)
        }
        return sn && (mn = +mn || +un || 0, dn = sn[1] ? mn + (sn[1] + 1) * sn[2] : +sn[2], rn && (rn.unit = hn, rn.start = mn, rn.end = dn)), dn
    }

    function T(nn, an) {
        var sn = "undefined" == typeof nn.getElementsByTagName ? "undefined" == typeof nn.querySelectorAll ? [] : nn.querySelectorAll(an || "*") : nn.getElementsByTagName(an || "*");
        return void 0 === an || an && be.nodeName(nn, an) ? be.merge([nn], sn) : sn
    }

    function C(nn, an) {
        for (var sn = 0, rn = nn.length; sn < rn; sn++) We.set(nn[sn], "globalEval", !an || We.get(an[sn], "globalEval"))
    }

    function N(nn, an, sn, rn, dn) {
        for (var gn = an.createDocumentFragment(), yn = [], xn = 0, bn = nn.length, ln, pn, cn, un, hn, mn; xn < bn; xn++)
            if (ln = nn[xn], ln || 0 === ln)
                if ("object" === be.type(ln)) be.merge(yn, ln.nodeType ? [ln] : ln);
                else if (!Je.test(ln)) yn.push(an.createTextNode(ln));
        else {
            for (pn = pn || gn.appendChild(an.createElement("div")), cn = (Ye.exec(ln) || ["", ""])[1].toLowerCase(), un = Qe[cn] || Qe._default, pn.innerHTML = un[1] + be.htmlPrefilter(ln) + un[2], mn = un[0]; mn--;) pn = pn.lastChild;
            be.merge(yn, pn.childNodes), pn = gn.firstChild, pn.textContent = ""
        }
        for (gn.textContent = "", xn = 0; ln = yn[xn++];) {
            if (rn && -1 < be.inArray(ln, rn)) {
                dn && dn.push(ln);
                continue
            }
            if (hn = be.contains(ln.ownerDocument, ln), pn = T(gn.appendChild(ln), "script"), hn && C(pn), sn)
                for (mn = 0; ln = pn[mn++];) Ge.test(ln.type || "") && sn.push(ln)
        }
        return gn
    }

    function k() {
        return !0
    }

    function S() {
        return !1
    }

    function D() {
        try {
            return le.activeElement
        } catch (nn) {}
    }

    function E(nn, an, sn, rn, dn, ln) {
        var pn, cn;
        if ("object" == typeof an) {
            for (cn in "string" != typeof sn && (rn = rn || sn, sn = void 0), an) E(nn, cn, sn, rn, an[cn], ln);
            return nn
        }
        if (null == rn && null == dn ? (dn = sn, rn = sn = void 0) : null == dn && ("string" == typeof sn ? (dn = rn, rn = void 0) : (dn = rn, rn = sn, sn = void 0)), !1 === dn) dn = S;
        else if (!dn) return nn;
        return 1 === ln && (pn = dn, dn = function (un) {
            return be().off(un), pn.apply(this, arguments)
        }, dn.guid = pn.guid || (pn.guid = be.guid++)), nn.each(function () {
            be.event.add(this, an, dn, rn, sn)
        })
    }

    function A(nn, an) {
        return be.nodeName(nn, "table") && be.nodeName(11 === an.nodeType ? an.firstChild : an, "tr") ? nn.getElementsByTagName("tbody")[0] || nn.appendChild(nn.ownerDocument.createElement("tbody")) : nn
    }

    function L(nn) {
        return nn.type = (null !== nn.getAttribute("type")) + "/" + nn.type, nn
    }

    function q(nn) {
        var an = ot.exec(nn.type);
        return an ? nn.type = an[1] : nn.removeAttribute("type"), nn
    }

    function H(nn, an) {
        var sn, rn, dn, ln, pn, cn, un, hn;
        if (1 === an.nodeType) {
            if (We.hasData(nn) && (ln = We.access(nn), pn = We.set(an, ln), hn = ln.events, hn))
                for (dn in delete pn.handle, pn.events = {}, hn)
                    for (sn = 0, rn = hn[dn].length; sn < rn; sn++) be.event.add(an, dn, hn[dn][sn]);
            Re.hasData(nn) && (cn = Re.access(nn), un = be.extend({}, cn), Re.set(an, un))
        }
    }

    function O(nn, an) {
        var sn = an.nodeName.toLowerCase();
        "input" === sn && Ve.test(nn.type) ? an.checked = nn.checked : ("input" === sn || "textarea" === sn) && (an.defaultValue = nn.defaultValue)
    }

    function P(nn, an, sn, rn) {
        an = ce.apply([], an);
        var mn = 0,
            gn = nn.length,
            xn = an[0],
            bn = be.isFunction(xn),
            dn, ln, pn, cn, un, hn;
        if (bn || 1 < gn && "string" == typeof xn && !ye.checkClone && at.test(xn)) return nn.each(function (vn) {
            var Tn = nn.eq(vn);
            bn && (an[0] = xn.call(this, vn, Tn.html())), P(Tn, an, sn, rn)
        });
        if (gn && (dn = N(an, nn[0].ownerDocument, !1, nn, rn), ln = dn.firstChild, 1 === dn.childNodes.length && (dn = ln), ln || rn)) {
            for (pn = be.map(T(dn, "script"), L), cn = pn.length; mn < gn; mn++) un = dn, mn != gn - 1 && (un = be.clone(un, !0, !0), cn && be.merge(pn, T(un, "script"))), sn.call(nn[mn], un, mn);
            if (cn)
                for (hn = pn[pn.length - 1].ownerDocument, be.map(pn, q), mn = 0; mn < cn; mn++) un = pn[mn], Ge.test(un.type || "") && !We.access(un, "globalEval") && be.contains(hn, un) && (un.src ? be._evalUrl && be._evalUrl(un.src) : be.globalEval(un.textContent.replace(st, "")))
        }
        return nn
    }

    function F(nn, an, sn) {
        for (var dn = an ? be.filter(an, nn) : nn, ln = 0, rn; null != (rn = dn[ln]); ln++) sn || 1 !== rn.nodeType || be.cleanData(T(rn)), rn.parentNode && (sn && be.contains(rn.ownerDocument, rn) && C(T(rn, "script")), rn.parentNode.removeChild(rn));
        return nn
    }

    function I(nn, an) {
        var sn = be(an.createElement(nn)).appendTo(an.body),
            rn = be.css(sn[0], "display");
        return sn.detach(), rn
    }

    function M(nn) {
        var an = le,
            sn = rt[nn];
        return sn || (sn = I(nn, an), ("none" === sn || !sn) && (it = (it || be("<iframe frameborder='0' width='0' height='0'/>")).appendTo(an.documentElement), an = it[0].contentDocument, an.write(), an.close(), sn = I(nn, an), it.detach()), rt[nn] = sn), sn
    }

    function W(nn, an, sn) {
        var cn = nn.style,
            rn, dn, ln, pn;
        return sn = sn || pt(nn), pn = sn ? sn.getPropertyValue(an) || sn[an] : void 0, "" !== pn && void 0 != pn || be.contains(nn.ownerDocument, nn) || (pn = be.style(nn, an)), sn && !ye.pixelMarginRight() && lt.test(pn) && dt.test(an) && (rn = cn.width, dn = cn.minWidth, ln = cn.maxWidth, cn.minWidth = cn.maxWidth = cn.width = pn, pn = sn.width, cn.width = rn, cn.minWidth = dn, cn.maxWidth = ln), void 0 == pn ? pn : pn + ""
    }

    function R(nn, an) {
        return {
            get: function () {
                return nn() ? void delete this.get : (this.get = an).apply(this, arguments)
            }
        }
    }

    function B(nn) {
        if (nn in xt) return nn;
        for (var an = nn[0].toUpperCase() + nn.slice(1), sn = yt.length; sn--;)
            if (nn = yt[sn] + an, nn in xt) return nn
    }

    function $(nn, an, sn) {
        var rn = Xe.exec(an);
        return rn ? Math.max(0, rn[2] - (sn || 0)) + (rn[3] || "px") : an
    }

    function X(nn, an, sn, rn, dn) {
        for (var ln = sn === (rn ? "border" : "content") ? 4 : "width" === an ? 1 : 0, pn = 0; 4 > ln; ln += 2) "margin" === sn && (pn += be.css(nn, sn + ze[ln], !0, dn)), rn ? ("content" === sn && (pn -= be.css(nn, "padding" + ze[ln], !0, dn)), "margin" !== sn && (pn -= be.css(nn, "border" + ze[ln] + "Width", !0, dn))) : (pn += be.css(nn, "padding" + ze[ln], !0, dn), "padding" !== sn && (pn += be.css(nn, "border" + ze[ln] + "Width", !0, dn)));
        return pn
    }

    function z(nn, an, sn) {
        var rn = !0,
            dn = "width" === an ? nn.offsetWidth : nn.offsetHeight,
            ln = pt(nn),
            pn = "border-box" === be.css(nn, "boxSizing", !1, ln);
        if (0 >= dn || null == dn) {
            if (dn = W(nn, an, ln), (0 > dn || null == dn) && (dn = nn.style[an]), lt.test(dn)) return dn;
            rn = pn && (ye.boxSizingReliable() || dn === nn.style[an]), dn = parseFloat(dn) || 0
        }
        return dn + X(nn, an, sn || (pn ? "border" : "content"), rn, ln) + "px"
    }

    function U(nn, an) {
        for (var ln = [], pn = 0, cn = nn.length, sn, rn, dn; pn < cn; pn++)(rn = nn[pn], !!rn.style) && (ln[pn] = We.get(rn, "olddisplay"), sn = rn.style.display, an ? (!ln[pn] && "none" === sn && (rn.style.display = ""), "" === rn.style.display && Ue(rn) && (ln[pn] = We.access(rn, "olddisplay", M(rn.nodeName)))) : (dn = Ue(rn), ("none" !== sn || !dn) && We.set(rn, "olddisplay", dn ? sn : be.css(rn, "display"))));
        for (pn = 0; pn < cn; pn++)(rn = nn[pn], !!rn.style) && (an && "none" !== rn.style.display && "" !== rn.style.display || (rn.style.display = an ? ln[pn] || "" : "none"));
        return nn
    }

    function V(nn, an, sn, rn, dn) {
        return new V.prototype.init(nn, an, sn, rn, dn)
    }

    function Y() {
        return o.setTimeout(function () {
            bt = void 0
        }), bt = be.now()
    }

    function G(nn, an) {
        var rn = 0,
            dn = {
                height: nn
            },
            sn;
        for (an = an ? 1 : 0; 4 > rn; rn += 2 - an) sn = ze[rn], dn["margin" + sn] = dn["padding" + sn] = nn;
        return an && (dn.opacity = dn.width = nn), dn
    }

    function Q(nn, an, sn) {
        for (var dn = (Z.tweeners[an] || []).concat(Z.tweeners["*"]), ln = 0, pn = dn.length, rn; ln < pn; ln++)
            if (rn = dn[ln].call(sn, an, nn)) return rn
    }

    function K(nn, an) {
        var sn, rn, dn, ln, pn;
        for (sn in nn)
            if (rn = be.camelCase(sn), dn = an[rn], ln = nn[sn], be.isArray(ln) && (dn = ln[1], ln = nn[sn] = ln[0]), sn != rn && (nn[rn] = ln, delete nn[sn]), pn = be.cssHooks[rn], pn && "expand" in pn)
                for (sn in ln = pn.expand(ln), delete nn[rn], ln) sn in nn || (nn[sn] = ln[sn], an[sn] = dn);
            else an[rn] = dn
    }

    function Z(nn, an, sn) {
        var ln = 0,
            pn = Z.prefilters.length,
            cn = be.Deferred().always(function () {
                delete un.elem
            }),
            un = function () {
                if (dn) return !1;
                for (var gn = bt || Y(), yn = Math.max(0, hn.startTime + hn.duration - gn), xn = yn / hn.duration || 0, bn = 1 - xn, vn = 0, Tn = hn.tweens.length; vn < Tn; vn++) hn.tweens[vn].run(bn);
                return cn.notifyWith(nn, [hn, bn, yn]), 1 > bn && Tn ? yn : (cn.resolveWith(nn, [hn]), !1)
            },
            hn = cn.promise({
                elem: nn,
                props: be.extend({}, an),
                opts: be.extend(!0, {
                    specialEasing: {},
                    easing: be.easing._default
                }, sn),
                originalProperties: an,
                originalOptions: sn,
                startTime: bt || Y(),
                duration: sn.duration,
                tweens: [],
                createTween: function (gn, yn) {
                    var xn = be.Tween(nn, hn.opts, gn, yn, hn.opts.specialEasing[gn] || hn.opts.easing);
                    return hn.tweens.push(xn), xn
                },
                stop: function (gn) {
                    var yn = 0,
                        xn = gn ? hn.tweens.length : 0;
                    if (dn) return this;
                    for (dn = !0; yn < xn; yn++) hn.tweens[yn].run(1);
                    return gn ? (cn.notifyWith(nn, [hn, 1, 0]), cn.resolveWith(nn, [hn, gn])) : cn.rejectWith(nn, [hn, gn]), this
                }
            }),
            mn = hn.props,
            rn, dn;
        for (K(mn, hn.opts.specialEasing); ln < pn; ln++)
            if (rn = Z.prefilters[ln].call(hn, nn, mn, hn.opts), rn) return be.isFunction(rn.stop) && (be._queueHooks(hn.elem, hn.opts.queue).stop = be.proxy(rn.stop, rn)), rn;
        return be.map(mn, Q, hn), be.isFunction(hn.opts.start) && hn.opts.start.call(nn, hn), be.fx.timer(be.extend(un, {
            elem: nn,
            anim: hn,
            queue: hn.opts.queue
        })), hn.progress(hn.opts.progress).done(hn.opts.done, hn.opts.complete).fail(hn.opts.fail).always(hn.opts.always)
    }

    function ee(nn) {
        return nn.getAttribute && nn.getAttribute("class") || ""
    }

    function te(nn) {
        return function (an, sn) {
            "string" != typeof an && (sn = an, an = "*");
            var dn = 0,
                ln = an.toLowerCase().match(Pe) || [],
                rn;
            if (be.isFunction(sn))
                for (; rn = ln[dn++];) "+" === rn[0] ? (rn = rn.slice(1) || "*", (nn[rn] = nn[rn] || []).unshift(sn)) : (nn[rn] = nn[rn] || []).push(sn)
        }
    }

    function ne(nn, an, sn, rn) {
        function dn(cn) {
            var un;
            return ln[cn] = !0, be.each(nn[cn] || [], function (hn, mn) {
                var gn = mn(an, sn, rn);
                return "string" != typeof gn || pn || ln[gn] ? pn ? !(un = gn) : void 0 : (an.dataTypes.unshift(gn), dn(gn), !1)
            }), un
        }
        var ln = {},
            pn = nn === Bt;
        return dn(an.dataTypes[0]) || !ln["*"] && dn("*")
    }

    function ae(nn, an) {
        var dn = be.ajaxSettings.flatOptions || {},
            sn, rn;
        for (sn in an) void 0 !== an[sn] && ((dn[sn] ? nn : rn || (rn = {}))[sn] = an[sn]);
        return rn && be.extend(!0, nn, rn), nn
    }

    function oe(nn, an, sn) {
        for (var cn = nn.contents, un = nn.dataTypes, rn, dn, ln, pn;
            "*" === un[0];) un.shift(), void 0 == rn && (rn = nn.mimeType || an.getResponseHeader("Content-Type"));
        if (rn)
            for (dn in cn)
                if (cn[dn] && cn[dn].test(rn)) {
                    un.unshift(dn);
                    break
                }
        if (un[0] in sn) ln = un[0];
        else {
            for (dn in sn) {
                if (!un[0] || nn.converters[dn + " " + un[0]]) {
                    ln = dn;
                    break
                }
                pn || (pn = dn)
            }
            ln = ln || pn
        }
        return ln ? (ln !== un[0] && un.unshift(ln), sn[ln]) : void 0
    }

    function se(nn, an, sn, rn) {
        var hn = {},
            mn = nn.dataTypes.slice(),
            dn, ln, pn, cn, un;
        if (mn[1])
            for (pn in nn.converters) hn[pn.toLowerCase()] = nn.converters[pn];
        for (ln = mn.shift(); ln;)
            if (nn.responseFields[ln] && (sn[nn.responseFields[ln]] = an), !un && rn && nn.dataFilter && (an = nn.dataFilter(an, nn.dataType)), un = ln, ln = mn.shift(), ln)
                if ("*" === ln) ln = un;
                else if ("*" !== un && un != ln) {
            if (pn = hn[un + " " + ln] || hn["* " + ln], !pn)
                for (dn in hn)
                    if (cn = dn.split(" "), cn[1] === ln && (pn = hn[un + " " + cn[0]] || hn["* " + cn[0]], pn)) {
                        !0 === pn ? pn = hn[dn] : !0 !== hn[dn] && (ln = cn[0], mn.unshift(cn[1]));
                        break
                    }
            if (!0 !== pn)
                if (pn && nn.throws) an = pn(an);
                else try {
                    an = pn(an)
                } catch (gn) {
                    return {
                        state: "parsererror",
                        error: pn ? gn : "No conversion from " + un + " to " + ln
                    }
                }
        }
        return {
            state: "success",
            data: an
        }
    }

    function ie(nn, an, sn, rn) {
        if (be.isArray(an)) be.each(an, function (ln, pn) {
            sn || zt.test(nn) ? rn(nn, pn) : ie(nn + "[" + ("object" == typeof pn && null != pn ? ln : "") + "]", pn, sn, rn)
        });
        else if (!sn && "object" === be.type(an))
            for (var dn in an) ie(nn + "[" + dn + "]", an[dn], sn, rn);
        else rn(nn, an)
    }

    function re(nn) {
        return be.isWindow(nn) ? nn : 9 === nn.nodeType && nn.defaultView
    }
    var de = [],
        le = o.document,
        pe = de.slice,
        ce = de.concat,
        ue = de.push,
        fe = de.indexOf,
        he = {},
        me = he.toString,
        ge = he.hasOwnProperty,
        ye = {},
        xe = "2.2.4",
        be = function (nn, an) {
            return new be.fn.init(nn, an)
        },
        ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Te = /^-ms-/,
        we = /-([\da-z])/gi,
        Ce = function (nn, an) {
            return an.toUpperCase()
        };
    be.fn = be.prototype = {
        jquery: xe,
        constructor: be,
        selector: "",
        length: 0,
        toArray: function () {
            return pe.call(this)
        },
        get: function (nn) {
            return null == nn ? pe.call(this) : 0 > nn ? this[nn + this.length] : this[nn]
        },
        pushStack: function (nn) {
            var an = be.merge(this.constructor(), nn);
            return an.prevObject = this, an.context = this.context, an
        },
        each: function (nn) {
            return be.each(this, nn)
        },
        map: function (nn) {
            return this.pushStack(be.map(this, function (an, sn) {
                return nn.call(an, sn, an)
            }))
        },
        slice: function () {
            return this.pushStack(pe.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (nn) {
            var an = this.length,
                sn = +nn + (0 > nn ? an : 0);
            return this.pushStack(0 <= sn && sn < an ? [this[sn]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ue,
        sort: de.sort,
        splice: de.splice
    }, be.extend = be.fn.extend = function () {
        var pn = arguments[0] || {},
            cn = 1,
            un = arguments.length,
            hn = !1,
            nn, an, sn, rn, dn, ln;
        for ("boolean" == typeof pn && (hn = pn, pn = arguments[cn] || {}, cn++), "object" == typeof pn || be.isFunction(pn) || (pn = {}), cn === un && (pn = this, cn--); cn < un; cn++)
            if (null != (nn = arguments[cn]))
                for (an in nn)(sn = pn[an], rn = nn[an], pn !== rn) && (hn && rn && (be.isPlainObject(rn) || (dn = be.isArray(rn))) ? (dn ? (dn = !1, ln = sn && be.isArray(sn) ? sn : []) : ln = sn && be.isPlainObject(sn) ? sn : {}, pn[an] = be.extend(hn, ln, rn)) : void 0 != rn && (pn[an] = rn));
        return pn
    }, be.extend({
        expando: "jQuery" + (xe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (nn) {
            throw new Error(nn)
        },
        noop: function () {},
        isFunction: function (nn) {
            return "function" === be.type(nn)
        },
        isArray: Array.isArray,
        isWindow: function (nn) {
            return null != nn && nn === nn.window
        },
        isNumeric: function (nn) {
            var an = nn && nn.toString();
            return !be.isArray(nn) && 0 <= an - parseFloat(an) + 1
        },
        isPlainObject: function (nn) {
            if ("object" !== be.type(nn) || nn.nodeType || be.isWindow(nn)) return !1;
            if (nn.constructor && !ge.call(nn, "constructor") && !ge.call(nn.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (var an in nn);
            return void 0 == an || ge.call(nn, an)
        },
        isEmptyObject: function (nn) {
            for (var an in nn) return !1;
            return !0
        },
        type: function (nn) {
            return null == nn ? nn + "" : "object" == typeof nn || "function" == typeof nn ? he[me.call(nn)] || "object" : typeof nn
        },
        globalEval: function (nn) {
            var sn = eval,
                an;
            nn = be.trim(nn), nn && (1 === nn.indexOf("use strict") ? (an = le.createElement("script"), an.text = nn, le.head.appendChild(an).parentNode.removeChild(an)) : sn(nn))
        },
        camelCase: function (nn) {
            return nn.replace(Te, "ms-").replace(we, Ce)
        },
        nodeName: function (nn, an) {
            return nn.nodeName && nn.nodeName.toLowerCase() === an.toLowerCase()
        },
        each: function (nn, an) {
            var rn = 0,
                sn;
            if (d(nn))
                for (sn = nn.length; rn < sn && !1 !== an.call(nn[rn], rn, nn[rn]); rn++);
            else
                for (rn in nn)
                    if (!1 === an.call(nn[rn], rn, nn[rn])) break;
            return nn
        },
        trim: function (nn) {
            return null == nn ? "" : (nn + "").replace(ve, "")
        },
        makeArray: function (nn, an) {
            var sn = an || [];
            return null != nn && (d(Object(nn)) ? be.merge(sn, "string" == typeof nn ? [nn] : nn) : ue.call(sn, nn)), sn
        },
        inArray: function (nn, an, sn) {
            return null == an ? -1 : fe.call(an, nn, sn)
        },
        merge: function (nn, an) {
            for (var sn = +an.length, rn = 0, dn = nn.length; rn < sn; rn++) nn[dn++] = an[rn];
            return nn.length = dn, nn
        },
        grep: function (nn, an, sn) {
            for (var dn = [], ln = 0, pn = nn.length, rn; ln < pn; ln++) rn = !an(nn[ln], ln), rn !== !sn && dn.push(nn[ln]);
            return dn
        },
        map: function (nn, an, sn) {
            var ln = 0,
                pn = [],
                rn, dn;
            if (d(nn))
                for (rn = nn.length; ln < rn; ln++) dn = an(nn[ln], ln, sn), null != dn && pn.push(dn);
            else
                for (ln in nn) dn = an(nn[ln], ln, sn), null != dn && pn.push(dn);
            return ce.apply([], pn)
        },
        guid: 1,
        proxy: function (nn, an) {
            var sn, rn, dn;
            if ("string" == typeof an && (sn = nn[an], an = nn, nn = sn), !!be.isFunction(nn)) return rn = pe.call(arguments, 2), dn = function () {
                return nn.apply(an || this, rn.concat(pe.call(arguments)))
            }, dn.guid = nn.guid = nn.guid || be.guid++, dn
        },
        now: Date.now,
        support: ye
    }), "function" == typeof Symbol && (be.fn[Symbol.iterator] = de[Symbol.iterator]), be.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (nn, an) {
        he["[object " + an + "]"] = an.toLowerCase()
    });
    var Ne = function (nn) {
        function an(Da, Ea, Aa, La) {
            var Ra = Ea && Ea.ownerDocument,
                Ba = Ea ? Ea.nodeType : 9,
                qa, Ha, Oa, Pa, Fa, Ia, Ma, Wa;
            if (Aa = Aa || [], "string" != typeof Da || !Da || 1 !== Ba && 9 !== Ba && 11 !== Ba) return Aa;
            if (!La && ((Ea ? Ea.ownerDocument || Ea : zn) !== In && Fn(Ea), Ea = Ea || In, Wn)) {
                if (11 !== Ba && (Ia = wa.exec(Da)))
                    if (!(qa = Ia[1])) {
                        if (Ia[2]) return aa.apply(Aa, Ea.getElementsByTagName(Da)), Aa;
                        if ((qa = Ia[3]) && Sn.getElementsByClassName && Ea.getElementsByClassName) return aa.apply(Aa, Ea.getElementsByClassName(qa)), Aa
                    } else if (9 === Ba) {
                    if (!(Oa = Ea.getElementById(qa))) return Aa;
                    if (Oa.id === qa) return Aa.push(Oa), Aa
                } else if (Ra && (Oa = Ra.getElementById(qa)) && $n(Ea, Oa) && Oa.id === qa) return Aa.push(Oa), Aa;
                if (Sn.qsa && !Qn[Da + " "] && (!Rn || !Rn.test(Da))) {
                    if (1 !== Ba) Ra = Ea, Wa = Da;
                    else if ("object" !== Ea.nodeName.toLowerCase()) {
                        for ((Pa = Ea.getAttribute("id")) ? Pa = Pa.replace(Na, "\\$&") : Ea.setAttribute("id", Pa = Xn), Ma = An(Da), Ha = Ma.length, Fa = ya.test(Pa) ? "#" + Pa : "[id='" + Pa + "']"; Ha--;) Ma[Ha] = Fa + " " + yn(Ma[Ha]);
                        Wa = Ma.join(","), Ra = Ca.test(Da) && mn(Ea.parentNode) || Ea
                    }
                    if (Wa) try {
                        return aa.apply(Aa, Ra.querySelectorAll(Wa)), Aa
                    } catch (_a) {} finally {
                        Pa === Xn && Ea.removeAttribute("id")
                    }
                }
            }
            return qn(Da.replace(ua, "$1"), Ea, Aa, La)
        }

        function sn() {
            function Da(Aa, La) {
                return Ea.push(Aa + " ") > jn.cacheLength && delete Da[Ea.shift()], Da[Aa + " "] = La
            }
            var Ea = [];
            return Da
        }

        function rn(Da) {
            return Da[Xn] = !0, Da
        }

        function dn(Da) {
            var Ea = In.createElement("div");
            try {
                return !!Da(Ea)
            } catch (Aa) {
                return !1
            } finally {
                Ea.parentNode && Ea.parentNode.removeChild(Ea), Ea = null
            }
        }

        function ln(Da, Ea) {
            for (var Aa = Da.split("|"), La = Aa.length; La--;) jn.attrHandle[Aa[La]] = Ea
        }

        function pn(Da, Ea) {
            var Aa = Ea && Da,
                La = Aa && 1 === Da.nodeType && 1 === Ea.nodeType && (~Ea.sourceIndex || Kn) - (~Da.sourceIndex || Kn);
            if (La) return La;
            if (Aa)
                for (; Aa = Aa.nextSibling;)
                    if (Aa === Ea) return -1;
            return Da ? 1 : -1
        }

        function cn(Da) {
            return function (Ea) {
                var Aa = Ea.nodeName.toLowerCase();
                return "input" === Aa && Ea.type === Da
            }
        }

        function un(Da) {
            return function (Ea) {
                var Aa = Ea.nodeName.toLowerCase();
                return ("input" === Aa || "button" === Aa) && Ea.type === Da
            }
        }

        function hn(Da) {
            return rn(function (Ea) {
                return Ea = +Ea, rn(function (Aa, La) {
                    for (var Ha = Da([], Aa.length, Ea), Oa = Ha.length, qa; Oa--;) Aa[qa = Ha[Oa]] && (Aa[qa] = !(La[qa] = Aa[qa]))
                })
            })
        }

        function mn(Da) {
            return Da && "undefined" != typeof Da.getElementsByTagName && Da
        }

        function gn() {}

        function yn(Da) {
            for (var Ea = 0, Aa = Da.length, La = ""; Ea < Aa; Ea++) La += Da[Ea].value;
            return La
        }

        function xn(Da, Ea, Aa) {
            var La = Ea.dir,
                qa = Aa && "parentNode" === La,
                Ha = Vn++;
            return Ea.first ? function (Oa, Pa, Fa) {
                for (; Oa = Oa[La];)
                    if (1 === Oa.nodeType || qa) return Da(Oa, Pa, Fa)
            } : function (Oa, Pa, Fa) {
                var Ra = [Un, Ha],
                    Ia, Ma, Wa;
                if (Fa) {
                    for (; Oa = Oa[La];)
                        if ((1 === Oa.nodeType || qa) && Da(Oa, Pa, Fa)) return !0;
                } else
                    for (; Oa = Oa[La];)
                        if (1 === Oa.nodeType || qa) {
                            if (Wa = Oa[Xn] || (Oa[Xn] = {}), Ma = Wa[Oa.uniqueID] || (Wa[Oa.uniqueID] = {}), (Ia = Ma[La]) && Ia[0] === Un && Ia[1] === Ha) return Ra[2] = Ia[2];
                            if (Ma[La] = Ra, Ra[2] = Da(Oa, Pa, Fa)) return !0
                        }
            }
        }

        function bn(Da) {
            return 1 < Da.length ? function (Ea, Aa, La) {
                for (var qa = Da.length; qa--;)
                    if (!Da[qa](Ea, Aa, La)) return !1;
                return !0
            } : Da[0]
        }

        function vn(Da, Ea, Aa) {
            for (var La = 0, qa = Ea.length; La < qa; La++) an(Da, Ea[La], Aa);
            return Aa
        }

        function Tn(Da, Ea, Aa, La, qa) {
            for (var Oa = [], Pa = 0, Fa = Da.length, Ha; Pa < Fa; Pa++)(Ha = Da[Pa]) && (!Aa || Aa(Ha, La, qa)) && (Oa.push(Ha), null != Ea && Ea.push(Pa));
            return Oa
        }

        function wn(Da, Ea, Aa, La, qa, Ha) {
            return La && !La[Xn] && (La = wn(La)), qa && !qa[Xn] && (qa = wn(qa, Ha)), rn(function (Oa, Pa, Fa, Ia) {
                var Ba = [],
                    _a = [],
                    $a = Pa.length,
                    Xa = Oa || vn(Ea || "*", Fa.nodeType ? [Fa] : Fa, []),
                    za = Da && (Oa || !Ea) ? Tn(Xa, Ba, Da, Fa, Ia) : Xa,
                    Ua = Aa ? qa || (Oa ? Da : $a || La) ? [] : Pa : za,
                    Ma, Wa, Ra;
                if (Aa && Aa(za, Ua, Fa, Ia), La)
                    for (Ma = Tn(Ua, _a), La(Ma, [], Fa, Ia), Wa = Ma.length; Wa--;)(Ra = Ma[Wa]) && (Ua[_a[Wa]] = !(za[_a[Wa]] = Ra));
                if (!Oa) Ua = Tn(Ua === Pa ? Ua.splice($a, Ua.length) : Ua), qa ? qa(null, Pa, Ua, Ia) : aa.apply(Pa, Ua);
                else if (qa || Da) {
                    if (qa) {
                        for (Ma = [], Wa = Ua.length; Wa--;)(Ra = Ua[Wa]) && Ma.push(za[Wa] = Ra);
                        qa(null, Ua = [], Ma, Ia)
                    }
                    for (Wa = Ua.length; Wa--;)(Ra = Ua[Wa]) && -1 < (Ma = qa ? sa(Oa, Ra) : Ba[Wa]) && (Oa[Ma] = !(Pa[Ma] = Ra))
                }
            })
        }

        function Cn(Da) {
            for (var qa = Da.length, Ha = jn.relative[Da[0].type], Oa = Ha || jn.relative[" "], Pa = Ha ? 1 : 0, Fa = xn(function (Wa) {
                    return Wa === Ea
                }, Oa, !0), Ia = xn(function (Wa) {
                    return -1 < sa(Ea, Wa)
                }, Oa, !0), Ma = [function (Wa, Ra, Ba) {
                    var _a = !Ha && (Ba || Ra !== Hn) || ((Ea = Ra).nodeType ? Fa(Wa, Ra, Ba) : Ia(Wa, Ra, Ba));
                    return Ea = null, _a
                }], Ea, Aa, La; Pa < qa; Pa++)
                if (Aa = jn.relative[Da[Pa].type]) Ma = [xn(bn(Ma), Aa)];
                else {
                    if (Aa = jn.filter[Da[Pa].type].apply(null, Da[Pa].matches), Aa[Xn]) {
                        for (La = ++Pa; La < qa && !jn.relative[Da[La].type]; La++);
                        return wn(1 < Pa && bn(Ma), 1 < Pa && yn(Da.slice(0, Pa - 1).concat({
                            value: " " === Da[Pa - 2].type ? "*" : ""
                        })).replace(ua, "$1"), Aa, Pa < La && Cn(Da.slice(Pa, La)), La < qa && Cn(Da = Da.slice(La)), La < qa && yn(Da))
                    }
                    Ma.push(Aa)
                }
            return bn(Ma)
        }

        function Nn(Da, Ea) {
            var Aa = 0 < Ea.length,
                La = 0 < Da.length,
                qa = function (Ha, Oa, Pa, Fa, Ia) {
                    var Ba = 0,
                        _a = "0",
                        $a = Ha && [],
                        Xa = [],
                        za = Hn,
                        Ua = Ha || La && jn.find.TAG("*", Ia),
                        Va = Un += null == za ? 1 : Math.random() || 0.1,
                        Ya = Ua.length,
                        Ma, Wa, Ra;
                    for (Ia && (Hn = Oa === In || Oa || Ia); _a !== Ya && null != (Ma = Ua[_a]); _a++) {
                        if (La && Ma) {
                            for (Wa = 0, Oa || Ma.ownerDocument === In || (Fn(Ma), Pa = !Wn); Ra = Da[Wa++];)
                                if (Ra(Ma, Oa || In, Pa)) {
                                    Fa.push(Ma);
                                    break
                                }
                            Ia && (Un = Va)
                        }
                        Aa && ((Ma = !Ra && Ma) && Ba--, Ha && $a.push(Ma))
                    }
                    if (Ba += _a, Aa && _a !== Ba) {
                        for (Wa = 0; Ra = Ea[Wa++];) Ra($a, Xa, Oa, Pa);
                        if (Ha) {
                            if (0 < Ba)
                                for (; _a--;) $a[_a] || Xa[_a] || (Xa[_a] = ta.call(Fa));
                            Xa = Tn(Xa)
                        }
                        aa.apply(Fa, Xa), Ia && !Ha && 0 < Xa.length && 1 < Ba + Ea.length && an.uniqueSort(Fa)
                    }
                    return Ia && (Un = Va, Hn = za), $a
                };
            return Aa ? rn(qa) : qa
        }
        var Xn = "sizzle" + 1 * new Date,
            zn = nn.document,
            Un = 0,
            Vn = 0,
            Yn = sn(),
            Gn = sn(),
            Qn = sn(),
            Jn = function (Da, Ea) {
                return Da === Ea && (Pn = !0), 0
            },
            Kn = -2147483648,
            Zn = {}.hasOwnProperty,
            ea = [],
            ta = ea.pop,
            na = ea.push,
            aa = ea.push,
            oa = ea.slice,
            sa = function (Da, Ea) {
                for (var Aa = 0, La = Da.length; Aa < La; Aa++)
                    if (Da[Aa] === Ea) return Aa;
                return -1
            },
            ia = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ra = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ca = /[\x20\t\r\n\f]+/g,
            ua = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            fa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ha = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ma = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            ga = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            ya = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            xa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            ba = /^(?:input|select|textarea|button)$/i,
            va = /^h\d$/i,
            Ta = /^[^{]+\{\s*\[native \w/,
            wa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Ca = /[+~]/,
            Na = /'|\\/g,
            ka = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            Sa = function (Da, Ea, Aa) {
                var La = "0x" + Ea - 65536;
                return La != La || Aa ? Ea : 0 > La ? String.fromCharCode(La + 65536) : String.fromCharCode(55296 | La >> 10, 56320 | 1023 & La)
            },
            ja = function () {
                Fn()
            },
            kn, Sn, jn, Dn, En, An, Ln, qn, Hn, On, Pn, Fn, In, Mn, Wn, Rn, Bn, _n, $n;
        try {
            aa.apply(ea = oa.call(zn.childNodes), zn.childNodes), ea[zn.childNodes.length].nodeType
        } catch (Da) {
            aa = {
                apply: ea.length ? function (Ea, Aa) {
                    na.apply(Ea, oa.call(Aa))
                } : function (Ea, Aa) {
                    for (var La = Ea.length, qa = 0; Ea[La++] = Aa[qa++];);
                    Ea.length = La - 1
                }
            }
        }
        for (kn in Sn = an.support = {}, En = an.isXML = function (Da) {
                var Ea = Da && (Da.ownerDocument || Da).documentElement;
                return !!Ea && "HTML" !== Ea.nodeName
            }, Fn = an.setDocument = function (Da) {
                var La = Da ? Da.ownerDocument || Da : zn,
                    Ea, Aa;
                return La !== In && 9 === La.nodeType && La.documentElement ? (In = La, Mn = In.documentElement, Wn = !En(In), (Aa = In.defaultView) && Aa.top !== Aa && (Aa.addEventListener ? Aa.addEventListener("unload", ja, !1) : Aa.attachEvent && Aa.attachEvent("onunload", ja)), Sn.attributes = dn(function (qa) {
                    return qa.className = "i", !qa.getAttribute("className")
                }), Sn.getElementsByTagName = dn(function (qa) {
                    return qa.appendChild(In.createComment("")), !qa.getElementsByTagName("*").length
                }), Sn.getElementsByClassName = Ta.test(In.getElementsByClassName), Sn.getById = dn(function (qa) {
                    return Mn.appendChild(qa).id = Xn, !In.getElementsByName || !In.getElementsByName(Xn).length
                }), Sn.getById ? (jn.find.ID = function (qa, Ha) {
                    if ("undefined" != typeof Ha.getElementById && Wn) {
                        var Oa = Ha.getElementById(qa);
                        return Oa ? [Oa] : []
                    }
                }, jn.filter.ID = function (qa) {
                    var Ha = qa.replace(ka, Sa);
                    return function (Oa) {
                        return Oa.getAttribute("id") === Ha
                    }
                }) : (delete jn.find.ID, jn.filter.ID = function (qa) {
                    var Ha = qa.replace(ka, Sa);
                    return function (Oa) {
                        var Pa = "undefined" != typeof Oa.getAttributeNode && Oa.getAttributeNode("id");
                        return Pa && Pa.value === Ha
                    }
                }), jn.find.TAG = Sn.getElementsByTagName ? function (qa, Ha) {
                    return "undefined" == typeof Ha.getElementsByTagName ? Sn.qsa ? Ha.querySelectorAll(qa) : void 0 : Ha.getElementsByTagName(qa)
                } : function (qa, Ha) {
                    var Pa = [],
                        Fa = 0,
                        Ia = Ha.getElementsByTagName(qa),
                        Oa;
                    if ("*" === qa) {
                        for (; Oa = Ia[Fa++];) 1 === Oa.nodeType && Pa.push(Oa);
                        return Pa
                    }
                    return Ia
                }, jn.find.CLASS = Sn.getElementsByClassName && function (qa, Ha) {
                    if ("undefined" != typeof Ha.getElementsByClassName && Wn) return Ha.getElementsByClassName(qa)
                }, Bn = [], Rn = [], (Sn.qsa = Ta.test(In.querySelectorAll)) && (dn(function (qa) {
                    Mn.appendChild(qa).innerHTML = "<a id='" + Xn + "'></a><select id='" + Xn + "-\r\\' msallowcapture=''><option selected=''></option></select>", qa.querySelectorAll("[msallowcapture^='']").length && Rn.push("[*^$]=" + ra + "*(?:''|\"\")"), qa.querySelectorAll("[selected]").length || Rn.push("\\[" + ra + "*(?:value|" + ia + ")"), qa.querySelectorAll("[id~=" + Xn + "-]").length || Rn.push("~="), qa.querySelectorAll(":checked").length || Rn.push(":checked"), qa.querySelectorAll("a#" + Xn + "+*").length || Rn.push(".#.+[+~]")
                }), dn(function (qa) {
                    var Ha = In.createElement("input");
                    Ha.setAttribute("type", "hidden"), qa.appendChild(Ha).setAttribute("name", "D"), qa.querySelectorAll("[name=d]").length && Rn.push("name" + ra + "*[*^$|!~]?="), qa.querySelectorAll(":enabled").length || Rn.push(":enabled", ":disabled"), qa.querySelectorAll("*,:x"), Rn.push(",.*:")
                })), (Sn.matchesSelector = Ta.test(_n = Mn.matches || Mn.webkitMatchesSelector || Mn.mozMatchesSelector || Mn.oMatchesSelector || Mn.msMatchesSelector)) && dn(function (qa) {
                    Sn.disconnectedMatch = _n.call(qa, "div"), _n.call(qa, "[s!='']:x"), Bn.push("!=", ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + ra + "*(" + da + ")(?:" + ra + "*([*^$|!~]?=)" + ra + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ra + "*\\]") + ")*)|.*)\\)|)")
                }), Rn = Rn.length && new RegExp(Rn.join("|")), Bn = Bn.length && new RegExp(Bn.join("|")), Ea = Ta.test(Mn.compareDocumentPosition), $n = Ea || Ta.test(Mn.contains) ? function (qa, Ha) {
                    var Oa = 9 === qa.nodeType ? qa.documentElement : qa,
                        Pa = Ha && Ha.parentNode;
                    return qa === Pa || !!(Pa && 1 === Pa.nodeType && (Oa.contains ? Oa.contains(Pa) : qa.compareDocumentPosition && 16 & qa.compareDocumentPosition(Pa)))
                } : function (qa, Ha) {
                    if (Ha)
                        for (; Ha = Ha.parentNode;)
                            if (Ha === qa) return !0;
                    return !1
                }, Jn = Ea ? function (qa, Ha) {
                    if (qa === Ha) return Pn = !0, 0;
                    var Oa = !qa.compareDocumentPosition - !Ha.compareDocumentPosition;
                    return Oa ? Oa : (Oa = (qa.ownerDocument || qa) === (Ha.ownerDocument || Ha) ? qa.compareDocumentPosition(Ha) : 1, 1 & Oa || !Sn.sortDetached && Ha.compareDocumentPosition(qa) === Oa ? qa === In || qa.ownerDocument === zn && $n(zn, qa) ? -1 : Ha === In || Ha.ownerDocument === zn && $n(zn, Ha) ? 1 : On ? sa(On, qa) - sa(On, Ha) : 0 : 4 & Oa ? -1 : 1)
                } : function (qa, Ha) {
                    if (qa === Ha) return Pn = !0, 0;
                    var Pa = 0,
                        Fa = qa.parentNode,
                        Ia = Ha.parentNode,
                        Ma = [qa],
                        Wa = [Ha],
                        Oa;
                    if (!Fa || !Ia) return qa === In ? -1 : Ha === In ? 1 : Fa ? -1 : Ia ? 1 : On ? sa(On, qa) - sa(On, Ha) : 0;
                    if (Fa === Ia) return pn(qa, Ha);
                    for (Oa = qa; Oa = Oa.parentNode;) Ma.unshift(Oa);
                    for (Oa = Ha; Oa = Oa.parentNode;) Wa.unshift(Oa);
                    for (; Ma[Pa] === Wa[Pa];) Pa++;
                    return Pa ? pn(Ma[Pa], Wa[Pa]) : Ma[Pa] === zn ? -1 : Wa[Pa] === zn ? 1 : 0
                }, In) : In
            }, an.matches = function (Da, Ea) {
                return an(Da, null, null, Ea)
            }, an.matchesSelector = function (Da, Ea) {
                if ((Da.ownerDocument || Da) !== In && Fn(Da), Ea = Ea.replace(ma, "='$1']"), Sn.matchesSelector && Wn && !Qn[Ea + " "] && (!Bn || !Bn.test(Ea)) && (!Rn || !Rn.test(Ea))) try {
                    var Aa = _n.call(Da, Ea);
                    if (Aa || Sn.disconnectedMatch || Da.document && 11 !== Da.document.nodeType) return Aa
                } catch (La) {}
                return 0 < an(Ea, In, null, [Da]).length
            }, an.contains = function (Da, Ea) {
                return (Da.ownerDocument || Da) !== In && Fn(Da), $n(Da, Ea)
            }, an.attr = function (Da, Ea) {
                (Da.ownerDocument || Da) !== In && Fn(Da);
                var Aa = jn.attrHandle[Ea.toLowerCase()],
                    La = Aa && Zn.call(jn.attrHandle, Ea.toLowerCase()) ? Aa(Da, Ea, !Wn) : void 0;
                return void 0 === La ? Sn.attributes || !Wn ? Da.getAttribute(Ea) : (La = Da.getAttributeNode(Ea)) && La.specified ? La.value : null : La
            }, an.error = function (Da) {
                throw new Error("Syntax error, unrecognized expression: " + Da)
            }, an.uniqueSort = function (Da) {
                var Aa = [],
                    La = 0,
                    qa = 0,
                    Ea;
                if (Pn = !Sn.detectDuplicates, On = !Sn.sortStable && Da.slice(0), Da.sort(Jn), Pn) {
                    for (; Ea = Da[qa++];) Ea === Da[qa] && (La = Aa.push(qa));
                    for (; La--;) Da.splice(Aa[La], 1)
                }
                return On = null, Da
            }, Dn = an.getText = function (Da) {
                var Aa = "",
                    La = 0,
                    qa = Da.nodeType,
                    Ea;
                if (!qa)
                    for (; Ea = Da[La++];) Aa += Dn(Ea);
                else if (1 === qa || 9 === qa || 11 === qa) {
                    if ("string" == typeof Da.textContent) return Da.textContent;
                    for (Da = Da.firstChild; Da; Da = Da.nextSibling) Aa += Dn(Da)
                } else if (3 === qa || 4 === qa) return Da.nodeValue;
                return Aa
            }, jn = an.selectors = {
                cacheLength: 50,
                createPseudo: rn,
                match: xa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (Da) {
                        return Da[1] = Da[1].replace(ka, Sa), Da[3] = (Da[3] || Da[4] || Da[5] || "").replace(ka, Sa), "~=" === Da[2] && (Da[3] = " " + Da[3] + " "), Da.slice(0, 4)
                    },
                    CHILD: function (Da) {
                        return Da[1] = Da[1].toLowerCase(), "nth" === Da[1].slice(0, 3) ? (!Da[3] && an.error(Da[0]), Da[4] = +(Da[4] ? Da[5] + (Da[6] || 1) : 2 * ("even" === Da[3] || "odd" === Da[3])), Da[5] = +(Da[7] + Da[8] || "odd" === Da[3])) : Da[3] && an.error(Da[0]), Da
                    },
                    PSEUDO: function (Da) {
                        var Aa = !Da[6] && Da[2],
                            Ea;
                        return xa.CHILD.test(Da[0]) ? null : (Da[3] ? Da[2] = Da[4] || Da[5] || "" : Aa && ga.test(Aa) && (Ea = An(Aa, !0)) && (Ea = Aa.indexOf(")", Aa.length - Ea) - Aa.length) && (Da[0] = Da[0].slice(0, Ea), Da[2] = Aa.slice(0, Ea)), Da.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (Da) {
                        var Ea = Da.replace(ka, Sa).toLowerCase();
                        return "*" === Da ? function () {
                            return !0
                        } : function (Aa) {
                            return Aa.nodeName && Aa.nodeName.toLowerCase() === Ea
                        }
                    },
                    CLASS: function (Da) {
                        var Ea = Yn[Da + " "];
                        return Ea || (Ea = new RegExp("(^|" + ra + ")" + Da + "(" + ra + "|$)")) && Yn(Da, function (Aa) {
                            return Ea.test("string" == typeof Aa.className && Aa.className || "undefined" != typeof Aa.getAttribute && Aa.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (Da, Ea, Aa) {
                        return function (La) {
                            var qa = an.attr(La, Da);
                            return null == qa ? "!=" === Ea : !Ea || (qa += "", "=" === Ea ? qa === Aa : "!=" === Ea ? qa !== Aa : "^=" === Ea ? Aa && 0 === qa.indexOf(Aa) : "*=" === Ea ? Aa && -1 < qa.indexOf(Aa) : "$=" === Ea ? Aa && qa.slice(-Aa.length) === Aa : "~=" === Ea ? -1 < (" " + qa.replace(ca, " ") + " ").indexOf(Aa) : "|=" == Ea && (qa === Aa || qa.slice(0, Aa.length + 1) === Aa + "-"))
                        }
                    },
                    CHILD: function (Da, Ea, Aa, La, qa) {
                        var Ha = "nth" !== Da.slice(0, 3),
                            Oa = "last" !== Da.slice(-4),
                            Pa = "of-type" === Ea;
                        return 1 === La && 0 === qa ? function (Fa) {
                            return !!Fa.parentNode
                        } : function (Fa, Ia, Ma) {
                            var za = Ha == Oa ? "previousSibling" : "nextSibling",
                                Ua = Fa.parentNode,
                                Va = Pa && Fa.nodeName.toLowerCase(),
                                Ya = !Ma && !Pa,
                                Ga = !1,
                                Wa, Ra, Ba, _a, $a, Xa;
                            if (Ua) {
                                if (Ha) {
                                    for (; za;) {
                                        for (_a = Fa; _a = _a[za];)
                                            if (Pa ? _a.nodeName.toLowerCase() === Va : 1 === _a.nodeType) return !1;
                                        Xa = za = "only" === Da && !Xa && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Xa = [Oa ? Ua.firstChild : Ua.lastChild], Oa && Ya) {
                                    for (_a = Ua, Ba = _a[Xn] || (_a[Xn] = {}), Ra = Ba[_a.uniqueID] || (Ba[_a.uniqueID] = {}), Wa = Ra[Da] || [], $a = Wa[0] === Un && Wa[1], Ga = $a && Wa[2], _a = $a && Ua.childNodes[$a]; _a = ++$a && _a && _a[za] || (Ga = $a = 0) || Xa.pop();)
                                        if (1 === _a.nodeType && ++Ga && _a === Fa) {
                                            Ra[Da] = [Un, $a, Ga];
                                            break
                                        }
                                } else if (Ya && (_a = Fa, Ba = _a[Xn] || (_a[Xn] = {}), Ra = Ba[_a.uniqueID] || (Ba[_a.uniqueID] = {}), Wa = Ra[Da] || [], $a = Wa[0] === Un && Wa[1], Ga = $a), !1 == Ga)
                                    for (;
                                        (_a = ++$a && _a && _a[za] || (Ga = $a = 0) || Xa.pop()) && !((Pa ? _a.nodeName.toLowerCase() === Va : 1 === _a.nodeType) && ++Ga && (Ya && (Ba = _a[Xn] || (_a[Xn] = {}), Ra = Ba[_a.uniqueID] || (Ba[_a.uniqueID] = {}), Ra[Da] = [Un, Ga]), _a === Fa)););
                                return Ga -= qa, Ga === La || 0 == Ga % La && 0 <= Ga / La
                            }
                        }
                    },
                    PSEUDO: function (Da, Ea) {
                        var La = jn.pseudos[Da] || jn.setFilters[Da.toLowerCase()] || an.error("unsupported pseudo: " + Da),
                            Aa;
                        return La[Xn] ? La(Ea) : 1 < La.length ? (Aa = [Da, Da, "", Ea], jn.setFilters.hasOwnProperty(Da.toLowerCase()) ? rn(function (qa, Ha) {
                            for (var Pa = La(qa, Ea), Fa = Pa.length, Oa; Fa--;) Oa = sa(qa, Pa[Fa]), qa[Oa] = !(Ha[Oa] = Pa[Fa])
                        }) : function (qa) {
                            return La(qa, 0, Aa)
                        }) : La
                    }
                },
                pseudos: {
                    not: rn(function (Da) {
                        var Ea = [],
                            Aa = [],
                            La = Ln(Da.replace(ua, "$1"));
                        return La[Xn] ? rn(function (qa, Ha, Oa, Pa) {
                            for (var Ia = La(qa, null, Pa, []), Ma = qa.length, Fa; Ma--;)(Fa = Ia[Ma]) && (qa[Ma] = !(Ha[Ma] = Fa))
                        }) : function (qa, Ha, Oa) {
                            return Ea[0] = qa, La(Ea, null, Oa, Aa), Ea[0] = null, !Aa.pop()
                        }
                    }),
                    has: rn(function (Da) {
                        return function (Ea) {
                            return 0 < an(Da, Ea).length
                        }
                    }),
                    contains: rn(function (Da) {
                        return Da = Da.replace(ka, Sa),
                            function (Ea) {
                                return -1 < (Ea.textContent || Ea.innerText || Dn(Ea)).indexOf(Da)
                            }
                    }),
                    lang: rn(function (Da) {
                        return ya.test(Da || "") || an.error("unsupported lang: " + Da), Da = Da.replace(ka, Sa).toLowerCase(),
                            function (Ea) {
                                var Aa;
                                do
                                    if (Aa = Wn ? Ea.lang : Ea.getAttribute("xml:lang") || Ea.getAttribute("lang")) return Aa = Aa.toLowerCase(), Aa === Da || 0 === Aa.indexOf(Da + "-"); while ((Ea = Ea.parentNode) && 1 === Ea.nodeType);
                                return !1
                            }
                    }),
                    target: function (Da) {
                        var Ea = nn.location && nn.location.hash;
                        return Ea && Ea.slice(1) === Da.id
                    },
                    root: function (Da) {
                        return Da === Mn
                    },
                    focus: function (Da) {
                        return Da === In.activeElement && (!In.hasFocus || In.hasFocus()) && !!(Da.type || Da.href || ~Da.tabIndex)
                    },
                    enabled: function (Da) {
                        return !1 === Da.disabled
                    },
                    disabled: function (Da) {
                        return !0 === Da.disabled
                    },
                    checked: function (Da) {
                        var Ea = Da.nodeName.toLowerCase();
                        return "input" === Ea && !!Da.checked || "option" === Ea && !!Da.selected
                    },
                    selected: function (Da) {
                        return Da.parentNode && Da.parentNode.selectedIndex, !0 === Da.selected
                    },
                    empty: function (Da) {
                        for (Da = Da.firstChild; Da; Da = Da.nextSibling)
                            if (6 > Da.nodeType) return !1;
                        return !0
                    },
                    parent: function (Da) {
                        return !jn.pseudos.empty(Da)
                    },
                    header: function (Da) {
                        return va.test(Da.nodeName)
                    },
                    input: function (Da) {
                        return ba.test(Da.nodeName)
                    },
                    button: function (Da) {
                        var Ea = Da.nodeName.toLowerCase();
                        return "input" === Ea && "button" === Da.type || "button" === Ea
                    },
                    text: function (Da) {
                        var Ea;
                        return "input" === Da.nodeName.toLowerCase() && "text" === Da.type && (null == (Ea = Da.getAttribute("type")) || "text" === Ea.toLowerCase())
                    },
                    first: hn(function () {
                        return [0]
                    }),
                    last: hn(function (Da, Ea) {
                        return [Ea - 1]
                    }),
                    eq: hn(function (Da, Ea, Aa) {
                        return [0 > Aa ? Aa + Ea : Aa]
                    }),
                    even: hn(function (Da, Ea) {
                        for (var Aa = 0; Aa < Ea; Aa += 2) Da.push(Aa);
                        return Da
                    }),
                    odd: hn(function (Da, Ea) {
                        for (var Aa = 1; Aa < Ea; Aa += 2) Da.push(Aa);
                        return Da
                    }),
                    lt: hn(function (Da, Ea, Aa) {
                        for (var La = 0 > Aa ? Aa + Ea : Aa; 0 <= --La;) Da.push(La);
                        return Da
                    }),
                    gt: hn(function (Da, Ea, Aa) {
                        for (var La = 0 > Aa ? Aa + Ea : Aa; ++La < Ea;) Da.push(La);
                        return Da
                    })
                }
            }, jn.pseudos.nth = jn.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) jn.pseudos[kn] = cn(kn);
        for (kn in {
                submit: !0,
                reset: !0
            }) jn.pseudos[kn] = un(kn);
        return gn.prototype = jn.filters = jn.pseudos, jn.setFilters = new gn, An = an.tokenize = function (Da, Ea) {
            var Ia = Gn[Da + " "],
                Aa, La, qa, Ha, Oa, Pa, Fa;
            if (Ia) return Ea ? 0 : Ia.slice(0);
            for (Oa = Da, Pa = [], Fa = jn.preFilter; Oa;) {
                for (Ha in (!Aa || (La = fa.exec(Oa))) && (La && (Oa = Oa.slice(La[0].length) || Oa), Pa.push(qa = [])), Aa = !1, (La = ha.exec(Oa)) && (Aa = La.shift(), qa.push({
                        value: Aa,
                        type: La[0].replace(ua, " ")
                    }), Oa = Oa.slice(Aa.length)), jn.filter)(La = xa[Ha].exec(Oa)) && (!Fa[Ha] || (La = Fa[Ha](La))) && (Aa = La.shift(), qa.push({
                    value: Aa,
                    type: Ha,
                    matches: La
                }), Oa = Oa.slice(Aa.length));
                if (!Aa) break
            }
            return Ea ? Oa.length : Oa ? an.error(Da) : Gn(Da, Pa).slice(0)
        }, Ln = an.compile = function (Da, Ea) {
            var La = [],
                qa = [],
                Ha = Qn[Da + " "],
                Aa;
            if (!Ha) {
                for (Ea || (Ea = An(Da)), Aa = Ea.length; Aa--;) Ha = Cn(Ea[Aa]), Ha[Xn] ? La.push(Ha) : qa.push(Ha);
                Ha = Qn(Da, Nn(qa, La)), Ha.selector = Da
            }
            return Ha
        }, qn = an.select = function (Da, Ea, Aa, La) {
            var Ia = "function" == typeof Da && Da,
                Ma = !La && An(Da = Ia.selector || Da),
                qa, Ha, Oa, Pa, Fa;
            if (Aa = Aa || [], 1 === Ma.length) {
                if (Ha = Ma[0] = Ma[0].slice(0), 2 < Ha.length && "ID" === (Oa = Ha[0]).type && Sn.getById && 9 === Ea.nodeType && Wn && jn.relative[Ha[1].type]) {
                    if (Ea = (jn.find.ID(Oa.matches[0].replace(ka, Sa), Ea) || [])[0], !Ea) return Aa;
                    Ia && (Ea = Ea.parentNode), Da = Da.slice(Ha.shift().value.length)
                }
                for (qa = xa.needsContext.test(Da) ? 0 : Ha.length; qa-- && (Oa = Ha[qa], !jn.relative[Pa = Oa.type]);)
                    if ((Fa = jn.find[Pa]) && (La = Fa(Oa.matches[0].replace(ka, Sa), Ca.test(Ha[0].type) && mn(Ea.parentNode) || Ea))) {
                        if (Ha.splice(qa, 1), Da = La.length && yn(Ha), !Da) return aa.apply(Aa, La), Aa;
                        break
                    }
            }
            return (Ia || Ln(Da, Ma))(La, Ea, !Wn, Aa, !Ea || Ca.test(Da) && mn(Ea.parentNode) || Ea), Aa
        }, Sn.sortStable = Xn.split("").sort(Jn).join("") === Xn, Sn.detectDuplicates = !!Pn, Fn(), Sn.sortDetached = dn(function (Da) {
            return 1 & Da.compareDocumentPosition(In.createElement("div"))
        }), dn(function (Da) {
            return Da.innerHTML = "<a href='#'></a>", "#" === Da.firstChild.getAttribute("href")
        }) || ln("type|href|height|width", function (Da, Ea, Aa) {
            if (!Aa) return Da.getAttribute(Ea, "type" === Ea.toLowerCase() ? 1 : 2)
        }), Sn.attributes && dn(function (Da) {
            return Da.innerHTML = "<input/>", Da.firstChild.setAttribute("value", ""), "" === Da.firstChild.getAttribute("value")
        }) || ln("value", function (Da, Ea, Aa) {
            if (!Aa && "input" === Da.nodeName.toLowerCase()) return Da.defaultValue
        }), dn(function (Da) {
            return null == Da.getAttribute("disabled")
        }) || ln(ia, function (Da, Ea, Aa) {
            var La;
            if (!Aa) return !0 === Da[Ea] ? Ea.toLowerCase() : (La = Da.getAttributeNode(Ea)) && La.specified ? La.value : null
        }), an
    }(o);
    be.find = Ne, be.expr = Ne.selectors, be.expr[":"] = be.expr.pseudos, be.uniqueSort = be.unique = Ne.uniqueSort, be.text = Ne.getText, be.isXMLDoc = Ne.isXML, be.contains = Ne.contains;
    var ke = function (nn, an, sn) {
            for (var rn = [];
                (nn = nn[an]) && 9 !== nn.nodeType;)
                if (1 === nn.nodeType) {
                    if (void 0 !== sn && be(nn).is(sn)) break;
                    rn.push(nn)
                }
            return rn
        },
        Se = function (nn, an) {
            for (var sn = []; nn; nn = nn.nextSibling) 1 === nn.nodeType && nn !== an && sn.push(nn);
            return sn
        },
        je = be.expr.match.needsContext,
        De = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ee = /^.[^:#\[\.,]*$/;
    be.filter = function (nn, an, sn) {
        var rn = an[0];
        return sn && (nn = ":not(" + nn + ")"), 1 === an.length && 1 === rn.nodeType ? be.find.matchesSelector(rn, nn) ? [rn] : [] : be.find.matches(nn, be.grep(an, function (dn) {
            return 1 === dn.nodeType
        }))
    }, be.fn.extend({
        find: function (nn) {
            var sn = this.length,
                rn = [],
                dn = this,
                an;
            if ("string" != typeof nn) return this.pushStack(be(nn).filter(function () {
                for (an = 0; an < sn; an++)
                    if (be.contains(dn[an], this)) return !0
            }));
            for (an = 0; an < sn; an++) be.find(nn, dn[an], rn);
            return rn = this.pushStack(1 < sn ? be.unique(rn) : rn), rn.selector = this.selector ? this.selector + " " + nn : nn, rn
        },
        filter: function (nn) {
            return this.pushStack(c(this, nn || [], !1))
        },
        not: function (nn) {
            return this.pushStack(c(this, nn || [], !0))
        },
        is: function (nn) {
            return !!c(this, "string" == typeof nn && je.test(nn) ? be(nn) : nn || [], !1).length
        }
    });
    var Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        qe = be.fn.init = function (nn, an, sn) {
            var rn, dn;
            if (!nn) return this;
            if (sn = sn || Ae, "string" == typeof nn) {
                if (rn = "<" === nn[0] && ">" === nn[nn.length - 1] && 3 <= nn.length ? [null, nn, null] : Le.exec(nn), rn && (rn[1] || !an)) {
                    if (rn[1]) {
                        if (an = an instanceof be ? an[0] : an, be.merge(this, be.parseHTML(rn[1], an && an.nodeType ? an.ownerDocument || an : le, !0)), De.test(rn[1]) && be.isPlainObject(an))
                            for (rn in an) be.isFunction(this[rn]) ? this[rn](an[rn]) : this.attr(rn, an[rn]);
                        return this
                    }
                    return dn = le.getElementById(rn[2]), dn && dn.parentNode && (this.length = 1, this[0] = dn), this.context = le, this.selector = nn, this
                }
                return !an || an.jquery ? (an || sn).find(nn) : this.constructor(an).find(nn)
            }
            return nn.nodeType ? (this.context = this[0] = nn, this.length = 1, this) : be.isFunction(nn) ? void 0 === sn.ready ? nn(be) : sn.ready(nn) : (void 0 !== nn.selector && (this.selector = nn.selector, this.context = nn.context), be.makeArray(nn, this))
        },
        Ae;
    qe.prototype = be.fn, Ae = be(le);
    var He = /^(?:parents|prev(?:Until|All))/,
        Oe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    be.fn.extend({
        has: function (nn) {
            var an = be(nn, this),
                sn = an.length;
            return this.filter(function () {
                for (var rn = 0; rn < sn; rn++)
                    if (be.contains(this, an[rn])) return !0
            })
        },
        closest: function (nn, an) {
            for (var rn = 0, dn = this.length, ln = [], pn = je.test(nn) || "string" != typeof nn ? be(nn, an || this.context) : 0, sn; rn < dn; rn++)
                for (sn = this[rn]; sn && sn !== an; sn = sn.parentNode)
                    if (11 > sn.nodeType && (pn ? -1 < pn.index(sn) : 1 === sn.nodeType && be.find.matchesSelector(sn, nn))) {
                        ln.push(sn);
                        break
                    }
            return this.pushStack(1 < ln.length ? be.uniqueSort(ln) : ln)
        },
        index: function (nn) {
            return nn ? "string" == typeof nn ? fe.call(be(nn), this[0]) : fe.call(this, nn.jquery ? nn[0] : nn) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (nn, an) {
            return this.pushStack(be.uniqueSort(be.merge(this.get(), be(nn, an))))
        },
        addBack: function (nn) {
            return this.add(null == nn ? this.prevObject : this.prevObject.filter(nn))
        }
    }), be.each({
        parent: function (nn) {
            var an = nn.parentNode;
            return an && 11 !== an.nodeType ? an : null
        },
        parents: function (nn) {
            return ke(nn, "parentNode")
        },
        parentsUntil: function (nn, an, sn) {
            return ke(nn, "parentNode", sn)
        },
        next: function (nn) {
            return u(nn, "nextSibling")
        },
        prev: function (nn) {
            return u(nn, "previousSibling")
        },
        nextAll: function (nn) {
            return ke(nn, "nextSibling")
        },
        prevAll: function (nn) {
            return ke(nn, "previousSibling")
        },
        nextUntil: function (nn, an, sn) {
            return ke(nn, "nextSibling", sn)
        },
        prevUntil: function (nn, an, sn) {
            return ke(nn, "previousSibling", sn)
        },
        siblings: function (nn) {
            return Se((nn.parentNode || {}).firstChild, nn)
        },
        children: function (nn) {
            return Se(nn.firstChild)
        },
        contents: function (nn) {
            return nn.contentDocument || be.merge([], nn.childNodes)
        }
    }, function (nn, an) {
        be.fn[nn] = function (sn, rn) {
            var dn = be.map(this, an, sn);
            return "Until" !== nn.slice(-5) && (rn = sn), rn && "string" == typeof rn && (dn = be.filter(rn, dn)), 1 < this.length && (!Oe[nn] && be.uniqueSort(dn), He.test(nn) && dn.reverse()), this.pushStack(dn)
        }
    });
    var Pe = /\S+/g;
    be.Callbacks = function (nn) {
        nn = "string" == typeof nn ? f(nn) : be.extend({}, nn);
        var ln = [],
            pn = [],
            cn = -1,
            un = function () {
                for (dn = nn.once, rn = an = !0; pn.length; cn = -1)
                    for (sn = pn.shift(); ++cn < ln.length;) !1 === ln[cn].apply(sn[0], sn[1]) && nn.stopOnFalse && (cn = ln.length, sn = !1);
                nn.memory || (sn = !1), an = !1, dn && (sn ? ln = [] : ln = "")
            },
            hn = {
                add: function () {
                    return ln && (sn && !an && (cn = ln.length - 1, pn.push(sn)), function mn(gn) {
                        be.each(gn, function (yn, xn) {
                            be.isFunction(xn) ? (!nn.unique || !hn.has(xn)) && ln.push(xn) : xn && xn.length && "string" !== be.type(xn) && mn(xn)
                        })
                    }(arguments), sn && !an && un()), this
                },
                remove: function () {
                    return be.each(arguments, function (mn, gn) {
                        for (var yn; - 1 < (yn = be.inArray(gn, ln, yn));) ln.splice(yn, 1), yn <= cn && cn--
                    }), this
                },
                has: function (mn) {
                    return mn ? -1 < be.inArray(mn, ln) : 0 < ln.length
                },
                empty: function () {
                    return ln && (ln = []), this
                },
                disable: function () {
                    return dn = pn = [], ln = sn = "", this
                },
                disabled: function () {
                    return !ln
                },
                lock: function () {
                    return dn = pn = [], sn || (ln = sn = ""), this
                },
                locked: function () {
                    return !!dn
                },
                fireWith: function (mn, gn) {
                    return dn || (gn = gn || [], gn = [mn, gn.slice ? gn.slice() : gn], pn.push(gn), !an && un()), this
                },
                fire: function () {
                    return hn.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!rn
                }
            },
            an, sn, rn, dn;
        return hn
    }, be.extend({
        Deferred: function (nn) {
            var an = [
                    ["resolve", "done", be.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", be.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", be.Callbacks("memory")]
                ],
                sn = "pending",
                rn = {
                    state: function () {
                        return sn
                    },
                    always: function () {
                        return dn.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var ln = arguments;
                        return be.Deferred(function (pn) {
                            be.each(an, function (cn, un) {
                                var hn = be.isFunction(ln[cn]) && ln[cn];
                                dn[un[1]](function () {
                                    var mn = hn && hn.apply(this, arguments);
                                    mn && be.isFunction(mn.promise) ? mn.promise().progress(pn.notify).done(pn.resolve).fail(pn.reject) : pn[un[0] + "With"](this === rn ? pn.promise() : this, hn ? [mn] : arguments)
                                })
                            }), ln = null
                        }).promise()
                    },
                    promise: function (ln) {
                        return null == ln ? rn : be.extend(ln, rn)
                    }
                },
                dn = {};
            return rn.pipe = rn.then, be.each(an, function (ln, pn) {
                var cn = pn[2],
                    un = pn[3];
                rn[pn[1]] = cn.add, un && cn.add(function () {
                    sn = un
                }, an[1 ^ ln][2].disable, an[2][2].lock), dn[pn[0]] = function () {
                    return dn[pn[0] + "With"](this === dn ? rn : this, arguments), this
                }, dn[pn[0] + "With"] = cn.fireWith
            }), rn.promise(dn), nn && nn.call(dn, dn), dn
        },
        when: function (nn) {
            var an = 0,
                sn = pe.call(arguments),
                rn = sn.length,
                dn = 1 !== rn || nn && be.isFunction(nn.promise) ? rn : 0,
                ln = 1 === dn ? nn : be.Deferred(),
                pn = function (mn, gn, yn) {
                    return function (xn) {
                        gn[mn] = this, yn[mn] = 1 < arguments.length ? pe.call(arguments) : xn, yn === cn ? ln.notifyWith(gn, yn) : !--dn && ln.resolveWith(gn, yn)
                    }
                },
                cn, un, hn;
            if (1 < rn)
                for (cn = Array(rn), un = Array(rn), hn = Array(rn); an < rn; an++) sn[an] && be.isFunction(sn[an].promise) ? sn[an].promise().progress(pn(an, un, cn)).done(pn(an, hn, sn)).fail(ln.reject) : --dn;
            return dn || ln.resolveWith(hn, sn), ln.promise()
        }
    });
    var Fe;
    be.fn.ready = function (nn) {
        return be.ready.promise().done(nn), this
    }, be.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (nn) {
            nn ? be.readyWait++ : be.ready(!0)
        },
        ready: function (nn) {
            (!0 === nn ? !--be.readyWait : !be.isReady) && (be.isReady = !0, !0 !== nn && 0 < --be.readyWait || (Fe.resolveWith(le, [be]), be.fn.triggerHandler && (be(le).triggerHandler("ready"), be(le).off("ready"))))
        }
    }), be.ready.promise = function (nn) {
        return Fe || (Fe = be.Deferred(), "complete" !== le.readyState && ("loading" === le.readyState || le.documentElement.doScroll) ? (le.addEventListener("DOMContentLoaded", h), o.addEventListener("load", h)) : o.setTimeout(be.ready)), Fe.promise(nn)
    }, be.ready.promise();
    var Ie = function (nn, an, sn, rn, dn, ln, pn) {
            var cn = 0,
                un = nn.length,
                hn = null == sn;
            if ("object" === be.type(sn))
                for (cn in dn = !0, sn) Ie(nn, an, cn, sn[cn], !0, ln, pn);
            else if (void 0 !== rn && (dn = !0, be.isFunction(rn) || (pn = !0), hn && (pn ? (an.call(nn, rn), an = null) : (hn = an, an = function (mn, gn, yn) {
                    return hn.call(be(mn), yn)
                })), an))
                for (; cn < un; cn++) an(nn[cn], sn, pn ? rn : rn.call(nn[cn], cn, an(nn[cn], sn)));
            return dn ? nn : hn ? an.call(nn) : un ? an(nn[0], sn) : ln
        },
        Me = function (nn) {
            return 1 === nn.nodeType || 9 === nn.nodeType || !+nn.nodeType
        };
    g.uid = 1, g.prototype = {
        register: function (nn, an) {
            var sn = an || {};
            return nn.nodeType ? nn[this.expando] = sn : Object.defineProperty(nn, this.expando, {
                value: sn,
                writable: !0,
                configurable: !0
            }), nn[this.expando]
        },
        cache: function (nn) {
            if (!Me(nn)) return {};
            var an = nn[this.expando];
            return an || (an = {}, Me(nn) && (nn.nodeType ? nn[this.expando] = an : Object.defineProperty(nn, this.expando, {
                value: an,
                configurable: !0
            }))), an
        },
        set: function (nn, an, sn) {
            var dn = this.cache(nn),
                rn;
            if ("string" == typeof an) dn[an] = sn;
            else
                for (rn in an) dn[rn] = an[rn];
            return dn
        },
        get: function (nn, an) {
            return void 0 === an ? this.cache(nn) : nn[this.expando] && nn[this.expando][an]
        },
        access: function (nn, an, sn) {
            var rn;
            return void 0 === an || an && "string" == typeof an && void 0 === sn ? (rn = this.get(nn, an), void 0 == rn ? this.get(nn, be.camelCase(an)) : rn) : (this.set(nn, an, sn), void 0 === sn ? an : sn)
        },
        remove: function (nn, an) {
            var ln = nn[this.expando],
                sn, rn, dn;
            if (void 0 !== ln) {
                if (void 0 === an) this.register(nn);
                else
                    for (be.isArray(an) ? rn = an.concat(an.map(be.camelCase)) : (dn = be.camelCase(an), (an in ln) ? rn = [an, dn] : (rn = dn, rn = (rn in ln) ? [rn] : rn.match(Pe) || [])), sn = rn.length; sn--;) delete ln[rn[sn]];
                (void 0 === an || be.isEmptyObject(ln)) && (nn.nodeType ? nn[this.expando] = void 0 : delete nn[this.expando])
            }
        },
        hasData: function (nn) {
            var an = nn[this.expando];
            return void 0 !== an && !be.isEmptyObject(an)
        }
    };
    var We = new g,
        Re = new g,
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /[A-Z]/g;
    be.extend({
        hasData: function (nn) {
            return Re.hasData(nn) || We.hasData(nn)
        },
        data: function (nn, an, sn) {
            return Re.access(nn, an, sn)
        },
        removeData: function (nn, an) {
            Re.remove(nn, an)
        },
        _data: function (nn, an, sn) {
            return We.access(nn, an, sn)
        },
        _removeData: function (nn, an) {
            We.remove(nn, an)
        }
    }), be.fn.extend({
        data: function (nn, an) {
            var ln = this[0],
                pn = ln && ln.attributes,
                sn, rn, dn;
            if (void 0 === nn) {
                if (this.length && (dn = Re.get(ln), 1 === ln.nodeType && !We.get(ln, "hasDataAttrs"))) {
                    for (sn = pn.length; sn--;) pn[sn] && (rn = pn[sn].name, 0 === rn.indexOf("data-") && (rn = be.camelCase(rn.slice(5)), y(ln, rn, dn[rn])));
                    We.set(ln, "hasDataAttrs", !0)
                }
                return dn
            }
            return "object" == typeof nn ? this.each(function () {
                Re.set(this, nn)
            }) : Ie(this, function (cn) {
                var un, hn;
                return ln && void 0 === cn ? (un = Re.get(ln, nn) || Re.get(ln, nn.replace(_e, "-$&").toLowerCase()), void 0 != un) ? un : (hn = be.camelCase(nn), un = Re.get(ln, hn), void 0 != un) ? un : (un = y(ln, hn, void 0), void 0 == un ? void 0 : un) : void(hn = be.camelCase(nn), this.each(function () {
                    var mn = Re.get(this, hn);
                    Re.set(this, hn, cn), -1 < nn.indexOf("-") && void 0 !== mn && Re.set(this, nn, cn)
                }))
            }, null, an, 1 < arguments.length, null, !0)
        },
        removeData: function (nn) {
            return this.each(function () {
                Re.remove(this, nn)
            })
        }
    }), be.extend({
        queue: function (nn, an, sn) {
            var rn;
            if (nn) return an = (an || "fx") + "queue", rn = We.get(nn, an), sn && (!rn || be.isArray(sn) ? rn = We.access(nn, an, be.makeArray(sn)) : rn.push(sn)), rn || []
        },
        dequeue: function (nn, an) {
            an = an || "fx";
            var sn = be.queue(nn, an),
                rn = sn.length,
                dn = sn.shift(),
                ln = be._queueHooks(nn, an);
            "inprogress" === dn && (dn = sn.shift(), rn--), dn && ("fx" === an && sn.unshift("inprogress"), delete ln.stop, dn.call(nn, function () {
                be.dequeue(nn, an)
            }, ln)), !rn && ln && ln.empty.fire()
        },
        _queueHooks: function (nn, an) {
            var sn = an + "queueHooks";
            return We.get(nn, sn) || We.access(nn, sn, {
                empty: be.Callbacks("once memory").add(function () {
                    We.remove(nn, [an + "queue", sn])
                })
            })
        }
    }), be.fn.extend({
        queue: function (nn, an) {
            var sn = 2;
            return "string" != typeof nn && (an = nn, nn = "fx", sn--), arguments.length < sn ? be.queue(this[0], nn) : void 0 === an ? this : this.each(function () {
                var rn = be.queue(this, nn, an);
                be._queueHooks(this, nn), "fx" === nn && "inprogress" !== rn[0] && be.dequeue(this, nn)
            })
        },
        dequeue: function (nn) {
            return this.each(function () {
                be.dequeue(this, nn)
            })
        },
        clearQueue: function (nn) {
            return this.queue(nn || "fx", [])
        },
        promise: function (nn, an) {
            var rn = 1,
                dn = be.Deferred(),
                ln = this,
                pn = this.length,
                cn = function () {
                    --rn || dn.resolveWith(ln, [ln])
                },
                sn;
            for ("string" != typeof nn && (an = nn, nn = void 0), nn = nn || "fx"; pn--;) sn = We.get(ln[pn], nn + "queueHooks"), sn && sn.empty && (rn++, sn.empty.add(cn));
            return cn(), dn.promise(an)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Xe = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        ze = ["Top", "Right", "Bottom", "Left"],
        Ue = function (nn, an) {
            return nn = an || nn, "none" === be.css(nn, "display") || !be.contains(nn.ownerDocument, nn)
        },
        Ve = /^(?:checkbox|radio)$/i,
        Ye = /<([\w:-]+)/,
        Ge = /^$|\/(?:java|ecma)script/i,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
    var Je = /<|&#?\w+;/;
    (function () {
        var nn = le.createDocumentFragment(),
            an = nn.appendChild(le.createElement("div")),
            sn = le.createElement("input");
        sn.setAttribute("type", "radio"), sn.setAttribute("checked", "checked"), sn.setAttribute("name", "t"), an.appendChild(sn), ye.checkClone = an.cloneNode(!0).cloneNode(!0).lastChild.checked, an.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!an.cloneNode(!0).lastChild.defaultValue
    })();
    var Ke = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    be.event = {
        global: {},
        add: function (nn, an, sn, rn, dn) {
            var Tn = We.get(nn),
                ln, pn, cn, un, hn, mn, gn, yn, xn, bn, vn;
            if (Tn)
                for (sn.handler && (ln = sn, sn = ln.handler, dn = ln.selector), sn.guid || (sn.guid = be.guid++), (un = Tn.events) || (un = Tn.events = {}), (pn = Tn.handle) || (pn = Tn.handle = function (wn) {
                        return "undefined" != typeof be && be.event.triggered !== wn.type ? be.event.dispatch.apply(nn, arguments) : void 0
                    }), an = (an || "").match(Pe) || [""], hn = an.length; hn--;)(cn = et.exec(an[hn]) || [], xn = vn = cn[1], bn = (cn[2] || "").split(".").sort(), !!xn) && (gn = be.event.special[xn] || {}, xn = (dn ? gn.delegateType : gn.bindType) || xn, gn = be.event.special[xn] || {}, mn = be.extend({
                    type: xn,
                    origType: vn,
                    data: rn,
                    handler: sn,
                    guid: sn.guid,
                    selector: dn,
                    needsContext: dn && be.expr.match.needsContext.test(dn),
                    namespace: bn.join(".")
                }, ln), (yn = un[xn]) || (yn = un[xn] = [], yn.delegateCount = 0, (!gn.setup || !1 === gn.setup.call(nn, rn, bn, pn)) && nn.addEventListener && nn.addEventListener(xn, pn)), gn.add && (gn.add.call(nn, mn), !mn.handler.guid && (mn.handler.guid = sn.guid)), dn ? yn.splice(yn.delegateCount++, 0, mn) : yn.push(mn), be.event.global[xn] = !0)
        },
        remove: function (nn, an, sn, rn, dn) {
            var Tn = We.hasData(nn) && We.get(nn),
                ln, pn, cn, un, hn, mn, gn, yn, xn, bn, vn;
            if (Tn && (un = Tn.events)) {
                for (an = (an || "").match(Pe) || [""], hn = an.length; hn--;) {
                    if (cn = et.exec(an[hn]) || [], xn = vn = cn[1], bn = (cn[2] || "").split(".").sort(), !xn) {
                        for (xn in un) be.event.remove(nn, xn + an[hn], sn, rn, !0);
                        continue
                    }
                    for (gn = be.event.special[xn] || {}, xn = (rn ? gn.delegateType : gn.bindType) || xn, yn = un[xn] || [], cn = cn[2] && new RegExp("(^|\\.)" + bn.join("\\.(?:.*\\.|)") + "(\\.|$)"), pn = ln = yn.length; ln--;) mn = yn[ln], (dn || vn === mn.origType) && (!sn || sn.guid === mn.guid) && (!cn || cn.test(mn.namespace)) && (!rn || rn === mn.selector || "**" === rn && mn.selector) && (yn.splice(ln, 1), mn.selector && yn.delegateCount--, gn.remove && gn.remove.call(nn, mn));
                    pn && !yn.length && ((!gn.teardown || !1 === gn.teardown.call(nn, bn, Tn.handle)) && be.removeEvent(nn, xn, Tn.handle), delete un[xn])
                }
                be.isEmptyObject(un) && We.remove(nn, "handle events")
            }
        },
        dispatch: function (nn) {
            nn = be.event.fix(nn);
            var pn = [],
                cn = pe.call(arguments),
                un = (We.get(this, "events") || {})[nn.type] || [],
                hn = be.event.special[nn.type] || {},
                an, sn, rn, dn, ln;
            if (cn[0] = nn, nn.delegateTarget = this, !(hn.preDispatch && !1 === hn.preDispatch.call(this, nn))) {
                for (pn = be.event.handlers.call(this, nn, un), an = 0;
                    (dn = pn[an++]) && !nn.isPropagationStopped();)
                    for (nn.currentTarget = dn.elem, sn = 0;
                        (ln = dn.handlers[sn++]) && !nn.isImmediatePropagationStopped();)(!nn.rnamespace || nn.rnamespace.test(ln.namespace)) && (nn.handleObj = ln, nn.data = ln.data, rn = ((be.event.special[ln.origType] || {}).handle || ln.handler).apply(dn.elem, cn), void 0 != rn && !1 === (nn.result = rn) && (nn.preventDefault(), nn.stopPropagation()));
                return hn.postDispatch && hn.postDispatch.call(this, nn), nn.result
            }
        },
        handlers: function (nn, an) {
            var pn = [],
                cn = an.delegateCount,
                un = nn.target,
                sn, rn, dn, ln;
            if (cn && un.nodeType && ("click" !== nn.type || isNaN(nn.button) || 1 > nn.button))
                for (; un !== this; un = un.parentNode || this)
                    if (1 === un.nodeType && (!0 !== un.disabled || "click" !== nn.type)) {
                        for (rn = [], sn = 0; sn < cn; sn++) ln = an[sn], dn = ln.selector + " ", void 0 === rn[dn] && (rn[dn] = ln.needsContext ? -1 < be(dn, this).index(un) : be.find(dn, this, null, [un]).length), rn[dn] && rn.push(ln);
                        rn.length && pn.push({
                            elem: un,
                            handlers: rn
                        })
                    }
            return cn < an.length && pn.push({
                elem: this,
                handlers: an.slice(cn)
            }), pn
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (nn, an) {
                return null == nn.which && (nn.which = null == an.charCode ? an.keyCode : an.charCode), nn
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (nn, an) {
                var ln = an.button,
                    sn, rn, dn;
                return null == nn.pageX && null != an.clientX && (sn = nn.target.ownerDocument || le, rn = sn.documentElement, dn = sn.body, nn.pageX = an.clientX + (rn && rn.scrollLeft || dn && dn.scrollLeft || 0) - (rn && rn.clientLeft || dn && dn.clientLeft || 0), nn.pageY = an.clientY + (rn && rn.scrollTop || dn && dn.scrollTop || 0) - (rn && rn.clientTop || dn && dn.clientTop || 0)), nn.which || void 0 === ln || (nn.which = 1 & ln ? 1 : 2 & ln ? 3 : 4 & ln ? 2 : 0), nn
            }
        },
        fix: function (nn) {
            if (nn[be.expando]) return nn;
            var dn = nn.type,
                ln = nn,
                pn = this.fixHooks[dn],
                an, sn, rn;
            for (pn || (this.fixHooks[dn] = pn = Ze.test(dn) ? this.mouseHooks : Ke.test(dn) ? this.keyHooks : {}), rn = pn.props ? this.props.concat(pn.props) : this.props, nn = new be.Event(ln), an = rn.length; an--;) sn = rn[an], nn[sn] = ln[sn];
            return nn.target || (nn.target = le), 3 === nn.target.nodeType && (nn.target = nn.target.parentNode), pn.filter ? pn.filter(nn, ln) : nn
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== D() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === D() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && be.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (nn) {
                    return be.nodeName(nn.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (nn) {
                    void 0 !== nn.result && nn.originalEvent && (nn.originalEvent.returnValue = nn.result)
                }
            }
        }
    }, be.removeEvent = function (nn, an, sn) {
        nn.removeEventListener && nn.removeEventListener(an, sn)
    }, be.Event = function (nn, an) {
        return this instanceof be.Event ? void(nn && nn.type ? (this.originalEvent = nn, this.type = nn.type, this.isDefaultPrevented = nn.defaultPrevented || void 0 === nn.defaultPrevented && !1 === nn.returnValue ? k : S) : this.type = nn, an && be.extend(this, an), this.timeStamp = nn && nn.timeStamp || be.now(), this[be.expando] = !0) : new be.Event(nn, an)
    }, be.Event.prototype = {
        constructor: be.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function () {
            var nn = this.originalEvent;
            this.isDefaultPrevented = k, nn && !this.isSimulated && nn.preventDefault()
        },
        stopPropagation: function () {
            var nn = this.originalEvent;
            this.isPropagationStopped = k, nn && !this.isSimulated && nn.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var nn = this.originalEvent;
            this.isImmediatePropagationStopped = k, nn && !this.isSimulated && nn.stopImmediatePropagation(), this.stopPropagation()
        }
    }, be.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (nn, an) {
        be.event.special[nn] = {
            delegateType: an,
            bindType: an,
            handle: function (sn) {
                var dn = this,
                    ln = sn.relatedTarget,
                    pn = sn.handleObj,
                    rn;
                return ln && (ln === dn || be.contains(dn, ln)) || (sn.type = pn.origType, rn = pn.handler.apply(this, arguments), sn.type = an), rn
            }
        }
    }), be.fn.extend({
        on: function (nn, an, sn, rn) {
            return E(this, nn, an, sn, rn)
        },
        one: function (nn, an, sn, rn) {
            return E(this, nn, an, sn, rn, 1)
        },
        off: function (nn, an, sn) {
            var rn, dn;
            if (nn && nn.preventDefault && nn.handleObj) return rn = nn.handleObj, be(nn.delegateTarget).off(rn.namespace ? rn.origType + "." + rn.namespace : rn.origType, rn.selector, rn.handler), this;
            if ("object" == typeof nn) {
                for (dn in nn) this.off(dn, an, nn[dn]);
                return this
            }
            return (!1 === an || "function" == typeof an) && (sn = an, an = void 0), !1 === sn && (sn = S), this.each(function () {
                be.event.remove(this, nn, sn, an)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^true\/(.*)/,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    be.extend({
        htmlPrefilter: function (nn) {
            return nn.replace(tt, "<$1></$2>")
        },
        clone: function (nn, an, sn) {
            var cn = nn.cloneNode(!0),
                un = be.contains(nn.ownerDocument, nn),
                rn, dn, ln, pn;
            if (!ye.noCloneChecked && (1 === nn.nodeType || 11 === nn.nodeType) && !be.isXMLDoc(nn))
                for (pn = T(cn), ln = T(nn), (rn = 0, dn = ln.length); rn < dn; rn++) O(ln[rn], pn[rn]);
            if (an)
                if (sn)
                    for (ln = ln || T(nn), pn = pn || T(cn), (rn = 0, dn = ln.length); rn < dn; rn++) H(ln[rn], pn[rn]);
                else H(nn, cn);
            return pn = T(cn, "script"), 0 < pn.length && C(pn, !un && T(nn, "script")), cn
        },
        cleanData: function (nn) {
            for (var dn = be.event.special, ln = 0, an, sn, rn; void 0 !== (sn = nn[ln]); ln++)
                if (Me(sn)) {
                    if (an = sn[We.expando]) {
                        if (an.events)
                            for (rn in an.events) dn[rn] ? be.event.remove(sn, rn) : be.removeEvent(sn, rn, an.handle);
                        sn[We.expando] = void 0
                    }
                    sn[Re.expando] && (sn[Re.expando] = void 0)
                }
        }
    }), be.fn.extend({
        domManip: P,
        detach: function (nn) {
            return F(this, nn, !0)
        },
        remove: function (nn) {
            return F(this, nn)
        },
        text: function (nn) {
            return Ie(this, function (an) {
                return void 0 === an ? be.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = an)
                })
            }, null, nn, arguments.length)
        },
        append: function () {
            return P(this, arguments, function (nn) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var an = A(this, nn);
                    an.appendChild(nn)
                }
            })
        },
        prepend: function () {
            return P(this, arguments, function (nn) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var an = A(this, nn);
                    an.insertBefore(nn, an.firstChild)
                }
            })
        },
        before: function () {
            return P(this, arguments, function (nn) {
                this.parentNode && this.parentNode.insertBefore(nn, this)
            })
        },
        after: function () {
            return P(this, arguments, function (nn) {
                this.parentNode && this.parentNode.insertBefore(nn, this.nextSibling)
            })
        },
        empty: function () {
            for (var an = 0, nn; null != (nn = this[an]); an++) 1 === nn.nodeType && (be.cleanData(T(nn, !1)), nn.textContent = "");
            return this
        },
        clone: function (nn, an) {
            return nn = null != nn && nn, an = null == an ? nn : an, this.map(function () {
                return be.clone(this, nn, an)
            })
        },
        html: function (nn) {
            return Ie(this, function (an) {
                var sn = this[0] || {},
                    rn = 0,
                    dn = this.length;
                if (void 0 === an && 1 === sn.nodeType) return sn.innerHTML;
                if ("string" == typeof an && !nt.test(an) && !Qe[(Ye.exec(an) || ["", ""])[1].toLowerCase()]) {
                    an = be.htmlPrefilter(an);
                    try {
                        for (; rn < dn; rn++) sn = this[rn] || {}, 1 === sn.nodeType && (be.cleanData(T(sn, !1)), sn.innerHTML = an);
                        sn = 0
                    } catch (ln) {}
                }
                sn && this.empty().append(an)
            }, null, nn, arguments.length)
        },
        replaceWith: function () {
            var nn = [];
            return P(this, arguments, function (an) {
                var sn = this.parentNode;
                0 > be.inArray(this, nn) && (be.cleanData(T(this)), sn && sn.replaceChild(an, this))
            }, nn)
        }
    }), be.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (nn, an) {
        be.fn[nn] = function (sn) {
            for (var dn = [], ln = be(sn), pn = ln.length - 1, cn = 0, rn; cn <= pn; cn++) rn = cn === pn ? this : this.clone(!0), be(ln[cn])[an](rn), ue.apply(dn, rn.get());
            return this.pushStack(dn)
        }
    });
    var rt = {
            HTML: "block",
            BODY: "block"
        },
        dt = /^margin/,
        lt = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
        pt = function (nn) {
            var an = nn.ownerDocument.defaultView;
            return an && an.opener || (an = o), an.getComputedStyle(nn)
        },
        ut = function (nn, an, sn, rn) {
            var pn = {},
                dn, ln;
            for (ln in an) pn[ln] = nn.style[ln], nn.style[ln] = an[ln];
            for (ln in dn = sn.apply(nn, rn || []), an) nn.style[ln] = pn[ln];
            return dn
        },
        ft = le.documentElement,
        it;
    (function () {
        function nn() {
            pn.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", pn.innerHTML = "", ft.appendChild(ln);
            var cn = o.getComputedStyle(pn);
            an = "1%" !== cn.top, dn = "2px" === cn.marginLeft, sn = "4px" === cn.width, pn.style.marginRight = "50%", rn = "4px" === cn.marginRight, ft.removeChild(ln)
        }
        var ln = le.createElement("div"),
            pn = le.createElement("div"),
            an, sn, rn, dn;
        pn.style && (pn.style.backgroundClip = "content-box", pn.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === pn.style.backgroundClip, ln.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", ln.appendChild(pn), be.extend(ye, {
            pixelPosition: function () {
                return nn(), an
            },
            boxSizingReliable: function () {
                return null == sn && nn(), sn
            },
            pixelMarginRight: function () {
                return null == sn && nn(), rn
            },
            reliableMarginLeft: function () {
                return null == sn && nn(), dn
            },
            reliableMarginRight: function () {
                var un = pn.appendChild(le.createElement("div")),
                    cn;
                return un.style.cssText = pn.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", un.style.marginRight = un.style.width = "0", pn.style.width = "1px", ft.appendChild(ln), cn = !parseFloat(o.getComputedStyle(un).marginRight), ft.removeChild(ln), pn.removeChild(un), cn
            }
        }))
    })();
    var ht = /^(none|table(?!-c[ea]).+)/,
        mt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        yt = ["Webkit", "O", "Moz", "ms"],
        xt = le.createElement("div").style;
    be.extend({
        cssHooks: {
            opacity: {
                get: function (nn, an) {
                    if (an) {
                        var sn = W(nn, "opacity");
                        return "" === sn ? "1" : sn
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (nn, an, sn, rn) {
            if (nn && 3 !== nn.nodeType && 8 !== nn.nodeType && nn.style) {
                var cn = be.camelCase(an),
                    un = nn.style,
                    dn, ln, pn;
                if (an = be.cssProps[cn] || (be.cssProps[cn] = B(cn) || cn), pn = be.cssHooks[an] || be.cssHooks[cn], void 0 !== sn) {
                    if (ln = typeof sn, "string" === ln && (dn = Xe.exec(sn)) && dn[1] && (sn = x(nn, an, dn), ln = "number"), null == sn || sn !== sn) return;
                    "number" === ln && (sn += dn && dn[3] || (be.cssNumber[cn] ? "" : "px")), ye.clearCloneStyle || "" !== sn || 0 !== an.indexOf("background") || (un[an] = "inherit"), pn && "set" in pn && void 0 === (sn = pn.set(nn, sn, rn)) || (un[an] = sn)
                } else return pn && "get" in pn && void 0 !== (dn = pn.get(nn, !1, rn)) ? dn : un[an]
            }
        },
        css: function (nn, an, sn, rn) {
            var cn = be.camelCase(an),
                dn, ln, pn;
            return an = be.cssProps[cn] || (be.cssProps[cn] = B(cn) || cn), pn = be.cssHooks[an] || be.cssHooks[cn], pn && "get" in pn && (dn = pn.get(nn, !0, sn)), void 0 == dn && (dn = W(nn, an, rn)), "normal" === dn && an in gt && (dn = gt[an]), "" === sn || sn ? (ln = parseFloat(dn), !0 === sn || isFinite(ln) ? ln || 0 : dn) : dn
        }
    }), be.each(["height", "width"], function (nn, an) {
        be.cssHooks[an] = {
            get: function (sn, rn, dn) {
                if (rn) return ht.test(be.css(sn, "display")) && 0 === sn.offsetWidth ? ut(sn, mt, function () {
                    return z(sn, an, dn)
                }) : z(sn, an, dn)
            },
            set: function (sn, rn, dn) {
                var pn = dn && pt(sn),
                    cn = dn && X(sn, an, dn, "border-box" === be.css(sn, "boxSizing", !1, pn), pn),
                    ln;
                return cn && (ln = Xe.exec(rn)) && "px" !== (ln[3] || "px") && (sn.style[an] = rn, rn = be.css(sn, an)), $(sn, rn, cn)
            }
        }
    }), be.cssHooks.marginLeft = R(ye.reliableMarginLeft, function (nn, an) {
        if (an) return (parseFloat(W(nn, "marginLeft")) || nn.getBoundingClientRect().left - ut(nn, {
            marginLeft: 0
        }, function () {
            return nn.getBoundingClientRect().left
        })) + "px"
    }), be.cssHooks.marginRight = R(ye.reliableMarginRight, function (nn, an) {
        if (an) return ut(nn, {
            display: "inline-block"
        }, W, [nn, "marginRight"])
    }), be.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (nn, an) {
        be.cssHooks[nn + an] = {
            expand: function (sn) {
                for (var rn = 0, dn = {}, ln = "string" == typeof sn ? sn.split(" ") : [sn]; 4 > rn; rn++) dn[nn + ze[rn] + an] = ln[rn] || ln[rn - 2] || ln[0];
                return dn
            }
        }, dt.test(nn) || (be.cssHooks[nn + an].set = $)
    }), be.fn.extend({
        css: function (nn, an) {
            return Ie(this, function (sn, rn, dn) {
                var cn = {},
                    un = 0,
                    ln, pn;
                if (be.isArray(rn)) {
                    for (ln = pt(sn), pn = rn.length; un < pn; un++) cn[rn[un]] = be.css(sn, rn[un], !1, ln);
                    return cn
                }
                return void 0 === dn ? be.css(sn, rn) : be.style(sn, rn, dn)
            }, nn, an, 1 < arguments.length)
        },
        show: function () {
            return U(this, !0)
        },
        hide: function () {
            return U(this)
        },
        toggle: function (nn) {
            return "boolean" == typeof nn ? nn ? this.show() : this.hide() : this.each(function () {
                Ue(this) ? be(this).show() : be(this).hide()
            })
        }
    }), be.Tween = V, V.prototype = {
        constructor: V,
        init: function (nn, an, sn, rn, dn, ln) {
            this.elem = nn, this.prop = sn, this.easing = dn || be.easing._default, this.options = an, this.start = this.now = this.cur(), this.end = rn, this.unit = ln || (be.cssNumber[sn] ? "" : "px")
        },
        cur: function () {
            var nn = V.propHooks[this.prop];
            return nn && nn.get ? nn.get(this) : V.propHooks._default.get(this)
        },
        run: function (nn) {
            var sn = V.propHooks[this.prop],
                an;
            return this.pos = this.options.duration ? an = be.easing[this.easing](nn, this.options.duration * nn, 0, 1, this.options.duration) : an = nn, this.now = (this.end - this.start) * an + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), sn && sn.set ? sn.set(this) : V.propHooks._default.set(this), this
        }
    }, V.prototype.init.prototype = V.prototype, V.propHooks = {
        _default: {
            get: function (nn) {
                var an;
                return 1 !== nn.elem.nodeType || null != nn.elem[nn.prop] && null == nn.elem.style[nn.prop] ? nn.elem[nn.prop] : (an = be.css(nn.elem, nn.prop, ""), an && "auto" !== an ? an : 0)
            },
            set: function (nn) {
                be.fx.step[nn.prop] ? be.fx.step[nn.prop](nn) : 1 === nn.elem.nodeType && (null != nn.elem.style[be.cssProps[nn.prop]] || be.cssHooks[nn.prop]) ? be.style(nn.elem, nn.prop, nn.now + nn.unit) : nn.elem[nn.prop] = nn.now
            }
        }
    }, V.propHooks.scrollTop = V.propHooks.scrollLeft = {
        set: function (nn) {
            nn.elem.nodeType && nn.elem.parentNode && (nn.elem[nn.prop] = nn.now)
        }
    }, be.easing = {
        linear: function (nn) {
            return nn
        },
        swing: function (nn) {
            return 0.5 - Math.cos(nn * Math.PI) / 2
        },
        _default: "swing"
    }, be.fx = V.prototype.init, be.fx.step = {};
    var Tt = /^(?:toggle|show|hide)$/,
        wt = /queueHooks$/,
        bt, vt;
    be.Animation = be.extend(Z, {
            tweeners: {
                "*": [function (nn, an) {
                    var sn = this.createTween(nn, an);
                    return x(sn.elem, nn, Xe.exec(an), sn), sn
                }]
            },
            tweener: function (nn, an) {
                be.isFunction(nn) ? (an = nn, nn = ["*"]) : nn = nn.match(Pe);
                for (var rn = 0, dn = nn.length, sn; rn < dn; rn++) sn = nn[rn], Z.tweeners[sn] = Z.tweeners[sn] || [], Z.tweeners[sn].unshift(an)
            },
            prefilters: [function (nn, an, sn) {
                var gn = this,
                    yn = {},
                    xn = nn.style,
                    bn = nn.nodeType && Ue(nn),
                    vn = We.get(nn, "fxshow"),
                    rn, dn, ln, pn, cn, un, hn, mn;
                for (rn in sn.queue || (cn = be._queueHooks(nn, "fx"), null == cn.unqueued && (cn.unqueued = 0, un = cn.empty.fire, cn.empty.fire = function () {
                        cn.unqueued || un()
                    }), cn.unqueued++, gn.always(function () {
                        gn.always(function () {
                            cn.unqueued--, be.queue(nn, "fx").length || cn.empty.fire()
                        })
                    })), 1 === nn.nodeType && ("height" in an || "width" in an) && (sn.overflow = [xn.overflow, xn.overflowX, xn.overflowY], hn = be.css(nn, "display"), mn = "none" === hn ? We.get(nn, "olddisplay") || M(nn.nodeName) : hn, "inline" === mn && "none" === be.css(nn, "float") && (xn.display = "inline-block")), sn.overflow && (xn.overflow = "hidden", gn.always(function () {
                        xn.overflow = sn.overflow[0], xn.overflowX = sn.overflow[1], xn.overflowY = sn.overflow[2]
                    })), an)
                    if (dn = an[rn], Tt.exec(dn)) {
                        if (delete an[rn], ln = ln || "toggle" === dn, dn === (bn ? "hide" : "show"))
                            if ("show" === dn && vn && void 0 !== vn[rn]) bn = !0;
                            else continue;
                        yn[rn] = vn && vn[rn] || be.style(nn, rn)
                    } else hn = void 0;
                if (!be.isEmptyObject(yn))
                    for (rn in vn ? "hidden" in vn && (bn = vn.hidden) : vn = We.access(nn, "fxshow", {}), ln && (vn.hidden = !bn), bn ? be(nn).show() : gn.done(function () {
                            be(nn).hide()
                        }), gn.done(function () {
                            for (var Tn in We.remove(nn, "fxshow"), yn) be.style(nn, Tn, yn[Tn])
                        }), yn) pn = Q(bn ? vn[rn] : 0, rn, gn), rn in vn || (vn[rn] = pn.start, bn && (pn.end = pn.start, pn.start = "width" === rn || "height" === rn ? 1 : 0));
                else "inline" === ("none" === hn ? M(nn.nodeName) : hn) && (xn.display = hn)
            }],
            prefilter: function (nn, an) {
                an ? Z.prefilters.unshift(nn) : Z.prefilters.push(nn)
            }
        }), be.speed = function (nn, an, sn) {
            var rn = nn && "object" == typeof nn ? be.extend({}, nn) : {
                complete: sn || !sn && an || be.isFunction(nn) && nn,
                duration: nn,
                easing: sn && an || an && !be.isFunction(an) && an
            };
            return rn.duration = be.fx.off ? 0 : "number" == typeof rn.duration ? rn.duration : rn.duration in be.fx.speeds ? be.fx.speeds[rn.duration] : be.fx.speeds._default, (null == rn.queue || !0 === rn.queue) && (rn.queue = "fx"), rn.old = rn.complete, rn.complete = function () {
                be.isFunction(rn.old) && rn.old.call(this), rn.queue && be.dequeue(this, rn.queue)
            }, rn
        }, be.fn.extend({
            fadeTo: function (nn, an, sn, rn) {
                return this.filter(Ue).css("opacity", 0).show().end().animate({
                    opacity: an
                }, nn, sn, rn)
            },
            animate: function (nn, an, sn, rn) {
                var dn = be.isEmptyObject(nn),
                    ln = be.speed(an, sn, rn),
                    pn = function () {
                        var cn = Z(this, be.extend({}, nn), ln);
                        (dn || We.get(this, "finish")) && cn.stop(!0)
                    };
                return pn.finish = pn, dn || !1 === ln.queue ? this.each(pn) : this.queue(ln.queue, pn)
            },
            stop: function (nn, an, sn) {
                var rn = function (dn) {
                    var ln = dn.stop;
                    delete dn.stop, ln(sn)
                };
                return "string" != typeof nn && (sn = an, an = nn, nn = void 0), an && !1 !== nn && this.queue(nn || "fx", []), this.each(function () {
                    var dn = !0,
                        ln = null != nn && nn + "queueHooks",
                        pn = be.timers,
                        cn = We.get(this);
                    if (ln) cn[ln] && cn[ln].stop && rn(cn[ln]);
                    else
                        for (ln in cn) cn[ln] && cn[ln].stop && wt.test(ln) && rn(cn[ln]);
                    for (ln = pn.length; ln--;) pn[ln].elem === this && (null == nn || pn[ln].queue === nn) && (pn[ln].anim.stop(sn), dn = !1, pn.splice(ln, 1));
                    (dn || !sn) && be.dequeue(this, nn)
                })
            },
            finish: function (nn) {
                return !1 !== nn && (nn = nn || "fx"), this.each(function () {
                    var sn = We.get(this),
                        rn = sn[nn + "queue"],
                        dn = sn[nn + "queueHooks"],
                        ln = be.timers,
                        pn = rn ? rn.length : 0,
                        an;
                    for (sn.finish = !0, be.queue(this, nn, []), dn && dn.stop && dn.stop.call(this, !0), an = ln.length; an--;) ln[an].elem === this && ln[an].queue === nn && (ln[an].anim.stop(!0), ln.splice(an, 1));
                    for (an = 0; an < pn; an++) rn[an] && rn[an].finish && rn[an].finish.call(this);
                    delete sn.finish
                })
            }
        }), be.each(["toggle", "show", "hide"], function (nn, an) {
            var sn = be.fn[an];
            be.fn[an] = function (rn, dn, ln) {
                return null == rn || "boolean" == typeof rn ? sn.apply(this, arguments) : this.animate(G(an, !0), rn, dn, ln)
            }
        }), be.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (nn, an) {
            be.fn[nn] = function (sn, rn, dn) {
                return this.animate(an, sn, rn, dn)
            }
        }), be.timers = [], be.fx.tick = function () {
            var an = 0,
                sn = be.timers,
                nn;
            for (bt = be.now(); an < sn.length; an++) nn = sn[an], nn() || sn[an] !== nn || sn.splice(an--, 1);
            sn.length || be.fx.stop(), bt = void 0
        }, be.fx.timer = function (nn) {
            be.timers.push(nn), nn() ? be.fx.start() : be.timers.pop()
        }, be.fx.interval = 13, be.fx.start = function () {
            vt || (vt = o.setInterval(be.fx.tick, be.fx.interval))
        }, be.fx.stop = function () {
            o.clearInterval(vt), vt = null
        }, be.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, be.fn.delay = function (nn, an) {
            return nn = be.fx ? be.fx.speeds[nn] || nn : nn, an = an || "fx", this.queue(an, function (sn, rn) {
                var dn = o.setTimeout(sn, nn);
                rn.stop = function () {
                    o.clearTimeout(dn)
                }
            })
        },
        function () {
            var nn = le.createElement("input"),
                an = le.createElement("select"),
                sn = an.appendChild(le.createElement("option"));
            nn.type = "checkbox", ye.checkOn = "" !== nn.value, ye.optSelected = sn.selected, an.disabled = !0, ye.optDisabled = !sn.disabled, nn = le.createElement("input"), nn.value = "t", nn.type = "radio", ye.radioValue = "t" === nn.value
        }();
    var Nt = be.expr.attrHandle,
        Ct;
    be.fn.extend({
        attr: function (nn, an) {
            return Ie(this, be.attr, nn, an, 1 < arguments.length)
        },
        removeAttr: function (nn) {
            return this.each(function () {
                be.removeAttr(this, nn)
            })
        }
    }), be.extend({
        attr: function (nn, an, sn) {
            var ln = nn.nodeType,
                rn, dn;
            if (3 !== ln && 8 !== ln && 2 !== ln) return "undefined" == typeof nn.getAttribute ? be.prop(nn, an, sn) : (1 === ln && be.isXMLDoc(nn) || (an = an.toLowerCase(), dn = be.attrHooks[an] || (be.expr.match.bool.test(an) ? Ct : void 0)), void 0 !== sn) ? null === sn ? void be.removeAttr(nn, an) : dn && "set" in dn && void 0 !== (rn = dn.set(nn, sn, an)) ? rn : (nn.setAttribute(an, sn + ""), sn) : dn && "get" in dn && null !== (rn = dn.get(nn, an)) ? rn : (rn = be.find.attr(nn, an), null == rn ? void 0 : rn)
        },
        attrHooks: {
            type: {
                set: function (nn, an) {
                    if (!ye.radioValue && "radio" === an && be.nodeName(nn, "input")) {
                        var sn = nn.value;
                        return nn.setAttribute("type", an), sn && (nn.value = sn), an
                    }
                }
            }
        },
        removeAttr: function (nn, an) {
            var dn = 0,
                ln = an && an.match(Pe),
                sn, rn;
            if (ln && 1 === nn.nodeType)
                for (; sn = ln[dn++];) rn = be.propFix[sn] || sn, be.expr.match.bool.test(sn) && (nn[rn] = !1), nn.removeAttribute(sn)
        }
    }), Ct = {
        set: function (nn, an, sn) {
            return !1 === an ? be.removeAttr(nn, sn) : nn.setAttribute(sn, sn), sn
        }
    }, be.each(be.expr.match.bool.source.match(/\w+/g), function (nn, an) {
        var sn = Nt[an] || be.find.attr;
        Nt[an] = function (rn, dn, ln) {
            var pn, cn;
            return ln || (cn = Nt[dn], Nt[dn] = pn, pn = null == sn(rn, dn, ln) ? null : dn.toLowerCase(), Nt[dn] = cn), pn
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;
    be.fn.extend({
        prop: function (nn, an) {
            return Ie(this, be.prop, nn, an, 1 < arguments.length)
        },
        removeProp: function (nn) {
            return this.each(function () {
                delete this[be.propFix[nn] || nn]
            })
        }
    }), be.extend({
        prop: function (nn, an, sn) {
            var ln = nn.nodeType,
                rn, dn;
            if (3 !== ln && 8 !== ln && 2 !== ln) return 1 === ln && be.isXMLDoc(nn) || (an = be.propFix[an] || an, dn = be.propHooks[an]), void 0 === sn ? dn && "get" in dn && null !== (rn = dn.get(nn, an)) ? rn : nn[an] : dn && "set" in dn && void 0 !== (rn = dn.set(nn, sn, an)) ? rn : nn[an] = sn
        },
        propHooks: {
            tabIndex: {
                get: function (nn) {
                    var an = be.find.attr(nn, "tabindex");
                    return an ? parseInt(an, 10) : kt.test(nn.nodeName) || St.test(nn.nodeName) && nn.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ye.optSelected || (be.propHooks.selected = {
        get: function (nn) {
            var an = nn.parentNode;
            return an && an.parentNode && an.parentNode.selectedIndex, null
        },
        set: function (nn) {
            var an = nn.parentNode;
            an && (an.selectedIndex, an.parentNode && an.parentNode.selectedIndex)
        }
    }), be.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        be.propFix[this.toLowerCase()] = this
    });
    var jt = /[\t\r\n\f]/g;
    be.fn.extend({
        addClass: function (nn) {
            var un = 0,
                an, sn, rn, dn, ln, pn, cn;
            if (be.isFunction(nn)) return this.each(function (hn) {
                be(this).addClass(nn.call(this, hn, ee(this)))
            });
            if ("string" == typeof nn && nn)
                for (an = nn.match(Pe) || []; sn = this[un++];)
                    if (dn = ee(sn), rn = 1 === sn.nodeType && (" " + dn + " ").replace(jt, " "), rn) {
                        for (pn = 0; ln = an[pn++];) 0 > rn.indexOf(" " + ln + " ") && (rn += ln + " ");
                        cn = be.trim(rn), dn != cn && sn.setAttribute("class", cn)
                    }
            return this
        },
        removeClass: function (nn) {
            var un = 0,
                an, sn, rn, dn, ln, pn, cn;
            if (be.isFunction(nn)) return this.each(function (hn) {
                be(this).removeClass(nn.call(this, hn, ee(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof nn && nn)
                for (an = nn.match(Pe) || []; sn = this[un++];)
                    if (dn = ee(sn), rn = 1 === sn.nodeType && (" " + dn + " ").replace(jt, " "), rn) {
                        for (pn = 0; ln = an[pn++];)
                            for (; - 1 < rn.indexOf(" " + ln + " ");) rn = rn.replace(" " + ln + " ", " ");
                        cn = be.trim(rn), dn != cn && sn.setAttribute("class", cn)
                    }
            return this
        },
        toggleClass: function (nn, an) {
            var sn = typeof nn;
            return "boolean" == typeof an && "string" == sn ? an ? this.addClass(nn) : this.removeClass(nn) : be.isFunction(nn) ? this.each(function (rn) {
                be(this).toggleClass(nn.call(this, rn, ee(this), an), an)
            }) : this.each(function () {
                var rn, dn, ln, pn;
                if ("string" == sn)
                    for (dn = 0, ln = be(this), pn = nn.match(Pe) || []; rn = pn[dn++];) ln.hasClass(rn) ? ln.removeClass(rn) : ln.addClass(rn);
                else(void 0 === nn || "boolean" == sn) && (rn = ee(this), rn && We.set(this, "__className__", rn), this.setAttribute && this.setAttribute("class", rn || !1 === nn ? "" : We.get(this, "__className__") || ""))
            })
        },
        hasClass: function (nn) {
            var rn = 0,
                an, sn;
            for (an = " " + nn + " "; sn = this[rn++];)
                if (1 === sn.nodeType && -1 < (" " + ee(sn) + " ").replace(jt, " ").indexOf(an)) return !0;
            return !1
        }
    });
    var Dt = /\r/g,
        Et = /[\x20\t\r\n\f]+/g;
    be.fn.extend({
        val: function (nn) {
            var dn = this[0],
                an, sn, rn;
            return arguments.length ? (rn = be.isFunction(nn), this.each(function (ln) {
                var pn;
                1 !== this.nodeType || (pn = rn ? nn.call(this, ln, be(this).val()) : nn, null == pn ? pn = "" : "number" == typeof pn ? pn += "" : be.isArray(pn) && (pn = be.map(pn, function (cn) {
                    return null == cn ? "" : cn + ""
                })), an = be.valHooks[this.type] || be.valHooks[this.nodeName.toLowerCase()], (!an || !("set" in an) || void 0 === an.set(this, pn, "value")) && (this.value = pn))
            })) : dn ? (an = be.valHooks[dn.type] || be.valHooks[dn.nodeName.toLowerCase()], an && "get" in an && void 0 !== (sn = an.get(dn, "value"))) ? sn : (sn = dn.value, "string" == typeof sn ? sn.replace(Dt, "") : null == sn ? "" : sn) : void 0
        }
    }), be.extend({
        valHooks: {
            option: {
                get: function (nn) {
                    var an = be.find.attr(nn, "value");
                    return null == an ? be.trim(be.text(nn)).replace(Et, " ") : an
                }
            },
            select: {
                get: function (nn) {
                    for (var rn = nn.options, dn = nn.selectedIndex, ln = "select-one" === nn.type || 0 > dn, pn = ln ? null : [], cn = ln ? dn + 1 : rn.length, un = 0 > dn ? cn : ln ? dn : 0, an, sn; un < cn; un++)
                        if (sn = rn[un], (sn.selected || un === dn) && (ye.optDisabled ? !sn.disabled : null === sn.getAttribute("disabled")) && (!sn.parentNode.disabled || !be.nodeName(sn.parentNode, "optgroup"))) {
                            if (an = be(sn).val(), ln) return an;
                            pn.push(an)
                        }
                    return pn
                },
                set: function (nn, an) {
                    for (var dn = nn.options, ln = be.makeArray(an), pn = dn.length, sn, rn; pn--;) rn = dn[pn], (rn.selected = -1 < be.inArray(be.valHooks.option.get(rn), ln)) && (sn = !0);
                    return sn || (nn.selectedIndex = -1), ln
                }
            }
        }
    }), be.each(["radio", "checkbox"], function () {
        be.valHooks[this] = {
            set: function (nn, an) {
                if (be.isArray(an)) return nn.checked = -1 < be.inArray(be(nn).val(), an)
            }
        }, ye.checkOn || (be.valHooks[this].get = function (nn) {
            return null === nn.getAttribute("value") ? "on" : nn.value
        })
    });
    var At = /^(?:focusinfocus|focusoutblur)$/;
    be.extend(be.event, {
        trigger: function (nn, an, sn, rn) {
            var gn = [sn || le],
                yn = ge.call(nn, "type") ? nn.type : nn,
                xn = ge.call(nn, "namespace") ? nn.namespace.split(".") : [],
                dn, ln, pn, cn, un, hn, mn;
            if ((ln = pn = sn = sn || le, 3 !== sn.nodeType && 8 !== sn.nodeType) && !At.test(yn + be.event.triggered) && (-1 < yn.indexOf(".") && (xn = yn.split("."), yn = xn.shift(), xn.sort()), un = 0 > yn.indexOf(":") && "on" + yn, nn = nn[be.expando] ? nn : new be.Event(yn, "object" == typeof nn && nn), nn.isTrigger = rn ? 2 : 3, nn.namespace = xn.join("."), nn.rnamespace = nn.namespace ? new RegExp("(^|\\.)" + xn.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, nn.result = void 0, nn.target || (nn.target = sn), an = null == an ? [nn] : be.makeArray(an, [nn]), mn = be.event.special[yn] || {}, rn || !mn.trigger || !1 !== mn.trigger.apply(sn, an))) {
                if (!rn && !mn.noBubble && !be.isWindow(sn)) {
                    for (cn = mn.delegateType || yn, At.test(cn + yn) || (ln = ln.parentNode); ln; ln = ln.parentNode) gn.push(ln), pn = ln;
                    pn === (sn.ownerDocument || le) && gn.push(pn.defaultView || pn.parentWindow || o)
                }
                for (dn = 0;
                    (ln = gn[dn++]) && !nn.isPropagationStopped();) nn.type = 1 < dn ? cn : mn.bindType || yn, hn = (We.get(ln, "events") || {})[nn.type] && We.get(ln, "handle"), hn && hn.apply(ln, an), hn = un && ln[un], hn && hn.apply && Me(ln) && (nn.result = hn.apply(ln, an), !1 === nn.result && nn.preventDefault());
                return nn.type = yn, rn || nn.isDefaultPrevented() || mn._default && !1 !== mn._default.apply(gn.pop(), an) || !Me(sn) || !un || !be.isFunction(sn[yn]) || be.isWindow(sn) || (pn = sn[un], pn && (sn[un] = null), be.event.triggered = yn, sn[yn](), be.event.triggered = void 0, pn && (sn[un] = pn)), nn.result
            }
        },
        simulate: function (nn, an, sn) {
            var rn = be.extend(new be.Event, sn, {
                type: nn,
                isSimulated: !0
            });
            be.event.trigger(rn, null, an)
        }
    }), be.fn.extend({
        trigger: function (nn, an) {
            return this.each(function () {
                be.event.trigger(nn, an, this)
            })
        },
        triggerHandler: function (nn, an) {
            var sn = this[0];
            if (sn) return be.event.trigger(nn, an, sn, !0)
        }
    }), be.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (nn, an) {
        be.fn[an] = function (sn, rn) {
            return 0 < arguments.length ? this.on(an, null, sn, rn) : this.trigger(an)
        }
    }), be.fn.extend({
        hover: function (nn, an) {
            return this.mouseenter(nn).mouseleave(an || nn)
        }
    }), ye.focusin = "onfocusin" in o, ye.focusin || be.each({
        focus: "focusin",
        blur: "focusout"
    }, function (nn, an) {
        var sn = function (rn) {
            be.event.simulate(an, rn.target, be.event.fix(rn))
        };
        be.event.special[an] = {
            setup: function () {
                var rn = this.ownerDocument || this,
                    dn = We.access(rn, an);
                dn || rn.addEventListener(nn, sn, !0), We.access(rn, an, (dn || 0) + 1)
            },
            teardown: function () {
                var rn = this.ownerDocument || this,
                    dn = We.access(rn, an) - 1;
                dn ? We.access(rn, an, dn) : (rn.removeEventListener(nn, sn, !0), We.remove(rn, an))
            }
        }
    });
    var Lt = o.location,
        qt = be.now(),
        Ht = /\?/;
    be.parseJSON = function (nn) {
        return JSON.parse(nn + "")
    }, be.parseXML = function (nn) {
        var an;
        if (!nn || "string" != typeof nn) return null;
        try {
            an = new o.DOMParser().parseFromString(nn, "text/xml")
        } catch (sn) {
            an = void 0
        }
        return (!an || an.getElementsByTagName("parsererror").length) && be.error("Invalid XML: " + nn), an
    };
    var Ot = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        Rt = {},
        Bt = {},
        _t = "*/".concat("*"),
        $t = le.createElement("a");
    $t.href = Lt.href, be.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: It.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": be.parseJSON,
                "text xml": be.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (nn, an) {
            return an ? ae(ae(nn, be.ajaxSettings), an) : ae(be.ajaxSettings, nn)
        },
        ajaxPrefilter: te(Rt),
        ajaxTransport: te(Bt),
        ajax: function (nn, an) {
            function sn(jn, Dn, En, An) {
                var Fn = Dn,
                    Ln, qn, Hn, On, Pn;
                2 === Nn || (Nn = 2, cn && o.clearTimeout(cn), rn = void 0, ln = An || "", Sn.readyState = 0 < jn ? 4 : 0, Ln = 200 <= jn && 300 > jn || 304 === jn, En && (On = oe(gn, Sn, En)), On = se(gn, On, Sn, Ln), Ln ? (gn.ifModified && (Pn = Sn.getResponseHeader("Last-Modified"), Pn && (be.lastModified[dn] = Pn), Pn = Sn.getResponseHeader("etag"), Pn && (be.etag[dn] = Pn)), 204 === jn || "HEAD" === gn.type ? Fn = "nocontent" : 304 === jn ? Fn = "notmodified" : (Fn = On.state, qn = On.data, Hn = On.error, Ln = !Hn)) : (Hn = Fn, (jn || !Fn) && (Fn = "error", 0 > jn && (jn = 0))), Sn.status = jn, Sn.statusText = (Dn || Fn) + "", Ln ? bn.resolveWith(yn, [qn, Fn, Sn]) : bn.rejectWith(yn, [Sn, Fn, Hn]), Sn.statusCode(Tn), Tn = void 0, hn && xn.trigger(Ln ? "ajaxSuccess" : "ajaxError", [Sn, gn, Ln ? qn : Hn]), vn.fireWith(yn, [Sn, Fn]), hn && (xn.trigger("ajaxComplete", [Sn, gn]), !--be.active && be.event.trigger("ajaxStop")))
            }
            "object" == typeof nn && (an = nn, nn = void 0), an = an || {};
            var gn = be.ajaxSetup({}, an),
                yn = gn.context || gn,
                xn = gn.context && (yn.nodeType || yn.jquery) ? be(yn) : be.event,
                bn = be.Deferred(),
                vn = be.Callbacks("once memory"),
                Tn = gn.statusCode || {},
                wn = {},
                Cn = {},
                Nn = 0,
                kn = "canceled",
                Sn = {
                    readyState: 0,
                    getResponseHeader: function (jn) {
                        var Dn;
                        if (2 == Nn) {
                            if (!pn)
                                for (pn = {}; Dn = Ft.exec(ln);) pn[Dn[1].toLowerCase()] = Dn[2];
                            Dn = pn[jn.toLowerCase()]
                        }
                        return null == Dn ? null : Dn
                    },
                    getAllResponseHeaders: function () {
                        return 2 == Nn ? ln : null
                    },
                    setRequestHeader: function (jn, Dn) {
                        var En = jn.toLowerCase();
                        return Nn || (jn = Cn[En] = Cn[En] || jn, wn[jn] = Dn), this
                    },
                    overrideMimeType: function (jn) {
                        return Nn || (gn.mimeType = jn), this
                    },
                    statusCode: function (jn) {
                        if (jn)
                            if (2 > Nn)
                                for (var Dn in jn) Tn[Dn] = [Tn[Dn], jn[Dn]];
                            else Sn.always(jn[Sn.status]);
                        return this
                    },
                    abort: function (jn) {
                        var Dn = jn || kn;
                        return rn && rn.abort(Dn), sn(0, Dn), this
                    }
                },
                rn, dn, ln, pn, cn, un, hn, mn;
            if (bn.promise(Sn).complete = vn.add, Sn.success = Sn.done, Sn.error = Sn.fail, gn.url = ((nn || gn.url || Lt.href) + "").replace(Ot, "").replace(Wt, Lt.protocol + "//"), gn.type = an.method || an.type || gn.method || gn.type, gn.dataTypes = be.trim(gn.dataType || "*").toLowerCase().match(Pe) || [""], null == gn.crossDomain) {
                un = le.createElement("a");
                try {
                    un.href = gn.url, un.href = un.href, gn.crossDomain = $t.protocol + "//" + $t.host != un.protocol + "//" + un.host
                } catch (jn) {
                    gn.crossDomain = !0
                }
            }
            if (gn.data && gn.processData && "string" != typeof gn.data && (gn.data = be.param(gn.data, gn.traditional)), ne(Rt, gn, an, Sn), 2 == Nn) return Sn;
            for (mn in hn = be.event && gn.global, hn && 0 == be.active++ && be.event.trigger("ajaxStart"), gn.type = gn.type.toUpperCase(), gn.hasContent = !Mt.test(gn.type), dn = gn.url, gn.hasContent || (gn.data && (dn = gn.url += (Ht.test(dn) ? "&" : "?") + gn.data, delete gn.data), !1 === gn.cache && (gn.url = Pt.test(dn) ? dn.replace(Pt, "$1_=" + qt++) : dn + (Ht.test(dn) ? "&" : "?") + "_=" + qt++)), gn.ifModified && (be.lastModified[dn] && Sn.setRequestHeader("If-Modified-Since", be.lastModified[dn]), be.etag[dn] && Sn.setRequestHeader("If-None-Match", be.etag[dn])), (gn.data && gn.hasContent && !1 !== gn.contentType || an.contentType) && Sn.setRequestHeader("Content-Type", gn.contentType), Sn.setRequestHeader("Accept", gn.dataTypes[0] && gn.accepts[gn.dataTypes[0]] ? gn.accepts[gn.dataTypes[0]] + ("*" === gn.dataTypes[0] ? "" : ", " + _t + "; q=0.01") : gn.accepts["*"]), gn.headers) Sn.setRequestHeader(mn, gn.headers[mn]);
            if (gn.beforeSend && (!1 === gn.beforeSend.call(yn, Sn, gn) || 2 == Nn)) return Sn.abort();
            for (mn in kn = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) Sn[mn](gn[mn]);
            if (rn = ne(Bt, gn, an, Sn), !rn) sn(-1, "No Transport");
            else {
                if (Sn.readyState = 1, hn && xn.trigger("ajaxSend", [Sn, gn]), 2 == Nn) return Sn;
                gn.async && 0 < gn.timeout && (cn = o.setTimeout(function () {
                    Sn.abort("timeout")
                }, gn.timeout));
                try {
                    Nn = 1, rn.send(wn, sn)
                } catch (jn) {
                    if (2 > Nn) sn(-1, jn);
                    else throw jn
                }
            }
            return Sn
        },
        getJSON: function (nn, an, sn) {
            return be.get(nn, an, sn, "json")
        },
        getScript: function (nn, an) {
            return be.get(nn, void 0, an, "script")
        }
    }), be.each(["get", "post"], function (nn, an) {
        be[an] = function (sn, rn, dn, ln) {
            return be.isFunction(rn) && (ln = ln || dn, dn = rn, rn = void 0), be.ajax(be.extend({
                url: sn,
                type: an,
                dataType: ln,
                data: rn,
                success: dn
            }, be.isPlainObject(sn) && sn))
        }
    }), be._evalUrl = function (nn) {
        return be.ajax({
            url: nn,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, be.fn.extend({
        wrapAll: function (nn) {
            var an;
            return be.isFunction(nn) ? this.each(function (sn) {
                be(this).wrapAll(nn.call(this, sn))
            }) : (this[0] && (an = be(nn, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && an.insertBefore(this[0]), an.map(function () {
                for (var sn = this; sn.firstElementChild;) sn = sn.firstElementChild;
                return sn
            }).append(this)), this)
        },
        wrapInner: function (nn) {
            return be.isFunction(nn) ? this.each(function (an) {
                be(this).wrapInner(nn.call(this, an))
            }) : this.each(function () {
                var an = be(this),
                    sn = an.contents();
                sn.length ? sn.wrapAll(nn) : an.append(nn)
            })
        },
        wrap: function (nn) {
            var an = be.isFunction(nn);
            return this.each(function (sn) {
                be(this).wrapAll(an ? nn.call(this, sn) : nn)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                be.nodeName(this, "body") || be(this).replaceWith(this.childNodes)
            }).end()
        }
    }), be.expr.filters.hidden = function (nn) {
        return !be.expr.filters.visible(nn)
    }, be.expr.filters.visible = function (nn) {
        return 0 < nn.offsetWidth || 0 < nn.offsetHeight || 0 < nn.getClientRects().length
    };
    var Xt = /%20/g,
        zt = /\[\]$/,
        Ut = /\r?\n/g,
        Vt = /^(?:submit|button|image|reset|file)$/i,
        Yt = /^(?:input|select|textarea|keygen)/i;
    be.param = function (nn, an) {
        var rn = [],
            dn = function (ln, pn) {
                pn = be.isFunction(pn) ? pn() : null == pn ? "" : pn, rn[rn.length] = encodeURIComponent(ln) + "=" + encodeURIComponent(pn)
            },
            sn;
        if (void 0 === an && (an = be.ajaxSettings && be.ajaxSettings.traditional), be.isArray(nn) || nn.jquery && !be.isPlainObject(nn)) be.each(nn, function () {
            dn(this.name, this.value)
        });
        else
            for (sn in nn) ie(sn, nn[sn], an, dn);
        return rn.join("&").replace(Xt, "+")
    }, be.fn.extend({
        serialize: function () {
            return be.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var nn = be.prop(this, "elements");
                return nn ? be.makeArray(nn) : this
            }).filter(function () {
                var nn = this.type;
                return this.name && !be(this).is(":disabled") && Yt.test(this.nodeName) && !Vt.test(nn) && (this.checked || !Ve.test(nn))
            }).map(function (nn, an) {
                var sn = be(this).val();
                return null == sn ? null : be.isArray(sn) ? be.map(sn, function (rn) {
                    return {
                        name: an.name,
                        value: rn.replace(Ut, "\r\n")
                    }
                }) : {
                    name: an.name,
                    value: sn.replace(Ut, "\r\n")
                }
            }).get()
        }
    }), be.ajaxSettings.xhr = function () {
        try {
            return new o.XMLHttpRequest
        } catch (nn) {}
    };
    var Gt = {
            0: 200,
            1223: 204
        },
        Qt = be.ajaxSettings.xhr();
    ye.cors = !!Qt && "withCredentials" in Qt, ye.ajax = Qt = !!Qt, be.ajaxTransport(function (nn) {
        var an, sn;
        if (ye.cors || Qt && !nn.crossDomain) return {
            send: function (rn, dn) {
                var pn = nn.xhr(),
                    ln;
                if (pn.open(nn.type, nn.url, nn.async, nn.username, nn.password), nn.xhrFields)
                    for (ln in nn.xhrFields) pn[ln] = nn.xhrFields[ln];
                for (ln in nn.mimeType && pn.overrideMimeType && pn.overrideMimeType(nn.mimeType), nn.crossDomain || rn["X-Requested-With"] || (rn["X-Requested-With"] = "XMLHttpRequest"), rn) pn.setRequestHeader(ln, rn[ln]);
                an = function (cn) {
                    return function () {
                        an && (an = sn = pn.onload = pn.onerror = pn.onabort = pn.onreadystatechange = null, "abort" === cn ? pn.abort() : "error" === cn ? "number" == typeof pn.status ? dn(pn.status, pn.statusText) : dn(0, "error") : dn(Gt[pn.status] || pn.status, pn.statusText, "text" !== (pn.responseType || "text") || "string" != typeof pn.responseText ? {
                            binary: pn.response
                        } : {
                            text: pn.responseText
                        }, pn.getAllResponseHeaders()))
                    }
                }, pn.onload = an(), sn = pn.onerror = an("error"), void 0 === pn.onabort ? pn.onreadystatechange = function () {
                    4 === pn.readyState && o.setTimeout(function () {
                        an && sn()
                    })
                } : pn.onabort = sn, an = an("abort");
                try {
                    pn.send(nn.hasContent && nn.data || null)
                } catch (cn) {
                    if (an) throw cn
                }
            },
            abort: function () {
                an && an()
            }
        }
    }), be.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (nn) {
                return be.globalEval(nn), nn
            }
        }
    }), be.ajaxPrefilter("script", function (nn) {
        void 0 === nn.cache && (nn.cache = !1), nn.crossDomain && (nn.type = "GET")
    }), be.ajaxTransport("script", function (nn) {
        if (nn.crossDomain) {
            var an, sn;
            return {
                send: function (rn, dn) {
                    an = be("<script>").prop({
                        charset: nn.scriptCharset,
                        src: nn.url
                    }).on("load error", sn = function (ln) {
                        an.remove(), sn = null, ln && dn("error" === ln.type ? 404 : 200, ln.type)
                    }), le.head.appendChild(an[0])
                },
                abort: function () {
                    sn && sn()
                }
            }
        }
    });
    var Jt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    be.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var nn = Jt.pop() || be.expando + "_" + qt++;
            return this[nn] = !0, nn
        }
    }), be.ajaxPrefilter("json jsonp", function (nn, an, sn) {
        var pn = !1 !== nn.jsonp && (Kt.test(nn.url) ? "url" : "string" == typeof nn.data && 0 === (nn.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(nn.data) && "data"),
            rn, dn, ln;
        if (pn || "jsonp" === nn.dataTypes[0]) return rn = nn.jsonpCallback = be.isFunction(nn.jsonpCallback) ? nn.jsonpCallback() : nn.jsonpCallback, pn ? nn[pn] = nn[pn].replace(Kt, "$1" + rn) : !1 !== nn.jsonp && (nn.url += (Ht.test(nn.url) ? "&" : "?") + nn.jsonp + "=" + rn), nn.converters["script json"] = function () {
            return ln || be.error(rn + " was not called"), ln[0]
        }, nn.dataTypes[0] = "json", dn = o[rn], o[rn] = function () {
            ln = arguments
        }, sn.always(function () {
            void 0 == dn ? be(o).removeProp(rn) : o[rn] = dn, nn[rn] && (nn.jsonpCallback = an.jsonpCallback, Jt.push(rn)), ln && be.isFunction(dn) && dn(ln[0]), ln = dn = void 0
        }), "script"
    }), be.parseHTML = function (nn, an, sn) {
        if (!nn || "string" != typeof nn) return null;
        "boolean" == typeof an && (sn = an, an = !1), an = an || le;
        var rn = De.exec(nn),
            dn = !sn && [];
        return rn ? [an.createElement(rn[1])] : (rn = N([nn], an, dn), dn && dn.length && be(dn).remove(), be.merge([], rn.childNodes))
    };
    var Zt = be.fn.load;
    be.fn.load = function (nn, an, sn) {
        if ("string" != typeof nn && Zt) return Zt.apply(this, arguments);
        var pn = this,
            cn = nn.indexOf(" "),
            rn, dn, ln;
        return -1 < cn && (rn = be.trim(nn.slice(cn)), nn = nn.slice(0, cn)), be.isFunction(an) ? (sn = an, an = void 0) : an && "object" == typeof an && (dn = "POST"), 0 < pn.length && be.ajax({
            url: nn,
            type: dn || "GET",
            dataType: "html",
            data: an
        }).done(function (un) {
            ln = arguments, pn.html(rn ? be("<div>").append(be.parseHTML(un)).find(rn) : un)
        }).always(sn && function (un, hn) {
            pn.each(function () {
                sn.apply(this, ln || [un.responseText, hn, un])
            })
        }), this
    }, be.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (nn, an) {
        be.fn[an] = function (sn) {
            return this.on(an, sn)
        }
    }), be.expr.filters.animated = function (nn) {
        return be.grep(be.timers, function (an) {
            return nn === an.elem
        }).length
    }, be.offset = {
        setOffset: function (nn, an, sn) {
            var mn = be.css(nn, "position"),
                gn = be(nn),
                yn = {},
                rn, dn, ln, pn, cn, un, hn;
            "static" === mn && (nn.style.position = "relative"), cn = gn.offset(), ln = be.css(nn, "top"), un = be.css(nn, "left"), hn = ("absolute" === mn || "fixed" === mn) && -1 < (ln + un).indexOf("auto"), hn ? (rn = gn.position(), pn = rn.top, dn = rn.left) : (pn = parseFloat(ln) || 0, dn = parseFloat(un) || 0), be.isFunction(an) && (an = an.call(nn, sn, be.extend({}, cn))), null != an.top && (yn.top = an.top - cn.top + pn), null != an.left && (yn.left = an.left - cn.left + dn), "using" in an ? an.using.call(nn, yn) : gn.css(yn)
        }
    }, be.fn.extend({
        offset: function (nn) {
            if (arguments.length) return void 0 === nn ? this : this.each(function (pn) {
                be.offset.setOffset(this, nn, pn)
            });
            var rn = this[0],
                dn = {
                    top: 0,
                    left: 0
                },
                ln = rn && rn.ownerDocument,
                an, sn;
            if (ln) return (an = ln.documentElement, !be.contains(an, rn)) ? dn : (dn = rn.getBoundingClientRect(), sn = re(ln), {
                top: dn.top + sn.pageYOffset - an.clientTop,
                left: dn.left + sn.pageXOffset - an.clientLeft
            })
        },
        position: function () {
            if (this[0]) {
                var sn = this[0],
                    rn = {
                        top: 0,
                        left: 0
                    },
                    nn, an;
                return "fixed" === be.css(sn, "position") ? an = sn.getBoundingClientRect() : (nn = this.offsetParent(), an = this.offset(), !be.nodeName(nn[0], "html") && (rn = nn.offset()), rn.top += be.css(nn[0], "borderTopWidth", !0), rn.left += be.css(nn[0], "borderLeftWidth", !0)), {
                    top: an.top - rn.top - be.css(sn, "marginTop", !0),
                    left: an.left - rn.left - be.css(sn, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var nn = this.offsetParent; nn && "static" === be.css(nn, "position");) nn = nn.offsetParent;
                return nn || ft
            })
        }
    }), be.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (nn, an) {
        var sn = "pageYOffset" === an;
        be.fn[nn] = function (rn) {
            return Ie(this, function (dn, ln, pn) {
                var cn = re(dn);
                return void 0 === pn ? cn ? cn[an] : dn[ln] : void(cn ? cn.scrollTo(sn ? cn.pageXOffset : pn, sn ? pn : cn.pageYOffset) : dn[ln] = pn)
            }, nn, rn, arguments.length)
        }
    }), be.each(["top", "left"], function (nn, an) {
        be.cssHooks[an] = R(ye.pixelPosition, function (sn, rn) {
            if (rn) return rn = W(sn, an), lt.test(rn) ? be(sn).position()[an] + "px" : rn
        })
    }), be.each({
        Height: "height",
        Width: "width"
    }, function (nn, an) {
        be.each({
            padding: "inner" + nn,
            content: an,
            "": "outer" + nn
        }, function (sn, rn) {
            be.fn[rn] = function (dn, ln) {
                var pn = arguments.length && (sn || "boolean" != typeof dn),
                    cn = sn || (!0 === dn || !0 === ln ? "margin" : "border");
                return Ie(this, function (un, hn, mn) {
                    var gn;
                    return be.isWindow(un) ? un.document.documentElement["client" + nn] : 9 === un.nodeType ? (gn = un.documentElement, Math.max(un.body["scroll" + nn], gn["scroll" + nn], un.body["offset" + nn], gn["offset" + nn], gn["client" + nn])) : void 0 === mn ? be.css(un, hn, cn) : be.style(un, hn, mn, cn)
                }, an, pn ? dn : void 0, pn, null)
            }
        })
    }), be.fn.extend({
        bind: function (nn, an, sn) {
            return this.on(nn, null, an, sn)
        },
        unbind: function (nn, an) {
            return this.off(nn, null, an)
        },
        delegate: function (nn, an, sn, rn) {
            return this.on(an, nn, sn, rn)
        },
        undelegate: function (nn, an, sn) {
            return 1 === arguments.length ? this.off(nn, "**") : this.off(an, nn || "**", sn)
        },
        size: function () {
            return this.length
        }
    }), be.fn.andSelf = be.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return be
    });
    var en = o.jQuery,
        tn = o.$;
    return be.noConflict = function (nn) {
        return o.$ === be && (o.$ = tn), nn && o.jQuery === be && (o.jQuery = en), be
    }, r || (o.jQuery = o.$ = be), be
});