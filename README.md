这是一个移动端的网页学习项目
===

# 暂时没有什么想说明的，哈哈哈

# 实现 App.vue 组件中的功能
1. 顶部 Header 使用的是 MintUI 中的Header
2. 底部 Topbar 使用的是 Mui 中的 Topbar.html
3. 修改顶部的导航为 router-link 
4. 底部图标高亮通过添加路由 linkActiveClass 为 mui-active

# 实现 HomeContainer.vue 的功能
1. 使用 MintUI 的 Swipe 组件实现轮播图效果
2. 实现 ajax 从服务器获取最新图片的json数据，然后解析渲染
3. 轮播图的图片是一个链接点击可以访问