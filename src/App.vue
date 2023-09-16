<template>
  <WrapperSlot>
    <!-- <MainCategory
      v-for="lang in treeData.hierarchy"
      :key="lang.id"
      :id="lang.id"
      :title="lang.title"
      :bicHierarchy="treeData.bicHierarchy"
      :bicHierarchyConfig="hasInputData(lang.id)"
    /> -->
    <MainCategory
      :id="1"
      title="English"
      :bicHierarchy="treeData.bicHierarchy"
      :bicHierarchyConfig="hasInputData(1)"
    />
  </WrapperSlot>
</template>

<script>
import WrapperSlot from './components/UI/WrapperSlot.vue'
import MainCategory from './components/MainCategory.vue'

import treeData from './data/init.json'
// import configData from './data/ag-c-1.json'
import configData from './data/ag-c-1-b-AFJ.json'

console.log(treeData)
console.log(configData)

export default {
  name: 'App',
  components: {
    WrapperSlot,
    MainCategory
  },
  data() {
    return {
      treeData, configData
    }
  },
  methods: {
    hasInputData(id) {
      if (!this.configData.category || this.configData.category.id !== id) {
        return null;
      } else {
        return this.configData;
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hide {
  display: none;
}

.rotate {
  transform: rotate(90deg);
}

.mgl {
  margin-left: .8rem;
}

.mgl-2 {
  margin-left: 1.6rem;
}

.bold {
  font-weight: 700;
  color: #1A2252;
}
</style>
