<template>
	<div>
		<Header />
	</div>
</template>
<script>

	import Header from './Header.vue'

	export default {
		name: 'layout',
		components: {
			Header
		},
		data(){
			return {}
		},
		created(){},
		mounted(){
			console.log('layout: ', this)
		},
		computed: {},
		methods: {}
	}
</script>
<style lang="scss" scoped>
	
</style>