module.exports = {
    lang: 'zh-CN',
    title: '',
    base: '/note/',
    description: 'GoogTech — CS Learning Note',

    themeConfig: {
        logo: 'images/logo.png',
        // 搜索框
        search: true,
        searchMaxSuggestions: 10,
        // Github
        repo: 'googtech/note',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        // 顶部导航栏
        navbar: true,
        nav: [
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ]
    },
}
