// 引入axios
import axios from 'axios'
// 导出封装好的axios请求方法。这里的confng是请求的一些配置信息，交由调用者写入
export function axios1(confing) {
  // 创建实例
  const ax1 = axios.create({
    baseURL: 'http://127.0.0.1:3001',
    timeout: 5000
  })
  // axios拦截器
  // 1 请求拦截器。第一个参数时请求成功拦截confing信息，第二个参数是请求失败拦截错误信息
  ax1.interceptors.request.use(confing => {
    // 拦截下来的时请求的配置信息，并且拦截下来后要记得return 出去，不然信息无法到达服务器的
    // 拦截的意义：可以在这对一些信息进行修改，获取添加一些动画效果
    // console.log(confing);
    return confing
  }, err => {
    console.log(err);
  })
  // 2 响应拦截。第一个参数拿到的是响应成功的结果，第二个是响应失败的信息
  ax1.interceptors.response.use(res => {
    // 在这里拦截的信息也要返回回去，不然调用那边是拿不到结果的
    // 在这里进行拦截可以对结果进行一些预处理
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })
  // 发送真正的请求
  // 问：要怎么给调用者拿到请求的结果呢？答：返回回去就可以了
  // 方法一：promise法。可以通过then和catch拿到成功和失败的结果
  //   return new Promise((reslove, reject) => {
  //     ax1(confing).then(res=>{
  //         reslove(res)
  //     })
  //   })

  // 方法二，直接返回实例方法
  return ax1(confing)


}