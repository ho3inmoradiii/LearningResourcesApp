<template>
    <the-header></the-header>

    <the-button @selected-cmp="setSelectedCmp" :selected-Cmp="selectedCmp"></the-button>

    <stored-resource
            v-for="res in resourcedData"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
            v-show="selectedCmp === 'stored-resource'"
    ></stored-resource>
    <input-resource
            v-show="selectedCmp === 'input-resource'"
            @add-resource = "addResource"
    ></input-resource>

</template>

<script>
    import TheHeader from './components/UI/Header';
    import StoredResource from './components/StoredResource';
    import InputResource from './components/InputResource';
    import TheButton from "./components/TheButton";

    export default{
        components:{
            'the-header':TheHeader,
            'stored-resource':StoredResource,
            'input-resource':InputResource,
            'the-button':TheButton,
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
            },
            addResource(titleRes,descriptionRes,linkRes){
                const resource = {
                    id:titleRes.concat(linkRes),
                    title:titleRes,
                    description:descriptionRes,
                    link:linkRes
                }
                this.resourcedData.push(resource);
            }
        }
    }
</script>

<style scoped>
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

