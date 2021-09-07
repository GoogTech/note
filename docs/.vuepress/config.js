module.exports = {
    lang: 'zh-CN',
    title: '',
    base: '/note/',
    description: 'GoogTech — CS Learning Note',
    
    // 搜索
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
    ],

    themeConfig: {
        // logo
        logo: 'images/logo.png',
        // Github
        repo: 'googtech/note',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        // 顶部导航栏
        navbar: [
            // 嵌套 Group - 最大深度为 2
            {
                text: '408课程',
                children: [
                    {
                        text: '操作系统',
                        link: '/operating-system/README.md',
                    },
                    {
                        text: '数据结构',
                        link: '/data-structure',
                    },
                    {
                        text: '计算机网络',
                        link: '/computer-network',
                    },
                    {
                        text: '计算机组成原理',
                        link: '/computer-compose-principle',
                    }
                ],
            },
        ],
    },
}
