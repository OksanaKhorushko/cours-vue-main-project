

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddButton @show="popupToggly"></AddButton>
    <Form @show="popupToggly" v-if="isPopupActive"></Form>
    <List :list="$store.state.coastList"></List>
    <Pagination />
  </div>
</template>

<script>
import AddButton from './components/AddButton.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'
import Pagination from './components/Pagination.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: { AddButton, Form, List, Pagination },
  data() {
    return {
      isPopupActive: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData',
    ]),
    popupToggly() {
      this.isPopupActive = !this.isPopupActive
    }
  },
  mounted () {
    this.fetchData(1);
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
