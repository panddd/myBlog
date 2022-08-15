<template>
    <div class="box">
        <div class="information">
            <strong>
                <p><i class="iconfont icon-xiaolian"></i>&nbsp;关于我</p>
            </strong>
            <div>
                <p><i class="iconfont icon-shouye"></i>&nbsp;地点:广州</p>
            </div>
            <div>
                <p><i class="iconfont icon-youxiang"></i>&nbsp;邮箱:2544894282@qq.com</p>
            </div>
            <div>
                <p><i class="iconfont icon-aixin"></i>&nbsp;爱好: 打篮球 ,学习 ,听歌</p>
            </div>
            <div>
                <p><i class="iconfont icon-mingcijieshi"></i>&nbsp;我寄你的信，总要送往邮局，不喜欢放在街边的绿色邮筒中，我总疑心那里会慢一点。</p>
            </div>
             <div>
                <p><i class="iconfont icon-haizhe"></i>&nbsp;感谢你的到访^_^</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>


<style scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 -30%;
    background-color: rgb(240, 240, 240);
}

li {
    list-style: none;
}

p {
    font-size: 20px;
}

.information {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 5%;
    margin-left: 20%;
}
</style>