<template>
    <base-card>
        <div>
            <button
                    @click="setSelectedCmp('stored-resource')"
                    :class="[selectedCmp==='stored-resource' ? activeClass : flatClass]">لیست منابع آموزشی</button>
            <button
                    @click="setSelectedCmp('input-resource')"
                    :class="[selectedCmp==='input-resource' ? activeClass : flatClass]"
            >وارد کردن منبع آموزشی</button>
        </div>
    </base-card>
</template>

<script>
    import BaseCard from './layout/BaseCard';
    export default {
        props:['selectedCmp'],
        data(){
            return{
                activeClass:'button',
                flatClass:'flat'
            }
        },
        components:{
            'base-card':BaseCard,
        },
        methods:{
            setSelectedCmp(cmp){
                this.$emit('selected-cmp',cmp);
            }
        }
    }
</script>

<style scoped>
    div{
        text-align: right;
    }
    .button {
        padding: 0.75rem 1.5rem;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: white;
        cursor: pointer;
    }

    .button:hover,
    .button:active {
        background-color: #270041;
        border-color: #270041;
    }

    .flat {
        padding: 0.75rem 1.5rem;
        background-color: transparent;
        color: #3a0061;
        border: none;
    }

    .flat:hover,
    .flat:active {
        background-color: #edd2ff;
        cursor: pointer;
    }
</style>