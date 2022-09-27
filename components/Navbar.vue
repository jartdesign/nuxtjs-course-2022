<template>
    <nav class="bg-gray-400 text-white text-lg flex shadow-lg p-3 justify-between">
    
        <div class="flex">
        <NuxtLink class="mr-4" to="/">Home</NuxtLink>
        <NuxtLink class="mr-4" to="/about">About</NuxtLink>
        <NuxtLink class="mr-4" to="/iphone">Iphone</NuxtLink>
        <p class="mr-4">Cart ({{ cart.length }})</p>
        <p>Total route changed: {{ pageVisitCount }}</p>
    </div>
    
    <div v-if="auth.isAuthenticated">
        <NuxtLink v-if="auth.isAuthenticated" to="/profile">Profile</NuxtLink>
        <button class="ml-4" @click="logout">Logout</button>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>

</nav>
</template>

<script setup>
    const cart = useCart();
    console.log('cart value = ', cart.value.length);

    const auth = useAuth();
    const logout = () => {
        auth.value.isAuthenticated = false;
    }

    const pageVisitCount = usePageVisitCount();
</script>