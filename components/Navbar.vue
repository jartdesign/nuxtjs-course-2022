<template>
    <nav class="bg-gray-400 text-white text-lg flex shadow-lg p-3 justify-between">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphone</NuxtLink>
    <NuxtLink to="/profile">Profile</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <p>Cart ({{ cart.length }})</p>
</nav>
</template>

<script setup>
    const cart = useCart();
    console.log('cart value = ', cart.value.length);
</script>