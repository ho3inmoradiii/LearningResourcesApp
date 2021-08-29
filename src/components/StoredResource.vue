<template>
    <ul>
        <li>
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
            <a :href="link">{{ link }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        props:['title','description','link']
    }
</script>