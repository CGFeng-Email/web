document.addEventListener('DOMContentLoaded', function () {
    // 获取所有标签按钮和内容面板
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabsContent = document.getElementById('tabsContent');

    // 初始设置内容高度
    updateTabHeight();

    // 为每个标签按钮添加点击事件
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // 添加活动状态到当前按钮和对应面板
            btn.classList.add('active');
            const activePanel = document.getElementById(btn.dataset.tab);
            activePanel.classList.add('active');

            // 更新内容容器高度
            updateTabHeight();
        });
    });

    // 更新内容高度函数
    function updateTabHeight() {
        const activePanel = document.querySelector('.tab-panel.active');

        if (activePanel) {
            // 获取活动面板的实际高度
            const height = activePanel.scrollHeight;

            // 应用高度过渡
            tabsContent.style.height = height + 'px';

            // 更新高度显示
            const heightValue = document.getElementById('heightValue' + activePanel.id.slice(-1));
            if (heightValue) {
                heightValue.textContent = height + 'px';
            }
        }
    }
});