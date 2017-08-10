<template>
    <div class="im-footer">
                   Copyright©2005-<span>{{year}}</span> 360.cn 版权所有 360网络安全响应中心
    </div>
</template>

<script>
      export default{
          data(){
               var date = new Date();
               return{
                  year:date.getFullYear()
               }
          }

      }
</script>