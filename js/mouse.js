// 导航栏鼠标事件(下拉菜单)
$('#nav>li>a').mouseover(function () {
    $('#menu').css('display', 'block');
    $(this).css('color', 'gold');
});
$('#nav>li>a').mouseleave(function () {
    $(this).css('color', 'white');
});
$('#menu').mouseleave(function () {
    $(this).css('display', 'none');
});
// 图片动画(内容一)
$('#one>div>img').mouseenter(function () {
    $(this).css({
       transform: 'scale(1.2)'
    });
});
$('#one>div>img').mouseleave(function () {
    $(this).css({
        transform: 'scale(1)'
    });
});
////////////内容二
$('#two>p').mouseenter(function () {
    $(this).css({
        color: '#DFCBC5',
        cursor: 'pointer'
    });
});
$('#two>p').mouseleave(function () {
    $(this).css({
        color: 'white',
        cursor: 'none'
    });
});
$('#two1>li').mouseenter(function () {
    $(this).css({
        color: '#DFCBC5',
        cursor: 'pointer'
    });
});
$('#two1>li').mouseleave(function () {
    $(this).css({
        color: 'black',
        cursor: 'none'
    });
});
/////////////内容九
/*
$('#classify').mouseenter(function () {
    $('#nine').children('img').eq(1).attr('src', 'img/1488248754.jpg');
    $('#nine').children('img').eq(2).attr('src', 'img/1488248779.jpg');
    $('#nine').children('img').eq(3).attr('src', 'img/1488248795.jpg');
    $('#nine').children('img').eq(4).attr('src', 'img/1488248833.jpg');
});
*/
///////底部换图片
$('#foot>li>div').mouseover(function () {
    $(this).css('backgroundImage', 'url(img/111.png)');
});
$('#foot>li>div').mouseleave(function () {
    $(this).css('backgroundImage', 'url(img/icon_footer.png)');
});




















