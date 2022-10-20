<template>
<transition name="fade">
  <div class="context-menu__wrapper" v-if="shownId === id">
    <div class="context-menu__overlay" @click="$contextMenu.hide()"></div>
    <ul class="context-menu__list">
      <li class="context-menu__list-item">
        <button @click="onEditClick" class="context-menu__list-item-btn">Редактировать</button>
      </li>
      <li class="context-menu__list-item">
        <button class="context-menu__list-item-btn" @click="deleteCoast(id)">Удалить</button>
      </li>
    </ul>
  </div>
</transition>
</template>

<script>
import {
  mapMutations
} from 'vuex';

export default {
  data() {
    return {
      shownId: null,
    };
  },
  props: {
    id: Number,
  },
  methods: {
    ...mapMutations([
      'deleteCoast',
    ]),
    onEditClick() {
      this.$contextMenu.hide();
      this.$router.push(`/edit/payment/${this.id}`);
    },
    onShow(id) {
      this.shownId = id;
    },
    onHide() {
      this.shownId = null;
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on('shown', this.onShow);
    this.$contextMenu.EventBus.$on('hide', this.onHide);
  }
}
</script>

<style lang="scss">
.context-menu {

  &__wrapper {
    position: relative;
  }

  &__overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000, .3);
    z-index: 1;
  }

  &__btn {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: transparent;
    box-shadow: none;
    width: 0;

    &:hover {
      color: cadetblue;
    }
  }

  &__list {
    position: absolute;
    top: 10px;
    right: -12px;
    list-style: none;
    padding: 0 !important;
    margin: 0;
    background: #fff;
    z-index: 1;
    box-shadow: 0 0 20px #999;

    &::after {
      content: '';
      position: absolute;
      right: 42px;
      top: -20px;
      border: 10px solid transparent;
      border-bottom: 10px solid #fff;
    }

    &-item {
      text-align: left;

      &-btn {
        border: none;
        background: transparent;
        padding: 5px 10px;
        width: 100%;
        text-align: left;
        cursor: pointer;
        color: #000;
        text-decoration: none;
        display: block;
        font-size: 15px;
        font-family: inherit;

        &:hover {
          background: #eee;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
