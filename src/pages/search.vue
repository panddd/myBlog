<template>
    <div id="body">
        <div v-show="!data.length" class="notData">
            <span>暂时没有相关数据哦</span>
        </div>
        <div class="sentence" v-for="item in data" :key="item.id" @click="open(item.id)">
            <div style="font-size:16px">
                {{ item.title }}
            </div>
            <p>作者:{{ item.name }}</p>
            <i class="iconfont icon-liulanqi">相关技术:{{ item.type }}</i>
        </div>
    </div>
</template>

<script>
import { technologypage } from '../api/technology'
export default {
    name: 'search',
    data() {
        return {
            data: [],
            page: 1,
            pageSize: 5,
        }
    },
    watch: {
        // 监听路由发生改变
        '$route': {
            handler(newVal) {
                if (newVal.query.search)
                    this.load()
            }
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            let obj = {
                current: this.page,
                size: this.pageSize,
                title: this.$route.query.search
            }
            technologypage(obj).then(res => {
                this.data = res.data.records
            })
        },
        open(item) {
            this.$router.push('/technologyNews/' + item)
        }
    }
}
</script>

<style scoped>
#body {
    width: 100%;
    min-height: 60vh;
    background-color: rgb(240, 240, 240);
}

.sentence {
    width: 50rem;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border: 1px solid wheat;
    border-radius: 10px;
    background-color: white;
    margin-left: 25%;
    box-shadow: 1px 2px 2px rgb(225, 140, 140);
    text-align: center;
    margin-top: 30px;
}

.sentence:hover {
    transform: scale(1.005);
    box-shadow: 4px 8px 8px rgba(142, 93, 93, 0.9)
}

.notData {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-family: Georgia;
    font-family: Arial;
}
</style>