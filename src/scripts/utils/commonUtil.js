var commonUtil={
   render(str){
      let container=document.querySelector('#football-container');
      container.innerHTML=str+container.innerHTML;
   }
}

export default commonUtil;
