import Vue from 'vue'
import {
    //搜索组件
    Search,
    //图标
    Icon,
    //tab标签
    Tab,
    Tabs,
    //轮播图
    Swipe,
    SwipeItem,
    //footer
    Tabbar,
    TabbarItem
} from 'vant';



export default () => {
    Vue.use(Search);
    Vue.use(Icon);
    Vue.use(Tab).use(Tabs);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Tabbar).use(TabbarItem);
}