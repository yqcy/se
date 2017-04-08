!function () {
    "use strict";
    angular.module("triangular.layouts", [])
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s) {
        function d() {
            "icon" === r.layout.sideMenuSize && (i.find(".triangular-sidenav-left").addClass("hover"), n(function () {
                l.dispatchEvent(new Event("resize"))
            }, 300))
        }

        function m(t) {
            var l = i.find(".triangular-content");
            "@triangular" === t && angular.isDefined(r.layout.footerTemplateUrl) && a(r.layout.footerTemplateUrl).then(function (t) {
                var a = o(t), i = a(e);
                n(function () {
                    l.append(i)
                })
            })
        }

        function c(e, t) {
            v.showLoader = t
        }

        function u() {
            s.setLoaderActive(!0)
        }

        function p() {
            "icon" === r.layout.sideMenuSize && (i.find(".triangular-sidenav-left").removeClass("hover"), n(function () {
                l.dispatchEvent(new Event("resize"))
            }, 300))
        }

        function g(e, t) {
            h.push(t)
        }

        function b(e, t) {
            angular.isDefined(r.layout.footer) && r.layout.footer === !0 && m(t);
            var n = h.indexOf(t);
            -1 !== n && h.splice(n, 1), 0 === h.length && s.setLoaderActive(!1)
        }

        var h = [], v = this;
        v.activateHover = d, v.removeHover = p, v.showLoader = s.isActive(), e.layout = r.layout, e.$on("loader", c), e.$on("$stateChangeStart", u), e.$on("$viewContentLoading", g), e.$on("$viewContentLoaded", b)
    }

    e.$inject = ["$scope", "$rootScope", "$timeout", "$templateRequest", "$compile", "$element", "$window", "triLayout", "triLoaderService"], angular.module("triangular.layouts").controller("TriangularStateController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.email", [])
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s) {
        function d(t) {
            e.$broadcast("emailSearch", t)
        }

        function m() {
            p.showSearch = !p.showSearch
        }

        function c() {
            return "hidden" !== r.layout.sideMenuSize && t("gt-sm")
        }

        function u(e) {
            a.debounce(function () {
                o(e).toggle()
            }, 300)()
        }

        var p = this;
        p.breadcrumbs = l.breadcrumbs, p.filterEmailList = d, p.hideMenuButton = c, p.openSideNav = u, p.showSearch = !1, p.toggleSearch = m, p.toolbarMenu = [];
        for (var g = 0; g < s.length; g++)p.toolbarMenu.push({
            name: n("triTranslate")(s[g].name),
            state: s[g].state,
            icon: s[g].icon
        })
    }

    e.$inject = ["$rootScope", "$mdMedia", "$filter", "$mdUtil", "$mdSidenav", "$state", "triBreadcrumbsService", "triLayout", "EMAIL_ROUTES"], angular.module("app.examples.email").controller("EmailToolbarController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.calendar", [])
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(e) {
            l.calendars["triangular-calendar"].fullCalendar(e)
        }

        function s(e) {
            m.currentView = e, l.calendars["triangular-calendar"].fullCalendar("changeView", e.viewName)
        }

        function d(e) {
            a.debounce(function () {
                o(e).toggle()
            }, 300)()
        }

        var m = this;
        m.breadcrumbs = i.breadcrumbs, m.changeMonth = r, m.changeView = s, m.openSideNav = d, m.views = [{
            name: "Month",
            icon: "zmdi zmdi-view-module",
            viewName: "month"
        }, {name: "Week", icon: "zmdi zmdi-view-week", viewName: "agendaWeek"}, {
            name: "Day",
            icon: "zmdi zmdi-view-day",
            viewName: "agendaDay"
        }], m.currentView = m.views[0]
    }

    e.$inject = ["$scope", "$state", "$element", "$mdUtil", "$mdSidenav", "triBreadcrumbsService", "uiCalendarConfig"], angular.module("app.examples.calendar").controller("CalendarToolbarController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            "icon" === o.layout.sideMenuSize && (t.find(".admin-sidebar-left").addClass("hover"), n(function () {
                a.dispatchEvent(new Event("resize"))
            }, 300))
        }

        function l() {
            "icon" === o.layout.sideMenuSize && (t.find(".admin-sidebar-left").removeClass("hover"), n(function () {
                a.dispatchEvent(new Event("resize"))
            }, 300))
        }

        e.layout = o.layout;
        var r = this;
        r.activateHover = i, r.removeHover = l
    }

    e.$inject = ["$scope", "$element", "$timeout", "$window", "triLayout"], angular.module("triangular.layouts").controller("DefaultLayoutController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a) {
        function o(e, o) {
            function i() {
                o.scrollTop(0)
            }

            function l() {
                var i = o.find("#admin-panel-content-view"), l = i.find("#footer");
                0 === l.length && n(a.layout.footerTemplateUrl).then(function (n) {
                    var a = t(n), o = a(e);
                    i.append(o)
                })
            }

            e.$on("$stateChangeStart", i), e.$on("$viewContentLoaded", l)
        }

        var i = {link: o, replace: !0, restrict: "A"};
        return i
    }

    e.$inject = ["$rootScope", "$compile", "$templateRequest", "triLayout"], angular.module("triangular.layouts").directive("triDefaultContent", e)
}(), function () {
    "use strict";
    angular.module("triangular.components", [])
}(), function () {
    "use strict";
    function e() {
        var e = {bindToController: !0, controller: t, controllerAs: "triWizard", restrict: "A"};
        return e
    }

    function t(e, t) {
        function n(e) {
            return u[e]
        }

        function a() {
            c.currentStep = c.currentStep + 1
        }

        function o() {
            var t = e.triWizard.getForm(c.currentStep), n = !0;
            return angular.isDefined(t) && angular.isDefined(t.$invalid) && (n = t.$invalid), n
        }

        function i(e) {
            if (angular.isDefined(u[e]))return u[e].$valid
        }

        function l() {
            c.currentStep = c.currentStep - 1
        }

        function r() {
            return 0 === c.currentStep
        }

        function s(e) {
            u.push(e)
        }

        function d() {
            var e = m();
            g = p - e, c.progress = Math.floor(g / p * 100)
        }

        function m() {
            for (var e = 0, t = u.length - 1; t >= 0; t--)if (angular.isDefined(u[t].$error))for (var n in u[t].$error)e += u[t].$error[n].length;
            return e
        }

        var c = this, u = [], p = 0, g = 0;
        c.currentStep = 0, c.getForm = n, c.isFormValid = i, c.nextStep = a, c.nextStepDisabled = o, c.prevStep = l, c.prevStepDisabled = r, c.progress = 0, c.registerForm = s, c.updateProgress = d, t(function () {
            p = m()
        })
    }

    t.$inject = ["$scope", "$timeout"], angular.module("triangular.components").directive("triWizard", e)
}(), function () {
    "use strict";
    function e() {
        function e(e, t, n, a) {
            var o = a[0], i = a[1];
            i.registerForm(o), t.on("input", function () {
                i.updateProgress()
            })
        }

        var t = {require: ["form", "^triWizard"], link: e, restrict: "A"};
        return t
    }

    angular.module("triangular.components").directive("triWizardForm", e)
}(), function () {
    "use strict";
    function e(e) {
        function n(t, n, a) {
            t.vm.widgetLayout = "left" === a.titlePosition || "right" === a.titlePosition ? "row" : "column", t.vm.contentLayout = angular.isUndefined(a.contentLayout) ? "column" : a.contentLayout, t.vm.contentPadding = angular.isDefined(a.contentPadding), t.vm.contentLayoutAlign = angular.isUndefined(a.contentLayoutAlign) ? "" : a.contentLayoutAlign, t.vm.titleOrder = "right" === a.titlePosition || "bottom" === a.titlePosition ? 2 : 1, t.vm.contentOrder = "right" === a.titlePosition || "bottom" === a.titlePosition ? 1 : 2, t.vm.overlayTitle = !angular.isUndefined(a.overlayTitle) || void 0, e(n), angular.isDefined(a["class"]) && n.addClass(a["class"]), angular.isDefined(a.backgroundImage) && n.css("background-image", "url(" + a.backgroundImage + ")"), t.menuClick = function (e) {
                angular.isUndefined(t.menu.menuClick) && t.menu.menuClick(e)
            }, n.attr("title", "")
        }

        var a = {
            restrict: "E",
            templateUrl: "app/triangular/components/widget/widget.tmpl.html",
            transclude: !0,
            replace: !0,
            scope: {title: "@", subtitle: "@", avatar: "@"},
            bindToController: !0,
            controller: t,
            controllerAs: "vm",
            link: n
        };
        return a
    }

    function t() {
        var e = this;
        e.menu = null, e.loading = !1, this.setMenu = function (t) {
            e.menu = t
        }, this.setLoading = function (t) {
            e.loading = t
        }
    }

    e.$inject = ["$mdTheming"], angular.module("triangular.components").directive("triWidget", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s, d, m, c, u, p, g) {
        function b(e) {
            r.debounce(function () {
                s(e).toggle()
            }, 300)()
        }

        function h(e) {
            if (t.has("$translate")) {
                var a = t.get("$translate");
                a.use(e).then(function () {
                    d.show(d.simple().content(l("triTranslate")("Language Changed")).position("bottom right").hideDelay(500)), n.$emit("changeTitle")
                })
            }
        }

        function v() {
            return "hidden" !== g.layout.sideMenuSize && a("gt-sm")
        }

        function f(e) {
            n.$broadcast("triSwitchNotificationTab", e), w.openSideNav("notifications")
        }

        function y() {
            w.isFullScreen = !w.isFullScreen, w.fullScreenIcon = w.isFullScreen ? "zmdi zmdi-fullscreen-exit" : "zmdi zmdi-fullscreen";
            var e = c[0];
            e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement ? e.exitFullscreen ? e.exitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen && e.webkitExitFullscreen() : e.documentElement.requestFullscreen ? e.documentElement.requestFullscreen() : e.documentElement.msRequestFullscreen ? e.documentElement.msRequestFullscreen() : e.documentElement.mozRequestFullScreen ? e.documentElement.mozRequestFullScreen() : e.documentElement.webkitRequestFullscreen && e.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }

        var w = this;
        w.breadcrumbs = u.breadcrumbs, w.emailNew = !1, w.languages = p.languages, w.openSideNav = b, w.hideMenuButton = v, w.switchLanguage = h, w.toggleNotificationsTab = f, w.isFullScreen = !1, w.fullScreenIcon = "zmdi zmdi-fullscreen", w.toggleFullScreen = y, e.$on("newMailNotification", function () {
            w.emailNew = !0
        })
    }

    e.$inject = ["$scope", "$injector", "$rootScope", "$mdMedia", "$state", "$element", "$filter", "$mdUtil", "$mdSidenav", "$mdToast", "$timeout", "$document", "triBreadcrumbsService", "triSettings", "triLayout"], angular.module("triangular.components").controller("DefaultToolbarController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n, a) {
            var o = [], i = null, l = !1;
            t.pageSize = angular.isUndefined(a.pageSize) ? 0 : a.pageSize, t.page = angular.isUndefined(a.page) ? 0 : a.page, angular.forEach(t.columns, function (e) {
                e.sortable && o.push(e.field)
            }), t.refresh = function (n) {
                n === !0 && (t.page = 0), t.contents = e("orderBy")(t.contents, i, l)
            }, o.length > 0 && (l = !1, i = o[0], t.refresh()), t.sortClick = function (e) {
                o.indexOf(e) !== -1 && (e === i && (l = !l), i = e, t.refresh())
            }, t.showSortOrder = function (e, t) {
                return e === i && l === t
            }, t.headerClass = function (e) {
                var t = [];
                return o.indexOf(e) !== -1 && t.push("sortable"), e === i && t.push("sorted"), t
            }, t.cellContents = function (t, n) {
                return angular.isDefined(t.filter) ? e(t.filter)(n[t.field]) : n[t.field]
            }, t.totalItems = function () {
                return t.contents.length
            }, t.numberOfPages = function () {
                return Math.ceil(t.contents.length / t.pageSize)
            }, t.pageStart = function () {
                return t.page * t.pageSize + 1
            }, t.pageEnd = function () {
                var e = (t.page + 1) * t.pageSize;
                return e > t.contents.length && (e = t.contents.length), e
            }, t.goToPage = function (e) {
                t.page = e
            }
        }

        var n = {
            restrict: "E",
            scope: {columns: "=", contents: "=", filters: "="},
            link: t,
            templateUrl: "app/triangular/components/table/table-directive.tmpl.html"
        };
        return n
    }

    e.$inject = ["$filter"], angular.module("triangular.components").directive("triTable", e)
}(), function () {
    "use strict";
    function e() {
        function e(e, t) {
            return t = +t, e.slice(t)
        }

        return e
    }

    angular.module("triangular.components").filter("startFrom", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            return e.trustAsHtml("<div style=\"background-image: url('" + t + "')\"/>")
        }

        return t
    }

    e.$inject = ["$sce"], angular.module("triangular.components").filter("tableImage", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            a.go("triangular-no-scroll.email.inbox"), r.close()
        }

        function l() {
            n("notifications").close()
        }

        var r = this;
        r.close = l, r.currentTab = 0, r.notificationGroups = [{
            name: "Twitter",
            notifications: [{
                title: "Mention from oxygenna",
                icon: "fa fa-twitter",
                iconColor: "#55acee",
                date: moment().startOf("hour")
            }, {
                title: "Oxygenna",
                icon: "fa fa-twitter",
                iconColor: "#55acee",
                date: moment().startOf("hour")
            }, {
                title: "Oxygenna",
                icon: "fa fa-twitter",
                iconColor: "#55acee",
                date: moment().startOf("hour")
            }, {
                title: "Followed by Oxygenna",
                icon: "fa fa-twitter",
                iconColor: "#55acee",
                date: moment().startOf("hour")
            }]
        }, {
            name: "Server",
            notifications: [{
                title: "Server Down",
                icon: "zmdi zmdi-alert-circle",
                iconColor: "rgb(244, 67, 54)",
                date: moment().startOf("hour")
            }, {
                title: "Slow Response Time",
                icon: "zmdi zmdi-alert-triangle",
                iconColor: "rgb(255, 152, 0)",
                date: moment().startOf("hour")
            }, {
                title: "Server Down",
                icon: "zmdi zmdi-alert-circle",
                iconColor: "rgb(244, 67, 54)",
                date: moment().startOf("hour")
            }]
        }, {
            name: "Sales",
            notifications: [{
                title: "Triangular Admin $21",
                icon: "zmdi zmdi-shopping-cart",
                iconColor: "rgb(76, 175, 80)",
                date: moment().startOf("hour")
            }, {
                title: "Lambda WordPress $60",
                icon: "zmdi zmdi-shopping-cart",
                iconColor: "rgb(76, 175, 80)",
                date: moment().startOf("hour")
            }, {
                title: "Triangular Admin $21",
                icon: "zmdi zmdi-shopping-cart",
                iconColor: "rgb(76, 175, 80)",
                date: moment().startOf("hour")
            }, {
                title: "Triangular Admin $21",
                icon: "zmdi zmdi-shopping-cart",
                iconColor: "rgb(76, 175, 80)",
                date: moment().startOf("hour")
            }, {
                title: "Lambda WordPress $60",
                icon: "zmdi zmdi-shopping-cart",
                iconColor: "rgb(76, 175, 80)",
                date: moment().startOf("hour")
            }, {
                title: "Triangular Admin $21",
                icon: "zmdi zmdi-shopping-cart",
                iconColor: "rgb(76, 175, 80)",
                date: moment().startOf("hour")
            }]
        }], r.openMail = i, r.settingsGroups = [{
            name: "Account Settings",
            settings: [{title: "Show my location", icon: "zmdi zmdi-pin", enabled: !0}, {
                title: "Show my avatar",
                icon: "zmdi zmdi-face",
                enabled: !1
            }, {title: "Send me notifications", icon: "zmdi zmdi-notifications-active", enabled: !0}]
        }, {
            name: "Chat Settings",
            settings: [{
                title: "Show my username",
                icon: "zmdi zmdi-account",
                enabled: !0
            }, {
                title: "Make my profile public",
                icon: "zmdi zmdi-account-box",
                enabled: !1
            }, {title: "Allow cloud backups", icon: "zmdi zmdi-cloud-upload", enabled: !0}]
        }], r.statisticsGroups = [{
            name: "User Statistics",
            stats: [{
                title: "Storage Space (120/160 Gb)",
                mdClass: "md-primary",
                value: 60
            }, {title: "Bandwidth Usage (10/100 Gb)", mdClass: "md-accent", value: 10}, {
                title: "Memory Usage (1/8 Gb)",
                mdClass: "md-warn",
                value: 100
            }]
        }, {
            name: "Server Statistics",
            stats: [{
                title: "Storage Space (120/160 Gb)",
                mdClass: "md-primary",
                value: 60
            }, {title: "Bandwidth Usage (10/100 Gb)", mdClass: "md-accent", value: 10}, {
                title: "Memory Usage (1/8 Gb)",
                mdClass: "md-warn",
                value: 100
            }]
        }], e.$on("triSwitchNotificationTab", function (e, t) {
            r.currentTab = t
        }), t({method: "GET", url: o.url + "email/inbox"}).success(function (e) {
            r.emails = e.slice(1, 20)
        })
    }

    e.$inject = ["$scope", "$http", "$mdSidenav", "$state", "API_CONFIG"], angular.module("triangular.components").controller("NotificationsPanelController", e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            l.push(e)
        }

        function t(e) {
            return o(l, e)
        }

        function n(e, t) {
            i(l, e, t)
        }

        function a() {
            for (var e = l.length - 1; e >= 0; e--)l.splice(e, 1)
        }

        function o(e, t) {
            var n;
            if (e instanceof Array)for (var a = 0; a < e.length; a++) {
                if (e[a].id === t) {
                    n = e[a];
                    break
                }
                if (angular.isDefined(e[a].children) && (n = o(e[a].children, t), angular.isDefined(n)))break
            }
            return n
        }

        function i(e, t, n, a) {
            if (e instanceof Array)for (var o = e.length - 1; o >= 0; o--) {
                if (e[o].state === t && angular.equals(e[o].params, n)) {
                    e.splice(o, 1), isNaN(a) || l[a].children.length || l.splice(a, 1);
                    break
                }
                angular.isDefined(e[o].children) && i(e[o].children, t, n, o)
            }
        }

        var l = [];
        this.addMenu = e, this.removeMenu = n, this.removeAllMenu = a, this.$get = function () {
            return {menu: l, addMenu: e, getMenu: t, removeMenu: n, removeAllMenu: a}
        }
    }

    angular.module("triangular.components").provider("triMenu", e)
}(), function () {
    "use strict";
    function e(e, n, a) {
        function o(e, t) {
            n(t);
            var o = t.controller("mdTheme"), i = a.getThemeHue(o.$mdTheme, "primary", "default"), l = a.rgba(i.value);
            t.css({"background-color": l}), t.children("md-content").css({"background-color": l})
        }

        var i = {
            restrict: "E",
            template: '<md-content><tri-menu-item permission permission-only="item.permission" ng-repeat="item in triMenuController.menu | orderBy:\'priority\'" item="::item"></tri-menu-item></md-content>',
            scope: {},
            controller: t,
            controllerAs: "triMenuController",
            link: o
        };
        return i
    }

    function t(e) {
        var t = this;
        t.menu = e.menu
    }

    e.$inject = ["$location", "$mdTheming", "triTheming"], t.$inject = ["triMenu"], angular.module("triangular.components").directive("triMenu", e)
}(), function () {
    "use strict";
    function e() {
        var e = {
            restrict: "E",
            require: "^triMenu",
            scope: {item: "="},
            template: '<div ng-include="::triMenuItem.item.template"></div>',
            controller: t,
            controllerAs: "triMenuItem",
            bindToController: !0
        };
        return e
    }

    function t(e, t, n, a, o, i, l) {
        function r() {
            m.item.active = a.includes(m.item.state, m.item.params), m.item.active && (l.reset(), l.addCrumb(m.item), e.$emit("openParents"))
        }

        function s() {
            e.$parent.$parent.$broadcast("toggleDropdownMenu", m.item, !m.item.open)
        }

        function d() {
            if (angular.isDefined(m.item.click))t.invoke(m.item.click); else {
                var e = angular.isUndefined(m.item.params) ? {} : m.item.params;
                if (angular.isDefined(m.item.openInNewTab) && m.item.openInNewTab === !0) {
                    var o = a.href(m.item.state, e);
                    i.open(o, "_blank")
                } else a.go(m.item.state, e)
            }
            m.item.active = !0, n("left").close()
        }

        var m = this;
        switch (m.item.template = "app/triangular/components/menu/menu-item-" + m.item.type + ".tmpl.html", m.item.type) {
            case"dropdown":
                m.item.children = o("orderBy")(m.item.children, "priority"), m.toggleDropdownMenu = s, e.$on("toggleDropdownMenu", function (e, t, n) {
                    m.item === t ? m.item.open = n : m.item.open = !1
                }), e.$on("openParents", function () {
                    m.item.open = !0, l.addCrumb(m.item)
                });
                break;
            case"link":
                m.openLink = d, r(a.current.name, a.params), e.$on("$stateChangeSuccess", function (e, t, n) {
                    r(t.name, n)
                })
        }
    }

    t.$inject = ["$scope", "$injector", "$mdSidenav", "$state", "$filter", "$window", "triBreadcrumbsService"], angular.module("triangular.components").directive("triMenuItem", e)
}(), function () {
    "use strict";
    function e() {
        var e = {
            bindToController: !0,
            controller: t,
            controllerAs: "vm",
            template: '<div flex class="loader padding-100" ng-show="vm.isActive()" layout="column" layout-fill layout-align="center center"><h3 class="md-headline">{{vm.triSettings.name}}</h3><md-progress-linear md-mode="indeterminate"></md-progress-linear></div>',
            restrict: "E",
            replace: !0,
            scope: {}
        };
        return e
    }

    function t(e, t, n) {
        var a = this;
        a.triSettings = n, a.isActive = t.isActive
    }

    t.$inject = ["$rootScope", "triLoaderService", "triSettings"], angular.module("triangular.components").directive("triLoader", e)
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            return a
        }

        function n(t) {
            a = t, e.$broadcast("loader", a)
        }

        var a = !1;
        return {isActive: t, setLoaderActive: n}
    }

    e.$inject = ["$rootScope"], angular.module("triangular.components").factory("triLoaderService", e)
}(), function () {
    "use strict";
    function e(e, t) {
        var n = this;
        n.name = e.name, n.copyright = e.copyright, n.layout = t.layout, n.version = e.version
    }

    e.$inject = ["triSettings", "triLayout"], angular.module("triangular.components").controller("FooterController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            this.breadcrumbs.crumbs.unshift(t), e.$emit("changeTitle")
        }

        function n() {
            this.breadcrumbs.crumbs = []
        }

        var a = [];
        return {breadcrumbs: {crumbs: a}, addCrumb: t, reset: n}
    }

    e.$inject = ["$rootScope"], angular.module("triangular.components").factory("triBreadcrumbsService", e)
}(), function () {
    "use strict";
    angular.module("app.examples.menu", [])
}(), function () {
    "use strict";
    function e(e, t) {
        function n(e) {
            e ? t.addMenu({
                name: "Dynamic Menu-MENU",
                icon: "zmdi zmdi-flower-alt",
                type: "link",
                priority: 0,
                state: "triangular.menu-dynamic-dummy-page"
            }) : t.removeMenu("triangular.menu-dynamic-dummy-page")
        }

        var a = this;
        a.dynamicMenu = e.dynamicMenu, a.toggleExtraMenu = n
    }

    e.$inject = ["dynamicMenuService", "triMenu"], angular.module("app.examples.menu").controller("MenuDynamicController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.maps", [])
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        e.then(function (e) {
            t.terrainMap = {
                center: {latitude: 51.219053, longitude: 4.404418},
                zoom: 10,
                marker: {
                    id: 0,
                    coords: {latitude: 51.219053, longitude: 4.404418},
                    options: {
                        icon: {
                            anchor: new e.Point(36, 36),
                            origin: new e.Point(0, 0),
                            url: "assets/images/maps/blue_marker.png"
                        }
                    }
                },
                options: {scrollwheel: !1, mapTypeId: e.MapTypeId.TERRAIN}
            }
        })
    }

    e.$inject = ["uiGmapGoogleMapApi"], angular.module("app.examples.maps").controller("MapTerrainDemoController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        var n = this;
        t.then(function (e) {
            n.labeledMap = {
                center: {latitude: 35.027469, longitude: -111.022753},
                zoom: 4,
                marker: {
                    id: 0,
                    coords: {latitude: 35.027469, longitude: -111.022753},
                    options: {
                        icon: {
                            anchor: new e.Point(36, 36),
                            origin: new e.Point(0, 0),
                            url: "assets/images/maps/blue_marker.png"
                        }
                    }
                },
                options: {scrollwheel: !1}
            }, n.labelTitle = "Hello from Arizona!"
        })
    }

    e.$inject = ["$scope", "uiGmapGoogleMapApi"], angular.module("app.examples.maps").controller("MapLabelDemoController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.forms", [])
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.user = {username: "Morris", password: "", description: "", favouriteColor: ""}
    }

    angular.module("app.examples.forms").controller("Binding1Controller", e)
}(), function () {
    "use strict";
    function e(e, t, n) {
        function a(n) {
            var a, o = n ? s.states.filter(r(n)) : s.states;
            return self.simulateQuery ? (a = t.defer(), e(function () {
                a.resolve(o)
            }, 1e3 * Math.random(), !1), a.promise) : o
        }

        function o(e) {
            n.info("Text changed to " + e)
        }

        function i(e) {
            n.info("Item changed to " + e)
        }

        function l() {
            var e = "Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,                Wisconsin, Wyoming";
            return e.split(/, +/g).map(function (e) {
                return {value: e.toLowerCase(), display: e}
            })
        }

        function r(e) {
            var t = angular.lowercase(e);
            return function (e) {
                return 0 === e.value.indexOf(t)
            }
        }

        var s = this;
        s.states = l(), s.selectedItem = null, s.searchText = null, s.querySearch = a, s.simulateQuery = !1, s.isDisabled = !1, s.selectedItemChange = i, s.searchTextChange = o
    }

    e.$inject = ["$timeout", "$q", "$log"], angular.module("app.examples.forms").controller("Autocomplete1Controller", e)
}(), function () {
    "use strict";
    angular.module("app.examples.elements", [])
}(), function () {
    "use strict";
    function e(e, t) {
        function n(t) {
            null !== t && t.length > 0 && (r = t, a(), e(o, 4e3))
        }

        function a() {
            l.status = "uploading"
        }

        function o() {
            l.status = "complete";
            var n = "Thanks for ";
            for (var a in r)n += r[a].name + " ";
            t.show({
                template: "<md-toast><span flex>" + n + "</span></md-toast>",
                position: "bottom right",
                hideDelay: 5e3
            }), e(i, 3e3)
        }

        function i() {
            l.status = "idle"
        }

        var l = this;
        l.status = "idle", l.upload = n;
        var r
    }

    e.$inject = ["$timeout", "$mdToast"], angular.module("app.examples.elements").controller("ElementsUploadAnimateController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            if (null !== t && t.length > 0) {
                var n = "Thanks for ";
                for (var a in t)n += t[a].name + " ";
                e.show({
                    template: "<md-toast><span flex>" + n + "</span></md-toast>",
                    position: "bottom right",
                    hideDelay: 5e3
                })
            }
        }

        var n = this;
        n.upload = t
    }

    e.$inject = ["$mdToast"], angular.module("app.examples.elements").controller("ElementsUpload1Controller", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n) {
            var a = angular.element(t.currentTarget);
            e.show({
                template: "<md-toast><span flex>I'm a toast</span></md-toast>",
                position: n,
                hideDelay: 3e3,
                parent: a.parent()
            })
        }

        var n = this;
        n.showToast = t
    }

    e.$inject = ["$mdToast"], angular.module("app.examples.elements").controller("Toast1Controller", e)
}(), function () {
    "use strict";
    function e(e, t, n, a) {
        function o() {
            var t;
            e.$watch("vm.query.filter", function (e, n) {
                n || (t = r.query.page), e !== n && (r.query.page = 1), e || (r.query.page = t), r.getUsers()
            })
        }

        function i() {
            r.promise = a.getUsers(r.query), r.promise.then(function (e) {
                r.users = e.data
            })
        }

        function l() {
            r.filter.show = !1, r.query.filter = "", r.filter.form.$dirty && r.filter.form.$setPristine()
        }

        var r = this;
        r.query = {filter: "", limit: "10", order: "-id", page: 1}, r.selected = [], r.columns = {
            avatar: "Avatar",
            login: "Login",
            id: "ID"
        }, r.filter = {options: {debounce: 500}}, r.getUsers = i, r.removeFilter = l, o()
    }

    e.$inject = ["$scope", "$timeout", "$q", "GithubService"], angular.module("app.examples.elements").controller("TablesAdvancedController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            var n = "id" === t.order ? "desc" : "asc";
            return e.get("https://api.github.com/search/users?q=" + t.filter + "+repos:%3E10+followers:%3E100&order=" + n + "&sort=joined&per_page=" + t.limit + "&page=" + t.page).success(function (e) {
                return e
            })
        }

        return {getUsers: t}
    }

    angular.module("app.examples.elements").factory("GithubService", e), e.$inject = ["$http", "$q"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.columns = [{title: "", field: "thumb", sortable: !1, filter: "tableImage"}, {
            title: "Name",
            field: "name",
            sortable: !0
        }, {title: "Description", field: "description", sortable: !0}, {
            title: "Date of Birth",
            field: "birth",
            sortable: !0
        }], e.contents = [{
            thumb: "assets/images/avatars/avatar-1.png",
            name: "Chris Doe",
            description: "Developer",
            birth: "Jun 5, 1994"
        }, {
            thumb: "assets/images/avatars/avatar-2.png",
            name: "Ann Doe",
            description: "Commerce",
            birth: "Jul 15, 1993"
        }, {
            thumb: "assets/images/avatars/avatar-3.png",
            name: "Mark Ronson",
            description: "Designer",
            birth: "Jan 27, 1984"
        }, {
            thumb: "assets/images/avatars/avatar-4.png",
            name: "Eric Doe",
            description: "Human Resources",
            birth: "Feb 3, 1985"
        }, {
            thumb: "assets/images/avatars/avatar-5.png",
            name: "John Doe",
            description: "Commerce",
            birth: "Sep 5, 1978"
        }, {
            thumb: "assets/images/avatars/avatar-1.png",
            name: "George Doe",
            description: "Media",
            birth: "Jun 23, 1996"
        }, {
            thumb: "assets/images/avatars/avatar-2.png",
            name: "Ann Ronson",
            description: "Commerce",
            birth: "Aug 16, 1995"
        }, {
            thumb: "assets/images/avatars/avatar-3.png",
            name: "Adam Ronson",
            description: "Developer",
            birth: "Jan 7, 1987"
        }, {
            thumb: "assets/images/avatars/avatar-4.png",
            name: "Hansel Doe",
            description: "Social Media",
            birth: "Feb 13, 1977"
        }, {thumb: "assets/images/avatars/avatar-5.png", name: "Tony Doe", description: "CEO", birth: "Sep 29, 1970"}]
    }

    angular.module("app.examples.elements").controller("Tables1Controller", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n() {
            t.setLoaderActive(!0), e(function () {
                t.setLoaderActive(!1)
            }, 1e3 * a.time)
        }

        var a = this;
        a.showLoader = n, a.time = 5
    }

    e.$inject = ["$timeout", "triLoaderService"], angular.module("app.examples.elements").controller("Loader1Controller", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            var n, a = 0;
            for (var o in e.palettes)Math.random() < 1 / ++a && "white" !== o && (t.palette = o, n = e.palettes[o]);
            t.hue = 100 * Math.floor(9 * Math.random() + 1), t.color = e.rgba(n[t.hue].value)
        }

        function n() {
            var e = Math.random();
            return e < .8 ? 1 : e < .9 ? 2 : 3
        }

        var a = this;
        a.colorTiles = function () {
            for (var e = [], a = 0; a < 46; a++) {
                var o = {colspan: n(), rowspan: n()};
                t(o), e.push(o)
            }
            return e
        }()
    }

    e.$inject = ["triTheming"], angular.module("app.examples.elements").controller("Grids1Controller", e)
}(), function () {
    "use strict";
    function e(e, t, n) {
        function a(e) {
            t.show({
                template: "<md-toast><span flex>" + e + "</span></md-toast>",
                position: "top right",
                hideDelay: 3e3,
                parent: n
            })
        }

        var o = this;
        o.fabDirections = ["up", "down", "left", "right"], o.fabDirection = o.fabDirections[0], o.fabAnimations = ["md-fling", "md-scale"], o.fabAnimation = o.fabAnimations[0], o.fabStatuses = [!1, !0], o.fabStatus = o.fabStatuses[0], o.share = a
    }

    e.$inject = ["$scope", "$mdToast", "$element"], angular.module("app.examples.elements").controller("Fab1Controller", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n) {
            e.show(e.confirm().title(n.title).textContent(n.content).ok(n.ok).cancel(n.cancel).targetEvent(t))
        }

        var n = this;
        n.createDialog = t, n.newDialog = {
            title: "Are you sure?",
            content: "This will wipe your whole computer!",
            ok: "Agree",
            cancel: "Disagree"
        }
    }

    e.$inject = ["$mdDialog"], angular.module("app.examples.elements").controller("DialogsController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            var n = angular.lowercase(t);
            return e.data.filter(function (e) {
                var t = angular.lowercase(e.name);
                if (t.indexOf(n) !== -1)return e
            })
        }

        var n = this;
        n.email = {to: [], cc: [], bcc: []}, n.queryContacts = t
    }

    e.$inject = ["contacts"], angular.module("app.examples.elements").controller("ChipsController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.dashboards", [])
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n, a, o) {
            o.setLoading(!0);
            var i = 'select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + a.weatherWidget + '")', l = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(i) + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            e.get(l).success(function (e) {
                e.query.count > 0 && (o.setLoading(!1), t.weather = {
                    iconClass: "wi-yahoo-" + e.query.results.channel.item.condition.code,
                    date: new Date(e.query.created),
                    temp: e.query.results.channel.item.condition.temp,
                    text: e.query.results.channel.item.condition.text,
                    location: a.weatherWidget
                })
            })
        }

        var n = {require: "triWidget", link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$http"], angular.module("app.examples.dashboards").directive("weatherWidget", e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            e.tweets = [{
                user: "oxygenna",
                body: "Don't miss it! A Material Design Avatar set with 1440 avatars! http://sellfy.com/p/EUcC/ #avatars #materialdesign"
            }, {
                user: "oxygenna",
                body: "Looking for a design for emotion case study to convince the boss/client? This one's worth $2.8 million."
            }, {
                user: "oxygenna",
                body: "New Freebie! A set of 27 Drinks-Lifestyle Icons available in PSD/AI/PNG format #freebie #icons #drinks http://wp.me/p5Xp06-Fq"
            }], e.selectedTab = 0, e.prevTweet = function () {
                e.selectedTab--, e.selectedTab < 0 && (e.selectedTab = e.tweets.length - 1)
            }, e.nextTweet = function () {
                e.selectedTab++, e.selectedTab === e.tweets.length && (e.selectedTab = 0)
            }
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.examples.dashboards").directive("twitterWidget", e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            e.todos = [{name: "Buy Milk", done: !1}, {name: "Fix Server", done: !0}, {
                name: "Walk the dog",
                done: !1
            }, {name: "Upload files", done: !1}]
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.examples.dashboards").directive("todoWidget", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n(e) {
            function n(e) {
                for (e.data[0].length && (e.labels = e.labels.slice(1), e.data[0] = e.data[0].slice(1)); e.data[0].length < e.dataLength;)e.labels.push(""), e.data[0].push(o(e.data[0], e.maximum))
            }

            function a(e) {
                e.data = [];
                for (var t = 0; t < e.series.length; t++) {
                    for (var n = [], a = 0; a < e.labels.length; a++)n.push(Math.floor(100 * Math.random() + 1));
                    e.data.push(n)
                }
            }

            function o(e, t) {
                var n = e.length, a = n ? e[n - 1] : 50, o = a + 10 * Math.random() - 5;
                return o < 0 ? 0 : o > t ? t : o
            }

            e.serverCharts = {
                bandwidth: {
                    dataLength: 50,
                    maximum: 40,
                    data: [[]],
                    labels: [],
                    options: {
                        animation: !1,
                        showTooltips: !1,
                        pointDot: !1,
                        datasetStrokeWidth: .5,
                        maintainAspectRatio: !1
                    },
                    colours: ["#4285F4"]
                },
                cpu: {
                    dataLength: 50,
                    maximum: 100,
                    data: [[]],
                    labels: [],
                    options: {
                        animation: !1,
                        showTooltips: !1,
                        pointDot: !1,
                        datasetStrokeWidth: .5,
                        maintainAspectRatio: !1
                    },
                    colours: ["#DB4437"]
                },
                data24hrs: {
                    series: ["Bandwidth", "CPU"],
                    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
                },
                data7days: {
                    series: ["Bandwidth", "CPU"],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                },
                data365days: {
                    series: ["Bandwidth", "CPU"],
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                }
            }, a(e.serverCharts.data24hrs), a(e.serverCharts.data7days), a(e.serverCharts.data365days), t(function () {
                n(e.serverCharts.bandwidth), n(e.serverCharts.cpu)
            }, 1e3)
        }

        var a = {require: "triWidget", link: n, restrict: "A"};
        return a
    }

    e.$inject = ["$timeout", "$interval"], angular.module("app.examples.dashboards").directive("serverWidget", e)
}(), function () {
    "use strict";
    function e(e, t, n) {
        function a(a, o, i, l) {
            function r() {
                a.alert = "You cancelled the dialog."
            }

            function s(e, t, n) {
                e.data = n, e.closeDialog = function () {
                    t.cancel()
                }
            }

            s.$inject = ["$scope", "$mdDialog", "data"], l.setLoading(!0);
            var d = e(i.loadDataWidget)(a);
            l.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-search", title: "Details", click: function (e) {
                        var t = [];
                        angular.forEach(d, function (e, n) {
                            t = a[n]
                        }), n.show({
                            controller: s,
                            templateUrl: "app/examples/dashboards/widgets/widget-load-data-dialog.tmpl.html",
                            targetEvent: e,
                            locals: {data: t},
                            clickOutsideToClose: !0
                        }).then(function (e) {
                            a.alert = 'You said the information was "' + e + '".'
                        }, r)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), angular.forEach(d, function (e, n) {
                t.get(e).success(function (e) {
                    var t = e.shift();
                    l.setLoading(!1), a[n] = {header: t, data: e}
                })
            })
        }

        var o = {require: "triWidget", link: a, restrict: "A"};
        return o
    }

    e.$inject = ["$parse", "$http", "$mdDialog"], angular.module("app.examples.dashboards").directive("loadDataWidget", e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            e.geoChartData = {
                type: "GeoChart",
                data: [["Country", "Popularity"], ["Germany", 200], ["United States", 300], ["Brazil", 400], ["Canada", 500], ["France", 600], ["RU", 700]]
            }
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.examples.dashboards").directive("googleGeochartWidget", e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            e.contacts = [{name: "Morris Onions", image: "assets/images/avatars/avatar-2.png"}, {
                name: "Newton Welch",
                image: "assets/images/avatars/avatar-5.png"
            }, {name: "Kelly Koelpin", image: "assets/images/avatars/avatar-1.png"}, {
                name: "Rowland Emard",
                image: "assets/images/avatars/avatar-2.png"
            }, {name: "Kailee Johnston", image: "assets/images/avatars/avatar-3.png"}, {
                name: "Roberto Grimes",
                image: "assets/images/avatars/avatar-4.png"
            }]
        }

        var t = {requrie: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.examples.dashboards").directive("contactsWidget", e);
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            e.conversation = [{
                name: "Morris Onions",
                image: "assets/images/avatars/avatar-6.png",
                messages: ["Hi there how are you?", "Hello?"]
            }, {
                name: "Danny Ings",
                image: "assets/images/avatars/avatar-3.png",
                messages: ["Howsitgowin?"]
            }, {
                name: "Morris Onions",
                image: "assets/images/avatars/avatar-6.png",
                messages: ["We need those images ASAP!", "Client asked about them."]
            }, {
                name: "Danny Ings",
                image: "assets/images/avatars/avatar-3.png",
                messages: ["OK, will send them over"]
            }], e.userClass = function (e) {
                return e ? "user-left" : "user-right"
            }
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.examples.dashboards").directive("chatWidget", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n(e) {
            function n() {
                for (e.tickerChart.data[0].length && (e.tickerChart.labels = e.tickerChart.labels.slice(1), e.tickerChart.data[0] = e.tickerChart.data[0].slice(1)); e.tickerChart.data[0].length < o;)e.tickerChart.labels.push(""), e.tickerChart.data[0].push(a(e.tickerChart.data[0]))
            }

            function a(e) {
                var t = e.length, n = t ? e[t - 1] : 50, a = n + 10 * Math.random() - 5;
                return a < 0 ? 0 : a > 100 ? 100 : a
            }

            var o = 100;
            e.tickerChart = {
                data: [[]],
                labels: [],
                options: {
                    animation: !1,
                    showScale: !1,
                    showTooltips: !1,
                    pointDot: !1,
                    datasetStrokeWidth: .5,
                    maintainAspectRatio: !1
                }
            }, t(function () {
                n()
            }, 1e3)
        }

        var a = {require: "triWidget", link: n, restrict: "A"};
        return a
    }

    e.$inject = ["$timeout", "$interval"], angular.module("app.examples.dashboards").directive("chartjsTickerWidget", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n, a, o) {
            o.setLoading(!0), e(function () {
                o.setLoading(!1)
            }, 2500), o.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-refresh", title: "Refresh", click: function () {
                        o.setLoading(!0), e(function () {
                            o.setLoading(!1)
                        }, 1500)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), t.pieChart = {labels: ["Facebook", "Twitter", "Google+", "Others"], data: [300, 500, 100, 50]}
        }

        var n = {require: "triWidget", link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$timeout"], angular.module("app.examples.dashboards").directive("chartjsPieWidget", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n(n, a, o, i) {
            function l() {
                n.lineChart.data = [];
                for (var e = 0; e < n.lineChart.series.length; e++) {
                    for (var t = [], a = 0; a < n.lineChart.labels.length; a++)t.push(Math.floor(100 * Math.random() + 1));
                    n.lineChart.data.push(t)
                }
            }

            i.setLoading(!0), e(function () {
                i.setLoading(!1), l()
            }, 1500), i.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-refresh", title: "Refresh", click: function () {
                        t.cancel(n.intervalPromise), i.setLoading(!0), e(function () {
                            i.setLoading(!1), l()
                        }, 1500)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), n.lineChart = {
                labels: ["January", "February", "March", "April", "May"],
                series: ["Pageviews", "Visits", "Sign ups"],
                options: {datasetFill: !1, responsive: !0},
                data: []
            }
        }

        var a = {require: "triWidget", link: n, restrict: "A"};
        return a
    }

    e.$inject = ["$timeout", "$interval"], angular.module("app.examples.dashboards").directive("chartjsLineWidget", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n, a, o) {
            o.setLoading(!0), e(function () {
                o.setLoading(!1)
            }, 2500), o.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-refresh", title: "Refresh", click: function () {
                        o.setLoading(!0), e(function () {
                            o.setLoading(!1)
                        }, 1500)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), t.labels = ["Facebook", "Twitter", "Google+", "Others"], t.series = ["This Week", "Last week"], t.data = [[65, 59, 80, 81], [28, 48, 40, 19]]
        }

        var n = {require: "triWidget", link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$timeout"], angular.module("app.examples.dashboards").directive("chartjsBarWidget", e)
}(), function () {
    "use strict";
    function e() {
        var e = {bindToController: !0, controller: t, controllerAs: "calendarController", restrict: "A"};
        return e
    }

    function t(e, t, n) {
        function a(e) {
            t.calendars.calendarWidget.fullCalendar(e)
        }

        function o() {
        }

        function i() {
            r()
        }

        var l = this;
        l.calendarEvents = [], l.calendarOptions = {
            lang: "en", header: !1, height: "auto", viewRender: function (e) {
                l.currentDay = e.calendar.getDate()
            }
        }, l.changeMonth = a;
        var r = n.$on("$translateChangeSuccess", o);
        e.$on("$destroy", i)
    }

    t.$inject = ["$scope", "uiCalendarConfig", "$rootScope"], angular.module("app.examples.dashboards").directive("calendarWidget", e)
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.whotofollow = [{
            name: "Twitch",
            user: "twitch",
            avatar: "assets/images/avatars/avatar-1.png"
        }, {name: "MaterialUp", user: "materialUP", avatar: "assets/images/avatars/avatar-3.png"}, {
            name: "Bower",
            user: "bower",
            avatar: "assets/images/avatars/avatar-2.png"
        }], e.trends = ["#DescribeTwitterIn3Words", "#OhNoHarry", "#mnimonio3", "#WeForgiveYouAriana", "#FifthHarmonyTODAY", "Omar Sharif", "Go Set a Watchman", "Ηρωδειο", "Ryanair", "Η ΕΡΤ"], e.favorites = [{
            name: "Twitch",
            avatar: "assets/images/avatars/avatar-1.png",
            user: "twitch",
            date: moment().subtract(1, "hour"),
            tweet: "We had an absolute blast bringing @E3 to you this year. Check out our video recap."
        }, {
            name: "PixelBucket",
            avatar: "assets/images/avatars/avatar-2.png",
            user: "twitch",
            date: moment().subtract(1, "days"),
            tweet: "Turn a Pencil Sketch Into a Colorful and Dynamic Character Illustration http://bit.ly/1HoJhbN  @TutsPlusDesign"
        }, {
            name: "Webdesigntuts",
            avatar: "assets/images/avatars/avatar-3.png",
            user: "wdtuts",
            date: moment().subtract(2, "days"),
            tweet: "100 people have entered our challenge to win @CodePen & @envatomarket goodies! 2 days left :) http://ow.ly/PqjP9"
        }, {
            name: "BestCSS",
            avatar: "assets/images/avatars/avatar-4.png",
            user: "bestcss",
            date: moment().subtract(3, "days"),
            tweet: "#Site of the Day"
        }, {
            name: "MaterialUP",
            avatar: "assets/images/avatars/avatar-5.png",
            user: "materialup",
            date: moment().subtract(4, "days"),
            tweet: "OnePlus One Mockup PSD - Mockup by @zerpixelung"
        }, {
            name: "Webdesigner Depot",
            avatar: "assets/images/avatars/avatar-6.png",
            user: "DesignerDepot",
            date: moment().subtract(7, "days"),
            tweet: "Semantic UI 2.0: Design beautiful websites quicker http://depot.ly/Pq6oC"
        }]
    }

    angular.module("app.examples.dashboards").controller("DashboardSocialController", e)
}(), function () {
    "use strict";
    function e(e, t, n) {
        var a = this;
        a.disks = [{
            icon: "zmdi zmdi-storage",
            name: "Ubuntu 10.04 LTS Disk Image",
            enabled: !0
        }, {icon: "zmdi zmdi-input-composite", name: "Ubuntu 11.10 SSD Image", enabled: !1}, {
            icon: "zmdi zmdi-storage",
            name: "256MB Swap Image",
            enabled: !0
        }], a.jobs = [{job: "Host initiated restart", time: "Took: 10 seconds", complete: !0}, {
            job: "Snapshot ",
            time: "Took: 6minutes 26 seconds",
            complete: !1
        }], a.serverChart = {
            labels: ["Swap space", "Kernel", "OS", "Free space"],
            data: [15, 5, 35, 45]
        }, t(function () {
            n.show(n.simple().content("Server CPU at 100%!").position("bottom right").hideDelay(3e3))
        }, 5e3)
    }

    e.$inject = ["$scope", "$timeout", "$mdToast"], angular.module("app.examples.dashboards").controller("DashboardServerController", e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            for (var n = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: []
            }, a = e.start.toDate(), o = e.end.toDate(), i = a.getTime(); i < o.getTime(); i += 864e5) {
                var l = Math.floor(100 * Math.random()) + 0, r = t(l, i);
                n.orders = n.orders.concat(r.orders), n.dayTotals.push({
                    date: moment(i),
                    sales: l,
                    earnings: r.totalEarnings
                }), n.totalSales += l, n.totalEarnings += r.totalEarnings
            }
            return n
        }

        function t(e, t) {
            for (var a = {orders: [], totalEarnings: 0}, o = 0; o < e; o++) {
                var i = n(t);
                a.totalEarnings += i.total, a.orders.push(i)
            }
            return a
        }

        function n(e) {
            for (var t = ["complete", "pending", "delivered"], n = ["Loraine Heidenreich", "Amie Hane", "Rosalyn Heller V", "Dr. Kristian Boyle II", "Clarabelle Weber", "Rowland Emard", "Kitty Heller DVM", "Winston Frami", "Newton Welch", "Trudie Feest", "Vivien Sauer", "Cleta Kuhn", "Ruby Shields", "Dr. Moises Beahan DDS", "Miss Shanel Jenkins DVM", "Kitty Heller DVM", "Vivien Sauer", "Clara Cremin", "Eunice Morissette", "Arch Sporer IV", "Miss Shanel Jenkins DVM", "Ryann Balistreri I", "Norma Yost DDS", "Manley Roberts", "Ruby Shields", "Miss Lavada Runolfsson", "Kira Dooley", "Meredith Ebert DDS"], a = ["johnson.althea@gleichner.net", "will.rhea@weber.biz", "roslyn75@keebler.com", "okon.glenda@hamill.com", "estroman@cruickshank.org", "victoria41@hartmann.com", "bogisich.janice@wilkinson.com", "bryce97@kris.com", "noe59@king.com", "wiza.litzy@kozey.com", "oconner.cortney@gmail.com", "kub.fannie@hotmail.com", "adrian00@gutkowski.com", "justice69@yahoo.com", "torphy.toney@yahoo.com", "bogisich.janice@wilkinson.com", "oconner.cortney@gmail.com", "orval63@gmail.com", "jaime94@gmail.com", "olaf69@okeefe.com", "torphy.toney@yahoo.com", "bernhard.bruen@marvin.com", "otilia61@hotmail.com", "bogan.lelia@bins.info", "adrian00@gutkowski.com", "yazmin76@hotmail.com", "kglover@hotmail.com", "erick.hermann@larkin.net", "bernhard.bruen@marvin.com", "bradly90@corkery.info", "orval63@gmail.com", "olaf69@okeefe.com"], o = {
                id: l(),
                buyer: a[Math.floor(Math.random() * a.length)],
                name: n[Math.floor(Math.random() * n.length)],
                date: moment(e + Math.floor(864e5 * Math.random()) + 0),
                items: [],
                subTotal: 0,
                status: t[Math.floor(Math.random() * t.length)],
                tax: 0,
                total: 0
            }, i = Math.floor(5 * Math.random()) + 1, r = ["Super", "Amazing", "Great", "New"], s = ["T-Shirt", "Book", "Desk", "Coat", "Chair", "Hat", "Jeans"], d = ["Red", "Green", "Blue", "Pink", "Yellow", "Orange"], m = ["Books", "Electronics", "Home", "Toys", "Clothes", "Shoes", "Mobiles"], c = 0; c < i; c++) {
                var u = {
                    name: r[Math.floor(Math.random() * r.length)] + " " + d[Math.floor(Math.random() * d.length)] + " " + s[Math.floor(Math.random() * s.length)],
                    category: m[Math.floor(Math.random() * m.length)],
                    price: (99 * Math.random() + 1).toFixed(2)
                };
                o.subTotal += parseFloat(u.price), o.items.push(u)
            }
            return o.tax = .2 * o.subTotal, o.total += o.subTotal + o.tax, o
        }

        function a(e) {
            for (var t = {
                labels: [],
                series: ["Sales"],
                options: {
                    maintainAspectRatio: !1,
                    datasetFill: !1,
                    responsive: !0,
                    scaleShowGridLines: !1,
                    bezierCurve: !0,
                    pointDotRadius: 2,
                    scaleFontColor: "#ffffff",
                    scaleFontSize: 16
                },
                colors: ["#ffffff"],
                data: []
            }, n = [], a = 0; a < e.dayTotals.length; a++)t.labels.push(e.dayTotals[a].date.format("M/D/YY")), n.push(e.dayTotals[a].sales);
            return t.data.push(n), t
        }

        function o(e) {
            for (var t = {labels: [], data: []}, n = 0; n < e.orders.length; n++) {
                t.labels.indexOf(e.orders[n].status) === -1 && (t.labels.push(e.orders[n].status), t.data.push(0));
                var a = t.labels.indexOf(e.orders[n].status);
                t.data[a]++
            }
            return t
        }

        function i(e) {
            for (var t = {
                labels: [],
                series: ["Sales"],
                data: [],
                options: {barShowStroke: !1}
            }, n = [], a = 0; a < e.orders.length; a++)for (var o = 0; o < e.orders[a].items.length; o++) {
                t.labels.indexOf(e.orders[a].items[o].category) === -1 && (t.labels.push(e.orders[a].items[o].category), n.push(0));
                var i = t.labels.indexOf(e.orders[a].items[o].category);
                n[i]++
            }
            return t.data.push(n), t
        }

        function l() {
            for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = 0; n < 5; n++)e += t.charAt(Math.floor(Math.random() * t.length));
            return e
        }

        return {generateSales: e, createLineChartData: a, createPieChartData: o, createBarChartData: i}
    }

    angular.module("app.examples.dashboards").factory("SalesService", e)
}(), function () {
    "use strict";
    function e(e, t, n) {
        function a() {
            t.hide()
        }

        function o() {
            t.cancel()
        }

        function i() {
            e.print()
        }

        var l = this;
        l.cancelClick = o, l.okClick = a, l.order = n, l.printClick = i
    }

    e.$inject = ["$window", "$mdDialog", "order"], angular.module("app.examples.dashboards").controller("SalesOrderDialogController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e.$broadcast("salesChangeDate", t)
        }

        var n = this;
        n.changeDate = t
    }

    e.$inject = ["$rootScope"], angular.module("app.examples.dashboards").controller("SalesFabController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n() {
            t.start = new moment(o.start), t.end = new moment(o.end), e.hide()
        }

        function a() {
            e.cancel()
        }

        var o = this;
        o.cancelClick = a, o.okClick = n, o.start = t.start.toDate(), o.end = t.end.toDate()
    }

    e.$inject = ["$mdDialog", "range"], angular.module("app.examples.dashboards").controller("DateChangeDialogController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(e, t) {
            i.show({
                controller: "SalesOrderDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/dashboards/sales/order-dialog.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        function s() {
            d.salesData = l.generateSales(d.dateRange), d.chartLineData = l.createLineChartData(d.salesData), d.chartPieData = l.createPieChartData(d.salesData), d.chartBarData = l.createBarChartData(d.salesData)
        }

        var d = this;
        d.dateRange = {start: moment().startOf("week"), end: moment().endOf("week")}, d.query = {
            order: "date",
            limit: 5,
            page: 1
        }, d.openOrder = r, e.$on("salesChangeDate", function (e, t) {
            i.show({
                controller: "DateChangeDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/dashboards/sales/date-change-dialog.tmpl.html",
                locals: {range: d.dateRange},
                targetEvent: t
            }).then(function () {
                s(), a.show(a.simple().content(o("triTranslate")("Date Range Updated")).position("bottom right").hideDelay(2e3))
            })
        }), s()
    }

    e.$inject = ["$scope", "$q", "$timeout", "$mdToast", "$filter", "$mdDialog", "SalesService"], angular.module("app.examples.dashboards").controller("DashboardSalesController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            t(function () {
                a.$broadcast("newMailNotification");
                var e = n.simple().textContent("You have new email messages!").action("View").highlightAction(!0).position("bottom right");
                n.show(e).then(function (e) {
                    "ok" == e && o.go("triangular.email.inbox")
                })
            }, 5e3)
        }

        var l = this;
        l.init = i, i()
    }

    e.$inject = ["$scope", "$timeout", "$mdToast", "$rootScope", "$state"], angular.module("app.examples.dashboards").controller("DashboardAnalyticsController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.charts", [])
}(), function () {
    "use strict";
    function e() {
        var e = this, t = [];
        e.chartData = {
            type: "Scatter",
            data: {
                cols: [{id: "id", label: "Student ID", type: "number"}, {
                    id: "hours",
                    label: "Hours Studied",
                    type: "number"
                }, {id: "final", label: "Final", type: "number"}], rows: t
            },
            options: {
                chart: {
                    title: "Box Office Earnings in First Two Weeks of Opening",
                    subtitle: "in millions of dollars (USD)"
                }, width: "100%", height: 600
            }
        };
        for (var n = 0; n < 100; n++)t.push({c: [{v: n}, {v: Math.floor(100 * Math.random() + 1)}, {v: Math.floor(100 * Math.random() + 1)}]})
    }

    angular.module("app.examples.charts").controller("GoogleChartsScatterController", e), e.$inject = []
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.chartData = {
            type: "Line",
            data: {
                cols: [{id: "day", label: "Day", type: "number"}, {
                    id: "sales",
                    label: "Sales",
                    type: "number"
                }, {id: "income", label: "Income", type: "number"}],
                rows: [{c: [{v: 14}, {v: 37.8}, {v: 90.8}]}, {c: [{v: 13}, {v: 30.9}, {v: 69.5}]}, {c: [{v: 12}, {v: 25.4}, {v: 57}]}, {c: [{v: 11}, {v: 11.7}, {v: 18.8}]}, {c: [{v: 10}, {v: 11.9}, {v: 17.6}]}, {c: [{v: 9}, {v: 8.8}, {v: 13.6}]}, {c: [{v: 8}, {v: 7.6}, {v: 12.3}]}, {c: [{v: 7}, {v: 12.3}, {v: 29.2}]}, {c: [{v: 6}, {v: 16.9}, {v: 42.9}]}, {c: [{v: 5}, {v: 12.8}, {v: 30.9}]}, {c: [{v: 4}, {v: 5.3}, {v: 7.9}]}, {c: [{v: 3}, {v: 6.6}, {v: 8.4}]}, {c: [{v: 2}, {v: 4.8}, {v: 6.3}]}, {c: [{v: 1}, {v: 4.2}, {v: 6.2}]}]
            },
            options: {
                chart: {
                    title: "Box Office Earnings in First Two Weeks of Opening",
                    subtitle: "in millions of dollars (USD)"
                }, width: "100%", height: 600
            }
        }
    }

    angular.module("app.examples.charts").controller("GoogleChartsLineController", e)
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.barChart = {
            type: "Bar",
            data: [["Year", "Sales", "Expenses", "Profit"], ["2014", 1e3, 400, 200], ["2015", 1170, 460, 250], ["2016", 660, 1120, 300], ["2017", 1030, 540, 350]],
            options: {
                chart: {title: "Company Performance", subtitle: "Sales, Expenses, and Profit: 2014-2017"},
                bars: "vertical",
                width: "100%",
                height: "600"
            }
        }
    }

    angular.module("app.examples.charts").controller("GoogleChartsBarController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            for (o.data[0].length && (o.labels = o.labels.slice(1), o.data[0] = o.data[0].slice(1)); o.data[0].length < a;)o.labels.push(""), o.data[0].push(n(o.data[0]))
        }

        function n(e) {
            var t = e.length, n = t ? e[t - 1] : 50, a = n + 10 * Math.random() - 5;
            return a < 0 ? 0 : a > 100 ? 100 : a
        }

        var a = 100, o = this;
        o.data = [[]], o.labels = [], o.options = {
            animation: !1,
            showScale: !1,
            showTooltips: !1,
            pointDot: !1,
            datasetStrokeWidth: .5
        }, e(function () {
            t()
        }, 40)
    }

    e.$inject = ["$interval"], angular.module("app.examples.charts").controller("ChartJsTickerController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            n.data = [];
            for (var e = 0; e < n.labels.length; e++)n.data.push(Math.floor(100 * Math.random() + 1))
        }

        var n = this;
        n.labels = ["Download Sales", "Instore Sales", "Mail Order"], n.options = {datasetFill: !1}, t(), e(t, 5e3)
    }

    e.$inject = ["$interval"], angular.module("app.examples.charts").controller("ChartJsPieController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            n.data = [];
            for (var e = 0; e < n.series.length; e++) {
                for (var t = [], a = 0; a < n.labels.length; a++)t.push(Math.floor(100 * Math.random() + 1));
                n.data.push(t)
            }
        }

        var n = this;
        n.labels = ["January", "February", "March", "April", "May", "June", "July"], n.series = ["Series A", "Series B", "Series C"], n.options = {datasetFill: !1}, t(), e(t, 5e3)
    }

    e.$inject = ["$interval"], angular.module("app.examples.charts").controller("ChartJsLineController", e)
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            n.data = [];
            for (var e = 0; e < n.series.length; e++) {
                for (var t = [], a = 0; a < n.labels.length; a++)t.push(Math.floor(100 * Math.random() + 1));
                n.data.push(t)
            }
        }

        var n = this;
        n.labels = ["January", "February", "March", "April", "May", "June", "July"], n.series = ["Series A", "Series B"], t(), e(t, 5e3)
    }

    e.$inject = ["$interval"], angular.module("app.examples.charts").controller("ChartJsBarController", e)
}(), function () {
    "use strict";
    angular.module("app.examples.authentication", [])
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i) {
        function l() {
            n.show(n.simple().content(o("triTranslate")("Confirmation sent")).position("bottom right").action(o("triTranslate")("Login")).highlightAction(!0).hideDelay(0)).then(function () {
                t.go("authentication.login")
            })
        }

        var r = this;
        r.triSettings = i, r.signupClick = l, r.user = {name: "", email: "", password: "", confirm: ""}
    }

    e.$inject = ["$scope", "$state", "$mdToast", "$http", "$filter", "triSettings"], angular.module("app.examples.authentication").controller("SignupController", e)
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.settingsGroups = [{
            name: "Account Settings",
            settings: [{title: "Show my location", icon: "zmdi zmdi-pin", enabled: !0}, {
                title: "Show my avatar",
                icon: "zmdi zmdi-face",
                enabled: !1
            }, {title: "Send me notifications", icon: "zmdi zmdi-notifications-active", enabled: !0}]
        }, {
            name: "Chat Settings",
            settings: [{
                title: "Show my username",
                icon: "zmdi zmdi-account",
                enabled: !0
            }, {
                title: "Make my profile public",
                icon: "zmdi zmdi-account-box",
                enabled: !1
            }, {title: "Allow cloud backups", icon: "zmdi zmdi-cloud-upload", enabled: !0}]
        }], e.user = {
            name: "Christos",
            email: "info@oxygenna.com",
            location: "Sitia, Crete, Greece",
            website: "http://www.oxygenna.com",
            twitter: "oxygenna",
            bio: "We are a small creative web design agency \n who are passionate with our pixels.",
            current: "",
            password: "",
            confirm: ""
        }
    }

    angular.module("app.examples.authentication").controller("ProfileController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n() {
            e.go("triangular.dashboard-analytics")
        }

        var a = this;
        a.loginClick = n, a.socialLogins = [{
            icon: "fa fa-twitter",
            color: "#5bc0de",
            url: "#"
        }, {icon: "fa fa-facebook", color: "#337ab7", url: "#"}, {
            icon: "fa fa-google-plus",
            color: "#e05d6f",
            url: "#"
        }, {icon: "fa fa-linkedin", color: "#337ab7", url: "#"}], a.triSettings = t, a.user = {email: "", password: ""}
    }

    e.$inject = ["$state", "triSettings"], angular.module("app.examples.authentication").controller("LoginController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        function n() {
            e.go("triangular.dashboard-general")
        }

        var a = this;
        a.loginClick = n, a.user = {name: "Morris Onions", email: "info@oxygenna.com", password: ""}, a.triSettings = t
    }

    e.$inject = ["$state", "triSettings"], angular.module("app.examples.authentication").controller("LockController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i) {
        function l() {
            n.show(n.simple().content(a("triTranslate")("Your new password has been mailed")).position("bottom right").action(a("triTranslate")("Login")).highlightAction(!0).hideDelay(0)).then(function () {
                t.go("authentication.login")
            })
        }

        var r = this;
        r.triSettings = i, r.user = {email: ""}, r.resetClick = l
    }

    e.$inject = ["$scope", "$state", "$mdToast", "$filter", "$http", "triSettings"], angular.module("app.examples.authentication").controller("ForgotController", e)
}(), function () {
    "use strict";
    angular.module("triangular.themes", [])
}(), function () {
    "use strict";
    function e(e) {
        var n = {};
        return {
            theme: function (e) {
                if (angular.isDefined(n[e]))return n[e];
                var a = new t(e);
                return n[e] = a, n[e]
            }, $get: function () {
                return {
                    getTheme: function (e) {
                        return n[e]
                    }, getThemeHue: function (t, n, a) {
                        if (angular.isDefined(e._THEMES[t]) && angular.isDefined(e._THEMES[t].colors[n])) {
                            var o = e._THEMES[t].colors[n];
                            if (angular.isDefined(e._PALETTES[o.name]) && angular.isDefined(e._PALETTES[o.name][o.hues[a]]))return e._PALETTES[o.name][o.hues[a]]
                        }
                    }, getPalette: function (t) {
                        return e._PALETTES[t]
                    }, getPaletteColor: function (t, n) {
                        if (angular.isDefined(e._PALETTES[t]) && angular.isDefined(e._PALETTES[t][n]))return e._PALETTES[t][n]
                    }, rgba: e._rgba, palettes: e._PALETTES, themes: e._THEMES, parseRules: e._parseRules
                }
            }
        }
    }

    function t(e) {
        var t = ["primary", "accent", "warn", "background"], n = this;
        n.name = e, n.colors = {}, n.isDark = !1, t.forEach(function (e) {
            n[e + "Palette"] = function (t, a) {
                return n.colors[e] = {name: t, hues: {}}, angular.isDefined(a) && (n.colors[e].hues = a), n
            }
        }), n.dark = function (e) {
            n.isDark = !!angular.isUndefined(e) || e
        }
    }

    e.$inject = ["$mdThemingProvider"], angular.module("triangular.themes").provider("triTheming", e)
}(), function () {
    "use strict";
    function e(e, n) {
        var a = {}, o = null, i = !1;
        return {
            skin: function (o, i) {
                if (angular.isDefined(a[o]))return a[o];
                var l = new t(o, i, e, n);
                return a[o] = l, a[o]
            }, setSkin: function (e) {
                if (!angular.isUndefined(a[e])) {
                    if (o = a[e], i) {
                        var t;
                        angular.injector(["ngCookies"]).invoke(["$cookies", function (e) {
                            t = e
                        }]);
                        var n = t.get("triangular-skin");
                        if (angular.isDefined(n)) {
                            var l = angular.fromJson(n);
                            o = angular.isDefined(a[l.skin]) ? a[l.skin] : a[0]
                        }
                    }
                    return o.loadThemes(), o
                }
            }, useSkinCookie: function (e) {
                i = e
            }, $get: function () {
                return {
                    getCurrent: function () {
                        return o
                    }, getSkins: function () {
                        return a
                    }
                }
            }
        }
    }

    function t(e, t, n, a) {
        var o = ["sidebar", "logo", "toolbar", "content"], i = this;
        i.id = e, i.name = t, i.elements = {}, o.forEach(function (e) {
            i[e + "Theme"] = function (t) {
                return i.elements[e] = t, i
            }
        }), i.loadThemes = function () {
            for (var e in i.elements) {
                var t = a.theme(i.elements[e]);
                n.theme(t.name).primaryPalette(t.colors.primary.name, t.colors.primary.hues).accentPalette(t.colors.accent.name, t.colors.accent.hues).warnPalette(t.colors.warn.name, t.colors.warn.hues).dark(t.isDark), angular.isDefined(t.colors.background) && n.theme(t.name).backgroundPalette(t.colors.background.name, t.colors.background.hues)
            }
            n.setDefaultTheme(i.elements.content)
        }
    }

    function n(e, t) {
        e.triSkin = t.getCurrent()
    }

    e.$inject = ["$mdThemingProvider", "triThemingProvider"], t.$inject = ["id", "name", "$mdThemingProvider", "triThemingProvider"], n.$inject = ["$rootScope", "triSkins"], angular.module("triangular.themes").provider("triSkins", e).run(n)
}(), function () {
    "use strict";
    angular.module("triangular", ["ngMaterial", "triangular.layouts", "triangular.components", "triangular.themes", "triangular.directives", "triangular.router", "ui.router"])
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            o(function () {
                var e = l.title;
                angular.forEach(d.crumbs, function (t) {
                    var n = t.name;
                    i.has("translateFilter") && (n = a("translate")(t.name)), e += " " + l.separator + " " + n
                }), t.document.title = e
            })
        }

        var d = r.breadcrumbs, m = e.$on("changeTitle", function () {
            s()
        });
        e.$on("$destroy", function () {
            m()
        })
    }

    e.$inject = ["$rootScope", "$window", "$state", "$filter", "$timeout", "$injector", "triRoute", "triBreadcrumbsService"], angular.module("triangular").run(e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            a.docTitle = e
        }

        function t(e) {
            a.separator = e
        }

        function n() {
            return {title: a.docTitle, separator: a.separator}
        }

        var a = {docTitle: "", separator: ""};
        this.setTitle = e, this.setSeparator = t, this.$get = n
    }

    angular.module("triangular").provider("triRoute", e)
}(), function () {
    "use strict";
    angular.module("triangular.router", [])
}(), function () {
    "use strict";
    angular.module("triangular.profiler", ["digestHud"])
}(), function () {
    "use strict";
    function e(e) {
        e.enable(), e.setHudPosition("top right"), e.numTopWatches = 20, e.numDigestStats = 25
    }

    e.$inject = ["digestHudProvider"], angular.module("triangular.profiler").config(e)
}(), function () {
    "use strict";
    function e() {
        function e(e) {
            return n[e]
        }

        function t(e, t) {
            n[e] = t
        }

        var n = {
            toolbarSize: "default",
            toolbarShrink: !0,
            toolbarClass: "",
            contentClass: "",
            innerContentClass: "",
            sideMenuSize: "full",
            showToolbar: !0,
            footer: !0,
            contentTemplateUrl: "app/triangular/layouts/default/default-content.tmpl.html",
            sidebarLeftTemplateUrl: "app/layouts/leftsidenav/leftsidenav.tmpl.html",
            sidebarLeftController: "MenuController",
            sidebarRightTemplateUrl: "app/triangular/components/notifications-panel/notifications-panel.tmpl.html",
            sidebarRightController: "NotificationsPanelController",
            toolbarTemplateUrl: "app/triangular/components/toolbars/toolbar.tmpl.html",
            toolbarController: "DefaultToolbarController",
            footerTemplateUrl: "app/triangular/components/footer/footer.tmpl.html"
        }, a = ["toolbarSize", "toolbarShrink", "toolbarClass", "contentClass", "innerContentClass", "sideMenuSize", "showToolbar", "footer", "contentTemplateUrl", "sidebarLeftTemplateUrl", "sidebarLeftController", "sidebarRightTemplateUrl", "sidebarRightController", "toolbarTemplateUrl", "toolbarController", "footerTemplateUrl", "loaderTemplateUrl", "loaderController"], o = {};
        this.getDefaultOption = e, this.setDefaultOption = t, angular.extend(o, n), this.$get = function () {
            function e(e, t) {
                o[e] = t
            }

            function t(e, t) {
                angular.forEach(a, function (e) {
                    o[e] = n[e]
                });
                var i = angular.isDefined(t.data) && angular.isDefined(t.data.layout) ? t.data.layout : {};
                angular.extend(o, o, i)
            }

            return {layout: o, setOption: e, updateLayoutFromState: t}
        }
    }

    function t(e, t) {
        function n() {
            a()
        }

        var a = e.$on("$stateChangeStart", t.updateLayoutFromState);
        e.$on("$destroy", n)
    }

    t.$inject = ["$rootScope", "triLayout"], angular.module("triangular").run(t).provider("triLayout", e)
}(), function () {
    "use strict";
    angular.module("triangular.directives", [])
}(), function () {
    "use strict";
    function e(e, t) {
        function n(n, a, o) {
            e(a);
            var i = a.controller("mdTheme");
            if (angular.isDefined(i)) {
                var l = o.themeBackground, r = "default";
                if (l.indexOf(":") !== -1) {
                    var s = o.themeBackground.split(":");
                    l = s[0], r = s[1]
                }
                var d = t.getThemeHue(i.$mdTheme, l, r);
                angular.isDefined(d) && a.css({
                    "background-color": t.rgba(d.value),
                    "border-color": t.rgba(d.value),
                    color: t.rgba(d.contrast)
                })
            }
        }

        var a = {link: n, restrict: "A"};
        return a
    }

    e.$inject = ["$mdTheming", "triTheming"], angular.module("triangular.directives").directive("themeBackground", e)
}(), function () {
    "use strict";
    function e() {
        function e(e, t, n, a) {
            a.$viewChangeListeners.push(function () {
                a.$setValidity("samePassword", e.triSamePassword.$modelValue === a.$modelValue), e.triSamePassword.$setValidity("samePassword", e.triSamePassword.$modelValue === a.$modelValue)
            })
        }

        var t = {restrict: "A", require: "ngModel", link: e, scope: {triSamePassword: "="}};
        return t
    }

    angular.module("triangular.directives").directive("triSamePassword", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n, a) {
            var o = a.paletteBackground.split(":"), i = e.getPaletteColor(o[0], o[1]);
            angular.isDefined(i) && n.css({
                "background-color": e.rgba(i.value),
                "border-color": e.rgba(i.value),
                color: e.rgba(i.contrast)
            })
        }

        var n = {link: t, restrict: "A"};
        return n
    }

    e.$inject = ["triTheming"], angular.module("triangular.directives").directive("paletteBackground", e)
}(), function () {
    "use strict";
    function e(e) {
        function t(t, n, a) {
            var o, i = {useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", prefix: "", suffix: ""};
            if (t.options)for (var l in i)angular.isDefined(t.options[l]) && (i[l] = t.options[l]);
            a.from = angular.isUndefined(a.from) ? 0 : parseInt(a.from), a.decimals = angular.isUndefined(a.decimals) ? 2 : parseFloat(a.decimals), a.duration = angular.isUndefined(a.duration) ? 5 : parseFloat(a.duration), e(function () {
                o = new CountUp(n[0], a.from, t.countupto, a.decimals, a.duration, i), o.start(), t.$watch("countupto", function (e, t) {
                    angular.isDefined(e) && e != t && o.update(e)
                })
            }, 500)
        }

        var n = {link: t, restrict: "A", scope: {countupto: "=", options: "="}};
        return n
    }

    e.$inject = ["$timeout"], angular.module("triangular.directives").directive("countupto", e)
}(), function () {
    "use strict";
    angular.module("app.permission", ["permission", "permission.ui"])
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            var e = i.getCurrentUser();
            angular.forEach(l.data, function (t) {
                t.username === e.username && d(t)
            })
        }

        function s() {
            n.put("tri-user", m.selectedUser.username), t.location.reload()
        }

        function d(e) {
            m.selectedUser = e, m.roleList = [], m.permissionList = [], angular.forEach(m.allRoles, function (e) {
                -1 !== m.selectedUser.roles.indexOf(e.roleName) && (m.roleList.push(e), angular.forEach(e.validationFunction, function (e) {
                    m.permissionList.push(e)
                }))
            })
        }

        var m = this;
        m.userList = l.data, m.roleList = [], m.permissionList = [], m.allRoles = a.getStore(), m.allPermissions = o.getStore(), m.loginClick = s, m.selectUser = d, r()
    }

    e.$inject = ["$state", "$window", "$cookies", "RoleStore", "PermissionStore", "UserService", "users"], angular.module("app.permission").controller("PermissionController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s, d, m, c, u, p, g) {
        function b(e) {
            r.debounce(function () {
                s(e).toggle()
            }, 300)()
        }

        function h(e) {
            if (t.has("$translate")) {
                var a = t.get("$translate");
                a.use(e).then(function () {
                    d.show(d.simple().content(l("triTranslate")("Language Changed")).position("bottom right").hideDelay(500)), n.$emit("changeTitle")
                })
            }
        }

        function v() {
            switch (g.layout.sideMenuSize) {
                case"hidden":
                    return !1;
                case"off":
                    return !0;
                default:
                    return a("gt-sm")
            }
        }

        function f(e) {
            n.$broadcast("triSwitchNotificationTab", e), w.openSideNav("notifications")
        }

        function y() {
            w.isFullScreen = !w.isFullScreen, w.fullScreenIcon = w.isFullScreen ? "zmdi zmdi-fullscreen-exit" : "zmdi zmdi-fullscreen";
            var e = c[0];
            e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement ? e.exitFullscreen ? e.exitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen && e.webkitExitFullscreen() : e.documentElement.requestFullscreen ? e.documentElement.requestFullscreen() : e.documentElement.msRequestFullscreen ? e.documentElement.msRequestFullscreen() : e.documentElement.mozRequestFullScreen ? e.documentElement.mozRequestFullScreen() : e.documentElement.webkitRequestFullscreen && e.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }

        var w = this;
        if (w.breadcrumbs = u.breadcrumbs, w.emailNew = !1, w.languages = p.languages, w.openSideNav = b, w.hideMenuButton = v, w.switchLanguage = h, w.toggleNotificationsTab = f, w.isFullScreen = !1, w.fullScreenIcon = "zmdi zmdi-fullscreen", w.toggleFullScreen = y, t.has("UserService")) {
            var x = t.get("UserService");
            w.currentUser = x.getCurrentUser()
        } else w.currentUser = {
            displayName: "Christos",
            username: "christos",
            avatar: "assets/images/avatars/avatar-5.png",
            roles: []
        };
        e.$on("newMailNotification", function () {
            w.emailNew = !0
        })
    }

    e.$inject = ["$scope", "$injector", "$rootScope", "$mdMedia", "$state", "$element", "$filter", "$mdUtil", "$mdSidenav", "$mdToast", "$timeout", "$document", "triBreadcrumbsService", "triSettings", "triLayout"], angular.module("triangular.components").controller("ToolbarController", e)
}(), function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            a.go("triangular-no-scroll.email.inbox"), r.close()
        }

        function l() {
            n("notifications").close()
        }

        var r = this;
        r.close = l, r.currentTab = 0, r.notificationGroups = [{
            name: "Server",
            notifications: [{
                title: "Server Down",
                icon: "zmdi zmdi-alert-circle",
                iconColor: "rgb(244, 67, 54)",
                date: moment().startOf("hour")
            }, {
                title: "Slow Response Time",
                icon: "zmdi zmdi-alert-triangle",
                iconColor: "rgb(255, 152, 0)",
                date: moment().startOf("hour")
            }, {
                title: "Server Down",
                icon: "zmdi zmdi-alert-circle",
                iconColor: "rgb(244, 67, 54)",
                date: moment().startOf("hour")
            }]
        }], r.openMail = i, r.settingsGroups = [{
            name: "Account Settings",
            settings: [{title: "Show my location", icon: "zmdi zmdi-pin", enabled: !0}, {
                title: "Show my avatar",
                icon: "zmdi zmdi-face",
                enabled: !1
            }, {title: "Send me notifications", icon: "zmdi zmdi-notifications-active", enabled: !0}]
        }, {
            name: "Chat Settings",
            settings: [{
                title: "Show my username",
                icon: "zmdi zmdi-account",
                enabled: !0
            }, {
                title: "Make my profile public",
                icon: "zmdi zmdi-account-box",
                enabled: !1
            }, {title: "Allow cloud backups", icon: "zmdi zmdi-cloud-upload", enabled: !0}]
        }], r.statisticsGroups = [{
            name: "User Statistics",
            stats: [{
                title: "Storage Space (120/160 Gb)",
                mdClass: "md-primary",
                value: 60
            }, {title: "Bandwidth Usage (10/100 Gb)", mdClass: "md-accent", value: 10}, {
                title: "Memory Usage (1/8 Gb)",
                mdClass: "md-warn",
                value: 100
            }]
        }, {
            name: "Server Statistics",
            stats: [{
                title: "Storage Space (120/160 Gb)",
                mdClass: "md-primary",
                value: 60
            }, {title: "Bandwidth Usage (10/100 Gb)", mdClass: "md-accent", value: 10}, {
                title: "Memory Usage (1/8 Gb)",
                mdClass: "md-warn",
                value: 100
            }]
        }], e.$on("triSwitchNotificationTab", function (e, t) {
            r.currentTab = t
        }), t({method: "GET", url: o.url + "email/inbox"}).success(function (e) {
            r.emails = e.slice(1, 20)
        })
    }

    e.$inject = ["$scope", "$http", "$mdSidenav", "$state", "API_CONFIG"],
        angular.module("triangular.components").controller("RightSidenavController", e)
}(), function () {
    "use strict";
    angular.module("app", ["ui.router", "triangular", "ngAnimate", "ngCookies", "ngSanitize", "ngMessages", "ngMaterial", "googlechart", "chart.js", "linkify", "ui.calendar", "angularMoment", "textAngular", "uiGmapgoogle-maps", "hljs", "md.data.table", angularDragula(angular), "ngFileUpload", "app.translate", "app.dashboards", "app.permission", "app.config", "app.inventory", "app.inv", "app.purchase"]).constant("API_CONFIG", {url: ""})
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        t.triSettings = e
    }

    e.$inject = ["triSettings"], angular.module("app").controller("LoaderController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n() {
            var e = "icon" === a.layout.sideMenuSize ? "full" : "icon";
            t.setOption("sideMenuSize", e)
        }

        var a = this;
        a.layout = t.layout, a.sidebarInfo = {appName: e.name, appLogo: e.logo}, a.toggleIconMenu = n
    }

    e.$inject = ["triSettings", "triLayout"], angular.module("triangular.components").controller("LeftSidenavController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        var n = this;
        n.layout = e, n.settings = t
    }

    e.$inject = ["triLayout", "triSettings"], angular.module("app").controller("AppFooterController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.menu-levels", {
            url: "/menu-levels/:level",
            controller: "LevelController",
            controllerAs: "vm",
            templateUrl: "app/examples/menu/level.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.menu-dynamic", {
            url: "/menu/dynamic",
            controller: "MenuDynamicController",
            controllerAs: "vm",
            templateUrl: "app/examples/menu/dynamic.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.menu-dynamic-dummy-page", {
            url: "/menu/dynamic-page",
            templateUrl: "app/examples/menu/dynamic-page.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }), t.addMenu({
            name: "Menu",
            icon: "zmdi zmdi-receipt",
            type: "dropdown",
            priority: 6.1,
            children: [{name: "Dynamic Menu", type: "link", state: "triangular.menu-dynamic"}, {
                name: "On Click Menu",
                type: "link",
                click: ["$mdDialog", function (e) {
                    e.show(e.alert().clickOutsideToClose(!0).title("Menu Item Clicked").htmlContent("You can now set menu item click events when you configure your menu as well as routes!.  See <code>app/examples/menu/menu.config.js</code> to learn how.").ok("Got it Thanks."))
                }]
            }, {
                name: "Open in new tab",
                type: "link",
                state: "triangular.dashboard-general",
                openInNewTab: !0
            }, {
                name: "Unlimited Levels",
                type: "dropdown",
                children: [{
                    name: "Level 2-1",
                    type: "dropdown",
                    children: [{
                        name: "Level 3-1",
                        type: "dropdown",
                        children: [{
                            name: "Level 4-1",
                            type: "link",
                            state: "triangular.menu-levels",
                            params: {level: "Item1-1-1-1"}
                        }, {
                            name: "Level 4-2",
                            type: "link",
                            state: "triangular.menu-levels",
                            params: {level: "Item1-1-1-2"}
                        }, {
                            name: "Level 4-3",
                            type: "link",
                            state: "triangular.menu-levels",
                            params: {level: "Item1-1-1-3"}
                        }]
                    }]
                }]
            }]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.menu").config(e)
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.level = e.level
    }

    e.$inject = ["$stateParams"], angular.module("app.examples.menu").controller("LevelController", e)
}(),function () {
    "use strict";
    function e() {
        return {dynamicMenu: {showDynamicMenu: !1}}
    }

    angular.module("app.examples.menu").factory("dynamicMenuService", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(n, a, o) {
            function i() {
                e.$broadcast("webfontLoader.loaded")
            }

            function l() {
                e.$broadcast("webfontLoader.error")
            }

            t.WebFont.load({google: {families: [o.webfontLoader]}, active: i, inactive: l})
        }

        var a = {link: n};
        return a
    }

    e.$inject = ["$rootScope", "$window"], angular.module("webfont-loader", []).directive("webfontLoader", e)
}(),function () {
    "use strict";
    angular.module("app.examples.ui", ["ngCookies", "webfont-loader"]).constant("UI_FONTS", [{
        name: "Roboto Draft",
        family: "RobotoDraft",
        google: "RobotoDraft:300,400,500,700,400italic"
    }, {name: "Noto Sans", family: "Noto Sans", google: "Noto+Sans:400,700,400italic"}, {
        name: "Open Sans",
        family: "Open Sans",
        google: "Open+Sans:300,400,500,700,400italic"
    }, {name: "Lato", family: "Lato", google: "Lato:300,400,500,700,400italic"}, {
        name: "Ubuntu",
        family: "Ubuntu",
        google: "Ubuntu:300,400,500,700,400italic"
    }, {name: "Source Sans Pro", family: "Source Sans Pro", google: "Source+Sans+Pro:300,400,500,700,400italic"}])
}(),function () {
    "use strict";
    function e(e, t) {
        function n(n, a) {
            e.show({
                title: "",
                template: '<md-dialog>  <md-toolbar>    <h2 class="md-toolbar-tools">Here\'s the code for that icon</h2>  </md-toolbar>  <md-dialog-content>    <div hljs language="html"><md-icon md-font-icon="' + a.className + '"></md-icon></div>  </md-dialog-content>  <md-dialog-actions>    <md-button ng-click="vm.closeDialog()" class="md-primary">      Close    </md-button>  </md-dialog-actions></md-dialog>',
                targetEvent: n,
                parent: angular.element(t.body),
                controller: "IconDialogController",
                controllerAs: "vm"
            })
        }

        var a = this;
        a.icons = [{
            className: "wi wi-day-cloudy-gusts",
            name: "Day Cloudy Gusts"
        }, {className: "wi wi-day-cloudy-windy", name: "Day Cloudy Windy"}, {
            className: "wi wi-day-cloudy",
            name: "Day Cloudy"
        }, {className: "wi wi-day-fog", name: "Day Fog"}, {
            className: "wi wi-day-hail",
            name: "Day Hail"
        }, {className: "wi wi-day-lightning", name: "Day Lightning"}, {
            className: "wi wi-day-rain-mix",
            name: "Day Rain Mix"
        }, {className: "wi wi-day-rain-wind", name: "Day Rain Wind"}, {
            className: "wi wi-day-rain",
            name: "Day Rain"
        }, {className: "wi wi-day-showers", name: "Day Showers"}, {
            className: "wi wi-day-snow",
            name: "Day Snow"
        }, {className: "wi wi-day-sprinkle", name: "Day Sprinkle"}, {
            className: "wi wi-day-sunny-overcast",
            name: "Day Sunny Overcast"
        }, {className: "wi wi-day-sunny", name: "Day Sunny"}, {
            className: "wi wi-day-storm-showers",
            name: "Day Storm Showers"
        }, {className: "wi wi-day-thunderstorm", name: "Day Thunderstorm"}, {
            className: "wi wi-cloudy-gusts",
            name: "Cloudy Gusts"
        }, {className: "wi wi-cloudy-windy", name: "Cloudy Windy"}, {
            className: "wi wi-cloudy",
            name: "Cloudy"
        }, {className: "wi wi-fog", name: "Fog"}, {
            className: "wi wi-hail",
            name: "Hail"
        }, {className: "wi wi-lightning", name: "Lightning"}, {
            className: "wi wi-rain-mix",
            name: "Rain Mix"
        }, {className: "wi wi-rain-wind", name: "Rain Wind"}, {
            className: "wi wi-rain",
            name: "Rain"
        }, {className: "wi wi-showers", name: "Showers"}, {
            className: "wi wi-snow",
            name: "Snow"
        }, {className: "wi wi-sprinkle", name: "Sprinkle"}, {
            className: "wi wi-storm-showers",
            name: "Storm Showers"
        }, {className: "wi wi-thunderstorm", name: "Thunderstorm"}, {
            className: "wi wi-windy",
            name: "Windy"
        }, {
            className: "wi wi-night-alt-cloudy-gusts",
            name: "Night Alt Cloudy Gusts"
        }, {
            className: "wi wi-night-alt-cloudy-windy",
            name: "Night Alt Cloudy Windy"
        }, {className: "wi wi-night-alt-hail", name: "Night Alt Hail"}, {
            className: "wi wi-night-alt-lightning",
            name: "Night Alt Lightning"
        }, {className: "wi wi-night-alt-rain-mix", name: "Night Alt Rain Mix"}, {
            className: "wi wi-night-alt-rain-wind",
            name: "Night Alt Rain Wind"
        }, {className: "wi wi-night-alt-rain", name: "Night Alt Rain"}, {
            className: "wi wi-night-alt-showers",
            name: "Night Alt Showers"
        }, {className: "wi wi-night-alt-snow", name: "Night Alt Snow"}, {
            className: "wi wi-night-alt-sprinkle",
            name: "Night Alt Sprinkle"
        }, {
            className: "wi wi-night-alt-storm-showers",
            name: "Night Alt Storm Showers"
        }, {className: "wi wi-night-alt-thunderstorm", name: "Night Alt Thunderstorm"}, {
            className: "wi wi-night-clear",
            name: "Night Clear"
        }, {className: "wi wi-night-cloudy-gusts", name: "Night Cloudy Gusts"}, {
            className: "wi wi-night-cloudy-windy",
            name: "Night Cloudy Windy"
        }, {className: "wi wi-night-cloudy", name: "Night Cloudy"}, {
            className: "wi wi-night-hail",
            name: "Night Hail"
        }, {className: "wi wi-night-lightning", name: "Night Lightning"}, {
            className: "wi wi-night-rain-mix",
            name: "Night Rain Mix"
        }, {className: "wi wi-night-rain-wind", name: "Night Rain Wind"}, {
            className: "wi wi-night-rain",
            name: "Night Rain"
        }, {className: "wi wi-night-showers", name: "Night Showers"}, {
            className: "wi wi-night-snow",
            name: "Night Snow"
        }, {className: "wi wi-night-sprinkle", name: "Night Sprinkle"}, {
            className: "wi wi-night-storm-showers",
            name: "Night Storm Showers"
        }, {className: "wi wi-night-thunderstorm", name: "Night Thunderstorm"}, {
            className: "wi wi-celsius",
            name: "Celsius"
        }, {className: "wi wi-cloud-down", name: "Cloud Down"}, {
            className: "wi wi-cloud-refresh",
            name: "Cloud Refresh"
        }, {className: "wi wi-cloud-up", name: "Cloud Up"}, {
            className: "wi wi-cloud",
            name: "Cloud"
        }, {className: "wi wi-degrees", name: "Degrees"}, {
            className: "wi wi-down-left",
            name: "Down Left"
        }, {className: "wi wi-down", name: "Down"}, {
            className: "wi wi-fahrenheit",
            name: "Fahrenheit"
        }, {className: "wi wi-horizon-alt", name: "Horizon Alt"}, {
            className: "wi wi-horizon",
            name: "Horizon"
        }, {className: "wi wi-left", name: "Left"}, {
            className: "wi wi-lightning",
            name: "Lightning"
        }, {className: "wi wi-night-fog", name: "Night Fog"}, {
            className: "wi wi-refresh-alt",
            name: "Refresh Alt"
        }, {className: "wi wi-refresh", name: "Refresh"}, {
            className: "wi wi-right",
            name: "Right"
        }, {className: "wi wi-sprinkles", name: "Sprinkles"}, {
            className: "wi wi-strong-wind",
            name: "Strong Wind"
        }, {className: "wi wi-sunrise", name: "Sunrise"}, {
            className: "wi wi-sunset",
            name: "Sunset"
        }, {
            className: "wi wi-thermometer-exterior",
            name: "Thermometer Exterior"
        }, {className: "wi wi-thermometer-internal", name: "Thermometer Internal"}, {
            className: "wi wi-thermometer",
            name: "Thermometer"
        }, {className: "wi wi-tornado", name: "Tornado"}, {
            className: "wi wi-up-right",
            name: "Up Right"
        }, {className: "wi wi-up", name: "Up"}, {
            className: "wi wi-wind-west",
            name: "Wind West"
        }, {className: "wi wi-wind-south-west", name: "Wind South West"}, {
            className: "wi wi-wind-south-east",
            name: "Wind South East"
        }, {className: "wi wi-wind-south", name: "Wind South"}, {
            className: "wi wi-wind-north-west",
            name: "Wind North West"
        }, {className: "wi wi-wind-north-east", name: "Wind North East"}, {
            className: "wi wi-wind-north",
            name: "Wind North"
        }, {className: "wi wi-wind-east", name: "Wind East"}, {
            className: "wi wi-smoke",
            name: "Smoke"
        }, {className: "wi wi-dust", name: "Dust"}, {
            className: "wi wi-snow-wind",
            name: "Snow Wind"
        }, {className: "wi wi-day-snow-wind", name: "Day Snow Wind"}, {
            className: "wi wi-night-snow-wind",
            name: "Night Snow Wind"
        }, {className: "wi wi-night-alt-snow-wind", name: "Night Alt Snow Wind"}, {
            className: "wi wi-day-sleet-storm",
            name: "Day Sleet Storm"
        }, {className: "wi wi-night-sleet-storm", name: "Night Sleet Storm"}, {
            className: "wi wi-night-alt-sleet-storm",
            name: "Night Alt Sleet Storm"
        }, {
            className: "wi wi-day-snow-thunderstorm",
            name: "Day Snow Thunderstorm"
        }, {
            className: "wi wi-night-snow-thunderstorm",
            name: "Night Snow Thunderstorm"
        }, {
            className: "wi wi-night-alt-snow-thunderstorm",
            name: "Night Alt Snow Thunderstorm"
        }, {className: "wi wi-solar-eclipse", name: "Solar Eclipse"}, {
            className: "wi wi-lunar-eclipse",
            name: "Lunar Eclipse"
        }, {className: "wi wi-meteor", name: "Meteor"}, {
            className: "wi wi-hot",
            name: "Hot"
        }, {className: "wi wi-hurricane", name: "Hurricane"}, {
            className: "wi wi-smog",
            name: "Smog"
        }, {className: "wi wi-alien", name: "Alien"}, {
            className: "wi wi-snowflake-cold",
            name: "Snowflake Cold"
        }, {className: "wi wi-stars", name: "Stars"}, {
            className: "wi wi-night-partly-cloudy",
            name: "Night Partly Cloudy"
        }, {className: "wi wi-umbrella", name: "Umbrella"}, {
            className: "wi wi-day-windy",
            name: "Day Windy"
        }, {className: "wi wi-night-alt-cloudy", name: "Night Alt Cloudy"}, {
            className: "wi wi-up-left",
            name: "Up Left"
        }, {className: "wi wi-down-right", name: "Down Right"}, {
            className: "wi wi-time-12",
            name: "Time 12"
        }, {className: "wi wi-time-1", name: "Time 1"}, {
            className: "wi wi-time-2",
            name: "Time 2"
        }, {className: "wi wi-time-3", name: "Time 3"}, {
            className: "wi wi-time-4",
            name: "Time 4"
        }, {className: "wi wi-time-5", name: "Time 5"}, {
            className: "wi wi-time-6",
            name: "Time 6"
        }, {className: "wi wi-time-7", name: "Time 7"}, {
            className: "wi wi-time-8",
            name: "Time 8"
        }, {className: "wi wi-time-9", name: "Time 9"}, {
            className: "wi wi-time-10",
            name: "Time 10"
        }, {className: "wi wi-time-11", name: "Time 11"}, {
            className: "wi wi-day-sleet",
            name: "Day Sleet"
        }, {className: "wi wi-night-sleet", name: "Night Sleet"}, {
            className: "wi wi-night-alt-sleet",
            name: "Night Alt Sleet"
        }, {className: "wi wi-sleet", name: "Sleet"}, {
            className: "wi wi-day-haze",
            name: "Day Haze"
        }, {className: "wi wi-beafort-0", name: "Beafort 0"}, {
            className: "wi wi-beafort-1",
            name: "Beafort 1"
        }, {className: "wi wi-beafort-2", name: "Beafort 2"}, {
            className: "wi wi-beafort-3",
            name: "Beafort 3"
        }, {className: "wi wi-beafort-4", name: "Beafort 4"}, {
            className: "wi wi-beafort-5",
            name: "Beafort 5"
        }, {className: "wi wi-beafort-6", name: "Beafort 6"}, {
            className: "wi wi-beafort-7",
            name: "Beafort 7"
        }, {className: "wi wi-beafort-8", name: "Beafort 8"}, {
            className: "wi wi-beafort-9",
            name: "Beafort 9"
        }, {className: "wi wi-beafort-10", name: "Beafort 10"}, {
            className: "wi wi-beafort-11",
            name: "Beafort 11"
        }, {className: "wi wi-beafort-12", name: "Beafort 12"}, {
            className: "wi wi-wind-default",
            name: "Wind Default"
        }, {className: "wi wi-moon-new", name: "Moon New"}, {
            className: "wi wi-moon-waxing-cresent-1",
            name: "Moon Waxing Cresent 1"
        }, {
            className: "wi wi-moon-waxing-cresent-2",
            name: "Moon Waxing Cresent 2"
        }, {
            className: "wi wi-moon-waxing-cresent-3",
            name: "Moon Waxing Cresent 3"
        }, {
            className: "wi wi-moon-waxing-cresent-4",
            name: "Moon Waxing Cresent 4"
        }, {
            className: "wi wi-moon-waxing-cresent-5",
            name: "Moon Waxing Cresent 5"
        }, {
            className: "wi wi-moon-waxing-cresent-6",
            name: "Moon Waxing Cresent 6"
        }, {
            className: "wi wi-moon-first-quarter",
            name: "Moon First Quarter"
        }, {
            className: "wi wi-moon-waxing-gibbous-1",
            name: "Moon Waxing Gibbous 1"
        }, {
            className: "wi wi-moon-waxing-gibbous-2",
            name: "Moon Waxing Gibbous 2"
        }, {
            className: "wi wi-moon-waxing-gibbous-3",
            name: "Moon Waxing Gibbous 3"
        }, {
            className: "wi wi-moon-waxing-gibbous-4",
            name: "Moon Waxing Gibbous 4"
        }, {
            className: "wi wi-moon-waxing-gibbous-5",
            name: "Moon Waxing Gibbous 5"
        }, {className: "wi wi-moon-waxing-gibbous-6", name: "Moon Waxing Gibbous 6"}, {
            className: "wi wi-moon-full",
            name: "Moon Full"
        }, {
            className: "wi wi-moon-waning-gibbous-1",
            name: "Moon Waning Gibbous 1"
        }, {
            className: "wi wi-moon-waning-gibbous-2",
            name: "Moon Waning Gibbous 2"
        }, {
            className: "wi wi-moon-waning-gibbous-3",
            name: "Moon Waning Gibbous 3"
        }, {
            className: "wi wi-moon-waning-gibbous-4",
            name: "Moon Waning Gibbous 4"
        }, {
            className: "wi wi-moon-waning-gibbous-5",
            name: "Moon Waning Gibbous 5"
        }, {
            className: "wi wi-moon-waning-gibbous-6",
            name: "Moon Waning Gibbous 6"
        }, {className: "wi wi-moon-3rd-quarter", name: "Moon 3rd Quarter"}, {
            className: "wi wi-moon-waning-crescent-1",
            name: "Moon Waning Crescent 1"
        }, {
            className: "wi wi-moon-waning-crescent-2",
            name: "Moon Waning Crescent 2"
        }, {
            className: "wi wi-moon-waning-crescent-3",
            name: "Moon Waning Crescent 3"
        }, {
            className: "wi wi-moon-waning-crescent-4",
            name: "Moon Waning Crescent 4"
        }, {
            className: "wi wi-moon-waning-crescent-5",
            name: "Moon Waning Crescent 5"
        }, {
            className: "wi wi-moon-waning-crescent-6",
            name: "Moon Waning Crescent 6"
        }], a.iconSource = "Select icon below to see HTML", a.selectIcon = n
    }

    e.$inject = ["$mdDialog", "$document"], angular.module("app.examples.ui").controller("WeatherIconsController", e)
}(),function (e) {
    "use strict";
    function t(t) {
        e.ajax({
            url: "//ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js",
            dataType: "script",
            async: !0,
            success: function () {
                t.init()
            }
        })
    }

    t.$inject = ["TypographySwitcherService"], angular.module("app.examples.ui").run(t)
}(jQuery),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.ui-typography", {
            url: "/ui/typography",
            controller: "TypographyController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/typography.tmpl.html"
        }).state("triangular.ui-colors", {
            url: "/ui/colors",
            controller: "ColorsController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/colors.tmpl.html"
        }).state("triangular.ui-material-icons", {
            url: "/ui/material-icons",
            controller: "MaterialIconsController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/material-icons.tmpl.html",
            resolve: {
                icons: ["$http", "API_CONFIG", function (e, t) {
                    return e({method: "GET", url: t.url + "elements/icons"})
                }]
            }
        }).state("triangular.ui-weather-icons", {
            url: "/ui/weather-icons",
            controller: "WeatherIconsController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/weather-icons.tmpl.html"
        }).state("triangular.ui-fa-icons", {
            url: "/ui/fa-icons",
            controller: "FaIconsController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/fa-icons.tmpl.html",
            resolve: {
                icons: ["$http", "API_CONFIG", function (e, t) {
                    return e({method: "GET", url: t.url + "elements/icons-fa"})
                }]
            }
        }).state("triangular.ui-toolbar", {
            url: "/ui/toolbars/:extraClass/:background/:shrink",
            controller: "ToolbarsUIController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/toolbars.tmpl.html"
        }).state("triangular.ui-skins", {
            url: "/ui/skins",
            controller: "SkinsUIController",
            controllerAs: "vm",
            templateUrl: "app/examples/ui/skins.tmpl.html"
        }), t.addMenu({
            name: "UI",
            icon: "zmdi zmdi-ruler",
            type: "dropdown",
            priority: 3.2,
            children: [{name: "Colors", state: "triangular.ui-colors", type: "link"}, {
                name: "Font Awesome",
                state: "triangular.ui-fa-icons",
                type: "link"
            }, {name: "Material Icons", state: "triangular.ui-material-icons", type: "link"}, {
                name: "Skins",
                state: "triangular.ui-skins",
                type: "link"
            }, {name: "Typography", state: "triangular.ui-typography", type: "link"}, {
                name: "Weather Icons",
                state: "triangular.ui-weather-icons",
                type: "link"
            }]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.ui").config(e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n() {
            e.changeFont(a.currentFont)
        }

        var a = this;
        a.fonts = t, a.changeFont = n, a.currentFont = e.getCurrentFont(), angular.forEach(a.fonts, function (e) {
            a.currentFont.name === e.name && (a.currentFont = e)
        })
    }

    e.$inject = ["TypographySwitcherService", "UI_FONTS"], angular.module("app.examples.ui").controller("TypographyController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a) {
        function o() {
            var e = i();
            "Roboto Draft" !== e.name && l(e)
        }

        function i() {
            var e = t.get("tri-typography-font");
            return angular.isUndefined(e) && t.put("tri-typography-font", angular.toJson(a[0])), angular.fromJson(t.get("tri-typography-font"))
        }

        function l(a) {
            e.WebFont.load({
                google: {families: [a.google]}, active: function () {
                    angular.element("button,select,html,textarea,input").css({"font-family": a.family}), t.put("tri-typography-font", angular.toJson(a))
                }, inactive: function () {
                    n.error("Font " + a.name + " could not be loaded")
                }
            })
        }

        return {changeFont: l, getCurrentFont: i, init: o}
    }

    e.$inject = ["$window", "$cookies", "$log", "UI_FONTS"], angular.module("app.examples.ui").factory("TypographySwitcherService", e)
}(),function () {
    "use strict";
    function e(e, t, n, a) {
        function o() {
            l.selectedSkin !== n.getCurrent() && (e.put("triangular-skin", angular.toJson({skin: l.selectedSkin.id})), t.location.reload())
        }

        function i() {
            for (var e in l.elementColors) {
                var t = a.getTheme(l.selectedSkin.elements[e]), n = angular.isUndefined(t.colors.primary.hues["default"]) ? "500" : t.colors.primary.hues["default"], o = a.getPaletteColor(t.colors.primary.name, n);
                l.elementColors[e] = a.rgba(o.value)
            }
        }

        var l = this;
        l.elementColors = {
            logo: "",
            sidebar: "",
            content: "",
            toolbar: ""
        }, l.skins = n.getSkins(), l.selectedSkin = n.getCurrent(), l.trySkin = o, l.updatePreview = i, i()
    }

    e.$inject = ["$cookies", "$window", "triSkins", "triTheming"], angular.module("app.examples.ui").controller("SkinsUIController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i(n, a) {
            e.show({
                title: "",
                template: '<md-dialog>  <md-toolbar>    <h2 class="md-toolbar-tools">Here\'s the code for that icon</h2>  </md-toolbar>  <md-dialog-content>    <div hljs language="html"><md-icon md-font-icon="' + a + '"></md-icon></div>  </md-dialog-content>  <md-dialog-actions>    <md-button ng-click="vm.closeDialog()" class="md-primary">      Close    </md-button>  </md-dialog-actions></md-dialog>',
                targetEvent: n,
                parent: angular.element(t.body),
                controller: "IconDialogController",
                controllerAs: "vm"
            })
        }

        var l = this;
        l.groups = [], l.icons = [], l.iconSource = "Select icon below to see HTML", l.selectIcon = i, l.icons = o.data
    }

    e.$inject = ["$mdDialog", "$document", "$compile", "$scope", "icons"], angular.module("app.examples.ui").controller("MaterialIconsController", e)
}(),function () {
    "use strict";
    function e(e) {
        function t() {
            e.hide()
        }

        var n = this;
        n.closeDialog = t
    }

    e.$inject = ["$mdDialog"], angular.module("app.examples.ui").controller("IconDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            var e = [];
            for (var t in o.data)e.push({className: t, name: o.data[t]});
            return e
        }

        function l(n, a) {
            e.show({
                title: "",
                template: '<md-dialog>  <md-toolbar>    <h2 class="md-toolbar-tools">Here\'s the code for that icon</h2>  </md-toolbar>  <md-dialog-content>    <div hljs language="html"><md-icon md-font-icon="' + a.className + '"></md-icon></div>  </md-dialog-content>  <md-dialog-actions>    <md-button ng-click="vm.closeDialog()" class="md-primary">      Close    </md-button>  </md-dialog-actions></md-dialog>',
                targetEvent: n,
                parent: angular.element(t.body),
                controller: "IconDialogController",
                controllerAs: "vm"
            })
        }

        var r = this;
        r.icons = i(), r.iconSource = "Select icon below to see HTML", r.selectIcon = l
    }

    e.$inject = ["$mdDialog", "$document", "$scope", "$compile", "icons"], angular.module("app.examples.ui").controller("FaIconsController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(e) {
            var n = t.rgba(e);
            return {"background-color": n}
        }

        function a(t, n, a) {
            function i() {
                o.alert = "You cancelled the dialog."
            }

            e.show({
                controller: "ColorDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/ui/color-dialog.tmpl.html",
                targetEvent: t,
                locals: {name: n, palette: a},
                clickOutsideToClose: !0
            }).then(function (e) {
                o.alert = 'You said the information was "' + e + '".'
            }, i)
        }

        var o = this;
        o.colourRGBA = n, o.palettes = t.palettes, o.selectPalette = a
    }

    e.$inject = ["$mdDialog", "triTheming"], angular.module("app.examples.ui").controller("ColorsController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a) {
        function o(e) {
            return {"background-color": a.rgba(e.value), color: a.rgba(e.contrast)}
        }

        var i = this;
        i.itemStyle = o, i.name = t, i.palette = [];
        for (var l in n)i.palette.push({code: l, palette: n[l]})
    }

    e.$inject = ["$scope", "name", "palette", "triTheming"], angular.module("app.examples.ui").controller("ColorDialogController", e)
}(),function () {
    "use strict";
    angular.module("app.examples.todo", [])
}(),function () {
    "use strict";
    function e(e) {
        e.updateMenuBadge()
    }

    e.$inject = ["TodoService"], angular.module("app.examples.todo").run(e)
}(),function () {
    "use strict";
    function e(e) {
        function t(e) {
            l.push(e), i()
        }

        function n() {
            return l
        }

        function a(e) {
            for (var t = l.length - 1; t >= 0; t--)l[t] === e && l.splice(t, 1);
            i()
        }

        function o() {
            for (var e = 0, t = l.length - 1; t >= 0; t--)l[t].selected === !1 && e++;
            return e
        }

        function i() {
            r.badge = o()
        }

        var l = [{
            description: "Material Design",
            priority: "high",
            selected: !0
        }, {description: "Install espresso machine", priority: "high", selected: !1}, {
            description: "Deploy to Server",
            priority: "medium",
            selected: !0
        }, {description: "Cloud Sync", priority: "medium", selected: !1}, {
            description: "Test Configurations",
            priority: "low",
            selected: !1
        }, {description: "Validate markup", priority: "low", selected: !1}, {
            description: "Debug javascript",
            priority: "low",
            selected: !0
        }, {description: "Arrange meeting", priority: "low", selected: !0}], r = e.getMenu("todo"), s = {
            addTodo: t,
            getTodos: n,
            removeTodo: a,
            todoCount: o,
            updateMenuBadge: i
        };
        return s
    }

    e.$inject = ["triMenu"], angular.module("app.examples.todo").factory("TodoService", e)
}(),function () {
    "use strict";
    function e(e, t, n, a) {
        function o() {
            s.todos = a.getTodos(), a.updateMenuBadge()
        }

        function i(e) {
            switch (e.priority) {
                case"high":
                    return 1;
                case"medium":
                    return 2;
                case"low":
                    return 3;
                default:
                    return 4
            }
        }

        function l(e) {
            a.removeTodo(e)
        }

        function r() {
            a.updateMenuBadge()
        }

        var s = this;
        s.orderTodos = i, s.removeTodo = l, s.todoSelected = r, o(), e.$on("addTodo", function (e) {
            n.show({
                templateUrl: "app/examples/todo/add-todo-dialog.tmpl.html",
                targetEvent: e,
                controller: "DialogController",
                controllerAs: "vm"
            }).then(function (e) {
                a.addTodo(e)
            })
        })
    }

    e.$inject = ["$scope", "$state", "$mdDialog", "TodoService"], angular.module("app.examples.todo").controller("TodoController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.todo", {
            url: "/todo",
            views: {
                "": {
                    templateUrl: "app/examples/todo/todo.tmpl.html",
                    controller: "TodoController",
                    controllerAs: "vm"
                },
                belowContent: {
                    templateUrl: "app/examples/todo/fab-button.tmpl.html",
                    controller: "TodoFabController",
                    controllerAs: "vm"
                }
            },
            data: {
                layout: {
                    contentClass: "layout-column full-image-background mb-bg-fb-08 background-overlay-static",
                    innerContentClass: "overlay-gradient-20"
                }, permissions: {only: ["viewTodo"]}
            }
        }), t.addMenu({
            id: "todo",
            name: "To do",
            icon: "zmdi zmdi-check",
            state: "triangular.todo",
            type: "link",
            permission: "viewTodo",
            badge: "",
            priority: 2.4
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.todo").config(e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t) {
            e.$broadcast("addTodo", t)
        }

        var n = this;
        n.addTodo = t
    }

    e.$inject = ["$rootScope"], angular.module("app.examples.todo").controller("TodoFabController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n() {
            t.hide(o.item)
        }

        function a() {
            t.cancel()
        }

        var o = this;
        o.cancel = a, o.hide = n, o.item = {description: "", priority: "", selected: !1}
    }

    e.$inject = ["$state", "$mdDialog"], angular.module("app.examples.todo").controller("DialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        e.state("triangular.maps-fullwidth", {
            url: "/maps/fullwidth",
            templateUrl: "app/examples/maps/maps-fullwidth.tmpl.html",
            controller: "MapController",
            controllerAs: "vm",
            data: {permissions: {only: ["viewMaps"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.maps-demos", {
            url: "/maps/demos",
            templateUrl: "app/examples/maps/maps-demo.tmpl.html",
            data: {permissions: {only: ["viewMaps"]}}
        }), t.configure({v: "3.17", libraries: "weather,geometry,visualization"}), n.addMenu({
            name: "Maps",
            icon: "zmdi zmdi-pin",
            type: "dropdown",
            priority: 7.1,
            permission: "viewMaps",
            children: [{name: "Fullwidth", state: "triangular.maps-fullwidth", type: "link"}, {
                name: "Demos",
                state: "triangular.maps-demos",
                type: "link"
            }]
        })
    }

    e.$inject = ["$stateProvider", "uiGmapGoogleMapApiProvider", "triMenuProvider"], angular.module("app.examples.maps").config(e)
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        e.then(function (e) {
            t.map = {
                center: {latitude: 35.027469, longitude: -111.022753},
                zoom: 4,
                marker: {
                    id: 0,
                    coords: {latitude: 35.027469, longitude: -111.022753},
                    options: {
                        icon: {
                            anchor: new e.Point(36, 36),
                            origin: new e.Point(0, 0),
                            url: "assets/images/maps/blue_marker.png"
                        }
                    }
                }
            }
        })
    }

    e.$inject = ["uiGmapGoogleMapApi"], angular.module("app.examples.maps").controller("MapController", e)
}(),function () {
    "use strict";
    angular.module("app.examples.layouts", [])
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.standard-page", {
            url: "/layouts/standard-page",
            templateUrl: "app/examples/layouts/standard-page.tmpl.html",
            data: {layout: {contentClass: "layout-column"}, permissions: {only: ["viewLayouts"]}}
        }).state("triangular.no-scroll-page", {
            url: "/layouts/no-scroll-page",
            templateUrl: "app/examples/layouts/no-scroll-page.tmpl.html",
            data: {layout: {contentClass: "triangular-non-scrolling"}, permissions: {only: ["viewLayouts"]}}
        }).state("triangular.layouts-composer", {
            url: "/layouts/composer",
            templateUrl: "app/examples/layouts/composer.tmpl.html",
            controller: "LayoutsComposerController",
            controllerAs: "vm",
            data: {permissions: {only: ["viewLayouts"]}}
        }).state("triangular.layouts-example-full-width", {
            url: "/layouts/full-width",
            templateUrl: "app/examples/dashboards/general/dashboard-general.tmpl.html",
            data: {layout: {sideMenuSize: "hidden"}, permissions: {only: ["viewLayouts"]}}
        }).state("triangular.layouts-example-tall-toolbar", {
            url: "/layouts/tall-toolbar",
            templateUrl: "app/examples/dashboards/server/dashboard-server.tmpl.html",
            controller: "DashboardServerController",
            controllerAs: "vm",
            data: {layout: {toolbarSize: "md-tall", toolbarClass: "md-warn"}, permissions: {only: ["viewLayouts"]}}
        }).state("triangular.layouts-example-icon-menu", {
            url: "/layouts/icon-menu",
            templateUrl: "app/examples/dashboards/general/dashboard-general.tmpl.html",
            data: {layout: {sideMenuSize: "icon"}, permissions: {only: ["viewLayouts"]}}
        }), t.addMenu({
            name: "Layouts",
            icon: "zmdi zmdi-view-module",
            type: "dropdown",
            priority: 2.4,
            permission: "viewLayouts",
            children: [{
                name: "Standard Page",
                type: "link",
                state: "triangular.standard-page"
            }, {
                name: "Non Scrolling Page",
                type: "link",
                state: "triangular.no-scroll-page"
            }, {
                name: "Full Width Layout",
                type: "link",
                state: "triangular.layouts-example-full-width"
            }, {
                name: "Icon Menu",
                type: "link",
                state: "triangular.layouts-example-icon-menu"
            }, {
                name: "Tall Toolbar with background",
                type: "link",
                state: "triangular.layouts-example-tall-toolbar"
            }, {name: "Composer", type: "link", state: "triangular.layouts-composer"}]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.layouts").config(e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            s.allPagesCode = "triLayoutProvider.setDefaultOption('toolbarSize', '" + s.layout.toolbarSize + "');\ntriLayoutProvider.setDefaultOption('toolbarShrink', " + s.layout.toolbarShrink + ");\ntriLayoutProvider.setDefaultOption('toolbarClass', '" + s.layout.toolbarClass + "');\ntriLayoutProvider.setDefaultOption('contentClass', '" + s.layout.contentClass + "');\ntriLayoutProvider.setDefaultOption('sideMenuSize', '" + s.layout.sideMenuSize + "');\ntriLayoutProvider.setDefaultOption('footer', " + s.layout.footer + ");\n", s.onePageCode = ".state('triangular.my-state', {\n    // set the url of this page\n    url: '/my-route',\n    // set the html template to show on this page\n    templateUrl: 'app/examples/my-module/my-page.tmpl.html',\n    // set the controller to load for this page\n    controller: 'MyController',\n    controllerAs: 'vm'\n    data: {\n        layout: {\n            toolbarSize: '" + s.layout.toolbarSize + "',\n            toolbarShrink: " + s.layout.toolbarShrink + ",\n            toolbarClass: '" + s.layout.toolbarClass + "',\n            contentClass: '" + s.layout.contentClass + "',\n            sideMenuSize: '" + s.layout.sideMenuSize + "',\n            footer: " + s.layout.footer + "\n        }\n    }\n});"
        }

        function l(t) {
            switch (t) {
                case"footer":
                    var a = s.layout.footer ? "block" : "none";
                    n[0].getElementById("footer").style.display = a;
                    break;
                case"toolbarShrink":
                    var o = angular.element("#admin-panel md-content");
                    e.$broadcast("$mdContentLoaded", angular.element(o[0]))
            }
            i()
        }

        function r() {
            s.options.toolbarBackgrounds.none = "No Background ";
            var e, n;
            for (e = 1; e < 40; e++)n = t("padding")(e, 2), s.options.toolbarBackgrounds["full-image-background mb-bg-" + n] = "Background " + e;
            for (e = 1; e < 30; e++)n = t("padding")(e, 2), s.options.toolbarBackgrounds["full-image-background mb-bg-fb-" + n] = "Extra Background " + e
        }

        var s = this;
        s.allPagesCode = "", s.updateOption = l, s.layout = o.layout, s.onePageCode = "", s.options = {
            toolbarSizes: {
                "default": "Default",
                "md-medium-tall": "Medium",
                "md-tall": "Tall"
            }, toolbarBackgrounds: {}, sideMenuSizes: {off: "Off", hidden: "Hidden", icon: "Icons", full: "Full Size"}
        }, r(), i()
    }

    e.$inject = ["$rootScope", "$filter", "$document", "triTheming", "triLayout"], angular.module("app.examples.layouts").controller("LayoutsComposerController", e)
}(),function () {
    "use strict";
    angular.module("app.examples.github", [])
}(),function () {
    "use strict";
    function e(e, t, n) {
        function a() {
            function t(e) {
                n.setLoaderActive(!1), angular.isDefined(e.data.error) && l(e.data.error)
            }

            n.setLoaderActive(!0), e.put(r + "/register-github-access", s.data).then(function () {
                n.setLoaderActive(!1), l("Success!  Check your GitHub email for your invite.")
            }, t)
        }

        function o(t) {
            return e.get("https://api.github.com/search/users?q=" + t + "+type:user+in:login").then(function (e) {
                return e.data.items
            })
        }

        function i() {
            s.data.purchaseCode = "", s.data.githubUser = ""
        }

        function l(e) {
            var n = t.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return t.show(n)
        }

        var r = "http://api.oxygenna.com", s = this;
        s.data = {id: "11711437", purchaseCode: "", githubUser: ""}, s.register = a, s.userSearch = o, i()
    }

    e.$inject = ["$http", "$mdToast", "triLoaderService"], angular.module("app.examples.github").controller("GithubController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.github", {
            url: "/github",
            templateUrl: "app/examples/github/github.tmpl.html",
            controller: "GithubController",
            controllerAs: "vm",
            data: {
                layout: {
                    contentClass: "layout-column full-image-background mb-bg-fb-16 background-overlay-static",
                    innerContentClass: "overlay-gradient-20"
                }, permissions: {only: ["viewGitHub"]}
            }
        }), t.addMenu({
            name: "GitHub",
            state: "triangular.github",
            type: "link",
            icon: "fa fa-github",
            priority: 2.2,
            permission: "viewGitHub"
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.github").config(e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.forms-inputs", {
            url: "/forms/inputs",
            templateUrl: "app/examples/forms/inputs.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.forms-binding", {
            url: "/forms/binding",
            templateUrl: "app/examples/forms/binding.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.forms-autocomplete", {
            url: "/forms/autocomplete", templateUrl: "app/examples/forms/autocomplete.tmpl.html", data: {
                layout: {
                    contentClass: "layout-column"
                }
            }
        }).state("triangular.forms-wizard", {
            url: "/forms/wizard",
            templateUrl: "app/examples/forms/wizard.tmpl.html",
            controller: "FormWizardController",
            controllerAs: "wizardController",
            data: {
                layout: {
                    contentClass: "layout-column full-image-background mb-bg-fb-02 background-overlay-static",
                    innerContentClass: "overlay-gradient-20"
                }
            }
        }).state("triangular.forms-validation", {
            url: "/forms/validation",
            templateUrl: "app/examples/forms/validation.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }), t.addMenu({
            name: "Forms",
            icon: "zmdi zmdi-calendar-check",
            type: "dropdown",
            priority: 3.3,
            children: [{
                name: "Autocomplete",
                type: "link",
                state: "triangular.forms-autocomplete"
            }, {name: "Data Binding", type: "link", state: "triangular.forms-binding"}, {
                name: "Inputs",
                type: "link",
                state: "triangular.forms-inputs"
            }, {name: "Wizard", type: "link", state: "triangular.forms-wizard"}, {
                name: "Validation",
                type: "link",
                state: "triangular.forms-validation"
            }]
        }), t.addMenu({type: "divider", priority: 3.4})
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.forms").config(e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.data = {}
    }

    angular.module("app.examples.forms").controller("FormWizardController", e)
}(),function () {
    "use strict";
    angular.module("app.examples.extras", [])
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.events = [{
            title: "Material Design",
            subtitle: "We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science.",
            date: "27/6/2015",
            image: "assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png",
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg"/>',
            palette: ""
        }, {
            title: "Dorothy Lewis",
            subtitle: "Design Magazine",
            date: "27/6/2015",
            image: "assets/images/avatars/hair-black-eyes-brown-skin-tanned.png",
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">This spec is a living document that will be updated as we continue to develop the tenets and specifics of material design.</p>',
            palette: "cyan:500"
        }, {
            title: "Goals",
            subtitle: "Create a visual language that synthesizes classic principles of good design with the innovation and possibility of technology and science.",
            date: "26/6/2015",
            image: "assets/images/avatars/hair-blonde-eyes-brown-skin-light.png",
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg"/>',
            palette: "cyan:500",
            classes: "widget-overlay-title"
        }, {
            title: "Principles",
            subtitle: "A material metaphor is the unifying theory of a rationalized space and a system of motion. ",
            date: "24/6/2015",
            image: "assets/images/avatars/hair-black-eyes-dark-skin-dark.png",
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg"/>'
        }, {
            title: "Joe Ross",
            subtitle: "CEO Google",
            date: "23/6/2015",
            image: "assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png",
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances.</p> ',
            palette: "purple:500"
        }, {
            title: "Sam Ross",
            subtitle: "CEO Facebook",
            date: "23/6/2015",
            image: "assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png",
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">The color palette starts with primary colors and fills in the spectrum to create a complete and usable palette for Android, Web, and iOS.</p> ',
            palette: "deep-orange:700"
        }, {
            title: "John King",
            subtitle: "Limit your selection of colors by choosing three hues from the primary palette and one accent color from the secondary palette.",
            date: "17/6/2015",
            image: "assets/images/avatars/hair-black-eyes-brown-skin-dark.png",
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-04.jpg"/>',
            palette: "cyan:500",
            classes: "widget-overlay-title"
        }, {
            title: "Christos Pantazis",
            subtitle: "CEO Facebook",
            date: "23/6/2015",
            image: "assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png",
            content: '<p class="padding-10 font-size-3 font-weight-200 line-height-big">For white or black text on colored backgrounds, see these tables of color palettes for the appropriate contrast ratios and hex values.</p> ',
            palette: "red:50"
        }, {
            title: "Accent color",
            subtitle: "Use the accent color for your primary action button and components like switches or sliders.",
            date: "12/6/2015",
            image: "assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png",
            content: '<img src="assets/images/backgrounds/material-backgrounds/mb-bg-05.jpg"/>',
            palette: "cyan:500",
            classes: "widget-overlay-title"
        }]
    }

    angular.module("app.examples.extras").controller("TimelineController", e)
}(),function () {
    "use strict";
    function e() {
        function e(e, t, n) {
            n.$observe("replaceWith", function (e) {
                e && t.replaceWith(angular.isUndefined(e) ? "" : e)
            })
        }

        var t = {link: e, restrict: "A"};
        return t
    }

    angular.module("app.examples.extras").directive("replaceWith", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(e) {
            var t = Math.floor(10 * Math.random() + 1), n = r[Math.floor(Math.random() * (r.length - 1) + 1)], a = [300, 640], o = [225, 480], i = {
                url: "http://lorempixel.com/",
                urlFull: "http://lorempixel.com/",
                title: e
            };
            return Math.random() < .7 ? (i.url += a[0] + "/" + o[0], i.urlFull += a[1] + "/" + o[1], i.rowspan = 2, i.colspan = 2) : (i.url += o[0] + "/" + a[0], i.urlFull += o[1] + "/" + a[1], i.rowspan = 2, i.colspan = 1), i.url += "/" + n + "/" + t, i.urlFull += "/" + n + "/" + t, i
        }

        function n(e) {
            for (var n = {
                date: moment().subtract(e, "days"),
                images: []
            }, a = Math.floor(4 * Math.random() + 6), o = 0; o < a; o++)n.images.push(t("Photo " + (o + 1)));
            return n
        }

        function a(t, n, a) {
            e.show({
                controller: "GalleryDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/extras/gallery-dialog.tmpl.html",
                clickOutsideToClose: !0,
                focusOnOpen: !1,
                targetEvent: a,
                locals: {day: t, image: n}
            })
        }

        function o() {
            for (var e = 0; e < l; e++)i.feed.push(n(e))
        }

        var i = this;
        i.feed = [], i.openImage = a;
        var l = 5, r = ["abstract", "city", "people", "nature", "food", "fashion", "nightlife"];
        o()
    }

    e.$inject = ["$mdDialog"], angular.module("app.examples.extras").controller("GalleryController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        function a() {
            var e = t.images.indexOf(i.currentImage);
            e = e + 1 < t.images.length ? e + 1 : 0, i.currentImage = t.images[e]
        }

        function o() {
            var e = t.images.indexOf(i.currentImage);
            e = e - 1 < 0 ? t.images.length - 1 : e - 1, i.currentImage = t.images[e]
        }

        var i = this;
        i.currentImage = n, i.next = a, i.prev = o
    }

    e.$inject = ["$mdDialog", "day", "image"], angular.module("app.examples.extras").controller("GalleryDialogController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.extra-gallery", {
            url: "/extras/gallery",
            templateUrl: "app/examples/extras/gallery.tmpl.html",
            controller: "GalleryController",
            controllerAs: "vm"
        }).state("triangular.extra-avatars", {
            url: "/extras/avatars",
            templateUrl: "app/examples/extras/avatars.tmpl.html",
            controller: "AvatarsController",
            controllerAs: "vm"
        }).state("triangular.extra-blank", {
            url: "/extras/blank",
            templateUrl: "app/examples/extras/blank.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.extra-timeline", {
            url: "/extras/timeline",
            templateUrl: "app/examples/extras/timeline.tmpl.html",
            controller: "TimelineController",
            controllerAs: "vm"
        }), t.addMenu({
            name: "Extras",
            icon: "zmdi zmdi-view-list-alt",
            type: "dropdown",
            priority: 8.1,
            children: [{name: "Gallery", state: "triangular.extra-gallery", type: "link"}, {
                name: "Avatars",
                state: "triangular.extra-avatars",
                type: "link"
            }, {name: "404 Page", state: "404", type: "link"}, {
                name: "500 Page",
                state: "500",
                type: "link"
            }, {name: "Blank Page", state: "triangular.extra-blank", type: "link"}, {
                name: "Timeline",
                state: "triangular.extra-timeline",
                type: "link"
            }]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.extras").config(e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.avatars = [{
            title: "Carl Barnes",
            subtitle: "Designer",
            image: "assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png",
            color: "blue",
            hue: "500",
            rowspan: 2,
            colspan: 2
        }, {
            title: "Dorothy Lewis",
            subtitle: "Designer",
            image: "assets/images/avatars/hair-black-eyes-brown-skin-tanned.png",
            color: "pink",
            hue: "500",
            rowspan: 1,
            colspan: 1
        }, {
            title: "Harris Kwnst",
            subtitle: "Developer",
            image: "assets/images/avatars/hair-blonde-eyes-brown-skin-light.png",
            color: "blue",
            hue: "200",
            rowspan: 1,
            colspan: 1
        }, {
            title: "Sue Ross",
            subtitle: "Marketing",
            image: "assets/images/avatars/hair-black-eyes-dark-skin-dark.png",
            color: "green",
            hue: "500",
            rowspan: 2,
            colspan: 2
        }, {
            title: "Joe Ross",
            subtitle: "Finance",
            image: "assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png",
            color: "red",
            hue: "500",
            rowspan: 2,
            colspan: 2
        }, {
            title: "Shirley King",
            subtitle: "Designer",
            image: "assets/images/avatars/hair-blonde-eyes-brown-skin-tanned.png",
            color: "blue",
            hue: "200",
            rowspan: 2,
            colspan: 2
        }, {
            title: "John King",
            subtitle: "Developer",
            image: "assets/images/avatars/hair-black-eyes-brown-skin-dark.png",
            color: "yellow",
            hue: "900",
            rowspan: 1,
            colspan: 1
        }, {
            title: "Mary Rose",
            subtitle: "Advertising",
            image: "assets/images/avatars/hair-grey-eyes-dark-skin-tanned.png",
            color: "pink",
            hue: "800",
            rowspan: 1,
            colspan: 1
        }, {
            title: "Morris Onions",
            subtitle: "Finance",
            image: "assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png",
            color: "orange",
            hue: "800",
            rowspan: 1,
            colspan: 1
        }]
    }

    angular.module("app.examples.extras").controller("AvatarsController", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t, n) {
            function a(e) {
                return e.clientHeight > 1
            }

            var o = [], i = [], l = e(function () {
                o = n.find(".timeline-widget"), o.length > 0 && o.toArray().every(a) && (i = n.find(".timeline-x-axis"), r(), e.cancel(l))
            }, 1e3), r = function () {
                for (var e = 0; e < o.length; e++)if (angular.element(o[e]).offset().top <= angular.element(window).scrollTop() + .8 * angular.element(window).height() && angular.element(o[e]).height() > 1) {
                    var t = e % 2 === 0 ? "left" : "right";
                    angular.element(i[e]).addClass("timeline-content-animated " + t), angular.element(o[e]).addClass("timeline-content-animated " + t)
                }
            };
            angular.element("md-content").bind("scroll", r).scroll()
        }

        var n = {link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$interval"], angular.module("app.examples.extras").directive("animateElements", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s, d, m) {
        function c() {
            200 === d.status && (v.emails = d.data, v.emailGroups = [{
                name: t("triTranslate")("Today"),
                from: moment().startOf("day"),
                to: moment().endOf("day")
            }, {
                name: t("triTranslate")("Yesterday"),
                from: moment().subtract(1, "days").startOf("day"),
                to: moment().subtract(1, "days").endOf("day")
            }, {
                name: t("triTranslate")("Older"),
                from: moment().subtract(100, "years").endOf("day"),
                to: moment().subtract(2, "days").startOf("day")
            }], angular.forEach(v.emailGroups, function (e) {
                e.emails = t("emailGroup")(v.emails, e)
            }), f = angular.copy(v.emailGroups))
        }

        function u(e) {
            a.go(v.baseState.name + ".email", {emailID: e.id}), e.unread = !1, v.selectedMail = e.id
        }

        function p() {
            a.go(v.baseState.name)
        }

        function g(e) {
            function n() {
                s.show(s.simple().content(t("triTranslate")("Email canceled")).position("bottom right").hideDelay(3e3))
            }

            r.show({
                controller: "EmailDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/email/email-dialog.tmpl.html",
                targetEvent: e,
                locals: {
                    title: t("triTranslate")("Compose"),
                    email: {to: [], cc: [], bcc: [], subject: "", content: ""},
                    contacts: m,
                    getFocus: !1
                }
            }).then(function (e) {
                b(null, e)
            }, n)
        }

        function b(e, n) {
            var a = [];
            angular.forEach(n.to, function (e) {
                a.push(e.name)
            }), s.show(s.simple().content(t("triTranslate")("Email to {{to}} sent.", {to: a.join(", ")})).position("bottom right").hideDelay(3e3))
        }

        function h() {
            v.showEmailList = !(o("xs") && angular.isDefined(a.current.resolve.email))
        }

        var v = this;
        v.baseState = a.current, v.composeClick = g, v.inboxBasePath = n.path(), v.openMail = u, v.selectedMail = null;
        var f = null;
        e.$on("emailSearch", function (e, n) {
            for (var a in f)v.emailGroups[a].emails = t("emailSearchFilter")(f[a].emails, n)
        }), e.$on("$locationChangeSuccess", h), e.$on("deleteEmail", function (e, n) {
            angular.forEach(v.emailGroups, function (e) {
                var a = null;
                angular.forEach(e.emails, function (e, t) {
                    n.id === e.id && (a = t)
                }), null !== a && (e.emails.splice(a, 1), s.show(s.simple().content(t("triTranslate")("DeleteD")).position("bottom right").hideDelay(3e3)))
            }), p()
        }), e.$on("closeEmail", p), e.$on("sendEmail", b), h(), c()
    }

    e.$inject = ["$scope", "$filter", "$location", "$state", "$mdMedia", "$mdBottomSheet", "$stateParams", "$mdDialog", "$mdToast", "emails", "contacts"], angular.module("app.examples.email").controller("InboxController", e)
}(),function () {
    "use strict";
    function e() {
        function e(e, t) {
            return e.filter(function (e) {
                var n = moment(e.date, moment.ISO_8601);
                if (n.isAfter(t.from) && n.isBefore(t.to))return e
            })
        }

        return e
    }

    angular.module("app.examples.email").filter("emailGroup", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            e.$emit("closeEmail")
        }

        function d(t) {
            e.$emit("deleteEmail", t)
        }

        function m(e, t) {
            var n = {
                to: [],
                cc: [],
                bcc: [],
                subject: "" === l.subject ? "" : o("triTranslate")("R.e: ") + l.subject,
                content: "<br><br><blockquote>" + l.content + "</blockquote>"
            };
            angular.forEach(r.data, function (e) {
                e.email === l.from.email && n.to.push(e)
            }), c(e, n, o("triTranslate")(t))
        }

        function c(t, i, l) {
            function s() {
                a.show(a.simple().content(o("triTranslate")("Email canceled")).position("bottom right").hideDelay(3e3))
            }

            n.show({
                controller: "EmailDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/email/email-dialog.tmpl.html",
                targetEvent: t,
                locals: {title: l, email: i, contacts: r, getFocus: !0},
                focusOnOpen: !1
            }).then(function (t) {
                e.$emit("sendEmail", t)
            }, s)
        }

        var u = this;
        u.closeEmail = s, u.deleteEmail = d, u.email = l, u.emailAction = m
    }

    e.$inject = ["$scope", "$stateParams", "$mdDialog", "$mdToast", "$filter", "emails", "email", "contacts"], angular.module("app.examples.email").controller("EmailController", e)
}(),function () {
    "use strict";
    function e(e) {
        e.decorator("taOptions", ["taRegisterTool", "taTranslations", "$delegate", function (e, t, n) {
            return n.toolbar = [["bold", "italics", "underline", "insertLink"]], n.classes = {
                focussed: "focussed",
                toolbar: "editor-toolbar",
                toolbarGroup: "editor-group",
                toolbarButton: "md-button",
                toolbarButtonActive: "",
                disabled: "",
                textEditor: "form-control",
                htmlEditor: "form-control"
            }, n
        }]), e.decorator("taTools", ["$delegate", function (e) {
            return e.bold.iconclass = "zmdi zmdi-format-bold", e.italics.iconclass = "zmdi zmdi-format-italic", e.underline.iconclass = "zmdi zmdi-format-underlined", e.insertLink.iconclass = "zmdi zmdi-link", e
        }])
    }

    e.$inject = ["$provide"], angular.module("app.examples.email").config(e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        e.state("triangular.email", {
            "abstract": !0,
            views: {
                "toolbar@triangular": {
                    templateUrl: "app/examples/email/layout/toolbar/toolbar.tmpl.html",
                    controller: "EmailToolbarController",
                    controllerAs: "vm"
                }
            },
            data: {layout: {footer: !1, contentClass: "triangular-non-scrolling"}, permissions: {only: ["viewEmail"]}}
        }), angular.forEach(n, function (t) {
            e.state(t.state, {
                url: t.url,
                views: {
                    "@triangular": {
                        templateUrl: "app/examples/email/inbox.tmpl.html",
                        controller: "InboxController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    emails: ["$http", "$q", "API_CONFIG", function (e, t, n) {
                        return e({method: "GET", url: n.url + "email/inbox"})
                    }], contacts: ["$http", "API_CONFIG", function (e, t) {
                        return e({method: "GET", url: t.url + "email/contacts"})
                    }]
                }
            })
        }), angular.forEach(n, function (t) {
            e.state(t.state + ".email", {
                url: "/mail/:emailID",
                templateUrl: "app/examples/email/email.tmpl.html",
                controller: "EmailController",
                controllerAs: "vm",
                resolve: {
                    email: ["$stateParams", "emails", function (e, t) {
                        t = t.data;
                        for (var n = !1, a = 0; a < t.length; a++)if (t[a].id === e.emailID) {
                            n = t[a];
                            break
                        }
                        return n
                    }]
                },
                onEnter: ["$state", "email", function (e, n) {
                    !1 === n && e.go(t.state)
                }]
            })
        });
        var a = {
            name: "Email",
            icon: "zmdi zmdi-email",
            type: "dropdown",
            priority: 2.1,
            permission: "viewEmail",
            children: []
        };
        angular.forEach(n, function (e) {
            a.children.push({name: e.name, state: e.state, type: "link", badge: Math.round(19 * Math.random() + 1)})
        }), t.addMenu(a), t.addMenu({type: "divider", priority: 2.3})
    }

    e.$inject = ["$stateProvider", "triMenuProvider", "EMAIL_ROUTES"], angular.module("app.examples.email").config(e).constant("EMAIL_ROUTES", [{
        state: "triangular.email.inbox",
        name: "Inbox",
        url: "/email/inbox"
    }, {state: "triangular.email.trash", name: "Trash", url: "/email/trash"}, {
        state: "triangular.email.sent",
        name: "Sent",
        url: "/email/sent"
    }])
}(),function () {
    "use strict";
    function e() {
        function e(e, t) {
            return e.filter(function (e) {
                return e.from.name.indexOf(t) > -1 ? e : e.subject.indexOf(t) > -1 ? e : void 0
            })
        }

        return e
    }

    angular.module("app.examples.email").filter("emailSearchFilter", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s) {
        function d() {
            t.cancel()
        }

        function m() {
            g.showCCS = !g.showCCS, g.showCCSIcon = g.showCCS ? "zmdi zmdi-account" : "zmdi zmdi-account-add"
        }

        function c() {
            t.hide(g.email)
        }

        function u(e) {
            var t = angular.lowercase(e);
            return p.filter(function (e) {
                var n = angular.lowercase(e.name);
                if (n.indexOf(t) !== -1)return e
            })
        }

        var p = r.data, g = this;
        g.cancel = d, g.email = l, g.title = i, g.send = c, g.showCCSIcon = "zmdi zmdi-account-add", g.showCCS = !1, g.toggleCCS = m, g.triSkin = a.getCurrent(), g.queryContacts = u, s && e(function () {
            var e = o.retrieveEditor("emailBody").scope;
            e.displayElements.text.trigger("focus")
        }, 500)
    }

    e.$inject = ["$timeout", "$mdDialog", "$filter", "triSkins", "textAngularManager", "title", "email", "contacts", "getFocus"], angular.module("app.examples.email").controller("EmailDialogController", e)
}(),function () {
    "use strict";
    function e() {
        function e(e, t, n, a) {
            if (!e)return "";
            if (n = parseInt(n, 10), !n)return e;
            if (e.length <= n)return e;
            if (e = e.substr(0, n), t) {
                var o = e.lastIndexOf(" ");
                o !== -1 && (e = e.substr(0, o))
            }
            return e + (a || " …")
        }

        return e
    }

    angular.module("app.examples.email").filter("cut", e)
}(),function () {
    "use strict";
    function e(e) {
        function t() {
            n.determinateValue += 1, n.bufferValue += 1.5, n.determinateValue > 100 && (n.determinateValue = 0, n.bufferValue = 0)
        }

        var n = this;
        n.determinateValue = 0, n.bufferValue = 0, e(t, 100, 0, !0)
    }

    e.$inject = ["$interval"], angular.module("app.examples.elements").controller("ProgressController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        var n = this;
        n.icons = [], n.families = ["Material Icon Font", "Font Awesome"], n.selectedIcon = null, angular.forEach(e.data, function (e) {
            n.icons.push({name: e.name, family: "Material Icon Font", className: e["class"]})
        }), angular.forEach(t.data, function (e, t) {
            n.icons.push({name: e, family: "Font Awesome", className: t})
        }), n.selectIcon = function (e) {
            n.selectedIcon = e
        }
    }

    e.$inject = ["icons", "fa"], angular.module("app.examples.elements").controller("IconsController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.elements-buttons", {
            url: "/elements/buttons",
            templateUrl: "app/examples/elements/buttons.tmpl.html",
            controller: "ButtonsController",
            controllerAs: "vm",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-icons", {
            url: "/elements/icons",
            templateUrl: "app/examples/elements/icons.tmpl.html",
            controller: "IconsController",
            controllerAs: "vm",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}},
            resolve: {
                icons: ["$http", "API_CONFIG", function (e, t) {
                    return e({method: "GET", url: t.url + "elements/icons"})
                }], fa: ["$http", "API_CONFIG", function (e, t) {
                    return e({method: "GET", url: t.url + "elements/icons-fa"})
                }]
            }
        }).state("triangular.elements-checkboxes", {
            url: "/elements/checkboxes",
            templateUrl: "app/examples/elements/checkboxes.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-radios", {
            url: "/elements/radios",
            templateUrl: "app/examples/elements/radios.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-toolbars", {
            url: "/elements/toolbars",
            templateUrl: "app/examples/elements/toolbars.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-tooltips", {
            url: "/elements/tooltips",
            templateUrl: "app/examples/elements/tooltips.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-whiteframes", {
            url: "/elements/whiteframes",
            templateUrl: "app/examples/elements/whiteframes.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-sliders", {
            url: "/elements/sliders",
            templateUrl: "app/examples/elements/sliders.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-toasts", {
            url: "/elements/toasts",
            templateUrl: "app/examples/elements/toasts.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-progress", {
            url: "/elements/progress",
            templateUrl: "app/examples/elements/progress.tmpl.html",
            controller: "ProgressController",
            controllerAs: "vm",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-switches", {
            url: "/elements/switches",
            templateUrl: "app/examples/elements/switches.tmpl.html",
            controller: function () {
                this.toggleAll = function (e, t) {
                    for (var n in e)e[n] = t
                }
            },
            controllerAs: "vm",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-dialogs", {
            url: "/elements/dialogs",
            templateUrl: "app/examples/elements/dialogs.tmpl.html",
            controller: "DialogsController",
            controllerAs: "vm",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.menus", {
            url: "/elements/menus",
            templateUrl: "app/examples/elements/menus.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-tabs", {
            url: "/elements/tabs",
            templateUrl: "app/examples/elements/tabs.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-sidebars", {
            url: "/elements/sidebars",
            templateUrl: "app/examples/elements/sidebars.tmpl.html",
            controller: ["$mdSidenav", function (e) {
                this.openSidebar = function (t) {
                    e(t).toggle()
                }
            }],
            controllerAs: "vm",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-grids", {
            url: "/elements/grids",
            templateUrl: "app/examples/elements/grids.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.fab-speed", {
            url: "/elements/fab-speed",
            templateUrl: "app/examples/elements/fab-speed.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.fab-toolbar", {
            url: "/elements/fab-toolbar",
            templateUrl: "app/examples/elements/fab-toolbar.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-selects", {
            url: "/elements/selects",
            templateUrl: "app/examples/elements/selects.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-tables", {
            url: "/elements/tables",
            templateUrl: "app/examples/elements/tables.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-textangular", {
            url: "/elements/textangular",
            templateUrl: "app/examples/elements/textangular.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-lists", {
            url: "/elements/lists",
            templateUrl: "app/examples/elements/lists.tmpl.html",
            controller: ["emails", function (e) {
                this.emails = e.data.splice(0, 5)
            }],
            controllerAs: "vm",
            resolve: {
                emails: ["$http", "API_CONFIG", function (e, t) {
                    return e({method: "GET", url: t.url + "email/inbox"})
                }]
            },
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-chips", {
            url: "/elements/chips",
            templateUrl: "app/examples/elements/chips.tmpl.html",
            controller: "ChipsController",
            controllerAs: "vm",
            resolve: {
                contacts: ["$http", "API_CONFIG", function (e, t) {
                    return e({method: "GET", url: t.url + "email/contacts"})
                }]
            },
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-cards", {
            url: "/elements/cards",
            templateUrl: "app/examples/elements/cards.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-upload", {
            url: "/elements/upload",
            templateUrl: "app/examples/elements/upload.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-loader", {
            url: "/elements/loader",
            templateUrl: "app/examples/elements/loader.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.elements-datepicker", {
            url: "/elements/datepicker",
            templateUrl: "app/examples/elements/datepicker.tmpl.html",
            data: {permissions: {only: ["viewElements"]}, layout: {contentClass: "layout-column"}}
        }), t.addMenu({
            name: "Elements",
            icon: "zmdi zmdi-graduation-cap",
            type: "dropdown",
            priority: 3.1,
            permission: "viewElements",
            children: [{name: "Buttons", type: "link", state: "triangular.elements-buttons"}, {
                name: "Cards",
                type: "link",
                state: "triangular.elements-cards"
            }, {name: "Checkboxes", type: "link", state: "triangular.elements-checkboxes"}, {
                name: "Chips",
                type: "link",
                state: "triangular.elements-chips"
            }, {name: "Datepicker", type: "link", state: "triangular.elements-datepicker"}, {
                name: "Dialogs",
                type: "link",
                state: "triangular.elements-dialogs"
            }, {name: "FAB Speed Dial", type: "link", state: "triangular.fab-speed"}, {
                name: "FAB Toolbar",
                type: "link",
                state: "triangular.fab-toolbar"
            }, {name: "Grids", type: "link", state: "triangular.elements-grids"}, {
                name: "Icons",
                type: "link",
                state: "triangular.elements-icons"
            }, {name: "Lists", type: "link", state: "triangular.elements-lists"}, {
                name: "Loader",
                type: "link",
                state: "triangular.elements-loader"
            }, {name: "Menus", type: "link", state: "triangular.menus"}, {
                name: "Progress",
                type: "link",
                state: "triangular.elements-progress"
            }, {name: "Radios", type: "link", state: "triangular.elements-radios"}, {
                name: "Selects",
                type: "link",
                state: "triangular.elements-selects"
            }, {name: "Sidebars", type: "link", state: "triangular.elements-sidebars"}, {
                name: "Sliders",
                type: "link",
                state: "triangular.elements-sliders"
            }, {name: "Switches", type: "link", state: "triangular.elements-switches"}, {
                name: "Tables",
                type: "link",
                state: "triangular.elements-tables"
            }, {name: "Tabs", type: "link", state: "triangular.elements-tabs"}, {
                name: "Textangular",
                type: "link",
                state: "triangular.elements-textangular"
            }, {name: "Toasts", type: "link", state: "triangular.elements-toasts"}, {
                name: "Toolbars",
                type: "link",
                state: "triangular.elements-toolbars"
            }, {name: "Tooltips", type: "link", state: "triangular.elements-tooltips"}, {
                name: "Whiteframes",
                type: "link",
                state: "triangular.elements-whiteframes"
            }, {name: "Upload", type: "link", state: "triangular.elements-upload"}]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.elements").config(e)
}(),function () {
    "use strict";
    function e(e) {
        function t() {
            n.determinateValue += 1, n.determinateValue2 += 1.5, n.determinateValue > 100 && (n.determinateValue = 30, n.determinateValue2 = 30)
        }

        var n = this;
        n.buttonClass1 = "md-primary", n.buttonHue1 = "md-default", n.buttonClass2 = "md-primary", n.buttonHue2 = "md-default", n.buttonClass3 = "md-primary", n.buttonHue3 = "md-default", n.buttonDisabled = !1, n.determinateValue = 30, n.determinateValue2 = 30, e(t, 100, 0, !0)
    }

    e.$inject = ["$interval"], angular.module("app.examples.elements").controller("ButtonsController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.sales-layout", {
            "abstract": !0,
            views: {
                sidebarLeft: {
                    templateUrl: "app/layouts/leftsidenav/leftsidenav.tmpl.html",
                    controller: "MenuController",
                    controllerAs: "vm"
                },
                content: {template: '<div id="admin-panel-content-view" flex ui-view></div>'},
                belowContent: {template: '<div ui-view="belowContent"></div>'}
            }
        }).state("triangular.dashboard-general", {
            url: "/dashboards/general",
            templateUrl: "app/examples/dashboards/general/dashboard-general.tmpl.html"
        }).state("triangular.dashboard-analytics", {
            url: "/dashboards/analytics",
            templateUrl: "app/examples/dashboards/analytics/dashboard-analytics.tmpl.html",
            controller: "DashboardAnalyticsController",
            controllerAs: "vm"
        }).state("triangular.dashboard-server", {
            url: "/dashboards/server",
            templateUrl: "app/examples/dashboards/server/dashboard-server.tmpl.html",
            controller: "DashboardServerController",
            controllerAs: "vm"
        }).state("triangular.dashboard-widgets", {
            url: "/dashboards/widgets",
            templateUrl: "app/examples/dashboards/widgets.tmpl.html"
        }).state("triangular.dashboard-social", {
            url: "/dashboards/social",
            templateUrl: "app/examples/dashboards/social/dashboard-social.tmpl.html",
            controller: "DashboardSocialController",
            controllerAs: "vm"
        }).state("triangular.dashboard-sales", {
            url: "/dashboards/sales",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/examples/dashboards/sales/dashboard-sales.tmpl.html",
                    controller: "DashboardSalesController",
                    controllerAs: "vm"
                },
                belowContent: {
                    templateUrl: "app/examples/dashboards/sales/fab-button.tmpl.html",
                    controller: "SalesFabController",
                    controllerAs: "vm"
                }
            }
        }).state("triangular.dashboard-draggable", {
            url: "/dashboards/draggable-widgets",
            templateUrl: "app/examples/dashboards/dashboard-draggable.tmpl.html",
            controller: "DashboardDraggableController",
            controllerAs: "vm"
        }), t.addMenu({
            name: "Dashboards",
            icon: "zmdi zmdi-home",
            type: "dropdown",
            priority: 1.1,
            children: [{name: "Analytics", state: "triangular.dashboard-analytics", type: "link"}, {
                name: "General",
                state: "triangular.dashboard-general",
                type: "link"
            }, {name: "Sales", state: "triangular.dashboard-sales", type: "link"}, {
                name: "Server",
                state: "triangular.dashboard-server",
                type: "link"
            }, {name: "Social", state: "triangular.dashboard-social", type: "link"}, {
                name: "Widgets",
                state: "triangular.dashboard-widgets",
                type: "link"
            }, {name: "Draggable", state: "triangular.dashboard-draggable", type: "link"}]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.dashboards").config(e)
}(),function () {
    "use strict";
    function e() {
    }

    angular.module("app.examples.dashboards").controller("DashboardDraggableController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.charts-google-bar", {
            url: "/charts/google/bar",
            templateUrl: "app/examples/charts/google-bar.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.charts-google-scatter", {
            url: "/charts/google/scatter",
            templateUrl: "app/examples/charts/google-scatter.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.charts-google-line", {
            url: "/charts/google/line",
            templateUrl: "app/examples/charts/google-line.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.charts-chartjs-bar", {
            url: "/charts/chartjs/bar",
            templateUrl: "app/examples/charts/chartjs-bar.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.charts-chartjs-pie", {
            url: "/charts/chartjs/pie",
            templateUrl: "app/examples/charts/chartjs-pie.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.charts-chartjs-ticker", {
            url: "/charts/chartjs/ticker",
            templateUrl: "app/examples/charts/chartjs-ticker.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }).state("triangular.charts-chartjs-line", {
            url: "/charts/chartjs/line",
            templateUrl: "app/examples/charts/chartjs-line.tmpl.html",
            data: {permissions: {only: ["viewCharts"]}, layout: {contentClass: "layout-column"}}
        }), t.addMenu({
            name: "Charts",
            icon: "zmdi zmdi-chart",
            type: "dropdown",
            priority: 5.1,
            permission: "viewCharts",
            children: [{
                name: "Google",
                type: "dropdown",
                children: [{name: "Bar", state: "triangular.charts-google-bar", type: "link"}, {
                    name: "Scatter",
                    state: "triangular.charts-google-scatter",
                    type: "link"
                }, {name: "Line", state: "triangular.charts-google-line", type: "link"}]
            }, {
                name: "Chart.js",
                type: "dropdown",
                children: [{name: "Bar", state: "triangular.charts-chartjs-bar", type: "link"}, {
                    name: "Line",
                    state: "triangular.charts-chartjs-line",
                    type: "link"
                }, {name: "Pie", state: "triangular.charts-chartjs-pie", type: "link"}, {
                    name: "Ticker",
                    state: "triangular.charts-chartjs-ticker",
                    type: "link"
                }]
            }]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.charts").config(e)
}(),function () {
    "use strict";
    function e() {
        function e(e, t) {
            var n = parseInt(e, 10);
            if (t = parseInt(t, 10), isNaN(n) || isNaN(t))return e;
            for (n = "" + n; n.length < t;)n = "0" + n;
            return n
        }

        return e
    }

    angular.module("app.examples.calendar").filter("padding", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            b.event.backgroundColor = b.selectedColor.backgroundColor, b.event.borderColor = b.selectedColor.backgroundColor, b.event.textColor = b.selectedColor.textColor,
                b.event.palette = b.selectedColor.palette
        }

        function s() {
            b.event.start = p(b.start, b.startTime), null !== b.event.end && (b.event.end = p(b.end, b.endTime)), t.hide(b.event)
        }

        function d() {
            t.cancel()
        }

        function m() {
            b.event.deleteMe = !0, t.hide(b.event)
        }

        function c() {
            b.event.allDay === !1 && null === b.event.end && (b.event.end = moment(b.event.start), b.event.end.endOf("day"), b.end = b.event.end.toDate(), b.endTime = u(b.event.end))
        }

        function u(e) {
            return {hour: e.hour(), minute: e.minute()}
        }

        function p(e, t) {
            var n = moment(e);
            return n.hour(t.hour), n.minute(t.minute), n
        }

        function g() {
            b.dateSelectOptions = {hours: [], minutes: []};
            for (var e = 0; e <= 23; e++)b.dateSelectOptions.hours.push(e);
            for (var t = 0; t <= 59; t++)b.dateSelectOptions.minutes.push(t)
        }

        var b = this;
        b.cancelClick = d, b.colors = [], b.colorChanged = r, b.deleteClick = m, b.allDayChanged = c, b.dialogData = o, b.edit = l, b.event = i, b.okClick = s, b.selectedColor = null, b.start = i.start.toDate(), b.startTime = u(i.start), null !== i.end && (b.end = i.end.toDate(), b.endTime = u(i.end)), g(), angular.forEach(a.palettes, function (e, t) {
            var n = {
                name: t.replace(/-/g, " "),
                palette: t,
                backgroundColor: a.rgba(e[500].value),
                textColor: a.rgba(e[500].contrast)
            };
            b.colors.push(n), t === b.event.palette && (b.selectedColor = n, b.colorChanged())
        })
    }

    e.$inject = ["$scope", "$mdDialog", "$filter", "triTheming", "dialogData", "event", "edit"], angular.module("app.examples.calendar").controller("EventDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s) {
        function d(e, t) {
            var i = moment(p.currentDay).add(1, "h");
            n.show({
                controller: "EventDialogController",
                controllerAs: "vm",
                templateUrl: "app/examples/calendar/event-dialog.tmpl.html",
                targetEvent: t,
                focusOnOpen: !1,
                locals: {
                    dialogData: {title: "Add Event", confirmButtonText: "Add"},
                    event: {
                        title: o("triTranslate")("New Event"),
                        allDay: !1,
                        start: p.currentDay,
                        end: i,
                        palette: "cyan",
                        stick: !0
                    },
                    edit: !1
                }
            }).then(function (e) {
                p.eventSources[0].events.push(e), a.show(a.simple().content(o("triTranslate")("Event Created")).position("bottom right").hideDelay(2e3))
            })
        }

        function m(e, t, n) {
            for (var a = ["Pick up the kids", "Remember the milk", "Meeting with Morris", "Car service", "Go Surfing", "Party at Christos house", "Beer Oclock", "Festival tickets", "Laundry!", "Haircut appointment", "Walk the dog", "Dentist :(", "Board meeting", "Go fishing"], o = ["London", "New York", "Paris", "Burnley"], i = 0; i < e; i++) {
                var r = c(t, n), s = moment(r).add(1, "h"), d = Math.floor(Math.random() * (a.length - 0)), m = Math.floor(Math.random() * (o.length - 0)), g = u(l.palettes);
                p.eventSources[0].events.push({
                    title: a[d],
                    allDay: !1,
                    start: r,
                    end: s,
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, fugiat! Libero ut in nam cum architecto error magnam, quidem beatae deleniti, facilis perspiciatis modi unde nostrum ea explicabo a adipisci!",
                    location: o[m],
                    backgroundColor: l.rgba(l.palettes[g][500].value),
                    borderColor: l.rgba(l.palettes[g][500].value),
                    textColor: l.rgba(l.palettes[g][500].contrast),
                    palette: g
                })
            }
        }

        function c(e, t) {
            var n = e.toDate().getTime(), a = t.toDate().getTime(), o = Math.random() * (a - n) + n;
            return moment(o)
        }

        function u(e) {
            var t, n = 0;
            for (var a in e)Math.random() < 1 / ++n && (t = a);
            return t
        }

        var p = this;
        p.addEvent = d, p.calendarOptions = {
            contentHeight: "auto",
            selectable: !0,
            editable: !0,
            header: !1,
            viewRender: function (e) {
                p.currentDay = e.calendar.getDate(), p.currentView = e.name, t.$broadcast("calendar-changeday", p.currentDay), r.layout.contentClass = "calendar-background-image background-overlay-static overlay-gradient-10 calendar-background-month-" + p.currentDay.month()
            },
            dayClick: function (e, t, n) {
                p.currentDay = e
            },
            eventClick: function (e, t, i) {
                n.show({
                    controller: "EventDialogController",
                    controllerAs: "vm",
                    templateUrl: "app/examples/calendar/event-dialog.tmpl.html",
                    targetEvent: t,
                    focusOnOpen: !1,
                    locals: {dialogData: {title: "Edit Event", confirmButtonText: "Save"}, event: e, edit: !0}
                }).then(function (e) {
                    var t = "Event Updated";
                    angular.isDefined(e.deleteMe) && e.deleteMe === !0 ? (s.calendars["triangular-calendar"].fullCalendar("removeEvents", e._id), t = "Event Deleted") : s.calendars["triangular-calendar"].fullCalendar("updateEvent", e), a.show(a.simple().content(o("triTranslate")(t)).position("bottom right").hideDelay(2e3))
                })
            }
        }, p.viewFormats = {
            month: "MMMM YYYY",
            agendaWeek: "w",
            agendaDay: "Do MMMM YYYY"
        }, p.eventSources = [{events: []}], e.$on("addEvent", d), m(100, moment().startOf("year"), moment().endOf("year"))
    }

    e.$inject = ["$scope", "$rootScope", "$mdDialog", "$mdToast", "$filter", "$element", "triTheming", "triLayout", "uiCalendarConfig"], angular.module("app.examples.calendar").controller("CalendarController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.calendar", {
            url: "/calendar",
            views: {
                "@triangular": {
                    templateUrl: "app/examples/calendar/calendar.tmpl.html",
                    controller: "CalendarController",
                    controllerAs: "vm"
                },
                "toolbar@triangular": {
                    templateUrl: "app/examples/calendar/layouts/toolbar/toolbar.tmpl.html",
                    controller: "CalendarToolbarController",
                    controllerAs: "vm"
                },
                "belowContent@triangular": {
                    templateUrl: "app/examples/calendar/calendar-fabs.tmpl.html",
                    controller: "CalendarFabController",
                    controllerAs: "vm"
                }
            },
            data: {
                layout: {contentClass: "triangular-non-scrolling layout-column", footer: !1},
                permissions: {only: ["viewCalendar"]}
            }
        }), t.addMenu({
            name: "Calendar",
            state: "triangular.calendar",
            type: "link",
            icon: "zmdi zmdi-calendar-alt",
            priority: 2.3,
            permission: "viewCalendar"
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.calendar").config(e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t) {
            e.$broadcast("addEvent", t)
        }

        var n = this;
        n.addEvent = t
    }

    e.$inject = ["$rootScope"], angular.module("app.examples.calendar").controller("CalendarFabController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("authentication", {
            "abstract": !0,
            views: {root: {templateUrl: "app/examples/authentication/layouts/authentication.tmpl.html"}},
            data: {permissions: {only: ["viewAuthentication"]}}
        }).state("authentication.login", {
            url: "/login",
            templateUrl: "app/examples/authentication/login/login.tmpl.html",
            controller: "LoginController",
            controllerAs: "vm"
        }).state("authentication.signup", {
            url: "/signup",
            templateUrl: "app/examples/authentication/signup/signup.tmpl.html",
            controller: "SignupController",
            controllerAs: "vm"
        }).state("authentication.lock", {
            url: "/lock",
            templateUrl: "app/examples/authentication/lock/lock.tmpl.html",
            controller: "LockController",
            controllerAs: "vm"
        }).state("authentication.forgot", {
            url: "/forgot",
            templateUrl: "app/examples/authentication/forgot/forgot.tmpl.html",
            controller: "ForgotController",
            controllerAs: "vm"
        }).state("triangular.profile", {
            url: "/profile",
            templateUrl: "app/examples/authentication/profile/profile.tmpl.html",
            controller: "ProfileController",
            controllerAs: "vm"
        }), t.addMenu({
            name: "Authentication",
            icon: "zmdi zmdi-account",
            type: "dropdown",
            priority: 4.1,
            permission: "viewAuthentication",
            children: [{name: "Login", state: "authentication.login", type: "link"}, {
                name: "Sign Up",
                state: "authentication.signup",
                type: "link"
            }, {name: "Forgot Password", state: "authentication.forgot", type: "link"}, {
                name: "Lock Page",
                state: "authentication.lock",
                type: "link"
            }, {name: "Profile", state: "triangular.profile", type: "link"}]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.examples.authentication").config(e)
}(),function () {
    "use strict";
    angular.module("app.dashboards", [])
}(),function () {
    "use strict";
    function e(e) {
        function t(t, n, a, o) {
            o.setLoading(!0);
            var i = 'select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + a.weatherWidget + '")', l = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(i) + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            e.get(l).success(function (e) {
                e.query.count > 0 && (o.setLoading(!1), t.weather = {
                    iconClass: "wi-yahoo-" + e.query.results.channel.item.condition.code,
                    date: new Date(e.query.created),
                    temp: e.query.results.channel.item.condition.temp,
                    text: e.query.results.channel.item.condition.text,
                    location: a.weatherWidget
                })
            })
        }

        var n = {require: "triWidget", link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$http"], angular.module("app.dashboards").directive("weatherWidget", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            e.tweets = [{
                user: "oxygenna",
                body: "Don't miss it! A Material Design Avatar set with 1440 avatars! http://sellfy.com/p/EUcC/ #avatars #materialdesign"
            }, {
                user: "oxygenna",
                body: "Looking for a design for emotion case study to convince the boss/client? This one's worth $2.8 million."
            }, {
                user: "oxygenna",
                body: "New Freebie! A set of 27 Drinks-Lifestyle Icons available in PSD/AI/PNG format #freebie #icons #drinks http://wp.me/p5Xp06-Fq"
            }], e.selectedTab = 0, e.prevTweet = function () {
                e.selectedTab--, e.selectedTab < 0 && (e.selectedTab = e.tweets.length - 1)
            }, e.nextTweet = function () {
                e.selectedTab++, e.selectedTab === e.tweets.length && (e.selectedTab = 0)
            }
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.dashboards").directive("twitterWidget", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            e.todos = [{name: "Buy Milk", done: !1}, {name: "Fix Server", done: !0}, {
                name: "Walk the dog",
                done: !1
            }, {name: "Upload files", done: !1}]
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.dashboards").directive("todoWidget", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(e) {
            function n(e) {
                for (e.data[0].length && (e.labels = e.labels.slice(1), e.data[0] = e.data[0].slice(1)); e.data[0].length < e.dataLength;)e.labels.push(""), e.data[0].push(o(e.data[0], e.maximum))
            }

            function a(e) {
                e.data = [];
                for (var t = 0; t < e.series.length; t++) {
                    for (var n = [], a = 0; a < e.labels.length; a++)n.push(Math.floor(100 * Math.random() + 1));
                    e.data.push(n)
                }
            }

            function o(e, t) {
                var n = e.length, a = n ? e[n - 1] : 50, o = a + 10 * Math.random() - 5;
                return o < 0 ? 0 : o > t ? t : o
            }

            e.serverCharts = {
                bandwidth: {
                    dataLength: 50,
                    maximum: 40,
                    data: [[]],
                    labels: [],
                    options: {
                        animation: !1,
                        showTooltips: !1,
                        pointDot: !1,
                        datasetStrokeWidth: .5,
                        maintainAspectRatio: !1
                    },
                    colours: ["#4285F4"]
                },
                cpu: {
                    dataLength: 50,
                    maximum: 100,
                    data: [[]],
                    labels: [],
                    options: {
                        animation: !1,
                        showTooltips: !1,
                        pointDot: !1,
                        datasetStrokeWidth: .5,
                        maintainAspectRatio: !1
                    },
                    colours: ["#DB4437"]
                },
                data24hrs: {
                    series: ["Bandwidth", "CPU"],
                    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
                },
                data7days: {
                    series: ["Bandwidth", "CPU"],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                },
                data365days: {
                    series: ["Bandwidth", "CPU"],
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                }
            }, a(e.serverCharts.data24hrs), a(e.serverCharts.data7days), a(e.serverCharts.data365days), t(function () {
                n(e.serverCharts.bandwidth), n(e.serverCharts.cpu)
            }, 1e3)
        }

        var a = {require: "triWidget", link: n, restrict: "A"};
        return a
    }

    e.$inject = ["$timeout", "$interval"], angular.module("app.dashboards").directive("serverWidget", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        function a(a, o, i, l) {
            function r() {
                a.alert = "You cancelled the dialog."
            }

            function s(e, t, n) {
                e.data = n, e.closeDialog = function () {
                    t.cancel()
                }
            }

            s.$inject = ["$scope", "$mdDialog", "data"], l.setLoading(!0);
            var d = e(i.loadDataWidget)(a);
            l.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-search", title: "Details", click: function (e) {
                        var t = [];
                        angular.forEach(d, function (e, n) {
                            t = a[n]
                        }), n.show({
                            controller: s,
                            templateUrl: "app/dashboards/widgets/widget-load-data-dialog.tmpl.html",
                            targetEvent: e,
                            locals: {data: t},
                            clickOutsideToClose: !0
                        }).then(function (e) {
                            a.alert = 'You said the information was "' + e + '".'
                        }, r)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), angular.forEach(d, function (e, n) {
                t.get(e).success(function (e) {
                    var t = e.shift();
                    l.setLoading(!1), a[n] = {header: t, data: e}
                })
            })
        }

        var o = {require: "triWidget", link: a, restrict: "A"};
        return o
    }

    e.$inject = ["$parse", "$http", "$mdDialog"], angular.module("app.dashboards").directive("loadDataWidget", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            e.geoChartData = {
                type: "GeoChart",
                data: [["Country", "Popularity"], ["Germany", 200], ["United States", 300], ["Brazil", 400], ["Canada", 500], ["France", 600], ["RU", 700]]
            }
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.dashboards").directive("googleGeochartWidget", e)
}(),function () {
    "use strict";
    function e() {
        return {
            scope: {id: "@", legend: "=", item: "=", data: "="},
            restrict: "AE",
            template: '<div style="height:650px;width: 1000px;"></div>',
            replace: !0,
            controller: ["$scope", "API_CONFIG", function (e, t) {
                e.url = t.url
            }],
            link: function (e, t, n) {
                $.ajax({
                    type: "get",
                    url: e.url + "/sales/sale_distribution/OSS?dimision=region&sale_spec=default&sale_mode=default&business=public&is_aborad=false",
                    success: function (e) {
                        function t() {
                            var t = {};
                            return $.each(e.result, function (n, a) {
                                t[e.result[n].region] || (o.push(e.result[n].region), t[e.result[n].region] = 1)
                            }), o
                        }

                        function n() {
                            var t = {};
                            return $.each(e.result, function (n, a) {
                                t[e.result[n].rate] || (i.push(e.result[n].rate), t[e.result[n].region] = 1)
                            }), i
                        }

                        var a = {};
                        a.AD = {latitude: 42.5, longitude: 1.5}, a.AE = {
                            latitude: 24,
                            longitude: 54
                        }, a.AF = {latitude: 33, longitude: 65}, a.AG = {
                            latitude: 17.05,
                            longitude: -61.8
                        }, a.AI = {latitude: 18.25, longitude: -63.1667}, a.AL = {
                            latitude: 41,
                            longitude: 20
                        }, a.AM = {latitude: 40, longitude: 45}, a.AN = {
                            latitude: 12.25,
                            longitude: -68.75
                        }, a.AO = {latitude: -12.5, longitude: 18.5}, a.AP = {
                            latitude: 35,
                            longitude: 105
                        }, a.AQ = {latitude: -90, longitude: 0}, a.AR = {
                            latitude: -34,
                            longitude: -64
                        }, a.AS = {latitude: -14.3333, longitude: -170}, a.AT = {
                            latitude: 47.3333,
                            longitude: 13.3333
                        }, a.AU = {latitude: -27, longitude: 133}, a.AW = {
                            latitude: 12.5,
                            longitude: -69.9667
                        }, a.AZ = {latitude: 40.5, longitude: 47.5}, a.BA = {
                            latitude: 44,
                            longitude: 18
                        }, a.BB = {latitude: 13.1667, longitude: -59.5333}, a.BD = {
                            latitude: 36.07,
                            longitude: 120.33
                        }, a.BE = {latitude: 50.8333, longitude: 4}, a.BF = {
                            latitude: 13,
                            longitude: -2
                        }, a.BG = {latitude: 43, longitude: 25}, a.BH = {
                            latitude: 26,
                            longitude: 50.55
                        }, a.BI = {latitude: -3.5, longitude: 30}, a.BJ = {
                            latitude: 40.2539,
                            longitude: 116.4551
                        }, a.BM = {latitude: 32.3333, longitude: -64.75}, a.BN = {
                            latitude: 4.5,
                            longitude: 114.6667
                        }, a.BO = {latitude: -17, longitude: -65}, a.BR = {
                            latitude: -10,
                            longitude: -55
                        }, a.BS = {latitude: 24.25, longitude: -76}, a.BT = {
                            latitude: 27.5,
                            longitude: 90.5
                        }, a.BV = {latitude: -54.4333, longitude: 3.4}, a.BW = {
                            latitude: -22,
                            longitude: 24
                        }, a.BY = {latitude: 53, longitude: 28}, a.BZ = {
                            latitude: 17.25,
                            longitude: -88.75
                        }, a.CA = {latitude: 54, longitude: -100}, a.CC = {
                            latitude: -12.5,
                            longitude: 96.8333
                        }, a.CD = {latitude: 0, longitude: 25}, a.CF = {
                            latitude: 7,
                            longitude: 21
                        }, a.CG = {latitude: -1, longitude: 15}, a.CH = {
                            latitude: 31.2891,
                            longitude: 121.4648
                        }, a.CI = {latitude: 8, longitude: -5}, a.CK = {
                            latitude: -21.2333,
                            longitude: -159.7667
                        }, a.CL = {latitude: -30, longitude: -71}, a.CM = {
                            latitude: 6,
                            longitude: 12
                        }, a.CN = {latitude: 35, longitude: 105}, a.CO = {
                            latitude: 4,
                            longitude: -72
                        }, a.CR = {latitude: 10, longitude: -84}, a.CU = {
                            latitude: 21.5,
                            longitude: -80
                        }, a.CV = {latitude: 16, longitude: -24}, a.CX = {
                            latitude: -10.5,
                            longitude: 105.6667
                        }, a.CY = {latitude: 35, longitude: 33}, a.CZ = {
                            latitude: 49.75,
                            longitude: 15.5
                        }, a.DE = {latitude: 51, longitude: 9}, a.DJ = {
                            latitude: 11.5,
                            longitude: 43
                        }, a.DK = {latitude: 56, longitude: 10}, a.DM = {
                            latitude: 15.4167,
                            longitude: -61.3333
                        }, a.DO = {latitude: 19, longitude: -70.6667}, a.DZ = {
                            latitude: 28,
                            longitude: 3
                        }, a.EC = {latitude: -2, longitude: -77.5}, a.EE = {
                            latitude: 59,
                            longitude: 26
                        }, a.EG = {latitude: 27, longitude: 30}, a.EH = {
                            latitude: 24.5,
                            longitude: -13
                        }, a.ER = {latitude: 15, longitude: 39}, a.ES = {
                            latitude: 40,
                            longitude: -4
                        }, a.ET = {latitude: 8, longitude: 38}, a.EU = {
                            latitude: 47,
                            longitude: 8
                        }, a.FI = {latitude: 62, longitude: 26}, a.FJ = {
                            latitude: -18,
                            longitude: 175
                        }, a.FK = {latitude: -51.75, longitude: -59}, a.FM = {
                            latitude: 6.9167,
                            longitude: 158.25
                        }, a.FO = {latitude: 62, longitude: -7}, a.FR = {
                            latitude: 46,
                            longitude: 2
                        }, a.GA = {latitude: -1, longitude: 11.75}, a.GB = {
                            latitude: 54,
                            longitude: -2
                        }, a.GD = {latitude: 12.1167, longitude: -61.6667}, a.GE = {
                            latitude: 42,
                            longitude: 43.5
                        }, a.GF = {latitude: 4, longitude: -53}, a.GH = {
                            latitude: 8,
                            longitude: -2
                        }, a.GI = {latitude: 36.1833, longitude: -5.3667}, a.GL = {
                            latitude: 72,
                            longitude: -40
                        }, a.GM = {latitude: 13.4667, longitude: -16.5667}, a.GN = {
                            latitude: 11,
                            longitude: -10
                        }, a.GP = {latitude: 16.25, longitude: -61.5833}, a.GQ = {
                            latitude: 2,
                            longitude: 10
                        }, a.GR = {latitude: 39, longitude: 22}, a.GS = {
                            latitude: -54.5,
                            longitude: -37
                        }, a.GT = {latitude: 15.5, longitude: -90.25}, a.GU = {
                            latitude: 13.4667,
                            longitude: 144.7833
                        }, a.GW = {latitude: 12, longitude: -15}, a.GY = {
                            latitude: 5,
                            longitude: -59
                        }, a.HK = {latitude: 22.25, longitude: 114.1667}, a.HM = {
                            latitude: -53.1,
                            longitude: 72.5167
                        }, a.HN = {latitude: 15, longitude: -86.5}, a.HR = {
                            latitude: 45.1667,
                            longitude: 15.5
                        }, a.HT = {latitude: 19, longitude: -72.4167}, a.HU = {
                            latitude: 47,
                            longitude: 20
                        }, a.ID = {latitude: -5, longitude: 120}, a.IE = {
                            latitude: 53,
                            longitude: -8
                        }, a.IL = {latitude: 31.5, longitude: 34.75},a.IN = {
                            latitude: 20,
                            longitude: 77
                        },a.IO = {latitude: -6, longitude: 71.5},a.IQ = {
                            latitude: 33,
                            longitude: 44
                        },a.IR = {latitude: 32, longitude: 53},a.IS = {
                            latitude: 65,
                            longitude: -18
                        },a.IT = {latitude: 42.8333, longitude: 12.8333},a.JM = {
                            latitude: 18.25,
                            longitude: -77.5
                        },a.JO = {latitude: 31, longitude: 36},a.JP = {
                            latitude: 36,
                            longitude: 138
                        },a.KE = {latitude: 1, longitude: 38},a.KG = {latitude: 41, longitude: 75},a.KH = {
                            latitude: 13,
                            longitude: 105
                        },a.KI = {latitude: 1.4167, longitude: 173},a.KM = {
                            latitude: -12.1667,
                            longitude: 44.25
                        },a.KN = {latitude: 17.3333, longitude: -62.75},a.KP = {
                            latitude: 40,
                            longitude: 127
                        },a.KR = {latitude: 37, longitude: 127.5},a.KW = {
                            latitude: 29.3375,
                            longitude: 47.6581
                        },a.KY = {latitude: 19.5, longitude: -80.5},a.KZ = {
                            latitude: 48,
                            longitude: 68
                        },a.LA = {latitude: 18, longitude: 105},a.LB = {
                            latitude: 33.8333,
                            longitude: 35.8333
                        },a.LC = {latitude: 13.8833, longitude: -61.1333},a.LI = {
                            latitude: 47.1667,
                            longitude: 9.5333
                        },a.LK = {latitude: 7, longitude: 81},a.LR = {
                            latitude: 6.5,
                            longitude: -9.5
                        },a.LS = {latitude: -29.5, longitude: 28.5},a.LT = {
                            latitude: 55,
                            longitude: 24
                        },a.LU = {latitude: 49.75, longitude: 6},a.LV = {
                            latitude: 57,
                            longitude: 25
                        },a.LY = {latitude: 25, longitude: 17},a.MA = {
                            latitude: 32,
                            longitude: -5
                        },a.MC = {latitude: 43.7333, longitude: 7.4},a.MD = {
                            latitude: 47,
                            longitude: 29
                        },a.ME = {latitude: 42.5, longitude: 19.4},a.MG = {
                            latitude: -20,
                            longitude: 47
                        },a.MH = {latitude: 9, longitude: 168},a.MK = {
                            latitude: 41.8333,
                            longitude: 22
                        },a.ML = {latitude: 17, longitude: -4},a.MM = {
                            latitude: 22,
                            longitude: 98
                        },a.MN = {latitude: 46, longitude: 105},a.MO = {
                            latitude: 22.1667,
                            longitude: 113.55
                        },a.MP = {latitude: 15.2, longitude: 145.75},a.MQ = {
                            latitude: 14.6667,
                            longitude: -61
                        },a.MR = {latitude: 20, longitude: -12},a.MS = {
                            latitude: 16.75,
                            longitude: -62.2
                        },a.MT = {latitude: 35.8333, longitude: 14.5833},a.MU = {
                            latitude: -20.2833,
                            longitude: 57.55
                        },a.MV = {latitude: 3.25, longitude: 73},a.MW = {
                            latitude: -13.5,
                            longitude: 34
                        },a.MX = {latitude: 23, longitude: -102},a.MY = {
                            latitude: 2.5,
                            longitude: 112.5
                        },a.MZ = {latitude: -18.25, longitude: 35},a.NA = {
                            latitude: -22,
                            longitude: 17
                        },a.NC = {latitude: -21.5, longitude: 165.5},a.NE = {
                            latitude: 16,
                            longitude: 8
                        },a.NF = {latitude: -29.0333, longitude: 167.95},a.NG = {
                            latitude: 10,
                            longitude: 8
                        },a.NI = {latitude: 13, longitude: -85},a.NL = {
                            latitude: 52.5,
                            longitude: 5.75
                        },a.NO = {latitude: 62, longitude: 10},a.NP = {
                            latitude: 28,
                            longitude: 84
                        },a.NR = {latitude: -.5333, longitude: 166.9167},a.NU = {
                            latitude: -19.0333,
                            longitude: -169.8667
                        },a.NZ = {latitude: -41, longitude: 174},a.OM = {
                            latitude: 21,
                            longitude: 57
                        },a.PA = {latitude: 9, longitude: -80},a.PE = {
                            latitude: -10,
                            longitude: -76
                        },a.PF = {latitude: -15, longitude: -140},a.PG = {
                            latitude: -6,
                            longitude: 147
                        },a.PH = {latitude: 13, longitude: 122},a.PK = {
                            latitude: 30,
                            longitude: 70
                        },a.PL = {latitude: 52, longitude: 20},a.PM = {
                            latitude: 46.8333,
                            longitude: -56.3333
                        },a.PR = {latitude: 18.25, longitude: -66.5},a.PS = {
                            latitude: 32,
                            longitude: 35.25
                        },a.PT = {latitude: 39.5, longitude: -8},a.PW = {
                            latitude: 7.5,
                            longitude: 134.5
                        },a.PY = {latitude: -23, longitude: -58},a.QA = {
                            latitude: 25.5,
                            longitude: 51.25
                        },a.RE = {latitude: -21.1, longitude: 55.6},a.RO = {
                            latitude: 46,
                            longitude: 25
                        },a.RS = {latitude: 44, longitude: 21},a.RU = {
                            latitude: 60,
                            longitude: 100
                        },a.RW = {latitude: -2, longitude: 30},a.SA = {
                            latitude: 25,
                            longitude: 45
                        },a.SB = {latitude: -8, longitude: 159},a.SC = {
                            latitude: -4.5833,
                            longitude: 55.6667
                        },a.SD = {latitude: 15, longitude: 30},a.SE = {
                            latitude: 62,
                            longitude: 15
                        },a.SG = {latitude: 1.3667, longitude: 103.8},a.SH = {
                            latitude: -15.9333,
                            longitude: -5.7
                        },a.SI = {latitude: 46, longitude: 15},a.SJ = {
                            latitude: 78,
                            longitude: 20
                        },a.SK = {latitude: 48.6667, longitude: 19.5},a.SL = {
                            latitude: 8.5,
                            longitude: -11.5
                        },a.SM = {latitude: 43.7667, longitude: 12.4167},a.SN = {
                            latitude: 14,
                            longitude: -14
                        },a.SO = {latitude: 10, longitude: 49},a.SR = {latitude: 4, longitude: -56},a.ST = {
                            latitude: 1,
                            longitude: 7
                        },a.SV = {latitude: 13.8333, longitude: -88.9167},a.SY = {
                            latitude: 35,
                            longitude: 38
                        },a.SZ = {latitude: -26.5, longitude: 31.5},a.TC = {
                            latitude: 21.75,
                            longitude: -71.5833
                        },a.TD = {latitude: 15, longitude: 19},a.TF = {
                            latitude: -43,
                            longitude: 67
                        },a.TG = {latitude: 8, longitude: 1.1667},a.TH = {
                            latitude: 15,
                            longitude: 100
                        },a.TJ = {latitude: 39, longitude: 71},a.TK = {
                            latitude: -9,
                            longitude: -172
                        },a.TM = {latitude: 40, longitude: 60},a.TN = {
                            latitude: 34,
                            longitude: 9
                        },a.TO = {latitude: -20, longitude: -175},a.TR = {
                            latitude: 39,
                            longitude: 35
                        },a.TT = {latitude: 11, longitude: -61},a.TV = {
                            latitude: -8,
                            longitude: 178
                        },a.TW = {latitude: 23.5, longitude: 121},a.TZ = {
                            latitude: -6,
                            longitude: 35
                        },a.UA = {latitude: 49, longitude: 32},a.UG = {
                            latitude: 1,
                            longitude: 32
                        },a.UM = {latitude: 19.2833, longitude: 166.6},a.US = {
                            latitude: 38,
                            longitude: -97
                        },a.UY = {latitude: -33, longitude: -56},a.UZ = {
                            latitude: 41,
                            longitude: 64
                        },a.VA = {latitude: 41.9, longitude: 12.45},a.VC = {
                            latitude: 13.25,
                            longitude: -61.2
                        },a.VE = {latitude: 8, longitude: -66},a.VG = {
                            latitude: 18.5,
                            longitude: -64.5
                        },a.VI = {latitude: 18.3333, longitude: -64.8333},a.VN = {
                            latitude: 16,
                            longitude: 106
                        },a.VU = {latitude: -16, longitude: 167},a.WF = {
                            latitude: -13.3,
                            longitude: -176.2
                        },a.WS = {latitude: -13.5833, longitude: -172.3333},a.YE = {
                            latitude: 15,
                            longitude: 48
                        },a.YT = {latitude: -12.8333, longitude: 45.1667},a.ZA = {
                            latitude: -29,
                            longitude: 24
                        },a.ZM = {latitude: -15, longitude: 30},a.ZW = {
                            latitude: -20,
                            longitude: 30
                        },a.HZ = {latitude: 29.8773, longitude: 119.5313},a.SZ = {
                            latitude: 22.5439,
                            longitude: 114.5435
                        },a.HK = {latitude: 22.5439, longitude: 114.5435},a.TK = {
                            latitude: 35.42,
                            longitude: 139.46
                        },a.FK = {latitude: 52.2, longitude: 14.32},a.FN = {
                            latitude: 36.31,
                            longitude: -80.37
                        },a.DB = {latitude: 25.271, longitude: 55.307},a.SN = {latitude: -33.55, longitude: 150.53};
                        var o = [], i = [];
                        t(), n();
                        var l = [{code: "BJ", name: o[0], value: i[0], color: "#eea638"}, {
                            code: "HZ",
                            name: o[1],
                            value: i[1],
                            color: "#a7a737"
                        }, {code: "HK", name: o[2], value: i[2], color: "#eea638"}, {
                            code: "BD",
                            name: o[3],
                            value: i[3],
                            color: "#d8854f"
                        }, {code: "CH", name: o[4], value: i[4], color: "#eea638"}, {
                            code: "SZ",
                            name: o[5],
                            value: i[5],
                            color: "#de4c4f"
                        }, {code: "DB", name: o[6], value: i[6], color: "#8aabb0"}], r = -(1 / 0), s = 1 / 0;
                        l.forEach(function (e) {
                            e.value > r && (r = e.value), e.value < s && (s = e.value)
                        });
                        var d = {
                            backgroundColor: "#3a3a3a",
                            title: {
                                text: "全球OSS业务容量占比",
                                subtext: "数据截止(20161226)",
                                left: "center",
                                top: "top",
                                textStyle: {color: "#fff"}
                            },
                            tooltip: {
                                trigger: "item", formatter: function (e) {
                                    var t = (e.value + "").split(",");
                                    return t = t[2], e.seriesName + "<br/>" + e.name + " : " + t + "%"
                                }
                            },
                            roamController: {show: !0, x: "left", mapTypeControl: {world: !0}},
                            visualMap: {show: !1, min: 0, max: r, inRange: {symbolSize: [6, 25]}},
                            legend: {
                                orient: "vertical",
                                x: "left",
                                data: ["OSS"],
                                selectedMode: "single",
                                textStyle: {color: "#fff"}
                            },
                            toolbox: {
                                show: !0,
                                orient: "vertical",
                                x: "left",
                                y: "center",
                                iconStyle: {
                                    normal: {borderColor: "#fff", textPosition: "right"},
                                    emphasis: {borderColor: "#fff"}
                                },
                                feature: {
                                    mark: {show: !0},
                                    dataView: {show: !0, readOnly: !1},
                                    restore: {show: !0},
                                    saveAsImage: {show: !0}
                                }
                            },
                            geo: {
                                name: "国内各AZ业务占比",
                                type: "map",
                                map: "world",
                                center: [10, 29.71],
                                roam: !0,
                                label: {emphasis: {show: !1}},
                                itemStyle: {
                                    normal: {
                                        areaColor: "#3a3a3a",
                                        borderColor: "rgba(100,149,237,1)",
                                        borderWidth: .5
                                    }, emphasis: {areaColor: "#373c41"}
                                }
                            },
                            series: [{
                                name: "OSS",
                                type: "effectScatter",
                                coordinateSystem: "geo",
                                data: l.map(function (e) {
                                    return {
                                        name: e.name,
                                        value: [a[e.code].longitude, a[e.code].latitude, e.value],
                                        label: {
                                            normal: {
                                                show: !0, position: "left", formatter: function (e) {
                                                    var t = (e.value + "").split(",");
                                                    return t = t[2], e.name + " : " + t + "%"
                                                }
                                            }, emphasis: {position: "left", show: "{b}"}
                                        },
                                        itemStyle: {normal: {color: e.color}},
                                        showEffectOn: "render",
                                        rippleEffect: {brushType: "stroke"}
                                    }
                                })
                            }]
                        }, m = echarts.init(document.getElementById("main2"), "vintage");
                        m.setOption(d)
                    }
                })
            }
        }
    }

    angular.module("app.dashboards").directive("map", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            e.contacts = [{name: "Morris Onions", image: "assets/images/avatars/avatar-2.png"}, {
                name: "Newton Welch",
                image: "assets/images/avatars/avatar-5.png"
            }, {name: "Kelly Koelpin", image: "assets/images/avatars/avatar-1.png"}, {
                name: "Rowland Emard",
                image: "assets/images/avatars/avatar-2.png"
            }, {name: "Kailee Johnston", image: "assets/images/avatars/avatar-3.png"}, {
                name: "Roberto Grimes",
                image: "assets/images/avatars/avatar-4.png"
            }]
        }

        var t = {requrie: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.dashboards").directive("contactsWidget", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            e.conversation = [{
                name: "Morris Onions",
                image: "assets/images/avatars/avatar-6.png",
                messages: ["Hi there how are you?", "Hello?"]
            }, {
                name: "Danny Ings",
                image: "assets/images/avatars/avatar-3.png",
                messages: ["Howsitgowin?"]
            }, {
                name: "Morris Onions",
                image: "assets/images/avatars/avatar-6.png",
                messages: ["We need those images ASAP!", "Client asked about them."]
            }, {
                name: "Danny Ings",
                image: "assets/images/avatars/avatar-3.png",
                messages: ["OK, will send them over"]
            }], e.userClass = function (e) {
                return e ? "user-left" : "user-right"
            }
        }

        var t = {require: "triWidget", link: e, restrict: "A"};
        return t
    }

    angular.module("app.dashboards").directive("chatWidget", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(e) {
            function n() {
                for (e.tickerChart.data[0].length && (e.tickerChart.labels = e.tickerChart.labels.slice(1), e.tickerChart.data[0] = e.tickerChart.data[0].slice(1)); e.tickerChart.data[0].length < o;)e.tickerChart.labels.push(""), e.tickerChart.data[0].push(a(e.tickerChart.data[0]))
            }

            function a(e) {
                var t = e.length, n = t ? e[t - 1] : 50, a = n + 10 * Math.random() - 5;
                return a < 0 ? 0 : a > 100 ? 100 : a
            }

            var o = 100;
            e.tickerChart = {
                data: [[]],
                labels: [],
                options: {
                    animation: !1,
                    showScale: !1,
                    showTooltips: !1,
                    pointDot: !1,
                    datasetStrokeWidth: .5,
                    maintainAspectRatio: !1
                }
            }, t(function () {
                n()
            }, 1e3)
        }

        var a = {require: "triWidget", link: n, restrict: "A"};
        return a
    }

    e.$inject = ["$timeout", "$interval"], angular.module("app.dashboards").directive("chartjsTickerWidget", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t, n, a, o) {
            o.setLoading(!0), e(function () {
                o.setLoading(!1)
            }, 2500), o.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-refresh", title: "Refresh", click: function () {
                        o.setLoading(!0), e(function () {
                            o.setLoading(!1)
                        }, 1500)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), t.pieChart = {labels: ["Facebook", "Twitter", "Google+", "Others"], data: [300, 500, 100, 50]}
        }

        var n = {require: "triWidget", link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$timeout"], angular.module("app.dashboards").directive("chartjsPieWidget", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t, n, a, o) {
            o.setLoading(!0), e(function () {
                o.setLoading(!1)
            }, 2500), o.setMenu({
                icon: "zmdi zmdi-more-vert",
                items: [{
                    icon: "zmdi zmdi-refresh", title: "Refresh", click: function () {
                        o.setLoading(!0), e(function () {
                            o.setLoading(!1)
                        }, 1500)
                    }
                }, {icon: "zmdi zmdi-share", title: "Share"}, {icon: "zmdi zmdi-print", title: "Print"}]
            }), t.labels = ["Facebook", "Twitter", "Google+", "Others"], t.series = ["This Week", "Last week"], t.data = [[65, 59, 80, 81], [28, 48, 40, 19]]
        }

        var n = {require: "triWidget", link: t, restrict: "A"};
        return n
    }

    e.$inject = ["$timeout"], angular.module("app.dashboards").directive("chartjsBarWidget", e)
}(),function () {
    "use strict";
    function e() {
        var e = {bindToController: !0, controller: t, controllerAs: "calendarController", restrict: "A"};
        return e
    }

    function t(e, t, n) {
        function a(e) {
            t.calendars.calendarWidget.fullCalendar(e)
        }

        function o() {
        }

        function i() {
            r()
        }

        var l = this;
        l.calendarEvents = [], l.calendarOptions = {
            lang: "en", header: !1, height: "auto", viewRender: function (e) {
                l.currentDay = e.calendar.getDate()
            }
        }, l.changeMonth = a;
        var r = n.$on("$translateChangeSuccess", o);
        e.$on("$destroy", i)
    }

    t.$inject = ["$scope", "uiCalendarConfig", "$rootScope"], angular.module("app.dashboards").directive("calendarWidget", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(n) {
            var a = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: [],
                result: [],
                aSalseTitle: []
            }, o = t.url + "/inventories/plan_inventories/OSS/resources?dimision=cluster";
            return e.get(o).success(function (e, t, n, o) {
                if (200 == e.code) {
                    var i = e.result;
                    a.result = a.result.concat(i), $.each(i[0], function (e, t) {
                        a.aSalseTitle.push(e)
                    })
                }
            }).error(function (e, t, n, a) {
                console.log(e)
            }), a
        }

        function a(e) {
            for (var t = {
                labels: [],
                series: ["Sales"],
                options: {
                    maintainAspectRatio: !1,
                    datasetFill: !1,
                    responsive: !0,
                    scaleShowGridLines: !1,
                    bezierCurve: !0,
                    pointDotRadius: 2,
                    scaleFontColor: "#ffffff",
                    scaleFontSize: 16
                },
                colors: ["#ffffff"],
                data: []
            }, n = [], a = 0; a < e.dayTotals.length; a++)t.labels.push(e.dayTotals[a].date.format("M/D/YY")), n.push(e.dayTotals[a].sales);
            return t.data.push(n), t
        }

        function o(e) {
            for (var t = {labels: [], data: []}, n = 0; n < e.orders.length; n++) {
                t.labels.indexOf(e.orders[n].status) === -1 && (t.labels.push(e.orders[n].status), t.data.push(0));
                var a = t.labels.indexOf(e.orders[n].status);
                t.data[a]++
            }
            return t
        }

        function i(e) {
            for (var t = {
                labels: [],
                series: ["Sales"],
                data: [],
                options: {barShowStroke: !1}
            }, n = [], a = 0; a < e.orders.length; a++)for (var o = 0; o < e.orders[a].items.length; o++) {
                t.labels.indexOf(e.orders[a].items[o].category) === -1 && (t.labels.push(e.orders[a].items[o].category), n.push(0));
                var i = t.labels.indexOf(e.orders[a].items[o].category);
                n[i]++
            }
            return t.data.push(n), t
        }

        return {generateSales: n, createLineChartData: a, createPieChartData: o, createBarChartData: i}
    }

    e.$inject = ["$http", "API_CONFIG"], angular.module("app.dashboards").factory("StockService", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o) {
        function l() {
            a.hide()
        }

        function r() {
            a.cancel()
        }

        function s() {
            t.print()
        }

        var d = this;
        d.cancelClick = r, d.okClick = l, d.order = o, d.printClick = s, e.CrruntIsArray = function (e) {
            return angular.isArray(e)
        }, e.dataFeature = function (t) {
            t = $.makeArray(t);
            var n = {};
            return $.each(t, function (t, a) {
                var o = e.CurrentLength(a), i = {}, l = 0, r = {};
                $.each(a, function (e, t) {
                    r[e] = t, l++, l % 4 != 0 && l != o || (i[e] = r, r = {})
                }), n[t] = i
            }), n
        }, e.CurrentLength = function (e) {
            var t = 0;
            for (i in e)t++;
            return console.log({length: t, object: e, type: typeof e, isArray: $.isArray(e)}), t
        }
    }

    e.$inject = ["$scope", "$window", "$log", "$mdDialog", "order"], angular.module("app.dashboards").controller("StockOrderDialogController", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t) {
            e.$broadcast("salesChangeDate", t)
        }

        var n = this;
        n.changeDate = t
    }

    e.$inject = ["$rootScope"], angular.module("app.dashboards").controller("SalesFabController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n() {
            t.start = new moment(o.start), t.end = new moment(o.end), e.hide()
        }

        function a() {
            e.cancel()
        }

        var o = this;
        o.cancelClick = a, o.okClick = n, o.start = t.start.toDate(), o.end = t.end.toDate()
    }

    e.$inject = ["$mdDialog", "range"], angular.module("app.dashboards").controller("DateChangeDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s) {
        function d(e, t) {
            r.show({
                controller: "StockOrderDialogController",
                controllerAs: "vm",
                templateUrl: "app/dashboards/stock/order-dialog.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        function m() {
            c.salesData = s.generateSales(c.dateRange), c.chartLineData = s.createLineChartData(c.salesData), c.chartPieData = s.createPieChartData(c.salesData), c.chartBarData = s.createBarChartData(c.salesData)
        }

        var c = this;
        c.dateRange = {start: moment().startOf("week"), end: moment().endOf("week")}, c.query = {
            order: "planCode",
            limit: 15,
            page: 1
        }, c.openOrder = d, t.$on("salesChangeDate", function (e, t) {
            r.show({
                controller: "DateChangeDialogController",
                controllerAs: "vm",
                templateUrl: "app/dashboards/stock/date-change-dialog.tmpl.html",
                locals: {range: c.dateRange},
                targetEvent: t
            }).then(function () {
                m(), i.show(i.simple().content(l("triTranslate")("Date Range Updated")).position("bottom right").hideDelay(2e3))
            })
        }), m(), c.tableDataShow = function (e, t) {
            var n = $("#tableData"), a = jQuery.makeArray(n.find("th")), o = jQuery.makeArray(n.find("td")), i = [];
            $.each($.merge(a, o), function () {
                var t = $(this);
                $.isArray(e) ? $.each(e, function (e, n) {
                    t.attr("data-val") == n && i.push(t)
                }) : t.attr("data-val") == e && i.push(t)
            }), $.each(i, function () {
                t ? $(this).show() : $(this).hide()
            })
        };
        o(function () {
            var e = [];
            angular.forEach(c.salesData.ordersTitle, function (t, n, a) {
                e.push(n)
            })
        }, 100)
    }

    e.$inject = ["$rootScope", "$scope", "$http", "$q", "$timeout", "$mdToast", "$filter", "$mdDialog", "StockService"], angular.module("app.dashboards").controller("DashboardStockController", e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.whotofollow = [{
            name: "Twitch",
            user: "twitch",
            avatar: "assets/images/avatars/avatar-1.png"
        }, {name: "MaterialUp", user: "materialUP", avatar: "assets/images/avatars/avatar-3.png"}, {
            name: "Bower",
            user: "bower",
            avatar: "assets/images/avatars/avatar-2.png"
        }], e.trends = ["#DescribeTwitterIn3Words", "#OhNoHarry", "#mnimonio3", "#WeForgiveYouAriana", "#FifthHarmonyTODAY", "Omar Sharif", "Go Set a Watchman", "Ηρωδειο", "Ryanair", "Η ΕΡΤ"],
            e.favorites = [{
                name: "Twitch",
                avatar: "assets/images/avatars/avatar-1.png",
                user: "twitch",
                date: moment().subtract(1, "hour"),
                tweet: "We had an absolute blast bringing @E3 to you this year. Check out our video recap."
            }, {
                name: "PixelBucket",
                avatar: "assets/images/avatars/avatar-2.png",
                user: "twitch",
                date: moment().subtract(1, "days"),
                tweet: "Turn a Pencil Sketch Into a Colorful and Dynamic Character Illustration http://bit.ly/1HoJhbN  @TutsPlusDesign"
            }, {
                name: "Webdesigntuts",
                avatar: "assets/images/avatars/avatar-3.png",
                user: "wdtuts",
                date: moment().subtract(2, "days"),
                tweet: "100 people have entered our challenge to win @CodePen & @envatomarket goodies! 2 days left :) http://ow.ly/PqjP9"
            }, {
                name: "BestCSS",
                avatar: "assets/images/avatars/avatar-4.png",
                user: "bestcss",
                date: moment().subtract(3, "days"),
                tweet: "#Site of the Day"
            }, {
                name: "MaterialUP",
                avatar: "assets/images/avatars/avatar-5.png",
                user: "materialup",
                date: moment().subtract(4, "days"),
                tweet: "OnePlus One Mockup PSD - Mockup by @zerpixelung"
            }, {
                name: "Webdesigner Depot",
                avatar: "assets/images/avatars/avatar-6.png",
                user: "DesignerDepot",
                date: moment().subtract(7, "days"),
                tweet: "Semantic UI 2.0: Design beautiful websites quicker http://depot.ly/Pq6oC"
            }]
    }

    angular.module("app.dashboards").controller("DashboardSocialController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(n) {
            var a = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: [],
                result: [],
                aSalseTitle: []
            }, o = t.url + "/sales/OSS/sale_modes";
            return e.get(o).success(function (e, t, n, o) {
                if (200 == e.code) {
                    var i = e.result;
                    a.result = a.result.concat(i), $.each(i[0], function (e, t) {
                        a.aSalseTitle.push(e)
                    })
                }
            }).error(function (e, t, n, a) {
                console.log(e)
            }), a
        }

        function a(e) {
            for (var t = {
                labels: [],
                series: ["Sales"],
                options: {
                    maintainAspectRatio: !1,
                    datasetFill: !1,
                    responsive: !0,
                    scaleShowGridLines: !1,
                    bezierCurve: !0,
                    pointDotRadius: 2,
                    scaleFontColor: "#ffffff",
                    scaleFontSize: 16
                },
                colors: ["#ffffff"],
                data: []
            }, n = [], a = 0; a < e.dayTotals.length; a++)t.labels.push(e.dayTotals[a].date.format("M/D/YY")), n.push(e.dayTotals[a].sales);
            return t.data.push(n), t
        }

        function o(e) {
            for (var t = {labels: [], data: []}, n = 0; n < e.orders.length; n++) {
                t.labels.indexOf(e.orders[n].status) === -1 && (t.labels.push(e.orders[n].status), t.data.push(0));
                var a = t.labels.indexOf(e.orders[n].status);
                t.data[a]++
            }
            return t
        }

        function i(e) {
            for (var t = {
                labels: [],
                series: ["Sales"],
                data: [],
                options: {barShowStroke: !1}
            }, n = [], a = 0; a < e.orders.length; a++)for (var o = 0; o < e.orders[a].items.length; o++) {
                t.labels.indexOf(e.orders[a].items[o].category) === -1 && (t.labels.push(e.orders[a].items[o].category), n.push(0));
                var i = t.labels.indexOf(e.orders[a].items[o].category);
                n[i]++
            }
            return t.data.push(n), t
        }

        return {generateSales: n, createLineChartData: a, createPieChartData: o, createBarChartData: i}
    }

    e.$inject = ["$http", "API_CONFIG"], angular.module("app.dashboards").factory("SalesService", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            a.hide()
        }

        function l() {
            a.cancel()
        }

        function r() {
            t.print()
        }

        var s = this;
        s.cancelClick = l, s.okClick = i, s.order = o, s.printClick = r
    }

    e.$inject = ["$scope", "$window", "$log", "$mdDialog", "order"], angular.module("app.dashboards").controller("SalesOrderDialogController", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t) {
            e.$broadcast("salesChangeDate", t)
        }

        var n = this;
        n.changeDate = t
    }

    e.$inject = ["$rootScope"], angular.module("app.dashboards").controller("SalesFabController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n() {
            t.start = new moment(o.start), t.end = new moment(o.end), e.hide()
        }

        function a() {
            e.cancel()
        }

        var o = this;
        o.cancelClick = a, o.okClick = n, o.start = t.start.toDate(), o.end = t.end.toDate()
    }

    e.$inject = ["$mdDialog", "range"], angular.module("app.dashboards").controller("DateChangeDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r, s) {
        function d(e, t) {
            r.show({
                controller: "SalesOrderDialogController",
                controllerAs: "vm",
                templateUrl: "app/dashboards/stocks/order-dialog.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        function m() {
            c.salesData = s.generateSales(c.dateRange), c.chartLineData = s.createLineChartData(c.salesData), c.chartPieData = s.createPieChartData(c.salesData), c.chartBarData = s.createBarChartData(c.salesData)
        }

        var c = this;
        c.dateRange = {start: moment().startOf("week"), end: moment().endOf("week")}, c.query = {
            order: "planCode",
            limit: 15,
            page: 1
        }, c.openOrder = d, t.$on("salesChangeDate", function (e, t) {
            r.show({
                controller: "DateChangeDialogController",
                controllerAs: "vm",
                templateUrl: "app/dashboards/sales/date-change-dialog.tmpl.html",
                locals: {range: c.dateRange},
                targetEvent: t
            }).then(function () {
                m(), i.show(i.simple().content(l("triTranslate")("Date Range Updated")).position("bottom right").hideDelay(2e3))
            })
        }), m(), c.tableDataShow = function (e, t) {
            var n = $("#tableData"), a = jQuery.makeArray(n.find("th")), o = jQuery.makeArray(n.find("td")), i = [];
            $.each($.merge(a, o), function () {
                var t = $(this);
                $.isArray(e) ? $.each(e, function (e, n) {
                    t.attr("data-val") == n && i.push(t)
                }) : t.attr("data-val") == e && i.push(t)
            }), $.each(i, function () {
                t ? $(this).show() : $(this).hide()
            })
        };
        o(function () {
            var e = [];
            angular.forEach(c.salesData.ordersTitle, function (t, n, a) {
                e.push(n)
            })
        }, 100)
    }

    e.$inject = ["$rootScope", "$scope", "$http", "$q", "$timeout", "$mdToast", "$filter", "$mdDialog", "SalesService"], angular.module("app.dashboards").controller("DashboardSalesController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o) {
        function i() {
            t(function () {
                a.$broadcast("newMailNotification");
                var e = n.simple().textContent("You have new email messages!").action("View").highlightAction(!0).position("bottom right");
                n.show(e).then(function (e) {
                    "ok" == e && o.go("triangular.email.inbox")
                })
            }, 5e3)
        }

        var l = this;
        l.init = i, i()
    }

    e.$inject = ["$scope", "$timeout", "$mdToast", "$rootScope", "$state"], angular.module("app.dashboards").controller("DashboardPerformanceController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        n.navigator.platform.indexOf("Win") !== -1 && (e.bodyClasses = ["os-windows"])
    }

    e.$inject = ["$rootScope", "$timeout", "$window"], angular.module("triangular").run(e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            i.languages.push(e)
        }

        function t(e) {
            i.logo = e
        }

        function n(e) {
            i.name = e
        }

        function a(e) {
            i.copyright = e
        }

        function o(e) {
            i.version = e
        }

        var i = {languages: [], name: "", logo: "", copyright: "", version: ""};
        this.addLanguage = e, this.setLogo = t, this.setName = n, this.setCopyright = a, this.setVersion = o, this.$get = function () {
            return {
                languages: i.languages,
                name: i.name,
                copyright: i.copyright,
                logo: i.logo,
                version: i.version,
                defaultSkin: i.defaultSkin
            }
        }
    }

    angular.module("triangular").provider("triSettings", e)
}(),function () {
    "use strict";
    function e(e) {
        e.state("triangular", {
            "abstract": !0,
            views: {
                root: {
                    templateUrl: "app/triangular/layouts/states/triangular/triangular.tmpl.html",
                    controller: "TriangularStateController",
                    controllerAs: "stateController"
                }, "sidebarLeft@triangular": {
                    templateProvider: ["$templateRequest", "triLayout", function (e, t) {
                        if (angular.isDefined(t.layout.sidebarLeftTemplateUrl))return e(t.layout.sidebarLeftTemplateUrl)
                    }], controllerProvider: ["triLayout", function (e) {
                        return e.layout.sidebarLeftController
                    }], controllerAs: "vm"
                }, "sidebarRight@triangular": {
                    templateProvider: ["$templateRequest", "triLayout", function (e, t) {
                        if (angular.isDefined(t.layout.sidebarRightTemplateUrl))return e(t.layout.sidebarRightTemplateUrl)
                    }], controllerProvider: ["triLayout", function (e) {
                        return e.layout.sidebarRightController
                    }], controllerAs: "vm"
                }, "toolbar@triangular": {
                    templateProvider: ["$templateRequest", "triLayout", function (e, t) {
                        if (angular.isDefined(t.layout.toolbarTemplateUrl))return e(t.layout.toolbarTemplateUrl)
                    }], controllerProvider: ["triLayout", function (e) {
                        return e.layout.toolbarController
                    }], controllerAs: "vm"
                }, "loader@triangular": {
                    templateProvider: ["$templateRequest", "triLayout", function (e, t) {
                        if (angular.isDefined(t.layout.loaderTemplateUrl))return e(t.layout.loaderTemplateUrl)
                    }], controllerProvider: ["triLayout", function (e) {
                        return e.layout.loaderController
                    }], controllerAs: "loader"
                }
            }
        })
    }

    e.$inject = ["$stateProvider"], angular.module("triangular").config(e)
}(),function () {
    "use strict";
    angular.module("app.translate", ["pascalprecht.translate", "LocalStorageModule"])
}(),function () {
    "use strict";
    function e(e, t, n) {
        var a = [{name: "Chinese", key: "zh"}, {name: "English", key: "en"}, {
            name: "French",
            key: "fr"
        }, {name: "Portuguese", key: "pt"}];
        e.useLoader("$translatePartialLoader", {urlTemplate: "{part}/i18n/{lang}.json"}), t.addPart("app"), e.useSanitizeValueStrategy("sanitize"), e.useLoaderCache(!0);
        var o = [];
        for (var i in a)o.push(a[i].key), n.addLanguage({name: a[i].name, key: a[i].key});
        e.registerAvailableLanguageKeys(o, {en_US: "en", en_UK: "en"}).use("en"), e.useLocalStorage()
    }

    e.$inject = ["$translateProvider", "$translatePartialLoaderProvider", "triSettingsProvider"], angular.module("app.translate").config(e)
}(),function () {
    "use strict";
    angular.module("seed-module", [])
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.seed-page", {
            url: "/seed-module/seed-page",
            templateUrl: "app/seed-module/seed-page.tmpl.html",
            controller: "SeedPageController",
            controllerAs: "vm",
            data: {layout: {contentClass: "layout-column"}}
        }), t.addMenu({
            name: "Seed Module",
            icon: "fa fa-tree",
            type: "dropdown",
            priority: 1.1,
            children: [{name: "Start Page", state: "triangular.seed-page", type: "link"}]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("seed-module").config(e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.testData = ["triangular", "is", "great"]
    }

    angular.module("seed-module").controller("SeedPageController", e)
}(),function () {
    "use strict";
    angular.module("app.purchase", [])
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.purchase-page", {
            url: "/purchase/purchase-page",
            templateUrl: "app/purchase/purchase-page.tmpl.html",
            controller: "PurchasePageController",
            controllerAs: "vm",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.purchase-orders", {
            url: "/purchase/orders",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/purchase/purchase-orders.tmpl.html",
                    controller: "DashboardSalesController",
                    controllerAs: "vm"
                }
            }
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.purchase").config(e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.testData = ["supply", "is", "great"]
    }

    angular.module("app.purchase").controller("PurchasePageController", e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.testData = ["Order", "is", "great"]
    }

    angular.module("app.purchase").controller("PurchaseOrdersController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        function a() {
            return r
        }

        function o() {
            return t.get("app/permission/data/users.json")
        }

        function i(t) {
            var a = e.defer(), o = !1;
            return angular.forEach(r.roles, function (e) {
                if (n.hasRoleDefinition(e)) {
                    var a = n.getStore();
                    angular.isDefined(a[e]) && -1 !== a[e].validationFunction.indexOf(t) && (o = !0)
                }
            }), o ? a.resolve() : a.reject(), a.promise
        }

        function l(e) {
            return o().then(function (t) {
                var n = a();
                return angular.forEach(t.data, function (t) {
                    t.username === e && (n = t, r = t)
                }), n
            })
        }

        var r = {
            displayName: "Christos",
            username: "christos",
            avatar: "assets/images/avatars/avatar-5.png",
            roles: ["SUPERADMIN"]
        }, s = {getCurrentUser: a, getUsers: o, hasPermission: i, login: l};
        return s
    }

    e.$inject = ["$q", "$http", "RoleStore"], angular.module("app.permission").factory("UserService", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i) {
        function l() {
            n.go("401")
        }

        var r = t.get("tri-user");
        angular.isDefined(r) && i.login(r);
        var s = ["viewEmail", "viewGitHub", "viewCalendar", "viewLayouts", "viewTodo", "viewElements", "viewAuthentication", "viewCharts", "viewMaps"];
        a.defineManyPermissions(s, function (e) {
            return i.hasPermission(e)
        }), o.defineManyRoles({
            SUPERADMIN: ["viewEmail", "viewGitHub", "viewCalendar", "viewLayouts", "viewTodo", "viewElements", "viewAuthentication", "viewCharts", "viewMaps"],
            ADMIN: ["viewLayouts", "viewTodo", "viewElements", "viewAuthentication", "viewCharts", "viewMaps"],
            USER: ["viewAuthentication", "viewCharts", "viewMaps"],
            ANONYMOUS: []
        });
        var d = e.$on("$stateChangePermissionDenied", l);
        e.$on("$destroy", function () {
            d()
        })
    }

    e.$inject = ["$rootScope", "$cookies", "$state", "PermissionStore", "RoleStore", "UserService"], angular.module("app.permission").run(e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.permission", {
            url: "/permission",
            templateUrl: "app/permission/pages/permission.tmpl.html",
            controller: "PermissionController",
            controllerAs: "vm",
            resolve: {
                users: ["UserService", function (e) {
                    return e.getUsers()
                }]
            },
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.permission-define", {
            url: "/permission/define",
            templateUrl: "app/permission/pages/permission-define.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.permission-routes", {
            url: "/permission/routes",
            templateUrl: "app/permission/pages/permission-routes.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.permission-views", {
            url: "/permission/views",
            templateUrl: "app/permission/pages/permission-views.tmpl.html",
            data: {layout: {contentClass: "layout-column"}}
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.permission").config(e)
}(),function () {
    "use strict";
    angular.module("app.inventory", [])
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i) {
        function l(t) {
            return e.get("http://localhost:9000/metas/plancodes/" + t).then(function (e) {
                return e.data.result
            })
        }

        function r() {
            n.hide()
        }

        function s() {
            n.cancel()
        }

        function d() {
            t.print()
        }

        function m() {
            function t(e) {
                i.setLoaderActive(!1), angular.isDefined(e.data.error) && u(e.data.error)
            }

            i.setLoaderActive(!0), e.put(oxygennaAPIUrl + "/register-github-access", p.data).then(function () {
                i.setLoaderActive(!1), u("Success!  Check your GitHub email for your invite.")
            }, t)
        }

        function c() {
            p.data.purchaseCode = "", p.data.cluster = ""
        }

        function u(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var p = this;
        p.data = {
            id: "11711437",
            purchaseCode: "",
            cluster: ""
        }, p.cancelClick = s, p.okClick = r, p.order = a, p.printClick = d, p.clusterSearch = l, p.register = m, c()
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService"], angular.module("app.inventory").controller("PlanCodeClusterEditV2DialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        function a() {
            t.hide()
        }

        function o() {
            t.cancel()
        }

        function i() {
            e.print()
        }

        var l = this;
        l.cancelClick = o, l.okClick = a, l.order = n, l.printClick = i
    }

    e.$inject = ["$window", "$mdDialog", "order"], angular.module("app.inventory").controller("PlanCodeClusterEditDialogController", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            for (var n = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: []
            }, a = e.start.toDate(), o = e.end.toDate(), i = a.getTime(); i < o.getTime(); i += 864e5) {
                var l = Math.floor(100 * Math.random()) + 0, r = t(l, i);
                n.orders = n.orders.concat(r.orders), n.dayTotals.push({
                    date: moment(i),
                    sales: l,
                    earnings: r.totalEarnings
                }), n.totalSales += l, n.totalEarnings += r.totalEarnings
            }
            return n
        }

        function t(e, t) {
            for (var a = {orders: [], totalEarnings: 0}, o = 0; o < e; o++) {
                var i = n(t);
                a.totalEarnings += i.total, a.orders.push(i)
            }
            return a
        }

        function n(e) {
            for (var t = ["complete", "pending", "delivered"], n = ["Loraine Heidenreich", "Amie Hane", "Rosalyn Heller V", "Dr. Kristian Boyle II", "Clarabelle Weber", "Rowland Emard", "Kitty Heller DVM", "Winston Frami", "Newton Welch", "Trudie Feest", "Vivien Sauer", "Cleta Kuhn", "Ruby Shields", "Dr. Moises Beahan DDS", "Miss Shanel Jenkins DVM", "Kitty Heller DVM", "Vivien Sauer", "Clara Cremin", "Eunice Morissette", "Arch Sporer IV", "Miss Shanel Jenkins DVM", "Ryann Balistreri I", "Norma Yost DDS", "Manley Roberts", "Ruby Shields", "Miss Lavada Runolfsson", "Kira Dooley", "Meredith Ebert DDS"], o = ["johnson.althea@gleichner.net", "will.rhea@weber.biz", "roslyn75@keebler.com", "okon.glenda@hamill.com", "estroman@cruickshank.org", "victoria41@hartmann.com", "bogisich.janice@wilkinson.com", "bryce97@kris.com", "noe59@king.com", "wiza.litzy@kozey.com", "oconner.cortney@gmail.com", "kub.fannie@hotmail.com", "adrian00@gutkowski.com", "justice69@yahoo.com", "torphy.toney@yahoo.com", "bogisich.janice@wilkinson.com", "oconner.cortney@gmail.com", "orval63@gmail.com", "jaime94@gmail.com", "olaf69@okeefe.com", "torphy.toney@yahoo.com", "bernhard.bruen@marvin.com", "otilia61@hotmail.com", "bogan.lelia@bins.info", "adrian00@gutkowski.com", "yazmin76@hotmail.com", "kglover@hotmail.com", "erick.hermann@larkin.net", "bernhard.bruen@marvin.com", "bradly90@corkery.info", "orval63@gmail.com", "olaf69@okeefe.com"], i = ["AY1", "AY2", "AY3"], l = ["1001EC", "1002EC", "1002NC"], r = {
                id: a(),
                buyer: o[Math.floor(Math.random() * o.length)],
                name: n[Math.floor(Math.random() * n.length)],
                date: moment(e + Math.floor(864e5 * Math.random()) + 0),
                items: [],
                subTotal: 0,
                status: t[Math.floor(Math.random() * t.length)],
                tax: 0,
                total: 0,
                cluster: i[Math.floor(Math.random() * i.length)],
                plancode: l[Math.floor(Math.random() * l.length)]
            }, s = Math.floor(5 * Math.random()) + 1, d = ["Super", "Amazing", "Great", "New"], m = ["T-Shirt", "Book", "Desk", "Coat", "Chair", "Hat", "Jeans"], c = ["Red", "Green", "Blue", "Pink", "Yellow", "Orange"], u = ["Books", "Electronics", "Home", "Toys", "Clothes", "Shoes", "Mobiles"], p = 0; p < s; p++) {
                var g = {
                    name: d[Math.floor(Math.random() * d.length)] + " " + c[Math.floor(Math.random() * c.length)] + " " + m[Math.floor(Math.random() * m.length)],
                    category: u[Math.floor(Math.random() * u.length)],
                    price: (99 * Math.random() + 1).toFixed(2)
                };
                r.subTotal += parseFloat(g.price), r.items.push(g)
            }
            return r.tax = .2 * r.subTotal, r.total += r.subTotal + r.tax, r
        }

        function a() {
            for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = 0; n < 5; n++)e += t.charAt(Math.floor(Math.random() * t.length));
            return e
        }

        return {generatePlancodes: e}
    }

    angular.module("app.inventory").factory("ConfigService", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.inventory-plancode", {
            url: "/inventory/inventory-plancode",
            templateUrl: "app/inventory/inventory-plancode.tmpl.html",
            controller: "PurchasePageController",
            controllerAs: "gCluster",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.inventory-general", {
            url: "/inventory/inventory-general",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/inventory/inventory-general.tmpl.html",
                    controller: "InventoryGeneralController",
                    controllerAs: "vm"
                }
            }
        }).state("triangular.inventory-purchase", {
            url: "/inventory/purchase",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/inventory/purchase/inventory-purchase.tmpl.html",
                    controller: "InventoryPurchaseController",
                    controllerAs: "vm"
                }
            }
        }), t.addMenu({
            name: "供给管理",
            icon: "zmdi zmdi-chart",
            type: "dropdown",
            priority: 1.1,
            children: [{name: "库存", state: "triangular.dashboard-stock", type: "link"}, {
                name: "售卖",
                state: "triangular.dashboard-sales",
                type: "link"
            }]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.inventory").config(e)
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.testData = ["supply", "is", "great"]
    }

    angular.module("app.inventory").controller("ConfigPlancodeController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(e, t) {
            i.show({
                controller: "PlanCodeClusterEditDialogController",
                controllerAs: "gCluster",
                templateUrl: "app/inventory/order-dialog.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        function s() {
            m.planCodesData = l.generatePlancodes(m.dateRange)
        }

        function d(e, t) {
            i.show({
                controller: "PlanCodeClusterEditV2DialogController",
                controllerAs: "gCluster",
                templateUrl: "app/inventory/order-edit.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        var m = this;
        m.dateRange = {start: moment().startOf("week"), end: moment().endOf("week")}, m.query = {
            order: "date",
            limit: 5,
            page: 1
        }, m.editOrder = r, m.editOrderV2 = d, e.$on("salesChangeDate", function (e, t) {
            i.show({
                controller: "DateChangeDialogController",
                controllerAs: "gCluster",
                templateUrl: "app/examples/dashboards/sales/date-change-dialog.tmpl.html",
                locals: {range: m.dateRange},
                targetEvent: t
            }).then(function () {
                s(), a.show(a.simple().content(o("triTranslate")("Date Range Updated")).position("bottom right").hideDelay(2e3))
            })
        }), s()
    }

    e.$inject = ["$scope", "$q", "$timeout", "$mdToast", "$filter", "$mdDialog", "ConfigService"], angular.module("app.inventory").controller("InventoryGeneralController", e)
}(),function () {
    "use strict";
    angular.module("app.inv", [])
}(),function () {
    "use strict";
    function e(e, t, n, a) {
        function o() {
            var t;
            e.$watch("vm.query.filter", function (e, n) {
                n || (t = r.query.page), e !== n && (r.query.page = 1), e || (r.query.page = t), r.getUsers()
            })
        }

        function i() {
            r.promise = a.getUsers(r.query), r.promise.then(function (e) {
                r.users = e.data, r.users.total_count = 19, console.log(r.users), console.log(r.users.result), console.log(r.users.code), console.log(r.users.total_count)
            })
        }

        function l() {
            r.filter.show = !1, r.query.filter = "", r.filter.form.$dirty && r.filter.form.$setPristine()
        }

        var r = this;
        r.query = {filter: "", limit: "30", order: "-id", page: 1}, r.selected = [], r.columns = {
            avatar: "Avatar",
            login: "Login",
            id: "ID"
        }, r.filter = {options: {debounce: 500}}, r.getUsers = i, r.removeFilter = l, o()
    }

    e.$inject = ["$scope", "$timeout", "$q", "GithubService"], angular.module("app.inv").controller("TablesAdvancedController", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t) {
            "id" === t.order ? "desc" : "asc";
            return e.get("http://localhost:9000/metas/plancodes/").success(function (e) {
                return e
            })
        }

        return {getUsers: t}
    }

    angular.module("app.inv").factory("GithubService", e), e.$inject = ["$http", "$q"]
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.columns = [{title: "", field: "thumb", sortable: !1, filter: "tableImage"}, {
            title: "Name",
            field: "name",
            sortable: !0
        }, {title: "Description", field: "description", sortable: !0}, {
            title: "Date of Birth",
            field: "birth",
            sortable: !0
        }], e.contents = [{
            thumb: "assets/images/avatars/avatar-1.png",
            name: "Chris Doe",
            description: "Developer",
            birth: "Jun 5, 1994"
        }, {
            thumb: "assets/images/avatars/avatar-2.png",
            name: "Ann Doe",
            description: "Commerce",
            birth: "Jul 15, 1993"
        }, {
            thumb: "assets/images/avatars/avatar-3.png",
            name: "Mark Ronson",
            description: "Designer",
            birth: "Jan 27, 1984"
        }, {
            thumb: "assets/images/avatars/avatar-4.png",
            name: "Eric Doe",
            description: "Human Resources",
            birth: "Feb 3, 1985"
        }, {
            thumb: "assets/images/avatars/avatar-5.png",
            name: "John Doe",
            description: "Commerce",
            birth: "Sep 5, 1978"
        }, {
            thumb: "assets/images/avatars/avatar-1.png",
            name: "George Doe",
            description: "Media",
            birth: "Jun 23, 1996"
        }, {
            thumb: "assets/images/avatars/avatar-2.png",
            name: "Ann Ronson",
            description: "Commerce",
            birth: "Aug 16, 1995"
        }, {
            thumb: "assets/images/avatars/avatar-3.png",
            name: "Adam Ronson",
            description: "Developer",
            birth: "Jan 7, 1987"
        }, {
            thumb: "assets/images/avatars/avatar-4.png",
            name: "Hansel Doe",
            description: "Social Media",
            birth: "Feb 13, 1977"
        }, {thumb: "assets/images/avatars/avatar-5.png", name: "Tony Doe", description: "CEO", birth: "Sep 29, 1970"}]
    }

    angular.module("app.inv").controller("Tables1Controller", e)
}(),function () {
    "use strict";
    angular.module("app.examples", ["app.examples.authentication", "app.examples.calendar", "app.examples.charts", "app.examples.dashboards", "app.examples.elements", "app.examples.email", "app.examples.extras", "app.examples.forms", "app.examples.github", "app.examples.layouts", "app.examples.maps", "app.examples.menu", "app.examples.todo", "app.examples.ui"])
}(),function () {
    "use strict";
    angular.module("app.config", [])
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            n.hide()
        }

        function s() {
            n.cancel()
        }

        function d() {
            t.print()
        }

        function m() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), u(e.data.error), angular.isDefined(e.data.error) && u(e.data.error)
            }

            i.setLoaderActive(!0);
            var n = l.url + "/metas/products?";
            e.post(n + "product_code=" + p.data.productCode + "&product_name=" + p.data.productName + "&product_class=" + p.data.productClass + "&memo=" + p.memo).then(function () {
                i.setLoaderActive(!1), u("Add Product Info Successfully!")
            }, t)
        }

        function c() {
            p.data.productCode = "", p.data.productName = "", p.data.productClass = "", p.data.memo = ""
        }

        function u(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var p = this;
        p.data = {
            productCode: "",
            productName: "",
            productClass: "",
            memo: ""
        }, p.cancelClick = s, p.okClick = r, p.order = a, p.printClick = d, p.register = m, c()
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("ProductEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(t) {
            var n = l.url + "/metas/citys/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function s(t) {
            var n = l.url + "/metas/azones/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function d(t) {
            var n = l.url + "/metas/businesses/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function m(t) {
            var n = l.url + "/metas/products/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function c(t) {
            var n = l.url + "/metas/nets/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function u() {
            n.hide()
        }

        function p() {
            n.cancel()
        }

        function g() {
            t.print()
        }

        function b() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), v(e.data.error), angular.isDefined(e.data.error) && v(e.data.error)
            }

            i.setLoaderActive(!0), f.data.planCode = f.data.businessCode.businessCode + f.data.productCode.productCode + f.data.netCode.netCode + f.data.cityCode.cityCode + f.data.azCode.azCode, console.log(f.data.planCode), e.post(y + "plan_code=" + f.data.planCode + "&minus_plan_code=" + f.data.minusPlanCode + "&city_code=" + f.data.cityCode.cityCode + "&az_code=" + f.data.azCode.azCode + "&business_code=" + f.data.businessCode.businessCode + "&product_code=" + f.data.productCode.productCode + "&net_code=" + f.data.netCode.netCode + "&memo=" + f.memo).then(function () {
                i.setLoaderActive(!1), v("Add PlancodeInfo Successfully!")
            }, t)
        }

        function h() {
            f.data.planCode = "", f.data.minusPlanCode = "", f.data.cityCode = "", f.data.azCode = "", f.data.businessCode = "", f.data.productCode = "", f.data.netCode = ""
        }

        function v(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var f = this;
        f.data = {
            planCode: "",
            minusPlanCode: "",
            cityCode: "",
            businessCode: "",
            azCode: "",
            productCode: "",
            netCode: ""
        }, f.cancelClick = p, f.okClick = u, f.order = a, f.printClick = g, f.cityCodeSearch = r, f.azCodeSearch = s, f.businessCodeSearch = d, f.productCodeSearch = m, f.netCodeSearch = c, f.register = b, h();
        var y = l.url + "/metas/plancodes?"
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("PlanCodeEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(t) {
            var n = l.url + "/metas/plancodes/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function s() {
            n.hide()
        }

        function d() {
            n.cancel()
        }

        function m() {
            t.print()
        }

        function c() {
            function t(e) {
                i.setLoaderActive(!1), angular.isDefined(e.data.error) && p(e.data.error)
            }

            i.setLoaderActive(!0), e.put(oxygennaAPIUrl + "/register-github-access", g.data).then(function () {
                i.setLoaderActive(!1), p("Success!  Check your GitHub email for your invite.")
            }, t)
        }

        function u() {
            g.data.purchaseCode = "", g.data.cluster = ""
        }

        function p(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var g = this;
        g.data = {
            id: "11711437",
            purchaseCode: "",
            cluster: ""
        }, g.cancelClick = d, g.okClick = s, g.order = a, g.printClick = m, g.clusterSearch = r, g.register = c, u()
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("PlanCodeClusterEditV2DialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        function a() {
            t.hide()
        }

        function o() {
            t.cancel()
        }

        function i() {
            e.print()
        }

        var l = this;
        l.cancelClick = o, l.okClick = a, l.order = n, l.printClick = i
    }

    e.$inject = ["$window", "$mdDialog", "order"], angular.module("app.config").controller("PlanCodeClusterEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            n.hide()
        }

        function s() {
            n.cancel()
        }

        function d() {
            t.print()
        }

        function m() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), u(e.data.error), angular.isDefined(e.data.error) && u(e.data.error)
            }

            i.setLoaderActive(!0), e.post(g + "net_code=" + p.data.netCode + "&net_name=" + p.data.netName + "&memo=" + p.memo).then(function () {
                i.setLoaderActive(!1), u("Add NetInfo Successfully!")
            }, t)
        }

        function c() {
            p.data.netCode = "", p.data.netName = "", p.data.memo = ""
        }

        function u(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var p = this;
        p.data = {
            netCode: "",
            netName: "",
            memo: ""
        }, p.cancelClick = s, p.okClick = r, p.order = a, p.printClick = d, p.register = m, c();
        var g = l.url + "/metas/nets?"
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("NetEditDialogController", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            for (var n = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: []
            }, a = e.start.toDate(), o = e.end.toDate(), i = a.getTime(); i < o.getTime(); i += 864e5) {
                var l = Math.floor(100 * Math.random()) + 0, r = t(l, i);
                n.orders = n.orders.concat(r.orders), n.dayTotals.push({
                    date: moment(i),
                    sales: l,
                    earnings: r.totalEarnings
                }), n.totalSales += l, n.totalEarnings += r.totalEarnings
            }
            return n
        }

        function t(e, t) {
            for (var a = {orders: [], totalEarnings: 0}, o = 0; o < e; o++) {
                var i = n(t);
                a.totalEarnings += i.total, a.orders.push(i)
            }
            return a
        }

        function n(e) {
            for (var t = ["complete", "pending", "delivered"], n = ["Loraine Heidenreich", "Amie Hane", "Rosalyn Heller V", "Dr. Kristian Boyle II", "Clarabelle Weber", "Rowland Emard", "Kitty Heller DVM", "Winston Frami", "Newton Welch", "Trudie Feest", "Vivien Sauer", "Cleta Kuhn", "Ruby Shields", "Dr. Moises Beahan DDS", "Miss Shanel Jenkins DVM", "Kitty Heller DVM", "Vivien Sauer", "Clara Cremin", "Eunice Morissette", "Arch Sporer IV", "Miss Shanel Jenkins DVM", "Ryann Balistreri I", "Norma Yost DDS", "Manley Roberts", "Ruby Shields", "Miss Lavada Runolfsson", "Kira Dooley", "Meredith Ebert DDS"], o = ["johnson.althea@gleichner.net", "will.rhea@weber.biz", "roslyn75@keebler.com", "okon.glenda@hamill.com", "estroman@cruickshank.org", "victoria41@hartmann.com", "bogisich.janice@wilkinson.com", "bryce97@kris.com", "noe59@king.com", "wiza.litzy@kozey.com", "oconner.cortney@gmail.com", "kub.fannie@hotmail.com", "adrian00@gutkowski.com", "justice69@yahoo.com", "torphy.toney@yahoo.com", "bogisich.janice@wilkinson.com", "oconner.cortney@gmail.com", "orval63@gmail.com", "jaime94@gmail.com", "olaf69@okeefe.com", "torphy.toney@yahoo.com", "bernhard.bruen@marvin.com", "otilia61@hotmail.com", "bogan.lelia@bins.info", "adrian00@gutkowski.com", "yazmin76@hotmail.com", "kglover@hotmail.com", "erick.hermann@larkin.net", "bernhard.bruen@marvin.com", "bradly90@corkery.info", "orval63@gmail.com", "olaf69@okeefe.com"], i = ["AY1", "AY2", "AY3"], l = ["1001EC", "1002EC", "1002NC"], r = {
                id: a(),
                buyer: o[Math.floor(Math.random() * o.length)],
                name: n[Math.floor(Math.random() * n.length)],
                date: moment(e + Math.floor(864e5 * Math.random()) + 0),
                items: [],
                subTotal: 0,
                status: t[Math.floor(Math.random() * t.length)],
                tax: 0,
                total: 0,
                cluster: i[Math.floor(Math.random() * i.length)],
                plancode: l[Math.floor(Math.random() * l.length)]
            }, s = Math.floor(5 * Math.random()) + 1, d = ["Super", "Amazing", "Great", "New"], m = ["T-Shirt", "Book", "Desk", "Coat", "Chair", "Hat", "Jeans"], c = ["Red", "Green", "Blue", "Pink", "Yellow", "Orange"], u = ["Books", "Electronics", "Home", "Toys", "Clothes", "Shoes", "Mobiles"], p = 0; p < s; p++) {
                var g = {
                    name: d[Math.floor(Math.random() * d.length)] + " " + c[Math.floor(Math.random() * c.length)] + " " + m[Math.floor(Math.random() * m.length)],
                    category: u[Math.floor(Math.random() * u.length)],
                    price: (99 * Math.random() + 1).toFixed(2)
                };
                r.subTotal += parseFloat(g.price), r.items.push(g)
            }
            return r.tax = .2 * r.subTotal, r.total += r.subTotal + r.tax, r
        }

        function a() {
            for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = 0; n < 5; n++)e += t.charAt(Math.floor(Math.random() * t.length));
            return e
        }

        return {generatePlancodes: e}
    }

    angular.module("app.config").factory("ConfigService", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.config-plancode", {
            url: "/config/config-plancode",
            templateUrl: "app/config/config-plancode.tmpl.html",
            controller: "PlancodeController",
            controllerAs: "vm",
            data: {layout: {contentClass: "layout-column"}}
        }).state("triangular.config-cluster", {
            url: "/config/config-cluster",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/config/config-cluster.tmpl.html",
                    controller: "ConfigClusterController",
                    controllerAs: "gCluster"
                }
            }
        }), t.addMenu({
            name: "数据管理",
            icon: "fa fa-tree",
            type: "dropdown",
            priority: 1.1,
            children: [{name: "PlanCode", state: "triangular.config-plancode", type: "link"}, {
                name: "PlanCode Cluster",
                state: "triangular.config-cluster",
                type: "link"
            }]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.config").config(e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getProduct()
            })
        }

        function d() {
            g.promise = l.getProduct(r.url, g.query), g.promise.then(function (e) {
                g.users = e.data.result
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "ProductEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/product-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.selected[0].productCode);
            var o = r.url + "/metas/products/remove/";
            e.post(o + g.selected[0].productCode).success(function () {
                s(), p("ProductInfo Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {
            filter: "",
            limit: "30",
            order: "product_code",
            page: 1
        }, g.selected = [], g.columns = {
            productCode: "ProductCode",
            productName: "ProductName",
            productClass: "ProductClass",
            memo: "memo"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getProduct = d, g.addItem = c, g.removeItem = u, s()
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("ProductController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i) {
        function l() {
            var t;
            e.$watch("vm.query.filter", function (e, n) {
                n || (t = m.query.page), e !== n && (m.query.page = 1), e || (m.query.page = t), m.getUsers()
            })
        }

        function r() {
            m.promise = o.getUsers(i.url, m.query), m.promise.then(function (e) {
                m.users = e.data, m.users.total_count = 19, console.log(m.users), console.log(m.users.result), console.log(m.users.code), console.log(m.users.total_count)
            })
        }

        function s() {
            m.filter.show = !1, m.query.filter = "", m.filter.form.$dirty && m.filter.form.$setPristine()
        }

        function d(e) {
            a.show({
                controller: "PlanCodeEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/plancode-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        var m = this;
        m.query = {
            filter: "",
            limit: "30",
            order: "planCode",
            page: 1
        }, m.selected = [], m.columns = {
            planCode: "PlanCode",
            minusPlanCode: "MinusPlanCode",
            cityCode: "cityCode"
        }, m.filter = {options: {debounce: 500}}, m.getUsers = r, m.removeFilter = s, m.addItem = d, l()
    }

    e.$inject = ["$scope", "$timeout", "$q", "$mdDialog", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("PlancodeController", e)
}(),function () {
    "use strict";
    function e(e) {
        function t(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/plancodes?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        function n(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/azones?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        function a(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/citys?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        function o(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/businesses?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        function i(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/products?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        function l(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/nets?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        function r(t, n) {
            var a = ("id" === n.order ? "desc" : "asc", t + "/metas/plan_clusters?order=" + n.order + "&per_page=" + n.limit + "&page=" + n.page);
            return e.get(a).success(function (e) {
                return e
            })
        }

        return {getPlanCode: t, getAzone: n, getCity: a, getBusiness: o, getProduct: i, getNet: l, getClusterMapping: r}
    }

    angular.module("app.config").factory("PlancodeService", e), e.$inject = ["$http", "$q"]
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getPlanCode()
            })
        }

        function d() {
            g.promise = l.getPlanCode(r.url, g.query), g.promise.then(function (e) {
                console.log(e), g.users = e.data.result
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "PlanCodeEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/plancode-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.selected[0].planCode), e.post(b + g.selected[0].planCode).success(function () {
                s(), p("PlanCode Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {
            filter: "",
            limit: "1000",
            order: "plan_code",
            page: 1
        }, g.selected = [], g.columns = {
            planCode: "PlanCode",
            minusPlanCode: "MinusPlanCode",
            cityCode: "CityCode",
            azCode: "AzCode",
            businessCode: "BusinessCode",
            productCode: "ProductCode",
            netCode: "NetCode",
            memo: "memo"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getPlanCode = d, g.addItem = c, g.removeItem = u, s();
        var b = r.url + "/metas/plancodes/remove/"
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("PlanCodeInfoController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getNet()
            })
        }

        function d() {
            g.promise = l.getNet(r.url, g.query), g.promise.then(function (e) {
                g.users = e.data.result
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "NetEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/net-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.selected[0].netCode);
            var o = r.url + "/metas/nets/remove/";
            e.post(o + g.selected[0].netCode).success(function () {
                s(), p("NetInfo Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {
            filter: "",
            limit: "30",
            order: "net_code",
            page: 1
        }, g.selected = [], g.columns = {
            netCode: "NetCode",
            netName: "NetName",
            memo: "Memo"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getNet = d, g.addItem = c, g.removeItem = u, s()
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("NetController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(e, t) {
            i.show({
                controller: "PlanCodeClusterEditDialogController",
                controllerAs: "gCluster",
                templateUrl: "app/config/order-dialog.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        function s() {
            m.planCodesData = l.generatePlancodes(m.dateRange)
        }

        function d(e, t) {
            i.show({
                controller: "PlanCodeClusterEditV2DialogController",
                controllerAs: "gCluster",
                templateUrl: "app/config/order-edit.tmpl.html",
                locals: {order: e},
                targetEvent: t
            })
        }

        var m = this;
        m.dateRange = {start: moment().startOf("week"), end: moment().endOf("week")}, m.query = {
            order: "date",
            limit: 5,
            page: 1
        }, m.editOrder = r, m.editOrderV2 = d, e.$on("salesChangeDate", function (e, t) {
            i.show({
                controller: "DateChangeDialogController",
                controllerAs: "gCluster",
                templateUrl: "app/examples/dashboards/sales/date-change-dialog.tmpl.html",
                locals: {range: m.dateRange},
                targetEvent: t
            }).then(function () {
                s(), a.show(a.simple().content(o("triTranslate")("Date Range Updated")).position("bottom right").hideDelay(2e3))
            })
        }), s()
    }

    e.$inject = ["$scope", "$q", "$timeout", "$mdToast", "$filter", "$mdDialog", "ConfigService"], angular.module("app.config").controller("ConfigClusterController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getClusterMapping()
            })
        }

        function d() {
            g.promise = l.getClusterMapping(r.url, g.query), g.promise.then(function (e) {
                g.users = e.data.result, console.log(g.users)
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "ClusterMappingEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/cluster-mapping-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.selected[0].clusterName);
            var o = r.url + "/metas/plan_clusters/remove/";
            e.post(o + g.selected[0].clusterName).success(function () {
                s(), p("PlanCluster Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {
            filter: "",
            limit: "20",
            order: "-plan_code",
            page: 1
        }, g.selected = [], g.columns = {
            planCode: "PlanCode",
            clusterName: "ClusterName",
            memo: "memo"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getClusterMapping = d, g.addItem = c, g.removeItem = u, g.testData = l.testData, console.log(g.testData), s()
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("ClusterMappingController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getCity()
            })
        }

        function d() {
            g.promise = l.getCity(r.url, g.query), g.promise.then(function (e) {
                g.users = e.data.result
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "CityEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/city-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.selected[0].cityCode);
            var o = r.url + "/metas/citys/remove/";
            e.post(o + g.selected[0].cityCode).success(function () {
                s(), p("CityCode Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {
            filter: "",
            limit: "30",
            order: "city_code",
            page: 1
        }, g.selected = [], g.columns = {
            cityCode: "Code",
            cityEnName: "English Name",
            cityCnName: "Chinese Name",
            cityAlias: "Alias",
            memo: "Memo"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getCity = d, g.addItem = c, g.removeItem = u, s()
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("CityController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getBusiness()
            })
        }

        function d() {
            g.promise = l.getBusiness(r.url, g.query), g.promise.then(function (e) {
                g.users = e.data.result
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "BusinessEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/business-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.selected[0].businessCode);
            var o = r.url + "/metas/businesses/remove/";
            e.post(o + g.selected[0].businessCode).success(function () {
                s(), p("BusinessCode Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {
            filter: "",
            limit: "30",
            order: "business_code",
            page: 1
        }, g.selected = [], g.columns = {
            businessCode: "BusinessCode",
            businessName: "BusinessName",
            id: "ID"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getBusiness = d, g.addItem = c, g.removeItem = u, s()
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("BusinessController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l, r) {
        function s() {
            var e;
            t.$watch("vm.query.filter", function (t, n) {
                n || (e = g.query.page), t !== n && (g.query.page = 1), t || (g.query.page = e), g.getAzone()
            })
        }

        function d() {
            g.promise = l.getAzone(r.url, g.query), g.promise.then(function (e) {
                g.users = e.data.result
            })
        }

        function m() {
            g.filter.show = !1, g.query.filter = "", g.filter.form.$dirty && g.filter.form.$setPristine()
        }

        function c(e) {
            o.show({
                controller: "AzoneEditDialogController",
                controllerAs: "vm",
                templateUrl: "app/config/azone-edit.tmpl.html",
                locals: {order: null},
                targetEvent: e
            })
        }

        function u(t, n) {
            function a(e) {
                console.log(e.data.msg), p(e.data.error), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(b + g.selected[0].azName), e.post(b + g.selected[0].azName).success(function () {
                s(), p("AzCode Delete Success!")
            }, a)
        }

        function p(e) {
            var t = i.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return i.show(t)
        }

        var g = this;
        g.query = {filter: "", limit: "30", order: "az_code", page: 1}, g.selected = [], g.columns = {
            azCode: "Code",
            azName: "Azone Name",
            cityEnName: "City Name",
            roomCode: "RoomCode",
            roomName: "RoomName",
            memo: "Memo"
        }, g.filter = {options: {debounce: 500}}, g.removeFilter = m, g.getAzone = d, g.addItem = c, g.removeItem = u, s();
        var b = r.url + "/metas/azones/remove/"
    }

    e.$inject = ["$http", "$scope", "$timeout", "$q", "$mdDialog", "$mdToast", "PlancodeService", "API_CONFIG"], angular.module("app.config").controller("AzoneController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(t) {
            var n = l.url + "/metas/plancodes/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function s(t) {
            var n = l.url + "/metas/topology/clusters/ECS_STORAGE?order=cluster&per_page=1000&page=1";
            return e.get(n).then(function (e) {
                return e.data.result.clusters
            })
        }

        function d(t) {
            var n = l.url + "/metas/businesses/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function m(t) {
            var n = l.url + "/metas/products/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function c(t) {
            var n = l.url + "/metas/nets/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function u(t) {
            var n = l.url + "/metas/topology/products/";
            return e.get(n).then(function (e) {
                return e.data.result
            })
        }

        function p() {
            n.hide()
        }

        function g() {
            n.cancel()
        }

        function b() {
            t.print()
        }

        function h() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), f(e.data.error), angular.isDefined(e.data.error) && f(e.data.error)
            }

            i.setLoaderActive(!0);
            var n = l.url + "/metas/plan_clusters?cluster=" + y.data.clusterName + "&plan_code=" + y.data.planCode.planCode + "&product=" + y.data.product + "&memo=" + y.data.memo;
            e.post(n).then(function () {
                i.setLoaderActive(!1), f("Add PlanClusterInfo Successfully!")
            }, t)
        }

        function v() {
            y.data.planCode = "", y.data.minusPlanCode = "", y.data.cityCode = "", y.data.clusterName = "", y.data.businessCode = "", y.data.productCode = "", y.data.netCode = ""
        }

        function f(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var y = this;
        y.data = {
            planCode: "",
            minusPlanCode: "",
            cityCode: "",
            businessCode: "",
            clusterName: "",
            productCode: "",
            netCode: "",
            product: "",
            memo: ""
        }, y.cancelClick = g, y.okClick = p, y.order = a, y.printClick = b, y.planCodeSearch = r, y.clusterNameSearch = s, y.businessCodeSearch = d, y.productCodeSearch = m, y.netCodeSearch = c, y.productSearch = u, y.register = h, v()
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("ClusterMappingEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            n.hide()
        }

        function s() {
            n.cancel()
        }

        function d() {
            t.print()
        }

        function m() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), u(e.data.error), angular.isDefined(e.data.error) && u(e.data.error)
            }

            i.setLoaderActive(!0), e.post(g + "city_code=" + p.data.cityCode + "&city_en_name=" + p.data.cityEnName + "&city_cn_name=" + p.data.cityCnName + "&city_alias=" + p.data.cityAlias + "&memo=" + p.data.memo).then(function () {
                i.setLoaderActive(!1), u("Add CityCode Successfully!")
            }, t)
        }

        function c() {
            p.data.cityCode = "", p.data.cityEnName = "", p.data.cityCnName = "", p.data.cityAlias = ""
        }

        function u(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var p = this;
        p.data = {
            cityCode: "",
            cityEnName: "",
            cityCnName: "",
            cityAlias: "",
            memo: ""
        }, p.cancelClick = s, p.okClick = r, p.order = a, p.printClick = d, p.register = m, c();
        var g = l.url + "/metas/citys?"
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("CityEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r(t) {
            var n = l.url + "/metas/businesses/";
            return e.get(n + t).then(function (e) {
                return e.data.result
            })
        }

        function s() {
            n.hide()
        }

        function d() {
            n.cancel()
        }

        function m() {
            t.print()
        }

        function c() {
            function t(e) {
                console.log(e.data.msg), angular.isDefined(e.data.error) && p(e.data.error)
            }

            console.log(g.data), g.memo = "", e["delete"](b + "businessCode=" + g.order).success(function () {
                p("Success!")
            }, t)
        }

        function u() {
            g.data.businessCode = "", g.data.businessName = ""
        }

        function p(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var g = this;
        g.data = {
            id: "11711437",
            businessCode: "",
            businessName: ""
        }, g.cancelClick = d, g.okClick = s, g.order = a, g.printClick = m, g.clusterSearch = r, g.removeBusinessInfo = c, u();
        var b = l.url + "/metas/businesses?"
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("BusinessRemoveDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            n.hide()
        }

        function s() {
            n.cancel()
        }

        function d() {
            t.print()
        }

        function m() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), u(e.data.error), angular.isDefined(e.data.error) && u(e.data.error)
            }

            i.setLoaderActive(!0), p.memo = "";
            var n = l.url + "/metas/businesses?";
            e.post(n + "businessCode=" + p.data.businessCode + "&businessName=" + p.data.businessName + "&memo=" + p.memo).then(function () {
                i.setLoaderActive(!1), u("Add BusinessCode Successfully!")
            }, t)
        }

        function c() {
            p.data.businessCode = "", p.data.businessName = ""
        }

        function u(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var p = this;
        p.data = {
            businessCode: "",
            businessName: ""
        }, p.cancelClick = s, p.okClick = r, p.order = a, p.printClick = d, p.register = m, c()
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("BusinessEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t, n, a, o, i, l) {
        function r() {
            n.hide()
        }

        function s() {
            n.cancel()
        }

        function d() {
            t.print()
        }

        function m() {
            function t(e) {
                i.setLoaderActive(!1), console.log(e.data.status), u(e.data.error), angular.isDefined(e.data.error) && u(e.data.error)
            }

            i.setLoaderActive(!0), p.memo = "";
            var n = l.url + "/metas/azones?";
            e.post(n + "az_code=" + p.data.azCode + "&city_en_name=" + p.data.cityEnName + "&room_code=" + p.data.roomCode + "&room_name=" + p.data.roomName + "&is_abroad=" + p.data.abroad + "&memo=" + p.data.memo).then(function () {
                i.setLoaderActive(!1), u("Add AzoneCode Successfully!")
            }, t)
        }

        function c() {
            p.data.azCode = "", p.data.cityEnName = "", p.data.roomCode = "", p.data.roomName = "", p.data.memo = ""
        }

        function u(e) {
            var t = o.simple({hideDelay: !1}).content(e).action("OK").highlightAction(!1).position("bottom right");
            return o.show(t)
        }

        var p = this;
        p.data = {
            azCode: "",
            cityEnName: "",
            roomCode: "",
            roomName: "",
            abroad: "",
            memo: ""
        }, p.cancelClick = s, p.okClick = r, p.order = a, p.printClick = d, p.register = m, c()
    }

    e.$inject = ["$http", "$window", "$mdDialog", "order", "$mdToast", "triLoaderService", "API_CONFIG"], angular.module("app.config").controller("AzoneEditDialogController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n(t, n, a, o) {
            e.selected = [], n.bind("click", function () {
                $("#checked").find("md-checkbox").eq(1).removeClass("md-checked"), angular.forEach(JSON.parse(t.a), function (t, n) {
                    e.selected.push(n)
                }), $.each($("#checked").find("md-checkbox"), function (e) {
                    return 1 == e || void(t.b ? $(this).addClass("md-checked") : $(this).removeClass("md-checked"))
                }), t.b = !t.b
            })
        }

        return {
            restrict: "AE",
            scope: {a: "@", b: "@", content: "="},
            transclude: !0,
            link: n,
            repalce: !0,
            template: '<span class="width-118 margin-left-10 display-inline-block"><md-checkbox style="font-size: 12px;" class="Primary"><span style="color:red">全部</span></md-checkbox></span>'
        }
    }

    function t(e) {
        function t(e, t, n, a) {
            t.bind("click", function () {
                $(this).find("md-checkbox").addClass("md-checked"), $("#checked").find("md-checkbox").eq(0).removeClass("md-checked"), $.each($("#checked").find("md-checkbox"), function (e) {
                    return 0 == e || 1 == e || void($(this).hasClass("md-checked") ? $(this).removeClass("md-checked") : $(this).addClass("md-checked"))
                })
            })
        }

        return {
            restrict: "AE",
            template: '<span class="width-118 margin-left-10 display-inline-block"><md-checkbox style="font-size: 12px;" class="Primary"><span style="color:red">反选</span></md-checkbox></span>',
            repalce: !0,
            link: t
        }
    }

    e.$inject = ["$rootScope", "SalesService"], t.$inject = ["$rootScope"], angular.module("app.dashboards").directive("selectAll", e).directive("antiElection", t)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("triangular.sales-layout", {
            "abstract": !0,
            views: {
                sidebarLeft: {
                    templateUrl: "app/layouts/leftsidenav/leftsidenav.tmpl.html",
                    controller: "MenuController",
                    controllerAs: "vm"
                },
                content: {template: '<div id="admin-panel-content-view" flex ui-view></div>'},
                belowContent: {template: '<div ui-view="belowContent"></div>'}
            }
        }).state("triangular.dashboard-general", {
            url: "/dashboards/general",
            templateUrl: "app/dashboards/general/dashboard-general.tmpl.html"
        }).state("triangular.dashboard-performance", {
            url: "/dashboards/performance",
            templateUrl: "app/dashboards/performance/dashboard-performance.tmpl.html",
            controller: "DashboardPerformanceController",
            controllerAs: "vm"
        }).state("triangular.dashboard-inventory", {
            url: "/dashboards/inventory",
            templateUrl: "app/dashboards/inventory/dashboard-inventory.tmpl.html",
            controller: "DashboardServerController",
            controllerAs: "vm"
        }).state("triangular.dashboard-sales", {
            url: "/dashboards/sales",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/dashboards/sales/dashboard-sales.tmpl.html",
                    controller: "DashboardSalesController",
                    controllerAs: "vm"
                },
                belowContent: {
                    templateUrl: "app/dashboards/sales/fab-button.tmpl.html",
                    controller: "SalesFabController",
                    controllerAs: "vm"
                }
            }
        }).state("triangular.dashboard-stock", {
            url: "/dashboards/stock",
            data: {layout: {showToolbar: !1}},
            views: {
                "": {
                    templateUrl: "app/dashboards/stock/dashboard-stock.tmpl.html",
                    controller: "DashboardStockController",
                    controllerAs: "vm"
                },
                belowContent: {
                    templateUrl: "app/dashboards/sales/fab-button.tmpl.html",
                    controller: "SalesFabController",
                    controllerAs: "vm"
                }
            }
        }), t.addMenu({
            name: "Dashboards",
            icon: "zmdi zmdi-home",
            type: "dropdown",
            priority: 4.1,
            children: [{name: "Performance", state: "triangular.dashboard-performance", type: "link"}]
        })
    }

    e.$inject = ["$stateProvider", "triMenuProvider"], angular.module("app.dashboards").config(e)
}(),function () {
    "use strict";
    function e() {
    }

    angular.module("app.dashboards").controller("DashboardDraggableController", e)
}(),function () {
    "use strict";
    angular.module("app").value("googleChartApiConfig", {
        version: "1.1",
        optionalSettings: {packages: ["line", "bar", "geochart", "scatter"], language: "en"}
    })
}(),function () {
    "use strict";
    function e(e, t) {
        return function (n) {
            return e.has("translateFilter") ? t("translate")(n) : n
        }
    }

    e.$inject = ["$injector", "$filter"], angular.module("triangular").filter("triTranslate", e)
}(),function () {
    function e(e) {
        function t() {
            e.go("triangular.dashboard-analytics")
        }

        var n = this;
        n.goHome = t
    }

    e.$inject = ["$state"], angular.module("app").controller("ErrorPageController", e)
}(),function () {
    "use strict";
    function e(e, t, n) {
        e.definePalette("white", {
            50: "ffffff",
            100: "ffffff",
            200: "ffffff",
            300: "ffffff",
            400: "ffffff",
            500: "ffffff",
            600: "ffffff",
            700: "ffffff",
            800: "ffffff",
            900: "ffffff",
            A100: "ffffff",
            A200: "ffffff",
            A400: "ffffff",
            A700: "ffffff",
            contrastDefaultColor: "dark"
        }), e.definePalette("black", {
            50: "e1e1e1",
            100: "b6b6b6",
            200: "8c8c8c",
            300: "646464",
            400: "3a3a3a",
            500: "e1e1e1",
            600: "e1e1e1",
            700: "232323",
            800: "1a1a1a",
            900: "121212",
            A100: "3a3a3a",
            A200: "ffffff",
            A400: "ffffff",
            A700: "ffffff",
            contrastDefaultColor: "light"
        });
        var a = e.extendPalette("cyan", {
            contrastDefaultColor: "light",
            contrastLightColors: "500 700 800 900",
            contrastStrongLightColors: "500 700 800 900"
        });
        e.definePalette("triCyan", a), t.theme("cyan").primaryPalette("black", {
            "default": "400",
            "hue-1": "400"
        }).accentPalette("amber").warnPalette("deep-orange").backgroundPalette("black").dark(), t.theme("cyan-white").primaryPalette("black", {
            "default": "400",
            "hue-1": "400"
        }).accentPalette("triCyan", {"default": "500"}).warnPalette("deep-orange"), n.skin("cyan-cloud", "Cyan Cloud").sidebarTheme("cyan").toolbarTheme("cyan-white").logoTheme("cyan").contentTheme("cyan-white"), t.theme("dark").primaryPalette("black", {
            "default": "400",
            "hue-1": "400"
        }).accentPalette("amber").warnPalette("deep-orange").backgroundPalette("black").dark(), n.skin("dark-knight", "Dark Knight").sidebarTheme("dark").toolbarTheme("dark").logoTheme("dark").contentTheme("dark"), t.theme("red").primaryPalette("red").accentPalette("amber").warnPalette("purple"), t.theme("white-red").primaryPalette("white").accentPalette("red", {"default": "500"}).warnPalette("purple"), n.skin("red-dwarf", "Red Dwarf").sidebarTheme("red").toolbarTheme("white-red").logoTheme("red").contentTheme("red"), t.theme("purple").primaryPalette("purple").accentPalette("deep-orange").warnPalette("amber"), t.theme("white-purple").primaryPalette("white").accentPalette("purple", {"default": "400"}).warnPalette("deep-orange"), n.skin("plumb-purple", "Plumb Purple").sidebarTheme("purple").toolbarTheme("white-purple").logoTheme("purple").contentTheme("purple"), t.theme("blue-grey").primaryPalette("blue-grey").accentPalette("amber").warnPalette("orange"), t.theme("white-blue-grey").primaryPalette("white").accentPalette("blue-grey", {"default": "400"}).warnPalette("orange"), n.skin("battleship-grey", "Battleship Grey").sidebarTheme("blue-grey").toolbarTheme("white-blue-grey").logoTheme("blue-grey").contentTheme("blue-grey"), t.theme("orange").primaryPalette("orange", {"default": "800"}).accentPalette("lime").warnPalette("amber"), t.theme("white-orange").primaryPalette("white").accentPalette("orange", {"default": "500"}).warnPalette("lime"), n.skin("zesty-orange", "Zesty Orange").sidebarTheme("orange").toolbarTheme("white-orange").logoTheme("orange").contentTheme("orange"), t.theme("indigo").primaryPalette("indigo", {"default": "600"}).accentPalette("red").warnPalette("lime"), n.skin("indigo-island", "Indigo Island").sidebarTheme("indigo").toolbarTheme("indigo").logoTheme("indigo").contentTheme("indigo"), t.theme("light-green").primaryPalette("light-green", {"default": "400"}).accentPalette("amber").warnPalette("deep-orange"), t.theme("white-light-green").primaryPalette("white").accentPalette("light-green", {"default": "400"}).warnPalette("deep-orange"), n.skin("kermit-green", "Kermit Green").sidebarTheme("light-green").toolbarTheme("white-light-green").logoTheme("light-green").contentTheme("light-green"), n.useSkinCookie(!0), n.setSkin("cyan-cloud")
    }

    e.$inject = ["$mdThemingProvider", "triThemingProvider", "triSkinsProvider"], angular.module("app").config(e)
}(),function () {
    "use strict";
    function e(e, t) {
        var n = new Date;
        e.setName("SupplyList"), e.setCopyright("&copy;" + n.getFullYear() + " aliyun.com"), e.setLogo("assets/images/logo.png"), e.setVersion("2.10.1"), t.setTitle("SupplyList"), t.setSeparator("|")
    }

    e.$inject = ["triSettingsProvider", "triRouteProvider"], angular.module("app").config(e)
}(),function () {
    "use strict";
    function e(e) {
        e.setDefaultOption("loaderTemplateUrl", "app/layouts/loader/loader.tmpl.html"), e.setDefaultOption("loaderController", "LoaderController"), e.setDefaultOption("sidebarLeftTemplateUrl", "app/layouts/leftsidenav/leftsidenav.tmpl.html"), e.setDefaultOption("sidebarLeftController", "LeftSidenavController"), e.setDefaultOption("sidebarRightTemplateUrl", "app/layouts/rightsidenav/rightsidenav.tmpl.html"), e.setDefaultOption("sidebarRightController", "RightSidenavController"), e.setDefaultOption("toolbarTemplateUrl", "app/layouts/toolbar/toolbar.tmpl.html"), e.setDefaultOption("toolbarController", "ToolbarController"), e.setDefaultOption("footerTemplateUrl", "app/layouts/footer/footer.tmpl.html"), e.setDefaultOption("toolbarSize", "default"), e.setDefaultOption("toolbarShrink", !1), e.setDefaultOption("toolbarClass", ""), e.setDefaultOption("contentClass", ""), e.setDefaultOption("sideMenuSize", "full"), e.setDefaultOption("showToolbar", !0), e.setDefaultOption("footer", !0)
    }

    e.$inject = ["triLayoutProvider"], angular.module("app").config(e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("404", {
            url: "/404",
            views: {root: {templateUrl: "404.tmpl.html", controller: "ErrorPageController", controllerAs: "vm"}}
        }).state("401", {
            url: "/401",
            views: {root: {templateUrl: "401.tmpl.html", controller: "ErrorPageController", controllerAs: "vm"}}
        }).state("500", {
            url: "/500",
            views: {root: {templateUrl: "500.tmpl.html", controller: "ErrorPageController", controllerAs: "vm"}}
        }), t.when("", "/dashboards/performance"), t.when("/", "/dashboards/performance"), t.otherwise("/404")
    }

    e.$inject = ["$stateProvider", "$urlRouterProvider"], angular.module("app").config(e)
}(),function () {
    "use strict";
    function e(e) {
        e.setOptions({
            colours: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58", "#AB47BC", "#00ACC1", "#FF7043", "#9E9D24", "#5C6BC0"],
            responsive: !0
        })
    }

    e.$inject = ["ChartJsProvider"], angular.module("app").config(e)
}(),function () {
    "use strict";
    function e(e, t) {
        function n() {
            t.go("500")
        }

        var a = e.$on("$stateChangeError", n);
        e.$on("$destroy", function () {
            a()
        })
    }

    e.$inject = ["$rootScope", "$state"], angular.module("app").run(e)
}(),angular.module("app").run(["$templateCache", function (e) {
    e.put("app/config/azone-edit.tmpl.html", '<md-dialog class="azone-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <!-- 基本的输入框 -->\n                    <form name="githubForm">\n                        <md-input-container class="md-block">\n                            <label translate>Azone Code</label>\n                            <input name="azCode" ng-model="vm.data.azCode" required>\n                            <div ng-messages="githubForm.azCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Azone Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>City</label>\n                            <input name="cityEnName" ng-model="vm.data.cityEnName" required>\n                            <div ng-messages="githubForm.cityEnName.$error">\n                                <div ng-message when="required"><span translate>Enter a City Name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Room Code</label>\n                            <input name="roomCode" ng-model="vm.data.roomCode" required>\n                            <div ng-messages="githubForm.roomCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Room Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Room Name</label>\n                            <input name="roomName" ng-model="vm.data.roomName" required>\n                            <div ng-messages="githubForm.roomName.$error">\n                                <div ng-message when="required"><span translate>Enter a Room Name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Abroad</label>\n                            <input name="abroad" ng-model="vm.data.abroad" required>\n                            <div ng-messages="githubForm.abroad.$error">\n                                <div ng-message when="required"><span translate>Choose is Abroad</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Memo</label>\n                            <input name="memo" ng-model="vm.data.memo" required>\n                            <div ng-messages="githubForm.memo.$error">\n                                <div ng-message when="required"><span translate>Enter a Azone Memo</span></div>\n                            </div>\n                        </md-input-container>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new azone info" aria-label="{{\'Add a new azone info\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'),
        e.put("app/config/business-edit.tmpl.html", '<md-dialog class="business-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <!-- 基本的输入框 -->\n                    <form name="githubForm">\n                        <md-input-container class="md-block">\n                            <label translate>Business Code</label>\n                            <input name="businessCode" ng-model="vm.data.businessCode" required>\n                            <div ng-messages="githubForm.businessCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Business Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Business Name</label>\n                            <input name="businessName" ng-model="vm.data.businessName" required>\n                            <div ng-messages="githubForm.businessName.$error">\n                                <div ng-message when="required"><span translate>Enter a Business Name</span></div>\n                            </div>\n                        </md-input-container>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new business info" aria-label="{{\'Add a new business info\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'), e.put("app/config/business-remove.tmpl.html", '<md-dialog class="business-remove" flex="60" flex-xs="20">\n    <md-dialog-actions layout="row">\n        <md-button ng-click="vm.removeBusinessInfo()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n        <md-button ng-click="vm.cancelClick()" class="md-primary" aria-label="{{Cancel | triTranslate}}" translate="Cancel"></md-button>\n    </md-dialog-actions>\n</md-dialog>\n'), e.put("app/config/city-edit.tmpl.html", '<md-dialog class="city-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <!-- 基本的输入框 -->\n                    <form name="githubForm">\n                        <md-input-container class="md-block">\n                            <label translate>Code</label>\n                            <input name="cityCode" ng-model="vm.data.cityCode" required>\n                            <div ng-messages="githubForm.cityCode.$error">\n                                <div ng-message when="required"><span translate>Enter a City Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>English Name</label>\n                            <input name="cityEnName" ng-model="vm.data.cityEnName" required>\n                            <div ng-messages="githubForm.cityEnName.$error">\n                                <div ng-message when="required"><span translate>Enter a City English Name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Chinese Name</label>\n                            <input name="cityCnName" ng-model="vm.data.cityCnName" required>\n                            <div ng-messages="githubForm.cityCnName.$error">\n                                <div ng-message when="required"><span translate>Enter a City Chinese Name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Alias</label>\n                            <input name="cityAlias" ng-model="vm.data.cityAlias" required>\n                            <div ng-messages="githubForm.cityAlias.$error">\n                                <div ng-message when="required"><span translate>Enter a City Alias</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Memo</label>\n                            <input name="memo" ng-model="vm.data.memo" required>\n                            <div ng-messages="githubForm.memo.$error">\n                                <div ng-message when="required"><span translate>Enter a City Memo</span></div>\n                            </div>\n                        </md-input-container>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new city info" aria-label="{{\'Add a new city info\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'), e.put("app/config/cluster-mapping-edit.tmpl.html", '<md-dialog class="plancode-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <form name="githubForm">\n                        <md-autocomplete md-input-name="planCode" md-floating-label="{{\'planCode\' | triTranslate}}" md-selected-item="vm.data.planCode" md-search-text="vm.searchTextPlanCode" md-items="user in vm.planCodeSearch(vm.searchTextPlanCode)" md-item-text="user.planCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your PlanCode" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-plancode-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user.planCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.planCode.$error">\n                                <div ng-message when="required"><span translate>Enter a PlanCode</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-autocomplete md-input-name="clusterName" md-floating-label="{{\'clusterName\' | triTranslate}}" md-selected-item="vm.data.clusterName" md-search-text="vm.searchTextClusterName" md-items="user in vm.clusterNameSearch\n(vm.searchTextClusterName)" md-item-text="user.clusterName" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Cluster Name" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-cluster-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.clusterName.$error">\n                                <div ng-message when="required"><span translate>Enter a Cluster</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-autocomplete md-input-name="product" md-floating-label="{{\'product\' | triTranslate}}" md-selected-item="vm.data.product" md-search-text="vm.searchTextProduct" md-items="user in vm.productSearch(vm.searchTextProduct)" md-item-text="user.product" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Product Name" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-product-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.product.$error">\n                                <div ng-message when="required"><span translate>Enter a Product</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-input-container class="md-block">\n                            <label translate>memo</label>\n                            <input name="memo" ng-model="vm.data.memo" required>\n                            <div ng-messages="githubForm.memo.$error">\n                                <div ng-message when="required"><span translate>Enter a memo</span></div>\n                            </div>\n                        </md-input-container>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new plancode" aria-label="{{\'Add a new plancode\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'), e.put("app/config/config-azone.tmpl.html", '<div ng-controller="AzoneController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">Azone Info Setting</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove Azone">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getAzone">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="az_code"><span translate>{{vm.columns.azName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.cityEnName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.azCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.roomCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.roomName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planAzoneInfoList">\n                    <td md-cell>{{::user.azName}}</td>\n                    <td md-cell>{{::user.cityEnName}}</td>\n                    <td md-cell>{{::user.azCode}}</td>\n                    <td md-cell>{{::user.roomCode}}</td>\n                    <td md-cell>{{::user.roomName}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getAzone"></md-table-pagination>\n</div>\n'), e.put("app/config/config-business.tmpl.html", '<div ng-controller="BusinessController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">Business Info Setting</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove Plancode">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getBusiness">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="business_code"><span translate>{{vm.columns.businessCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.businessName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planBusinessInfoList">\n                    <td md-cell>{{::user.businessCode}}</td>\n                    <td md-cell>{{::user.businessName}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getBusiness"></md-table-pagination>\n</div>\n'), e.put("app/config/config-city.tmpl.html", '<div ng-controller="CityController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">City Info Setting</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove Plancode">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getCity">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="city_code"><span translate>{{vm.columns.cityCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.cityEnName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.cityCnName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.cityAlias}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planCityInfoList">\n                    <td md-cell>{{::user.cityCode}}</td>\n                    <td md-cell>{{::user.cityEnName}}</td>\n                    <td md-cell>{{::user.cityCnName}}</td>\n                    <td md-cell>{{::user.cityAlias}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getCity"></md-table-pagination>\n</div>\n'), e.put("app/config/config-cluster-mapping.tmpl.html", '<div ng-controller="ClusterMappingController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">PlanCode-Cluster Mapping List</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove Plancode">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getClusterMapping">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="plan_code"><span translate>{{vm.columns.planCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.clusterName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planClusters">\n                    <td md-cell>{{::user.planCode}}</td>\n                    <td md-cell>{{::user.clusterName}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.totalCount}}" md-on-paginate="vm.getClusterMapping"></md-table-pagination>\n</div>\n'), e.put("app/config/config-cluster.tmpl.html", '<div class="padded-content-page">\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Cluster Mapping Config</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="plancode">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-cluster-mapping.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/config/config-net.tmpl.html", '<div ng-controller="NetController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">Net Info Setting</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove NetInfo">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getNet">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="net_code"><span translate>{{vm.columns.netCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.netName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planNetInfoList">\n                    <td md-cell>{{::user.netCode}}</td>\n                    <td md-cell>{{::user.netName}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getNet"></md-table-pagination>\n</div>\n'), e.put("app/config/config-plancode-info.tmpl.html", '<div ng-controller="PlanCodeInfoController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">PlanCode Info Setting</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove Plancode">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getPlanCode">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="plan_code"><span translate>{{vm.columns.planCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.cityCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.azCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.businessCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.productCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.netCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planCodeInfoList">\n                    <td md-cell>{{::user.planCode}}</td>\n                    <td md-cell>{{::user.cityCode}}</td>\n                    <td md-cell>{{::user.azCode}}</td>\n                    <td md-cell>{{::user.businessCode}}</td>\n                    <td md-cell>{{::user.productCode}}</td>\n                    <td md-cell>{{::user.netCode}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getPlanCode"></md-table-pagination>\n</div>\n'),
        e.put("app/config/config-plancode.tmpl.html", '<div class="padded-content-page">\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Plan Info Config</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="plancode">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-plancode-info.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="city">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-city.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="azone">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-azone.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="product">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-product.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="business">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-business.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="net">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/config/config-net.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/config/config-product.tmpl.html", '<div ng-controller="ProductController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">Product Info Setting</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n            <md-button ng-click="vm.addItem($event)" class="md-icon-button" aria-label="Add Plancode">\n                <md-icon md-font-icon="zmdi zmdi-cutlery"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'items\' : \'item\'}} selected</div>\n            <div flex></div>\n            <md-button ng-click="vm.removeItem($event)" class="md-icon-button" aria-label="Remove ProductInfo">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getProduct">\n                <tr md-row>\n                    <th md-column md-numberic md-order-by="product_code"><span translate>{{vm.columns.productCode}}</span></th>\n                    <th md-column><span translate>{{vm.columns.productName}}</span></th>\n                    <th md-column><span translate>{{vm.columns.productClass}}</span></th>\n                    <th md-column><span translate>{{vm.columns.memo}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.planProductInfoList">\n                    <td md-cell>{{::user.productCode}}</td>\n                    <td md-cell>{{::user.productName}}</td>\n                    <td md-cell>{{::user.productClass}}</td>\n                    <td md-cell>{{::user.memo}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getProduct"></md-table-pagination>\n</div>\n'), e.put("app/config/net-edit.tmpl.html", '<md-dialog class="net-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <!-- 基本的输入框 -->\n                    <form name="githubForm">\n                        <md-input-container class="md-block">\n                            <label translate>Net Code</label>\n                            <input name="netCode" ng-model="vm.data.netCode" required>\n                            <div ng-messages="githubForm.netCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Net Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Net Name</label>\n                            <input name="netName" ng-model="vm.data.netName" required>\n                            <div ng-messages="githubForm.netName.$error">\n                                <div ng-message when="required"><span translate>Enter a Net Name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Net memo</label>\n                            <input name="memo" ng-model="vm.data.memo" required>\n                            <div ng-messages="githubForm.memo.$error">\n                                <div ng-message when="required"><span translate>Enter a Net Memo</span></div>\n                            </div>\n                        </md-input-container>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new net info" aria-label="{{\'Add a new net info\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'), e.put("app/config/order-dialog.tmpl.html", '<md-dialog class="order-dialog mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex>\n                <span translate>Order #</span><span>{{gCluster.order.id}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="gCluster.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="gCluster.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Order Date</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster.order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Customer Name</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster.order.name}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Customer Email</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster\n.order.buyer}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Number of Items</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster.order.items.length}}</span>\n            </div>\n        </div>\n        <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n        <table class="order-dialog-product-table md-table">\n            <thead>\n                <tr>\n                    <th translate>Plancode Description</th>\n                    <th translate>Category</th>\n                    <th class="text-right" translate>Price</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat="item in gCluster.order.items">\n                    <td>{{item.name}}</td>\n                    <td>{{item.category}}</td>\n                    <td class="text-right padding-right-10">{{item.price | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Sub Total</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{gCluster.order.subTotal | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Tax</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{gCluster.order.tax | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Total</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{gCluster.order.total | currency}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="gCluster.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>\n'), e.put("app/config/order-edit.tmpl.html", '<md-dialog class="order-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex>\n                <span translate>PlanCode #</span><span>{{gCluster.order.id}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="gCluster.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="gCluster.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <form name="githubForm">\n                        <!-- 基本的输入框 -->\n                        <md-input-container class="md-block">\n                            <label translate>Triangular Purchase Code</label>\n                            <input name="purchaseCode" ng-model="gCluster.data.purchaseCode" required>\n                            <div ng-messages="githubForm.purchaseCode.$error">\n                                <div ng-message when="required"><span translate>Enter a triangular Purchase Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-autocomplete md-input-name="cluster" md-floating-label="{{\'Cluster Name\' | triTranslate}}" md-selected-item="gCluster.data.cluster" md-search-text="gCluster.searchText" md-items="user in gCluster.clusterSearch(gCluster.searchText)" md-item-text="user.planCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Cluster Name" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-user-dropdown" layout="row" layout-align="start center">\n                                    <img class="github-user-avatar" ng-src="{{user.avatar_url}}" alt="{{user.planCode}}">\n                                    <span flex>{{user.planCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.cluster.$error">\n                                <div ng-message when="required"><span translate>Enter a Cluster Name</span></div>\n                            </div>\n                        </md-autocomplete>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="gCluster.register()" translate="Give me access to the repository" aria-label="{{\'Give me access to the repository\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="gCluster.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>\n'), e.put("app/config/plancode-edit.tmpl.html", '<md-dialog class="plancode-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <form name="githubForm">\n                        <md-autocomplete md-input-name="cityCode" md-floating-label="{{\'cityCode\' | triTranslate}}" md-selected-item="vm.data.cityCode" md-search-text="vm.searchTextCity" md-items="user in vm.cityCodeSearch(vm.searchTextCity)" md-item-text="user.cityCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your City Code" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-citycode-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user.cityCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.cityCode.$error">\n                                <div ng-message when="required"><span translate>Enter a City Code</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-autocomplete md-input-name="azCode" md-floating-label="{{\'azCode\' | triTranslate}}" md-selected-item="vm.data.azCode" md-search-text="vm.searchTextAzCode" md-items="user in vm.azCodeSearch(vm.searchTextAzCode)" md-item-text="user.azCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Azone Code" md-menu-class="autocomplete-custom-template" required>\n                            <md-item-template>\n                                <div class="github-azcode-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user.azCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.azCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Azone Code</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-autocomplete md-input-name="businessCode" md-floating-label="{{\'businessCode\' | triTranslate}}" md-selected-item="vm.data.businessCode" md-search-text="vm.searchTextBuss" md-items="user in vm.businessCodeSearch(vm.searchTextBuss)" md-item-text="user.businessCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Business Code" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-businesscode-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user.businessCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.businessCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Business Code</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-autocomplete md-input-name="productCode" md-floating-label="{{\'productCode\' | triTranslate}}" md-selected-item="vm.data.productCode" md-search-text="vm.searchTextProductCode" md-items="user in vm.productCodeSearch(vm.searchTextProductCode)" md-item-text="user.productCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Product Code" md-menu-class="autocomplete-custom-template" required>\n                            <md-item-template>\n                                <div class="github-productcode-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user.productCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.productCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Product Code</span></div>\n                            </div>\n                        </md-autocomplete>\n                        <md-autocomplete md-input-name="netCode" md-floating-label="{{\'netCode\' | triTranslate}}" md-selected-item="vm.data.netCode" md-search-text="vm.searchTextNetCode" md-items="user in vm.netCodeSearch(vm.searchTextNetCode)" md-item-text="user.netCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Net Code" md-menu-class="autocomplete-custom-template" required>\n                            <md-item-template>\n                                <div class="github-netcode-dropdown" layout="row" layout-align="start center">\n                                    <span flex>{{user.netCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.netCode.$error">\n                                <div ng-message when="required"><span translate>Enter a Net Code</span></div>\n                            </div>\n                        </md-autocomplete>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new plancode" aria-label="{{\'Add a new plancode\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'), e.put("app/config/product-edit.tmpl.html", '<md-dialog class="product-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <!-- 基本的输入框 -->\n                    <form name="githubForm">\n                        <md-input-container class="md-block">\n                            <label translate>Product Code</label>\n                            <input name="productCode" ng-model="vm.data.productCode" required>\n                            <div ng-messages="githubForm.productCode.$error">\n                                <div ng-message when="required"><span translate>Enter a City Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Product Name</label>\n                            <input name="productName" ng-model="vm.data.productName" required>\n                            <div ng-messages="githubForm.productName.$error">\n                                <div ng-message when="required"><span translate>Enter a City Name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label translate>Product Class</label>\n                            <input name="productClass" ng-model="vm.data.productClass" required>\n                            <div ng-messages="githubForm.productClass.$error">\n                                <div ng-message when="required"><span translate>Enter a Product Class</span></div>\n                            </div>\n                        </md-input-container>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Add a new product info" aria-label="{{\'Add a new product info\' | triTranslate}}"></md-button>\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.cancelClick()" translate="Cancel" aria-label="{{\'Cancel\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n</md-dialog>\n'), e.put("app/dashboards/dashboard-draggable.tmpl.html", '<div layout="column" class="padded-content-page">\n    <h2>Creating containers with draggable elements</h2>\n    <p>Triangular allows you to easily build amazing containers with draggable elements. The examples below display such a functionality by creating simple containers with draggable widgets. Drag them around in order to re-order them. More examples can be found in analytics and server pages under the dashboard menu.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Horizontal dragging</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/dashboards/examples/widget-draggable.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/dashboards/examples/widget-draggable.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p>Example Column container. More complex layouts are also allowed, offering two degrees of freedom in movement.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Vertical dragging</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/dashboards/examples/widget-draggable-vertical.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/dashboards/examples/widget-draggable-vertical.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/dashboards/widgets.tmpl.html", '<div layout="column" class="padded-content-page">\n    <p class="md-subhead">Triangular allows you to build stunning dashbords easily using widgets.  Each widget has many different options you can find out how to use some of them below.</p>\n\n\n    <p>Titles & subtitles can be placed above and below the widget content.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Title above and below the content</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-title-above.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-title-above.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <p>Titles & subtitles can also be be placed to the side of the widget content.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Title on the side of the content</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-title-side.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-title-side.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p>You can also use any of <a ui-sref="admin-panel.default.ui-colors">triangulars palette colors</a> for your widgets.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Using palette colours</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-colors.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-colors.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <p>You can also use an image for your widget backgrounds.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Using palette colours</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-backgrounds.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-backgrounds.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'),
        e.put("app/inv/table-1.tmpl.html", '<div ng-controller="Tables1Controller as vm">\n    <tri-table class="elements-image-table-example" columns="::vm.columns" contents="::vm.contents" page-size="5"></tri-table>\n</div>\n'), e.put("app/inv/table-advanced.tmpl.html", '<div ng-controller="TablesAdvancedController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">Popular Github Users</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools" layout-align="start center">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'users\' : \'user\'}} selected</div>\n        </div>\n    </md-toolbar>\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                <tr md-row>\n                    <th md-column><span translate>{{vm.columns.avatar}}</span></th>\n                    <th md-column><span translate>{{vm.columns.login}}</span></th>\n                    <th md-column md-numberic md-order-by="id"><span translate>{{vm.columns.id}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.result">\n                    <td md-cell>\n                        <a href="{{::user.html_url}}"><img ng-src="{{::user.avatar_url}}" /></a>\n                    </td>\n                    <td md-cell>{{::user.planCode}}</td>\n                    <td md-cell>{{::user.minusPlanCode}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getUsers"></md-table-pagination>\n</div>\n'), e.put("app/inv/tables.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Table Examples</h2>\n    <p class="md-subhead">Data tables are used to present raw data sets, and usually appear in desktop enterprise products. Data sets may include three or more columns of data, a corresponding visualization and the ability for users to query and manipulate data at scale.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Simple Example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/table-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/table-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/table-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="SCSS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="css" include="\'app/examples/elements/examples/table-1.tmpl.scss\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n    <p class="md-subhead">Advanced Table with filters, connecting to github api using the <a href="https://github.com/daniel-nagy/md-data-table">md-data-table directive</a>.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>md-data-table Example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/inv/table-advanced.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/inv/table-advanced.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/inv/table-advanced.controller.js\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="SCSS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="css" include="\'app/inv/table-advanced.tmpl.scss\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/inv/tabs-1.tmpl.html", '<md-tabs class="md-primary" md-selected="selectedTabIndex" md-stretch-tabs="always">\n    <md-tab label="General">\n        <md-content class="md-padding">\n            <h3>User Details</h3>\n            <form>\n                <md-input-container class="md-block">\n                    <label>Username</label>\n                    <input type="text">\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label>Password</label>\n                    <input type="text">\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label>Email</label>\n                    <input type="text">\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label>Twitter</label>\n                    <input type="text">\n                </md-input-container>\n                <div layout="row" layout-align="end center">\n                    <md-button>Update</md-button>\n                </div>\n            </form>\n            <md-grid-list md-cols-gt-md="3" md-cols-xs="3" md-cols-md="4" md-row-height="1:1" md-gutter="2px">\n                <md-grid-tile md-colspan="1" md-rowspan="1" ng-repeat="album in music.albums" ng-style="{ \'background-image\': \'url(\' + album.cover + \')\' }">\n                    <md-grid-tile-footer>\n                        <h3>{{album.title}}</h3>\n                    </md-grid-tile-footer>\n                </md-grid-tile>\n            </md-grid-list>\n        </md-content>\n    </md-tab>\n    <md-tab label="Settings">\n        <md-content class="md-padding">\n            <h3>Settings</h3>\n            <md-list>\n                <md-list-item layout="row" layout-align="space-around center">\n                    <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n                    <p>Show Username</p>\n                    <md-switch class="md-secondary"></md-switch>\n                </md-list-item>\n                <md-list-item layout="row" layout-align="space-around center">\n                    <md-icon md-font-icon="zmdi zmdi-account-box"></md-icon>\n                    <p>Show Avatar</p>\n                    <md-switch class="md-secondary"></md-switch>\n                </md-list-item>\n                <md-list-item layout="row" layout-align="space-around center">\n                    <md-icon md-font-icon="zmdi zmdi-cloud-upload"></md-icon>\n                    <p>Allow Backups</p>\n                    <md-switch class="md-secondary"></md-switch>\n                </md-list-item>\n            </md-list>\n        </md-content>\n    </md-tab>\n</md-tabs>\n'), e.put("app/inv/tabs.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Tabs Examples</h2>\n    <p class="md-subhead">Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.</p>\n    <p>A tab provides the affordance for displaying grouped content. A tab label succinctly describes the tab’s associated grouping of content.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Tabs example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40" style="background: rgba(100, 100, 100, 0.2);">\n                    <md-card>\n                        <md-card-content class="example-tabs-content" ng-include="\'app/examples/elements/examples/tabs-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/tabs-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/inventory/inventory-general.tmpl.html", '<div class="dashboard-social-header padding-20 padding-top-100 overlay-gradient-30" layout="row" layout-align="start center" style="background: url(assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg) no-repeat; background-size: cover;">\n    <!--     <div class="margin-right-20">\n        <img src="assets/images/avatars/avatar-5.png" alt="girl-avatar" class="make-round" width="100" />\n        <md-button ng-click="gCluster.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n        </md-button>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <md-tabs>\n            <md-tab label="Tab #1"></md-tab>\n            <md-tab label="Tab #2"></md-tab>\n            <md-tab label="Tab #3"></md-tab>\n        </md-tabs>\n    </div> -->\n</div>\n<md-tabs md-dynamic-height md-border-bottom class="tabs-tall">\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>ECS</span>\n            <span class="display-block">11.4K</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget flex title="Orders" content-layout="column" content-layout-align="center">\n                    <md-table-container>\n                        <table md-table class="md-data-table">\n                            <thead md-head md-order="gCluster.query.order" md-on-reorder="gCluster.getUsers">\n                                <tr md-row>\n                                    <th md-column md-order-by="date" decend-first>Date</th>\n                                    <th md-column md-order-by="buyer">Buyer</th>\n                                    <th md-column md-numeric md-order-by="items.length">Items</th>\n                                    <th md-column md-order-by="status">Status</th>\n                                    <th md-column md-numeric md-order-by="total">Total</th>\n                                    <th md-column>Details</th>\n                                </tr>\n                            </thead>\n                            <tbody md-body>\n                                <tr md-row ng-repeat="order in gCluster.planCodesData.orders | orderBy: gCluster.query.order | limitTo: gCluster.query.limit : (gCluster.query.page -1) * gCluster.query.limit">\n                                    <td md-cell>{{::order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</td>\n                                    <td md-cell>{{::order.buyer}}</td>\n                                    <td md-cell>{{::order.items.length}}</td>\n                                    <td md-cell>\n                                        <span class="status" ng-class="\'status-\' + order.status">\n                                    {{::order.status}}\n                                </span>\n                                    </td>\n                                    <td md-cell>{{::order.total | currency}}</td>\n                                    <td md-cell>\n                                        <md-button ng-click="gCluster.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                        </md-button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </md-table-container>\n                    <md-table-pagination md-limit="gCluster.query.limit" md-page="gCluster.query.page" md-total="{{gCluster.planCodesData.orders.length}}" md-page-select></md-table-pagination>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>HPC</span>\n            <span class="display-block">3,220</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget flex title="Plancodes" content-layout="column" content-layout-align="center">\n                    <md-table-container>\n                        <table md-table class="md-data-table">\n                            <thead md-head md-order="gCluster.query.order" md-on-reorder="gCluster.getUsers">\n                                <tr md-row>\n                                    <th md-column md-order-by="cluster" decend-first>Cluster</th>\n                                    <th md-column md-order-by="plancode" decend-first>Plancode</th>\n                                    <th md-column>Edit</th>\n                                    <th md-column>EditV2</th>\n                                </tr>\n                            </thead>\n                            <tbody md-body>\n                                <tr md-row ng-repeat="order in gCluster.planCodesData.orders | orderBy: gCluster.query.order | limitTo: gCluster.query.limit : (gCluster.query.page -1) * gCluster.query.limit">\n                                    <td md-cell>{{::order.cluster}}</td>\n                                    <td md-cell>{{::order.plancode}}</td>\n                                    <td md-cell>\n                                        <md-button ng-click="gCluster.editOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                        </md-button>\n                                    </td>\n                                    <td md-cell>\n                                        <md-button ng-click="gCluster.editOrderV2(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                        </md-button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </md-table-container>\n                    <md-table-pagination md-limit="gCluster.query.limit" md-page="gCluster.query.page" md-total="{{gCluster.planCodesData\n.orders.length}}" md-page-select></md-table-pagination>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n</md-tabs>\n'), e.put("app/inventory/inventory-plancode.tmpl.html", '<div class="sales-dashboard" layout="column">\n    <tri-widget title="Sales" subtitle="{{vm.dateRange.start | amDateFormat:\'MMMM Do YYYY\'}} - {{vm.dateRange.end | amDateFormat:\'MMMM Do YYYY\'}}" palette-background="triCyan:800" class="padding-left-40 padding-right-40 padding-top-20 padding-bottom-20 no-shadow">\n        <canvas height="300" class="chart-line" chart-data="vm.chartLineData.data" chart-labels="vm.chartLineData.labels" chart-series="vm.chartLineData.series" chart-options="vm.chartLineData.options" chart-colours="vm.chartLineData.colors"></canvas>\n    </tri-widget>\n    <div layout="row" layout-xs="column" layout-margin dragula=\'"drag-analytics-container"\'>\n        <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n            <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalSales" duration="1.5" decimals="0"></p>\n            <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Sales</p>\n        </tri-widget>\n        <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n            <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalEarnings" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n            <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Earnings</p>\n        </tri-widget>\n        <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n            <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="971315.53" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n            <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>All Time Earnings</p>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget flex title="Orders" content-layout="column" content-layout-align="center">\n            <md-table-container>\n                <table md-table class="md-data-table">\n                    <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                        <tr md-row>\n                            <th md-column md-order-by="date" decend-first>Date</th>\n                            <th md-column md-order-by="buyer">Buyer</th>\n                            <th md-column md-numeric md-order-by="items.length">Items</th>\n                            <th md-column md-order-by="status">Status</th>\n                            <th md-column md-numeric md-order-by="total">Total</th>\n                            <th md-column>Details</th>\n                        </tr>\n                    </thead>\n                    <tbody md-body>\n                        <tr md-row ng-repeat="order in vm.salesData.orders | orderBy: vm.query.order | limitTo: vm.query.limit : (vm.query.page -1) * vm.query.limit">\n                            <td md-cell>{{::order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</td>\n                            <td md-cell>{{::order.buyer}}</td>\n                            <td md-cell>{{::order.items.length}}</td>\n                            <td md-cell>\n                                <span class="status" ng-class="\'status-\' + order.status">\n                                    {{::order.status}}\n                                </span>\n                            </td>\n                            <td md-cell>{{::order.total | currency}}</td>\n                            <td md-cell>\n                                <md-button ng-click="vm.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                    <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                </md-button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </md-table-container>\n            <md-table-pagination md-limit="vm.query.limit" md-page="vm.query.page" md-total="{{vm.salesData.orders.length}}" md-page-select></md-table-pagination>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget flex flex-xs="100" title="Order Status" content-padding>\n            <canvas class="chart-doughnut" chart-data="vm.chartPieData.data" chart-legend="true" chart-labels="vm.chartPieData.labels"></canvas>\n        </tri-widget>\n        <tri-widget flex flex-xs="100" title="Top Product Categories" content-padding>\n            <canvas class="chart-bar" chart-data="vm.chartBarData.data" chart-labels="vm.chartBarData.labels" chart-legend="true" chart-options="vm.chartBarData.options" chart-colours="vm.chartBarData.colours" chart-series="vm.chartBarData.series"></canvas>\n        </tri-widget>\n    </div>\n</div>\n'), e.put("app/inventory/order-dialog.tmpl.html", '<md-dialog class="order-dialog mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex>\n                <span translate>Order #</span><span>{{gCluster.order.id}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="gCluster.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="gCluster.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Order Date</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster.order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Customer Name</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster.order.name}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Customer Email</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster\n.order.buyer}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Number of Items</strong>\n            </div>\n            <div flex>\n                <span>{{gCluster.order.items.length}}</span>\n            </div>\n        </div>\n        <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n        <table class="order-dialog-product-table md-table">\n            <thead>\n                <tr>\n                    <th translate>Plancode Description</th>\n                    <th translate>Category</th>\n                    <th class="text-right" translate>Price</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat="item in gCluster.order.items">\n                    <td>{{item.name}}</td>\n                    <td>{{item.category}}</td>\n                    <td class="text-right padding-right-10">{{item.price | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Sub Total</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{gCluster.order.subTotal | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Tax</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{gCluster.order.tax | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Total</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{gCluster.order.total | currency}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="gCluster.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>\n'), e.put("app/inventory/order-edit.tmpl.html", '<md-dialog class="order-edit mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex>\n                <span translate>PlanCode #</span><span>{{gCluster.order.id}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="gCluster.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="gCluster.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" layout-align="center center" layout-fill>\n            <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2 translate>Fill in the form below to join</h2>\n                    </div>\n                </md-toolbar>\n                <md-card-content>\n                    <form name="githubForm">\n                        <!-- 基本的输入框 -->\n                        <md-input-container class="md-block">\n                            <label translate>Triangular Purchase Code</label>\n                            <input name="purchaseCode" ng-model="gCluster.data.purchaseCode" required>\n                            <div ng-messages="githubForm.purchaseCode.$error">\n                                <div ng-message when="required"><span translate>Enter a triangular Purchase Code</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-autocomplete md-input-name="cluster" md-floating-label="{{\'Cluster Name\' | triTranslate}}" md-selected-item="gCluster.data.cluster" md-search-text="gCluster.searchText" md-items="user in gCluster.clusterSearch(gCluster.searchText)" md-item-text="user.planCode" md-min-length="0" md-delay="400" md-autoselect md-select-on-match placeholder="Please enter your Cluster Name" md-menu-class="autocomplete-custom-template" required>\n                            <!-- 下拉框形式输入框 -->\n                            <md-item-template>\n                                <div class="github-user-dropdown" layout="row" layout-align="start center">\n                                    <img class="github-user-avatar" ng-src="{{user.avatar_url}}" alt="{{user.planCode}}">\n                                    <span flex>{{user.planCode}}</span>\n                                </div>\n                            </md-item-template>\n                            <div ng-messages="githubForm.cluster.$error">\n                                <div ng-message when="required"><span translate>Enter a Cluster Name</span></div>\n                            </div>\n                        </md-autocomplete>\n                    </form>\n                    <div class="margin-top-40" layout="row" layout-align="end center">\n                        <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="gCluster.register()" translate="Give me access to the repository" aria-label="{{\'Give me access to the repository\' | triTranslate}}"></md-button>\n                    </div>\n                </md-card-content>\n            </md-card>\n        </div>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="gCluster.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>\n'), e.put("app/purchase/purchase-orders.tmpl.html", '<div class="dashboard-social-header padding-20 padding-top-100 overlay-gradient-30" layout="row" layout-align="start center" style="background: url(assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg) no-repeat; background-size: cover;">\n    <div class="margin-right-20">\n        <img src="assets/images/avatars/avatar-5.png" alt="girl-avatar" class="make-round" width="100" />\n        <md-button ng-click="vm.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n        </md-button>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <md-tabs>\n            <md-tab label="Tab #1"></md-tab>\n            <md-tab label="Tab #2"></md-tab>\n            <md-tab label="Tab #3"></md-tab>\n        </md-tabs>\n    </div>\n</div>\n<md-tabs md-dynamic-height md-border-bottom class="tabs-tall">\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>我创建的</span>\n            <span class="display-block">11.4K</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget flex title="Orders" content-layout="column" content-layout-align="center">\n                    <md-table-container>\n                        <table md-table class="md-data-table">\n                            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                                <tr md-row>\n                                    <th md-column md-order-by="date" decend-first>Date</th>\n                                    <th md-column md-order-by="buyer">Buyer</th>\n                                    <th md-column md-numeric md-order-by="items.length">Items</th>\n                                    <th md-column md-order-by="status">Status</th>\n                                    <th md-column md-numeric md-order-by="total">Total</th>\n                                    <th md-column>Details</th>\n                                </tr>\n                            </thead>\n                            <tbody md-body>\n                                <tr md-row ng-repeat="order in vm.salesData.orders | orderBy: vm.query.order | limitTo: vm.query.limit : (vm.query.page -1) * vm.query.limit">\n                                    <td md-cell>{{::order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</td>\n                                    <td md-cell>{{::order.buyer}}</td>\n                                    <td md-cell>{{::order.items.length}}</td>\n                                    <td md-cell>\n                                        <span class="status" ng-class="\'status-\' + order.status">\n                                    {{::order.status}}\n                                </span>\n                                    </td>\n                                    <td md-cell>{{::order.total | currency}}</td>\n                                    <td md-cell>\n                                        <md-button ng-click="vm.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                        </md-button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </md-table-container>\n                    <md-table-pagination md-limit="vm.query.limit" md-page="vm.query.page" md-total="{{vm.salesData.orders.length}}" md-page-select></md-table-pagination>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>我关注的</span>\n            <span class="display-block">3,220</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget flex title="Orders" content-layout="column" content-layout-align="center">\n                    <md-table-container>\n                        <table md-table class="md-data-table">\n                            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                                <tr md-row>\n                                    <th md-column md-order-by="date" decend-first>Date</th>\n                                    <th md-column md-order-by="buyer">Buyer</th>\n                                    <th md-column md-numeric md-order-by="items.length">Items</th>\n                                    <th md-column md-order-by="status">Status</th>\n                                    <th md-column md-numeric md-order-by="total">Total</th>\n                                    <th md-column>Details</th>\n                                </tr>\n                            </thead>\n                            <tbody md-body>\n                                <tr md-row ng-repeat="order in vm.salesData.orders | orderBy: vm.query.order | limitTo: vm.query.limit : (vm.query.page -1) * vm.query.limit">\n                                    <td md-cell>{{::order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</td>\n                                    <td md-cell>{{::order.buyer}}</td>\n                                    <td md-cell>{{::order.items.length}}</td>\n                                    <td md-cell>\n                                        <span class="status" ng-class="\'status-\' + order.status">\n                                    {{::order.status}}\n                                </span>\n                                    </td>\n                                    <td md-cell>{{::order.total | currency}}</td>\n                                    <td md-cell>\n                                        <md-button ng-click="vm.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                        </md-button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </md-table-container>\n                    <md-table-pagination md-limit="vm.query.limit" md-page="vm.query.page" md-total="{{vm.salesData.orders.length}}" md-page-select></md-table-pagination>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n</md-tabs>\n'),
        e.put("app/purchase/purchase-page.tmpl.html", '<md-content class="padded-content-page">\n    <div layout="row" layout-align="center center">\n        <h2 class="md-display-3" translate>Welcome to the triangular test page</h2>\n    </div>\n    <div class="margin-20" layout="row" layout-align="center center">\n        <ul class="purchase-list">\n            <li class="md-headline" ng-repeat="test in vm.testData">\n                {{test}}\n            </li>\n        </ul>\n    </div>\n</md-content>'), e.put("app/seed-module/seed-page.tmpl.html", '<md-content class="padded-content-page">\n    <div layout="row" layout-align="center center">\n        <h2 class="md-display-3" translate>Welcome to the triangular test page</h2>\n    </div>\n    <div class="margin-20" layout="row" layout-align="center center">\n        <ul class="seed-list">\n            <li class="md-headline" ng-repeat="test in vm.testData">\n                {{test}}\n            </li>\n        </ul>\n    </div>\n</md-content>'), e.put("app/dashboards/general/dashboard-general.tmpl.html", '<div class="dashboard-container overlay-5 padded-content-page" layout="column">\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget calendar-widget flex class="widget-calendar" palette-background="triCyan:500" content-layout="column" content-layout-align="space-between">\n            <div flex layout="row" layout-align="start center" layout-padding layout-fill>\n                <div flex layout="column">\n                    <h3 class="md-subhead text-ellipsis margin-0">\n                        {{calendarController.currentDay | amDateFormat:\'MMMM\'}}\n                    </h3>\n                    <h3 class="md-subhead text-ellipsis margin-0">\n                        {{calendarController.currentDay | amDateFormat:\'YYYY\'}}\n                    </h3>\n                </div>\n                <div class="widget-buttons">\n                    <md-button class="widget-button md-icon-button" ng-click="calendarController.changeMonth(\'prev\')" aria-label="previous month">\n                        <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n                    </md-button>\n                    <md-button show-gt-md class="widget-button md-icon-button" ng-click="calendarController.changeMonth(\'today\')" aria-label="today">\n                        <md-icon md-font-icon="zmdi zmdi-calendar-alt"></md-icon>\n                    </md-button>\n                    <md-button class="widget-button md-icon-button" ng-click="calendarController.changeMonth(\'next\')" aria-label="next month">\n                        <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n                    </md-button>\n                </div>\n            </div>\n            <md-divider></md-divider>\n            <div layout-padding>\n                <div ui-calendar="calendarController.calendarOptions" ng-model="calendarController.calendarEvents" calendar="calendarWidget"></div>\n            </div>\n        </tri-widget>\n\n\n        <div layout="column" flex layout-margin>\n            <tri-widget palette-background="deep-orange:500" content-layout="column" content-layout-align="space-between">\n                <h2 class="md-display-2 font-weight-100 margin-0" flex layout-padding>Call Sue</h2>\n                <md-divider></md-divider>\n                <div flex="20" layout="row" layout-align="space-between center" layout-padding>\n                    <span>Monday 1st March</span>\n                    <md-button class="md-icon-button" aria-label="call">\n                        <md-icon md-font-icon="zmdi zmdi-phone"></md-icon>\n                    </md-button>\n                </div>\n            </tri-widget>\n            <tri-widget palette-background="purple:300" content-layout="column" content-layout-align="space-between">\n                <h2 class="md-display-2 font-weight-100 margin-0" flex layout-padding>Clean Desk</h2>\n                <md-divider></md-divider>\n                <div flex="20" layout="row" layout-align="space-between center" layout-padding>\n                    <span>Tuesday 2st March</span>\n                    <md-button class="md-icon-button" aria-label="clean">\n                        <md-icon md-font-icon="zmdi zmdi-calendar"></md-icon>\n                    </md-button>\n                </div>\n            </tri-widget>\n        </div>\n        <tri-widget todo-widget class="dashboard-todo-widget" palette-background="light-blue:600" title="Todo List" subtitle="Your current todo list" title-position="top" content-layout-align="space-between">\n            <md-list flex class="padding-left-0">\n                <md-list-item ng-repeat="todo in todos">\n                    <md-checkbox ng-model="todo.done"></md-checkbox>\n                    <p>{{todo.name}}</p>\n                </md-list-item>\n            </md-list>\n        </tri-widget>\n    </div>\n\n    <div layout="row" layout-xs="column" layout-margin>\n       <tri-widget flex weather-widget="Sitia" background-image="assets/images/dashboards/weather.jpg" palette-background="deep-orange:800" content-layout="column" content-layout-align="space-between">\n            <div layout="column" flex layout-align="start center">\n                <p class="md-caption">{{weather.date | amDateFormat:\'dddd, MMMM Do YYYY\'}}</p>\n                <h1 class="font-size-14 margin-top-80 margin-bottom-80 font-weight-100">\n                    {{::weather.temp}}&deg;\n                </h1>\n            </div>\n            <div layout="column" class="full-width overlay-gradient-40">\n                <md-divider></md-divider>\n                <div flex layout="row" layout-margin layout-align="space-between center" class="padding-30">\n                    <i class="wi font-size-2" ng-class="weather.iconClass"></i>\n                    <p class="margin-0">{{::weather.text}}</p>\n                    <p class="margin-0">{{::weather.location}}</p>\n                </div>\n            </div>\n        </tri-widget>\n\n        <tri-widget chat-widget flex class="widget-chat" title="Chat" content-layout="column" content-layout-align="space-between">\n            <md-divider></md-divider>\n            <md-list class="padding-top-20 padding-bottom-0" flex>\n                <md-list-item ng-repeat="chat in ::conversation" class="md-3-line" ng-class="userClass($even)" ng-init="userColor = $even ? \'cyan\' : \'light-green\'">\n                    <img class="md-avatar" ng-src="{{::chat.image}}" alt="{{::chat.name}}">\n                    <div class="md-list-item-text">\n                        <p palette-background="{{::userColor}}:200" ng-repeat="message in ::chat.messages">\n                           {{::message}}\n                        </p>\n                    </div>\n                </md-list-item>\n            </md-list>\n            <div layout="row" layout-align="space-between center">\n                <md-input-container flex class="margin-left-20 margin-right-20">\n                    <label>Message</label>\n                    <input type="text">\n                </md-input-container>\n            </div>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin ng-cloak>\n        <div layout="column" layout-margin layout-fill flex="40" flex-xs="100">\n            <tri-widget class="widget-blog" flex="60" flex-xs="100" content-layout="column" content-layout-align="start center">\n                <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" alt="some bg">\n                <div class="widget-blog-text padding-10" ng-cloak>\n                    <h2>It\'s all about Material</h2>\n                    <p>We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.</p>\n                    <md-fab-speed-dial md-direction="up" class="md-fling">\n                        <md-fab-trigger>\n                            <md-button aria-label="share this post" class="md-fab md-warn">\n                                <md-icon md-font-icon="zmdi zmdi-share"></md-icon>\n                            </md-button>\n                        </md-fab-trigger>\n                        <md-fab-actions>\n                            <md-button aria-label="twitter" class="md-fab md-raised md-mini" ng-click="share(\'Shared on Twitter\', $event)">\n                                <md-icon md-font-icon="fa fa-twitter"></md-icon>\n                            </md-button>\n                            <md-button aria-label="facebook" class="md-fab md-raised md-mini" ng-click="share(\'Shared on Facebook\', $event)">\n                                <md-icon md-font-icon="fa fa-facebook"></md-icon>\n                            </md-button>\n                            <md-button aria-label="google-plus" class="md-fab md-raised md-mini" ng-click="share(\'Shared on Google+\', $event)">\n                                <md-icon md-font-icon="fa fa-google-plus"></md-icon>\n                            </md-button>\n                        </md-fab-actions>\n                    </md-fab-speed-dial>\n                </div>\n            </tri-widget>\n            <div layout="row" layout-margin>\n                <tri-widget flex title="Color palette" subtitle="Color in material design is inspired by bold hues and bright highlights. "  palette-background="deep-orange:800" background-image="assets/images/backgrounds/material-backgrounds/mb-bg-05.jpg" overlay-title title-position="bottom" >\n                </tri-widget>\n            </div>\n        </div>\n\n        <div flex layout="column" layout-margin>\n            <div layout-margin>\n            <tri-widget palette-background="triCyan:500" twitter-widget>\n                <div layout="row" layout-align="space-between center" class="padding-normal">\n                    <i class="fa fa-twitter font-size-4 opacity-50"></i>\n                    <h3 flex hide-xs class="md-subhead">Oxygenna\'s feed</h3>\n                    <div class="widget-buttons">\n                        <md-button class="md-icon-button" ng-click="prevTweet()" aria-label="previous tweet">\n                            <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n                        </md-button>\n                        <md-button class="md-icon-button" ng-click="nextTweet()" aria-label="next tweet">\n                            <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n                        </md-button>\n                    </div>\n                </div>\n                <div layout="column" class="padding-top-0 padding-left-40 padding-right-40 padding-bottom-40">\n                    <md-tabs md-selected="selectedTab" class="dashboard-no-bar-tabs text-center" md-no-pagination md-no-bar md-dynamic-height>\n                        <md-tab ng-repeat="tweet in ::tweets" label="tweet.id">\n                            <div ng-bind="tweet.body" linkify="twitter" class="font-weight-300 font-size-2 font-style-italic line-height-big"></div>\n                        </md-tab>\n                    </md-tabs>\n                </div>\n            </tri-widget>\n            </div>\n            <div layout="row" layout-margin>\n                 <tri-widget flex="50" title="Contacts" contacts-widget content-layout="row">\n                    <md-list flex>\n                        <md-list-item ng-repeat="contact in ::contacts">\n                            <img class="md-avatar" ng-src="{{::contact.image}}" alt="{{::contact.name}}">\n                            <p>{{::contact.name}}</p>\n                            <md-icon md-font-icon="zmdi zmdi-chat" class="md-primary"></md-icon>\n                            <md-divider ng-hide="$last"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </tri-widget>\n                <tri-widget palette-background="deep-orange:600">\n                    <img class="full-width" src="assets/images/avatars/avatar-big.png" alt="my face">\n\n                    <div>\n                        <md-divider></md-divider>\n                        <h2 class="opacity-90 margin-10 text-center">\n                            About me\n                        </h2>\n                        <p class="md-body-2 opacity-80 padding-normal padding-top-0 text-center">\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus.\n                        </p>\n                    </div>\n                </tri-widget>\n            </div>\n        </div>\n    </div>\n</div>\n'), e.put("app/dashboards/examples/widget-backgrounds.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Background Image" subtitle="Use any image as a background" background-image="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" title-position="top"  content-layout="center center" overlay-title palette-background="triCyan:600">\n        <p class="padding-100">\n            <!-- Your Content -->\n        </p>\n    </tri-widget>\n    <tri-widget flex title="Background Image" subtitle="Use any image as a background" background-image="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" title-position="bottom"  content-layout="center center" overlay-title palette-background="triCyan:600">\n        <p class="padding-100">\n            <!-- Your Content -->\n        </p>\n    </tri-widget>\n</div>'), e.put("app/dashboards/examples/widget-colors.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Amber Widget" subtitle="using the 300 hue" title-position="top" palette-background="amber:300">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Amber Widget" subtitle="using the 400 hue" title-position="top" palette-background="amber:400">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Amber Widget" subtitle="using the 500 hue" title-position="top" palette-background="amber:500">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Amber Widget" subtitle="using the 600 hue" title-position="top" palette-background="amber:600">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n</div>\n<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Lime Widget" subtitle="using the 300 hue" title-position="top" palette-background="lime:300">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Lime Widget" subtitle="using the 400 hue" title-position="top" palette-background="lime:400">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Lime Widget" subtitle="using the 500 hue" title-position="top" palette-background="lime:500">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Lime Widget" subtitle="using the 600 hue" title-position="top" palette-background="lime:600">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n</div>'), e.put("app/dashboards/examples/widget-draggable-vertical.tmpl.html", '<div class="drag-container" dragula=\'"drag-container"\' layout="column" layout-xs="column" layout-align="space-between" layout-margin>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You only need to specify the container you want to use.\' | triTranslate}}" title-position="top" palette-background="blue-grey:500" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You can re-order these widgets inside the container.\' | triTranslate}}" title-position="top" palette-background="blue-grey:600" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'It works for all elements, not only widgets!\' | triTranslate}}" title-position="top" palette-background="blue-grey:700" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'Moving them outside their container is not quite possible.\' | triTranslate}}" title-position="top" palette-background="blue-grey:800" background="primary"></tri-widget>\n</div>\n'), e.put("app/dashboards/examples/widget-draggable.tmpl.html", '<div class="drag-container" dragula=\'"drag-container"\' layout="row" layout-xs="row" layout-align="start center" layout-margin>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You only need to specify the container you want to use.\' | triTranslate}}" title-position="top" palette-background="blue-grey:500" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You can re-order these widgets inside the container.\' | triTranslate}}" title-position="top" palette-background="blue-grey:600" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'It works for all elements, not only widgets!\' | triTranslate}}" title-position="top" palette-background="blue-grey:700" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'Moving them outside their container is not quite possible.\' | triTranslate}}" title-position="top" palette-background="blue-grey:800" background="primary"></tri-widget>\n</div>\n'), e.put("app/dashboards/examples/widget-title-above.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Some Title" subtitle="Positioned above the image" title-position="top">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Some Title" subtitle="Positioned above the image" title-position="bottom" >\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n</div>'), e.put("app/dashboards/examples/widget-title-side.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget title="Some Title" subtitle="Positioned to the right of the image" title-position="right">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-04.jpg" />\n    </tri-widget>\n    <tri-widget title="Some Title" subtitle="Positioned to the left of the image" title-position="left">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-04.jpg" />\n    </tri-widget>\n</div>'), e.put("app/dashboards/sales/dashboard-sales.tmpl.html", '<div class="padded-content-page">\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>供给管理 / 售卖方式</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height>\n            <md-tab label="OSS">\n                <div class="md-tabs-content padding-40">\n                    <div class="sales-dashboard" layout="column">\n                        <div layout="row" layout-xs="column" layout-margin>\n                            <tri-widget flex content-layout="column" content-layout-align="center" class=" padding-normal">\n                                <!-- <ul class="nav nav-tabs" role="tablist">\n                                    <li role="presentation" class="active">\n                                        <a href="javascript:;" role="tab" data-toggle="tab">售卖方式<em class="caret"></em></a>\n                                        <ul class="dropdown-menu">\n                                            <li><a href="javascript:;">汇总</a></li>\n                                            <li><a href="javascript:;">细分</a></li>\n                                        </ul>\n                                    </li>\n                                    <li role="presentation"><a href="javascript:;" role="tab" data-toggle="tab">售卖数据</a></li>\n                                    <li role="presentation">\n                                        <a href="javascript:;" role="tab" data-toggle="tab">销售预测<em class="caret"></em></a>\n                                        <ul class="dropdown-menu">\n                                            <li><a href="javascript:;">按量汇总</a></li>\n                                            <li><a href="javascript:;">包年包月汇总</a></li>\n                                        </ul>\n                                    </li>\n                                </ul> -->\n                                <div class="tab-content">\n                                    <div role="tabpanel" class="tab-pane active" id="home">\n                                        <md-table-container>\n                                            \n                                            <div role="presentation" class="divider"></div>\n                                            <md-button class="md-raised"><a href="javascript:;" onclick="return ExcellentExport.excel(this, \'tableData\', \'Sheet Name Here\');">Export to Excel</a></md-button>\n                                            \n                                            \n                                            <div class="overflow-auto">\n                                                <table md-table class="md-data-table" id="tableData">\n                                                    <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                                                        <tr md-row>\n                                                            <th md-column ng-repeat="(key, value) in vm.salesData.aSalseTitle" md-order-by="{{value}}" ng-bind="value" data-val="{{value}}" ng-if="value != \'modeId\' && value != \'product\'"></th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody md-body>\n                                                        <tr md-row ng-repeat="order in vm.salesData.result | orderBy: vm.query.order">\n                                                            <td md-ccell class="md-cell" ng-repeat="(key, value) in order" ng-if="key != \'modeId\' && key != \'product\' " ng-bind="value ? value : \'-\' " data-val="{{key}}"></td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </md-table-container>\n                                        <md-table-pagination md-limit="vm.query.limit" md-page="vm.query.page" md-total="{{vm.salesData.testOrders.length}}" md-page-select></md-table-pagination>\n                                    </div>\n                                    <div role="tabpanel" class="tab-pane" id="profile">...</div>\n                                    <div role="tabpanel" class="tab-pane" id="messages">...</div>\n                                    <div role="tabpanel" class="tab-pane" id="settings">...</div>\n                                </div>\n                            </tri-widget>\n                        </div>\n                    </div>\n                </div>\n            </md-tab>\n            <!-- <md-tab label="VPC">\n                <div class="md-tabs-content padding-40">\n                  <tri-widget title="Sales" subtitle="{{vm.dateRange.start | amDateFormat:\'MMMM Do YYYY\'}} - {{vm.dateRange.end | amDateFormat:\'MMMM Do YYYY\'}}" palette-background="triCyan:800" class="padding-left-40 padding-right-40 padding-top-20 padding-bottom-20 margin-normal no-shadow">\n                      <canvas height="300" class="chart-line" chart-data="vm.chartLineData.data" chart-labels="vm.chartLineData.labels" chart-series="vm.chartLineData.series" chart-options="vm.chartLineData.options" chart-colours="vm.chartLineData.colors"></canvas>\n                  </tri-widget>\n                  <div layout="row" layout-xs="column" layout-margin dragula=\'"drag-analytics-container"\'>\n                      <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n                          <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalSales" duration="1.5" decimals="0"></p>\n                          <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Sales</p>\n                      </tri-widget>\n                      <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n                          <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalEarnings" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n                          <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Earnings</p>\n                      </tri-widget>\n                      <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n                          <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="971315.53" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n                          <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>All Time Earnings</p>\n                      </tri-widget>\n                  </div> \n                </div>\n            </md-tab>\n            <md-tab label="Dashboard">\n                <div class="md-tabs-content padding-40">\n                    <div layout="row" layout-xs="column" layout-margin>\n                    <tri-widget flex flex-xs="100" title="Order Status" content-padding>\n                    <canvas class="chart-doughnut" chart-data="vm.chartPieData.data" chart-legend="true" chart-labels="vm.chartPieData.labels"></canvas>\n                    </tri-widget>\n                    <tri-widget flex flex-xs="100" title="Top Product Categories" content-padding>\n                    <canvas class="chart-bar" chart-data="vm.chartBarData.data" chart-labels="vm.chartBarData.labels" chart-legend="true" chart-options="vm.chartBarData.options" chart-colours="vm.chartBarData.colours" chart-series="vm.chartBarData.series"></canvas>\n                    </tri-widget>\n                    </div>\n                </div>\n            </md-tab>\n            <md-tab label="供应链系统权限和角色">\n                <div class="md-tabs-content padding-40">\n                </div>\n            </md-tab> -->\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/dashboards/sales/date-change-dialog.tmpl.html", '<md-dialog flex="60" flex-xs="100">\n    <md-toolbar class="toolbar-default">\n        <div class="md-toolbar-tools">\n            <h2 flex translate>Select a date range</h2>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="md-dialog-content">\n        <div layout="row" layout-padding>\n            <div flex layout="column" layout-align="center center">\n                <h2 translate>Start Date</h2>\n                <md-datepicker ng-model="vm.start" md-placeholder="\'Start Date\' | triTranslate"></md-datepicker>\n            </div>\n            <div layout="column" layout-align="center center">\n                <md-icon style="font-size:2.4em" md-font-icon="zmdi zmdi-long-arrow-right"></md-icon>\n            </div>\n            <div flex layout="column" layout-align="center center">\n                <h2 translate>End Date</h2>\n                <md-datepicker ng-model="vm.end" md-placeholder="\'End Date\' | triTranslate"></md-datepicker>\n            </div>\n        </div>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.cancelClick()" aria-label="{{\'Cancel\' | triTranslate}}" translate="Cancel"></md-button>\n        <md-button ng-click="vm.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>'), e.put("app/dashboards/sales/fab-button.tmpl.html", '<md-button ng-click="vm.changeDate($event)" class="md-fab md-accent md-fab-bottom-right" aria-label="change date">\n    <md-icon md-font-icon="zmdi zmdi-calendar-alt"></md-icon>\n</md-button>\n'), e.put("app/dashboards/sales/order-dialog.tmpl.html", '<md-dialog class="order-dialog mobile-fullwidth-dialog" flex="60" flex-xs="100" ng-init="dataset=vm.order.plancodeInventoryItems">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex >\n                <span translate>PlanCode :</span><span>{{vm.order.planCode}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="vm.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="md-dialog-content">\n    <div ng-repeat="data in dataset" class="position-relative overflow-hidden table-box" data-open="{{$index > 0 ? false : true}">\n        <div column-status></div>\n        <div>\n            <div flex layout="row" class="margin-bottom-10" ng-repeat="(key, value) in data" ng-if="!arrayTrue(value)">\n                <div flex>\n                    <strong translate ng-bind="key"></strong>\n                </div>\n                <div flex>\n                    <span ng-bind="value"></span>\n                </div>\n            </div>\n             \n            <div ng-init="inventoryAttributes=data.inventoryAttributes" ng-if="currentType(inventoryAttributes).lengths()>0">\n                <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n                <table class="order-dialog-product-table md-table">\n                    <caption style="font-size: 2rem">inventoryAttributes</caption>\n                    <thead>\n                        <tr>\n                            <th translate ng-repeat="(key, value) in inventoryAttributes[0]" ng-bind="key" ng-if="key != \'clusterName\'" ng-click="consoles(subData)"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat="column in inventoryAttributes">\n                            <td ng-repeat="(key, value) in column" ng-bind="value ? value : \'-\'" ng-if="key != \'clusterName\'"></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div ng-init="resourceInventories=data.resourceInventories" \n            in-if="currentType(resourceInventories).lengths()>0"\n            >\n            \n                <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n                <table class="order-dialog-product-table md-table">\n                    <caption style="font-size: 2rem">resourceInventories</caption>\n                    <thead>\n                        <tr>\n                            <th translate ng-repeat="(key, value) in resourceInventories[0]" ng-bind="key"  ng-if="key == \'total\'|| key == \'used\'|| key == \'available\'|| key == \'reserved\'|| key == \'fragment\'|| key == \'expired\'"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat="column in resourceInventories">\n                            <td ng-repeat="(key, value) in column" ng-bind="value ? value : \'-\'" ng-if="key == \'total\'|| key == \'used\'|| key == \'available\'|| key == \'reserved\'|| key == \'fragment\'|| key == \'expired\'"></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>'),
        e.put("app/dashboards/social/dashboard-social.tmpl.html", '<div class="dashboard-social-header padding-20 padding-top-100 overlay-gradient-30" layout="row" layout-align="start center" style="background: url(assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg) no-repeat; background-size: cover;">\n    <div class="margin-right-20">\n        <img src="assets/images/avatars/avatar-5.png" alt="girl-avatar" class="make-round" width="100"/>\n    </div>\n    <div class="text-light">\n        <h3 class="font-weight-600 margin-bottom-0 text-light">Christos Varoufakis</h3>\n        <p class="font-weight-300 margin-top-0 margin-bottom-0">Web Designer, Eroticist and Spy</p>\n        <p class="margin-top-0"><md-icon md-font-icon="zmdi zmdi-pin color-inherit"></md-icon> Athens, Greece</p>\n     </div>\n</div>\n<md-tabs md-dynamic-height md-border-bottom class="tabs-tall">\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>Tweets</span>\n            <span class="display-block">11.4K</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column">\n                <tri-widget layout-margin flex="50" flex-xs="100" avatar="assets/images/avatars/avatar-5.png" palette-background="blue:800" title="Christos Varoufakis" subtitle="@christos - 11h" title-position="top" content-layout-align="start center" content-layout="column">\n                    <div linkify="twitter" class="font-weight-300 md-headline font-style-italic line-height-big margin-bottom-20 padding-normal" >\n                        Don\'t miss it! A Material Design Avatar set with 1440 avatars! http://sellfy.com/p/EUcC/ #avatars #materialdesign\n                    </div>\n                    <img src="assets/images/dashboards/tweet.jpg" alt="some image">\n                </tri-widget>\n                <div flex layout="column">\n                    <tri-widget layout-margin flex palette-background="blue:500" avatar="assets/images/avatars/avatar-2.png" title="Kate Smith" subtitle="@christos - 12h" title-position="top">\n                        <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                            Got some awesome news! Triangular 1.1.2 our new #AngularJS admin template is out now!  FAB Speed Dial & FAB Toolbar added. Enjoy!\n                        </div>\n                    </tri-widget>\n                    <tri-widget layout-margin flex palette-background="light-blue:500" avatar="assets/images/avatars/avatar-6.png" title="Jane Smith" subtitle="@christos - 14h" title-position="top">\n                        <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                            Don\'t miss our latest Angular Material Design Admin Template: http://goo.gl/0Yxm1U  #angularJS #material #webdesign\n                        </div>\n                    </tri-widget>\n                    <tri-widget layout-margin flex palette-background="triCyan:500" avatar="assets/images/avatars/avatar-5.png" title="Christos Varoufakis" subtitle="@christos - 16h" title-position="top">\n                        <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                            New Freebie! Material Design Image fonts! In high res png\'s http://goo.gl/j1fWZz  #MaterialDesign #webdesign\n                        </div>\n                    </tri-widget>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column">\n                <tri-widget layout-margin flex palette-background="indigo:500" avatar="assets/images/avatars/avatar-1.png" title="Manos Proistakis" subtitle="@christos - 16h" title-position="top">\n                    <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                        Don\'t miss our latest Angular Material Design Admin Template: http://goo.gl/0Yxm1U  #angularJS #material #webdesign\n                    </div>\n                </tri-widget>\n                <tri-widget layout-margin flex palette-background="deep-purple:500" avatar="assets/images/avatars/avatar-4.png" title="Despoina" subtitle="@christos - 16h" title-position="top">\n                    <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                        New Freebie! Material Design Image fonts! In high res png\'s http://goo.gl/j1fWZz  #MaterialDesign #webdesign\n                    </div>\n                </tri-widget>\n                <tri-widget layout-margin flex palette-background="purple:500" avatar="assets/images/avatars/avatar-1.png" title="Manos Proistakis" subtitle="@christos - 16h" title-position="top">\n                    <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                        Triangular 1.1.2 our new #AngularJS admin template is out now!  FAB Speed Dial & FAB Toolbar added. Enjoy!\n                    </div>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>Following</span>\n            <span class="display-block">3,220</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-26.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-2.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Morris Onions</h4>\n                        <p class="md-caption margin-0">@morris</p>\n                        <p class="md-body-1">Senior Software Test Engineer at Progressive, Indie Game Developer, Cleveland Game Devs member, a cyberpunk before it was cool & a geek Dad.</p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-12.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-6.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Sam Cook</h4>\n                        <p class="md-caption margin-0">@scook</p>\n                        <p class="md-body-1">Intermediary acquisition customer-facing return on investment customer-facing conscientious outsourcing incrementally increasing sales experienced and confident.</p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-30.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-5.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Manos proistakis</h4>\n                        <p class="md-caption margin-0">@proistak</p>\n                        <p class="md-body-1">Recruiting key personnel effective management and mentoring of the team acquiring new clients maximised returns in short time frame. </p>\n                    </div>\n                </tri-widget>\n            </div>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-40.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-6.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Jane Onions</h4>\n                        <p class="md-caption margin-0">@morris</p>\n                        <p class="md-body-1">Entrepreneurial, brand strategy key relationship management cross-functional; handling customer complaints. Preparing financial data going to the cinema dynamic self starter easy to work with. </p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-07.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-4.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Christine Jackson</h4>\n                        <p class="md-caption margin-0">@scook</p>\n                        <p class="md-body-1">Presenting to senior management streamlined operations outside the box. Incrementally increasing sales customer-centric, commercially minded increased revenue customer-facing.</p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-18.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-1.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">John Langan</h4>\n                        <p class="md-caption margin-0">@proistak</p>\n                        <p class="md-body-1">Recruiting key personnel effective management and mentoring of the team acquiring new clients maximised returns in short time frame. </p>\n                    </div>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>Favorites</span>\n            <span class="display-block">578</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget class="flex" flex="70" flex-xs="100" title="Favorites" content-layout="column" content-layout-align="start center">\n                    <md-divider></md-divider>\n                    <md-list>\n                        <md-list-item class="md-2-line" ng-repeat="fave in ::vm.favorites">\n                            <img ng-src="{{::fave.avatar}}" class="md-avatar"/>\n                            <div class="md-list-item-text">\n                                <div layout="row">\n                                    <span flex class="md-subhead text-dark">\n                                        {{::fave.name}}\n                                        <span class="text-gray">@{{::fave.user}}</span>\n                                    </span>\n                                    <span class="md-caption" am-time-ago="fave.date"></span>\n                                </div>\n                                <p linkify="twitter">{{::fave.tweet}}</p>\n                            </div>\n                            <md-divider></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </tri-widget>\n                <div flex layout="column">\n                    <tri-widget flex class="margin-bottom-10" title="Who to follow" content-layout="column" content-layout-align="space-around" palette-background="triCyan:500">\n                        <md-divider></md-divider>\n                        <md-list >\n                            <md-list-item class="md-2-line" ng-repeat="follow in ::vm.whotofollow">\n                                <img ng-src="{{::follow.avatar}}" class="md-avatar"/>\n                                <div class="md-list-item-text">\n                                    <h3>{{::follow.name}}</h3>\n                                    <h4>@{{::follow.user}}</h4>\n                                    <md-icon md-font-icon="zmdi zmdi-account-add" ng-click="doSecondaryAction($event)" class="md-secondary md-hue-3"></md-icon>\n                                </div>\n                                <md-divider ng-hide="::$last"></md-divider>\n                            </md-list-item>\n                        </md-list>\n                    </tri-widget>\n                    <tri-widget flex title="Trends" content-layout="column" content-layout-align="center start" palette-background="triCyan:500">\n                        <md-divider></md-divider>\n                        <md-list>\n                            <md-list-item ng-repeat="trend in ::vm.trends">\n                                <p linkify="twitter">{{::trend}}</p>\n                                <md-divider ng-hide="::$last"></md-divider>\n                            </md-list-item>\n                        </div>\n                    </tri-widget>\n                </div>\n            </div>\n        </md-tab-body>\n    </md-tab>\n</md-tabs>\n\n'), e.put("app/dashboards/stock/dashboard-stock.tmpl.html", '<div class="padded-content-page">\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>供给管理 / 库存</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height>\n            <md-tab label="OSS">\n                <div class="md-tabs-content padding-40">\n                    <div class="sales-dashboard" layout="column">\n                        <div layout="row" layout-xs="column" layout-margin>\n                            <tri-widget flex content-layout="column" content-layout-align="center" class=" padding-normal">\n                               \n                                <div class="tab-content">\n                                    <div role="tabpanel" class="tab-pane active" id="home">\n                                        <md-table-container>\n                                            <dl class="padding-normal">\n                                                <dt class="line-height-bigger margin-bottom-10">选择显示项</dt>\n                                                <dd>\n                                                    <span select-all></span>\n                                                    <span class="width-118 margin-left-10 display-inline-block">\n                                                    <md-checkbox style="font-size: 12px;" class="Primary">\n                                                    <span style="color:red">反选</span>\n                                                    </md-checkbox>\n                                                    </span>\n                                                    <span class="width-118 margin-left-10 display-inline-block" ng-repeat="(key, value) in vm.salesData.aSalseTitle" ng-model="b" ng-click="tableDataShow(key,b=!b)"  ng-if="value != \'id\' && value != \'productClass\'">\n                                                    <md-checkbox style="font-size: 12px;" class="Primary" ng-class="{\'md-checked\': $index < 6}">\n                                                    <span ng-bind="value"></span>\n                                                    </md-checkbox>\n                                                    </span>\n                                                </dd>\n                                            </dl>\n                                            <div role="presentation" class="divider"></div>\n                                            <md-button class="md-raised"><a download="somedata.xls" href="#" onclick="return ExcellentExport.excel(this, \'tableData\', \'123\');">Export to Excel</a></md-button>\n                                            \n                                            <div class="overflow-auto">\n                                                <table md-table class="md-data-table" id="tableData">\n                                                    <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                                                        <tr md-row>\n                                                            <th md-column ng-repeat="(key, value) in vm.salesData.aSalseTitle" md-order-by="{{value}}" ng-bind="value" data-val="{{value}}" ng-if="value != \'id\' && value != \'productClass\'"></th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody md-body>\n                                                        <tr md-row ng-repeat="order in vm.salesData.result | orderBy: vm.query.order">\n                                                            <td md-ccell class="md-cell" ng-repeat="(key, value) in order" ng-if="key!=\'plancodeInventoryItems\' && key != \'id\' && key != \'productClass\'" ng-bind="value ? value : \'-\' " data-val="{{key}}"></td>\n                                                            <td>\n                                                                <md-button ng-click="vm.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                                                    <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                                                </md-button>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </md-table-container>\n                                        <md-table-pagination md-limit="vm.query.limit" md-page="vm.query.page" md-total="{{vm.salesData.testOrders.length}}" md-page-select></md-table-pagination>\n                                    </div>\n                                    <div role="tabpanel" class="tab-pane" id="profile">...</div>\n                                    <div role="tabpanel" class="tab-pane" id="messages">...</div>\n                                    <div role="tabpanel" class="tab-pane" id="settings">...</div>\n                                </div>\n                            </tri-widget>\n                        </div>\n                    </div>\n                    <!-- <div class="sales-dashboard layout-column" md-dynamic-height>\n                        <div layout="row" layout-xs="column" layout-margin>\n                            <tri-widget chartjs-line-widget title="整体库存率(按地区)" subtitle="数据截止（20161216）" content-layout="row" content-padding>\n                                <canvas flex class="chart-line" chart-data="data" chart-labels="labels" chart-legend="true" chart-series="series" chart-options="options"></canvas>\n                            </tri-widget>\n                        </div>\n                    </div> -->\n                </div>\n            </md-tab>\n            <!-- <md-tab label="VPC">\n                <div class="md-tabs-content padding-40">\n                  <tri-widget title="Sales" subtitle="{{vm.dateRange.start | amDateFormat:\'MMMM Do YYYY\'}} - {{vm.dateRange.end | amDateFormat:\'MMMM Do YYYY\'}}" palette-background="triCyan:800" class="padding-left-40 padding-right-40 padding-top-20 padding-bottom-20 margin-normal no-shadow">\n                      <canvas height="300" class="chart-line" chart-data="vm.chartLineData.data" chart-labels="vm.chartLineData.labels" chart-series="vm.chartLineData.series" chart-options="vm.chartLineData.options" chart-colours="vm.chartLineData.colors"></canvas>\n                  </tri-widget>\n                  <div layout="row" layout-xs="column" layout-margin dragula=\'"drag-analytics-container"\'>\n                      <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n                          <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalSales" duration="1.5" decimals="0"></p>\n                          <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Sales</p>\n                      </tri-widget>\n                      <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n                          <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalEarnings" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n                          <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Earnings</p>\n                      </tri-widget>\n                      <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n                          <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="971315.53" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n                          <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>All Time Earnings</p>\n                      </tri-widget>\n                  </div>\n                </div>\n            </md-tab> -->\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/dashboards/stock/date-change-dialog.tmpl.html", '<md-dialog flex="60" flex-xs="100">\n    <md-toolbar class="toolbar-default">\n        <div class="md-toolbar-tools">\n            <h2 flex translate>Select a date range</h2>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="md-dialog-content">\n        <div layout="row" layout-padding>\n            <div flex layout="column" layout-align="center center">\n                <h2 translate>Start Date</h2>\n                <md-datepicker ng-model="vm.start" md-placeholder="\'Start Date\' | triTranslate"></md-datepicker>\n            </div>\n            <div layout="column" layout-align="center center">\n                <md-icon style="font-size:2.4em" md-font-icon="zmdi zmdi-long-arrow-right"></md-icon>\n            </div>\n            <div flex layout="column" layout-align="center center">\n                <h2 translate>End Date</h2>\n                <md-datepicker ng-model="vm.end" md-placeholder="\'End Date\' | triTranslate"></md-datepicker>\n            </div>\n        </div>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.cancelClick()" aria-label="{{\'Cancel\' | triTranslate}}" translate="Cancel"></md-button>\n        <md-button ng-click="vm.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>'), e.put("app/dashboards/stock/fab-button.tmpl.html", '<md-button ng-click="vm.changeDate($event)" class="md-fab md-accent md-fab-bottom-right" aria-label="change date">\n    <md-icon md-font-icon="zmdi zmdi-calendar-alt"></md-icon>\n</md-button>\n'), e.put("app/dashboards/stock/order-dialog.tmpl.html", '<md-dialog class="order-dialog mobile-fullwidth-dialog" flex="60" flex-xs="100" ng-init="dataset=vm.order.plancodeInventoryItems">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex >\n                <span translate>PlanCode :</span><span>{{vm.order.planCode}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="vm.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="md-dialog-content">\n    <div ng-repeat="data in dataset" class="position-relative overflow-hidden table-box" data-open="{{$index > 0 ? false : true}">\n        <div column-status></div>\n        <div>\n            <div flex layout="row" class="margin-bottom-10" ng-repeat="(key, value) in data" ng-if="!CrruntIsArray(value)">\n                <div flex>\n                    <strong translate ng-bind="key"></strong>\n                </div>\n                <div flex>\n                    <span ng-bind="value"></span>\n                </div>\n            </div>\n             \n            <div ng-init="inventoryAttributes=data.inventoryAttributes" ng-if="CurrentLength(data.inventoryAttributes) > 0">\n                <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n                <table class="order-dialog-product-table md-table">\n                    <caption style="font-size: 2rem">inventoryAttributes</caption>\n                    <thead>\n                        <tr>\n                            <th translate ng-repeat="(key, value) in inventoryAttributes[0]" ng-bind="key" ng-if="key != \'clusterName\'" ng-click="consoles(subData)"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat="column in inventoryAttributes">\n                            <td ng-repeat="(key, value) in column" ng-bind="value ? value : \'-\'" ng-if="key != \'clusterName\'"></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div ng-init="resourceInventories=data.resourceInventories" \n            in-if="CurrentLength(inventoryAttributes) > 0 " >\n            \n                <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n                <table class="order-dialog-product-table md-table">\n                    <caption style="font-size: 2rem">resourceInventories</caption>\n                    <thead>\n                        <tr>\n                            <th translate ng-repeat="(key, value) in resourceInventories[0]" ng-bind="key"  ng-if="key == \'total\'|| key == \'used\'|| key == \'available\'|| key == \'reserved\'|| key == \'fragment\'|| key == \'expired\'"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat="column in resourceInventories | limitTo:3">\n                            <td ng-repeat="(key, value) in column" ng-bind="value ? value+\';\'+ i: \'-\'" ng-if="key == \'total\'|| key == \'used\'|| key == \'available\'|| key == \'reserved\'|| key == \'fragment\'|| key == \'expired\'"></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>'), e.put("app/dashboards/widgets/widget-load-data-dialog.tmpl.html", '<md-dialog>\n    <md-toolbar md-theme="{{triSkin.elements.toolbar}}">\n        <div class="md-toolbar-tools">\n            <h2 flex>\n                <span translate>Full Data</span>\n            </h2>\n            <md-button class="md-icon-button" aria-label="Settings">\n                <md-icon md-font-icon="zmdi zmdi-close" ng-click="closeDialog()"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <table class="table">\n            <thead>\n                <tr>\n                    <th ng-repeat="header in data.header">{{header}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat="referral in data.data">\n                    <td ng-repeat="data in referral">{{data}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-dialog-content>\n</md-dialog>'), e.put("app/examples/calendar/calendar-fabs.tmpl.html", '<md-button ng-click="vm.addEvent($event)" class="md-fab md-accent md-fab-bottom-right" aria-label="{{\'Add_EVENT\' | triTranslate}}">\n    <md-icon md-font-icon="zmdi zmdi-plus"></md-icon>\n</md-button>\n'), e.put("app/examples/calendar/calendar.tmpl.html", '<div class="calendar-page" flex="noshrink">\n    <h2 class="font-weight-300 font-size-5 text-light margin-top-60 margin-bottom-30" flex ng-hide="vm.currentView == \'agendaWeek\'">{{vm.currentDay | amDateFormat:vm.viewFormats[vm.currentView]}}</h2>\n    <h2 class="font-weight-300 font-size-5 text-light margin-top-60 margin-bottom-30" flex ng-show="vm.currentView == \'agendaWeek\'">Week {{vm.currentDay | amDateFormat:vm.viewFormats[vm.currentView]}} - {{vm.currentDay | amDateFormat:\'YYYY\'}}</h2>\n\n    <div class="margin-bottom-60" flex ui-calendar="vm.calendarOptions" ng-model="vm.eventSources" calendar="triangular-calendar" class="triangular-calendar"></div>\n</div>\n'), e.put("app/examples/calendar/event-dialog.tmpl.html", '<md-dialog class="mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar class="toolbar-default" ng-style="{ \'background-color\': vm.selectedColor.backgroundColor, color: vm.selectedColor.textColor }">\n        <div class="md-toolbar-tools">\n            <h2>\n                <span translate>{{::vm.dialogData.title}}</span>\n                <span ng-show="vm.event.title"> - {{vm.event.title}}</span>\n            </h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-divider></md-divider>\n\n    <md-dialog-content class="md-dialog-content">\n        <form class="event-dialog-form" name="eventForm">\n            <md-input-container class="md-block">\n                <label translate>Title</label>\n                <input ng-model="vm.event.title" required>\n            </md-input-container>\n            <md-list>\n                <md-list-item layout="row" layout-align="space-between center">\n                    <p translate>All day</p>\n                    <md-switch class="md-secondary" ng-model="vm.event.allDay" ng-change="vm.allDayChanged()"></md-switch>\n                </md-list-item>\n            </md-list>\n            <div class="event-dialog-input-row" layout="row" layout-align="start center">\n                <p flex hide-xs translate>Start</p>\n                <md-datepicker ng-model="vm.start" md-placeholder="Start | triTranslate"></md-datepicker>\n            </div>\n            <div class="event-dialog-input-row" layout="row" layout-align="start center">\n                <p flex translate>Start-TIME</p>\n                <div layout="row" layout-align="end center">\n                    <md-icon class="padding-right-10" md-font-icon="zmdi zmdi-access-time"></md-icon>\n                    <md-select class="padding-right-10" placeholder="{{\'Hour\' | triTranslate}}" ng-model="vm.startTime.hour">\n                        <md-option ng-repeat="hour in vm.dateSelectOptions.hours" ng-value="hour">{{::hour | padding:2}}</md-option>\n                    </md-select>\n                    <md-select class="padding-right-10" placeholder="{{\'Minute\' | triTranslate}}" ng-model="vm.startTime.minute">\n                        <md-option ng-repeat="minute in vm.dateSelectOptions.minutes" ng-value="minute">{{::minute | padding:2}}</md-option>\n                    </md-select>\n                </div>\n            </div>\n            <div class="event-dialog-input-row" layout="row" layout-align="start center" ng-hide="vm.event.allDay">\n                <p translate flex hide-xs>End</p>\n                <md-datepicker ng-model="vm.end" md-placeholder="End | triTranslate"></md-datepicker>\n            </div>\n            <div class="event-dialog-input-row" layout="row" layout-align="start center" ng-hide="vm.event.allDay">\n                <p flex translate>End-TIME</p>\n                <div layout="row" layout-align="end center">\n                    <md-icon class="padding-right-10" md-font-icon="zmdi zmdi-access-time"></md-icon>\n                    <md-select class="padding-right-10" placeholder="{{\'Hour\' | triTranslate}}" ng-model="vm.endTime.hour">\n                        <md-option ng-repeat="hour in vm.dateSelectOptions.hours" ng-value="hour">{{::hour | padding:2}}</md-option>\n                    </md-select>\n                    <md-select class="padding-right-10" placeholder="{{\'Minute\' | triTranslate}}" ng-model="vm.endTime.minute">\n                        <md-option ng-repeat="minute in vm.dateSelectOptions.minutes" ng-value="minute">{{::minute | padding:2}}</md-option>\n                    </md-select>\n                </div>\n            </div>\n            <md-input-container class="md-block">\n                <label translate>Location</label>\n                <input type="text" ng-model="vm.event.location">\n            </md-input-container>\n            <md-input-container class="md-block">\n                <label translate>Description</label>\n                <textarea ng-model="vm.event.description"></textarea>\n            </md-input-container>\n            <md-input-container class="md-block">\n                <div layout="row" layout-align="space-between center">\n                    <p flex translate>Color</p>\n                    <md-select md-container-class="calendar-color-select" placeholder="{{\'Color-PICK\' | triTranslate}}" ng-model="vm.selectedColor" ng-change="vm.colorChanged()">\n                        <md-option ng-value="color" ng-repeat="color in vm.colors">{{color.name}}</md-option>\n                    </md-select>\n                </div>\n            </md-input-container>\n        </form>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <md-button class="md-warn" ng-click="vm.deleteClick()" aria-label="{{\'Delete\' | triTranslate}}" ng-show="vm.edit" translate="Delete"></md-button>\n        <span flex></span>\n        <md-button ng-click="vm.cancelClick()" aria-label="{{\'Cancel\' | triTranslate}}" translate="Cancel"></md-button>\n        <md-button ng-click="vm.okClick()" class="md-primary" ng-disabled="eventForm.$invalid" aria-label="{{vm.dialogData.confirmButtonText | triTranslate}}" translate="{{::vm.dialogData.confirmButtonText}}"></md-button>\n    </md-dialog-actions>\n</md-dialog>'),
        e.put("app/examples/charts/chartjs-bar.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Chart.js uses the HTML5 canvas element. Triangular modifies Chart.js to use the material design palette .</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>ChartJS Bar Chart Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="ChartJsBarController as vm" ng-include="\'app/examples/charts/examples/chartjs-bar.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/chartjs-bar.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/chartjs-bar.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/charts/chartjs-line.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Chart.js uses the HTML5 canvas element. Triangular modifies Chart.js to use the material design palette .</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>ChartJS Line Chart Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="ChartJsLineController as vm" ng-include="\'app/examples/charts/examples/chartjs-line.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/chartjs-line.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/chartjs-line.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/charts/chartjs-pie.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Chart.js uses the HTML5 canvas element. Triangular modifies Chart.js to use the material design palette .</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>ChartJS Pie Chart Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="ChartJsPieController as vm" ng-include="\'app/examples/charts/examples/chartjs-pie.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/chartjs-pie.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/chartjs-pie.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/charts/chartjs-ticker.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Chart.js uses the HTML5 canvas element. Triangular modifies Chart.js to use the material design palette .</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>ChartJS Animated Ticker Chart Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="ChartJsTickerController as vm" ng-include="\'app/examples/charts/examples/chartjs-ticker.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/chartjs-ticker.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/chartjs-ticker.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/charts/google-bar.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Triangular uses the Google Chart Tools Directive Module to bring you all the chart types available from Google Charts.</p>\n\n    <p class="md-subhead">Material Bar Charts have many small improvements over Classic Bar Charts, including an improved color palette, rounded corners, clearer label formatting, tighter default spacing between series, softer gridlines and titles (and the addition of subtitles).</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Google Material Bar Chart Example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="GoogleChartsBarController as vm" ng-include="\'app/examples/charts/examples/google-bar.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/google-bar.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/google-bar.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/charts/google-line.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Triangular uses the Google Chart Tools Directive Module to bring you all the chart types available from Google Charts.</p>\n\n    <p class="md-subhead">Material Line Charts have many small improvements over Classic Line Charts, including an improved color palette, rounded corners, clearer label formatting, tighter default spacing between series, softer gridlines and titles (and the addition of subtitles).</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Google Material Line Chart Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="GoogleChartsLineController as vm" ng-include="\'app/examples/charts/examples/google-line.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/google-line.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/google-line.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/charts/google-scatter.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Triangular uses the Google Chart Tools Directive Module to bring you all the chart types available from Google Charts.</p>\n\n    <p class="md-subhead">Material Scatter Charts have many small improvements over Classic Scatter Charts, including variable opacity for legibility of overlapping points, an improved color palette, clearer label formatting, tighter default spacing, softer gridlines and titles (and the addition of subtitles).</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Google Material Scatter Chart Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="GoogleChartsScatterController as vm" ng-include="\'app/examples/charts/examples/google-scatter.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/charts/examples/google-scatter.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/charts/examples/google-scatter.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/dashboards/dashboard-draggable.tmpl.html", '<div layout="column" class="padded-content-page">\n    <h2>Creating containers with draggable elements</h2>\n    <p>Triangular allows you to easily build amazing containers with draggable elements. The examples below display such a functionality by creating simple containers with draggable widgets. Drag them around in order to re-order them. More examples can be found in analytics and server pages under the dashboard menu.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Horizontal dragging</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-draggable.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-draggable.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p>Example Column container. More complex layouts are also allowed, offering two degrees of freedom in movement.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Vertical dragging</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-draggable-vertical.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-draggable-vertical.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/dashboards/widgets.tmpl.html", '<div layout="column" class="padded-content-page">\n    <p class="md-subhead">Triangular allows you to build stunning dashbords easily using widgets.  Each widget has many different options you can find out how to use some of them below.</p>\n\n\n    <p>Titles & subtitles can be placed above and below the widget content.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Title above and below the content</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-title-above.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-title-above.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <p>Titles & subtitles can also be be placed to the side of the widget content.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Title on the side of the content</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-title-side.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-title-side.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p>You can also use any of <a ui-sref="admin-panel.default.ui-colors">triangulars palette colors</a> for your widgets.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Using palette colours</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-colors.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-colors.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <p>You can also use an image for your widget backgrounds.</p>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Using palette colours</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content" ng-include="\'app/examples/dashboards/examples/widget-backgrounds.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/dashboards/examples/widget-backgrounds.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'), e.put("app/examples/elements/buttons.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Button Examples</h2>\n    <p class="md-subhead">A button consists of text and/or an image that clearly communicates what action will occur when the user touches it.  Triangular provides all the button types recommended in the <a href="http://www.google.com/design/spec/components/buttons.html">material design specification</a></p>\n\n    <h3>Button Types</h3>\n    <p>There are three types of main buttons: </p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Raised Button</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="padding-40 md-tabs-content">\n                    <md-card>\n                        <md-card-content layout="row" ng-include="\'app/examples/elements/examples/button-raised.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/button-raised.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Flat Button</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="padding-40 md-tabs-content">\n                    <md-card>\n                        <md-card-content layout="row" ng-include="\'app/examples/elements/examples/button-flat.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/button-flat.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Floating action button (FAB)</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="padding-40 md-tabs-content">\n                    <md-card>\n                        <md-card-content layout="row" layout-xs="column" layout-padding layout-align="space-around center" ng-include="\'app/examples/elements/examples/button-fab.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/button-fab.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <h3>Example Usage</h2>\n\n    <p>Choosing a button style depends on the primacy of the button, the number of containers on screen, and the overall layout of the screen.</p>\n    <p>First, look at the button’s function: is it important and ubiquitous enough to be a floating action button?</p>\n    <p>Next, choose raised or flat dimensionality depending on the container it will be in and how many z-space layers you have on screen. There should not be layers upon layers upon layers of objects on the screen.</p>\n    <p>Finally, look at your specific layout. You should primarily use one type of button per container. Only mix button types when you have a good reason to, such as emphasizing an important function.</p>\n\n    <md-divider class="margin-top-20 margin-bottom-20"></md-divider>\n\n    <div layout="row" layout-xs="column" layout-align="space-around start">\n        <div flex="40" flex-xs="100" layout="column">\n            <h3 class="md-title">Raised Button Example</h3>\n            <p>Raised buttons emphasize functions that would otherwise get lost on a busy or wide space. They add dimension to mostly flat layouts.</p>\n            <p><strong>Thats not an image, try it out <md-icon hide-xs md-font-icon="zmdi zmdi-chevron-right"></md-icon></strong></p>\n        </div>\n\n        <div flex flex-xs="100" class="elements-buttons-raised-usage md-whiteframe-z1" layout="column">\n            <md-toolbar>\n                <h2 class="md-toolbar-tools">\n                    <span>Raised Button</span>\n                </h2>\n            </md-toolbar>\n            <div class="elements-raised-content">\n                <h3>Uploading</h3>\n                <h1>{{vm.determinateValue}}%</h1>\n                <md-progress-linear class="md-warn" md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}"></md-progress-linear>\n            </div>\n            <div class="elements-raised-buttons" layout="row" layout-align="end center">\n                <md-button class="md-raised md-primary" aria-label="pause">Pause</md-button>\n                <md-button class="md-raised md-warn" aria-label="cancel">Cancel</md-button>\n            </div>\n        </div>\n    </div>\n\n    <md-divider class="margin-top-20 margin-bottom-20"></md-divider>\n\n    <div layout="row" layout-xs="column" layout-align="space-around start">\n        <div flex="40" flex-xs="100" layout="column">\n            <h3 class="md-title">Floating Action Button (FAB)</h3>\n            <p>Floating action buttons are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI and have special motion behaviors related to morphing, launching, and the transferring anchor point.</p>\n            <p><strong>Thats not an image, try it out <md-icon hide-xs md-font-icon="zmdi zmdi-chevron-right"></md-icon></strong></p>\n        </div>\n        <div flex flex-xs="100" class="elements-buttons-fab-usage md-whiteframe-z3" layout="column">\n            <img src="assets/images/dashboards/tweet.jpg" alt="">\n            <md-toolbar>\n                <h2 class="md-toolbar-tools">\n                    <span>Fab Button</span>\n                </h2>\n            </md-toolbar>\n            <md-button class="md-fab md-accent" aria-label="fab button">\n                <md-icon md-font-icon="zmdi zmdi-plus"></md-icon>\n            </md-button>\n        </div>\n    </div>\n\n    <md-divider class="margin-top-20 margin-bottom-20"></md-divider>\n\n    <div layout="row" layout-xs="column" layout-align="space-around start">\n        <div flex="40" flex-xs="100" layout="column">\n            <h3 class="md-title">Flat button</h3>\n            <p>Use flat buttons for contexts such as toolbars and dialogs to avoid gratuitous layering.</p>\n            <p><strong>Thats not an image, try it out <md-icon hide-xs md-font-icon="zmdi zmdi-chevron-right"></md-icon></strong></p>\n        </div>\n        <div flex flex-xs="100" class="elements-buttons-flat-usage md-whiteframe-z3" layout="column">\n            <div class="md-padding">\n                <h2>Would you like to use our location service?</h2>\n                <p>Let us monitor your location to keep you up to date with everything that is happening in your current area.</p>\n            </div>\n            <md-divider></md-divider>\n            <div class="md-padding" layout="row" layout-align="end center">\n                <md-button class="md-primary">Disagree</md-button>\n                <md-button class="md-primary">Agree</md-button>\n            </div>\n        </div>\n    </div>\n\n    <md-divider class="margin-top-20 margin-bottom-20"></md-divider>\n\n    <h3>Button Ripple Options</h2>\n    <p>You can also change the style of ripple effects using the <code>md-ripple-size</code> and <code>md-no-ink</code> attribute</p>\n    <md-tabs class="example-tabs" md-dynamic-height md-border-bottom >\n        <md-tab label="example">\n            <div class="padding-40 md-tabs-content">\n                <md-card>\n                    <md-card-content ng-include="\'app/examples/elements/examples/button-ripple.tmpl.html\'"></md-card-content>\n                </md-card>\n            </div>\n        </md-tab>\n        <md-tab label="HTML">\n            <div class="md-tabs-content">\n                <div flex hljs language="html" include="\'app/examples/elements/examples/button-ripple.tmpl.html\'"></div>\n            </div>\n        </md-tab>\n    </md-tabs>\n\n    <h3>Button States</h3>\n    <p>You can also change the style of ripple effects using the <code>md-ripple-size</code> attribute</p>\n    <md-tabs class="example-tabs" md-dynamic-height md-border-bottom >\n        <md-tab label="example">\n            <div class="padding-40 md-tabs-content">\n                <md-card>\n                    <md-card-content ng-include="\'app/examples/elements/examples/button-disabled.tmpl.html\'"></md-card-content>\n                </md-card>\n            </div>\n        </md-tab>\n        <md-tab label="HTML">\n            <div class="md-tabs-content">\n                <div flex hljs language="html" include="\'app/examples/elements/examples/button-disabled.tmpl.html\'"></div>\n            </div>\n        </md-tab>\n    </md-tabs>\n</div>\n'), e.put("app/examples/elements/cards.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Card Examples</h2>\n    <p class="md-subhead">A card is a piece of paper that contains unique related data; for example, a photo, text, and link all about a single subject. Cards are typically an entry point to more complex and detailed information.</p>\n\n    <p>Cards have a constant width and variable height. The maximum height is limited to what can fit within a single view on a platform, but it can temporarily expand as needed (for example, to display a comment field).  Cards do not flip to reveal information on their back.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Simple Card - with top image</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs elements-cards-example1 margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40" ng-include="\'app/examples/elements/examples/cards-1.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/cards-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Card - with media</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs elements-cards-example1 margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40" ng-include="\'app/examples/elements/examples/cards-2.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/cards-2.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Card - action buttons and titles</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs elements-cards-example1 margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40" ng-include="\'app/examples/elements/examples/cards-3.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/cards-3.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/checkboxes.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Checkbox Examples</h2>\n    <p class="md-subhead">Checkboxes allow the user to select multiple options from a set.  If you have multiple on/off options appearing in a list, checkboxes are a good way to preserve space.</p>\n\n    <p>Checkboxes use animation to communicate focused and pressed states.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Simple Checkbox</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card ng-init="checkboxes = { primary: true, default: true, warn: true }">\n                        <md-card-content class="padding-40" layout-padding layout-align="space-around start" ng-include="\'app/examples/elements/examples/checkboxes-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/checkboxes-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/chips.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Contact Chips Example</h2>\n    <p class="md-subhead">Chips represent complex entities in small blocks, such as a contact.  They can contain a photo, short title string, and brief information.</p>\n\n    <p>Contact chips represent contact information that users have for people in a compact way. They are invoked and inserted into a text field (usually the To field) when the user starts typing a contact’s name, sees the contact’s addresses, and selects the correct one. Contact chips can be added directly to a text field from a menu of contacts.</p>\n\n    <p class="md-caption">Type in the TO, CC or BCC fields to see how the chips work.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Email Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/chips-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/chips-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/chips.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </md-content>\n</div>\n'),
        e.put("app/examples/elements/datepicker.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Datepicker Example</h2>\n    <p>The selected day is indicated by a filled circle. The current day is indicated by a different color and type weight.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Datepicker Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/datepicker-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/datepicker-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </md-content>\n</div>\n'), e.put("app/examples/elements/dialogs.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Popup Dialog Example</h2>\n    <p class="md-subhead">Dialogs inform users about critical information, require users to make decisions, or encapsulate multiple tasks within a discrete process. Use dialogs sparingly because they are interruptive in nature—their sudden appearance forces users to stop their current task and refocus on the dialog content. Not every choice, setting, or detail warrants such interruption and prominence.</p>\n\n    <p>Alternatives to dialogs include simple menus or inline expansion within the current content area. Both approaches present information or options while maintaining the current context and are less disruptive.</p>\n\n    <p class="md-caption">Try creating a dialog with the example below</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Create a dialog</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40" ng-include="\'app/examples/elements/examples/dialog-1.tmpl.html\'"></div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/dialog-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="js" include="\'app/examples/elements/examples/dialog-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </md-content>\n</div>\n'), e.put("app/examples/elements/fab-speed.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Speed Dial Button Example</h2>\n    <p class="md-subhead">The floating action button can fling out related actions upon press.</p>\n\n    <p>The button should remain on screen after the menu is invoked. Tapping in the same spot should either activate the most commonly used action or close the open menu.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>FAB Speed Dial</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-padding layout-align="space-around start" ng-include="\'app/examples/elements/examples/fab-speed-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/fab-speed-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="js" include="\'app/examples/elements/examples/fab-speed-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/fab-toolbar.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">FAB Toolbar Examples</h2>\n    <p class="md-subhead">The floating action button can fling out related actions upon press.</p>\n\n    <p>The button should remain on screen after the menu is invoked. Tapping in the same spot should either activate the most commonly used action or close the open menu.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>FAB Toolbar</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="column" ng-include="\'app/examples/elements/examples/fab-toolbar-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/fab-toolbar-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/grids.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Grid List Example</h2>\n    <p class="md-subhead">Grid lists are an alternative to standard list views. Grid lists are distinct from grids used for layouts and other visual presentations.</p>\n\n    <p>A grid list is best suited to presenting a homogenous data type, typically images, and is optimized for visual comprehension and differentiating between like data types.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Coloured Grid List</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/grids-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/grids-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/grids-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/icons.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Font Icon Examples</h2>\n    <p class="md-subhead">Triangular comes with Material and Font Awesome Icons which can be used in your admin pages and buttons.</p>\n\n    <div class="elements-icons md-whiteframe-z3" layout="column">\n        <md-toolbar class="md-primary">\n            <div class="md-toolbar-tools">\n                <h2>\n                  <span>{{::vm.icons.length}} Font Icons</span>\n                </h2>\n            </div>\n        </md-toolbar>\n\n        <div layout="row" layout-align="space-around center">\n            <md-input-container>\n                <label>Search icons</label>\n                <input type="text" ng-model="searchIcon">\n            </md-input-container>\n            <md-select placeholder="Pick a font family" ng-model="family">\n                <md-option ng-value="family" ng-repeat="family in ::vm.families">{{::family}}</md-option>\n            </md-select>\n        </div>\n\n        <div layout="row" class="md-whiteframe-z1">\n            <md-content>\n                <md-list>\n                    <md-list-item class="md-2-line" ng-repeat="icon in vm.icons | filter:{ name: searchIcon, family: family }" ng-click="vm.selectIcon(icon)">\n                        <div class="md-list-item-text">\n                            <h3>{{::icon.name}}</h3>\n                            <h4>{{::icon.family}}</h4>\n                        </div>\n                        <md-icon class="md-avatar" md-font-icon="{{::icon.className}}"></md-icon>\n                    </md-list-item>\n                </md-list>\n            </md-content>\n            <div class="elements-icons-preview" layout="row" layout-align="center center" flex>\n                <div layout="column" layout-fill>\n                    <p ng-show="vm.selectedIcon == null">Select an icon from the list on the left</p>\n                    <div flex layout="row" layout-align="space-around center" ng-hide="vm.selectedIcon == null">\n                        <div layout="column" layout-align="center center">\n                            <md-button class="md-fab md-primary" aria-label="primary button">\n                                <md-icon ng-class="vm.selectedIcon.className"></md-icon>\n                            </md-button>\n                            <p class="md-caption">Primary</p>\n                        </div>\n                        <div layout="column" layout-align="center center">\n                            <md-button class="md-fab md-accent" aria-label="accent button">\n                                <md-icon ng-class="vm.selectedIcon.className"></md-icon>\n                            </md-button>\n                            <p class="md-caption">Accent</p>\n                        </div>\n                        <div layout="column" layout-align="center center">\n                            <md-button class="md-fab md-warn" aria-label="warn button">\n                                <md-icon ng-class="vm.selectedIcon.className"></md-icon>\n                            </md-button>\n                            <p class="md-caption">Warn</p>\n                        </div>\n                    </div>\n                    <div flex layout="row" layout-align="space-around center" ng-hide="vm.selectedIcon == null">\n                        <div layout="column" ng-repeat="size in [\'16px\',\'24px\', \'36px\', \'48px\']" layout-align="center center">\n                            <md-icon ng-style="{ \'font-size\': size, \'height\': size, \'width\': size }" ng-class="vm.selectedIcon.className"></md-icon>\n                            <p class="md-caption">{{size}}</p>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'), e.put("app/examples/elements/lists.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material List Examples</h2>\n    <p class="md-subhead">Lists present multiple line items in a vertical arrangement as a single continuous element.</p>\n\n    <p>A list consists of a single continuous column of tessellated sub-divisions of equal width called rows that function as containers for tiles.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>List with avatar and text examples</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-padding layout-align="space-around start" ng-include="\'app/examples/elements/examples/lists-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/lists-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <div class="example-code md-whiteframe-z1">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>List with controls examples</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-padding layout-align="space-around center" ng-include="\'app/examples/elements/examples/lists-2.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/lists-2.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/loader.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Page Loader Example</h2>\n    <p class="md-subhead">Use the triangular loader service to turn the page loader on and off when you are making API requests.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Loader Example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-align="space-around center" ng-include="\'app/examples/elements/examples/loader-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/loader-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/loader-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/menus.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Icon Button Examples</h2>\n    <p class="md-subhead">A menu is a temporary piece of material emitted from a button, an action, a pointer, or another control that contains at least two menu items.</p>\n\n    <p>Each menu item is a discrete option or action that can affect the app, the view, or selected elements within a view.</p>\n\n    <p>Here is an example of how menus could be used in a toolbar</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Menu inside a toolbar</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="column" ng-include="\'app/examples/elements/examples/menu-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/menu-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/progress.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Progress Examples</h2>\n    <p class="md-subhead">Make loading content in your app as delightful and painless as possible by minimizing the amount of visual change a user sees before they can view and interact with content. Each operation should only be represented by one activity indicator—for example, one refresh operation should not display both a refresh bar and an activity circle.</p>\n\n    <p>There are two types of indicators: linear and circular. You can use either one for determinate and indeterminate operations.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Linear Progress Bar</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="column" layout-padding layout-margin layout-align="space-between start" ng-include="\'app/examples/elements/examples/progress-linear.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/progress-linear.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Circular Progress Bar</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="column" layout-padding layout-margin layout-align="space-between start" ng-include="\'app/examples/elements/examples/progress-circular.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/progress-circular.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/radios.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Radio Button Examples</h2>\n    <p class="md-subhead">Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.</p>\n\n    <p>Radio buttons use animation to communicate focused and pressed states.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Radio Colors</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-align="space-around center" ng-include="\'app/examples/elements/examples/radios-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/radios-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Image Radios</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="column" layout-align="center center" ng-include="\'app/examples/elements/examples/radios-2.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/radios-2.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/selects.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Select Examples</h2>\n    <p class="md-subhead">Selects allow users to take an action by selecting from a list of choices revealed upon opening a temporary, new sheet of material.</p>\n\n    <p>A grid list is best suited to presenting a homogenous data type, typically images, and is optimized for visual comprehension and differentiating between like data types.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Simple Select</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-padding layout-align="space-around center" ng-include="\'app/examples/elements/examples/select-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/select-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Option Groups</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-padding layout-align="space-around center" ng-include="\'app/examples/elements/examples/select-2.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/select-2.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/sidebars.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Sidebar Examples</h2>\n    <p class="md-subhead">If present, the left and right nav bars can be pinned for permanent display or they can float temporarily as overlays.</p>\n\n    <p>The content in the left nav is ideally navigation- or identity-based. The content in the right nav should be secondary to the main content on a page.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Open a sidebar</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="example-tabs-500-height elements-sidebar-example" ng-include="\'app/examples/elements/examples/sidebars-1.tmpl.html\'">\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/sidebars-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </md-content>\n</div>\n'), e.put("app/examples/elements/sliders.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Slider Examples</h2>\n    <p class="md-subhead">Sliders let users select a value from a continuous or discrete range of values by moving the slider thumb. The smallest value is to the left, the largest to the right. Sliders can have icons to the left and right of the bar that reflect the value intensity. The interactive nature of the slider makes it a great choice for settings that reflect intensity levels, such as volume, brightness, or color saturation.</p>\n\n    <p>Use continuous sliders for subjective settings that do not require a specific value for the user to make meaningful adjustments.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Continuous Slider</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/slider-continuous.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/slider-continuous.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Discrete Slider</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/slider-discrete.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/slider-discrete.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/switches.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Switch Examples</h2>\n    <p class="md-subhead">On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.</p>\n\n    <p>Switches use animation to communicate focused and pressed states.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Control Switches</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content class="padding-40" layout-align="center start" ng-include="\'app/examples/elements/examples/switches-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/switches-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n </div>\n'), e.put("app/examples/elements/tables.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Material Table Examples</h2>\n    <p class="md-subhead">Data tables are used to present raw data sets, and usually appear in desktop enterprise products. Data sets may include three or more columns of data, a corresponding visualization and the ability for users to query and manipulate data at scale.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Simple Example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/table-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/table-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/table-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="SCSS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="css" include="\'app/examples/elements/examples/table-1.tmpl.scss\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p class="md-subhead">Advanced Table with filters, connecting to github api using the <a href="https://github.com/daniel-nagy/md-data-table">md-data-table directive</a>.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>md-data-table Example</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/table-advanced.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/table-advanced.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/table-advanced.controller.js\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="SCSS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="css" include="\'app/examples/elements/examples/table-advanced.tmpl.scss\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'),
        e.put("app/examples/elements/tabs.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Tabs Examples</h2>\n    <p class="md-subhead">Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.</p>\n\n    <p>A tab provides the affordance for displaying grouped content. A tab label succinctly describes the tab’s associated grouping of content.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Tabs example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs-nopadding margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40" style="background: rgba(100, 100, 100, 0.2);">\n                    <md-card>\n                        <md-card-content class="example-tabs-content" ng-include="\'app/examples/elements/examples/tabs-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/tabs-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/textangular.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Text Editor Example</h2>\n    <p class="md-subhead">Triangular includes the <a href="http://textangular.com/">Textangular</a> text editor.</p>\n\n    <p>We have materialised some of the toolbar options so that your text editor will look great.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Email example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-toolbar>\n                            <div class="md-toolbar-tools">\n                                <h2>\n                                    <span>Compose Email</span>\n                                </h2>\n                            </div>\n                        </md-toolbar>\n                        <md-card-content ng-include="\'app/examples/elements/examples/textangular-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/textangular-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/toasts.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Toast Popup Examples</h2>\n    <p class="md-subhead">Toasts provide lightweight feedback about an operation. They show a brief message at the bottom of the screen on mobile and lower left on desktop. Toasts appear above all other elements on screen. Toasts can contain an action.</p>\n\n    <p>They automatically disappear after a timeout or after user interaction elsewhere on the screen, particularly after interactions that summon a new surface or activity. Toasts can be swiped off screen. They do not block input on the screens on which they appear. Show only one snackbar on screen at a time.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Pop a toast</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content example-tabs-500-height" ng-controller="Toast1Controller as vm" ng-include="\'app/examples/elements/examples/toast-1.tmpl.html\'">\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/toast-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/toast-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/toolbars.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Toolbar Examples</h2>\n    <p class="md-subhead">Toolbars are usually used above a content area to display the title of the current page, and show relevant action buttons for that page.</p>\n\n    <p>You can change the height of the toolbar by adding either the md-medium-tall or md-tall class to the toolbar.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Example toolbars</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/elements/examples/toolbar-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/toolbar-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/tooltips.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Tooltip Examples</h2>\n    <p class="md-subhead">Tooltips are labels that appear on hover and focus when the user hovers over an element with the cursor, focuses on an element using a keyboard (usually through the tab key), or, in a touch UI, upon touch (without releasing). They contain textual identification for the element in question. They may also contain brief helper text regarding the function of the element. Nothing within the label can take focus.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Example tooltips</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-align="center center" ng-include="\'app/examples/elements/examples/tooltip-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/tooltip-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/upload.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">File Upload Examples</h2>\n    <p class="md-subhead">Triangular includes the <a href="https://github.com/danialfarid/ng-file-upload">ng-file-upload directive</a> to allow easy upload form creation.</p>\n\n    <p>Here are some examples</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h3>Simple upload button (allow multiple)</h3>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="padding-40 md-tabs-content">\n                    <md-card>\n                        <md-card-content ng-controller="ElementsUpload1Controller as vm" ng-include="\'app/examples/elements/examples/upload-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/upload-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/upload-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h3>Upload button with animation</h3>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="padding-40 md-tabs-content">\n                    <md-card>\n                        <md-card-content ng-controller="ElementsUploadAnimateController as vm" ng-include="\'app/examples/elements/examples/upload-animate.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/upload-animate.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/elements/examples/upload-animate.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/elements/whiteframes.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-display-1">Whiteframe Examples</h2>\n    <p class="md-subhead">Whiteframes provide a variety of layout structures using a consistent approach to surfaces, layering, and shadows.</p>\n\n    <div class="example-code md-whiteframe-z1">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h3>Whiteframe examples</h3>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content elements-whiteframe-example padding-40">\n                    <div layout="column" layout-align="center center" layout-padding ng-include="\'app/examples/elements/examples/whiteframe-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/elements/examples/whiteframe-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>\n'), e.put("app/examples/email/email-dialog.tmpl.html", '<md-dialog class="mobile-fullwidth-dialog">\n    <md-toolbar class="toolbar-default" md-theme="{{vm.triSkin.elements.toolbar}}">\n        <div class="md-toolbar-tools">\n            <h2>\n              <span>{{vm.title}}</span>\n            </h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="vm.cancel()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-divider></md-divider>\n\n    <md-dialog-content class="email-dialog md-padding">\n        <form name="emailForm" novalidate>\n            <div layout="row">\n                <div layout="column" flex>\n                    <md-contact-chips\n                        flex\n                        ng-model="vm.email.to"\n                        md-contacts="vm.queryContacts($query)"\n                        md-contact-name="name"\n                        md-contact-image="image"\n                        md-contact-email="email"\n                        md-require-match\n                        filter-selected="true"\n                        placeholder="{{\'To\' | triTranslate}}"\n                        secondary-placeholder="{{\'To\' | triTranslate}}">\n                    </md-contact-chips>\n                    <div class="email-dialog-ccs ng-hide" layout="column" ng-show="vm.showCCS" >\n                        <md-contact-chips\n                            ng-model="vm.email.cc"\n                            md-contacts="vm.queryContacts($query)"\n                            md-contact-name="name"\n                            md-contact-image="image"\n                            md-contact-email="email"\n                            md-require-match\n                            filter-selected="true"\n                            placeholder="{{\'CC\' | triTranslate}}"\n                            secondary-placeholder="{{\'CC\' | triTranslate}}">\n                        </md-contact-chips>\n                        <md-contact-chips\n                            ng-model="vm.email.bcc"\n                            md-contacts="vm.queryContacts($query)"\n                            md-contact-name="name"\n                            md-contact-image="image"\n                            md-contact-email="email"\n                            md-require-match\n                            filter-selected="true"\n                            placeholder="{{\'BCC\' | triTranslate}}"\n                            secondary-placeholder="{{\'BCC\' | triTranslate}}">\n                        </md-contact-chips>\n                    </div>\n                </div>\n                <md-button class="md-icon-button" ng-click="vm.toggleCCS($event)" aria-label="toggle ccs">\n                    <md-icon md-font-icon ng-class="vm.showCCSIcon"></md-icon>\n                </md-button>\n            </div>\n\n            <md-input-container class="email-subject md-block">\n                <label for="subject" translate>Subject</label>\n                <input ng-model="vm.email.subject" name="subject" required>\n                <div ng-messages="emailForm.subject.$error">\n                    <div ng-message when="required">\n                        <span translate>Please enter a subject for the email.</span>\n                    </div>\n                </div>\n            </md-input-container>\n\n            <text-angular class="email-content" name="emailBody" ng-model="vm.email.content" ta-target-toolbars="editor-toolbar"></text-angular>\n        </form>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <text-angular-toolbar name="editor-toolbar" class="email-dialog-editor-toolbar" ta-toolbar-active-button-class="active"></text-angular-toolbar>\n        <span flex></span>\n        <md-button ng-click="vm.send()" class="md-primary" ng-disabled="emailForm.$invalid" aria-label="send" translate="Send"></md-button>\n    </md-dialog-actions>\n</md-dialog>'), e.put("app/examples/email/email.tmpl.html", '<md-content class="md-padding full-width">\n    <md-card>\n        <md-card-header>\n            <md-card-avatar>\n                <img class="md-user-avatar" ng-src="{{::vm.email.from.image}}"/>\n            </md-card-avatar>\n            <md-card-header-text>\n                <span class="md-title">{{::vm.email.from.name}}</span>\n                <span class="md-subhead">{{::vm.email.subject}}</span>\n            </md-card-header-text>\n            <md-card-icon-actions>\n                <md-button class="md-icon-button" aria-label="close" ng-click="vm.closeEmail()">\n                    <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n                </md-button>\n            </md-card-icon-actions>\n        </md-card-header>\n        <md-divider></md-divider>\n        <md-card-content>\n            <p ng-repeat="paragraph in vm.email.content">{{paragraph}}</p>\n        </md-card-content>\n        <md-divider></md-divider>\n        <md-card-actions layout="row" layout-align="end center">\n            <md-button class="md-icon-button" ng-click="vm.emailAction($event, \'Reply\')" aria-label="Reply">\n                <md-icon md-font-icon="zmdi zmdi-mail-reply"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="vm.emailAction($event, \'Reply_ALL\')" aria-label="Reply All">\n                <md-icon md-font-icon="zmdi zmdi-mail-reply-all"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="vm.emailAction($event, \'Forward\')" aria-label="Forward">\n                <md-icon md-font-icon="zmdi zmdi-forward"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="vm.deleteEmail(vm.email)" aria-label="Delete">\n                <md-icon md-font-icon="zmdi zmdi-delete"></md-icon>\n            </md-button>\n        </md-card-actions>\n    </md-card>\n</md-content>\n'), e.put("app/examples/email/inbox.tmpl.html", '<div flex layout="row">\n    <md-content flex="100" flex-gt-xs="50" flex-gt-lg="40" ng-show="vm.showEmailList">\n        <md-list class="inbox-list">\n            <div ng-repeat="group in vm.emailGroups">\n                <md-subheader class="md-primary" ng-show="group.emails.length > 0">{{::group.name}}</md-subheader>\n                <md-list-item class="inbox-list__email inbox-list__email--animated md-3-line md-long-text" ng-repeat="email in group.emails | orderBy:\'-date\'" ng-click="vm.openMail(email)" ng-class="{ \'inbox-list__email--active\': vm.selectedMail === email.id, \'inbox-list__email--unread\': email.unread }">\n                    <img class="md-avatar" ng-src="{{::email.from.image}}" alt="{{::email.from.name}}">\n                    <div class="md-list-item-text" layout="column">\n                        <h3><span class="md-caption" am-time-ago="email.date"></span>{{::email.from.name}}</h3>\n                        <h4>{{::email.subject}}</h4>\n                        <p>{{::email.content[0] | cut:true:80:\' ...\'}}</p>\n                    </div>\n                    <md-divider ng-if="!$last"></md-divider>\n                </md-list-item>\n            </div>\n        </md-list>\n    </md-content>\n    <div class="md-whiteframe-z1 animate-wrapper" layout="column" layout-align="start center" flex>\n        <div flex id="ui-admin-email" ui-view layout="column" layout-align="start center" class="overflow-auto full-width">\n            <div flex class="inbox-no-email-selected" layout="column" layout-align="center">\n                <h2 hide-xs translate>No email selected</h2>\n            </div>\n        </div>\n    </div>\n</div>\n<md-button ng-click="vm.composeClick($event)" class="md-fab md-accent md-fab-bottom-right" aria-label="{{\'EMAIL.COMPOSE_EMAIL\' | triTranslate}}">\n    <md-icon md-font-icon="zmdi zmdi-edit"></md-icon>\n</md-button>\n'), e.put("app/examples/extras/avatars.tmpl.html", '<md-content class="padded-content-page">\n    <p class="md-subhead">Triangular includes an enormous set of Material Design Avatars. Amazing details and 1000s of combinations. Includes original Adobe Illustrator file as well as 1440 exported images</p>\n\n    <md-grid-list md-cols="6" md-cols-xs="4" md-row-height="1:1" md-gutter="4px">\n        <md-grid-tile md-rowspan="{{::avatar.rowspan}}" md-colspan="{{::avatar.colspan}}" ng-repeat="avatar in ::vm.avatars" ng-style="::{ \'background-image\': \'url(\' + avatar.image + \')\', \'background-size\' : \'cover\' }" palette-background="{{::avatar.color}}:{{::avatar.hue}}">\n            <md-grid-tile-footer>\n                <h3>{{::avatar.title}}</h3>\n            </md-grid-tile-footer>\n        </md-grid-tile>\n    </md-grid-list>\n</md-content>'), e.put("app/examples/extras/blank.tmpl.html", '<div class="padded-content-page">\n    <div layout="row" layout-align="center center">\n        <p>Your content here</p>\n    </div>\n</div>'), e.put("app/examples/extras/gallery-dialog.tmpl.html", '<md-dialog aria-label="{{vm.currentImage.title}}">\n    <md-dialog-content class="md-dialog-content extras-image-dialog">\n        <img ng-src="{{vm.currentImage.urlFull}}" alt="{{vm.currentImage.title}}">\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        {{vm.currentImage.title}}\n        <span flex></span>\n        <md-button ng-click="vm.prev()" class="md-icon-button" aria-label="Close">\n            <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n        </md-button>\n        <md-button ng-click="vm.next()" class="md-icon-button" aria-label="Close">\n            <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n        </md-button>\n    </md-dialog-actions>\n</md-dialog>'), e.put("app/examples/extras/gallery.tmpl.html", '<md-content class="extras-gallery-container">\n    <md-list>\n        <div ng-repeat="day in ::vm.feed">\n            <md-subheader>{{day.date | amCalendar}}</md-subheader>\n            <md-list-item>\n                <md-grid-list flex md-cols="6" md-cols-xs="4" md-row-height="4:3" md-gutter="4px">\n                    <md-grid-tile ng-click="vm.openImage(day, image, $event)" md-rowspan="{{::image.rowspan}}" md-colspan="{{::image.colspan}}" ng-repeat="image in ::day.images" ng-style="::{ \'background-image\': \'url(\' + image.url + \')\', \'background-size\' : \'cover\' }">\n                        <md-grid-tile-footer>\n                            <h3>{{::image.title}}</h3>\n                        </md-grid-tile-footer>\n                    </md-grid-tile>\n                </md-grid-list>\n            </md-list-item>\n        </div>\n    </md-list>\n</md-content>\n'), e.put("app/examples/extras/timeline.tmpl.html", '<div class="overlay-5 padded-content-page" animate-elements>\n    <div class="timeline" layout="row" ng-repeat="event in ::vm.events" ng-attr-layout-align="{{$odd? \'end end\':\'start start\'}}">\n        <div layout="row" flex="50" flex-xs="100" ng-attr-layout-align="{{$odd? \'end\':\'start\'}} center">\n            <div class="timeline-point md-whiteframe-z1" theme-background="primary" md-theme="{{triSkin.elements.content}}">\n                <img ng-src="{{::event.image}}" class="timeline-point-avatar"/>\n                <span class="timeline-point-date">{{::event.date}}</span>\n            </div>\n            <md-divider class="timeline-x-axis" class="margin-0" flex flex-order="2"></md-divider>\n            <tri-widget class="timeline-widget margin-0 flex-70 flex-xs-100 {{::event.classes}}" title="{{::event.title}}" subtitle="{{::event.subtitle}}" title-position="bottom" ng-attr-flex-order="{{$odd? 2:1}}" palette-background="{{::event.palette}}" >\n                <div replace-with=\'{{event.content}}\'></div>\n            </tri-widget>\n            <md-divider class="timeline-y-axis"></md-divider>\n        </div>\n    </div>\n</div>\n'), e.put("app/examples/forms/autocomplete.tmpl.html", '<md-content class="padded-content-page">\n    <p class="md-subhead">You can use autocomplete to search for matches from local or remote data sources.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Autocomplete example</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-controller="Autocomplete1Controller as vm" ng-include="\'app/examples/forms/examples/autocomplete-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/autocomplete-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/forms/examples/autocomplete-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</md-content>'), e.put("app/examples/forms/binding.tmpl.html", '<md-content class="padded-content-page">\n    <p class="md-subhead">Data-binding in Angular apps is the automatic synchronization of data between the model and view components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.</p>\n\n    <p class="md-caption">Try filling in the form below to see what happens to the user data structure in the second panel.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Binding a form to data</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <div ng-controller="Binding1Controller" ng-include="\'app/examples/forms/examples/binding-1.tmpl.html\'" layout="row" layout-xs="column" layout-align="center center"></div>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/binding-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="javascript" include="\'app/examples/forms/examples/binding-1.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</md-content>'), e.put("app/examples/forms/inputs.tmpl.html", '<md-content class="padded-content-page">\n    <p class="md-subhead">Text fields allow the user to input text. They can be single line, with or without scrolling, or multi-line, and can have an icon.</p>\n\n    <p>Touching a text field places the cursor and automatically displays the keyboard. In addition to typing, text fields allow for a variety of other tasks, such as text selection (cut, copy, paste) and data lookup via auto-completion. See Patterns > Selection for text selection design.</p>\n\n    <p>With floating inline labels, when the user engages with the text input field, the labels move to float above the field.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Floating labels</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/forms/examples/inputs-float.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/inputs-float.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p>You can also add informative icons to your input fields.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Forms with icons</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/forms/examples/inputs-icons.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/inputs-icons.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <p>You can use a character counter in fields where a character restriction is in place.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Inputs with counter</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/forms/examples/inputs-counter.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/inputs-counter.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n\n    </div>\n\n    <p>You can also toggle the state of inputs by setting <code>ng-disabled</code></p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Input state</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-align="space-around center" ng-include="\'app/examples/forms/examples/inputs-states.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/inputs-states.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</md-tab>'), e.put("app/examples/forms/validation.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Inform users about the state of the form as they fill it in. Disable form buttons until form reaches a valid state.</p>\n    <p>Note the example below.  The input field is required and also needs a valid email address or a warning message will appear.  Also the Create button will only be enabled when the form is valid.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Form Validation</h2>\n            </div>\n        </md-toolbar>\n\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="padding-40 md-tabs-content">\n                    <md-card>\n                        <md-card-content ng-include="\'app/examples/forms/examples/validation-1.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/forms/examples/validation-1.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n    </div>\n</div>'),
    e.put("app/examples/forms/wizard.tmpl.html", '<div>\n\n    <div layout="row" layout-align="center center">\n        <p flex="70"  flex-xs="90" class="md-headline font-weight-300 text-center text-light" translate>We have combined material tabs and form inputs to create an interactive form wizardController.  We have also added validation messages to all fields and prevented the user from completing a step in the wizard until it is valid.</p>\n    </div>\n\n    <div flex layout="row" layout-align="center center" layout-fill>\n        <md-card flex="90" class="tri-wizard-card md-whiteframe-z1 margin-bottom-100" tri-wizard>\n            <md-toolbar class="md-primary">\n                <div class="md-toolbar-tools" layout="row" layout-align="space-between center">\n                    <h2>Form Wizard</h2><h2> {{triWizard.progress}}% <span translate>Complete</span></h2>\n                </div>\n                <md-progress-linear class="md-accent padding-bottom-10" md-mode="determinate" ng-value="triWizard.progress"></md-progress-linear>\n            </md-toolbar>\n            <md-card-content>\n                <md-tabs class="md-primary" layout-fill md-selected="triWizard.currentStep" md-dynamic-height>\n                    <md-tab id="account">\n                        <md-tab-label>\n                            <span class="oxy-step-label">1</span>\n                            <span translate>Account details</span>\n                        </md-tab-label>\n                        <md-tab-body>\n                            <md-content class="md-padding">\n                                <form name="accountForm" tri-wizard-form novalidate>\n                                    <div>\n                                        <md-input-container class="md-block">\n                                            <label translate>Username</label>\n                                            <input name="username" ng-model="wizardController.data.account.username" required>\n                                            <div ng-messages="accountForm.username.$error" md-auto-hide="false" ng-show="accountForm.username.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                        <md-input-container class="md-block">\n                                            <label>Email</label>\n                                            <input type="email" name="email" ng-model="wizardController.data.account.email" required>\n                                            <div ng-messages="accountForm.email.$error" md-auto-hide="false" ng-show="accountForm.email.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                                <div ng-message when="email">\n                                                    <span translate>Please enter a valid email</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                        <div layout layout-xs="column" flex>\n                                            <md-input-container flex>\n                                                <label translate>Password</label>\n                                                <input type="password" name="password" ng-model="wizardController.data.account.password" required>\n                                                <div ng-messages="accountForm.password.$error" md-auto-hide="false" ng-show="accountForm.password.$touched">\n                                                    <div ng-message when="required">\n                                                        <span translate>This field is required</span>\n                                                    </div>\n                                                </div>\n                                            </md-input-container>\n                                            <md-input-container flex>\n                                                <label translate>Password-CONFIRM</label>\n                                                <input type="password" name="passwordConfirm" ng-model="wizardController.data.account.passwordConfirm" required>\n                                                <div ng-messages="accountForm.passwordConfirm.$error" md-auto-hide="false" ng-show="accountForm.passwordConfirm.$touched">\n                                                    <div ng-message when="required">\n                                                        <span translate>This field is required</span>\n                                                    </div>\n                                                </div>\n                                            </md-input-container>\n                                        </div>\n                                    </div>\n                                </form>\n                            </md-content>\n                        </md-tab-body>\n                    </md-tab>\n                    <md-tab id="address" ng-disabled="accountForm.$invalid">\n                        <md-tab-label>\n                            <span class="oxy-step-label">2</span>\n                            <span translate>Your address</span>\n                        </md-tab-label>\n                        <md-tab-body>\n                            <md-content class="md-padding">\n                                <form name="addressForm" tri-wizard-form>\n                                    <div>\n                                        <div layout layout-xs="column" flex>\n                                            <md-input-container flex>\n                                                <label translate>First name</label>\n                                                <input name="firstName" ng-model="wizardController.data.address.firstName" required>\n                                                <div ng-messages="addressForm.firstName.$error" md-auto-hide="false" ng-show="addressForm.firstName.$touched">\n                                                    <div ng-message when="required">\n                                                        <span translate>This field is required</span>\n                                                    </div>\n                                                </div>\n                                            </md-input-container>\n                                            <md-input-container flex>\n                                                <label translate>Last name</label>\n                                                <input name="lastName" ng-model="wizardController.data.address.lastName" required>\n                                                <div ng-messages="addressForm.lastName.$error" md-auto-hide="false" ng-show="addressForm.lastName.$touched">\n                                                    <div ng-message when="required">\n                                                        <span translate>This field is required</span>\n                                                    </div>\n                                                </div>\n                                            </md-input-container>\n                                        </div>\n                                        <md-input-container class="md-block">\n                                            <label translate>Address Line 1</label>\n                                            <input name="address1" ng-model="wizardController.data.address.line1" required>\n                                            <div ng-messages="addressForm.address1.$error" md-auto-hide="false" ng-show="addressForm.address1.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                        <md-input-container class="md-block">\n                                            <label translate>Address Line 1-2</label>\n                                            <input ng-model="wizardController.data.address.line2">\n                                        </md-input-container>\n                                        <div layout layout-xs="column" flex>\n                                            <md-input-container flex>\n                                                <label translate>Town</label>\n                                                <input ng-model="wizardController.data.address.town">\n                                            </md-input-container>\n                                            <md-input-container flex>\n                                                <label translate>State</label>\n                                                <input ng-model="wizardController.data.address.state">\n                                            </md-input-container>\n                                        </div>\n                                        <div layout layout-xs="column" flex>\n                                            <md-input-container flex>\n                                                <label translate>Zip</label>\n                                                <input name="zip" ng-model="wizardController.data.address.zip" required>\n                                                <div ng-messages="addressForm.zip.$error" md-auto-hide="false" ng-show="addressForm.zip.$touched">\n                                                    <div ng-message when="required">\n                                                        <span translate>This field is required</span>\n                                                    </div>\n                                                </div>\n                                            </md-input-container>\n                                            <md-input-container flex>\n                                                <label translate>Country</label>\n                                                <md-select ng-change="triWizard.updateProgress()" name="country" ng-model="wizardController.data.address.country" required>\n                                                    <md-option value="US" translate>United States</md-option>\n                                                </md-select>\n                                                <div ng-messages="addressForm.country.$error" md-auto-hide="false" ng-show="addressForm.country.$touched">\n                                                    <div ng-message when="required">\n                                                        <span translate>This field is required</span>\n                                                    </div>\n                                                </div>\n                                            </md-input-container>\n                                        </div>\n                                    </div>\n                                </form>\n                            </md-content>\n                        </md-tab-body>\n                    </md-tab>\n                    <md-tab id="billing" ng-disabled="addressForm.$invalid">\n                        <md-tab-label>\n                            <span class="oxy-step-label">3</span>\n                            <span translate>Billing details</span>\n                        </md-tab-label>\n                        <md-tab-body>\n                            <md-content class="md-padding">\n                                <form name="billingForm" tri-wizard-form>\n                                    <div>\n                                        <md-input-container class="md-block">\n                                            <label translate>Credit card number</label>\n                                            <input name="cardNumber" ng-model="wizardController.data.billing.number" required>\n                                            <div ng-messages="billingForm.cardNumber.$error" md-auto-hide="false" ng-show="billingForm.cardNumber.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                        <md-input-container class="md-block">\n                                            <label translate>Name on card</label>\n                                            <input name="cardName" ng-model="wizardController.data.billing.name" required>\n                                            <div ng-messages="billingForm.cardName.$error" md-auto-hide="false" ng-show="billingForm.cardName.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                    </div>\n                                    <div layout layout-xs="column" flex>\n                                        <md-input-container flex>\n                                            <label translate>Expiry date (MM)</label>\n                                            <input name="cardMonth" ng-model="wizardController.data.billing.cardMonth" ng-minlength="2" ng-maxlength="2" ng-pattern="/^(0?[1-9]|1[012])$/" required>\n                                            <div ng-messages="billingForm.cardMonth.$error" md-auto-hide="false" ng-show="billingForm.cardMonth.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                                <div ng-message when="maxlength">\n                                                    <span translate>Month must be in the format MM</span>\n                                                </div>\n                                                <div ng-message when="minlength">\n                                                    <span translate>Month must be in the format MM</span>\n                                                </div>\n                                                <div ng-message when="pattern">\n                                                    <span translate>Month must be in the format MM</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                        <md-input-container flex>\n                                            <label translate>Expiry date (YYYY)</label>\n                                            <input name="cardYear" ng-model="wizardController.data.billing.cardYear" ng-minlength="4" ng-maxlength="4" ng-pattern="/^[0-9]+$/" required>\n                                            <div ng-messages="billingForm.cardYear.$error" md-auto-hide="false" ng-show="billingForm.cardYear.$touched">\n                                                <div ng-message when="required">\n                                                    <span translate>This field is required</span>\n                                                </div>\n                                                <div ng-message when="maxlength">\n                                                    <span translate>Year must be in the format YYYY</span>\n                                                </div>\n                                                <div ng-message when="minlength">\n                                                    <span translate>Year must be in the format YYYY</span>\n                                                </div>\n                                                <div ng-message when="pattern">\n                                                    <span translate>Year must be in the format YYYY</span>\n                                                </div>\n                                            </div>\n                                        </md-input-container>\n                                    </div>\n                                </form>\n                            </md-content>\n                        </md-tab-body>\n                    </md-tab>\n                    <md-tab id="confirm" ng-disabled="billingForm.$invalid">\n                        <md-tab-label>\n                            <span class="oxy-step-label">4</span>\n                            <span translate>Confirmation</span>\n                        </md-tab-label>\n                        <md-tab-body>\n                            <md-content class="md-padding">\n                                <div class="padding-40" flex layout="column" layout-align="center center">\n                                    <md-icon class="big-icon" md-font-icon="zmdi zmdi-cake"></md-icon>\n                                    <h2 class="md-display-2" translate>Congratulations - we will be in touch</h2>\n                                </div>\n                            </md-content>\n                        </md-tab-body>\n                    </md-tab>\n                </md-tabs>\n            </md-card-content>\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button class="md-primary md-raised" ng-click="triWizard.prevStep()" ng-hide="triWizard.currentStep > 2" ng-disabled="triWizard.prevStepDisabled()" translate="Previous"></md-button>\n                <md-button class="md-primary md-raised" ng-click="triWizard.nextStep()" ng-hide="triWizard.progress == 100 && triWizard.currentStep > 1" ng-disabled="triWizard.nextStepDisabled()" translate="Next"></md-button>\n                <md-button class="md-accent md-raised" ng-click="triWizard.currentStep = 3" ng-show="triWizard.progress == 100 && triWizard.currentStep < 3" translate="Send"></md-button>\n            </md-card-actions>\n        </div>\n    </md-card>\n</div>\n'),e.put("app/examples/github/github.tmpl.html", '<div layout="column" layout-align="center center">\n    <h1 class="font-weight-100 font-size-8 margin-top-40 text-light" translate>Join the team</h1>\n    <div layout="row" layout-align="center center">\n        <p flex="70"  flex-xs="90" class="md-headline font-weight-300 text-center text-light" translate>Anyone who buys triangular can now join the team and see changes as they happen, submit pull requests, create issues and get involved!</p>\n    </div>\n\n    <div flex layout="row" layout-align="center center" layout-fill>\n\n        <md-card class="margin-top-40 margin-bottom-200" flex="70" flex-xs="90">\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <h2 translate>Fill in the form below to join</h2>\n                </div>\n            </md-toolbar>\n            <md-card-content>\n                <form name="githubForm">\n                    <md-input-container class="md-block">\n                        <label translate>Triangular Purchase Code</label>\n                        <input name="purchaseCode" ng-model="vm.data.purchaseCode" required>\n                        <div ng-messages="githubForm.purchaseCode.$error">\n                            <div ng-message when="required"><span translate>Enter a triangular Purchase Code</span></div>\n                        </div>\n                    </md-input-container>\n                    <md-autocomplete\n                        md-input-name="githubUser"\n                        md-floating-label="{{\'GitHub Username\' | triTranslate}}"\n                        md-selected-item="vm.data.githubUser"\n                        md-search-text="vm.searchText"\n                        md-items="user in vm.userSearch(vm.searchText)"\n                        md-item-text="user.login"\n                        md-min-length="0"\n                        md-delay="400"\n                        md-autoselect\n                        md-select-on-match\n                        placeholder="Please enter your GitHub username"\n                        md-menu-class="autocomplete-custom-template"\n                        required>\n                        <md-item-template>\n                            <div class="github-user-dropdown" layout="row" layout-align="start center">\n                                <img class="github-user-avatar" ng-src="{{user.avatar_url}}" alt="{{user.login}}">\n                                <span flex>{{user.login}}</span>\n                            </div>\n                        </md-item-template>\n                        <div ng-messages="githubForm.githubUser.$error">\n                            <div ng-message when="required"><span translate>Enter a GitHub Username</span></div>\n                        </div>\n                    </md-autocomplete>\n                </form>\n\n                <div class="margin-top-40" layout="row" layout-align="end center">\n                    <md-button class="md-primary" ng-disabled="githubForm.$invalid" ng-click="vm.register()" translate="Give me access to the repository" aria-label="{{\'Give me access to the repository\' | triTranslate}}"></md-button>\n                </div>\n\n            </md-card-content>\n        </md-card>\n    </div>\n</div>\n'),e.put("app/examples/layouts/composer.tmpl.html", '<div class="padded-content-page">\n    <h2 class="md-heading">Layout Composer</h2>\n    <p class="md-subhead">Use this page to try out the many different page layouts at your disposal when using triangular!</p>\n    <div layout="row" layout-align="center center">\n        <md-card flex>\n            <div layout="column" layout-fill>\n                <md-toolbar>\n                    <div class="md-toolbar-tools">\n                        <h2>Create a page layout</h2>\n                    </div>\n                </md-toolbar>\n            </div>\n            <md-card-content>\n                <div layout="row" layout-align="space-around center">\n                    <label>Toolbar Size</label>\n                    <md-select ng-model="vm.layout.toolbarSize" ng-change="vm.updateOption(\'toolbarSize\')" placeholder="Select a size">\n                        <md-option ng-value="value" ng-repeat="(value, label) in vm.options.toolbarSizes" translate>{{label}}</md-option>\n                    </md-select>\n                </div>\n                <div layout="row" layout-align="space-around center">\n                    <label>Toolbar Background</label>\n                    <md-select ng-model="vm.layout.toolbarClass" ng-change="vm.updateOption(\'toolbarClass\')" placeholder="Select a background">\n                        <md-option ng-value="value" ng-repeat="(value, label) in vm.options.toolbarBackgrounds" translate>{{label}}</md-option>\n                    </md-select>\n                </div>\n                <div layout="row" layout-align="space-around center">\n                    <label>Toolbar Shrink</label>\n                    <md-switch ng-model="vm.layout.toolbarShrink" ng-change="vm.updateOption(\'toolbarShrink\')"></md-switch>\n                </div>\n                <div layout="row" layout-align="space-around center">\n                    <label>Content Background</label>\n                    <md-select ng-model="vm.layout.contentClass" ng-change="vm.updateOption(\'contentClass\')" placeholder="Select a background">\n                        <md-option ng-value="value" ng-repeat="(value, label) in vm.options.toolbarBackgrounds" translate>{{label}}</md-option>\n                    </md-select>\n                </div>\n                <div layout="row" layout-align="space-around center">\n                    <label>Side Menu Size</label>\n                    <md-select ng-model="vm.layout.sideMenuSize" ng-change="vm.updateOption(\'sideMenuSize\')" placeholder="Select a size">\n                        <md-option ng-value="value" ng-repeat="(value, label) in vm.options.sideMenuSizes" translate>{{label}}</md-option>\n                    </md-select>\n                </div>\n                <div layout="row" layout-align="space-around center">\n                    <label>Show Footer</label>\n                    <md-switch ng-model="vm.layout.footer" ng-change="vm.updateOption(\'footer\')"></md-switch>\n                </div>\n            </md-card-content>\n        </md-card>\n    </div>\n    <div layout="row" layout-align="center start">\n        <md-card flex>\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <h2>Apply to all pages</h2>\n                </div>\n            </md-toolbar>\n            <md-card-content>\n                <p>Change your <code>config.triangular.layout.js</code> file to contain the following to set your whole site to use this layout.</p>\n                <div hljs source="vm.allPagesCode" language="javascript"></div>\n            </md-card-content>\n        </md-card>\n    </div>\n    <div layout="row" layout-align="center start">\n        <md-card flex>\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <h2>Apply to one page</h2>\n                </div>\n            </md-toolbar>\n            <md-card-content>\n                <p>Use a state like this to use this layout on a single page.</p>\n                <div hljs source="vm.onePageCode" language="javascript"></div>\n            </md-card-content>\n        </md-card>\n    </div>\n</div>'),e.put("app/examples/layouts/no-scroll-page.tmpl.html", '<div flex layout="column">\n    <div flex layout="row" layout-xs="column">\n        <div class="md-padding" flex palette-background="green:500">\n            <p>Here is an example of a non scrolling page.</p>\n        </div>\n        <div class="md-padding" flex palette-background="red:500">\n            <p>This allows you to use the flex box model to create full height layouts.</p>\n        </div>\n    </div>\n    <div flex layout="row" layout-xs="column">\n        <div class="md-padding" flex palette-background="blue:500">\n            <p>Like this one.</p>\n        </div>\n        <div class="md-padding" flex palette-background="cyan:500">\n            <p>Where the page is split into 4 panels.</p>\n        </div>\n    </div>\n</div>\n'),e.put("app/examples/layouts/standard-page.tmpl.html", '<div class="md-padding">\n    <h2 class="md-display-1">Standard Page Example</h2>\n\n    <p>Here is how to make a simple page in triangular.</p>\n\n    <h3 class="md-subheading">Create a ui state</h3>\n\n    <p>First of all in your module config create a state and url for the page to load on.</p>\n\n    <p>Make sure you add the <code>triangular.</code> to the beginning of your state.  This will make ui router add the triangular toolbar, sidebar, etc.</p>\n\n    <div class="md-whiteframe-4dp" layout="column">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                my-module.config.js\n            </div>\n        </md-toolbar>\n        <div hljs language="js">\n    (function() {\n        \'use strict\';\n\n        angular\n            .module(\'app.my-module\')\n            .config(moduleConfig);\n\n        /* @ngInject */\n        function moduleConfig($stateProvider) {\n            $stateProvider\n            .state(\'triangular.my-page\',  {\n                url: \'/my-page\',\n                templateUrl: \'app/my-module/my-page.tmpl.html\'\n            })\n        });\n    })();\n        </div>\n    </div>\n\n    <p>Now when you goto <code>/my-page</code> in your browser you will see the contents of <code>my-page.tmpl.html</code> inside the triangular app layout.</p>\n</div>\n'),e.put("app/examples/maps/maps-demo.tmpl.html", '<md-content class="padded-content-page">\n    <p class="md-subhead">Triangular uses the Angular Google Maps Directive Module to bring you all the map types available from Google Maps.</p>\n\n    <p class="md-subhead">Angular Google Maps Directive Module is a set of directives written in CoffeeScript and javascript. It is based on the Google Maps javascript API version 3. There are directives for most of the widely-used Google Maps objects, including markers, windows, lines and shapes.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Map with marker</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <md-content>\n                    <md-card>\n                        <md-card-content class="maps-example" ng-controller="MapLabelDemoController as vm" ng-include="\'app/examples/maps/examples/map-label-demo.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </md-content>\n            </md-tab>\n            <md-tab label="HTML">\n                <md-content>\n                    <div flex hljs language="html" include="\'app/examples/maps/examples/map-label-demo.tmpl.html\'"></div>\n                </md-content>\n            </md-tab>\n            <md-tab label="JS">\n                <md-content>\n                    <div flex hljs language="javascript" include="\'app/examples/maps/examples/map-label-demo.controller.js\'"></div>\n                </md-content>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Terrain style map</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs example-tabs-nopadding" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <md-content>\n                    <md-card>\n                        <md-card-content class="maps-example" ng-controller="MapTerrainDemoController as vm" ng-include="\'app/examples/maps/examples/map-terrain-demo.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </md-content>\n            </md-tab>\n            <md-tab label="HTML">\n                <md-content>\n                    <div flex hljs language="html" include="\'app/examples/maps/examples/map-terrain-demo.tmpl.html\'"></div>\n                </md-content>\n            </md-tab>\n            <md-tab label="JS">\n                <md-content>\n                    <div flex hljs language="javascript" include="\'app/examples/maps/examples/map-terrain-demo.controller.js\'"></div>\n                </md-content>\n            </md-tab>\n        </md-tabs>\n    </div>\n</md-content>'),e.put("app/examples/maps/maps-fullwidth.tmpl.html", '<div id="map_canvas">\n    <ui-gmap-google-map center="::vm.map.center" zoom="::vm.map.zoom">\n        <ui-gmap-marker coords="::vm.map.marker.coords" idkey="::vm.map.marker.id" options="::vm.map.marker.options"></ui-gmap-marker>\n    </ui-gmap-google-map>\n</div>'),
    e.put("app/examples/menu/dynamic-page.tmpl.html", '<div class="padded-content-page">\n    <h3>Dynamic Menu Test Page</h3>\n\n    <p class="md-subhead">This is a dummy page created using the <code>triMenu</code> service.</p>\n\n    <p>Don\'t like this page?  Well go back to the dynamic menu page and remove it!</p>\n\n    <md-button class="md-primary md-raised" href="#/menu/dynamic">Go back to the menu page</md-button>\n</div>'),e.put("app/examples/menu/dynamic.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">You can use the <code>triMenu</code> service in any controller to add and remove menu items from the side menu</p>\n\n    <p>Here is how you can modify the side menu dynamically</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Add and remove a menu item using triMenu service</h2>\n            </div>\n        </md-toolbar>\n        <md-tabs class="example-tabs margin-bottom-40" md-dynamic-height md-border-bottom>\n            <md-tab label="example">\n                <div class="md-tabs-content padding-40">\n                    <md-card>\n                        <md-card-content layout="row" layout-padding layout-align="space-around center" ng-include="\'app/examples/menu/examples/dynamic-menu.tmpl.html\'"></md-card-content>\n                    </md-card>\n                </div>\n            </md-tab>\n            <md-tab label="HTML">\n                <div class="md-tabs-content">\n                    <div flex hljs language="html" include="\'app/examples/menu/examples/dynamic-menu.tmpl.html\'"></div>\n                </div>\n            </md-tab>\n            <md-tab label="JS">\n                <div class="md-tabs-content">\n                    <div flex hljs language="js" include="\'app/examples/menu/examples/dynamic-menu.controller.js\'"></div>\n                </div>\n            </md-tab>\n        </md-tabs>\n</div>'),e.put("app/examples/menu/level.tmpl.html", '<md-content class="padded-content-page">\n    <h1>{{vm.level}}</h1>\n\n    <p>You are now at level {{vm.level}}</p>\n\n    <p>With triangular you can nest menus forever!</p>\n</md-content>'),e.put("app/examples/todo/add-todo-dialog.tmpl.html", '<md-dialog aria-label="Mango (Fruit)" flex="30" flex-xs="100">\n    <md-toolbar md-theme="{{triSkin.elements.content}}">\n        <div class="md-toolbar-tools">\n            <h2>\n                <span translate>Add Task</span>\n            </h2>\n        </div>\n    </md-toolbar>\n\n    <md-divider></md-divider>\n\n    <md-dialog-content class="md-dialog-content">\n        <form name="taskForm" novalidate layout="column">\n            <md-input-container>\n                <label translate>Task Name</label>\n                <input ng-model="vm.item.description" class="dialog-close" name="task" required/>\n                <div ng-messages="taskForm.task.$error">\n                    <div ng-message when="required">\n                        <span translate>Please enter a task name</span>\n                    </div>\n                </div>\n            </md-input-container>\n            <md-input-container>\n                <label translate>Priority</label>\n                <md-select placeholder="{{\'Priority\' | triTranslate}}" ng-model="vm.item.priority">\n                    <md-option value="high" translate>High</md-option>\n                    <md-option value="medium" translate>Medium</md-option>\n                    <md-option value="low" translate>Low</md-option>\n                </md-select>\n            </md-input-container>\n        </form>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.cancel()">Cancel</md-button>\n        <md-button ng-click="vm.hide()" class="md-primary" ng-disabled="taskForm.$invalid">Ok</md-button>\n    </md-dialog-actions>\n</md-dialog>'),e.put("app/examples/todo/fab-button.tmpl.html", '<md-button ng-click="vm.addTodo($event)" class="md-fab md-accent md-fab-bottom-right" aria-label="{{\'TODO.ADD-TODO\' | triTranslate}}">\n    <md-icon md-font-icon="zmdi zmdi-plus"></md-icon>\n</md-button>\n'),e.put("app/examples/todo/todo.tmpl.html", '<div class="todo-container">\n    <div layout-fill layout="row" layout-align="center center">\n        <md-card flex="70" flex-xs="90" class="margin-top-50 margin-bottom-50 md-whiteframe-z4">\n            <md-toolbar md-theme="{{triSkin.elements.content}}">\n                <h2 class="md-toolbar-tools" translate>To do list</h2>\n            </md-toolbar>\n            <md-card-content class="overflow-auto">\n                <md-list class="margin-bottom-10">\n                    <md-list-item ng-repeat="todo in vm.todos | orderBy:vm.orderTodos" ng-class="{\'md-primary\': todo.priority === \'high\', \'md-accent\': todo.priority === \'medium\', \'md-warn\': todo.priority === \'low\'}" class="slide" md-swipe-right="vm.removeTodo(todo)" md-no-ink>\n                        <md-checkbox ng-model="todo.selected" ng-change="vm.todoSelected()"></md-checkbox>\n                        <p class="no-select">\n                            {{::todo.description}}\n                        </p>\n                        <p flex class="md-secondary">\n                            {{::todo.priority}}\n                        </p>\n                    </md-list-item>\n                </md-list>\n            </md-card-content>\n        </md-card>\n    </div>\n    <div layout-fill layout="row" layout-align="center center">\n        <md-card flex="70" flex-xs="90" class="margin-top-20 margin-bottom-20">\n            <md-toolbar md-theme="{{triSkin.elements.content}}">\n                <h2 class="md-toolbar-tools" translate>Note</h2>\n            </md-toolbar>\n            <md-card-content>\n                <p translate>Remove items from the list by swiping right</p>\n            </md-card-content>\n        </md-card>\n    </div>\n</div>\n'),e.put("app/dashboards/performance/dashboard-performance.tmpl.html", '<md-tabs class="md-primary" md-dynamic-height>\n    <md-tab label="OSS">\n        <md-content class="md-padding">\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget chartjs-line-widget title="全球OSS业务容量占比" subtitle="(数据截止20161213)" content-layout="row">\n                    <map flex id="main2" legend="legend" item="item" data="data"></map>\n                    <!-- <bar id="main" legend="legend" item="item" data="data"></bar> -->\n                </tri-widget>\n            </div>\n        </md-content>\n    </md-tab>   \n</md-tabs>\n'),e.put("app/examples/ui/color-dialog.tmpl.html", '<md-dialog>\n    <md-toolbar md-theme="{{triSkin.elements.toolbar}}">\n        <h2 class="md-toolbar-tools">\n            {{vm.name}}\n        </h2>\n    </md-toolbar>\n    <md-dialog-content class="ui-color-dialog-content">\n        <md-list>\n            <md-list-item ng-repeat="color in vm.palette" ng-style="vm.itemStyle(color.palette)">\n                <div class="md-list-item-text">\n                    <h3>{{color.code}}</h3>\n                </div>\n            </md-list-item>\n        </md-list>\n    </md-dialog-content>\n</md-dialog>'),e.put("app/examples/ui/colors.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Color is inspired by bold color statements juxtaposed with muted environments, taking cues from contemporary architecture, road signs, pavement marking tape, and sports courts. Emphasize bold shadows and highlights. Introduce unexpected and vibrant colors</p>\n\n    <p>Triangular comes with the default <a href="http://www.google.com/design/spec/style/color.html#color-color-palette">material design color palettes</a>.  These can be used in multiple combinations to create stunning eye catching themes to color your admin panels.</p>\n\n    <h2>Palette Colors</h2>\n\n    <p>These color palettes comprise of primary and accent colors that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other.</p>\n\n    <p>The color palette starts with primary colors and fills in the spectrum to create a complete and usable palette for Android, Web, and iOS. Google suggests using the 500 colors as the primary colors in your app and the other colors as accents colors.</p>\n\n    <p>As well as the pre-defined palettes you can also create your own color palettes.</p>\n\n    <p class="md-caption">Click on a palette below to see it\'s available colors and contrast text colors.</p>\n    <div class="example-code md-whiteframe-z1">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Available Color Palettes</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n            <md-grid-list class="ui-color-grid" md-cols-xs="2" md-cols-md="3" md-cols-gt-md="6" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px" md-gutter-gt-xs="8px">\n                <md-grid-tile md-rowspan="1" md-colspan="1" ng-repeat="(name,palette) in ::vm.palettes" ng-style="::vm.colourRGBA(palette[\'500\'].value)" ng-click="vm.selectPalette($event, name, palette)">\n                    <md-grid-tile-footer>\n                        <h3>{{::name}}</h3>\n                    </md-grid-tile-footer>\n                </md-grid-tile>\n            </md-grid-list>\n        </md-content>\n    </div>\n</div>'),e.put("app/examples/ui/fa-icons.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Triangular comes with the <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome Icon Fontset</a> built in.</p>\n\n    <p>Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.</p>\n\n    <p>Click one of the icons below to find out how to add it to triangular!</p>\n\n    <div class="example-code md-whiteframe-z1">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Font Awesome Icons</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n            <div layout="column">\n                <md-input-container>\n                    <label>Search icons</label>\n                    <input type="text" ng-model="searchIcon">\n                </md-input-container>\n\n                <div layout="row" layout-wrap>\n                    <div class="ui-icons-box-icon padding-10" flex="10" layout="column" layout-align="space-around center" ng-repeat="icon in vm.icons | filter:{ name: searchIcon }" ng-click="vm.selectIcon($event, icon)">\n                        <md-icon class="font-size-4" md-font-icon="{{::icon.className}}"></md-icon>\n                        <span class="md-caption margin-top-10">{{::icon.name}}</span>\n                    </div>\n                </div>\n            </div>\n        </md-content>\n    </div>\n</div>'),e.put("app/examples/ui/material-icons.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Triangular comes with the <a href="http://zavoloklom.github.io/material-design-iconic-font/index.html">Material Design Iconic Font</a> built in.  This font has over 740 material design icons to choose from.</p>\n\n    <p>Click one of the icons below to find out how to add it to triangular!</p>\n\n    <div class="example-code md-whiteframe-z1">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Material Icons</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n            <div layout="column">\n                <div layout="row">\n                    <md-input-container flex>\n                        <label>Search icons</label>\n                        <input type="text" ng-model="searchIcon">\n                    </md-input-container>\n                </div>\n\n                <div layout="row" layout-wrap>\n                    <div class="ui-icons-box-icon padding-10" flex="20" layout="column" layout-align="start center" ng-repeat="icon in vm.icons | filter:{ name: searchIcon }" ng-click="vm.selectIcon($event, icon.class)">\n                        <md-icon class="font-size-4" md-font-icon="{{::icon.class}}"></md-icon>\n                        <span class="md-caption margin-top-10">{{::icon.name}}</span>\n                    </div>\n                </div>\n            </div>\n        </md-content>\n    </div>\n</div>'),e.put("app/examples/ui/skins.tmpl.html", '<div class="padded-content-page">\n    <p>Triangular allows you to change the look of various parts of the template themes.</p>\n\n    <p>We have created several cool looking skins for you to use.  But of course you can always <strong>roll your own!</strong></p>\n\n    <p>Select a theme below and click the try it button to test drive one of the skins!</p>\n\n    <div class="example-code md-whiteframe-z1">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Try a skin out!</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n\n            <div layout="row" layout-align="space-around center">\n                <md-select placeholder="{{\'Choose a skin\' | triTranslate}}" ng-model="vm.selectedSkin" ng-change="vm.updatePreview()">\n                    <md-option ng-repeat="skin in ::vm.skins" ng-value="skin">{{::skin.name}}</md-option>\n                </md-select>\n                <md-button class="md-primary md-raised" ng-click="vm.trySkin()" translate="Try It"></md-button>\n            </div>\n\n            <div class="full-image-background mb-bg-08 padding-40" layout layout-align="center center">\n                <div class="ui-skin-preview-window md-whiteframe-z5" flex="70" layout="column">\n                    <div layout="row">\n                        <div flex="30" ng-style="{ \'background-color\' : vm.elementColors.logo }" class="padding-20 ui-skin-preview-window-logo">\n                            <span translate>Logo</span>\n                        </div>\n                        <div flex="70" ng-style="{ \'background-color\' : vm.elementColors.toolbar }" class="padding-20 ui-skin-preview-window-toolbar">\n                            <span translate>Toolbar</span>\n                        </div>\n                    </div>\n                    <div flex layout="row">\n                        <div flex="30" ng-style="{ \'background-color\' : vm.elementColors.sidebar }" class="padding-20 ui-skin-preview-window-sidebar">\n                            <span translate>Sidebar</span>\n                        </div>\n                        <md-content flex="70" layout="column"  layout-align="space-between start" class="padding-20 ui-skin-preview-window-content" md-content>\n\n                            <div class="ui-skin-preview-window-content-line padding-20"></div>\n                            <div class="ui-skin-preview-window-content-line padding-20"></div>\n                            <div class="ui-skin-preview-window-content-line padding-20"></div>\n                            <div class="ui-skin-preview-window-content-line padding-20"></div>\n                            <div class="ui-skin-preview-window-content-line padding-20"></div>\n                            <div class="ui-skin-preview-window-content-fab md-whiteframe-z4" ng-style="{ \'background-color\' : vm.elementColors.content }"></div>\n\n                        </md-content>\n                    </div>\n                </div>\n            </div>\n        </md-content>\n    </div>\n</div>'),e.put("app/examples/ui/typography.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">The <a href="http://www.google.com/design/spec/style/typography.html">Material Design specification</a> recommends using Roboto for all languages that use Latin, Greek and Cyrillic scripts and Noto for all other languages.</p>\n    <p>Triangular uses Google Fonts so you have the choice of using <a href="http://www.google.com/fonts">any of it\'s 600+ fonts</a> for your admin template.  We have provided a few of the more popular ones for you to try in this demo below.</p>\n\n    <p class="caption">We have provided a font switcher for you to try out some of the fonts available with this template.  Select a font from the select box to check out how the triangular looks.</p>\n\n    <md-whiteframe flex class="md-whiteframe-z1 margin-bottom-20" layout="column" layout-align="space-between center">\n        <md-toolbar>\n            <h2 class="md-toolbar-tools">\n                <span>Why not try a different font?</span>\n            </h2>\n        </md-toolbar>\n        <md-select placeholder="Choose a font" ng-model="vm.currentFont" ng-change="vm.changeFont()">\n            <md-option ng-repeat="font in vm.fonts" ng-value="font">{{font.name}}</md-option>\n        </md-select>\n        <p class="ui-typography-try-font">Try selecting a font above, it will be saved and used from now on as you browse the site.</p>\n    </md-whiteframe>\n\n    <p class="caption">Triangular uses the <a href="http://www.google.com/design/spec/style/typography.htm">Material Design Typography Guidelines</a> for it\'s typography rules.  Too many type sizes and styles at once can wreck any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid. The basic set of styles are based on a typographic scale of 12, 14, 16, 20 and 34.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Typographic Scale</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Display 4</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-display-4">Light 112sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Display 3</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-display-3">Regular 56sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Display 2</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-display-2">Regular 45sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Display 1</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-display-1">Regular 34sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Headline</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-headline">Regular 24sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Title</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-title">Medium 20sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Subhead</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-subhead">Regular 16sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Body 2</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-body-2">Medium 14sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Body 1</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-body-1">Regular 14sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Caption</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-caption">Regular 12sp</span>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column" layout-align="start center">\n                <p flex="30" flex-xs="100">Button</p>\n                <div layout="column">\n                    <span class="ui-typography-heading-example md-button">MEDIUM (ALL CAPS) 14sp</span>\n                </div>\n            </div>\n        </md-content>\n    </div>\n\n    <p class="caption">Triangular uses classes to set the scale of typography inside HTML elements, here is an example of how the code above looks.</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Typographic Scale Usage</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n            <div hljs>\n            <span class="md-display-4">Light 112sp</span>\n            <span class="md-display-3">Regular 56sp</span>\n            <span class="md-display-2">Regular 45sp</span>\n            <span class="md-display-1">Regular 34sp</span>\n            <span class="md-headline">Regular 24sp</span>\n            <span class="md-title">Medium 20sp</span>\n            <span class="md-subhead">Regular 16sp</span>\n            <span class="md-body-2">Medium 14sp</span>\n            <span class="md-body-1">Regular 14sp</span>\n            <span class="md-caption">Regular 12sp</span>\n            <span class="md-button">MEDIUM (ALL CAPS) 14sp</span></div>\n        </md-content>\n    </div>\n</div>\n\n'),e.put("app/examples/ui/weather-icons.tmpl.html", '<div class="padded-content-page">\n    <p class="md-subhead">Triangular comes with the <a href="https://github.com/erikflowers/weather-icons">Weather Icon Fontset</a> built in.</p>\n\n    <p>189 weather themed icons inspired by Font Awesome.</p>\n\n    <p>Click one of the icons below to find out how to add it to triangular!</p>\n\n    <div class="example-code md-whiteframe-z1 margin-bottom-20">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Weather Icons</h2>\n            </div>\n        </md-toolbar>\n        <md-content class="md-padding">\n            <div layout="column">\n                <md-input-container>\n                    <label>Search icons</label>\n                    <input type="text" ng-model="searchIcon">\n                </md-input-container>\n\n                <div layout="row" layout-wrap>\n                    <div class="ui-icons-box-icon padding-10" flex="10" layout="column" layout-align="space-around center" ng-repeat="icon in vm.icons | filter:{ name: searchIcon }" ng-click="vm.selectIcon($event, icon)">\n                        <md-icon class="font-size-4" md-font-icon="{{::icon.className}}"></md-icon>\n                        <span class="md-caption margin-top-10">{{::icon.name}}</span>\n                    </div>\n                </div>\n            </div>\n        </md-content>\n    </div>\n</div>'),e.put("app/layouts/footer/footer.tmpl.html", '<div flex="noshrink" layout="column" layout-align="end none">\n    <md-toolbar ng-controller="AppFooterController as footer" md-theme="{{triSkin.elements.toolbar}}">\n        <div class="md-toolbar-tools md-body-1" layout="row" layout-align="space-between center">\n            <h2>{{footer.settings.name}}</h2>\n            <h2 hide-xs ng-bind-html="footer.settings.copyright"></h2>\n            <h2>v{{footer.settings.version}}</h2>\n        </div>\n    </md-toolbar>\n</div>\n'),e.put("app/layouts/leftsidenav/leftsidenav.tmpl.html", '<md-toolbar class="sidebar-left-toolbar" md-theme="{{::triSkin.elements.logo}}">\n    <div class="md-toolbar-tools" layout="row" layout-align="start center">\n\n        <div class="sidebar-left-logo">\n            <img ng-src="{{::vm.sidebarInfo.appLogo}}" alt="{{::vm.sidebarInfo.appName}}">\n        </div>\n\n        <h2 flex class="sidebar-left-title">{{::vm.sidebarInfo.appName}}</h2>\n\n        <md-button class="md-icon-button sidebar-left-icon" ng-click="vm.toggleIconMenu()" aria-label="Open side menu">\n            <md-icon md-font-icon ng-class="{ \'zmdi zmdi-chevron-right\' : vm.layout.sideMenuSize == \'icon\', \'zmdi zmdi-chevron-left\' : vm.layout.sideMenuSize == \'full\' }"></md-icon>\n        </md-button>\n\n    </div>\n</md-toolbar>\n\n<tri-menu md-theme="{{triSkin.elements.sidebar}}" flex layout="column"></tri-menu>\n'),e.put("app/layouts/loader/loader.tmpl.html", '<div class="app-loader" flex layout="column" layout-align="center center">\n    <img src="{{loader.triSettings.logo}}" alt="">\n    <md-progress-linear class="padding-bottom-10" md-mode="indeterminate"></md-progress-linear>\n    <h2 class="padding-bottom-100">{{loader.triSettings.name}}</h2>\n</div>\n'),e.put("app/layouts/rightsidenav/rightsidenav.tmpl.html", '<md-content flex layout class="admin-notifications">\n    <md-tabs flex md-stretch-tabs="always" md-selected="vm.currentTab">\n        <!-- <md-tab>\n            <md-tab-label>\n                <md-icon md-font-icon="zmdi zmdi-email"></md-icon>\n            </md-tab-label>\n            <md-tab-body>\n                <md-content>\n                    <md-list class="md-dense">\n                        <md-list-item class="md-2-line" ng-repeat="email in ::vm.emails" ng-click="vm.openMail(email)">\n                            <img class="md-avatar" ng-src="{{::email.from.image}}" alt="{{::email.from.name}}">\n                            <div class="md-list-item-text">\n                                <h3>{{::email.from.name}}</h3>\n                                <h4>{{::email.subject}}</h4>\n                                <p class="md-caption" am-time-ago="::email.date"></p>\n                            </div>\n                            <md-divider ng-hide="$last"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </md-content>\n            </md-tab-body>\n        </md-tab> -->\n        <md-tab>\n            <md-tab-label>\n                <md-icon md-font-icon="fa fa-bell-o"></md-icon>\n            </md-tab-label>\n            <md-tab-body>\n                <md-content>\n                    <md-list>\n                        <div ng-repeat="group in ::vm.notificationGroups">\n                            <md-subheader class="md-primary">{{::group.name}}</md-subheader>\n                            <md-list-item ng-repeat="notification in ::group.notifications" layout="row" layout-align="space-between center">\n                                <md-icon md-font-icon="{{::notification.icon}}" ng-style="{ color: notification.iconColor }"></md-icon>\n                                <p>{{::notification.title}}</p>\n                                <span class="md-caption" am-time-ago="::notification.date"></span>\n                            </md-list-item>\n                        </div>\n                    </md-list>\n                </md-content>\n            </md-tab-body>\n        </md-tab>\n        <md-tab>\n            <md-tab-label>\n                <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n            </md-tab-label>\n            <md-tab-body>\n                <md-content>\n                    <md-list>\n                        <div ng-repeat="group in ::vm.settingsGroups">\n                            <md-subheader class="md-primary"><span translate>{{::group.name}}</span></md-subheader>\n                            <md-list-item ng-repeat="setting in ::group.settings" layout="row" layout-align="space-around center">\n                                <md-icon md-font-icon="{{::setting.icon}}"></md-icon>\n                                <p translate>{{::setting.title}}</p>\n                                <md-switch class="md-secondary" ng-model="setting.enabled"></md-switch>\n                            </md-list-item>\n                        </div>\n                        <div ng-repeat="group in ::vm.statisticsGroups">\n                            <md-subheader class="md-primary"><span translate>{{::group.name}}</span></md-subheader>\n                            <md-list-item ng-repeat="stat in ::group.stats" layout="column" layout-align="space-around start">\n                                <md-progress-linear class="margin-top-20 ng-class="::stat.mdClass" md-mode="determinate" ng-value="::stat.value"></md-progress-linear>\n                                <p translate>{{::stat.title}}</p>\n                            </md-list-item>\n                        </div>\n                    </md-list>\n                </md-content>\n            </md-tab-body>\n        </md-tab>\n    </md-tabs>\n</md-content>\n'),e.put("app/layouts/toolbar/toolbar.tmpl.html", '<div class="md-toolbar-tools">\n    <md-button class="md-icon-button" ng-if="!vm.hideMenuButton()" ng-click="vm.openSideNav(\'left\')" aria-label="side navigation">\n        <md-icon md-font-icon="zmdi zmdi-menu"></md-icon>\n    </md-button>\n\n    <h2 hide-xs flex>\n        <span ng-repeat="crumb in vm.breadcrumbs.crumbs">\n            <span translate>{{crumb.name}}</span>\n            <md-icon md-font-icon="zmdi zmdi-chevron-right" ng-if="!$last"></md-icon>\n        </span>\n    </h2>\n\n    <md-button class="md-icon-button toolbar-button" ng-click="vm.toggleFullScreen()" aria-label="toggle fullscreen">\n        <md-icon md-font-icon ng-class="vm.fullScreenIcon"></md-icon>\n    </md-button>\n\n    <md-menu ng-show="vm.languages.length > 0">\n        <md-button class="md-icon-button" aria-label="language" ng-click="$mdOpenMenu()" aria-label="change language">\n            <md-icon md-font-icon="zmdi zmdi-globe-alt"></md-icon>\n        </md-button>\n        <md-menu-content width="3">\n            <md-menu-item ng-repeat="language in ::vm.languages">\n                <md-button ng-click="vm.switchLanguage(language.key)" translate="{{::language.name}}" aria-label="{{::language.name}}"></md-button>\n            </md-menu-item>\n        </md-menu-content>\n    </md-menu>\n\n   <!--  <md-button class="md-icon-button toolbar-button animated" ng-click="vm.toggleNotificationsTab(0)" aria-label="side navigation">\n        <md-icon md-font-icon="zmdi zmdi-email"></md-icon>\n        <span class="toolbar-button-badge animated" theme-background="accent" ng-class="{ \'toolbar-button-badge-new\' : vm.emailNew }">5</span>\n    </md-button>\n -->\n    <md-button class="md-icon-button toolbar-button" ng-click="vm.toggleNotificationsTab(1)">\n        <md-icon md-font-icon="fa fa-bell-o"></md-icon>\n        <span class="toolbar-button-badge" theme-background="accent">2</span>\n    </md-button>\n\n    <md-menu>\n        <md-button aria-label="Open user menu" ng-click="$mdOpenMenu()" aria-label="side navigation">\n            <img class="toolbar-user-avatar" ng-src="{{vm.currentUser.avatar}}">\n            {{vm.currentUser.displayName}}\n        </md-button>\n        <md-menu-content width="4">\n            <md-menu-item>\n                <md-button ng-click="vm.toggleNotificationsTab(2)" aria-label="side navigation">\n                    <md-icon md-font-icon="zmdi zmdi-settings"></md-icon>\n                    <span translate="Settings"></span>\n                </md-button>\n            </md-menu-item>\n            <md-menu-item>\n                <md-button href="#/profile" aria-label="side navigation">\n                    <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n                    <span translate="Profile"></span>\n                </md-button>\n            </md-menu-item>\n            <md-menu-divider></md-menu-divider>\n            <md-menu-item>\n                <md-button href="#/login" aria-label="side navigation">\n                    <md-icon md-font-icon="zmdi zmdi-sign-in"></md-icon>\n                    <span translate="Logout"></span>\n                </md-button>\n            </md-menu-item>\n        </md-menu-content>\n    </md-menu>\n</div>\n'),
    e.put("app/permission/pages/permission-define.tmpl.html", "<div class=\"md-padding\">\n    <h2 class=\"md-display-1\">Defining Roles & Permissions</h2>\n\n    <p>To get started we recommend looking at the example app and how the roles and permissions are defined there.</p>\n\n    <p>Take a look at the file <code>permission/permission.run.js</code> to see how the apps roles & permissions.</p>\n    <p>For example</p>\n\n    <div class=\"md-whiteframe-1dp\" layout=\"column\">\n        <md-toolbar>\n            <div class=\"md-toolbar-tools\">\n                <h2>permission/permission.run.js</h2>\n            </div>\n        </md-toolbar>\n        <div flex hljs language=\"js\">\n    // create permissions and add check function verify all permissions\n    var permissions = ['viewEmail', 'viewGitHub', 'viewCalendar', 'viewLayouts', 'viewTodo', 'viewElements', 'viewAuthentication', 'viewCharts', 'viewMaps'];\n    PermissionStore.defineManyPermissions(permissions, function (permissionName) {\n        return UserService.hasPermission(permissionName);\n    });\n\n    // create roles for app\n    RoleStore.defineManyRoles({\n        'SUPERADMIN': ['viewEmail', 'viewGitHub', 'viewCalendar', 'viewLayouts', 'viewTodo', 'viewElements', 'viewAuthentication', 'viewCharts', 'viewMaps'],\n        'ADMIN': ['viewLayouts', 'viewTodo', 'viewElements', 'viewAuthentication', 'viewCharts', 'viewMaps'],\n        'USER': ['viewAuthentication', 'viewCharts', 'viewMaps'],\n        'ANONYMOUS': []\n    });\n        </div>\n    </div>\n\n    <p>First of all we create a list of permissions then tell permission store about them and assign a function to verify them.  We use a service called UserService to check if the current user has a permission.</p>\n\n    <p>Next we define the roles SUPERADMIN, ADMIN, USER, and ANONYMOUS.  These roles each have their own permissions except for ANONYMOUS which doesn't have any permissions set.</p>\n\n    <p>Thats all you need to do to create Roles and Permissions which you can now use to hide / show menu items and page elements.</p>\n\n    <p>For more in depth information see the <a href=\"https://github.com/Narzerus/angular-permission\">Angular Permissions Module</a></p>\n</div>\n"),e.put("app/permission/pages/permission-routes.tmpl.html", '<div class="md-padding">\n    <h2 class="md-display-1">Route Permissions</h2>\n\n    <h3 class="md-subheading">Blocking Routes</h3>\n    <p>In order to block routes from being accessed when a usre doesn\'t have permission just add the following code to your <code>$stateProvider</code> declaration inside your config file.</p>\n\n    <p>For example</p>\n\n    <div class="md-whiteframe-1dp" layout="column">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>my-module.config.js</h2>\n            </div>\n        </md-toolbar>\n        <div flex hljs language="js">\n    $stateProvider\n    .state(\'triangular.my-page\', {\n        url: \'/mypage\',\n        templateUrl: \'app/my-module/my-page.tmpl.html\',\n        data: {\n            permissions: {\n                only: [\'viewMyPage\']\n            }\n        }\n    });\n        </div>\n    </div>\n\n    <p>So now if any user that doesn\'t have the permission <code>viewMyPage</code> tries to access <code>/mypage</code> in the browser they will be redirected to the <a href="#/401">401 Page</a></p>\n\n    <h3 class="md-subheading">Hiding menus</h3>\n    <p>As well as blocking the route you will also want to hide the menu item.  This is also easy, just add a permission to the menu item when you add it in your config file.</p>\n\n    <div class="md-whiteframe-1dp" layout="column">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>my-module.config.js</h2>\n            </div>\n        </md-toolbar>\n        <div flex hljs language="js">\n    triMenuProvider.addMenu({\n        name: \'My Page\',\n        type: \'link\',\n        permission: \'viewMyPage\',\n    });\n        </div>\n    </div>\n\n    <p>Now unless the user has the <code>viewMyPage</code> permission they will not see the menu item in the left sidebar.</p>\n</div>\n'),e.put("app/permission/pages/permission-views.tmpl.html", '<div class="md-padding">\n    <h2 class="md-display-1">View Permissions</h2>\n\n    <h3 class="md-subheading">Hiding view elements</h3>\n\n    <p>You can also use angular permission to hide elements on the page.</p>\n\n    <p>For example to a button on your app unless the user has a <code>canDelete</code> permission you would do the following.</p>\n\n    <div class="md-whiteframe-1dp" layout="column">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>my-page.tmpl.html</h2>\n            </div>\n        </md-toolbar>\n        <div flex hljs language="html">\n            <md-button permission permission-only="\'canDelete\'">Delete</md-button>\n        </div>\n    </div>\n\n    <p>So now if any user that doesn\'t have the permission <code>canDelete</code> they wont see this button.</p>\n</div>\n'),e.put("app/permission/pages/permission.tmpl.html", '<div class="md-padding">\n    <h2 class="md-display-1">Permissions</h2>\n\n    <p>Many people have requested a way to restrict access to pages inside triangular.</p>\n\n    <p>So for that reason we have added an optional module that works with the <a href="https://github.com/Narzerus/angular-permission">Angular Permission Module</a></p>\n\n    <p>To show how this works we have created some mock users, roles and permissions for triangular.</p>\n\n    <p>This will show you how they can be used to restrict user access to routes / pages and HTML elements in your app.</p>\n\n    <p>In the demo app we have 4 users with different roles assigned to each.  Each role has a set of permissions that we will use to show and hide menu items on the left as well as disable the routes to those pages.</p>\n\n    <div layout="row" layout-xs="column" layout-margin layout-align="space-between stretch">\n        <div class="md-whiteframe-1dp" flex layout="column">\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <span translate>Users</span>\n                </div>\n            </md-toolbar>\n            <md-content>\n                <md-list flex>\n                    <md-list-item class="md-primary" ng-repeat="user in vm.userList" ng-click="vm.selectUser(user)">\n                        <img ng-src="{{user.avatar}}" class="md-avatar" alt="{{user.displayName}}" />\n                        <p>{{user.displayName}}</p>\n                        <md-icon md-font-icon="zmdi zmdi-circle" ng-show="vm.selectedUser == user"></md-icon>\n                    </md-list-item>\n                </md-list>\n            </md-content>\n        </div>\n        <div class="md-whiteframe-1dp" flex layout="column">\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <span translate>Roles</span>\n                </div>\n            </md-toolbar>\n            <md-content>\n                <md-list flex>\n                    <md-list-item ng-repeat="role in vm.roleList">\n                        <p>{{role.roleName}}</p>\n                    </md-list-item>\n                </md-list>\n            </md-content>\n        </div>\n        <div class="md-whiteframe-1dp" flex layout="column">\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <span translate>Permissions</span>\n                </div>\n            </md-toolbar>\n            <md-content>\n                <md-list flex>\n                    <md-list-item ng-repeat="permission in vm.permissionList">\n                        <p>{{permission}}</p>\n                    </md-list-item>\n                </md-list>\n            </md-content>\n        </div>\n    </div>\n\n    <md-button class="md-primary md-raised" ng-click="vm.loginClick()">Login as {{vm.selectedUser.displayName}}</md-button>\n\n    <p>Go ahead and log in as one of the users to see it\'s effect on the side menu items and routes</p>\n\n    <p>For more details on how to set this up read about permissions for routes and permissions for views.</p>\n</div>\n'),e.put("app/examples/charts/examples/chartjs-bar.tmpl.html", '<canvas class="chart-bar" chart-data="vm.data" chart-labels="vm.labels" chart-legend="true" chart-series="vm.series"></canvas>'),e.put("app/examples/charts/examples/chartjs-line.tmpl.html", '<canvas class="chart-line" chart-data="vm.data" chart-labels="vm.labels" chart-legend="true" chart-series="vm.series" chart-options="options"></canvas>'),e.put("app/examples/charts/examples/chartjs-pie.tmpl.html", '<canvas class="chart-pie" chart-data="vm.data" chart-labels="vm.labels" chart-legend="true" chart-options="vm.options"></canvas>'),e.put("app/examples/charts/examples/chartjs-ticker.tmpl.html", '<canvas class="chart-line" chart-data="vm.data" chart-labels="vm.labels" chart-legend="false" chart-options="vm.options"></canvas>'),e.put("app/examples/charts/examples/google-bar.tmpl.html", '<div google-chart chart="vm.barChart"></div>\n<div layout="row" layout-align="center center">\n    <p>Show Horizontal / Vertical</p>\n    <md-switch ng-model="::vm.barChart.options.bars" aria-label="Horizontal / Vertical Bars" ng-true-value="\'vertical\'" ng-false-value="\'horizontal\'" class="md-warn">\n</div>'),e.put("app/examples/charts/examples/google-line.tmpl.html", '<div google-chart chart="::vm.chartData"></div>\n'),e.put("app/examples/charts/examples/google-scatter.tmpl.html", '<div google-chart chart="vm.chartData"></div>\n'),e.put("app/examples/dashboards/examples/widget-backgrounds.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Background Image" subtitle="Use any image as a background" background-image="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" title-position="top"  content-layout="center center" overlay-title palette-background="triCyan:600">\n        <p class="padding-100">\n            <!-- Your Content -->\n        </p>\n    </tri-widget>\n    <tri-widget flex title="Background Image" subtitle="Use any image as a background" background-image="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" title-position="bottom"  content-layout="center center" overlay-title palette-background="triCyan:600">\n        <p class="padding-100">\n            <!-- Your Content -->\n        </p>\n    </tri-widget>\n</div>'),e.put("app/examples/dashboards/examples/widget-colors.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Amber Widget" subtitle="using the 300 hue" title-position="top" palette-background="amber:300">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Amber Widget" subtitle="using the 400 hue" title-position="top" palette-background="amber:400">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Amber Widget" subtitle="using the 500 hue" title-position="top" palette-background="amber:500">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Amber Widget" subtitle="using the 600 hue" title-position="top" palette-background="amber:600">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg" />\n    </tri-widget>\n</div>\n<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Lime Widget" subtitle="using the 300 hue" title-position="top" palette-background="lime:300">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Lime Widget" subtitle="using the 400 hue" title-position="top" palette-background="lime:400">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Lime Widget" subtitle="using the 500 hue" title-position="top" palette-background="lime:500">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Lime Widget" subtitle="using the 600 hue" title-position="top" palette-background="lime:600">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n</div>'),e.put("app/examples/dashboards/examples/widget-draggable-vertical.tmpl.html", '<div class="drag-container" dragula=\'"drag-container"\' layout="column" layout-xs="column" layout-align="space-between" layout-margin>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You only need to specify the container you want to use.\' | triTranslate}}" title-position="top" palette-background="blue-grey:500" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You can re-order these widgets inside the container.\' | triTranslate}}" title-position="top" palette-background="blue-grey:600" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'It works for all elements, not only widgets!\' | triTranslate}}" title-position="top" palette-background="blue-grey:700" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'Moving them outside their container is not quite possible.\' | triTranslate}}" title-position="top" palette-background="blue-grey:800" background="primary"></tri-widget>\n</div>\n'),e.put("app/examples/dashboards/examples/widget-draggable.tmpl.html", '<div class="drag-container" dragula=\'"drag-container"\' layout="row" layout-xs="row" layout-align="start center" layout-margin>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You only need to specify the container you want to use.\' | triTranslate}}" title-position="top" palette-background="blue-grey:500" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'You can re-order these widgets inside the container.\' | triTranslate}}" title-position="top" palette-background="blue-grey:600" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'It works for all elements, not only widgets!\' | triTranslate}}" title-position="top" palette-background="blue-grey:700" background="primary"></tri-widget>\n    <tri-widget flex title="{{\'Drag Me!\' | triTranslate}}" subtitle="{{\'Moving them outside their container is not quite possible.\' | triTranslate}}" title-position="top" palette-background="blue-grey:800" background="primary"></tri-widget>\n</div>\n'),e.put("app/examples/dashboards/examples/widget-title-above.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget flex title="Some Title" subtitle="Positioned above the image" title-position="top">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n    <tri-widget flex title="Some Title" subtitle="Positioned above the image" title-position="bottom" >\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" />\n    </tri-widget>\n</div>'),e.put("app/examples/dashboards/examples/widget-title-side.tmpl.html", '<div layout="row" layout-xs="column" layout-align="space-around center" layout-margin>\n    <tri-widget title="Some Title" subtitle="Positioned to the right of the image" title-position="right">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-04.jpg" />\n    </tri-widget>\n    <tri-widget title="Some Title" subtitle="Positioned to the left of the image" title-position="left">\n        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-04.jpg" />\n    </tri-widget>\n</div>'),e.put("app/examples/elements/examples/button-disabled.tmpl.html", '<div class="elements-button-colors" layout="row" layout-xs="column" layout-align="space-around center">\n    <div layout="column" layout-align="center center">\n        <md-switch ng-model="vm.buttonDisabled" aria-label="Switch 2" class="md-primary">\n            Toggle Button Disabled\n        </md-switch>\n    </div>\n    <div layout="column" layout-align="center center">\n        <md-button class="md-primary md-raised" ng-disabled="vm.buttonDisabled" aria-label="disabled button">Disabled</md-button>\n        <h3>Disabled: {{vm.buttonDisabled}}</h3>\n    </div>\n</div>\n'),e.put("app/examples/elements/examples/button-fab.tmpl.html", '<div layout="column" layout-align="center center" flex>\n    <md-button class="md-fab" ng-class="[vm.buttonClass3, vm.buttonHue3]" aria-label="fab button">\n        <md-icon md-font-icon="zmdi zmdi-plus"></md-icon>\n    </md-button>\n</div>\n<div layout="column" layout-align="center space-around" flex>\n    <md-input-container>\n        <label>Button Style</label>\n        <md-select placeholder="Choose a style" ng-model="vm.buttonClass3">\n            <md-option value="md-primary">Primary</md-option>\n            <md-option value="md-accent">Accent</md-option>\n            <md-option value="md-warn">Warn</md-option>\n        </md-select>\n    </md-input-container>\n    <md-input-container>\n        <label>Button Hue</label>\n        <md-select placeholder="Choose a hue" ng-model="vm.buttonHue3">\n            <md-option value="md-default">Default Hue</md-option>\n            <md-option value="md-hue-1">Hue 1</md-option>\n            <md-option value="md-hue-2">Hue 2</md-option>\n            <md-option value="md-hue-3">Hue 3</md-option>\n        </md-select>\n    </md-input-container>\n</div>\n'),e.put("app/examples/elements/examples/button-flat.tmpl.html", '<div layout="column" layout-align="center center" flex>\n    <md-button ng-class="[vm.buttonClass1, vm.buttonHue1]" aria-label="flat button">Button</md-button>\n</div>\n<div layout="column" layout-align="center space-around" flex>\n    <md-input-container>\n        <label>Button Style</label>\n        <md-select placeholder="Choose a style" ng-model="vm.buttonClass1">\n            <md-option value="md-primary">Primary</md-option>\n            <md-option value="md-accent">Accent</md-option>\n            <md-option value="md-warn">Warn</md-option>\n        </md-select>\n    </md-input-container>\n    <md-input-container>\n        <label>Button Hue</label>\n        <md-select placeholder="Choose a hue" ng-model="vm.buttonHue1">\n            <md-option value="md-default">Default Hue</md-option>\n            <md-option value="md-hue-1">Hue 1</md-option>\n            <md-option value="md-hue-2">Hue 2</md-option>\n            <md-option value="md-hue-3">Hue 3</md-option>\n        </md-select>\n    </md-input-container>\n</div>\n'),e.put("app/examples/elements/examples/button-raised.tmpl.html", '<div layout="column" layout-align="center center" flex>\n    <md-button class="md-raised" ng-class="[vm.buttonClass2, vm.buttonHue2]" aria-label="flat button">Button</md-button>\n</div>\n<div layout="column" layout-align="center space-around" flex>\n    <md-input-container>\n        <label>Button Style</label>\n        <md-select placeholder="Choose a style" ng-model="vm.buttonClass2">\n            <md-option value="md-primary">Primary</md-option>\n            <md-option value="md-accent">Accent</md-option>\n            <md-option value="md-warn">Warn</md-option>\n        </md-select>\n    </md-input-container>\n    <md-input-container>\n        <label>Button Hue</label>\n        <md-select placeholder="Choose a hue" ng-model="vm.buttonHue2">\n            <md-option value="md-default">Default Hue</md-option>\n            <md-option value="md-hue-1">Hue 1</md-option>\n            <md-option value="md-hue-2">Hue 2</md-option>\n            <md-option value="md-hue-3">Hue 3</md-option>\n        </md-select>\n    </md-input-container>/\n</div>\n'),e.put("app/examples/elements/examples/button-ripple.tmpl.html", '<div class="elements-button-colors" layout="row" layout-xs="column" layout-align="space-around center">\n    <div layout="column" layout-align="center center">\n        <md-button class="md-primary md-raised" md-ripple-size="full" aria-label="ripple full">Full</md-button>\n        <h3>Ripple Full</h3>\n    </div>\n    <div layout="column" layout-align="center center">\n        <md-button class="md-primary md-raised" md-ripple-size="partial" aria-label="ripple partial">Partial</md-button>\n        <h3>Ripple Partial</h3>\n    </div>\n    <div layout="column" layout-align="center center">\n        <md-button class="md-primary md-raised" md-ripple-size="auto" aria-label="ripple auto">Auto</md-button>\n        <h3>Ripple Auto</h3>\n    </div>\n    <div layout="column" layout-align="center center">\n        <md-button class="md-primary md-raised" md-no-ink aria-label="no ink">No Ink</md-button>\n        <h3>No Ink</h3>\n    </div>\n</div>\n'),e.put("app/examples/elements/examples/cards-1.tmpl.html", '<div layout="row" layout-xs="column">\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <div><img src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" alt="Card Image"></div>\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Simple Card</span>\n                </md-card-title-text>\n            </md-card-title>\n\n            <md-card-content>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio minus nostrum aut magni ipsam, eius ipsa eos voluptate natus excepturi qui numquam velit non explicabo molestias quasi sunt veniam.</p>\n            </md-card-content>\n\n            <md-divider></md-divider>\n\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button>Share</md-button>\n                <md-button class="md-primary">Explore</md-button>\n            </md-card-actions>\n        </md-card>\n    </div>\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <div><img src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" alt="Card Image"></div>\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Simple Card</span>\n                    <span class="md-subtitle">With subtitle</span>\n                </md-card-title-text>\n            </md-card-title>\n\n            <md-card-content>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio minus nostrum aut magni ipsam, eius ipsa eos voluptate natus excepturi qui numquam velit non explicabo molestias quasi sunt veniam.</p>\n            </md-card-content>\n\n            <md-divider></md-divider>\n\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button>Share</md-button>\n                <md-button class="md-primary">Explore</md-button>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>\n'),e.put("app/examples/elements/examples/cards-2.tmpl.html", '<div layout="row" layout-xs="column">\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Card with image</span>\n                    <span class="md-subhead">Large</span>\n                </md-card-title-text>\n                <md-card-title-media>\n                    <div class="md-media-lg card-media">\n                        <img src="assets/images/dashboards/weather.jpg" alt="Card Image">\n                    </div>\n                </md-card-title-media>\n            </md-card-title>\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button>Action 1</md-button>\n                <md-button>Action 2</md-button>\n            </md-card-actions>\n        </md-card>\n    </div>\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Card with image</span>\n                    <span class="md-subhead">Small</span>\n                </md-card-title-text>\n                <md-card-title-media>\n                    <div class="md-media-sm card-media">\n                        <img src="assets/images/dashboards/weather.jpg" alt="Card Image">\n                    </div>\n                </md-card-title-media>\n            </md-card-title>\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button>Action 1</md-button>\n                <md-button>Action 2</md-button>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>\n<div layout="row" layout-xs="column">\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Card with image</span>\n                    <span class="md-subhead">Extra Large</span>\n                </md-card-title-text>\n            </md-card-title>\n            <md-card-content layout="row" layout-align="space-between">\n                <div class="md-media-xl card-media">\n                    <img src="assets/images/dashboards/weather.jpg" alt="Card Image">\n                </div>\n\n                <md-card-actions layout="column">\n                    <md-button>Action 1</md-button>\n                    <md-button>Action 2</md-button>\n                </md-card-actions>\n            </md-card-content>\n        </md-card>\n    </div>\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Card with image</span>\n                    <span class="md-subhead">Medium</span>\n                </md-card-title-text>\n                <md-card-title-media>\n                    <div class="md-media-md card-media">\n                        <img src="assets/images/dashboards/weather.jpg" alt="Card Image">\n                    </div>\n                </md-card-title-media>\n            </md-card-title>\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button>Action 1</md-button>\n                <md-button>Action 2</md-button>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>\n'),e.put("app/examples/elements/examples/cards-3.tmpl.html", '<div layout="row" layout-xs="column">\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <img src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" alt="Card Image">\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Icon Actions</span>\n                </md-card-title-text>\n            </md-card-title>\n\n            <md-card-content>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio minus nostrum aut magni ipsam, eius ipsa eos voluptate natus excepturi qui numquam velit non explicabo molestias quasi sunt veniam.</p>\n            </md-card-content>\n\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button class="md-icon-button" aria-label="Facebook">\n                    <md-icon md-font-icon="fa fa-facebook"></md-icon>\n                </md-button>\n                <md-button class="md-icon-button" aria-label="Twitter">\n                    <md-icon md-font-icon="fa fa-twitter"></md-icon>\n                </md-button>\n                <md-button class="md-icon-button" aria-label="GooglePlus">\n                    <md-icon md-font-icon="fa fa-google-plus"></md-icon>\n                </md-button>\n            </md-card-actions>\n        </md-card>\n        <md-card>\n            <img src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" alt="Card Image">\n            <md-card-title>\n                <md-card-title-text>\n                    <span class="md-headline">Icon Actions above content</span>\n                </md-card-title-text>\n            </md-card-title>\n\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button class="md-icon-button" aria-label="Facebook">\n                    <md-icon md-font-icon="fa fa-facebook"></md-icon>\n                </md-button>\n                <md-button class="md-icon-button" aria-label="Twitter">\n                    <md-icon md-font-icon="fa fa-twitter"></md-icon>\n                </md-button>\n                <md-button class="md-icon-button" aria-label="GooglePlus">\n                    <md-icon md-font-icon="fa fa-google-plus"></md-icon>\n                </md-button>\n            </md-card-actions>\n\n            <md-card-content>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio minus nostrum aut magni ipsam, eius ipsa eos voluptate natus excepturi qui numquam velit non explicabo molestias quasi sunt veniam.</p>\n            </md-card-content>\n        </md-card>\n    </div>\n    <div flex="50" flex-xs="100">\n        <md-card>\n            <md-card-header>\n                <md-card-avatar>\n                    <img class="md-user-avatar" src="assets/images/avatars/avatar-4.png"/>\n                </md-card-avatar>\n                <md-card-header-text>\n                    <span class="md-title">Card</span>\n                    <span class="md-subhead">With avatar image</span>\n                </md-card-header-text>\n            </md-card-header>\n\n            <img class="md-card-image" src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" alt="Card Image">\n\n            <md-card-content>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio minus nostrum aut magni ipsam, eius ipsa eos voluptate natus excepturi qui numquam velit non explicabo molestias quasi sunt veniam.</p>\n            </md-card-content>\n\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button>Share</md-button>\n                <md-button class="md-primary">Explore</md-button>\n            </md-card-actions>\n        </md-card>\n        <md-card>\n            <img class="md-card-image" src="assets/images/backgrounds/material-backgrounds/mb-bg-03.jpg" alt="Card Image">\n            <md-card-actions layout="row" layout-align="end center">\n                <md-button class="md-icon-button" aria-label="Facebook">\n                    <md-icon md-font-icon="fa fa-facebook"></md-icon>\n                </md-button>\n                <md-button class="md-icon-button" aria-label="Twitter">\n                    <md-icon md-font-icon="fa fa-twitter"></md-icon>\n                </md-button>\n                <md-button class="md-icon-button" aria-label="GooglePlus">\n                    <md-icon md-font-icon="fa fa-google-plus"></md-icon>\n                </md-button>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>\n'),e.put("app/examples/elements/examples/checkboxes-1.tmpl.html", '<md-input-container class="md-block">\n    <md-checkbox ng-model="checkboxes.default" aria-label="Default Checkbox">\n        Default Checkbox\n    </md-checkbox>\n</md-input-container>\n<md-input-container class="md-block">\n    <md-checkbox class="md-primary" ng-model="checkboxes.primary" aria-label="Primary Checkbox">\n        Primary Checkbox\n    </md-checkbox>\n</md-input-container>\n<md-input-container class="md-block">\n    <md-checkbox class="md-warn" ng-model="checkboxes.warn" aria-label="Warn Checkbox">\n        Warn Checkbox\n    </md-checkbox>\n</md-input-container>\n<md-input-container class="md-block">\n    <md-checkbox ng-model="checkboxes.disabled" aria-label="Disabled Checkbox" ng-disabled="true">\n        Disabled Checkbox\n    </md-checkbox>\n</md-input-container>\n<md-input-container class="md-block">\n    <md-checkbox ng-model="checkboxes.disabledChecked" aria-label="Disabled Checkbox" ng-disabled="true" ng-init="checkboxes.disabledChecked = true">\n        Disabled Checkbox Checked\n    </md-checkbox>\n</md-input-container>\n'),
    e.put("app/examples/elements/examples/chips-1.tmpl.html", '<form name="emailForm" class="md-padding">\n    <md-contact-chips\n        ng-model="vm.email.to"\n        md-contacts="vm.queryContacts($query)"\n        md-contact-name="name"\n        md-contact-image="image"\n        md-contact-email="email"\n        md-require-match\n        filter-selected="true"\n        placeholder="To"\n        secondary-placeholder="To">\n    </md-contact-chips>\n    <md-contact-chips\n        ng-model="vm.email.cc"\n        md-contacts="vm.queryContacts($query)"\n        md-contact-name="name"\n        md-contact-image="image"\n        md-contact-email="email"\n        md-require-match\n        filter-selected="true"\n        placeholder="CC"\n        secondary-placeholder="CC">\n    </md-contact-chips>\n    <md-contact-chips\n        ng-model="vm.email.bcc"\n        md-contacts="vm.queryContacts($query)"\n        md-contact-name="name"\n        md-contact-image="image"\n        md-contact-email="email"\n        md-require-match\n        filter-selected="true"\n        placeholder="BCC"\n        secondary-placeholder="BCC">\n    </md-contact-chips>\n    <md-input-container class="md-block">\n        <label for="subject">Subject</label>\n        <input ng-model="vm.email.subject" name="subject" required>\n    </md-input-container>\n</form>\n'),e.put("app/examples/elements/examples/datepicker-1.tmpl.html", '<div class="margin-bottom-20" layout="row" layout-align="space-around center">\n    <p>Please select a date</p>\n    <md-datepicker ng-model="myDate" md-placeholder="Enter date"></md-datepicker>\n</div>\n<md-divider></md-divider>\n<md-table-container class="margin-top-20">\n    <table md-table class="md-primary md-data-table">\n        <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n            <tr md-row>\n                <th md-column>Date Format</th>\n                <th md-column>Example</th>\n            </tr>\n        </thead>\n        <tbody md-body>\n            <tr md-row>\n                <td md-cell>\n                    mediumDate\n                </td>\n                <td md-cell>\n                    {{myDate | date}}\n                </td>\n            </tr>\n            <tr md-row>\n                <td md-cell>\n                    fullDate\n                </td>\n                <td md-cell>\n                    {{myDate | date:\'fullDate\'}}\n                </td>\n            </tr>\n            <tr md-row>\n                <td md-cell>\n                    longDate\n                </td>\n                <td md-cell>\n                    {{myDate | date:\'longDate\'}}\n                </td>\n            </tr>\n            <tr md-row>\n                <td md-cell>\n                    using moment directive\n                </td>\n                <td md-cell>\n                    <span am-time-ago="myDate"></span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</md-table-container>\n'),e.put("app/examples/elements/examples/dialog-1.tmpl.html", '<md-card>\n    <md-card-content>\n        <form name="dialogForm">\n            <md-input-container class="md-block">\n                <label>Title</label>\n                <input type="text" ng-model="vm.newDialog.title"/>\n            </md-input-container>\n            <md-input-container class="md-block">\n                <label>Content</label>\n                <textarea ng-model="vm.newDialog.content"></textarea>\n            </md-input-container>\n            <md-input-container class="md-block">\n                <label>OK Button</label>\n                <input type="text" ng-model="vm.newDialog.ok"/>\n            </md-input-container>\n            <md-input-container class="md-block">\n                <label>Cancel Button</label>\n                <input type="text" ng-model="vm.newDialog.cancel"/>\n            </md-input-container>\n            <md-button class="md-primary md-raised" ng-disabled="dialogForm.$invalid" ng-click="vm.createDialog($event, vm.newDialog)">Create Dialog</md-button>\n        </form>\n    </md-card-content>\n</md-card>\n'),e.put("app/examples/elements/examples/fab-speed-1.tmpl.html", '<div ng-controller="Fab1Controller as vm" flex>\n    <div layout="row" layout-align="center center" style="min-height: 300px" flex ng-cloak>\n        <md-fab-speed-dial md-direction="{{vm.fabDirection}}" md-open="vm.fabStatus" ng-class="vm.fabAnimation">\n            <md-fab-trigger>\n                <md-button aria-label="share this post" class="md-fab md-warn">\n                    <md-icon md-font-icon="zmdi zmdi-share"></md-icon>\n                </md-button>\n            </md-fab-trigger>\n            <md-fab-actions>\n                <md-button aria-label="twitter" class="md-fab md-raised md-mini" ng-click="vm.share(\'Shared on Twitter\', $event)">\n                    <md-icon md-font-icon="fa fa-twitter"></md-icon>\n                </md-button>\n                <md-button aria-label="facebook" class="md-fab md-raised md-mini" ng-click="vm.share(\'Shared on Facebook\', $event)">\n                    <md-icon md-font-icon="fa fa-facebook"></md-icon>\n                </md-button>\n                <md-button aria-label="google-plus" class="md-fab md-raised md-mini" ng-click="vm.share(\'Shared on Google+\', $event)">\n                    <md-icon md-font-icon="fa fa-google-plus"></md-icon>\n                </md-button>\n            </md-fab-actions>\n        </md-fab-speed-dial>\n    </div>\n\n    <div layout="row" flex>\n        <div layout="column" layout-align="start center" flex>\n            <h3>Direction</h3>\n            <md-radio-group class="text-capitalize" ng-model="vm.fabDirection">\n                <md-radio-button ng-repeat="direction in vm.fabDirections" ng-value="direction" class="md-primary">{{direction}}</md-radio-button>\n            </md-radio-group>\n        </div>\n        <div layout="column" layout-align="start center" flex>\n            <h3>Animation</h3>\n            <md-radio-group ng-model="vm.fabAnimation">\n                <md-radio-button ng-repeat="animation in vm.fabAnimations" ng-value="animation" class="md-primary">{{animation}}</md-radio-button>\n            </md-radio-group>\n        </div>\n        <div layout="column" layout-align="start center" flex>\n            <h3>Status</h3>\n            <md-radio-group class="text-capitalize" ng-model="vm.fabStatus">\n                <md-radio-button ng-repeat="status in vm.fabStatuses" ng-value="status" class="md-primary">{{status}}</md-radio-button>\n            </md-radio-group>\n        </div>\n    </div>\n</div>'),e.put("app/examples/elements/examples/fab-toolbar-1.tmpl.html", '<md-fab-toolbar class="md-left">\n    <md-fab-trigger class="align-with-text">\n        <md-button aria-label="menu" class="md-fab md-primary">\n            <md-icon md-font-icon="zmdi zmdi-attachment-alt"></md-icon>\n        </md-button>\n    </md-fab-trigger>\n    <md-toolbar>\n        <md-fab-actions class="md-toolbar-tools">\n            <md-button aria-label="insert file" class="md-icon-button">\n                <md-icon md-font-icon="zmdi zmdi-file"></md-icon>\n            </md-button>\n            <md-button aria-label="insert photo" class="md-icon-button">\n                <md-icon md-font-icon="zmdi zmdi-image"></md-icon>\n            </md-button>\n            <md-button aria-label="insert chart" class="md-icon-button">\n                <md-icon md-font-icon="zmdi zmdi-chart"></md-icon>\n            </md-button>\n            <md-button aria-label="insert event" class="md-icon-button">\n                <md-icon md-font-icon="zmdi zmdi-calendar"></md-icon>\n            </md-button>\n        </md-fab-actions>\n    </md-toolbar>\n</md-fab-toolbar>'),e.put("app/examples/elements/examples/grids-1.tmpl.html", '<div ng-controller="Grids1Controller as vm">\n    <md-grid-list md-cols-gt-md="12" md-cols-xs="3" md-cols-md="8" md-row-height-gt-md="1:1" md-row-height="4:3" md-gutter-gt-md="16px" md-gutter-gt-xs="8px" md-gutter="4px">\n        <md-grid-tile ng-repeat="tile in ::vm.colorTiles" md-colspan-gt-xs="{{::tile.colspan}}" md-rowspan-gt-xs="{{::tile.rowspan}}" ng-style="::{ \'background\': tile.color }">\n        </md-grid-tile>\n    </md-grid-list>\n</div>'),e.put("app/examples/elements/examples/lists-1.tmpl.html", '<md-list>\n    <md-subheader class="md-no-sticky">3 line items</md-subheader>\n    <md-list-item class="md-3-line" ng-repeat="item in ::vm.emails">\n        <img ng-src="{{::item.from.image}}" class="md-avatar" alt="{{::item.from.name}}" />\n        <div class="md-list-item-text">\n            <h3>{{::item.from.name}}</h3>\n            <h4>{{::item.subject}}</h4>\n            <p>{{::item.content[0]}}</p>\n        </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-subheader class="md-no-sticky">2 line items</md-subheader>\n    <md-list-item class="md-2-line" ng-repeat="item in ::vm.emails">\n        <img ng-src="{{::item.from.image}}" class="md-avatar" alt="{{::item.from.name}}" />\n        <div class="md-list-item-text">\n            <h3>{{::item.from.name}}</h3>\n            <p>{{::item.content[0]}}</p>\n        </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n</md-list>\n'),e.put("app/examples/elements/examples/lists-2.tmpl.html", '<md-list>\n    <md-subheader class="md-no-sticky">Primary Action</md-subheader>\n    <md-list-item class="md-3-line" ng-repeat="item in ::vm.emails">\n        <md-checkbox ng-model="item.selected"></md-checkbox>\n        <div class="md-list-item-text">\n            <h3>{{::item.from.name}}</h3>\n            <h4>{{::item.subject}}</h4>\n            <p>{{::item.content[0]}}</p>\n        </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-subheader class="md-no-sticky">Primary & Secondary Action</md-subheader>\n    <md-list-item ng-repeat="item in ::vm.emails">\n        <img ng-src="{{::item.from.image}}" class="md-avatar" alt="{{::item.from.name}}" />\n        <p>{{::item.from.name}}</p>\n        <md-switch class="md-secondary" ng-model="item.selected"></md-switch>\n    </md-list-item>\n</md-list>\n'),e.put("app/examples/elements/examples/loader-1.tmpl.html", '<div layout="column" layout-fill ng-controller="Loader1Controller as vm">\n\n    <div layout="row" layout-align="center space-around">\n        <p flex>Show the loader for {{vm.time}} seconds.</p>\n        <md-slider flex class="md-accent" min="1" max="30" md-discrete ng-model="vm.time" aria-label="loader time"></md-slider>\n    </div>\n    <md-button class="md-primary md-raised" ng-click="vm.showLoader()">Show the loader</md-button>\n</div>\n'),e.put("app/examples/elements/examples/menu-1.tmpl.html", '<md-toolbar>\n    <div class="md-toolbar-tools">\n        <h2>\n            My App\n        </h2>\n        <span flex></span>\n        <md-menu>\n            <md-button class="md-icon-button" aria-label="open menu" ng-click="$mdOpenMenu()">\n                <md-icon md-font-icon="zmdi zmdi-more-vert"></md-icon>\n            </md-button>\n            <md-menu-content width="3">\n                <md-menu-item>\n                    <md-button ng-click="$mdCloseMenu">\n                        <md-icon md-font-icon="zmdi zmdi-settings"></md-icon>\n                        Settings\n                    </md-button>\n                </md-menu-item>\n                <md-menu-item>\n                    <md-button ng-click="$mdCloseMenu">\n                        <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n                        Profile\n                    </md-button>\n                </md-menu-item>\n                <md-menu-divider></md-menu-divider>\n                <md-menu-item>\n                    <md-button ng-click="$mdCloseMenu">\n                        <md-icon md-font-icon="zmdi zmdi-sign-in"></md-icon>\n                        Log out\n                    </md-button>\n                </md-menu-item>\n            </md-menu-content>\n        </md-menu>\n    </div>\n</md-toolbar>'),e.put("app/examples/elements/examples/progress-circular.tmpl.html", '<h3>Determinate</h3>\n<div class="margin-bottom-20" layout="row" layout-xs="column" layout-align="space-around" layout-fill>\n    <md-progress-circular class="md-hue-2" md-mode="determinate" ng-value="vm.determinateValue"></md-progress-circular>\n    <md-progress-circular class="md-accent" md-mode="determinate" ng-value="vm.determinateValue"></md-progress-circular>\n    <md-progress-circular class="md-accent md-hue-1" md-mode="determinate" ng-value="vm.determinateValue"></md-progress-circular>\n    <md-progress-circular class="md-warn md-hue-3" md-mode="determinate" ng-value="vm.determinateValue"></md-progress-circular>\n    <md-progress-circular class="md-warn" md-mode="determinate" ng-value="vm.determinateValue"></md-progress-circular>\n</div>\n<h3>Indeterminate</h3>\n<div class="margin-bottom-20" layout="row" layout-xs="column" layout-align="space-around" layout-fill>\n    <md-progress-circular class="md-hue-2" md-mode="indeterminate"></md-progress-circular>\n    <md-progress-circular class="md-accent" md-mode="indeterminate"></md-progress-circular>\n    <md-progress-circular class="md-accent md-hue-1" md-mode="indeterminate"></md-progress-circular>\n    <md-progress-circular class="md-warn md-hue-3" md-mode="indeterminate"></md-progress-circular>\n    <md-progress-circular class="md-warn" md-mode="indeterminate"></md-progress-circular>\n</div>'),e.put("app/examples/elements/examples/progress-linear.tmpl.html", '<h3>Indeterminate (Default)</h3>\n<md-progress-linear class="margin-bottom-20" md-mode="indeterminate"></md-progress-linear>\n<h3>Determinate (Warn)</h3>\n<md-progress-linear class="md-accent margin-bottom-20" md-mode="determinate" value="{{vm.determinateValue}}"></md-progress-linear>\n<h3>Buffered (Warn)</h3>\n<md-progress-linear class="md-warn margin-bottom-20" md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{bufferValue}}"></md-progress-linear>\n'),e.put("app/examples/elements/examples/radios-1.tmpl.html", '<div layout="column">\n    <p>Default Radio : <strong>{{data.default}}</strong></p>\n    <md-radio-group ng-model="data.default" ng-init="data.default = \'Red\'">\n        <md-radio-button value="Red">Red</md-radio-button>\n        <md-radio-button value="Green">Green</md-radio-button>\n        <md-radio-button value="Blue">Blue</md-radio-button>\n    </md-radio-group>\n</div>\n\n<div layout="column">\n    <p>Primary Radio : <strong>{{data.primary}}</strong></p>\n    <md-radio-group class="md-primary" ng-model="data.primary" ng-init="data.primary = \'Red\'">\n        <md-radio-button value="Red">Red</md-radio-button>\n        <md-radio-button value="Green">Green</md-radio-button>\n        <md-radio-button value="Blue">Blue</md-radio-button>\n    </md-radio-group>\n</div>\n'),e.put("app/examples/elements/examples/radios-2.tmpl.html", '<p>Please choose an avatar : <strong>{{data.avatar}}</strong></p>\n<div layout="row" layout-align="center center">\n    <md-radio-group class="elements-radio-avatar" ng-model="::data.avatar" ng-init="data.avatar = \'avatar-1\'; avatars = [\'avatar-1\',\'avatar-2\',\'avatar-3\',\'avatar-4\',\'avatar-5\', \'avatar-6\']">\n        <md-radio-button ng-repeat="avatar in ::avatars" value="{{::avatar}}" style="float:left;" aria-label="avatar">\n            <img ng-src="assets/images/avatars/{{::avatar}}.png" alt="{{::avatar}}">\n        </md-radio-button>\n    </md-radio-group>\n</div>\n'),e.put("app/examples/elements/examples/select-1.tmpl.html", '<label>How many slices of cake would you like?</label>\n<md-select placeholder="Pick" ng-model="numCakes">\n    <md-option value="1">One</md-option>\n    <md-option value="2">Two</md-option>\n    <md-option value="3">Three</md-option>\n    <md-option value="4">Four</md-option>\n</md-select>\n<p class="margin-0">Order {{numCakes}} cakes</p>'),e.put("app/examples/elements/examples/select-2.tmpl.html", '<label>What car do you drive?</label>\n<md-select placeholder="Pick" ng-model="carType">\n    <md-optgroup label="Swedish Cars">\n        <md-option value="Volvo">Volvo</md-option>\n        <md-option value="Saab">Saab</md-option>\n    </md-optgroup>\n    <md-optgroup label="German Cars">\n        <md-option value="Mercedes">Mercedes</md-option>\n        <md-option value="Audi">Audi</md-option>\n    </md-optgroup>\n</md-select>'),e.put("app/examples/elements/examples/sidebars-1.tmpl.html", '<!-- right sidebar -->\n<md-sidenav class="md-sidenav-right md-whiteframe-z2" md-component-id="example-right">\n    <md-toolbar class="md-theme-light">\n        <h1 class="md-toolbar-tools">Sidenav Right</h1>\n    </md-toolbar>\n    <md-content class="md-padding">\n        <p>This is the right sidebar</p>\n    </md-content>\n</md-sidenav>\n\n\n<!-- left sidebar -->\n<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="example-left">\n    <md-toolbar class="md-theme-light">\n        <h1 class="md-toolbar-tools">Sidenav Left</h1>\n    </md-toolbar>\n    <md-content class="md-padding">\n        <p>This is the left sidebar</p>\n    </md-content>\n</md-sidenav>\n\n<!-- open sidebar buttons -->\n<div layout="column" layout-fill layout-align="center center">\n    <h2>Click a button to see a sidebar in action</h2>\n    <div layout="row">\n        <md-button class="md-primary md-raised" ng-click="vm.openSidebar(\'example-left\')">Show Left</md-button>\n        <md-button class="md-primary md-raised" ng-click="vm.openSidebar(\'example-right\')">Show Right</md-button>\n    </div>\n</div>'),e.put("app/examples/elements/examples/slider-continuous.tmpl.html", '<span>Default - Value: {{sliders.default}}</span>\n<md-slider min="0" max="100" ng-model="sliders.default" ng-init="sliders.default = 50" aria-label="default value"></md-slider>\n\n<span>Primary - Value: {{sliders.primary}}</span>\n<md-slider class="md-primary" min="0" max="100" ng-model="sliders.primary" ng-init="sliders.primary = 50" aria-label="primary value"></md-slider>\n\n<span>Accent - Value: {{sliders.accent}}</span>\n<md-slider class="md-accent" min="0" max="100" ng-model="sliders.accent" ng-init="sliders.accent = 50" aria-label="accent value"></md-slider>\n'),e.put("app/examples/elements/examples/slider-discrete.tmpl.html", '<span>Default - Value: {{sliders.default}}</span>\n<md-slider min="0" max="10" md-discrete ng-model="sliders.default" ng-init="sliders.default = 5" aria-label="default value"></md-slider>\n\n<span>Primary - Value: {{sliders.primary}}</span>\n<md-slider class="md-primary" min="0" max="10" md-discrete ng-model="sliders.primary" ng-init="sliders.primary = 5" aria-label="primary value"></md-slider>\n\n<span>Accent - Value: {{sliders.accent}}</span>\n<md-slider class="md-accent" min="0" max="10" md-discrete ng-model="sliders.accent" ng-init="sliders.accent = 5" aria-label="accent value"></md-slider>'),e.put("app/examples/elements/examples/switches-1.tmpl.html", '<md-switch ng-model="switches.default" aria-label="Default Switch" ng-init="switches.default = true">\n    Default Switch\n</md-switch>\n<md-switch class="md-primary" ng-model="switches.primary" aria-label="Primary Switch" ng-init="switches.primary = true">\n    Primary Switch\n</md-switch>\n<md-switch class="md-warn" ng-model="switches.warn" aria-label="Warn Switch" ng-init="switches.warn = true">\n    Warn Switch\n</md-switch>\n<md-switch ng-model="switches.disabled" aria-label="Disabled Switch" disabled ng-init="switches.disabled = true">\n    Disabled Switch\n</md-switch>\n<md-switch ng-model="switches.master" aria-label="Master Switch" ng-change="vm.toggleAll(switches, switches.master)" ng-init="switches.master = true">\n    Master Switch\n</md-switch>\n'),e.put("app/examples/elements/examples/table-1.tmpl.html", '<div ng-controller="Tables1Controller as vm">\n    <tri-table class="elements-image-table-example" columns="::vm.columns" contents="::vm.contents" page-size="5"></tri-table>\n</div>'),e.put("app/examples/elements/examples/table-advanced.tmpl.html", '<div ng-controller="TablesAdvancedController as vm">\n    <md-toolbar ng-hide="vm.selected.length || vm.filter.show" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <h2 class="md-title">Popular Github Users</h2>\n            <div flex></div>\n            <md-button class="md-icon-button" ng-click="vm.filter.show = true">\n                <md-icon md-font-icon="zmdi zmdi-filter-list"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-toolbar ng-show="vm.filter.show && !vm.selected.length" class="md-table-toolbar md-default">\n        <div class="md-toolbar-tools">\n            <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n            <form flex="" name="vm.filter.form">\n                <input type="text" ng-model="vm.query.filter" ng-model-options="vm.filter.options" placeholder="search">\n            </form>\n            <md-button class="md-icon-button" ng-click="vm.removeFilter()">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-toolbar class="md-table-toolbar alternate" ng-show="vm.selected.length">\n        <div class="md-toolbar-tools" layout-align="start center">\n            <div>{{vm.selected.length}} {{vm.selected.length > 1 ? \'users\' : \'user\'}} selected</div>\n        </div>\n    </md-toolbar>\n\n    <md-table-container>\n        <table md-table class="md-primary md-data-table" md-row-select ng-model="vm.selected" md-progress="vm.promise">\n            <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                <tr md-row>\n                    <th md-column><span translate>{{vm.columns.avatar}}</span></th>\n                    <th md-column><span translate>{{vm.columns.login}}</span></th>\n                    <th md-column md-numberic md-order-by="id"><span translate>{{vm.columns.id}}</span></th>\n                </tr>\n            </thead>\n            <tbody md-body>\n                <tr md-row md-auto-select md-select="user" ng-repeat="user in vm.users.items">\n                    <td md-cell><a href="{{::user.html_url}}"><img ng-src="{{::user.avatar_url}}"/></a></td>\n                    <td md-cell>{{::user.login}}</td>\n                    <td md-cell>{{::user.id}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-table-container>\n\n    <md-table-pagination md-limit="vm.query.limit" md-page-select md-page="vm.query.page" md-total="{{vm.users.total_count}}" md-on-paginate="vm.getUsers"></md-table-pagination>\n</div>'),e.put("app/examples/elements/examples/tabs-1.tmpl.html", '<md-tabs class="md-primary" md-selected="selectedTabIndex" md-stretch-tabs="always">\n    <md-tab label="General">\n        <md-content class="md-padding">\n            <h3>User Details</h3>\n            <form>\n                <md-input-container class="md-block">\n                    <label>Username</label>\n                    <input type="text">\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label>Password</label>\n                    <input type="text">\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label>Email</label>\n                    <input type="text">\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label>Twitter</label>\n                    <input type="text">\n                </md-input-container>\n                <div layout="row" layout-align="end center">\n                    <md-button>Update</md-button>\n                </div>\n            </form>\n            <md-grid-list md-cols-gt-md="3" md-cols-xs="3" md-cols-md="4" md-row-height="1:1" md-gutter="2px">\n                <md-grid-tile md-colspan="1" md-rowspan="1" ng-repeat="album in music.albums" ng-style="{ \'background-image\': \'url(\' + album.cover + \')\' }">\n                    <md-grid-tile-footer>\n                        <h3>{{album.title}}</h3>\n                    </md-grid-tile-footer>\n                </md-grid-tile>\n            </md-grid-list>\n        </md-content>\n    </md-tab>\n    <md-tab label="Settings">\n        <md-content class="md-padding">\n            <h3>Settings</h3>\n            <md-list>\n                <md-list-item layout="row" layout-align="space-around center">\n                    <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n                    <p>Show Username</p>\n                    <md-switch class="md-secondary"></md-switch>\n                </md-list-item>\n                <md-list-item layout="row" layout-align="space-around center">\n                    <md-icon md-font-icon="zmdi zmdi-account-box"></md-icon>\n                    <p>Show Avatar</p>\n                    <md-switch class="md-secondary"></md-switch>\n                </md-list-item>\n                <md-list-item layout="row" layout-align="space-around center">\n                    <md-icon md-font-icon="zmdi zmdi-cloud-upload"></md-icon>\n                    <p>Allow Backups</p>\n                    <md-switch class="md-secondary"></md-switch>\n                </md-list-item>\n            </md-list>\n        </md-content>\n    </md-tab>\n</md-tabs>'),e.put("app/examples/elements/examples/textangular-1.tmpl.html", '<md-input-container class="md-block">\n    <label for="subject" translate>Subject</label>\n    <input ng-model="email.subject" name="subject" required>\n    <div ng-messages="emailForm.subject.$error">\n        <div ng-message when="required"><span translate>Please enter a subject for the email.</span></div>\n    </div>\n</md-input-container>\n\n<md-input-container flex class="md-block">\n    <text-angular name="emailBody" ng-model="email.content" ta-target-toolbars="editor-toolbar"></text-angular>\n</md-input-container>\n\n<text-angular-toolbar name="editor-toolbar" class="email-dialog-editor-toolbar" ta-toolbar-active-button-class="active"></text-angular-toolbar>\n\n<div layout="row" layout-align="end center">\n    <md-button class="md-primary">Send</md-button>\n</div>'),e.put("app/examples/elements/examples/toast-1.tmpl.html", '<md-button class="md-fab md-primary md-fab-top-right" ng-click="vm.showToast($event, \'top right\')" aria-label="top right toast">\n    <md-icon md-font-icon="zmdi zmdi-comment-dots"></md-icon>\n</md-button>\n<md-button class="md-fab md-primary md-fab-bottom-right" ng-click="vm.showToast($event, \'bottom right\')" aria-label="bottom right toast">\n    <md-icon md-font-icon="zmdi zmdi-comment-dots"></md-icon>\n</md-button>\n<md-button class="md-fab md-primary md-fab-top-left" ng-click="vm.showToast($event, \'top left\')" aria-label="top left toast">\n    <md-icon md-font-icon="zmdi zmdi-comment-dots"></md-icon>\n</md-button>\n<md-button class="md-fab md-primary md-fab-bottom-left" ng-click="vm.showToast($event, \'bottom left\')" aria-label="bottom left toast">\n    <md-icon md-font-icon="zmdi zmdi-comment-dots"></md-icon>\n</md-button>\n<div layout="row" layout-fill layout-align="center center">\n    <h2>Click a button to see a toast in action</h2>\n</div>\n'),e.put("app/examples/elements/examples/toolbar-1.tmpl.html", '<md-toolbar class="toolbar-default margin-bottom-30">\n    <div class="md-toolbar-tools">\n        <md-button class="md-icon-button" aria-label="Settings">\n            <md-icon md-font-icon="zmdi zmdi-menu"></md-icon>\n        </md-button>\n        <h2>\n          <span>Toolbar with Icon Buttons</span>\n        </h2>\n        <span flex></span>\n        <md-button class="md-icon-button" aria-label="More">\n            <md-icon md-font-icon="zmdi zmdi-more-vert"></md-icon>\n        </md-button>\n    </div>\n</md-toolbar>\n<md-toolbar class="md-accent margin-bottom-30">\n    <div class="md-toolbar-tools">\n        <h2>\n          <span>Accent Toolbar</span>\n        </h2>\n    </div>\n</md-toolbar>\n<md-toolbar class="md-warn toolbar-default margin-bottom-30">\n    <div class="md-toolbar-tools">\n        <h2>\n            <span class="breadcrumb">\n                <span hide-xs>Warn Toolbar<md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon></span>\n            </span>\n            <span class="breadcrumb">\n                <span hide-xs>With<md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon></span>\n            </span>\n            <span class="breadcrumb">\n                <span hide-xs>Breadcrumbs</span>\n            </span>\n        </h2>\n    </div>\n</md-toolbar>\n<md-toolbar class="md-tall margin-bottom-30">\n    <div class="md-toolbar-tools">\n        <h2>\n          <span>Tall Toolbar</span>\n        </h2>\n    </div>\n</md-toolbar>\n<md-toolbar class="md-tall md-accent">\n    <span flex></span>\n    <h2 class="md-toolbar-tools md-toolbar-tools-bottom">\n        <span class="md-flex">Tall Accent Toolbar - with actions pin to the bottom</span>\n    </h2>\n</md-toolbar>'),e.put("app/examples/elements/examples/tooltip-1.tmpl.html", '<md-button class="md-fab md-primary" aria-label="add">\n    <md-icon md-font-icon="zmdi zmdi-plus"></md-icon>\n    <md-tooltip>Add</md-tooltip>\n</md-button>\n<md-button class="md-fab md-primary" aria-label="print">\n    <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n    <md-tooltip>Print</md-tooltip>\n</md-button>\n<md-button class="md-fab md-primary" aria-label="refresh">\n    <md-icon md-font-icon="zmdi zmdi-refresh"></md-icon>\n    <md-tooltip>Refresh</md-tooltip>\n</md-button>\n'),e.put("app/examples/elements/examples/upload-1.tmpl.html", '<div layout="row" layout-align="space-around center">\n    <md-button class="md-primary md-raised" ngf-select="vm.upload($files)" ngf-multiple="true" aria-label="upload">Upload</md-button>\n    <md-button class="md-primary md-raised md-fab" ngf-select="vm.upload($files)" ngf-multiple="true" aria-label="upload">\n        <md-icon md-font-icon="zmdi zmdi-cloud-upload"></md-icon>\n    </md-button>\n</div>\n'),e.put("app/examples/elements/examples/upload-animate.tmpl.html", '<div layout="row" layout-align="space-around center">\n    <md-button class="md-primary md-raised md-fab" ngf-select="vm.upload($files)" ng-disabled="vm.status != \'idle\'" ngf-multiple="true" aria-label="upload">\n        <md-icon md-font-icon ng-class="{ \'zmdi zmdi-cloud-upload\': vm.status == \'idle\', \'fa fa-spinner fa-pulse\': vm.status == \'uploading\', \'zmdi zmdi-check\': vm.status == \'complete\'}"></md-icon>\n    </md-button>\n</div>\n'),e.put("app/examples/elements/examples/whiteframe-1.tmpl.html", '<md-whiteframe class="md-whiteframe-z1 margin-20 text-center">\n    <h3>.md-whiteframe-z1</h3>\n</md-whiteframe>\n<md-whiteframe class="md-whiteframe-z2 margin-20 text-center">\n    <h3>.md-whiteframe-z2</h3>\n</md-whiteframe>\n<md-whiteframe class="md-whiteframe-z3 margin-20 text-center">\n    <h3>.md-whiteframe-z3</h3>\n</md-whiteframe>\n<md-whiteframe class="md-whiteframe-z4 margin-20 text-center">\n    <h3>.md-whiteframe-z4</h3>\n</md-whiteframe>\n<md-whiteframe class="md-whiteframe-z5 margin-20 text-center">\n    <h3>.md-whiteframe-z5</h3>\n</md-whiteframe>'),e.put("app/examples/forms/examples/autocomplete-1.tmpl.html", '<md-autocomplete\n    class="margin-bottom-20"\n    ng-disabled="vm.isDisabled"\n    md-no-cache="vm.noCache"\n    md-selected-item="selectedItem"\n    md-search-text-change="vm.searchTextChange(vm.searchText)"\n    md-search-text="vm.searchText"\n    md-selected-item-change="vm.selectedItemChange(item)"\n    md-items="item in vm.querySearch(vm.searchText)"\n    md-item-text="item.display"\n    md-min-length="0"\n    placeholder="What is your favorite US state?">\n    <span md-highlight-text="vm.searchText" md-highlight-flags="^i">{{item.display}}</span>\n</md-autocomplete>\n\n<md-checkbox ng-model="vm.simulateQuery">Simulate query for results?</md-checkbox>\n<md-checkbox ng-model="vm.noCache">Disable caching of queries?</md-checkbox>\n<md-checkbox ng-model="vm.isDisabled">Disable the input?</md-checkbox>\n\n<p style="padding-left: 15px;">By default, <code>&lt;md-autocomplete&gt;</code> will cache results when performing a query.  After the initial call is performed, it will use the cached results to eliminate unnecessary server requests or lookup logic. This can be disabled above.</p>\n'),
    e.put("app/examples/forms/examples/binding-1.tmpl.html", '<md-card flex>\n    <md-card-content>\n        <h2>Create User</h2>\n        <md-input-container class="md-block">\n            <label>Username</label>\n            <input type="text" ng-model="vm.user.username">\n        </md-input-container>\n        <md-input-container class="md-block">\n            <label>Password</label>\n            <input type="password" ng-model="vm.user.password">\n        </md-input-container>\n        <md-input-container class="md-block">\n            <label>Favoutite Color</label>\n            <md-select ng-model="vm.user.favouriteColor" placeholder="Favorite Color">\n                <md-option ng-value="color" ng-repeat="color in [\'red\', \'green\', \'blue\']">{{color}}</md-option>\n            </md-select>\n        </md-input-container>\n        <md-input-container class="md-block">\n            <label>Description</label>\n            <textarea ng-model="vm.user.description"></textarea>\n        </md-input-container>\n        <div layout="row" layout-align="end center">\n            <md-button class="md-primary">Create</md-button>\n            <md-button>Cancel</md-button>\n        </div>\n    </md-card-content>\n</md-card>\n<md-card flex>\n    <md-card-content>\n        <h2>JSON</h2>\n        <pre>{{vm.user | json}}</pre>\n    </md-card-content>\n</md-card>\n'),e.put("app/examples/forms/examples/inputs-counter.tmpl.html", '<md-input-container class="md-block">\n    <label>Username (max 10 characters)</label>\n    <input type="text" ng-model="username" md-maxlength="10">\n</md-input-container>\n<md-input-container class="md-block">\n    <label>Tweet (max 140 characters)</label>\n    <textarea ng-model="tweet" md-maxlength="140"></textarea>\n</md-input-container>\n'),e.put("app/examples/forms/examples/inputs-float.tmpl.html", '<h2>Create User</h2>\n<md-input-container class="md-block">\n    <label>Username</label>\n    <input type="text">\n</md-input-container>\n<md-input-container class="md-block">\n    <label>Password</label>\n    <input type="password">\n</md-input-container>\n<md-input-container class="md-block">\n    <label>Description</label>\n    <textarea></textarea>\n</md-input-container>\n<div layout="row" layout-align="end center">\n    <md-button class="md-primary">Create</md-button>\n    <md-button>Cancel</md-button>\n</div>\n'),e.put("app/examples/forms/examples/inputs-icons.tmpl.html", '<h2>Create User</h2>\n<md-input-container md-no-float class="md-block">\n    <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n    <input type="text" placeholder="Name">\n</md-input-container>\n<md-input-container md-no-float class="md-block">\n    <md-icon md-font-icon="zmdi zmdi-phone"></md-icon>\n    <input type="text" placeholder="Phone Number">\n</md-input-container>\n<md-input-container md-no-float class="md-block">\n    <md-icon md-font-icon="zmdi zmdi-email"></md-icon>\n    <input type="email" placeholder="Email (required)" ng-required="true">\n</md-input-container>\n<md-input-container md-no-float class="md-block">\n    <md-icon md-font-icon="zmdi zmdi-pin"></md-icon>\n    <input type="text" placeholder="Address">\n</md-input-container>\n'),e.put("app/examples/forms/examples/inputs-states.tmpl.html", '<md-input-container>\n    <label>Enable or Disable me</label>\n    <input type="text" ng-model="username" ng-disabled="inputDisabled">\n</md-input-container>\n<md-switch ng-model="inputDisabled">\n    Disable Input\n</md-switch>\n'),e.put("app/examples/forms/examples/validation-1.tmpl.html", '<h2>Enter your email</h2>\n<form name="login" novalidate>\n    <md-input-container class="md-block">\n        <label for="email">email</label>\n        <input id="email" label="email" name="email" type="email" ng-model="user.email" required/>\n        <div ng-messages="login.email.$error" md-auto-hide="false" ng-show="login.email.$touched">\n            <div ng-message="required">\n                Please enter your email address.\n            </div>\n            <div ng-message="email">\n                Please enter a valid email address.\n            </div>\n        </div>\n    </md-input-container>\n\n    <div class="button-toolbar" layout="row" layout-align="end center">\n        <md-button class="md-primary" ng-disabled="login.$invalid">Create</md-button>\n        <md-button>Cancel</md-button>\n    </div>\n</form>\n'),e.put("app/examples/maps/examples/map-label-demo.tmpl.html", '<ui-gmap-google-map center="vm.labeledMap.center" zoom="vm.labeledMap.zoom" options="vm.labeledMap.options">\n    <ui-gmap-marker coords="vm.labeledMap.marker.coords" idkey="vm.labeledMap.marker.id" options="vm.labeledMap.marker.options">\n    \t<ui-gmap-window show="\'true\'">\n            <div>{{vm.labelTitle}}</div>\n        </ui-gmap-window>\n    </ui-gmap-marker>\n</ui-gmap-google-map>\n'),e.put("app/examples/maps/examples/map-terrain-demo.tmpl.html", '<div id="map_terrain_canvas">\n    <ui-gmap-google-map center="vm.terrainMap.center" zoom="vm.terrainMap.zoom" options="vm.terrainMap.options">\n    \t<ui-gmap-marker coords="vm.terrainMap.marker.coords" idkey="vm.terrainMap.marker.id" options="vm.terrainMap.marker.options"></ui-gmap-marker>\n    </ui-gmap-google-map>\n</div>\n'),e.put("app/examples/menu/examples/dynamic-menu.tmpl.html", '<div ng-controller="MenuDynamicController as vm" layout="column">\n    <div layout="row">\n         <md-switch ng-model="vm.dynamicMenu.showDynamicMenu" aria-label="Show extra menu" ng-change="vm.toggleExtraMenu(vm.dynamicMenu.showDynamicMenu)">\n            Show extra menu\n        </md-switch>\n    </div>\n</div>'),e.put("app/examples/authentication/forgot/forgot.tmpl.html", '<md-card>\n    <md-toolbar class="padding-20 text-center">\n        <img ng-src="{{::vm.triSettings.logo}}" alt="{{vm.triSettings.name}}">\n        <h1 class="md-headline" translate>Forgot your password?</h1>\n    </md-toolbar>\n\n    <md-content class="md-padding">\n        <p translate>Please enter your email below</p>\n        <form name="forgot">\n            <md-input-container class="md-block">\n                <label for="email" translate>email</label>\n                <input id="email" label="email" name="email" type="email" ng-model="vm.user.email" required/>\n                <div ng-messages="forgot.email.$error" md-auto-hide="false" ng-show="forgot.email.$touched">\n                    <div ng-message when="required"><span translate>Please enter your email address.</span></div>\n                    <div ng-message when="email"><span translate>Please enter a valid email address.</span></div>\n                </div>\n            </md-input-container>\n\n            <md-button class="md-raised md-primary full-width margin-left-0 margin-right-0 margin-top-10 margin-bottom-10" ng-click="vm.resetClick()" ng-disabled="forgot.$invalid" translate="Reset" aria-label="{{\'Reset\' | triTranslate}}"></md-button>\n\n            <md-button class="md-primary full-width margin-left-0 margin-right-0 margin-top-10 margin-bottom-10" href="#/login" translate="Remembered it? Login in here" aria-label="{{\'Remembered it? Login in here\' | triTranslate}}"></md-button>\n        </form>\n    </md-content>\n</md-card>\n'),e.put("app/examples/authentication/layouts/authentication.tmpl.html", '<div class="full-image-background mb-bg-fb-05" layout="row" layout-fill>\n    <div class="animate-wrapper" flex layout="column">\n        <div id="ui-login" class="login-frame" ui-view flex layout="column" layout-align="center center"></div>\n    </div>\n</div>\n'),e.put("app/examples/authentication/lock/lock.tmpl.html", '<md-card>\n    <md-toolbar class="padding-20 text-center">\n        <img ng-src="{{::vm.triSettings.logo}}" alt="{{vm.triSettings.name}}">\n        <h1 class="md-headline">\n            <span translate>Welcome back</span> {{vm.user.name}}\n        </h1>\n    </md-toolbar>\n\n    <md-content class="md-padding">\n        <p class="margin-top-20 margin-bottom-20" translate>You have been logged out due to idleness. Enter your password to log back in.</p>\n\n        <form name="lock">\n            <md-input-container class="md-block">\n                <label for="password" translate>password</label>\n                <input label="password" name="password" type="password" ng-model="vm.user.password" required/>\n                <div ng-messages for="lock.password.$error" md-auto-hide="false" ng-show="lock.password.$touched">\n                    <div ng-message when="required"><span translate>Please enter your password.</span></div>\n                </div>\n            </md-input-container>\n\n            <div layout="row">\n                <md-button flex href="#/login" translate="Log out"></md-button>\n                <md-button flex class="md-primary" ng-click="vm.loginClick()" ng-disabled="lock.$invalid" translate="Log in"></md-button>\n            </div>\n        </form>\n    </md-content>\n</md-card>\n'),e.put("app/examples/authentication/login/login.tmpl.html", '<md-card >\n    <md-toolbar class="padding-20 text-center">\n        <img ng-src="{{::vm.triSettings.logo}}" alt="{{vm.triSettings.name}}">\n        <h1 class="md-headline" translate>Login</h1>\n    </md-toolbar>\n\n    <md-content class="md-padding">\n        <form name="login">\n            <md-input-container class="md-block">\n                <label for="email" translate>email</label>\n                <input id="email" label="email" name="email" type="email" ng-model="vm.user.email" required/>\n                <div ng-messages="login.email.$error" md-auto-hide="false" ng-show="login.email.$touched">\n                    <div ng-message when="required"><span translate>Please enter your email address.</span></div>\n                    <div ng-message when="email"><span translate>Please enter a valid email address.</span></div>\n                </div>\n            </md-input-container>\n            <md-input-container class="md-block">\n                <label for="password" translate>password</label>\n                <input  id="password" label="password" name="password" type="password" ng-model="vm.user.password" required/>\n                <div ng-messages for="login.password.$error" md-auto-hide="false" ng-show="login.password.$touched">\n                    <div ng-message when="required"><span translate>Please enter your password.</span></div>\n                </div>\n            </md-input-container>\n\n            <div layout="row" layout-align="space-between center">\n                <md-input-container>\n                    <md-checkbox ng-model="vm.user.rememberMe">\n                        <span translate>Remember Me</span>\n                    </md-checkbox>\n                </md-input-container>\n\n                <md-input-container>\n                    <md-button flex class="md-primary" href="#/forgot" translate="Forgot password?" aria-label="{{\'Forgot password?\' | triTranslate}}"></md-button>\n                </md-input-container>\n            </div>\n\n            <md-button class="md-raised md-primary full-width margin-left-0 margin-right-0 margin-top-10 margin-bottom-10"  ng-click="vm.loginClick()" ng-disabled="login.$invalid" translate="Log in" aria-label="{{\'Log in\' | triTranslate}}"></md-button>\n\n            <md-button class="md-primary full-width margin-left-0 margin-right-0 margin-top-10 margin-bottom-10" href="#/signup" translate="Don\'t have an account? Create one now" aria-label="{{\'Don\\\'t have an account? Create one now\' | triTranslate}}"></md-button>\n\n            <div class="social-login">\n                <md-divider></md-divider>\n\n                <div class="text-center margin-20" translate>or login with</div>\n\n                <div layout="row" layout-align="space-between center"  layout-margin>\n                    <md-button href="#" ng-repeat="social in ::vm.socialLogins" class="md-icon-button" ng-style="{ \'background-color\': social.color }" aria-label="{{social.icon}}">\n                        <md-icon md-font-icon="{{::social.icon}}"></md-icon>\n                    </md-button>\n                </div>\n            </div>\n        </form>\n    </md-content>\n</md-card>\n'),e.put("app/examples/authentication/profile/profile.tmpl.html", '<div class="full-image-background mb-bg-01 padding-20 padding-top-200 overlay-gradient-30" layout="row" layout-align="center start">\n    <div class="margin-right-20">\n        <img src="assets/images/avatars/avatar-5.png" alt="girl-avatar" class="make-round" width="100"/>\n    </div>\n    <div class="text-light">\n        <h3 class="font-weight-600 margin-bottom-0 text-light">Christos / Profile</h3>\n        <p class="font-weight-300 margin-top-0">Edit your name, avatar etc</p>\n     </div>\n</div>\n\n<div layout="row" class="profile" layout-wrap>\n    <div flex="100" flex-gt-md="100">\n        <md-tabs md-dynamic-height md-border-bottom>\n            <md-tab label="Profile">\n                <md-content class="md-padding">\n                    <form name="profile">\n                        <md-input-container class="md-block">\n                            <label for="name" translate>name</label>\n                            <input id="name" label="name" name="name" type="text" ng-model="vm.user.name" required/>\n                            <div ng-messages="profile.name.$error" md-auto-hide="false" ng-show="profile.name.$touched">\n                                <div ng-message when="required"><span translate>Please enter your name</span></div>\n                            </div>\n                        </md-input-container>\n                        <md-input-container class="md-block">\n                            <label for="email" translate>email</label>\n                            <input id="email" label="email" name="email" type="email" ng-model="vm.user.email" required/>\n                            <div ng-messages="profile.email.$error" md-auto-hide="false" ng-show="profile.email.$touched">\n                                <div ng-message when="required">\n                                    <span translate>Please enter your email address</span>\n                                </div>\n                                <div ng-message when="email">\n                                    <span translate>Please enter a valid email address</span>\n                                </div>\n                            </div>\n                        </md-input-container>\n\n                        <md-input-container class="md-block">\n                            <label for="location" translate>location</label>\n                            <input id="location" label="location" name="location" type="text" ng-model="vm.user.location"/>\n                        </md-input-container>\n\n                        <md-input-container class="md-block">\n                            <label for="website" translate>website</label>\n                            <input id="website" label="website" name="website" type="text" ng-model="vm.user.website"/>\n                        </md-input-container>\n\n                        <md-input-container class="md-block">\n                            <label for="twitter" translate>twitter</label>\n                            <input id="twitter" label="twitter" name="twitter" type="text" ng-model="vm.user.twitter"/>\n                        </md-input-container>\n\n                        <md-input-container class="md-block">\n                            <label for="bio" translate>bio</label>\n                            <textarea id="bio" label="bio" name="bio" ng-model="vm.user.bio"/>\n                        </md-input-container>\n\n                        <md-button class="md-raised md-primary margin-left-0" ng-disabled="profile.$invalid" translate="Update Settings"></md-button>\n                    </form>\n                </md-content>\n            </md-tab>\n            <md-tab label="Password">\n                <md-content class="md-padding">\n                    <form name="password">\n                        <md-input-container class="md-block">\n                            <label for="old-password" translate>current</label>\n                            <input id="old-password" label="old-password" name="old-password" type="text" ng-model="vm.user.current"/>\n                        </md-input-container>\n\n                        <md-input-container class="md-block">\n                            <label for="password" translate>new password</label>\n                            <input id="password" label="password" name="password" type="password" ng-model="vm.user.password" tri-same-password="password.confirm" ng-minlength="8" required/>\n                            <div ng-messages="password.password.$error" ng-include="\'app/examples/authentication/signup/password.messages.html\'" md-auto-hide="false" ng-show="password.password.$touched"></div>\n                        </md-input-container>\n\n                        <md-input-container class="md-block">\n                            <label for="confirm" translate>confirm password</label>\n                            <input id="confirm" label="confirm" name="confirm" type="password" ng-model="vm.user.confirm" tri-same-password="password.password" ng-minlength="8" required/>\n                            <div ng-messages="password.confirm.$error" ng-include="\'app/examples/authentication/signup/password.messages.html\'" md-auto-hide="false" ng-show="password.confirm.$touched"></div>\n                        </md-input-container>\n\n                        <md-button class="md-raised md-primary margin-left-0" ng-disabled="profile.$invalid" translate="Update Settings"></md-button>\n\n                    </form>\n                </md-content>\n            </md-tab>\n            <md-tab label="Notifications">\n                <md-content class="md-padding">\n                    <md-list>\n                        <div ng-repeat="group in ::vm.settingsGroups">\n                            <md-subheader class="md-accent" translate="{{::group.name}}"></md-subheader>\n                            <md-list-item ng-repeat="setting in ::group.settings" layout="row" layout-align="space-around center">\n                                <md-icon md-font-icon="{{::setting.icon}}"></md-icon>\n                                <p translate>{{::setting.title}}</p>\n                                <md-switch class="md-secondary" ng-model="setting.enabled"></md-switch>\n                            </md-list-item>\n                        </div>\n                    </md-list>\n                    <md-button class="md-raised md-primary margin-left-0" ng-disabled="profile.$invalid" translate="Update Settings"></md-button>\n                </md-content>\n            </md-tab>\n        </md-tabs>\n    </div>\n\n</div>\n'),e.put("app/examples/authentication/signup/password.messages.html", "\n"),e.put("app/examples/authentication/signup/signup.tmpl.html", '<md-card>\n    <md-toolbar class="padding-20 text-center">\n        <img ng-src="{{::vm.triSettings.logo}}" alt="{{vm.triSettings.name}}">\n        <h1 class="md-headline" translate>Sign up</h1>\n    </md-toolbar>\n\n    <md-content class="md-padding">\n        <form name="signup">\n            <md-input-container class="md-block">\n                <label for="name" translate>name</label>\n                <input id="name" label="name" name="name" type="text" ng-model="vm.user.name" required/>\n                <div ng-messages="signup.name.$error" md-auto-hide="false" ng-show="signup.name.$touched">\n                    <div ng-message when="required">\n                        <span translate>Please enter your name</span>\n                    </div>\n                </div>\n            </md-input-container>\n            <md-input-container class="md-block">\n                <label for="email" translate>email</label>\n                <input id="email" label="email" name="email" type="email" ng-model="vm.user.email" required/>\n                <div ng-messages="signup.email.$error" md-auto-hide="false" ng-show="signup.email.$touched">\n                    <div ng-message when="required">\n                        <span translate>Please enter your email address</span>\n                    </div>\n                    <div ng-message when="email">\n                        <span translate>Please enter a valid email address</span>\n                    </div>\n                </div>\n            </md-input-container>\n\n            <md-input-container class="md-block">\n                <label for="password" translate>password</label>\n                <input id="password" label="password" name="password" type="password" ng-model="vm.user.password" tri-same-password="signup.confirm" ng-minlength="8" required/>\n                <ng-messages for="signup.password.$error" md-auto-hide="false" ng-show="signup.password.$touched">\n                    <div ng-message when="required">\n                        <span translate>Please enter a password</span>\n                    </div>\n                    <div ng-message when="minlength">\n                        <span translate>Your password must be greater than 8 characters long</span>\n                    </div>\n                    <div ng-message when="samePassword">\n                        <span translate>You need to enter the same password</span>\n                    </div>\n                </ng-messages>\n            </md-input-container>\n\n            <md-input-container class="md-block">\n                <label for="password" translate>confirm password</label>\n                <input id="confirm" label="confirm" name="confirm" type="password" ng-model="vm.user.confirm" tri-same-password="signup.password" ng-minlength="8" required/>\n                <ng-messages for="signup.confirm.$error" md-auto-hide="false" ng-show="signup.confirm.$touched">\n                    <div ng-message when="required">\n                        <span translate>Please enter a password</span>\n                    </div>\n                    <div ng-message when="minlength">\n                        <span translate>Your password must be greater than 8 characters long</span>\n                    </div>\n                    <div ng-message when="samePassword">\n                        <span translate>You need to enter the same password</span>\n                    </div>\n                </ng-messages>\n            </md-input-container>\n\n            <md-button class="md-raised md-primary full-width margin-left-0 margin-right-0 margin-top-10 margin-bottom-10" ng-click="vm.signupClick()" ng-disabled="signup.$invalid" translate="Sign Up" aria-label="{{\'Sign Up\' | triTranslate}}"></md-button>\n\n            <md-button  class="md-primary full-width margin-left-0 margin-right-0 margin-top-10 margin-bottom-10" href="#/login" translate="Already have an account? Login here." aria-label="{{\'Already have an account? Login here.\' | triTranslate}}"></md-button>\n\n        </form>\n    </md-content>\n\n</md-card>\n'),e.put("app/examples/dashboards/analytics/dashboard-analytics.tmpl.html", '<div class="dashboard-container overlay-10 padded-content-page" layout="column">\n    <div class="drag-container" layout="row" layout-xs="column" layout-margin dragula=\'"drag-analytics-container"\'>\n        <tri-widget palette-background="deep-orange:500" content-layout="row" content-layout-align="space-between center" content-padding>\n            <div>\n                <md-icon class="font-size-5 opacity-50 margin-left-10" md-font-icon="fa fa-comments"></md-icon>\n            </div>\n            <div layout="column" layout-align="center end">\n                <p class="md-display-3 font-weight-100 margin-top-0 margin-bottom-0 text-ellipsis" countupto="54" decimals="0"></p>\n                <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Comments</p>\n            </div>\n        </tri-widget>\n        <tri-widget palette-background="triCyan:500" content-layout="row" content-layout-align="space-between center" content-padding>\n            <div>\n                <md-icon class="font-size-5 opacity-50 margin-left-10" md-font-icon="fa fa-twitter"></md-icon>\n            </div>\n            <div layout="column" layout-align="center end">\n                <p class="md-display-3 font-weight-100 margin-top-0 margin-bottom-0 text-ellipsis" countupto="101" decimals="0"></p>\n                <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Tweets</p>\n            </div>\n        </tri-widget>\n        <tri-widget palette-background="indigo:500" content-layout="row" content-layout-align="space-between center" content-padding>\n            <div>\n                <md-icon class="font-size-5 opacity-50 margin-left-10" md-font-icon="fa fa-facebook"></md-icon>\n            </div>\n            <div layout="column" layout-align="center end">\n                <p class="md-display-3 font-weight-100 margin-top-0 margin-bottom-0" countupto="943" decimals="0"></p>\n                <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Likes</p>\n            </div>\n        </tri-widget>\n        <tri-widget palette-background="teal:500" content-layout="row" content-layout-align="space-between center" content-padding>\n            <div>\n                <md-icon class="font-size-5 opacity-50 margin-left-10" md-font-icon="fa fa-eye"></md-icon>\n            </div>\n            <div layout="column" layout-align="center end">\n                <p class="md-display-3 font-weight-100 margin-top-0 margin-bottom-0" countupto="944" decimals="0"></p>\n                <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Reach</p>\n            </div>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget chartjs-line-widget title="Pageviews & Visits" subtitle="11/03/15 - 11/4/15" content-layout="row" content-padding>\n            <canvas flex class="chart-line" chart-data="lineChart.data" chart-labels="lineChart.labels" chart-legend="true" chart-series="lineChart.series" chart-options="lineChart.options"></canvas>\n        </tri-widget>\n        <tri-widget chartjs-pie-widget title="Network Referrals" subtitle="11/03/15 - 11/4/15" content-padding>\n            <canvas flex class="chart-pie" chart-data="pieChart.data" chart-legend="true" chart-labels="pieChart.labels"></canvas>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget flex load-data-widget="{ referrals: \'app/examples/dashboards/data/referrals.json\' }" title="Referral Traffic" subtitle="11/03/15 - 11/4/15" content-padding>\n            <table class="table">\n                <thead>\n                    <tr>\n                        <th ng-repeat="header in ::referrals.header | limitTo:3">{{::header}}</th>\n                    </tr>\n                </thead>\n                <tbody class="md-caption">\n                    <tr ng-repeat="referral in ::referrals.data | limitTo:5">\n                        <td ng-repeat="data in ::referral | limitTo:3">{{::data}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </tri-widget>\n        <tri-widget flex load-data-widget="{ social: \'app/examples/dashboards/data/social.json\' }" title="Network Referrals" subtitle="11/03/15 - 11/4/15" content-padding>\n            <table class="table">\n                <thead>\n                    <tr>\n                        <th ng-repeat="header in ::social.header | limitTo:3">{{::header}}</th>\n                    </tr>\n                </thead>\n                <tbody class="md-caption">\n                    <tr ng-repeat="socialData in ::social.data | limitTo:5">\n                        <td ng-repeat="data in ::socialData | limitTo:3">{{::data}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget google-geochart-widget flex title="Location" subtitle="11/03/15 - 11/4/15" title-position="top" content-padding>\n            <div class="google-chart" google-chart chart="geoChartData"></div>\n        </tri-widget>\n        <tri-widget flex load-data-widget="{ social: \'app/examples/dashboards/data/location.json\' }" title="Network Referrals" subtitle="11/03/15 - 11/4/15" content-padding>\n            <table class="table">\n                <thead>\n                    <tr>\n                        <th ng-repeat="header in ::social.header | limitTo:3">{{::header}}</th>\n                    </tr>\n                </thead>\n                <tbody class="md-caption">\n                    <tr ng-repeat="socialData in ::social.data | limitTo:5">\n                        <td ng-repeat="data in ::socialData | limitTo:3">{{::data}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </tri-widget>\n    </div>\n</div>\n'),e.put("app/examples/dashboards/general/dashboard-general.tmpl.html", '<div class="dashboard-container overlay-5 padded-content-page" layout="column">\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget calendar-widget flex class="widget-calendar" palette-background="triCyan:500" content-layout="column" content-layout-align="space-between">\n            <div flex layout="row" layout-align="start center" layout-padding layout-fill>\n                <div flex layout="column">\n                    <h3 class="md-subhead text-ellipsis margin-0">\n                        {{calendarController.currentDay | amDateFormat:\'MMMM\'}}\n                    </h3>\n                    <h3 class="md-subhead text-ellipsis margin-0">\n                        {{calendarController.currentDay | amDateFormat:\'YYYY\'}}\n                    </h3>\n                </div>\n                <div class="widget-buttons">\n                    <md-button class="widget-button md-icon-button" ng-click="calendarController.changeMonth(\'prev\')" aria-label="previous month">\n                        <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n                    </md-button>\n                    <md-button show-gt-md class="widget-button md-icon-button" ng-click="calendarController.changeMonth(\'today\')" aria-label="today">\n                        <md-icon md-font-icon="zmdi zmdi-calendar-alt"></md-icon>\n                    </md-button>\n                    <md-button class="widget-button md-icon-button" ng-click="calendarController.changeMonth(\'next\')" aria-label="next month">\n                        <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n                    </md-button>\n                </div>\n            </div>\n            <md-divider></md-divider>\n            <div layout-padding>\n                <div ui-calendar="calendarController.calendarOptions" ng-model="calendarController.calendarEvents" calendar="calendarWidget"></div>\n            </div>\n        </tri-widget>\n\n\n        <div layout="column" flex layout-margin>\n            <tri-widget palette-background="deep-orange:500" content-layout="column" content-layout-align="space-between">\n                <h2 class="md-display-2 font-weight-100 margin-0" flex layout-padding>Call Sue</h2>\n                <md-divider></md-divider>\n                <div flex="20" layout="row" layout-align="space-between center" layout-padding>\n                    <span>Monday 1st March</span>\n                    <md-button class="md-icon-button" aria-label="call">\n                        <md-icon md-font-icon="zmdi zmdi-phone"></md-icon>\n                    </md-button>\n                </div>\n            </tri-widget>\n            <tri-widget palette-background="purple:300" content-layout="column" content-layout-align="space-between">\n                <h2 class="md-display-2 font-weight-100 margin-0" flex layout-padding>Clean Desk</h2>\n                <md-divider></md-divider>\n                <div flex="20" layout="row" layout-align="space-between center" layout-padding>\n                    <span>Tuesday 2st March</span>\n                    <md-button class="md-icon-button" aria-label="clean">\n                        <md-icon md-font-icon="zmdi zmdi-calendar"></md-icon>\n                    </md-button>\n                </div>\n            </tri-widget>\n        </div>\n        <tri-widget todo-widget class="dashboard-todo-widget" palette-background="light-blue:600" title="Todo List" subtitle="Your current todo list" title-position="top" content-layout-align="space-between">\n            <md-list flex class="padding-left-0">\n                <md-list-item ng-repeat="todo in todos">\n                    <md-checkbox ng-model="todo.done"></md-checkbox>\n                    <p>{{todo.name}}</p>\n                </md-list-item>\n            </md-list>\n        </tri-widget>\n    </div>\n\n    <div layout="row" layout-xs="column" layout-margin>\n       <tri-widget flex weather-widget="Sitia" background-image="assets/images/dashboards/weather.jpg" palette-background="deep-orange:800" content-layout="column" content-layout-align="space-between">\n            <div layout="column" flex layout-align="start center">\n                <p class="md-caption">{{weather.date | amDateFormat:\'dddd, MMMM Do YYYY\'}}</p>\n                <h1 class="font-size-14 margin-top-80 margin-bottom-80 font-weight-100">\n                    {{::weather.temp}}&deg;\n                </h1>\n            </div>\n            <div layout="column" class="full-width overlay-gradient-40">\n                <md-divider></md-divider>\n                <div flex layout="row" layout-margin layout-align="space-between center" class="padding-30">\n                    <i class="wi font-size-2" ng-class="weather.iconClass"></i>\n                    <p class="margin-0">{{::weather.text}}</p>\n                    <p class="margin-0">{{::weather.location}}</p>\n                </div>\n            </div>\n        </tri-widget>\n\n        <tri-widget chat-widget flex class="widget-chat" title="Chat" content-layout="column" content-layout-align="space-between">\n            <md-divider></md-divider>\n            <md-list class="padding-top-20 padding-bottom-0" flex>\n                <md-list-item ng-repeat="chat in ::conversation" class="md-3-line" ng-class="userClass($even)" ng-init="userColor = $even ? \'cyan\' : \'light-green\'">\n                    <img class="md-avatar" ng-src="{{::chat.image}}" alt="{{::chat.name}}">\n                    <div class="md-list-item-text">\n                        <p palette-background="{{::userColor}}:200" ng-repeat="message in ::chat.messages">\n                           {{::message}}\n                        </p>\n                    </div>\n                </md-list-item>\n            </md-list>\n            <div layout="row" layout-align="space-between center">\n                <md-input-container flex class="margin-left-20 margin-right-20">\n                    <label>Message</label>\n                    <input type="text">\n                </md-input-container>\n            </div>\n        </tri-widget>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin ng-cloak>\n        <div layout="column" layout-margin layout-fill flex="40" flex-xs="100">\n            <tri-widget class="widget-blog" flex="60" flex-xs="100" content-layout="column" content-layout-align="start center">\n                <img src="assets/images/backgrounds/material-backgrounds/mb-bg-01.jpg" alt="some bg">\n                <div class="widget-blog-text padding-10" ng-cloak>\n                    <h2>It\'s all about Material</h2>\n                    <p>We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.</p>\n                    <md-fab-speed-dial md-direction="up" class="md-fling">\n                        <md-fab-trigger>\n                            <md-button aria-label="share this post" class="md-fab md-warn">\n                                <md-icon md-font-icon="zmdi zmdi-share"></md-icon>\n                            </md-button>\n                        </md-fab-trigger>\n                        <md-fab-actions>\n                            <md-button aria-label="twitter" class="md-fab md-raised md-mini" ng-click="share(\'Shared on Twitter\', $event)">\n                                <md-icon md-font-icon="fa fa-twitter"></md-icon>\n                            </md-button>\n                            <md-button aria-label="facebook" class="md-fab md-raised md-mini" ng-click="share(\'Shared on Facebook\', $event)">\n                                <md-icon md-font-icon="fa fa-facebook"></md-icon>\n                            </md-button>\n                            <md-button aria-label="google-plus" class="md-fab md-raised md-mini" ng-click="share(\'Shared on Google+\', $event)">\n                                <md-icon md-font-icon="fa fa-google-plus"></md-icon>\n                            </md-button>\n                        </md-fab-actions>\n                    </md-fab-speed-dial>\n                </div>\n            </tri-widget>\n            <div layout="row" layout-margin>\n                <tri-widget flex title="Color palette" subtitle="Color in material design is inspired by bold hues and bright highlights. "  palette-background="deep-orange:800" background-image="assets/images/backgrounds/material-backgrounds/mb-bg-05.jpg" overlay-title title-position="bottom" >\n                </tri-widget>\n            </div>\n        </div>\n\n        <div flex layout="column" layout-margin>\n            <div layout-margin>\n            <tri-widget palette-background="triCyan:500" twitter-widget>\n                <div layout="row" layout-align="space-between center" class="padding-normal">\n                    <i class="fa fa-twitter font-size-4 opacity-50"></i>\n                    <h3 flex hide-xs class="md-subhead">Oxygenna\'s feed</h3>\n                    <div class="widget-buttons">\n                        <md-button class="md-icon-button" ng-click="prevTweet()" aria-label="previous tweet">\n                            <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n                        </md-button>\n                        <md-button class="md-icon-button" ng-click="nextTweet()" aria-label="next tweet">\n                            <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n                        </md-button>\n                    </div>\n                </div>\n                <div layout="column" class="padding-top-0 padding-left-40 padding-right-40 padding-bottom-40">\n                    <md-tabs md-selected="selectedTab" class="dashboard-no-bar-tabs text-center" md-no-pagination md-no-bar md-dynamic-height>\n                        <md-tab ng-repeat="tweet in ::tweets" label="tweet.id">\n                            <div ng-bind="tweet.body" linkify="twitter" class="font-weight-300 font-size-2 font-style-italic line-height-big"></div>\n                        </md-tab>\n                    </md-tabs>\n                </div>\n            </tri-widget>\n            </div>\n            <div layout="row" layout-margin>\n                 <tri-widget flex="50" title="Contacts" contacts-widget content-layout="row">\n                    <md-list flex>\n                        <md-list-item ng-repeat="contact in ::contacts">\n                            <img class="md-avatar" ng-src="{{::contact.image}}" alt="{{::contact.name}}">\n                            <p>{{::contact.name}}</p>\n                            <md-icon md-font-icon="zmdi zmdi-chat" class="md-primary"></md-icon>\n                            <md-divider ng-hide="$last"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </tri-widget>\n                <tri-widget palette-background="deep-orange:600">\n                    <img class="full-width" src="assets/images/avatars/avatar-big.png" alt="my face">\n\n                    <div>\n                        <md-divider></md-divider>\n                        <h2 class="opacity-90 margin-10 text-center">\n                            About me\n                        </h2>\n                        <p class="md-body-2 opacity-80 padding-normal padding-top-0 text-center">\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus.\n                        </p>\n                    </div>\n                </tri-widget>\n            </div>\n        </div>\n    </div>\n</div>\n'),
    e.put("app/examples/dashboards/sales/dashboard-sales.tmpl.html", '<div class="sales-dashboard" layout="column">\n    <tri-widget title="Sales" subtitle="{{vm.dateRange.start | amDateFormat:\'MMMM Do YYYY\'}} - {{vm.dateRange.end | amDateFormat:\'MMMM Do YYYY\'}}" palette-background="triCyan:800" class="padding-left-40 padding-right-40 padding-top-20 padding-bottom-20 no-shadow">\n        <canvas height="300" class="chart-line" chart-data="vm.chartLineData.data" chart-labels="vm.chartLineData.labels" chart-series="vm.chartLineData.series" chart-options="vm.chartLineData.options" chart-colours="vm.chartLineData.colors"></canvas>\n    </tri-widget>\n\n    <div layout="row" layout-xs="column" layout-margin dragula=\'"drag-analytics-container"\'>\n        <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n            <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalSales" duration="1.5" decimals="0"></p>\n            <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Sales</p>\n        </tri-widget>\n        <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n            <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="vm.salesData.totalEarnings" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n            <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>Total Earnings</p>\n        </tri-widget>\n        <tri-widget palette-background="triCyan:600" content-layout="column" content-layout-align="space-between center" content-padding>\n            <p class="md-display-2 font-weight-100 margin-top-10 margin-bottom-0" countupto="971315.53" duration="1.5" options="{ prefix: \'$\' }" decimals="2"></p>\n            <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-10" translate>All Time Earnings</p>\n        </tri-widget>\n    </div>\n\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget flex title="Orders" content-layout="column" content-layout-align="center">\n            <md-table-container>\n                <table md-table class="md-data-table">\n                    <thead md-head md-order="vm.query.order" md-on-reorder="vm.getUsers">\n                        <tr md-row>\n                            <th md-column md-order-by="date" decend-first>Date</th>\n                            <th md-column md-order-by="buyer">Buyer</th>\n                            <th md-column md-numeric md-order-by="items.length">Items</th>\n                            <th md-column md-order-by="status">Status</th>\n                            <th md-column md-numeric md-order-by="total">Total</th>\n                            <th md-column>Details</th>\n                        </tr>\n                    </thead>\n                    <tbody md-body>\n                        <tr md-row ng-repeat="order in vm.salesData.orders | orderBy: vm.query.order | limitTo: vm.query.limit : (vm.query.page -1) * vm.query.limit">\n                            <td md-cell>{{::order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</td>\n                            <td md-cell>{{::order.buyer}}</td>\n                            <td md-cell>{{::order.items.length}}</td>\n                            <td md-cell>\n                                <span class="status" ng-class="\'status-\' + order.status">\n                                    {{::order.status}}\n                                </span>\n                            </td>\n                            <td md-cell>{{::order.total | currency}}</td>\n                            <td md-cell>\n                                <md-button ng-click="vm.openOrder(order, $event)" class="md-icon-button" aria-label="Open Order">\n                                    <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n                                </md-button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </md-table-container>\n            <md-table-pagination md-limit="vm.query.limit" md-page="vm.query.page" md-total="{{vm.salesData.orders.length}}" md-page-select></md-table-pagination>\n        </tri-widget>\n    </div>\n\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget flex flex-xs="100" title="Order Status" content-padding>\n            <canvas class="chart-doughnut" chart-data="vm.chartPieData.data" chart-legend="true" chart-labels="vm.chartPieData.labels"></canvas>\n        </tri-widget>\n        <tri-widget flex flex-xs="100" title="Top Product Categories" content-padding>\n            <canvas class="chart-bar" chart-data="vm.chartBarData.data" chart-labels="vm.chartBarData.labels" chart-legend="true" chart-options="vm.chartBarData.options" chart-colours="vm.chartBarData.colours" chart-series="vm.chartBarData.series"></canvas>\n        </tri-widget>\n    </div>\n</div>\n'),e.put("app/examples/dashboards/sales/date-change-dialog.tmpl.html", '<md-dialog flex="60" flex-xs="100">\n    <md-toolbar class="toolbar-default">\n        <div class="md-toolbar-tools">\n            <h2 flex translate>Select a date range</h2>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="md-dialog-content">\n        <div layout="row" layout-padding>\n            <div flex layout="column" layout-align="center center">\n                <h2 translate>Start Date</h2>\n                <md-datepicker ng-model="vm.start" md-placeholder="\'Start Date\' | triTranslate"></md-datepicker>\n            </div>\n            <div layout="column" layout-align="center center">\n                <md-icon style="font-size:2.4em" md-font-icon="zmdi zmdi-long-arrow-right"></md-icon>\n            </div>\n            <div flex layout="column" layout-align="center center">\n                <h2 translate>End Date</h2>\n                <md-datepicker ng-model="vm.end" md-placeholder="\'End Date\' | triTranslate"></md-datepicker>\n            </div>\n        </div>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.cancelClick()" aria-label="{{\'Cancel\' | triTranslate}}" translate="Cancel"></md-button>\n        <md-button ng-click="vm.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>'),e.put("app/examples/dashboards/sales/fab-button.tmpl.html", '<md-button ng-click="vm.changeDate($event)" class="md-fab md-accent md-fab-bottom-right" aria-label="change date">\n    <md-icon md-font-icon="zmdi zmdi-calendar-alt"></md-icon>\n</md-button>\n'),e.put("app/examples/dashboards/sales/order-dialog.tmpl.html", '<md-dialog class="order-dialog mobile-fullwidth-dialog" flex="60" flex-xs="100">\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2 flex >\n                <span translate>Order #</span><span>{{vm.order.id}}</span>\n            </h2>\n            <md-button class="md-icon-button" ng-click="vm.printClick()" aria-label="print">\n                <md-icon md-font-icon="zmdi zmdi-print"></md-icon>\n            </md-button>\n            <md-button class="md-icon-button" ng-click="vm.cancelClick()" aria-label="cancel">\n                <md-icon md-font-icon="zmdi zmdi-close"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n\n    <md-dialog-content class="md-dialog-content">\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Order Date</strong>\n            </div>\n            <div flex>\n                <span>{{vm.order.date | amDateFormat:\'MMMM Do YYYY, h:mm:ss a\'}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Customer Name</strong>\n            </div>\n            <div flex>\n                <span>{{vm.order.name}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Customer Email</strong>\n            </div>\n            <div flex>\n                <span>{{vm.order.buyer}}</span>\n            </div>\n        </div>\n        <div flex layout="row" class="margin-bottom-10">\n            <div flex>\n                <strong translate>Number of Items</strong>\n            </div>\n            <div flex>\n                <span>{{vm.order.items.length}}</span>\n            </div>\n        </div>\n\n        <md-divider class="margin-bottom-40 margin-top-40"></md-divider>\n\n        <table class="order-dialog-product-table md-table">\n            <thead>\n                <tr>\n                    <th translate>Product Description</th>\n                    <th translate>Category</th>\n                    <th class="text-right" translate>Price</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat="item in vm.order.items">\n                    <td>{{item.name}}</td>\n                    <td>{{item.category}}</td>\n                    <td class="text-right padding-right-10">{{item.price | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Sub Total</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{vm.order.subTotal | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Tax</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{vm.order.tax | currency}}</td>\n                </tr>\n                <tr>\n                    <td colspan="2" class="font-weight-600" translate>Total</td>\n                    <td class="text-right font-weight-600 padding-right-10">{{vm.order.total | currency}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-dialog-content>\n\n    <md-dialog-actions layout="row">\n        <span flex></span>\n        <md-button ng-click="vm.okClick()" class="md-primary" aria-label="{{Ok | triTranslate}}" translate="Ok"></md-button>\n    </md-dialog-actions>\n</md-dialog>'),e.put("app/examples/dashboards/server/dashboard-server.tmpl.html", '<div class="dashboard-container overlay-10 padded-content-page" layout="column">\n    <div layout="row" layout-sm="column" layout-margin>\n        <tri-widget flex="70" flex-sm="100" server-widget>\n            <md-tabs layout-fill flex md-dynamic-height md-no-disconnect md-stretch-tabs="always" md-no-pagination>\n                <md-tab label="{{\'Real Time\' | triTranslate}}">\n                    <md-content class="md-padding">\n                        <h1 class="md-headline"><span translate>Bandwidth</span> <span class="md-caption">(Mbps)</span></h1>\n                        <canvas flex class="chart-line" chart-data="serverCharts.bandwidth.data" chart-labels="serverCharts.bandwidth.labels" chart-legend="false" chart-options="serverCharts.bandwidth.options" chart-colours="serverCharts.bandwidth.colours"></canvas>\n                        <h1 class="md-headline"><span translate>CPU</span> <span class="md-caption">(%)</span></h1>\n                        <canvas flex class="chart-line" chart-data="serverCharts.cpu.data" chart-labels="serverCharts.cpu.labels" chart-legend="false" chart-options="serverCharts.cpu.options" chart-colours="serverCharts.cpu.colours"></canvas>\n                    </md-content>\n                </md-tab>\n                <md-tab label="{{\'24 Hours\' | triTranslate}}">\n                    <md-content class="md-padding">\n                        <canvas flex class="chart-bar" chart-data="serverCharts.data24hrs.data" chart-labels="serverCharts.data24hrs.labels" chart-legend="true" chart-options="serverCharts.data24hrs.options" chart-series="serverCharts.data24hrs.series"></canvas>\n                    </md-content>\n                </md-tab>\n                <md-tab label="{{\'7 Days\' | triTranslate}}">\n                    <md-content class="md-padding">\n                        <canvas flex class="chart-bar" chart-data="serverCharts.data7days.data" chart-labels="serverCharts.data7days.labels" chart-legend="true" chart-options="serverCharts.data7days.options" chart-series="serverCharts.data7days.series"></canvas>\n                    </md-content>\n                </md-tab>\n                <md-tab label="{{\'365 Days\' | triTranslate}}">\n                    <md-content class="md-padding">\n                        <canvas flex class="chart-bar" chart-data="serverCharts.data365days.data" chart-labels="serverCharts.data365days.labels" chart-legend="true" chart-options="serverCharts.data365days.options" chart-series="serverCharts.data365days.series"></canvas>\n                    </md-content>\n                </md-tab>\n            </md-tabs>\n        </tri-widget>\n        <div flex="30" flex-sm="100" class="drag-container" layout="column" layout-margin dragula=\'"drag-server-container"\'>\n            <tri-widget palette-background="triCyan:500" background="primary" content-layout="row" content-layout-align="space-between center" content-padding>\n                <div class="show-gt-md">\n                    <md-icon class="font-size-5 opacity-50" md-font-icon="zmdi zmdi-gps-dot"></md-icon>\n                </div>\n                <div layout="column" layout-align="center end">\n                    <p class="md-display-1 font-weight-100 margin-top-0 margin-bottom-0 text-ellipsis">192.168.1.1</p>\n                    <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>IP Address</p>\n                </div>\n            </tri-widget>\n            <tri-widget palette-background="triCyan:600" background="primary" content-layout="row" content-layout-align="space-between center" content-padding>\n                <div>\n                    <md-icon class="font-size-5 opacity-50" md-font-icon="zmdi zmdi-memory"></md-icon>\n                </div>\n                <div layout="column" layout-align="center end">\n                    <p class="md-display-1 font-weight-100 margin-top-0 margin-bottom-0 text-ellipsis" countupto="2" decimals="0" options="{suffix: \'Gb\'}"></p>\n                    <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Memory</p>\n                </div>\n            </tri-widget>\n            <tri-widget palette-background="triCyan:700" background="primary" content-layout="row" content-layout-align="space-between center" content-padding>\n                <div>\n                    <md-icon class="font-size-5 opacity-50" md-font-icon="zmdi zmdi-storage"></md-icon>\n                </div>\n                <div layout="column" layout-align="center end">\n                    <p class="md-display-1 font-weight-100 margin-top-0 margin-bottom-0" countupto="30" decimals="0" options="{suffix: \'Gb\'}"></p>\n                    <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Disk</p>\n                </div>\n            </tri-widget>\n            <tri-widget palette-background="triCyan:800" background="primary" content-layout="row" content-layout-align="space-between center" content-padding>\n                <div>\n                    <md-icon class="font-size-5 opacity-50" md-font-icon="zmdi zmdi-pin"></md-icon>\n                </div>\n                <div layout="column" layout-align="center end">\n                    <p class="md-display-1 font-weight-100 margin-top-0 margin-bottom-0">London</p>\n                    <p class="md-body-2 opacity-60 margin-top-0 margin-bottom-0" translate>Location</p>\n                </div>\n            </tri-widget>\n        </div>\n    </div>\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget flex flex="50" flex-xs="100" title="DiskS">\n            <md-divider></md-divider>\n            <md-list>\n                <md-list-item ng-repeat="disk in ::vm.disks">\n                    <md-icon md-font-icon="{{::disk.icon}}" class="md-primary"></md-icon>\n                    <p>{{::disk.name}}</p>\n                    <md-switch class="md-secondary" ng-model="disk.enabled"></md-switch>\n                    <md-divider ng-hide="::$last"></md-divider>\n                </md-list-item>\n            </md-list>\n        </tri-widget>\n        <tri-widget flex flex="50" flex-xs="100" title="Host Job Queue">\n            <md-divider></md-divider>\n            <md-list>\n                <md-list-item class="md-2-line" ng-repeat="job in ::vm.jobs">\n                    <div class="md-list-item-text">\n                        <h3>{{::job.job}}</h3>\n                        <p>{{::job.time}}</p>\n                    </div>\n                    <md-icon class="md-secondary" md-font-icon="zmdi zmdi-check alert-success" ng-show="::job.complete"></md-icon>\n                    <md-icon class="md-secondary" md-font-icon="zmdi zmdi-close alert-error" ng-hide="::job.complete"></md-icon>\n                    <md-divider ng-hide="$last"></md-divider>\n                </md-list-item>\n            </md-list>\n        </tri-widget>\n\n    </div>\n\n    <div layout="row" layout-xs="column" layout-margin>\n        <tri-widget chartjs-pie-widget flex flex="40" flex-md="40" flex-xs="100" title="Disk Usage" subtitle="11/03/15 - 11/4/15" content-padding>\n            <div flex>\n                <canvas class="chart-doughnut full-width" chart-data="vm.serverChart.data" chart-legend="true" chart-labels="vm.serverChart.labels"></canvas>\n            </div>\n        </tri-widget>\n        <tri-widget flex-xs="100" title="Monthly Usage" palette-background="triCyan:600">\n            <md-divider></md-divider>\n            <div class="full-width" layout="row" layout-padding>\n                <h4 flex="20" class="opacity-80 margin-0 margin-right-20" translate>Disk</h4>\n                <div flex>\n                    <md-progress-linear class="md-warn margin-bottom-10" md-mode="determinate" value="60"></md-progress-linear>\n                    <span class="md-caption">(60% <span translate>of monthly limit</span>)</span>\n                </div>\n            </div>\n            <md-divider flex></md-divider>\n            <div class="full-width" layout="row" layout-padding>\n                <h4 flex="20" class="opacity-80 margin-0 margin-right-20" translate>Bandwidth</h4>\n                <div flex>\n                    <md-progress-linear class="md-accent margin-bottom-10" md-mode="determinate" value="30"></md-progress-linear>\n                    <span class="md-caption">(30% <span translate>of monthly limit</span>)</span>\n                </div>\n            </div>\n            <md-divider flex></md-divider>\n            <div class="full-width" layout="row" layout-padding>\n                <h4 flex="20" class="opacity-80 margin-0 margin-right-20" translate>Monthly Usage</h4>\n                <div flex>\n                    <md-progress-linear class="md-warn margin-bottom-10" md-mode="determinate" value="83"></md-progress-linear>\n                    <span class="md-caption">(83% <span translate>of monthly limit</span>)</span>\n                </div>\n            </div>\n            <md-divider flex></md-divider>\n            <div class="full-width" layout="row" layout-padding>\n                <h4 flex="20" class="opacity-80 margin-0 margin-right-20" translate>Memory</h4>\n                <div flex>\n                    <md-progress-linear class="md-accent margin-bottom-10" md-mode="determinate" value="65"></md-progress-linear>\n                    <span class="md-caption">(65% <span translate>of monthly limit</span>)</span>\n                </div>\n            </div>\n        </tri-widget>\n    </div>\n</div>\n'),e.put("app/examples/dashboards/social/dashboard-social.tmpl.html", '<div class="dashboard-social-header padding-20 padding-top-100 overlay-gradient-30" layout="row" layout-align="start center" style="background: url(assets/images/backgrounds/material-backgrounds/mb-bg-02.jpg) no-repeat; background-size: cover;">\n    <div class="margin-right-20">\n        <img src="assets/images/avatars/avatar-5.png" alt="girl-avatar" class="make-round" width="100"/>\n    </div>\n    <div class="text-light">\n        <h3 class="font-weight-600 margin-bottom-0 text-light">Christos Varoufakis</h3>\n        <p class="font-weight-300 margin-top-0 margin-bottom-0">Web Designer, Eroticist and Spy</p>\n        <p class="margin-top-0"><md-icon md-font-icon="zmdi zmdi-pin color-inherit"></md-icon> Athens, Greece</p>\n     </div>\n</div>\n<md-tabs md-dynamic-height md-border-bottom class="tabs-tall">\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>Tweets</span>\n            <span class="display-block">11.4K</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column">\n                <tri-widget layout-margin flex="50" flex-xs="100" avatar="assets/images/avatars/avatar-5.png" palette-background="blue:800" title="Christos Varoufakis" subtitle="@christos - 11h" title-position="top" content-layout-align="start center" content-layout="column">\n                    <div linkify="twitter" class="font-weight-300 md-headline font-style-italic line-height-big margin-bottom-20 padding-normal" >\n                        Don\'t miss it! A Material Design Avatar set with 1440 avatars! http://sellfy.com/p/EUcC/ #avatars #materialdesign\n                    </div>\n                    <img src="assets/images/dashboards/tweet.jpg" alt="some image">\n                </tri-widget>\n                <div flex layout="column">\n                    <tri-widget layout-margin flex palette-background="blue:500" avatar="assets/images/avatars/avatar-2.png" title="Kate Smith" subtitle="@christos - 12h" title-position="top">\n                        <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                            Got some awesome news! Triangular 1.1.2 our new #AngularJS admin template is out now!  FAB Speed Dial & FAB Toolbar added. Enjoy!\n                        </div>\n                    </tri-widget>\n                    <tri-widget layout-margin flex palette-background="light-blue:500" avatar="assets/images/avatars/avatar-6.png" title="Jane Smith" subtitle="@christos - 14h" title-position="top">\n                        <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                            Don\'t miss our latest Angular Material Design Admin Template: http://goo.gl/0Yxm1U  #angularJS #material #webdesign\n                        </div>\n                    </tri-widget>\n                    <tri-widget layout-margin flex palette-background="triCyan:500" avatar="assets/images/avatars/avatar-5.png" title="Christos Varoufakis" subtitle="@christos - 16h" title-position="top">\n                        <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                            New Freebie! Material Design Image fonts! In high res png\'s http://goo.gl/j1fWZz  #MaterialDesign #webdesign\n                        </div>\n                    </tri-widget>\n                </div>\n            </div>\n            <div layout="row" layout-xs="column">\n                <tri-widget layout-margin flex palette-background="indigo:500" avatar="assets/images/avatars/avatar-1.png" title="Manos Proistakis" subtitle="@christos - 16h" title-position="top">\n                    <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                        Don\'t miss our latest Angular Material Design Admin Template: http://goo.gl/0Yxm1U  #angularJS #material #webdesign\n                    </div>\n                </tri-widget>\n                <tri-widget layout-margin flex palette-background="deep-purple:500" avatar="assets/images/avatars/avatar-4.png" title="Despoina" subtitle="@christos - 16h" title-position="top">\n                    <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                        New Freebie! Material Design Image fonts! In high res png\'s http://goo.gl/j1fWZz  #MaterialDesign #webdesign\n                    </div>\n                </tri-widget>\n                <tri-widget layout-margin flex palette-background="purple:500" avatar="assets/images/avatars/avatar-1.png" title="Manos Proistakis" subtitle="@christos - 16h" title-position="top">\n                    <div linkify="twitter" class="font-weight-300 md-title font-style-italic line-height-big padding-normal">\n                        Triangular 1.1.2 our new #AngularJS admin template is out now!  FAB Speed Dial & FAB Toolbar added. Enjoy!\n                    </div>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>Following</span>\n            <span class="display-block">3,220</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-26.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-2.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Morris Onions</h4>\n                        <p class="md-caption margin-0">@morris</p>\n                        <p class="md-body-1">Senior Software Test Engineer at Progressive, Indie Game Developer, Cleveland Game Devs member, a cyberpunk before it was cool & a geek Dad.</p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-12.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-6.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Sam Cook</h4>\n                        <p class="md-caption margin-0">@scook</p>\n                        <p class="md-body-1">Intermediary acquisition customer-facing return on investment customer-facing conscientious outsourcing incrementally increasing sales experienced and confident.</p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-30.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-5.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Manos proistakis</h4>\n                        <p class="md-caption margin-0">@proistak</p>\n                        <p class="md-body-1">Recruiting key personnel effective management and mentoring of the team acquiring new clients maximised returns in short time frame. </p>\n                    </div>\n                </tri-widget>\n            </div>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-40.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-6.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Jane Onions</h4>\n                        <p class="md-caption margin-0">@morris</p>\n                        <p class="md-body-1">Entrepreneurial, brand strategy key relationship management cross-functional; handling customer complaints. Preparing financial data going to the cinema dynamic self starter easy to work with. </p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-07.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-4.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">Christine Jackson</h4>\n                        <p class="md-caption margin-0">@scook</p>\n                        <p class="md-body-1">Presenting to senior management streamlined operations outside the box. Incrementally increasing sales customer-centric, commercially minded increased revenue customer-facing.</p>\n                    </div>\n                </tri-widget>\n                <tri-widget class="widget-follower" flex content-layout="column" content-layout-align="center start">\n                    <div class="widget-follower-header">\n                        <img src="assets/images/backgrounds/material-backgrounds/mb-bg-18.jpg" alt="some bg" class="display-block">\n                        <img src="assets/images/avatars/avatar-1.png" class="widget-follower-header-avatar"/>\n                    </div>\n                    <div class="widget-follower-text padding-10">\n                        <h4 class="md-title margin-0">John Langan</h4>\n                        <p class="md-caption margin-0">@proistak</p>\n                        <p class="md-body-1">Recruiting key personnel effective management and mentoring of the team acquiring new clients maximised returns in short time frame. </p>\n                    </div>\n                </tri-widget>\n            </div>\n        </md-tab-body>\n    </md-tab>\n    <md-tab>\n        <md-tab-label layout="column">\n            <span>Favorites</span>\n            <span class="display-block">578</span>\n        </md-tab-label>\n        <md-tab-body>\n            <div layout="row" layout-xs="column" layout-margin>\n                <tri-widget class="flex" flex="70" flex-xs="100" title="Favorites" content-layout="column" content-layout-align="start center">\n                    <md-divider></md-divider>\n                    <md-list>\n                        <md-list-item class="md-2-line" ng-repeat="fave in ::vm.favorites">\n                            <img ng-src="{{::fave.avatar}}" class="md-avatar"/>\n                            <div class="md-list-item-text">\n                                <div layout="row">\n                                    <span flex class="md-subhead text-dark">\n                                        {{::fave.name}}\n                                        <span class="text-gray">@{{::fave.user}}</span>\n                                    </span>\n                                    <span class="md-caption" am-time-ago="fave.date"></span>\n                                </div>\n                                <p linkify="twitter">{{::fave.tweet}}</p>\n                            </div>\n                            <md-divider></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </tri-widget>\n                <div flex layout="column">\n                    <tri-widget flex class="margin-bottom-10" title="Who to follow" content-layout="column" content-layout-align="space-around" palette-background="triCyan:500">\n                        <md-divider></md-divider>\n                        <md-list >\n                            <md-list-item class="md-2-line" ng-repeat="follow in ::vm.whotofollow">\n                                <img ng-src="{{::follow.avatar}}" class="md-avatar"/>\n                                <div class="md-list-item-text">\n                                    <h3>{{::follow.name}}</h3>\n                                    <h4>@{{::follow.user}}</h4>\n                                    <md-icon md-font-icon="zmdi zmdi-account-add" ng-click="doSecondaryAction($event)" class="md-secondary md-hue-3"></md-icon>\n                                </div>\n                                <md-divider ng-hide="::$last"></md-divider>\n                            </md-list-item>\n                        </md-list>\n                    </tri-widget>\n                    <tri-widget flex title="Trends" content-layout="column" content-layout-align="center start" palette-background="triCyan:500">\n                        <md-divider></md-divider>\n                        <md-list>\n                            <md-list-item ng-repeat="trend in ::vm.trends">\n                                <p linkify="twitter">{{::trend}}</p>\n                                <md-divider ng-hide="::$last"></md-divider>\n                            </md-list-item>\n                        </div>\n                    </tri-widget>\n                </div>\n            </div>\n        </md-tab-body>\n    </md-tab>\n</md-tabs>\n\n'),
    e.put("app/examples/dashboards/widgets/widget-load-data-dialog.tmpl.html", '<md-dialog>\n    <md-toolbar md-theme="{{triSkin.elements.toolbar}}">\n        <div class="md-toolbar-tools">\n            <h2 flex>\n                <span translate>Full Data</span>\n            </h2>\n            <md-button class="md-icon-button" aria-label="Settings">\n                <md-icon md-font-icon="zmdi zmdi-close" ng-click="closeDialog()"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content class="md-dialog-content">\n        <table class="table">\n            <thead>\n                <tr>\n                    <th ng-repeat="header in data.header">{{header}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat="referral in data.data">\n                    <td ng-repeat="data in referral">{{data}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </md-dialog-content>\n</md-dialog>'),e.put("app/triangular/components/menu/menu-item-divider.tmpl.html", "<md-divider></md-divider>"),e.put("app/triangular/components/menu/menu-item-dropdown.tmpl.html", '<md-button ng-click="triMenuItem.toggleDropdownMenu()" class="md-raised md-primary side-menu-link">\n    <md-icon ng-if="::(triMenuItem.item.icon !== undefined)" class="side-menu-icon" md-font-icon="{{::triMenuItem.item.icon}}"></md-icon>\n    <span translate>{{::triMenuItem.item.name}}</span>\n    <md-icon class="menu-toggle-icon" md-font-icon="zmdi zmdi-chevron-right" ng-class="{ open: triMenuItem.item.open }"></md-icon>\n</md-button>\n<ul class="drop-down-list" ng-show="triMenuItem.item.open">\n    <li ng-repeat="child in triMenuItem.item.children">\n        <tri-menu-item item="::child"></tri-menu-item>\n    </li>\n</ul>'),e.put("app/triangular/components/menu/menu-item-link.tmpl.html", '<md-button permission permission-only="triMenuItem.item.permission" ng-click="triMenuItem.openLink(triMenuItem.item)" class="md-primary md-raised side-menu-link" ng-class="{ \'md-hue-1\': triMenuItem.item.active }">\n    <md-icon ng-if="::(triMenuItem.item.icon !== undefined)" class="side-menu-icon" md-font-icon="{{::triMenuItem.item.icon}}"></md-icon>\n    <span translate>{{::triMenuItem.item.name}}</span>\n    <small ng-if="triMenuItem.item.badge" theme-background="accent" class="side-menu-badge">{{triMenuItem.item.badge}}</small>\n</md-button>'),e.put("app/triangular/components/footer/footer.tmpl.html", '<md-toolbar id="footer" md-theme="{{triSkin.elements.toolbar}}" ng-controller="FooterController as vm" ng-show="vm.layout.footer">\n    <div class="md-toolbar-tools md-body-1" layout="row" layout-align="space-between center">\n        <h2>{{vm.name}}</h2>\n        <h2 hide-xs ng-bind-html="vm.copyright"></h2>\n        <h2>v{{vm.version}}</h2>\n    </div>\n</md-toolbar>\n'),e.put("app/triangular/components/notifications-panel/notifications-panel.tmpl.html", '<md-content flex layout class="admin-notifications">\n    <md-tabs flex md-stretch-tabs="always" md-selected="vm.currentTab">\n        <md-tab>\n            <md-tab-label>\n                <md-icon md-font-icon="zmdi zmdi-email"></md-icon>\n            </md-tab-label>\n            <md-tab-body>\n                <md-content>\n                    <md-list class="md-dense">\n                        <md-list-item class="md-2-line" ng-repeat="email in ::vm.emails" ng-click="vm.openMail(email)">\n                            <img class="md-avatar" ng-src="{{::email.from.image}}" alt="{{::email.from.name}}">\n                            <div class="md-list-item-text">\n                                <h3>{{::email.from.name}}</h3>\n                                <h4>{{::email.subject}}</h4>\n                                <p class="md-caption" am-time-ago="::email.date"></p>\n                            </div>\n                            <md-divider ng-hide="$last"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </md-content>\n            </md-tab-body>\n        </md-tab>\n        <md-tab>\n            <md-tab-label>\n                <md-icon md-font-icon="fa fa-bell-o"></md-icon>\n            </md-tab-label>\n            <md-tab-body>\n                <md-content>\n                    <md-list>\n                        <div ng-repeat="group in ::vm.notificationGroups">\n                            <md-subheader class="md-primary">{{::group.name}}</md-subheader>\n                            <md-list-item ng-repeat="notification in ::group.notifications" layout="row" layout-align="space-between center">\n                                <md-icon md-font-icon="{{::notification.icon}}" ng-style="{ color: notification.iconColor }"></md-icon>\n                                <p>{{::notification.title}}</p>\n                                <span class="md-caption" am-time-ago="::notification.date"></span>\n                            </md-list-item>\n                        </div>\n                    </md-list>\n                </md-content>\n            </md-tab-body>\n        </md-tab>\n        <md-tab>\n            <md-tab-label>\n                <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n            </md-tab-label>\n            <md-tab-body>\n                <md-content>\n                    <md-list>\n                        <div ng-repeat="group in ::vm.settingsGroups">\n                            <md-subheader class="md-primary"><span translate>{{::group.name}}</span></md-subheader>\n                            <md-list-item ng-repeat="setting in ::group.settings" layout="row" layout-align="space-around center">\n                                <md-icon md-font-icon="{{::setting.icon}}"></md-icon>\n                                <p translate>{{::setting.title}}</p>\n                                <md-switch class="md-secondary" ng-model="setting.enabled"></md-switch>\n                            </md-list-item>\n                        </div>\n                        <div ng-repeat="group in ::vm.statisticsGroups">\n                            <md-subheader class="md-primary"><span translate>{{::group.name}}</span></md-subheader>\n                            <md-list-item ng-repeat="stat in ::group.stats" layout="column" layout-align="space-around start">\n                                <md-progress-linear class="margin-top-20 ng-class="::stat.mdClass" md-mode="determinate" ng-value="::stat.value"></md-progress-linear>\n                                <p translate>{{::stat.title}}</p>\n                            </md-list-item>\n                        </div>\n                    </md-list>\n                </md-content>\n            </md-tab-body>\n        </md-tab>\n    </md-tabs>\n</md-content>\n'),e.put("app/triangular/components/table/table-directive.tmpl.html", '<table class="md-table">\n    <thead>\n        <tr>\n            <th ng-repeat="column in columns" ng-click="sortClick(column.field)" ng-class="headerClass(column.field)">\n                <md-icon ng-show="showSortOrder(column.field, true)" class="zmdi-hc-rotate-90" md-font-icon="zmdi zmdi-arrow-back"></md-icon>\n                <md-icon ng-show="showSortOrder(column.field, false)" class="zmdi-hc-rotate-270" md-font-icon="zmdi zmdi-arrow-back"></md-icon>\n                <span>\n                    {{column.title | triTranslate}}\n                </span>\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr ng-repeat="content in contents | filter:filters | startFrom:page * pageSize | limitTo: pageSize">\n            <td ng-repeat="column in columns" ng-bind-html="cellContents(column, content)" ng-class="column.field + \'-cell\'"></td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan="{{columns.length}}">\n                <div class="md-table-footer" layout="row" layout-align="end center">\n                    <div class="md-table-page-select" layout="row" layout-align="center center">\n                        <span translate>Rows per page:</span>\n                        <md-select ng-model="pageSize" ng-change="refresh(true)">\n                            <md-option value="5">5</md-option>\n                            <md-option value="10">10</md-option>\n                            <md-option value="25">25</md-option>\n                            <md-option value="50">50</md-option>\n                            <md-option value="100">100</md-option>\n                        </md-select>\n                    </div>\n                    <span class="md-table-info">\n                        {{pageStart()}}\n                        -\n                        {{pageEnd()}}\n                        <span translate>of</span>\n                        {{totalItems()}}\n                    </span>\n                    <div class="md-table-page-nav">\n                        <md-button ng-disabled="page == 0" ng-click="page = page - 1" aria-label="{{\'Previous Page\' | triTranslate}}" class="md-primary md-icon-button">\n                            <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n                        </md-button>\n                        <md-button ng-disabled="page == numberOfPages() - 1" ng-click="page = page + 1" aria-label="{{\'Next Page\' | triTranslate}}" class="md-primary md-icon-button">\n                            <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n                        </md-button>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tfoot>\n</table>\n'),e.put("app/triangular/components/toolbars/toolbar.tmpl.html", '<div class="md-toolbar-tools">\n    <md-button class="md-icon-button" ng-if="!vm.hideMenuButton()" ng-click="vm.openSideNav(\'left\')" aria-label="side navigation">\n        <md-icon md-font-icon="zmdi zmdi-menu"></md-icon>\n    </md-button>\n\n    <h2 hide-xs flex>\n        <span ng-repeat="crumb in vm.breadcrumbs.crumbs">\n            <span translate>{{crumb.name}}</span>\n            <md-icon md-font-icon="zmdi zmdi-chevron-right" ng-if="!$last"></md-icon>\n        </span>\n    </h2>\n\n    <md-button class="md-icon-button toolbar-button" ng-click="vm.toggleFullScreen()" aria-label="toggle fullscreen">\n        <md-icon md-font-icon ng-class="vm.fullScreenIcon"></md-icon>\n    </md-button>\n\n    <md-menu ng-show="vm.languages.length > 0">\n        <md-button class="md-icon-button" aria-label="language" ng-click="$mdOpenMenu()" aria-label="change language">\n            <md-icon md-font-icon="zmdi zmdi-globe-alt"></md-icon>\n        </md-button>\n        <md-menu-content width="3">\n            <md-menu-item ng-repeat="language in ::vm.languages">\n                <md-button ng-click="vm.switchLanguage(language.key)" translate="{{::language.name}}" aria-label="{{::language.name}}"></md-button>\n            </md-menu-item>\n        </md-menu-content>\n    </md-menu>\n\n    <md-button class="md-icon-button toolbar-button animated" ng-click="vm.toggleNotificationsTab(0)" aria-label="side navigation">\n        <md-icon md-font-icon="zmdi zmdi-email"></md-icon>\n        <span class="toolbar-button-badge animated" theme-background="accent" ng-class="{ \'toolbar-button-badge-new\' : vm.emailNew }">5</span>\n    </md-button>\n\n    <md-button class="md-icon-button toolbar-button" ng-click="vm.toggleNotificationsTab(1)">\n        <md-icon md-font-icon="fa fa-bell-o"></md-icon>\n        <span class="toolbar-button-badge" theme-background="accent">2</span>\n    </md-button>\n\n    <md-menu>\n        <md-button aria-label="Open user menu" ng-click="$mdOpenMenu()" aria-label="side navigation">\n            <img class="toolbar-user-avatar" src="assets/images/avatars/avatar-5.png">\n            Christos\n        </md-button>\n        <md-menu-content width="4">\n            <md-menu-item>\n                <md-button ng-click="vm.toggleNotificationsTab(2)" aria-label="side navigation">\n                    <md-icon md-font-icon="zmdi zmdi-settings"></md-icon>\n                    <span translate="Settings"></span>\n                </md-button>\n            </md-menu-item>\n            <md-menu-item>\n                <md-button href="#/profile" aria-label="side navigation">\n                    <md-icon md-font-icon="zmdi zmdi-account"></md-icon>\n                    <span translate="Profile"></span>\n                </md-button>\n            </md-menu-item>\n            <md-menu-divider></md-menu-divider>\n            <md-menu-item>\n                <md-button href="#/login" aria-label="side navigation">\n                    <md-icon md-font-icon="zmdi zmdi-sign-in"></md-icon>\n                    <span translate="Logout"></span>\n                </md-button>\n            </md-menu-item>\n        </md-menu-content>\n    </md-menu>\n</div>\n'),e.put("app/triangular/components/widget/widget.tmpl.html", '<div class="widget md-whiteframe-z2" ng-class="::{\'widget-overlay-title\': vm.overlayTitle}" flex layout="{{vm.widgetLayout}}">\n\n    <div class="widget-title" ng-if="::(vm.title || vm.subtitle)" layout="row" layout-padding layout-align="start center" flex-order="{{vm.titleOrder}}">\n        <div ng-if="::vm.avatar">\n            <img ng-src="{{::vm.avatar}}" class="widget-avatar"/>\n        </div>\n        <div flex layout="column">\n            <h3 class="md-subhead" ng-if="::vm.title" translate>{{::vm.title}}</h3>\n            <p class="md-body-1" ng-if="::vm.subtitle" translate>{{::vm.subtitle}}</p>\n        </div>\n        <md-menu ng-if="::vm.menu">\n            <md-button class="widget-button md-icon-button" ng-click="$mdOpenMenu()" aria-label="open menu">\n                <md-icon md-font-icon="{{::vm.menu.icon}}"></md-icon>\n            </md-button>\n            <md-menu-content>\n                <md-menu-item ng-repeat="item in ::vm.menu.items">\n                    <md-button ng-click="item.click($event)">\n                        <md-icon ng-if="::item.icon" md-font-icon="{{::item.icon}}"></md-icon>\n                        <span translate>{{::item.title}}</span>\n                    </md-button>\n                </md-menu-item>\n            </md-menu-content>\n        </md-menu>\n    </div>\n\n    <div class="widget-content" layout="{{vm.contentLayout}}" layout-align="{{vm.contentLayoutAlign}}" ng-class="{\'layout-padding\': vm.contentPadding}" ng-transclude flex-order="{{vm.contentOrder}}"></div>\n\n    <div class="widget-loading ng-hide" ng-show="vm.loading" layout layout-fill layout-align="center center">\n        <div class="widget-loading-inner" ng-show="vm.loading">\n            <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n        </div>\n    </div>\n\n</div>'),e.put("app/triangular/layouts/default/default-content.tmpl.html", '<div id="admin-panel-content-view" class="{{layout.innerContentClass}}" flex ui-view></div>'),e.put("app/triangular/layouts/default/default-no-scroll.tmpl.html", '<div layout="row" class="full-height">\n    <!-- left sidebar -->\n\n    <md-sidenav class="admin-sidebar-left md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="layout.sideMenuSize !== \'hidden\' && $mdMedia(\'gt-sm\')" ui-view="sidebarLeft" ng-class="{ \'admin-sidebar-collapsed\': layout.sideMenuSize == \'icon\' }" ng-mouseover="layoutController.activateHover()" ng-mouseleave="layoutController.removeHover()"></md-sidenav>\n\n    <!-- main content -->\n    <div id="admin-panel" layout="column" flex>\n        <!-- loading animation -->\n        <tri-loader></tri-loader>\n\n        <!-- top toolbar -->\n        <md-toolbar class="admin-toolbar" md-theme="{{triSkin.elements.toolbar}}" ui-view="toolbar" ng-class="[layout.toolbarSize,layout.toolbarClass]"></md-toolbar>\n\n        <!-- scrollable content -->\n        <div ui-view="content" layout="column" flex class="overflow-hidden"></div>\n\n        <div ui-view="belowContent"></div>\n    </div>\n\n    <!-- right sidebar -->\n    <md-sidenav layout layout-fill class="md-sidenav-right md-whiteframe-z2" md-component-id="notifications" ui-view="sidebarRight"></md-sidenav>\n</div>'),e.put("app/triangular/layouts/default/default.tmpl.html", '<div layout="row" class="full-height">\n    <!-- left sidebar -->\n\n    <md-sidenav class="admin-sidebar-left md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="layout.sideMenuSize !== \'hidden\' && $mdMedia(\'gt-sm\')" ui-view="sidebarLeft" ng-class="{ \'admin-sidebar-collapsed\': layout.sideMenuSize == \'icon\' }" ng-mouseover="layoutController.activateHover()" ng-mouseleave="layoutController.removeHover()"></md-sidenav>\n\n    <!-- main content -->\n    <div id="admin-panel" layout="column" flex>\n        <!-- loading animation -->\n        <tri-loader></tri-loader>\n\n        <!-- top toolbar -->\n        <md-toolbar class="admin-toolbar" ng-if="layout.showToolbar" md-theme="{{triSkin.elements.toolbar}}" ui-view="toolbar" ng-class="[layout.toolbarSize,layout.toolbarClass]"></md-toolbar>\n\n        <!-- scrollable content -->\n        <md-content ng-class="layout.contentClass" flex tri-default-content ui-view="content"></md-content>\n\n        <div ui-view="belowContent"></div>\n    </div>\n\n    <!-- right sidebar -->\n    <md-sidenav layout layout-fill class="md-sidenav-right md-whiteframe-z2" md-component-id="notifications" ui-view="sidebarRight"></md-sidenav>\n</div>\n'),e.put("app/examples/calendar/layouts/toolbar/toolbar.tmpl.html", '<div class="md-toolbar-tools">\n    <md-button class="md-icon-button" hide-gt-md ng-click="vm.openSideNav(\'left\')" aria-label="side navigation">\n        <md-icon md-font-icon="zmdi zmdi-menu"></md-icon>\n    </md-button>\n    <h2 flex>\n        <span ng-repeat="crumb in vm.breadcrumbs.crumbs">\n            <span translate>{{crumb.name}}</span>\n            <md-icon md-font-icon="zmdi zmdi-chevron-right" ng-if="!$last">\n        </span>\n    </h2>\n\n    <div class="widget-buttons">\n        <md-button class="widget-button md-icon-button" ng-click="vm.changeMonth(\'prev\')" aria-label="previous month">\n            <md-icon md-font-icon="zmdi zmdi-chevron-left"></md-icon>\n        </md-button>\n        <md-button hide show-gt-lg class="widget-button md-icon-button" ng-click="vm.changeMonth(\'today\')" aria-label="today">\n            <md-icon md-font-icon="zmdi zmdi-calendar-alt"></md-icon>\n        </md-button>\n        <md-button class="widget-button md-icon-button" ng-click="vm.changeMonth(\'next\')" aria-label="next month">\n            <md-icon md-font-icon="zmdi zmdi-chevron-right"></md-icon>\n        </md-button>\n    </div>\n\n    <md-menu>\n        <md-button class="md-icon-button" aria-label="{{\'Change View\' | triTranslate}}" ng-click="$mdOpenMenu()">\n            <md-icon md-font-icon="{{vm.currentView.icon}}" ng-class="vm.currentView.icon"></md-icon>\n        </md-button>\n        <md-menu-content width="2">\n            <md-menu-item ng-repeat="view in vm.views">\n                <md-button ng-click="vm.changeView(view)" translate="{{::view.name}}" aria-label="{{::view.name}}"></md-button>\n            </md-menu-item>\n        </md-menu-content>\n    </md-menu>\n</div>\n\n'),e.put("app/examples/email/layout/toolbar/toolbar.tmpl.html", '<div class="md-toolbar-tools">\n    <md-button class="md-icon-button" ng-if="!vm.hideMenuButton()" ng-click="vm.openSideNav(\'left\')" aria-label="side navigation">\n        <md-icon md-font-icon="zmdi zmdi-menu"></md-icon>\n    </md-button>\n\n    <h2 hide-xs flex>\n        <span ng-repeat="crumb in vm.breadcrumbs.crumbs">\n            <span translate>{{crumb.name}}</span>\n            <md-icon md-font-icon="zmdi zmdi-chevron-right" ng-if="!$last">\n        </span>\n    </h2>\n\n    <md-button class="md-icon-button" ng-click="vm.toggleSearch()" aria-label="{{\'Toggle Menu\' | triTranslate}}">\n        <md-icon md-font-icon="zmdi zmdi-search"></md-icon>\n    </md-button>\n\n    <input class="toolbar-search" ng-show="vm.showSearch" ng-model="emailSearch" ng-change="vm.filterEmailList(emailSearch)" type="text" placeholder="{{\'Search\' | triTranslate}}">\n\n    <md-button class="md-icon-button" ng-repeat="menu in ::vm.toolbarMenu" ui-sref="{{::menu.state}}" aria-label="{{::menu.name}}">\n        <md-icon md-font-icon="{{::menu.icon}}"></md-icon>\n        <md-tooltip>{{::menu.name}}</md-tooltip>\n    </md-button>\n</div>\n\n'),e.put("app/triangular/layouts/states/triangular/triangular.tmpl.html", '<!-- left sidebar -->\n<md-sidenav md-colors="{ background: \'primary\' }" class="triangular-sidenav-left md-sidenav-left md-whiteframe-z2" ng-if="layout.sideMenuSize !== \'off\'" md-component-id="left" md-is-locked-open="layout.sideMenuSize !== \'hidden\' && $mdMedia(\'gt-sm\')" ui-view="sidebarLeft" ng-class="{ \'admin-sidebar-collapsed\': layout.sideMenuSize == \'icon\' }" ng-mouseover="stateController.activateHover()" ng-mouseleave="stateController.removeHover()"></md-sidenav>\n\n<!-- main content -->\n<div class="triangular-toolbar-and-content" layout="column" flex>\n    <!-- loading animation -->\n    <!-- <tri-loader></tri-loader> -->\n\n    <!-- top toolbar -->\n    <md-toolbar class="triangular-toolbar md-whiteframe-z1" ng-if="layout.showToolbar" ng-class="[layout.toolbarSize,layout.toolbarClass]" md-theme="{{triSkin.elements.toolbar}}" ui-view="toolbar"></md-toolbar>\n\n    <!-- scrollable content -->\n    <md-content class="triangular-content" ng-class="layout.contentClass" flex ui-view></md-content>\n\n    <div ui-view="belowContent"></div>\n\n    <div class="triangular-loader" ng-show="stateController.showLoader" layout="column" ui-view="loader"></div>\n</div>\n\n<!-- right sidebar -->\n<md-sidenav layout layout-fill class="triangular-sidenav-right md-sidenav-right md-whiteframe-z2" md-component-id="notifications" ui-view="sidebarRight"></md-sidenav>\n')
}]);