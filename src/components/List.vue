<template>
    <div class="costs-list">
        <div v-for="cost in list" :key="cost.id" class="costs-list__item">
            <span v-for="(item, i) in cost" :key="i">{{ item }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
            list: Array
        }
    }
</script>

<style lang="scss">
    .costs-list {
        width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        &__item {
            height: 60px;
            border-bottom: 1px solid #444;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
