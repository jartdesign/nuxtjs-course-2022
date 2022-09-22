<template>
    <div>
        <Head>
            <Title>Nuxt3 - IPhone {{ name }}</Title>
        </Head>
    <p>Iphone {{ name }}</p>
</div>
</template>

<script setup>

    const route = useRoute();
    const name = computed(()=> {
        return route.params.name.replaceAll("-", " ");
    })
    //console.log(route.params.name)

    /*useHead({
        title: `IPhone ${route.params.name.replaceAll("-", " ")}`
    })*/

</script>