<template>
    <base-card>
        <ul>
            <li>
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
                <a :href="link">{{ link }}</a>
            </li>
        </ul>
        <button @click="deleteResource">حذف منبع</button>
    </base-card>
</template>

<script>
    import BaseCard from './layout/BaseCard';
    export default {
        components:{
            'base-card':BaseCard,
        },
        props:['id','title','description','link'],
        methods:{
            deleteResource(){
                this.$emit('delete-resource',this.id);
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
    }

    li {
        margin: auto;
        max-width: 40rem;
        text-align: right;
    }

    h4 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
        direction: rtl;
    }

    p {
        margin: 0.5rem 0;
    }

    a {
        text-decoration: none;
        color: #ce5c00;
    }

    a:hover,
    a:active {
        color: #c89300;
    }

    button {
        padding: 0.75rem 1.5rem;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: white;
        cursor: pointer;
    }

    button:hover{
        background-color: #270041;
        border-color: #270041;
    }
</style>