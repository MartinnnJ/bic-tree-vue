<template>
  <div class="category">
    <div class="category__label" @click="this.isOpen = !this.isOpen">
      <div class="category__label--title">{{ title }}</div>
      <div class="category__label--arrow" :class="isOpen ? 'rotate' : ''">
        <img src="../assets/main-arrow.png" alt="main-arrow">
      </div>
    </div>
    <div class="category__content" :class="isOpen ? '' : 'hide'">
      <SubCategory
        v-for="subc in bicHierarchy"
        :key="subc.id"
        :id="subc.id"
        :title="subc.title"
        :children="subc.children"
        :first="true"
        :bicHierarchyConfig="bicHierarchyConfig"
      />
    </div>
  </div>
</template>

<script>
import SubCategory from './SubCategory.vue'

export default {
  name: 'MainCategory',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    bicHierarchy: {
      type: Array,
      required: true,
    },
    bicHierarchyConfig: {
      required: true,
    }
  },
  // setup(props) {
  //   console.log(props.bicHierarchyConfig)
  // },
  components: { SubCategory },
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped lang="scss">
$main-category-bg-color: #F6F9FE;
.category {
  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.4rem;
    padding: 1.8rem 2rem;
    background-color: $main-category-bg-color;
    cursor: pointer;

    &:hover {
      background-color: darken($main-category-bg-color, 5%);
    }
  }

  &__content {
    padding: 0 1rem;
  }
}
</style>
