// 让戒指飞
(function () {
    // 获取图片位置
    var flyImg = document.getElementById('fly');
    // 初始位置x坐标,和沿着x轴运动方向的布尔值
    var x = y = 0, flagX = flagY = true, handle;


    // 沿着x轴方向运动的函数
    function moveX(s) {
        // 如果布尔值为true, 向右运动,否则向左运动
        flagX ? x += s : x -= s;
        // 改变图片的位置
        flyImg.style.left = x + '%';

        // 当图片运动到最右边或者最左边的时候,改变图片运动的方向
        if (x == 90 || x == 0) flagX = !flagX;
    }

    // 沿着y轴方向运动的函数
    function moveY(s) {
        flagY ?  y += s : y -= s;
        flyImg.style.top = y + '%';
        if (y == 60 || y == -10) flagY = !flagY;
    }

    handle = requestAnimationFrame(animation);

    function animation() {

        moveX(.5);
        moveY(.5);
        handle = requestAnimationFrame(animation);
    }
})();