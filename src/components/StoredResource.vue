<template>
    <base-card>
        <ul>
            <li>
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
                <a :href="link">{{ link }}</a>
            </li>
        </ul>
    </base-card>
</template>

<script>
    import BaseCard from './layout/BaseCard';
    export default {
        components:{
            'base-card':BaseCard,
        },
        props:['title','description','link']
    }
</script>