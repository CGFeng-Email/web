$(function () {
    var countCXArr = [];
    var countCX = function () {
        $('.scroll_count').each(function (i, dom) {
            if (countCXArr[i] && countCXArr[i] === true) {
                return;
            }
            var sT;
            var ncTop;
            sT = $(window).scrollTop();
            ncTop = $(dom).offset().top;
            var id, decimals, startVal, endVal, duration;
            if (sT > ncTop - $(window).height() && sT < ncTop) {
                $(dom).find('.num').each(function () {
                    id = $(this).attr('id');
                    decimals = $(this).attr('data-decimals'),
                        startVal = $(this).attr('data-startVal'),
                        endVal = $(this).attr('data-endVal'),
                        duration = $(this).attr('data-speed');
                    new CountUp(id, startVal, endVal, decimals, duration, {
                        useEasing: true,//效果
                        separator: ''//数字分隔符
                    }).start();// target：目标元素id, startVal：你想要开始的值, endVal：你想要到达的值, decimals：小数位数，默认值为0, duration：动画持续时间为秒，默认值为2, options：选项的可选对象
                    countCXArr[i] = true;
                })
            }
        })
    }
    countCX();
    $(window).on("scroll", function () {
        countCX();
    })
});