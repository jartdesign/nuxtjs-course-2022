<template>
    <div>
    <nav class="bg-gray-400 text-white text-lg flex shadow-lg p-3 justify-between">
        <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphone</NuxtLink>
    <NuxtLink to="/profile">Profile</NuxtLink>
</nav>
<!-- here nuxt will replace page content -->
    <slot></slot>
</div>
</template>
