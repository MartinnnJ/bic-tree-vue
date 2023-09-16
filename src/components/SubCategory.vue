<template>
  <div class="subcategory">
    <div class="subcategory__label" @click="this.isOpen = children ? !this.isOpen : false">
      <div class="subcategory__label--line" v-if="!first">
        <img src="../assets/line.png" alt="line">
      </div>
      <div class="subcategory__label--arrow" :class="[isOpen ? 'rotate' : '', !first ? 'mgl' : '', children ? '' : 'hide']">
        <img src="../assets/sub-arrow.png" alt="sub-arrow">
      </div>
      <div class="subcategory__label--title" :class="[!children && 'mgl-2', isOpen && 'bold']">
        {{ title }}
        <small>{{ findValueById(bicHierarchyConfig.aggregations.bic, id) }}</small>
      </div>
    </div>
    <div class="subcategory__content" :class="isOpen ? '' : 'hide'" :style="!first ? { marginLeft: '1.6rem' } : {}">
      <SubCategory
        v-for="subc in children"
        :key="subc.id"
        :id="subc.id"
        :title="subc.title"
        :children="subc.children"
        :bicHierarchyConfig="bicHierarchyConfig"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCategory',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    children: {
      required: false,
    },
    first: {
      type: Boolean,
      required: false,
      default: false,
    },
    bicHierarchyConfig: {
      required: true,
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    findValueById(obj, id) { // { 'A': 1212, 'B': 78541, 'C': 3654, ... }, A
      if (obj === null) return null;
      for (const key in obj) {
        if (key === id) {
          return `(${obj[key].toLocaleString()})`; // (47 895)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.subcategory {

  &__label {
    position: relative;
    display: flex;
    align-items: center;
    gap: .4rem;
    
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6rem;
    padding: .8rem 0;
    cursor: pointer;

    &--line {
      position: absolute;
      top: 0;
      left: -1px;
    }

    &:hover {
      background-color: darken(#FFF, 5%);
    }

    &--title {
      small {
        display: inline-block;
        margin-left: .5rem;
        color: lightgrey;
      }
    }
  }

  &__content {
    margin-left: .8rem;
    border-left: 1px solid #E6E9F0;
  }
}
</style>