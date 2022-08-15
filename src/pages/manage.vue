<template>
    <MyHeader></MyHeader>
    <router-view></router-view>
    <div class="hello_world" v-show="goTOP">
        <i class="top iconfont icon-icon-" @click="toTop"></i>
    </div>
    <MyFooter></MyFooter>
</template>
<script>
import MyHeader from "../components/myHeader.vue";
import MyFooter from "../components/myFooter.vue"
export default {
    name: 'manage',
    components: { MyHeader, MyFooter },
    data() {
        return {
            goTOP: false,
        }
    },
    methods: {
        handleScroll() {
            // let scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0
            if (document.documentElement.scrollTop > 150) {  //设置页面滑动多少显示按钮
                this.goTOP = true
            } else {
                this.goTOP = false;
            }
        },
        toTop() {
            document.documentElement.scrollTop = 0;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.top {
    position: fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 7%;
}
</style>