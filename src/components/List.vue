<template>
  <v-container>
    <v-row class="costs-list__item">
      <v-col :cols="1">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <v-col :cols="2">Menu</v-col>
    </v-row>
    <v-row v-for="cost in list" :key="cost.id" class="costs-list__item">
      <v-col :cols="1">{{ cost.id }}</v-col>
      <v-col :cols="3">{{ cost.date }}</v-col>
      <v-col :cols="4">{{ cost.category }}</v-col>
      <v-col :cols="2">{{ cost.value }}</v-col>
      <v-col :cols="2">
        <v-btn class="context-menu__btn" @click="$contextMenu.show(cost.id)">&#10247;</v-btn>
        <ContextMenu :id="cost.id" />
      </v-col>
    </v-row>
  </v-container>
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

  &__item {
    height: 60px;
    border-bottom: 1px solid #444;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
