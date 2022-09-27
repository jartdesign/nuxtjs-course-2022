<template>
    <div class="grid grid-cols-4 gap-4 mt-4">

        <nuxt-link
        v-for="iphone in iphones"
        :to="`/iphone/${iphone}`"
        :key="iphone"
        class="shadow-lg text-center p-5">
            <h1>{{iphone}}</h1>
            <div class="flex justify-center p-5 border rounded-lg">
            <img width="100" :src="`/images/${iphone}.webp`" alt="" />
        </div>
        </nuxt-link>
    </div>
    </template>

    <script setup>
        useHead({
            title: 'Nuxt3 - IPhones'
        })

        const iphones = ['iphone-11','iphone-11-pro','iphone-13','iphone-13-pro']

        /*
        const { data } = useFetch('/iphones');
        const iphones = data;
        */
        //console.log(data.value);
    </script>
