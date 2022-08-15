<template>
    <div id="body">
        <div class="topBox">
            <div>标题:{{ obj.title }}</div>
            <div>作者名字:{{ obj.name }}</div>
            <div>分类:{{ obj.type }}</div>
            <div>发布时间:{{ obj.createTime }}</div>
        </div>
        <!-- class="editor-content-view" -->
        <div style="padding:20px;" v-html="obj.text">
        </div>
        <div class="sendComment">
            <p class="iconfont icon-pinglun">评论</p>
            <el-input style="width:600px" :autosize="{ minRows: 6 }" v-model="textArea" maxlength="100"
                placeholder="请输入你要发送的内容" show-word-limit type="textarea" clearable="true" />
            <el-button @click="add" type="success" style="margin:5px 0 0 529px;width: 70px;">发送评论</el-button>
        </div>
        <div style="margin-left:30%;font-size: 20px;color:cornflowerblue;">
            <span>共<strong>{{ total }}</strong>条评论</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>当前在第<strong>{{ this.page }}</strong>页</span>
        </div>
        <div v-for="item in commentData" :key="item.id" class="showComment">
            <i class="iconfont icon-yonghu"></i>
            <span>吴彦祖</span>
            <div style="margin-top:25px;margin-left:-20px;font-size: 17px;">
                <p>{{ item.comment }}</p>
            </div>
        </div>
        <div style="margin:60px 0 50px 36%;">
            <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange"
                :page-sizes="[5, 10, 20, 50]" background :page-size="pageSize" :current-page="page"
                layout="sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { selectOne } from '../api/technology'
import { pageComment, addComment } from '../api/comment'
export default {
    name: 'technology',
    data() {
        return {
            id: this.$route.params.id,
            obj: {},
            textArea: '',
            commentData: [],
            total: 0,
            page: 1,
            pageSize: 5,
        }
    },
    created() {
        this.load()
    },
    methods: {
        load() {
            selectOne(this.id).then(res => {
                this.obj = res.data
                this.obj.createTime = this.obj.createTime.replace("T", " ")
            })
            let obj = {
                current: this.page,
                size: this.pageSize,
            }
            //根据文章ID分页查询评论
            pageComment(this.id, obj).then(res => {
                this.commentData = res.data.records
                this.total = res.data.total
            })
        },
        add() {
            let postComment = {
                technologyId: this.id,
                comment: this.textArea
            }
            if (this.textArea != '') {
                addComment(postComment).then(res => {
                    if (res.code === 1) {
                        this.$message.success("发表评论成功！")
                        this.textArea = ''
                        this.load()
                    } else {
                        this.$message.error("发送评论失败")
                        this.textArea = ''
                    }
                })
            } else {
                this.$message.error("昵称和要发送的评论都要写哦!!!")
            }
        },
        handleCurrentChange(page) {
            this.page = page
            this.load()
        },
        handleSizeChange(size) {
            this.pageSize = size
            this.load()
        },
    },
    computed: {
    }
}
</script>

<style>
#body {
    background-color: #CDDCDC;
    background-image: radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
    background-blend-mode: screen, overlay;
}

.sendComment {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 20px;
    margin-left: 30%;
    margin-top: 30px;
    gap: 5px;
}

.showComment {
    display: flex;
    flex-direction: row;
    margin: 15px 0 0 30%;
    font: 18px/1.2 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

.topBox {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
}

textarea {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}

.editor-content-view {
    border: 3px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-top: 20px;
    overflow-x: auto;
}

.editor-content-view p,
.editor-content-view li {
    white-space: pre-wrap;
    /* 保留空格 */
}

.editor-content-view blockquote {
    border-left: 8px solid #d0e5f2;
    padding: 10px 10px;
    margin: 10px 0;
    background-color: #f1f1f1;
}

.editor-content-view code {
    font-family: monospace;
    background-color: #eee;
    padding: 3px;
    border-radius: 3px;
}

.editor-content-view pre>code {
    display: block;
    padding: 10px;
}

.editor-content-view table {
    border-collapse: collapse;
}

.editor-content-view td,
.editor-content-view th {
    border: 1px solid #ccc;
    min-width: 50px;
    height: 20px;
}

.editor-content-view th {
    background-color: #f1f1f1;
}

.editor-content-view ul,
.editor-content-view ol {
    padding-left: 20px;
}

.editor-content-view input[type="checkbox"] {
    margin-right: 5px;
}
</style>
