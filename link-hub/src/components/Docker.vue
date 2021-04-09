<template>

    <div>
        <h1>{{Title}}</h1>
        <h3>
            <a v-bind:href="link" > Click </a>
        </h3>
    </div>
    
</template>

<script>

export default {
    name: 'Docker',
    props: ['Title','link'],
}

</script>

<style scoped>



</style>