// // 兼容ie8+
// import './utils/polyfills'
// import * as avalon from 'avalon2'
// import { forEach } from 'lodash'
// import { MODEL_PATHS, CMP_PATHS } from './consts'
// import { registerModel, registerCmp } from './utils'

// /**
//  * import * as avalon from 'avalon2'
//  */
// window.avalon = avalon

// /**
//  * 开始配置
//  */
// avalon.config({
//     debug: true
// })

// /**
//  * 注册model
//  */
// avalon._rootvm = avalon.define({
//     $id: 'root',
//     //当前路径
//     curPath: '',
//     //当前页面,xmp组件
//     curPage: ''
// })
// forEach(MODEL_PATHS, model => registerModel(model))

// /**
//  * 注册component
//  */
// forEach(CMP_PATHS, component => registerCmp(component))

// /**
//  * 路由启动
//  * avalon.router.navigate('/bb/second', 0)
//  * avalon.history.setHash('/bb/second')
//  */
// avalon.history.start({
//     root: '/'
// })

// /**
//  * 扫描Dom
//  */
// avalon.ready(() => avalon.scan(document.body))

import moment from 'moment'
import "babel-polyfill"
import 'bootstrap/dist/css/bootstrap.css'
import './index.less'


import home from './models/home'

home()