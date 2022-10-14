<template>
<Form
  v-if="coast"
  :initialAmount="coast.amount"
  :initialDate="coast.date"
  :initialDescription="coast.description"
  @formSubmit="saveData"
/>
</template>


<script>
import Form from './Form.vue';

export default {
  name: 'ModalEditCoast',
  data() {
    const currentCoast = this.$store.getters.getCoastById(this.$route.params.id);

    return {
      coast: currentCoast ? {
        date: currentCoast.date,
        amount: currentCoast.value,
        description: currentCoast.category,
      } : null,
    };
  },
  components: {
    Form
  },
  methods: {
    saveData(data) {
      this.$store.commit('editCoast', {
        id: +this.$route.params.id,
        date: data.date,
        category: data.description,
        value: data.amount
      });
      this.$router.back();
    }
  },
  mounted() {
    if (!this.coast) {
      this.$router.replace('/');
    }
  }
}
</script>


<style lang="scss">
</style>
