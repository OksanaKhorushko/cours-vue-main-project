<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="main">
          <div class="predefined-links">
            <router-link class="link" to="/add/payment/Food?value=200">Добавить платеж категории Food с ценой 200</router-link>
            <router-link class="link" to="/add/payment/Transport?value=50">Добавить платеж категории Transport с ценой 50</router-link>
            <router-link class="link" to="/add/payment/Housing?value=2000">Категория Housing с ценой 2000</router-link>
            <router-link class="link" to="/add/payment/Housing">Категория Housing без цены</router-link>
          </div>
          <div class="text-h5 text-sm-h3">My personal costs</div>
          <AddButton :href="'/add/payment'"></AddButton>
          <List :list="$store.state.coastList"></List>
          <Pagination />
        </div>
      </v-col>
      <v-col>
        <Diagram />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddButton from '../components/AddButton.vue'
import Form from '../components/Form.vue'
import List from '../components/List.vue'
import Pagination from '../components/Pagination.vue'
import {
  mapActions
} from 'vuex'
import Diagram from '@/components/Diagram.vue'

export default {
  name: 'MainPage',
  components: {
    AddButton,
    Form,
    List,
    Pagination,
    Diagram,
},
  methods: {
    ...mapActions([
      'fetchData',
    ]),
  },
  mounted() {
    this.fetchData(1);
  }
}
</script>

<style lang="scss">
.predefined-links {
  padding: 30px;
  border: 1px solid cadetblue;
  border-radius: 2px;
  margin: 0 auto 30px;
  max-width: 600px;

  .link {
    display: block;
    color: #000;
    text-decoration: underline;
    margin-bottom: 10px;
    transition: color .3s;

    &:hover {
      color: cadetblue;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
