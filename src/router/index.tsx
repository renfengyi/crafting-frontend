const IRouter = [
    {
        title:'首页',
        icon:'index',
        key:'/index/home'
    },
    {
        title:'资产',
        icon:'laptop',
        key:'/index/staking',
        child:[
            // {key:'/index/user/user',title:'用户列表',icon:''},
            // {key:'/index/user/detail',title:'用户详情',icon:''}
        ]
    }
];

export default IRouter;