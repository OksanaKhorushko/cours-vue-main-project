<template>
    <div @click="onBtnClick" class="btn">ADD NEW +</div>
</template>

<script>
export default {
    name: 'AddButton',
    methods: {
        onBtnClick() {
          this.$emit('show');
        }
    }
}
</script>

<style scoped lang="scss">
    .btn {
       background-color: cadetblue;
       border: 1px solid cadetblue;
       border-radius: 3px;
       color: white;
       padding: 7px 25px;
       display: inline-block;
       cursor: pointer;
       transition: .3s;

       &:hover {
          background-color: transparent;
          color: cadetblue;
       }
    }
</style>
