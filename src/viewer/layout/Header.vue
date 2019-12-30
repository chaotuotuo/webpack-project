<template>
    <div class="header">
        <el-row>
            <el-col :span="9">
                <div class="item">left</div>
            </el-col>
            <el-col :span="6">
                <div class="item">center</div>
            </el-col>
            <el-col :span="9">
                <div class="item">right</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'HaderLayout',
    data() {
        return {}
    },
    created(){},
    mounted() {
        console.log('HaderLayout: ', this)
    },
    computed: {},
    methods: {}
}
</script>
<style lang="scss" scoped>
.header {
    padding: 20px 0 13px 0;
    background: #ccc;

    >div.el-row{
    	border-top: 2px solid #517e8c;

	    div.item{
	    	// padding: 18px 0 13px 0;
	    }
    }
}
</style>