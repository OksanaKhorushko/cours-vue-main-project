<template>
<Form
  v-if="isVisible"
  :initialAmount="amount"
  :initialDate="date"
  :initialDescription="description"
  @formSubmit="saveData"
/>
</template>

<script>
import Form from './Form.vue';

export default {
  name: 'ModalAddCoast',
  data() {
    return {
      isVisible: true,
      date: (new Date()).toLocaleDateString(),
      amount: this.$route.query.value || 0,
      description: this.$route.params.category || 'Other',
    };
  },
  components: {
    Form
  },
  methods: {
    saveData(data) {
      this.$store.commit('saveCoast', {
        id: Math.round(Math.random() * 100),
        date: data.date,
        category: data.description,
        value: data.amount
      });
      this.$router.back();
    }
  },
  created() {
    if (this.$route.query.value && this.$route.params.category) {
      this.isVisible = false;
      this.saveData({
        date: this.date,
        description: this.description,
        amount: this.amount,
      });
    }
  },
}
</script>

<style lang="scss"></style>
