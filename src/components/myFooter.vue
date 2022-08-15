<template>
    <div class="bigBox">
        <div style="width: 500px;" ref="aplayer">
            <pre class="aplayer-lrc-content">
                [00:02.00]周杰伦 - 说了再见
                [00:08.00]作词:古小力/黄淩嘉 
                [00:14.00]曲:周杰伦
                [00:20.00]编曲:钟兴民
                [00:31.55]天凉了 雨下了 你走了
                [00:36.12]清楚了 我爱的 遗失了
                [00:39.82]落叶飘在湖面上睡着了
                [00:46.05]
                [00:47.39]想要放 放不掉 泪在飘
                [00:51.27]你看看 你看看不到
                [00:54.61]我假装过去不重要
                [00:58.34]却发现自己办不到
                [01:01.26]
                [01:02.05]说了再见 才发现再也见不到
                [01:09.57]我不能 就这样 失去你的微笑
                [01:17.37]口红待在桌角 而你我找不到
                [01:26.42]若角色对调 你说好不好
                [01:32.51]
                [01:33.23]说了再见 才发现再也见不到
                [01:40.80]能不能 就这样 忍着痛 泪不掉
                [01:48.21]说好陪我到老 永恒往哪里找
                [01:57.33]再次拥抱 一分一秒 都好
                [02:05.32]
                [02:06.00]周杰伦  -  说了再见
                [02:10.00]作词：方文山  作曲：周杰伦
                [02:14.00]www.1ting.com ▓ 李泽昊
                [02:18.00]
                [02:19.61]天凉了 雨下了 你走了
                [02:24.28]清楚了 我爱的 遗失了
                [02:28.20]落叶飘在湖面上睡着了
                [02:34.45]
                [02:35.76]想要放 放不掉 泪在飘
                [02:39.85]你看看 你看看不到
                [02:42.95]我假装过去不重要
                [02:46.83]却发现自己办不到
                [02:49.68]
                [02:50.57]说了再见 才发现再也见不到
                [02:57.91]我不能 就这样 失去你的微笑
                [03:05.80]口红待在桌角 而你我找不到
                [03:14.70]若角色对调 你说好不好
                [03:22.44]
                [03:23.51]你的笑 你的好 脑海里 一直在绕
                [03:31.31]我的手 忘不了 你手的温度
                [03:38.43]心 碎了一地 捡不回从前的心跳
                [03:45.64]身陷过去我无力逃跑
                [03:51.90]
                [03:52.76]说再见 才发现再也见不到
                [03:59.91]能不能 就这样 忍着痛 泪不掉
                [04:07.52]说好陪我到老 永恒往哪里找
                [04:16.65]再次拥抱 一分一秒 都好
                [04:26.88]
            </pre>
        </div>
        <div class="clock">
            <i class="iconfont icon-shizhong"></i>
            <span ref="operationHours"></span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';

const aplayer = ref(null)
const operationHours = ref(null)

function ShowRunTime() {
    let BootDate = new Date("2022/7/10 00:00:00");
    let NowDate = new Date();
    let RunDateM = parseInt(NowDate - BootDate);
    let RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
    let RunHours = Math.floor(RunDateM % (24 * 3600 * 1000) / (3600 * 1000));
    let RunMinutes = Math.floor(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000));
    let RunSeconds = Math.round(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000);
    let RunTime = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
    operationHours.value.innerHTML = `网站已存在:${RunTime}`;
}
setInterval(ShowRunTime, 1000);


onMounted(() => {
    const ap = new APlayer({
        container: aplayer.value,
        lrcType: 2,     //选择歌词的展示的类型
        audio: [{
            name: '周杰伦',    //歌手名
            artist: '说了再见',   // 歌曲名
            url: 'https://www.qqmc.com/mp3/music728675.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000bviBl4FjTpO_1.jpg?max_age=2592000',   //封面地址
        }]
    })
})

</script>

<style scoped>
.bigBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: rgb(240, 240, 240);
    width: 100%;
    height: 16rem
}

.clock {
    display: flex;
    align-items: center;
    color: #ce5e8a;
}
</style>