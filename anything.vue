<template>
  <div>
    
    <a href="#" @click="view('home')">Home</a><br/>
    <a href="#" @click="view('counter')">Counter</a><br/>

    <NuxtPage />

      <LazyHomeWelcome v-if="page === 'home'"/>
      <LazyCounter v-if="page === 'counter'"/>
</div>
</template>


<script setup>
  const page = ref('d')
function view(name){
  page.value = name;
}
</script>




