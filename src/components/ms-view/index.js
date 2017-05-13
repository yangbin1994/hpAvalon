export default {
    name: 'ms-view',
    template: '<div ms-html="@page" class="ms-view"></div>',
    defaults: {
        page: '&nbsp;',
        onReady: function (e) {
            const path = window._rootvm.curPath
            const state = window._store[path]
            //必须等它扫描完这个template,才能替换
            setTimeout(() => e.vmodel.page = state.html)
        },
        onDispose: function (e) {
            const path = window._rootvm.curPath
            const state = window._store[path]
            const vm = state.vm
            const render = vm.render
            render && render.dispose()
        }
    }
}