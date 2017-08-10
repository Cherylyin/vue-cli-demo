<template>
     <div v-if="notphone">
     <div class="im-header ui grid two column stackable" >
               <div class="column">
                    <a href="#" class="ui image" ><img src="static/image/logo.png" /></a>
                    <span class="im-title">网络监测系统</span>
               </div>
              <div class="column im-user-info">
                  <span class="im-name">{{username}}</span>
                  <img src="static/image/temp.png" class="im-user-portrait"/>

              </div>

    </div>
  </div>

  <div v-else>
       <div class="im-header-phone" >
               <span class="im-title-phone">网络监测系统</span>
               <a class="launch icon item" id="menu-icon-id">
                <i class="content icon"></i>
              </a>
      </div>
  </div>
</template>
<script>
   export default{
       data(){
           return {
                username:'admin',
                notphone:''

           }
       },
       created(){
       
               if(window.screen.width < 767){
                   this.notphone = false;
                  
                }else{
                    this.notphone  = true;
                    
                }
       }
      
   }
</script>