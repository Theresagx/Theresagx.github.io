$(document).ready(function () {
    try {
        $("#page-header").ripples({
            resolution: 512,
            dropRadius: 10, //px
            perturbance: 0.04,
        });
    } catch (e) {
        $(".error").show().text(e);
    }
});


/*
作者: 花猪
链接: https://cnhuazhu.top/butterfly/2021/02/24/Hexo%E9%AD%94%E6%94%B9/Hexo%E5%A2%9E%E6%B7%BB%E6%B0%B4%E6%B3%A2%E8%8D%A1%E6%BC%BE%E6%95%88%E6%9E%9C/
    来源: 花猪のBlog
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/
