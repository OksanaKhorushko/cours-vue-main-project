<template>
<div class="costs-list">
  <div v-for="cost in list" :key="cost.id" class="costs-list__item">
    <span>{{ cost.id }}</span>
    <span>{{ cost.date }}</span>
    <span>{{ cost.category }}</span>
    <span>{{ cost.value }}</span>
    <div class="context-menu">
      <button class="context-menu__btn" @click="$contextMenu.show(cost.id)">&#10247;</button>
      <ContextMenu :id="cost.id" />
    </div>
  </div>
</div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';

export default {
  name: 'List',
  props: {
    list: Array,
  },
  components: {
    ContextMenu,
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

    span {
      flex-grow: 1;

      &:first-child {
        max-width: 30px;
      }
    }
  }
}
</style>
