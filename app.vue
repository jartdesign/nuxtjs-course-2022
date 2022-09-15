<template>
  <div>
    <button @click="toggle">Toggle</button>

      <HomeWelcome v-if="MyComponent === 'Welcome'"/>

  <!--<component :is="MyComponent"/>-->
  <Counter v-else/>
</div>
</template>


<script setup>
  const MyComponent = ref("Counter");
function toggle(){
  
  MyComponent.value = 'Welcome';
}
</script>




