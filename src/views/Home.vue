<template>
  <div class="">
    <Header></Header>
    <NavSwiper></NavSwiper>
    <div ref="target">
      <NewGoodCourse v-if="targetIsVisible"></NewGoodCourse>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import NavSwiper from "../components/home/NavSwiper.vue";
// import NewGoodCourse from "../components/home/NewGoodCourse.vue";
import Foot from "../components/common/Foot.vue";

import { defineAsyncComponent, ref } from "vue"
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null);
const targetIsVisible = ref(false);

const NewGoodCourse = defineAsyncComponent(() =>
  import('../components/home/NewGoodCourse.vue')
)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if( isIntersecting ) {
  		targetIsVisible.value = isIntersecting
  	}
  },
)

</script>

<style scoped></style>