<template>
    <base-card>
        <form>
            <div class="form-control">
                <label>عنوان منبع</label>
                <input type="text">
            </div>
            <div class="form-control">
                <label>توضیحاتی در مورد منبع</label>
                <textarea></textarea>
            </div>
            <div class="form-control">
                <label>لینک منبع</label>
                <input type="text">
            </div>
        </form>
    </base-card>
</template>

<script>
    import BaseCard from './layout/BaseCard';
    export default {
        components:{
            'base-card':BaseCard,
        }
    }
</script>

<style>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
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
</style>