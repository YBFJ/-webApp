// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 此为项目的入口文件
import Vue from 'vue';
import App from './App';
import router from './router';
import fastClick from 'fastclick';
import './assets/styles/reset.css';
// 使得所有设备上显示的是一样的
import './assets/styles/border.css';
// 使2k屏幕上正常显示，因为像素和我们定义的像素不一样了

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
