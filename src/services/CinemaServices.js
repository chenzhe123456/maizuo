import axios from 'axios'

import api from '../api'

// 全部影院http://m.maizuo.com/v4/api/cinema?__t=1503314314044
function getCinemaData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${api.cinemaApi}?__t=${new Date().getTime()}`)
        .then((res)=>{            
            var arr = res.data.data.cinemas
            // console.log(arr)
            if(arr == null ){
                getCinemaData()
            }else{
            var quyus = [];
            var arrList = [];
            arr.map((item) => {
                var quyu = item.district.name;
                quyus.push(quyu);
            })
            quyus = Array.from(new Set(quyus))

            quyus.forEach(function(item) {
                var obj = {};
                obj.name = item;
                obj.list = [];
                obj.style = 'none'

                arr.forEach(function(items) {
                    if (items.district.name === item) {
                        obj.list.push(items);
                    }
                })
                arrList.push(obj);
            })
            // 存到 sessionStorage 里面
            window.sessionStorage.setItem('arrt',JSON.stringify(arrList))
            resolve(arrList)
            }
           
        })
        .catch((error)=>{
            console.log(error)
        })
    })



}

export default{
    getCinemaData
}

