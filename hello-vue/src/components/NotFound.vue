<template>
    <div>
      页面不存在，请重试！
    </div>
</template>

<script>
    export default {
        props: ['id'],
        name: "NotFount",
        beforeRouteEnter: (to, from, next) => {
            console.log("404");
            next("/login");
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("login");
            next();
        }



    }
</script>

<style scoped>

</style>