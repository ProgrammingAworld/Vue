import "../styles/app.scss";

var indexTpl=require('./views.index.string');

require('./views/index.js');

var Vue=require('./libs/vue.js');

new Vue({
   el:'#football-container',
   data:{
      html:indexTpl
   }
})
