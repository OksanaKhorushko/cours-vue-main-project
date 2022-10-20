<template>
<div class="form">
  <span class="close" @click="$router.back()">X</span>

  <v-form ref="form" v-model="valid" lazy-validation class="form-container">
    <v-select v-model="description"
      :items="descriptionList"
      :rules="[v => !!v || 'Description is required']" label="Payment description" required />
    <v-text-field v-model="amount" label="Payment amount" required />
    <v-text-field v-model="date" label="Payment date" required />
    <v-btn @click="onClick" color="teal my-5" :to="href"  dark>
      ADD +
    </v-btn>
  </v-form>
</div>
</template>

<script>
import config from '../config';

export default {
  name: 'Form',
  data() {
    return {
      description: this.$props.initialDescription,
      descriptionList: config.descriptionList,
      amount: this.$props.initialAmount,
      date: this.$props.initialDate,
    }
  },
  props: {
    initialDate: String,
    initialDescription: String,
    initialAmount: Number,
  },
  methods: {
    onClick() {
      this.$emit('formSubmit', {
        description: this.description,
        amount: this.amount,
        date: this.date
      });
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.close {
  position: absolute;
  right: 15px;
  top: 15px;
  color: #fff;
  cursor: pointer;
}

.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;

  &-container {
    width: 290px;
    padding: 30px 15px;
    background-color: white;
    border: 1px solid cadetblue;
    border-radius: 9px;
  }

  &-addBtn {
    margin-top: 20px;
    background-color: cadetblue;
    border: 1px solid cadetblue;
    border-radius: 3px;
    color: white;
    padding: 7px 25px;
    display: block;
    cursor: pointer;
    transition: .3s;

    &:hover {
      background-color: transparent;
      color: cadetblue;
    }
  }
}
</style>
