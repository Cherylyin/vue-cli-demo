<template>
    <div class="im-nav-bar">
                        <div class="ui vertical menu inverted">
                              
                              <div class="item" v-for="nav in menuArray">
                                     <div class="menu ">
                                           <router-link :to="nav.view" class="item"><i v-bind:class="nav.icon"></i> {{nav.title}}</router-link>
                                           <!--<a v-bind:href="nav.view" class="item"><i v-bind:class="nav.icon"></i> {{nav.title}}</a>-->
                                     </div>
                              </div>
                             
                        </div>

                    </div>
</template>

<script>
   import menudata from "./menudata"

   export default{
           data(){
               return{
                  menuArray:menudata
               } 
           }

   }
</script>