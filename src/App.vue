<template>
    <the-header></the-header>

    <button @click="setSelectedCmp('stored-resource')">لیست منابع آموزشی</button>
    <button @click="setSelectedCmp('input-resource')">وارد کردن منبع آموزشی</button>

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
                selectedCmp:'stored-resource',
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
        },
        methods:{
            setSelectedCmp(cmp){
                if (cmp === 'stored-resource'){
                    console.log(cmp);
                    this.selectedCmp = 'stored-resource';
                }else{
                    console.log(cmp);
                    this.selectedCmp = 'input-resource';
                }
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

