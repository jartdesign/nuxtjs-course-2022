export default defineNuxtRouteMiddleware(()=>{
    let pageVisitCount = usePageVisitCount();
    pageVisitCount.value++;
    //console.log('Middleware globally.')
})