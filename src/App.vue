<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'app',
    data() {
        return {}
    },
    mounted() {
        console.log('app created: ', this)
    }
}
</script>
<style lang="scss" scoped>
.app {
	height: 100%;
	width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #fff;
    background-color: #0a1420;
}
</style>