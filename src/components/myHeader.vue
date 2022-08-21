<template>
    <div class="bigBox">
        <div class="logo">
            <router-link to="/about">
                <img class="logo" src="../assets/logo.jpg">
            </router-link>
        </div>
        <div>
            <div class="related">
                <router-link to="/" class="iconfont icon-shouye1">主页</router-link>
                <router-link to="/article" class="iconfont icon-ziliaoku">文章</router-link>
                <router-link to="/about" class="iconfont icon-jushou">关于</router-link>
                <a href="http://127.0.0.1:5174/#/" class="iconfont icon-houtaiguanli-xitongguanli">后台</a>
                <div class="search">
                    <el-button style="margin-left: -10px;" @click="isSearch = !isSearch" size="large" icon="Search"
                        circle />
                    <div style="position:absolute;left:86.5%;" v-show="isSearch">
                        <input class="searchInput" v-model="search" placeholder="输入要搜索的内容" suffix-icon="Search" />
                        <el-button @click="sureButton" class="sureButton" text>搜索
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            search: '',
            isSearch: false
        }
    },
    methods: {
        sureButton() {
            if (this.search != '') {
                this.$router.push({ path: 'search', query: { search: this.search } })
            } else {
                this.$message.error("输入不能为空！");
            }
        }
    }
}
</script>

<style scoped>
.bigBox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(240, 240, 240);
    width: 100%;
    height: 7rem
}

a {
    text-decoration: none;
    color: #1E1E1E;
}

a:hover {
    color: rgb(222, 43, 112);
}

.related {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    font-size: 1.2rem;
    margin-left: 30px;
}

.logo {
    margin-left: 100px;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
}

.search {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
}

.searchInput {
    width: 200px;
    height: 30px;
    border: 1px solid white;
    border-radius: 10px;
    outline: none;
    font: 13px/1.5 'Microsoft YaHei', arial, tahoma, \5b8b\4f53, sans-serif;
}

.sureButton {
    border-radius: 70px;
    margin-left: -56px;
    color: #894e54;
}
</style>