$(function () {
  // // 加載完畢
  NProgress.done();

  layui.use(function () {
    var util = layui.util;
    util.fixbar({
      bars: [],
      on: {},
    })
  });

  // ===== 自定义适配器 =====
  class LenisAosAdapter {
    constructor(lenis) {
      this.lenis = lenis;
      this.handleScroll = this.handleScroll.bind(this);
      this.animationFrame = null;
    }

    init() {
      this.lenis.on('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleScroll);
      this.handleScroll(); // 初始触发
    }

    handleScroll() {
      if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
      this.animationFrame = requestAnimationFrame(() => {
        AOS.refresh();
      });
    }

    destroy() {
      this.lenis.off('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleScroll);
      if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    }
  }

  // ===== 初始化 =====
  // 1. 创建Lenis实例
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: 'vertical',
    smoothTouch: true, // 启用触控平滑
    touchMultiplier: 1.5, // 触控滚动灵敏度
  });

  // 2. 初始化AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100,
    once: true,
  });

  // 3. 连接适配器
  const adapter = new LenisAosAdapter(lenis);
  adapter.init();

  // ===== 动画循环 =====
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  raf();

  // 为内部容器添加事件监听器，阻止滚轮事件冒泡到 Lenis：
  document.querySelectorAll('.scroll_list').forEach(el => {
    el.addEventListener('wheel', (e) => {
      // 内部滚动时阻止事件冒泡
      if (el.scrollHeight > el.clientHeight) {
        e.stopPropagation();
      }
    });
  });


  
  document.getElementById('scrollDom1').addEventListener('click', () => {
    const targetElement = document.getElementById('scrollTarget1');
    // 调用 Lenis 的滚动方法
    lenis.scrollTo(targetElement, {
      duration: 1.5, // 滚动持续时间（秒）
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
      lock: false, // 是否禁止用户滚动
    });
  });

  document.getElementById('scrollDom2').addEventListener('click', () => {
    const targetElement = document.getElementById('scrollTarget2');
    // 调用 Lenis 的滚动方法
    lenis.scrollTo(targetElement, {
      duration: 1.5, // 滚动持续时间（秒）
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
      lock: false, // 是否禁止用户滚动
    });
  });

  document.getElementById('scrollDom3').addEventListener('click', () => {
    const targetElement = document.getElementById('scrollTarget3');
    // 调用 Lenis 的滚动方法
    lenis.scrollTo(targetElement, {
      duration: 1.5, // 滚动持续时间（秒）
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
      lock: false, // 是否禁止用户滚动
    });
  });

  document.getElementById('scrollDom4').addEventListener('click', () => {
    const targetElement = document.getElementById('scrollTarget4');
    // 调用 Lenis 的滚动方法
    lenis.scrollTo(targetElement, {
      duration: 1.5, // 滚动持续时间（秒）
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
      lock: false, // 是否禁止用户滚动
    });
  });

  document.getElementById('scrollDom5').addEventListener('click', () => {
    const targetElement = document.getElementById('scrollTarget5');
    // 调用 Lenis 的滚动方法
    lenis.scrollTo(targetElement, {
      duration: 1.5, // 滚动持续时间（秒）
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
      lock: false, // 是否禁止用户滚动
    });
  });

  document.getElementById('scrollDom6').addEventListener('click', () => {
    const targetElement = document.getElementById('scrollTarget6');
    // 调用 Lenis 的滚动方法
    lenis.scrollTo(targetElement, {
      duration: 1.5, // 滚动持续时间（秒）
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
      lock: false, // 是否禁止用户滚动
    });
  });
})

