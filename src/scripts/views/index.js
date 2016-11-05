var indexTpl=require('./index.string');
import commonUtil from '../utils/commonUtil';
commonUtil.render(indexTpl);

//引入vue
 var Vue=require('../libs/vue.js');
 var VueResource=require('../libs/vue-resource.js');
// console.log(Vue);
Vue.use(VueResource);

var vm=new Vue({//this==vm
   el:'#app',
   data:{
   },
   methods:{

   },
   ready(){
      console.log(this.$http);
   }
});







































//end
