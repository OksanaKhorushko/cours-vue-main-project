<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddButton @show="popupToggly"></AddButton>
    <Form @show="popupToggly" @add="addCost" v-if="isPopupActive"></Form>
    <List :list="costsList"></List>
  </div>
</template>

<script>
import AddButton from './components/AddButton.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: { AddButton, Form, List },
  data() {
    return {
      costsList: [],
      isPopupActive: false
    }
  },
  methods: {
    fetchData() {
      return [
        {id: 1, date: '12.09.2022', category: 'food', value: 1570},
        {id: 2, date: '14.09.2022', category: 'transport', value: 200},
        {id: 3, date: '17.09.2022', category: 'healthcare', value: 700}
      ]
    },
    addCost(cost) {
      this.costsList.push(cost);
    },
    popupToggly() {
      this.isPopupActive = !this.isPopupActive
    }
  },
  created() {
    this.costsList = this.fetchData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
