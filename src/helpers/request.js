import axios from 'axios'
import { Message} from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'appliction/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials  = true //处理跨域cookies
console.dir(axios)
export default function request(url,type='GET',data={}){
    return new Promise((resolve,reject)=>{
        let option = {
            url,
            method:type
        }
        console.log(type)
        if(type.toLowerCase() === 'get'){
            option.parmas = data
        }else{
            option.data = data
        }
        axios(option).then((response)=>{
            if(response.data.status === 'ok'){
                resolve(response.data)
            }else{
                Message.error(response.data.msg)
                reject(response.data)
            }
        }).catch(err=>{
            Message.error(err,'网络异常')
            reject({msg:'网络异常'})
        })
    })
}