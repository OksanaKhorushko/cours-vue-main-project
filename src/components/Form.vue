<template>
<div class="form">
  <span class="close" @click="$router.back()">X</span>
  <div class="container">
    <input v-model="description" placeholder="Payment description">
    <input v-model="amount" placeholder="Payment amount">
    <input v-model="date" placeholder="Payment date">
    <div @click="onClick" class="form-addBtn">ADD +</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      description: this.$props.initialDescription,
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

.container {
  width: 290px;
  height: 300px;
  padding: 30px 15px;
  background-color: white;
  border: 1px solid cadetblue;
  border-radius: 9px;
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

  input {
    padding: 10px;
    margin: 10px auto;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #ccc;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #aaa;
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
