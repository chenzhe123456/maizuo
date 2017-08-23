import axios from 'axios';

import Api from '../api'

// 卖座商城http://aura.maizuo.com/api/ad/list
function getShopData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.shopApi}`)
        .then((res)=>{
            // console.log(res.data.data)
            var arrs = []
            var arr = res.data.data
            var arr1 = arr.splice(0,8)
            var arr2 = arr.splice(0,2)
            var arr3 = arr.splice(0,2)
            var arr4 = arr.splice(0,)
            arrs.push(arr1,arr2,arr3,arr4)
            resolve(arrs)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
// 卖座商城http://aura.maizuo.com/api/recommend/home?page=1&num=20
function getShopGoods(){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.shopGoods}?page=1&num=20`)
        .then((res)=>{
            // console.log(res.data.data.list)
            resolve(res.data.data.list)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

}
export default {
    getShopData,
    getShopGoods
}

















