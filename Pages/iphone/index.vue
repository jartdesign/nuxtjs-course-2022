<template>
    <div class="grid grid-cols-4 gap-4 mt-4">

        <nuxt-link to="/iphone/iphone-13-black" class="shadow-lg text-center p-5">
            <h1>IPhone 13 Black</h1>
            <div class="flex justify-center p-5 border rounded-lg">
            <img width="100" src="/images/iphone13_black.webp" alt="" />
        </div>
        </nuxt-link>

        <nuxt-link to="/iphone/iphone-11-pro-white" class="shadow-lg text-center p-5">
            <h1>IPhone 11 Pro white</h1>
            <div class="flex justify-center p-5 border rounded-lg">
            <img width="100" src="/images/iphone11pro.webp" alt="" />
        </div>
        </nuxt-link>
    </div>
    </template>

    <script setup>
        useHead({
            title: 'Nuxt3 - IPhones'
        })
    </script>
