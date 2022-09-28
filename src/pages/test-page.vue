<template>
    <div class="test-page">
        <h1>это тестовая страница</h1>
    </div>
</template>

<script>
export default {
    name: 'test-page',
    created() {
        this.$store.dispatch('test')

        console.log('test from created')
    }
}
</script>