<template>
    <base-dialog v-if="inputIsInvalid" title="ورودی های نامعتبر" @close="confirmError">
        <template #default>
            <p>حد اقل یکی از ورودی های شما خالی است</p>
        </template>
        <template #actions>
            <button @click="confirmError">باشه</button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="addToResource">
            <div class="form-control">
                <label>:عنوان منبع</label>
                <input type="text" v-model="title">
            </div>
            <div class="form-control">
                <label>:توضیحاتی در مورد منبع</label>
                <textarea v-model="description" rows="3"></textarea>
            </div>
            <div class="form-control">
                <label>:لینک منبع</label>
                <input type="text" v-model="link">
            </div>
            <div class="form-control">
                <button type="submit">اضافه کردن</button>
            </div>
        </form>
    </base-card>
</template>

<script>
    import BaseCard from './layout/BaseCard';
    export default {
        components:{
            'base-card':BaseCard,
        },
        data(){
            return{
                title:'',
                description:'',
                link:'',
                inputIsInvalid:false
            }
        },
        methods:{
            addToResource(){
                if (this.title.trim()==='' || this.description.trim()==='' || this.link.trim()===''){
                    this.inputIsInvalid = true;
                    return;
                }else {
                    this.$emit('add-resource',this.title,this.description,this.link);
                }
            },
            confirmError(){
                this.inputIsInvalid = false;
            }
        }
    }
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        text-align: right;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
        text-align: right;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }

    button {
        padding: 0.75rem 1.5rem;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #270041;
        border-color: #270041;
    }
</style>