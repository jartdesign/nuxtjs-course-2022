<template>
<div>


<button @click="moveToAbout">Take me to about page</button>

I am Index page
</div>
</template>

<script setup>
    const moveToAbout = () => {
        navigateTo("about");
    }
</script>