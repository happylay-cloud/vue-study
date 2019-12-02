<template>
    <div>
      用户列表
      {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        props: ["id"],
        name: "List",
        beforeRouteEnter: (to, from, next) => {
        console.log("准备进入个人信息页");
        // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
        next(vm => {
            vm.getData();
        });
        },
        beforeRouteLeave: (to, from, next) => {
        console.log("准备离开个人信息页");
        next();
        },
        // 异步请求
        methods: {
            getData: function () {
                this.axios({
                    type: 'get',
                    // idea中打开
                    url: 'http://localhost:8080/static/data.json'
                }).then(response=> {
                console.log(response);
                }).catch(error=> {
                console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>