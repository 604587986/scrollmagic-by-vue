import Vue from 'vue'
import Router from 'vue-router'

import section_wipes_manual from './components/section_wipes_manual'
import svg_drawing from './components/svg_drawing'

Vue.use(Router)

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        };
    },
    routes: [
        {
            path: '/',
            redirect:'/section_wipes_manual'
        },
        {
            path: '/section_wipes_manual',
            component: section_wipes_manual
        },
        {
            path: '/svg_drawing',
            component: svg_drawing
        },
    ]
})