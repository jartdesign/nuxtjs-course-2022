<template>
    <div>
    <button @click="Increment">Increment</button>
  <p>{{count}}</p>
  <button @click="Decrement">Decrement</button>
</div>
</template>

<script setup>
    // Here was using vue 3 composition api
    //import ref from 'vue';
    const count = ref(0);
  
    let Increment = () => {
      count.value ++;
    }
  
    let Decrement = () => {
      count.value --;
    } 
  
  </script>