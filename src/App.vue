<template>
    <the-header></the-header>

    <button @click="setSelectedCmp('stored-resource')">لیست منابع آموزشی</button>
    <button @click="setSelectedCmp('input-resource')">وارد کردن منبع آموزشی</button>

    <stored-resource
            v-for="res in resourcedData"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
    ></stored-resource>
    <input-resource></input-resource>

</template>

<script>
    import TheHeader from './components/UI/Header';
    import StoredResource from './components/StoredResource';
    import InputResource from './components/InputResource';

    export default{
        components:{
            'the-header':TheHeader,
            'stored-resource':StoredResource,
            'input-resource':InputResource,
        },
        data(){
            return{
                selectedCmp:'stored-resource',
                resourcedData:[
                    {
                        id:'learning-vue',
                        title:'سایت اصلی vue.js',
                        description:'بهترین منبع برای مطالعه داکیومنت ویو',
                        link:'https://www.vuejs.org'
                    },
                    {
                        id:'vue-school',
                        title:'سایت مدرسه ویو',
                        description:'بهترین سایت برای یادگیری ویو به صورت تصویری',
                        link:'https://www.vueschool.io'
                    },
                ]
            }
        },
        methods:{
            setSelectedCmp(cmp){
                if (cmp === 'stored-resource'){
                    this.selectedCmp = 'stored-resource';
                }else{
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

