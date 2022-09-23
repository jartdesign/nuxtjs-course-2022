<template>
    <div class="grid grid-cols-4 gap-4 mt-4">

        <nuxt-link to="/iphone/iphone-11" class="shadow-lg text-center p-5">
            <h1>IPhone 11</h1>
            <div class="flex justify-center p-5 border rounded-lg">
            <img width="100" src="/images/iphone-11.webp" alt="" />
        </div>
        </nuxt-link>

        <nuxt-link to="/iphone/iphone-11-pro" class="shadow-lg text-center p-5">
            <h1>IPhone 11 Pro</h1>
            <div class="flex justify-center p-5 border rounded-lg">
            <img width="100" src="/images/iphone-11-pro.webp" alt="" />
        </div>
        </nuxt-link>

        <nuxt-link to="/iphone/iphone-13" class="shadow-lg text-center p-5">
            <h1>IPhone 13</h1>
            <div class="flex justify-center p-5 border rounded-lg">
                <img width="100" src="/images/iphone-13.webp" alt="" />
            </div>
        </nuxt-link>

        <nuxt-link to="/iphone/iphone-13-pro" class="shadow-lg text-center p-5">
            <h1>IPhone 13 pro</h1>
            <div class="flex justify-center p-5 border rounded-lg">
                <img width="100" src="/images/iphone-13-pro.webp" alt="" />
            </div>
        </nuxt-link>
    </div>
    </template>

    <script setup>
        useHead({
            title: 'Nuxt3 - IPhones'
        })
    </script>
