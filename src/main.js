import  Vue from "vue"
import VueRouter from "vue-router"

import headerComp from "./components/base/header/header.vue"
import menuComp from "./components/base/menu/menu.vue"
import footerComp from "./components/base/footer/footer.vue"

import routes from "./routes"

Vue.use(VueRouter);
Vue.config.debug = true;
//Vue.config.delimiters = ['${', '}']; // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;


var router = new VueRouter({
  routes:routes
 });



var app = new Vue({
  el:"#wrapper",
  components:{
     "myheader":headerComp,
     "mymenu":menuComp,
     "myfooter":footerComp
  },
  router:router
});



