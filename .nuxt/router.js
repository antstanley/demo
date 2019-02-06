import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1e482bd6 = () => interopDefault(import('../src/website/pages/callback.vue' /* webpackChunkName: "pages/callback" */))
const _b75b2db0 = () => interopDefault(import('../src/website/pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _74db0cde = () => interopDefault(import('../src/website/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _11b30c0c = () => interopDefault(import('../src/website/pages/_section/index.vue' /* webpackChunkName: "pages/_section/index" */))
const _f8480a78 = () => interopDefault(import('../src/website/pages/_section/_doc/index.vue' /* webpackChunkName: "pages/_section/_doc/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/callback",
      component: _1e482bd6,
      name: "callback"
    }, {
      path: "/profile",
      component: _b75b2db0,
      name: "profile"
    }, {
      path: "/",
      component: _74db0cde,
      name: "index"
    }, {
      path: "/:section",
      component: _11b30c0c,
      name: "section"
    }, {
      path: "/:section/:doc",
      component: _f8480a78,
      name: "section-doc"
    }],

    fallback: false
  })
}
