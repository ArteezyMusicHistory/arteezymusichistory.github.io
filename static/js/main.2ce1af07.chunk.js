(this["webpackJsonparteezymusichistory.github.io"] = this["webpackJsonparteezymusichistory.github.io"] || []).push([
    [0],
    {
        15: function(e, t, a) {
            e.exports = a(28);
        },
        20: function(e, t, a) {},
        21: function(e, t, a) {},
        27: function(e, t, a) {},
        28: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                i = a.n(n),
                r = a(12),
                o = a.n(r),
                l = (a(20), a(2)),
                s = a(3),
                c = a(5),
                p = a(4),
                m = a(6),
                u =
                    (a(21),
                    [
                        {
                            1: {
                                playlistTitle: "October 15th 2019 Arteezy Stream",
                                playlistLink: "12ipUXa6wIEKC5ROnwDwWI?si=OVu7wqgGRjqpCphblHUR_w"
                            },
                            2: {
                                playlistTitle: "November 2nd 2019 Arteezy Stream Part 1",
                                playlistLink: "4iP0tJ8Pkk0RyCHeYEQn1f?si=pXAeXPcEQf25aAzrDocLWw"
                            },
                            3: {
                                playlistTitle: "November 2nd 2019 Arteezy Stream Part 2",
                                playlistLink: "1QIXWVBTHi9azshXrUtd2A?si=3NPyqqVAT-qD7ZsCDeBvag"
                            },
                            4: {
                                playlistTitle: "November 3rd 2019 Arteezy Stream Part 1",
                                playlistLink: "3KsgKpM3vH2uCKhl6Mn9iQ?si=Zv6RnvcATcaTmVYS8Z45iQ"
                            },
                            5: {
                                playlistTitle: "March 4th 2020 Arteezy Stream",
                                playlistLink: "2WCjXh0xHNKGi7NePwN4RD?si=hHdjokYkQcqf5GbPtkP2IA"
                            }
                        }
                    ]),
                y = a(7),
                h = a(13),
                d =
                    (a(27),
                    (function(e) {
                        function t() {
                            var e, a;
                            Object(l.a)(this, t);
                            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                            return (
                                ((a = Object(c.a)(
                                    this,
                                    (e = Object(p.a)(t)).call.apply(e, [this].concat(i))
                                )).copyToClipboard = function(e) {
                                    navigator.clipboard.writeText(e).then(
                                        function() {
                                            console.log("Async: Copying to clipboard was successful!");
                                        },
                                        function(e) {
                                            console.error("Async: Could not copy text: ", e);
                                        }
                                    );
                                }),
                                a
                            );
                        }
                        return (
                            Object(m.a)(t, e),
                            Object(s.a)(t, [
                                {
                                    key: "render",
                                    value: function() {
                                        var e = this,
                                            t = "https://open.spotify.com/embed/playlist/".concat(
                                                this.props.playlistLink
                                            ),
                                            a = i.a.createElement(y.a, {
                                                icon: h.a,
                                                onClick: function() {
                                                    e.copyToClipboard(e.props.playlistTitle);
                                                }
                                            });
                                        return i.a.createElement(
                                            "div",
                                            { className: "playlist" },
                                            i.a.createElement(
                                                "div",
                                                { className: "title" },
                                                i.a.createElement("b", null, this.props.playlistTitle),
                                                " ",
                                                a
                                            ),
                                            i.a.createElement("iframe", {
                                                src: t,
                                                title: "sdf",
                                                width: "500",
                                                height: "300",
                                                frameBorder: "0",
                                                allowtransparency: "true",
                                                allow: "encrypted-media"
                                            })
                                        );
                                    }
                                }
                            ]),
                            t
                        );
                    })(n.Component)),
                f = (function(e) {
                    function t(e) {
                        var a;
                        Object(l.a)(this, t), (a = Object(c.a)(this, Object(p.a)(t).call(this)));
                        var n = u[0],
                            r = Object.keys(n).reverse();
                        return (
                            (a.state = {
                                playlistsCards: r.map(function(e) {
                                    return i.a.createElement(d, {
                                        key: e,
                                        playlistLink: n[e].playlistLink,
                                        playlistTitle: n[e].playlistTitle
                                    });
                                })
                            }),
                            a
                        );
                    }
                    return (
                        Object(m.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: "render",
                                value: function() {
                                    return i.a.createElement("div", null, this.state.playlistsCards);
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                b = a(14),
                w = a.n(b),
                v = a(8),
                g = {
                    particles: {
                        number: { value: 25, density: { enable: !1, value_area: 0 } },
                        color: { value: "#ffffff" },
                        shape: {
                            type: "circle",
                            stroke: { width: 0, color: "#000000" },
                            polygon: { nb_sides: 3 },
                            image: { src: "img/github.svg", width: 100, height: 100 }
                        },
                        opacity: { value: 0.5, random: !1, anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 } },
                        size: { value: 3, random: !0, anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 } },
                        line_linked: {
                            enable: !0,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1.9240944730386271
                        },
                        move: {
                            enable: !0,
                            speed: 6,
                            direction: "none",
                            random: !1,
                            straight: !1,
                            out_mode: "out",
                            bounce: !1,
                            attract: { enable: !1, rotateX: 600, rotateY: 1200 }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: !0, mode: "repulse" },
                            onclick: { enable: !1, mode: "repulse" },
                            resize: !0
                        },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                            repulse: { distance: 200, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 }
                        }
                    },
                    retina_detect: !0
                },
                k = (function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(c.a)(this, Object(p.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(m.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = i.a.createElement(y.a, {
                                            className: "spotify-icon",
                                            icon: v.a,
                                            onClick: function() {
                                                return (window.location =
                                                    "https://open.spotify.com/user/1qwh2zhtk48r17ymr52liaq0c?si=ecp4k8x2Ss-0mls6606jcg");
                                            }
                                        }),
                                        t = i.a.createElement(y.a, {
                                            className: "twitter-icon",
                                            icon: v.c,
                                            onClick: function() {
                                                return (window.location = "https://twitter.com/RTZMusicHistory");
                                            }
                                        }),
                                        a = i.a.createElement(y.a, {
                                            className: "twitch-icon",
                                            icon: v.b,
                                            onClick: function() {
                                                return (window.location = "https://www.twitch.tv/arteezymusichistory");
                                            }
                                        });
                                    return i.a.createElement(
                                        "div",
                                        { className: "App" },
                                        i.a.createElement(
                                            "header",
                                            { className: "App-header" },
                                            i.a.createElement(
                                                "b",
                                                null,
                                                i.a.createElement(
                                                    "a",
                                                    { href: "https://twitch.tv/arteezy" },
                                                    "Arteezy"
                                                ),
                                                " Music History \u266b"
                                            ),
                                            i.a.createElement(
                                                "div",
                                                { className: "App-social" },
                                                " ",
                                                e,
                                                " ",
                                                t,
                                                " ",
                                                a,
                                                " "
                                            ),
                                            i.a.createElement(
                                                "div",
                                                { className: "App-info" },
                                                "Refresh and scroll down to the bottom of the latest playlist to see the latest song (if it is avaliable on Spotify)"
                                            ),
                                            i.a.createElement(
                                                "span",
                                                { className: "not-working" },
                                                "Not working? Try opening Spotify and searching for the playlists manually or try use ",
                                                i.a.createElement(
                                                    "a",
                                                    { href: "https://twitchaudio.com/stream/arteezy" },
                                                    "https://twitchaudio.com/stream/arteezy"
                                                )
                                            )
                                        ),
                                        i.a.createElement(f, null),
                                        i.a.createElement(
                                            "footer",
                                            { className: "App-footer" },
                                            i.a.createElement(
                                                "a",
                                                { href: "https://info.flagcounter.com/gOGn" },
                                                i.a.createElement("img", {
                                                    src:
                                                        "https://s01.flagcounter.com/count2/gOGn/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_25/viewers_0/labels_0/pageviews_1/flags_0/percent_0/",
                                                    alt: "Flag Counter",
                                                    border: "0"
                                                })
                                            ),
                                            i.a.createElement(
                                                "span",
                                                null,
                                                "This website is run by a fan and is not officially affiliated with ",
                                                i.a.createElement(
                                                    "a",
                                                    { href: "https://twitter.com/arteezy" },
                                                    " Arteezy"
                                                )
                                            )
                                        ),
                                        i.a.createElement(w.a, { className: "particles-js", params: g })
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component);
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            );
            o.a.render(i.a.createElement(k, null), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        }
    },
    [[15, 1, 2]]
]);
//# sourceMappingURL=main.2ce1af07.chunk.js.map
