/*!
 * ScrollTrigger 3.5.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function H(e) {
        return e
    }

    function I() {
        return "undefined" != typeof window
    }

    function J() {
        return ke || I() && (ke = window.gsap) && ke.registerPlugin && ke
    }

    function K(e) {
        return !!~i.indexOf(e)
    }

    function L(e, t) {
        return ~We.indexOf(e) && We[We.indexOf(e) + 1][t]
    }

    function M(t, e) {
        var r = e.s,
            n = e.sc,
            o = h.indexOf(t),
            i = n === rt.sc ? 1 : 2;
        return ~o || (o = h.push(t) - 1), h[o + i] || (h[o + i] = L(t, r) || (K(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }))
    }

    function N(e) {
        return L(e, "getBoundingClientRect") || (K(e) ? function() {
            return ft.width = Me.innerWidth, ft.height = Me.innerHeight, ft
        } : function() {
            return nt(e)
        })
    }

    function Q(e, t) {
        var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
        return (r = "scroll" + n) && (i = L(e, r)) ? i() - N(e)()[o] : K(e) ? Math.max(Pe[r], Oe[r]) - (Me["inner" + n] || Pe["client" + n] || Oe["client" + n]) : e[r] - e["offset" + n]
    }

    function R(e, t) {
        for (var r = 0; r < d.length; r += 3) t && !~t.indexOf(d[r + 1]) || e(d[r], d[r + 1], d[r + 2])
    }

    function S(e) {
        return "string" == typeof e
    }

    function T(e) {
        return "function" == typeof e
    }

    function U(e) {
        return "number" == typeof e
    }

    function V(e) {
        return "object" == typeof e
    }

    function W(e) {
        return T(e) && e()
    }

    function X(r, n) {
        return function() {
            var e = W(r),
                t = W(n);
            return function() {
                W(e), W(t)
            }
        }
    }

    function qa(e) {
        return Me.getComputedStyle(e)
    }

    function sa(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function ua(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function wa(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function xa(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        })
    }

    function ya(e, t, r) {
        return e.removeEventListener(t, r)
    }

    function Ca(e, t) {
        if (S(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in m ? m[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function Da(e, t, r, n, o, i, a) {
        var s = o.startColor,
            l = o.endColor,
            c = o.fontSize,
            f = o.indent,
            u = o.fontWeight,
            p = _e.createElement("div"),
            d = K(r) || "fixed" === L(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            h = d ? Oe : r,
            v = -1 !== e.indexOf("start"),
            x = v ? s : l,
            m = "border-color:" + x + ";font-size:" + c + ";color:" + x + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return m += "position:" + (g && d ? "fixed;" : "absolute;"), !g && d || (m += (n === rt ? b : y) + ":" + (i + parseFloat(f)) + "px;"), a && (m += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = m, p.innerText = t || 0 === t ? e + "-" + t : e, h.insertBefore(p, h.children[0]), p._offset = p["offset" + n.op.d2], w(p, 0, n, v), p
    }

    function Ha() {
        return l = l || s(B)
    }

    function Ia() {
        l || (l = s(B), De || P("scrollStart"), De = He())
    }

    function Ja() {
        return !Re && a.restart(!0)
    }

    function Pa(e) {
        var t = ke.ticker.frame,
            r = [],
            n = 0;
        if (g !== t || Fe) {
            for (A(); n < _.length; n += 3) Me.matchMedia(_[n]).matches ? r.push(n) : A(1, _[n]) || T(_[n + 2]) && _[n + 2]();
            for (E(), n = 0; n < r.length; n++) Be = _[r[n]], _[r[n] + 2] = _[r[n] + 1](e);
            z(Be = 0, 1), g = t, P("matchMedia")
        }
    }

    function Qa() {
        return ya(Y, "scrollEnd", Qa) || z(!0)
    }

    function ab(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var o, i = F.length, a = t.style, s = e.style; i--;) a[o = F[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[y] = s[b] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Ke] = ua(e, tt) + et, a[je] = ua(e, rt) + et, a[$e] = s[Ze] = s.top = s[x] = "0", ct(n), s[Ke] = r[Ke], s[je] = r[je], s[$e] = r[$e], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function db(e) {
        for (var t = D.length, r = e.style, n = [], o = 0; o < t; o++) n.push(D[o], r[D[o]]);
        return n.t = e, n
    }

    function gb(e, t, r, n, o, i, a, s, l, c, f, u) {
        if (T(e) && (e = e(s)), S(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ca("0" + e.substr(3), r) : 0)), U(e)) a && w(a, r, n, !0);
        else {
            T(t) && (t = t(s));
            var p, d, g, h = Ee(t)[0] || Oe,
                v = nt(h) || {},
                x = e.split(" ");
            v && (v.left || v.top) || "none" !== qa(h).display || (g = h.style.display, h.style.display = "block", v = nt(h), g ? h.style.display = g : h.style.removeProperty("display")), p = Ca(x[0], v[n.d]), d = Ca(x[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && w(a, d, n, r - d < 20 || a._isStart && 20 < d), r -= r - d
        }
        if (i) {
            var m = e + r,
                b = i._isStart;
            u = "scroll" + n.d2, w(i, m, n, b && 20 < m || !b && (f ? Math.max(Oe[u], Pe[u]) : i.parentNode[u]) <= m + 1), f && (l = nt(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + et))
        }
        return Math.round(e)
    }

    function jb(l, e) {
        var c, f, u = M(l, e),
            p = "_scroll" + e.p2;
        return l[p] = u,
            function getTween(e, t, r, n, o) {
                var i = getTween.tween,
                    a = t.onComplete,
                    s = {};
                return i && i.kill(), c = r, t[p] = e, (t.modifiers = s)[p] = function(e) {
                    return (e = u()) !== c && e !== f ? (i.kill(), getTween.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, f = c, c = Math.round(e)
                }, t.onComplete = function() {
                    getTween.tween = 0, a && a.call(i)
                }, i = getTween.tween = ke.to(l, t)
            }
    }
    var ke, o, Me, _e, Pe, Oe, i, a, s, l, Ee, Le, Ie, c, Re, Ae, f, ze, u, p, d, Ne, qe, Be, g, Fe = 1,
        We = [],
        h = [],
        He = Date.now,
        v = He(),
        De = 0,
        Je = 1,
        Qe = Math.abs,
        t = "scrollLeft",
        r = "scrollTop",
        x = "left",
        b = "right",
        y = "bottom",
        Ke = "width",
        je = "height",
        Ve = "Right",
        Xe = "Left",
        Ue = "Top",
        Ye = "Bottom",
        $e = "padding",
        Ze = "margin",
        Ge = "Width",
        n = "Height",
        et = "px",
        tt = {
            s: t,
            p: x,
            p2: Xe,
            os: b,
            os2: Ve,
            d: Ke,
            d2: Ge,
            a: "x",
            sc: function sc(e) {
                return arguments.length ? Me.scrollTo(e, rt.sc()) : Me.pageXOffset || _e[t] || Pe[t] || Oe[t] || 0
            }
        },
        rt = {
            s: r,
            p: "top",
            p2: Ue,
            os: y,
            os2: Ye,
            d: je,
            d2: n,
            a: "y",
            op: tt,
            sc: function sc(e) {
                return arguments.length ? Me.scrollTo(tt.sc(), e) : Me.pageYOffset || _e[r] || Pe[r] || Oe[r] || 0
            }
        },
        nt = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== qa(e)[f] && ke.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        ot = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        it = {
            toggleActions: "play",
            anticipatePin: 0
        },
        m = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        w = function _positionMarker(e, t, r, n) {
            var o = {
                    display: "block"
                },
                i = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? 1 : 0, o["border" + i + Ge] = 1, o["border" + a + Ge] = 0, o[r.p] = t, ke.set(e, o)
        },
        at = [],
        st = {},
        C = {},
        k = [],
        _ = [],
        P = function _dispatch(e) {
            return C[e] && C[e].map(function(e) {
                return e()
            }) || k
        },
        O = [],
        E = function _revertRecorded(e) {
            for (var t = 0; t < O.length; t += 4) e && O[t + 3] !== e || (O[t].style.cssText = O[t + 1], O[t + 2].uncache = 1)
        },
        A = function _revertAll(e, t) {
            var r;
            for (ze = 0; ze < at.length; ze++) r = at[ze], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
            E(t), t || P("revert")
        },
        z = function _refreshAll(e, t) {
            if (!De || e) {
                var r = P("refreshInit");
                for (Ne && Y.sort(), t || A(), ze = 0; ze < at.length; ze++) at[ze].refresh();
                for (r.forEach(function(e) {
                        return e && e.render && e.render(-1)
                    }), ze = at.length; ze--;) at[ze].scroll.rec = 0;
                P("refresh")
            } else xa(Y, "scrollEnd", Qa)
        },
        q = 0,
        lt = 1,
        B = function _updateAll() {
            var e = at.length,
                t = He(),
                r = 50 <= t - v,
                n = e && at[0].scroll();
            if (lt = n < q ? -1 : 1, q = n, r && (De && !Ae && 200 < t - De && (De = 0, P("scrollEnd")), Ie = v, v = t), lt < 0) {
                for (ze = e; ze--;) at[ze] && at[ze].update(0, r);
                lt = 1
            } else
                for (ze = 0; ze < e; ze++) at[ze] && at[ze].update(0, r);
            l = 0
        },
        F = [x, "top", y, b, Ze + Ye, Ze + Ve, Ze + Ue, Ze + Xe, "display", "flexShrink", "float"],
        D = F.concat([Ke, je, "boxSizing", "max" + Ge, "max" + n, "position", Ze, $e, $e + Ue, $e + Ve, $e + Ye, $e + Xe]),
        j = /([A-Z])/g,
        ct = function _setState(e) {
            if (e)
                for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase())
        },
        ft = {
            left: 0,
            top: 0
        },
        ut = /(?:webkit|moz|length|cssText)/i;
    tt.op = rt;
    var Y = (ScrollTrigger.prototype.init = function init(b, y) {
        if (this.progress = 0, this.vars && this.kill(1), Je) {
            var d, n, l, w, C, k, _, P, O, E, I, R, e, A, z, q, B, F, t, W, g, D, J, h, j, v, x, r, m, X, Y, o, c, $, Z, G, ee, te = (b = sa(S(b) || U(b) || b.nodeType ? {
                    trigger: b
                } : b, it)).horizontal ? tt : rt,
                re = b.onUpdate,
                ne = b.toggleClass,
                i = b.id,
                oe = b.onToggle,
                ie = b.onRefresh,
                a = b.scrub,
                ae = b.trigger,
                se = b.pin,
                le = b.pinSpacing,
                ce = b.invalidateOnRefresh,
                fe = b.anticipatePin,
                s = b.onScrubComplete,
                f = b.onSnapComplete,
                ue = b.once,
                pe = b.snap,
                de = b.pinReparent,
                ge = !a && 0 !== a,
                he = Ee(b.scroller || Me)[0],
                u = ke.core.getCache(he),
                p = K(he),
                ve = "pinType" in b ? "fixed" === b.pinType : p || "fixed" === L(he, "pinType"),
                xe = [b.onEnter, b.onLeave, b.onEnterBack, b.onLeaveBack],
                me = ge && b.toggleActions.split(" "),
                be = "markers" in b ? b.markers : it.markers,
                ye = p ? 0 : parseFloat(qa(he)["border" + te.p2 + Ge]) || 0,
                Te = this,
                Se = b.onRefreshInit && function() {
                    return b.onRefreshInit(Te)
                },
                we = function _getSizeFunc(e, t, r) {
                    var n = r.d,
                        o = r.d2,
                        i = r.a;
                    return (i = L(e, "getBoundingClientRect")) ? function() {
                        return i()[n]
                    } : function() {
                        return (t ? Me["inner" + o] : e["client" + o]) || 0
                    }
                }(he, p, te),
                Ce = function _getOffsetsFunc(e, t) {
                    return !t || ~We.indexOf(e) ? N(e) : function() {
                        return ft
                    }
                }(he, p);
            Te.media = Be, fe *= 45, at.push(Te), Te.scroller = he, Te.scroll = M(he, te), C = Te.scroll(), Te.vars = b, y = y || b.animation, "refreshPriority" in b && (Ne = 1), u.tweenScroll = u.tweenScroll || {
                top: jb(he, rt),
                left: jb(he, tt)
            }, Te.tweenTo = d = u.tweenScroll[te.p], y && (y.vars.lazy = !1, y._initted || !1 !== y.vars.immediateRender && !1 !== b.immediateRender && y.render(0, !0, !0), Te.animation = y.pause(), y.scrollTrigger = Te, (o = U(a) && a) && (Y = ke.to(y, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                    return s && s(Te)
                }
            })), m = 0, i = i || y.vars.id), pe && (V(pe) || (pe = {
                snapTo: pe
            }), ke.set(p ? [Oe, Pe] : he, {
                scrollBehavior: "auto"
            }), l = T(pe.snapTo) ? pe.snapTo : "labels" === pe.snapTo ? function _getLabels(i) {
                return function(e) {
                    var t, r = [],
                        n = i.labels,
                        o = i.duration();
                    for (t in n) r.push(n[t] / o);
                    return ke.utils.snap(r, e)
                }
            }(y) : ke.utils.snap(pe.snapTo), c = pe.duration || {
                min: .1,
                max: 2
            }, c = V(c) ? Le(c.min, c.max) : Le(c, c), $ = ke.delayedCall(pe.delay || o / 2 || .1, function() {
                if (Math.abs(Te.getVelocity()) < 10 && !Ae) {
                    var e = y && !ge ? y.totalProgress() : Te.progress,
                        t = (e - X) / (He() - Ie) * 1e3 || 0,
                        r = Qe(t / 2) * t / .185,
                        n = e + r,
                        o = Le(0, 1, l(n, Te)),
                        i = Te.scroll(),
                        a = Math.round(_ + o * A),
                        s = d.tween;
                    if (i <= P && _ <= i && a !== i) {
                        if (s && !s._initted && s.data <= Math.abs(a - i)) return;
                        d(a, {
                            duration: c(Qe(.185 * Math.max(Qe(n - e), Qe(o - e)) / t / .05 || 0)),
                            ease: pe.ease || "power3",
                            data: Math.abs(a - i),
                            onComplete: function onComplete() {
                                m = X = y && !ge ? y.totalProgress() : Te.progress, f && f(Te)
                            }
                        }, i, r * A, a - i - r * A)
                    }
                } else Te.isActive && $.restart(!0)
            }).pause()), i && (st[i] = Te), ae = Te.trigger = Ee(ae || se)[0], se = !0 === se ? ae : Ee(se)[0], S(ne) && (ne = {
                targets: ae,
                className: ne
            }), se && (!1 === le || le === Ze || (le = !(!le && "flex" === qa(se.parentNode).display) && $e), Te.pin = se, !1 !== b.force3D && ke.set(se, {
                force3D: !0
            }), (n = ke.core.getCache(se)).spacer ? z = n.pinState : (n.spacer = F = _e.createElement("div"), F.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), n.pinState = z = db(se)), Te.spacer = F = n.spacer, r = qa(se), h = r[le + te.os2], W = ke.getProperty(se), g = ke.quickSetter(se, te.a, et), ab(se, F, r), B = db(se)), be && (e = V(be) ? sa(be, ot) : ot, I = Da("scroller-start", i, he, te, e, 0), R = Da("scroller-end", i, he, te, e, 0, I), t = I["offset" + te.op.d2], O = Da("start", i, he, te, e, t), E = Da("end", i, he, te, e, t), ve || (function _makePositionable(e) {
                e.style.position = "absolute" === qa(e).position ? "absolute" : "relative"
            }(he), ke.set([I, R], {
                force3D: !0
            }), v = ke.quickSetter(I, te.a, et), x = ke.quickSetter(R, te.a, et))), Te.revert = function(e) {
                var t = !1 !== e || !Te.enabled,
                    r = Re;
                t !== w && (t && (G = Math.max(Te.scroll(), Te.scroll.rec || 0), Z = Te.progress, ee = y && y.progress()), O && [O, E, I, R].forEach(function(e) {
                    return e.style.display = t ? "none" : "block"
                }), t && (Re = 1), Te.update(t), Re = r, se && (t ? function _swapPinOut(e, t, r) {
                    if (ct(r), e.parentNode === t) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t))
                    }
                }(se, F, z) : de && Te.isActive || ab(se, F, qa(se), j)), w = t)
            }, Te.refresh = function(e) {
                if (!Re && Te.enabled)
                    if (se && e && De) xa(ScrollTrigger, "scrollEnd", Qa);
                    else {
                        Re = 1, Y && Y.kill(), ce && y && y.progress(0).invalidate(), w || Te.revert();
                        for (var t, r, n, o, i, a, s, l, c = we(), f = Ce(), u = Q(he, te), p = 0, d = 0, g = b.end, h = b.endTrigger || ae, v = b.start || (se || !ae ? "0 0" : "0 100%"), x = ae && Math.max(0, at.indexOf(Te)) || 0, m = x; m--;) !(s = at[m].pin) || s !== ae && s !== se || at[m].revert();
                        for (_ = gb(v, ae, c, te, Te.scroll(), O, I, Te, f, ye, ve, u) || (se ? -.001 : 0), T(g) && (g = g(Te)), S(g) && !g.indexOf("+=") && (~g.indexOf(" ") ? g = (S(v) ? v.split(" ")[0] : "") + g : (p = Ca(g.substr(2), c), g = S(v) ? v : _ + p, h = ae)), P = Math.max(_, gb(g || (h ? "100% 0" : u), h, c, te, Te.scroll() + p, E, R, Te, f, ye, ve, u)) || -.001, A = P - _ || (_ -= .01) && .001, p = 0, m = x; m--;)(s = (a = at[m]).pin) && a.start - a._pinPush < _ && (t = a.end - a.start, s === ae && (p += t), s === se && (d += t));
                        if (_ += p, P += p, Te._pinPush = d, O && p && ((t = {})[te.a] = "+=" + p, ke.set([O, E], t)), se) t = qa(se), o = te === rt, n = Te.scroll(), D = parseFloat(W(te.a)) + d, ab(se, F, t), B = db(se), r = nt(se, !0), l = ve && M(he, o ? tt : rt)(), le && ((j = [le + te.os2, A + d + et]).t = F, (m = le === $e ? ua(se, te) + A + d : 0) && j.push(te.d, m + et), ct(j), ve && Te.scroll(G)), ve && ((i = {
                            top: r.top + (o ? n - _ : l) + et,
                            left: r.left + (o ? l : n - _) + et,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[Ke] = i.maxWidth = Math.ceil(r.width) + et, i[je] = i.maxHeight = Math.ceil(r.height) + et, i[Ze] = i[Ze + Ue] = i[Ze + Ve] = i[Ze + Ye] = i[Ze + Xe] = "0", i[$e] = t[$e], i[$e + Ue] = t[$e + Ue], i[$e + Ve] = t[$e + Ve], i[$e + Ye] = t[$e + Ye], i[$e + Xe] = t[$e + Xe], q = function _copyState(e, t, r) {
                            for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                            return o.t = e.t, o
                        }(z, i, de)), y ? (y.progress(1, !0), J = W(te.a) - D + A + d, A !== J && q.splice(q.length - 2, 2), y.progress(0, !0)) : J = A;
                        else if (ae && Te.scroll())
                            for (r = ae.parentNode; r && r !== Oe;) r._pinOffset && (_ -= r._pinOffset, P -= r._pinOffset), r = r.parentNode;
                        for (m = 0; m < x; m++) !(a = at[m].pin) || a !== ae && a !== se || at[m].revert(!1);
                        Te.start = _, Te.end = P, (C = k = Te.scroll()) < G && Te.scroll(G), Te.revert(!1), Re = 0, ee && ge && y.progress(ee, !0), Z !== Te.progress && (Y && y.totalProgress(Z, !0), Te.progress = Z, Te.update()), se && le && (F._pinOffset = Math.round(Te.progress * J)), ie && ie(Te)
                    }
            }, Te.getVelocity = function() {
                return (Te.scroll() - k) / (He() - Ie) * 1e3 || 0
            }, Te.update = function(e, t) {
                var r, n, o, i, a, s = Te.scroll(),
                    l = e ? 0 : (s - _) / A,
                    c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
                    f = Te.progress;
                if (t && (k = C, C = s, pe && (X = m, m = y && !ge ? y.totalProgress() : c)), fe && !c && se && !Re && !Fe && De && _ < s + (s - k) / (He() - Ie) * fe && (c = 1e-4), c !== f && Te.enabled) {
                    if (i = (a = (r = Te.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, Te.direction = f < c ? 1 : -1, Te.progress = c, ge || (!Y || Re || Fe ? y && y.totalProgress(c, !!Re) : (Y.vars.totalProgress = c, Y.invalidate().restart())), se)
                        if (e && le && (F.style[le + te.os2] = h), ve) {
                            if (i) {
                                if (o = !e && f < c && s < P + 1 && s + 1 >= Q(he, te), de) {
                                    if (!e && (r || o)) {
                                        var u = nt(se, !0),
                                            p = s - _;
                                        se.style.top = u.top + (te === rt ? p : 0) + et, se.style.left = u.left + (te === rt ? 0 : p) + et
                                    }! function _reparent(e, t) {
                                        if (e.parentNode !== t) {
                                            var r, n, o = e.style;
                                            if (t === Oe)
                                                for (r in e._stOrig = o.cssText, n = qa(e)) + r || ut.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);
                                            else o.cssText = e._stOrig;
                                            t.appendChild(e)
                                        }
                                    }(se, e || !r && !o ? F : Oe)
                                }
                                ct(r || o ? q : B), J !== A && c < 1 && r || g(D + (1 !== c || o ? 0 : J))
                            }
                        } else g(D + J * c);
                        !pe || d.tween || Re || Fe || $.restart(!0), ne && (a || ue && c && (c < 1 || !qe)) && Ee(ne.targets).forEach(function(e) {
                        return e.classList[r || ue ? "add" : "remove"](ne.className)
                    }), !re || ge || e || re(Te), i && !Re ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3, ge && (o = !a && "none" !== me[n + 1] && me[n + 1] || me[n], y && ("complete" === o || "reset" === o || o in y) && ("complete" === o ? y.pause().totalProgress(1) : "reset" === o ? y.restart(!0).pause() : y[o]()), re && re(Te)), !a && qe || (oe && a && oe(Te), xe[n] && xe[n](Te), ue && (1 === c ? Te.kill(!1, 1) : xe[n] = 0), a || xe[n = 1 === c ? 1 : 3] && xe[n](Te))) : ge && re && !Re && re(Te)
                }
                x && (v(s + (I._isFlipped ? 1 : 0)), x(s))
            }, Te.enable = function() {
                Te.enabled || (Te.enabled = !0, xa(he, "resize", Ja), xa(he, "scroll", Ia), Se && xa(ScrollTrigger, "refreshInit", Se), y && y.add ? ke.delayedCall(.01, function() {
                    return _ || P || Te.refresh()
                }) && (A = .01) && (_ = P = 0) : Te.refresh())
            }, Te.disable = function(e, t) {
                if (Te.enabled && (!1 !== e && Te.revert(), Te.enabled = Te.isActive = !1, t || Y && Y.pause(), G = 0, n && (n.uncache = 1), Se && ya(ScrollTrigger, "refreshInit", Se), $ && ($.pause(), d.tween && d.tween.kill()), !p)) {
                    for (var r = at.length; r--;)
                        if (at[r].scroller === he && at[r] !== Te) return;
                    ya(he, "resize", Ja), ya(he, "scroll", Ia)
                }
            }, Te.kill = function(e, t) {
                Te.disable(e, t), i && delete st[i];
                var r = at.indexOf(Te);
                at.splice(r, 1), r === ze && 0 < lt && ze--, y && (y.scrollTrigger = null, e && y.render(-1), t || y.kill()), O && [O, E, I, R].forEach(function(e) {
                    return e.parentNode.removeChild(e)
                }), n && (n.uncache = 1)
            }, Te.enable()
        } else this.update = this.refresh = this.kill = H
    }, ScrollTrigger.register = function register(e) {
        if (!o && (ke = e || J(), I() && window.document && (Me = window, _e = document, Pe = _e.documentElement, Oe = _e.body), ke && (Ee = ke.utils.toArray, Le = ke.utils.clamp, ke.core.globals("ScrollTrigger", ScrollTrigger), Oe))) {
            s = Me.requestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }, xa(Me, "mousewheel", Ia), i = [Me, _e, Pe, Oe], xa(_e, "scroll", Ia);
            var t, r = Oe.style,
                n = r.borderTop;
            r.borderTop = "1px solid #000", t = nt(Oe), rt.m = Math.round(t.top + rt.sc()) || 0, tt.m = Math.round(t.left + tt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c = setInterval(Ha, 200), ke.delayedCall(.5, function() {
                return Fe = 0
            }), xa(_e, "touchcancel", H), xa(Oe, "touchstart", H), wa(xa, _e, "pointerdown,touchstart,mousedown", function() {
                return Ae = 1
            }), wa(xa, _e, "pointerup,touchend,mouseup", function() {
                return Ae = 0
            }), f = ke.utils.checkPrefix("transform"), D.push(f), o = He(), a = ke.delayedCall(.2, z).pause(), d = [_e, "visibilitychange", function() {
                var e = Me.innerWidth,
                    t = Me.innerHeight;
                _e.hidden ? (u = e, p = t) : u === e && p === t || Ja()
            }, _e, "DOMContentLoaded", z, Me, "load", function() {
                return De || z()
            }, Me, "resize", Ja], R(xa)
        }
        return o
    }, ScrollTrigger.defaults = function defaults(e) {
        for (var t in e) it[t] = e[t]
    }, ScrollTrigger.kill = function kill() {
        Je = 0, at.slice(0).forEach(function(e) {
            return e.kill(1)
        })
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (qe = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(Ha, t), "autoRefreshEvents" in e && (R(ya) || R(xa, e.autoRefreshEvents || "none"))
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Ee(e)[0];
        K(r) ? We.unshift(Me, t, Oe, t, Pe, t) : We.unshift(r, t)
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, o, i;
        for (r in e) n = _.indexOf(r), o = e[r], "all" === (Be = r) ? o() : (t = Me.matchMedia(r)) && (t.matches && (i = o()), ~n ? (_[n + 1] = X(_[n + 1], o), _[n + 2] = X(_[n + 2], i)) : (n = _.length, _.push(r, o, i), t.addListener ? t.addListener(Pa) : t.addEventListener("change", Pa))), Be = 0;
        return _
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (_.length = 0), 0 <= (e = _.indexOf(e)) && _.splice(e, 3)
    }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        o || ScrollTrigger.register(ke) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    Y.version = "3.5.0", Y.saveStyles = function(e) {
        return e ? Ee(e).forEach(function(e) {
            var t = O.indexOf(e);
            0 <= t && O.splice(t, 4), O.push(e, e.style.cssText, ke.core.getCache(e), Be)
        }) : O
    }, Y.revert = function(e, t) {
        return A(!e, t)
    }, Y.create = function(e, t) {
        return new Y(e, t)
    }, Y.refresh = function(e) {
        return e ? Ja() : z(!0)
    }, Y.update = B, Y.maxScroll = function(e, t) {
        return Q(e, t ? tt : rt)
    }, Y.getScrollFunc = function(e, t) {
        return M(Ee(e)[0], t ? tt : rt)
    }, Y.getById = function(e) {
        return st[e]
    }, Y.getAll = function() {
        return at.slice(0)
    }, Y.isScrolling = function() {
        return !!De
    }, Y.addEventListener = function(e, t) {
        var r = C[e] || (C[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, Y.removeEventListener = function(e, t) {
        var r = C[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, Y.batch = function(e, t) {
        function $h(e, t) {
            var r = [],
                n = [],
                o = ke.delayedCall(i, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
        }
        var r, n = [],
            o = {},
            i = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && T(t[r]) && "onRefreshInit" !== r ? $h(0, t[r]) : t[r];
        return T(a) && (a = a(), xa(Y, "refresh", function() {
            return a = t.batchMax()
        })), Ee(e).forEach(function(e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push(Y.create(t))
        }), n
    }, Y.sort = function(e) {
        return at.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, J() && ke.registerPlugin(Y), e.ScrollTrigger = Y, e.default = Y;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});