
<template>
  <div class="pagination">
    <v-pagination
    color="teal"
      v-if="this.$store.state.paginationLength > 1"
      v-model="activePage"
      :length="this.$store.state.paginationLength"
      circle
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Pagination',
  data() {
    return {
      activePage: 1,
    }
  },
  methods: {
    ...mapActions([
      'fetchData',
    ]),
    onPaginationClick(page) {
      this.activePage = page;
      this.fetchData(page)
    },
  },
  beforeUpdate() {
    this.onPaginationClick(this.activePage);
  },
  mounted () {
    this.fetchData(1);
  }
}
</script>

<style lang="scss">
  .pagination {
    ul {
      display: flex;
      padding: 0;
      justify-content: center;
    }

    li {
      list-style: none;
      margin: 5px;
    }

    button {
      border: 1px solid cadetblue;
      background-color: transparent;
      color: cadetblue;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 3px;
      transition: all .3s;

      &.active,
      &:hover {
          background-color: cadetblue;
          color: #fff;
      }
    }
  }
</style>
