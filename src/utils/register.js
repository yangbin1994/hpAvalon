import { forEach } from 'lodash'

const avalon = window.avalon

export const registerModel = ({
    pathname,
    state,
    eventsHandle,
    watchs,
    subscriptions: {
        listen, setUp
    }
}) => {
    // 判断逻辑model
    const logic = !pathname

    if (!logic && avalon._store[pathname]) {
        return console.error(`pathname must be unique !`)
    }

    if (!logic) {
        avalon.router.add(`./models/${pathname}`, function () {
            avalon._rootvm.curPath = pathname
            avalon._rootvm.curPage = `<xmp is="ms-view" class="view-container"><xmp>`

            // this里面能拿到如下东西:
            // path: 路径
            // query: 一个对象，就是？后面的东西转换成的对象
            // params: 一个对象， 我们在定义路由规则时，那些以冒号开始的参数组成的对象
            listen(this)
        })
    }

    /**
     * 注册vm
     */
    const vm = avalon._store[pathname] = {
        html: require(`./routes/${pathname}`),
        vm: avalon.define({
            ...state,
            ...eventsHandle
        })
    }

    /**
     * 监听vm'属性change
     */
    forEach(watchs, (afterChange, fieldName) => {
        vm.$watch(fieldName, afterChange)
    })

    // model的启动函数
    setUp()
}


export const registerCmp = ({
    name,
    template,
    defaults
}) => {
    avalon.component(name, {
        template,
        defaults
    })
}