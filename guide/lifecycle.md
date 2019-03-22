# 生命周期

除了自有的生命周期以外，weiui还支持的生命周期有：页面挂载、页面恢复、页面暂停。

```vue
<template>
	<div @lifecycle="lifecycle">
		...
	</div>
</template>

<script>

    export default {
	    beforeCreate: function (){
	        console.log('beforeCreate');
	    },
	    created: function () {
	        console.log('created');
	    },
	    beforeMount: function () {
	        console.log('beforeMount');
	    },
	    mounted: function () {
	        console.log('mounted');
	    },
	    beforeUpdate: function () {
	        console.log('beforeUpdate');
	    },
	    updated: function () {
	        console.log('updated');
	    },
	    beforeDestroy: function () {
	        console.log('beforeDestroy');
	    },
	    destroyed: function () {
	        console.log('destroyed');
	    },
	    methods: {
	        //生命周期
	        lifecycle(e){
	            console.log(e.status);
	            if (e.status == 'ready')
	            {
                    console.log('页面挂载(初始化)');
	            }
	            else if (e.status == 'resume') 
	            {
                    console.log('页面激活(恢复)');
	            }
	            else if (e.status == 'pause') 
	            {
                    console.log('页面失活(暂停)');
                }
	        }
	    }
  }
</script>
```