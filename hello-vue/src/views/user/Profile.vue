<template>
    <div>
      个人信息
      {{$route.params.id}}
    </div>
</template>

<script>
// 路由中的钩子函数
   export default {
    props: ['id'],
    name: "UserProfile"
  }
</script>

<style scoped>

</style>