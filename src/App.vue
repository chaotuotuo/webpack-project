<template>
    <div class="main">
    	<mapcompontent />
    </div>
</template>
<script>
import mapcompontent from '@/viewer/uli.vue'

export default {
    name: 'app',
    components: { mapcompontent },
    data() {
        return {}
    },
    mounted() {
        console.log('mian created: ', this)
    }
}
</script>
<style lang="scss" scoped>
.main {
	height: 100%;
	width: 100%;
}
</style>