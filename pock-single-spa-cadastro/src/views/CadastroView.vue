<template>
  <div class="container">
    <Municipe />
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Municipe from '@/components/cadastro/Municipe.vue';

export default defineComponent({
  components: {
    Municipe,
  },
  setup() {
  }
})
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
</style>