<template>
	<ul>
		<li v-for="one in list" :class="one"></li>
	</ul>
</template>


<style>
	html{
		font-size:100px;
	}
	body{
		font-size:20px;
	}
</style>
<style scoped>
    @import 'sassHelper/vars';
    @import 'sassHelper/mixin';

    ul{
    	width: 1000px;
    	margin:50px auto;
    	list-style-type: none;

    	li{
    		@include border;
    		width: 100px;
    		height: 100px;
    		background-position: center center !important;
    		float: left;
    		margin-right: 20px;
    		margin-bottom: 20px;
    		cursor:pointer;

				@each $icon in weixin,qq,jd,baidu,weibo,close,clear,search,setting,eye-open,eye-closed,location,more,more-cur,pencil,unselected,selected,name,xinche,xinche-cur,telephone,authcode,my,my-cur,ershouche,ershouche-cur,error,mail,loan,loan-cur,triangle,choose,history,back,arrow-down,arrow-right,star,star-cur,triangle-down,triangle-up,call,favo,favo-cur,phone,location-point,down,add,feedback,money-bag,paper,success,no-car,picture,placeholder,{
					&.#{$icon}{
						@include icons($icon, false);

						@if $icon == no-car{
							background-size:contain !important;
						}
						@if $icon == picture{
							background-color: #f0f0f0 !important;
						}
						@if $icon == placeholder{
							background-size:contain !important;
						}
					}
				}
    	}
    }
</style>

<script>
  export default{
      data(){
          return {
          	list: ['weixin', 'qq', 'jd', 'baidu', 'weibo', 'close', 'clear','search','setting','eye-open','eye-closed','location','more','more-cur','pencil','unselected','selected','name','xinche','xinche-cur','telephone','authcode','my','my-cur','ershouche','ershouche-cur','error','mail','loan','loan-cur','triangle','choose','history','back','arrow-down','arrow-right','star','star-cur','triangle-down','triangle-up','call','favo','favo-cur','phone','location-point','down','add','feedback','money-bag','paper','success','no-car','picture','placeholder']
          }
      }
  }
</script>
