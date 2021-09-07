module.exports = {
    lang: 'zh-CN',
    title: 'GoogTech',
    base: '/note/',
    description: 'GoogTech — CS Learning Note',

    themeConfig: {
        // logo: 'https://vuejs.org/images/logo.png',
        logo: 'images/logo.png',
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' },    
            
            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '分类',  //默认显示        
                ariaLabel: '分类',   //用于识别的label
                items: [
                    { text: '文章', link: '/pages/folder1/test1.md' },  
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: '琐碎', link: '/pages/folder2/test4.md' },
                ]
            },
            { text: '功能演示', link: '/pages/folder1/test3.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/dwanda' },
        ],
    },
}
