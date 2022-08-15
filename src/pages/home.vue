<template>
    <div id="body">
        <div class="topText">
            <h1>元 素</h1>
            <span>外界的声音太嘈杂了,不妨停下来听听自己的内心</span>
            <div class="connect">
                <div class="weixin">
                    <img class="qrcode" src="../assets/QQ二维码.jpg">
                    <i class="iconfont icon-qq"></i>
                </div>
                <div class="weixin">
                    <img class="qrcode" src="../assets/微信二维码.jpg">
                    <i class="iconfont icon-weixin"></i>
                </div>
                <a href="https://github.com/panddd"><i class="iconfont icon-GitHub"></i></a>
            </div>
        </div>
        <img class="img" src="../assets/背景2.jpg">
        <div class="middle">
            所谓回忆者，虽说可以使人欢欣，有时又不免使人寂寞，使精神的丝缕还牵着已逝的寂寞的时光，又有什么意味呢。
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>
<style scoped>
#body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(240, 240, 240);
}

.topText {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    font-size: 1.2rem;
    color: #ECAD9E;
    text-align: center;
    margin-top: 40vh;
    position: absolute;
    text-shadow: 1px 1px 5px #ECAD9E;
    gap: 15px
}

.img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    float: left;
}

a {
    text-decoration: none;
    color: #ECAD9E;
}

.connect {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.weixin {
    position: relative;
}

.weixin img.qrcode {
    position: absolute;
    z-index: 99;
    top: 50px;
    right: -73px;
    width: 10rem;
    max-width: none;
    height: 10rem;
    transform: scale(0);
    transform-origin: top right;
    opacity: 0;
    border: .3125rem solid #7351e3;
    border-radius: .25rem;
    -webkit-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

}

.weixin:hover img.qrcode {
    transform: scale(1);
    opacity: 1;
}

@keyframes animated-border {
    0% {
        box-shadow: 0 0 0 0 rgba(238, 162, 164, 0.3);
    }

    100% {
        box-shadow: 0 0 0 20px rgba(102, 82, 82, 0.008);
    }
}

.middle {
    margin-top: 40px;
    animation: animated-border 1.5s infinite;
    font-family: Arial;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: black;
    border: 2px solid;
    border-radius: 10px;
    padding: 15px;
}
</style>