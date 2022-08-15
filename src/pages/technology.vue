<template>
    <div id="body">
        <div class="sentence" v-for="item in bookList" :key="item.id" @click="open(item.id)">
            <div style="font-size:16px">
                {{ item.title }}
            </div>
            <p>作者:{{ item.name }}</p>
            <i class="iconfont icon-liulanqi">相关技术:{{ item.type }}</i>
        </div>
        <div style="margin:50px 0 50px 35% ;">
            <el-pagination background @current-change="handleCurrentChange" :page-sizes="[5, 10, 20, 50]"
                :page-size="pageSize" :current-page="page" layout="total, sizes, prev, pager, next, jumper"
                :total="total" @size-change="handleSizeChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { technologypage } from '../api/technology'
export default {
    name: 'technology',
    data() {
        return {
            bookList: [],
            form: {},
            total: 0,
            page: 1,
            pageSize: 5,
            dialogFormVisible: false
        }
    },
    created() {
        this.Load();
    },
    methods: {
        Load() {
            let obj = {
                current: this.page,
                size: this.pageSize,
            }
            technologypage(obj).then(res => {
                this.bookList = res.data.records
                this.total = res.data.total
            })
        },
        handleCurrentChange(page) {
            this.page = page
            this.Load()
        },
        handleSizeChange(size) {
            this.pageSize = size
            this.Load()
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
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

a {
    text-decoration: none;
    color: black;
    font-size: 30px;
}

a:hover {
    color: red;
}

.sentence:hover {
    transform: scale(1.005);
    box-shadow: 4px 8px 8px rgba(142, 93, 93, 0.9)
}
</style>