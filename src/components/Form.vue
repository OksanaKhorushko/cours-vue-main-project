<template>
    <div class="form" v-if="isVisible">
        <span class="close" @click="$router.back()">X</span>
        <div class="container">
            <input v-model="description" placeholder="Payment description">
            <input v-model="amount" placeholder="Payment amount">
            <input v-model="date" placeholder="Payment date">
            <div @click="saveData" class="form-addBtn">ADD +</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                isVisible: true,
                date: (new Date()).toLocaleDateString(),
                amount: this.$route.query.value || '',
                description: this.$route.params.category || '',
            };
        },
        methods: {
            saveData() {
                this.$store.commit('saveCoast', {
                    id: Math.round(Math.random() * 10000),
                    date: this.date,
                    category: this.description,
                    value: this.amount
                });
                this.$router.back();
            }
        },
        created() {
            if (this.$route.query.value && this.$route.params.category) {
                this.isVisible = false;
                this.saveData();
            }
        },
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
