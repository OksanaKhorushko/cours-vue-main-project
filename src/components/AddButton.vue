<template>
    <div>
        <v-btn color="teal my-5" :to="href"  dark>
            ADD NEW COST <v-icon>mdi-plus</v-icon>
        </v-btn>
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
