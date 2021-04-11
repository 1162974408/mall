// vue.config里面的东西会和node_modules里面的对应的配置文件整合在一起的
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'store': '@/store',
                'views': '@/views',
                'components': '@/components',
                'network': '@/network'
            }
        }
    }
}