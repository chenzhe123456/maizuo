import axios from 'axios'

import Api from '../api'

// http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
function getMoviesData(i){
    //  console.log(i)
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.moviesApi}?page=${i}&count=7`)
        .then((response)=>{
            // console.log(response.data.data.films)
            resolve(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
// 即将上映  http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7

function getWillData(j){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.moviesWillApi}?page=${j}&count=7`)
        .then((response)=>{
            // console.log(response.data.data.films)
             var datas = response.data.data.films
             var obj = {}
             var date = null
             var mm = null
             var dd = null
             var ww = null
             var arrw = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
             datas.map((item,index)=>{
                obj =  item
                date = new Date(obj.premiereAt)
                mm = date.getMonth() + 1
                obj.mm = mm
                dd = date.getDate()
                obj.dd = dd
                ww = date.getDay()
                arrw.map((item,index)=>{
                    if(ww == index){
                    obj.ww = item
                    }
                })    
            })
 
            resolve(datas)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

export default{
    getMoviesData ,
    getWillData 
}