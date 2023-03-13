<template>
    <div id="body">
        <div style="margin:20px 0 10px 46%">
            <el-button @click="add" type="success">分享好句</el-button>
        </div>
        <div class="sentence" v-for="item in bookList" :key="item.id">
            <p>作者:{{ item.name }}</p>
            <p>{{ item.text }} </p>
        </div>
        <div style="margin:50px 0 50px 32% ;">
            <el-pagination background @current-change="handleCurrentChange" :page-sizes="[5, 10, 20, 50]"
                :page-size="pageSize" :current-page="page" layout="total, sizes, prev, pager, next, jumper"
                :total="total" @size-change="handleSizeChange">
            </el-pagination>
        </div>
    </div>

    <el-dialog v-model="dialogFormVisible" title="分享好句" width="30%">
        <el-form label-width="55px">
            <el-form-item label="作者">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="好句">
                <textarea v-model="form.text" autocomplete="off" style="width:100%;height:80px"></textarea>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="sureadd">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { page, addSentence } from '../api/books'
export default {
    name: 'books',
    data () {
        return {
            bookList: [],
            form: {},
            total: 0,
            page: 1,
            pageSize: 5,
            dialogFormVisible: false
        }
    },
    created () {
        this.Load();
    },
    methods: {
        Load () {
            let obj = {
                current: this.page,
                size: this.pageSize,
            }
            page(obj).then(res => {
                this.bookList = res.data.records
                this.total = res.data.total
            })
        },
        add () {
            this.dialogFormVisible = true
            this.form = {}
        },
        sureadd () {
            addSentence(this.form).then(res => {
                if (res) {
                    this.$message.success("感谢你的分享!")
                    this.dialogFormVisible = false
                } else {
                    this.$message.error("分享失败……")
                    this.dialogFormVisible = false
                }
                this.Load();
            })
        },
        handleCurrentChange (page) {
            this.page = page
            this.Load()
        },
        handleSizeChange (size) {
            this.pageSize = size
            this.Load()
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
    gap: 15px;
    border: 1px solid wheat;
    border-radius: 10px;
    background-color: white;
    margin-left: 25%;
    box-shadow: 1px 2px 2px rgb(225, 140, 140);
    text-align: center;
    margin-top: 20px;
}

.sentence:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 15px rgba(142, 93, 93, 0.9)
}
</style>