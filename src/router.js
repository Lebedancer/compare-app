import VueRouter from 'vue-router'
import rule from './components/Rule/Rule'
import RuleList from './components/RuleList'

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: rule },
        { path: '/list', component: RuleList },
    ]
})