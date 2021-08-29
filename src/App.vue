<template>
    <the-header></the-header>
    <ul>
        <li v-for="res in resourcedData" :key="res">
            {{ res.title}}
        </li>
    </ul>
</template>

<script>
    import TheHeader from './components/UI/Header';
    export default{
        components:{
            'the-header':TheHeader,
        },
        data(){
            return{
                resourcedData:[
                    {
                        id:'learning-vue',
                        title:'سایت اصلی vue.js',
                        description:'بهترین منبع برای مطالعه داکیومنت ویو',
                        link:'vuejs.org'
                    },
                    {
                        id:'vue-school',
                        title:'سایت مدرسه ویو',
                        description:'بهترین سایت برای یادگیری ویو به صورت تصویری',
                        link:'vueschool.io'
                    },
                ]
            }

        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0;
    }
</style>

