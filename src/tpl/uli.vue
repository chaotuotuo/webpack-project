<template>
	<div class="main">
		<img v-bind:src="media.url" v-bind:title="media.title" alt="">
		<p>
			<i class="icon icon-danger-table-offline"></i>
			{{ name }}
		</p>
		<p>
			<button>甲铁城</button>
			<button>空之境界</button>
		</p>
	</div>
</template>

<script>
	export default {
		name:'test',
		data () {
			return {
				name:'chaotuotuo',
				media:{
					url:'../images/1.jpg',
					title:'甲铁城'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		color:green;
		padding:10px;
		background-image: url('../images/bg/paper.gif');

		>img{
			border-radius: 4px;
		    box-shadow: 0 0 10px #607D8B;
	        transition: all .5s;
	        cursor: pointer;

	        &:hover{
			    box-shadow: 0 0 10px 3px #607D8B;
				transform: translateX(4px);
	        }
		}

		>p{
			display:flex;

			>button{
				padding: 8px;
				border:1px solid #9b9b9b;
				border-radius:2px;
				cursor:pointer;
			}
		}
	}
</style>