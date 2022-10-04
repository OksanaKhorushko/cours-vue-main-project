<template>
    <div>
        <router-link :to="href" class="btn">ADD NEW +</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'AddButton',
    props: {
        href: String,
    },
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
       text-decoration: none;
       display: inline-block;
       cursor: pointer;
       transition: .3s;

       &:hover {
          background-color: transparent;
          color: cadetblue;
       }
    }
</style>
