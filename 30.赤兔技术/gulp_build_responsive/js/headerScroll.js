// 防抖函数：延迟指定时间后执行，期间重复触发则重置延迟
function debounce(fn, delay = 100) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

// 绑定防抖后的滚动事件
window.addEventListener('scroll', debounce(function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= 50) {
        // 执行目标逻辑
        $('.header .wrap').animate({
            padding: '0 10px 0 20px'
        })
    } else {
        const innerWidth = window.innerWidth;
        if (innerWidth >= 1600) {
            $('.header .wrap').animate({
                padding: '0 100px'
            })
        }
    }
}, 50)); // 延迟100ms执行，可根据需求调整

// 屏幕宽度
$(function () {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 1400) {
        $('.header .wrap').animate({
            padding: '0 10px 0 20px'
        })
    }
})
