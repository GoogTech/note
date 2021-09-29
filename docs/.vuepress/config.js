module.exports = {
    lang: 'zh-CN',
    title: 'GoogTech',
    base: "/note/",
    description: 'GoogTech — CS Course Learning Note',
    // SEO
    head: [
        //icon
        ['link', { rel: 'icon', href: 'icon/favicon.ico' }],
        // ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon/apple-touch-icon.png' }],
        // ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon/favicon-32x32.png' }],
        // ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon/favicon-16x16.png' }],
        // ['link', { rel: 'manifest', href: '/icon/site.webmanifest' }],

        ['meta', { name: 'author', content: 'GoogTech' }],
        ['meta', { name: 'keywords', content: 'GoogTech, 408, CS Course Learning Note, https://goog.tech/note' }],
    ],
    // 搜索
    // 本地运行可正常显示, 但在Github Page上则无法正常显示(action构建vuepress时抛出异常 : useRouteLocale() is called without provider)
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
        logo: '/icon/apple-touch-icon.png',
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
                        link: '/data-structure/README.md',
                    },
                    {
                        text: '计算机网络',
                        link: '/computer-network/README.md',
                    },
                    {
                        text: '计算机组成原理',
                        link: '/computer-compose-principle',
                    }
                ],
            },
        ],
        // 侧边栏
        sidebar: {
            '/operating-system/': [
                {
                    text: '介绍',
                    children: [
                        '/operating-system/README.md',
                        '/operating-system/chapter01.md',
                        '/operating-system/chapter02.md',
                        '/operating-system/chapter03.md',
                        '/operating-system/chapter04.md',
                        '/operating-system/chapter05.md',
                    ],
                },
            ],
            '/data-structure/': [
                {
                    text: '介绍',
                    children: [
                        '/data-structure/README.md',
                        '/data-structure/chapter01.md',
                        '/data-structure/chapter02.md',
                        '/data-structure/chapter03.md',
                        '/data-structure/chapter04.md',
                        '/data-structure/chapter05.md',
                        '/data-structure/chapter06.md',
                        '/data-structure/chapter07.md',
                        '/data-structure/chapter08.md',
                        '/data-structure/chapter09.md',
                    ],
                },
            ],
            '/computer-network/': [
                {
                    text: '介绍',
                    children: [
                        '/computer-network/README.md',
                        '/computer-network/chapter01.md',
                        '/computer-network/chapter02.md',
                        '/computer-network/chapter03.md',
                        '/computer-network/chapter04.md',
                        '/computer-network/chapter05.md',
                        '/computer-network/chapter06.md',
                    ],
                },
            ],
        },
    },
}
