// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 此为项目的入口文件
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require swiper styles
import 'swiper/dist/css/swiper.css';
import App from './App';
import router from './router';
import fastClick from 'fastclick';
import 'styles/reset.css';
// 使得所有设备上显示的是一样的
import 'styles/border.css';
// 使2k屏幕上正常显示，因为像素和我们定义的像素不一样了
import 'styles/iconfont.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
