// 节流函数
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// 使用节流的滚动事件
window.addEventListener('scroll', throttle(function () {
    // 获取垂直滚动位置
    const scrollY = Math.floor(window.scrollY || window.pageYOffset);
    
    if (scrollY > 3) {
        // $('.header').removeClass('header_bottom');
        $('.header .content').css({
            background: '#303030',
            padding: 0
            
        })
    } else {
        // $('.header').addClass('header_bottom');
        $('.header .content').css({
            background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), transparent)',
            padding: '0 0 .5rem'
        })
       
    }
}, 200)); // 每200ms最多执行一次