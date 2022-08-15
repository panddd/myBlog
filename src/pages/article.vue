<template>
    <div class="box">
        <div style="margin-left:6%;">
            <router-link class="go" to="/books">
                <i class="iconfont icon-tushu  ">收集好句</i>
            </router-link>
        </div>
        <div style="margin-left:6%;">
            <router-link class="go" to="/technology">
                <i class="iconfont icon-jishufuwu">相关技术</i>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'article',
    data() {
        return {
            textList: '',
        }
    },
}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    height: 55vh;
    align-items: flex-start;
    background-color: rgb(240, 240, 240);
}

.go {
    width: 50rem;
    height: 17vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid wheat;
    border-radius: 10px;
    background-color: white;
    margin-top: 2rem;
    margin-left: 45%;
    box-shadow: 1px 2px 2px rgb(225, 140, 140);
    text-align: center;
}

.go a {
    cursor: pointer;
    transition: all 0.7s;
}

.go:hover {
    transform: scale(1.0008);
    color: #f1908c;
    box-shadow: 10px 10px 15px rgba(142, 93, 93, 0.9)
}

a {
    text-decoration: none;
    color: #1E1E1E;
}

.home {
    font-size: 20px;
    margin-left: 25%;
}

.home:hover {
    color: red
}
</style>