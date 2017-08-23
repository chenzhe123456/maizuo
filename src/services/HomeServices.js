import axios from 'axios'

import API from '../api'

// http://m.maizuo.com/v4/api/billboard/home?__t=1503197455737
function getHomeData(){
    return new Promise((resolve, reject)=>{
        axios.get(`${API.homeApi}?__t=${new Date().getTime()}`)
        .then((response)=>{
            //  console.log(response.data.data.billboards);
            var arr = response.data.data.billboards
            if(arr == null){
                getHomeData()
            } else {
                // 存到 sessionStorage 里面
                window.sessionStorage.setItem('lunbotu', JSON.stringify(response.data.data.billboards));

                resolve(response.data.data.billboards)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
// http://m.maizuo.com/v4/api/film/now-playing?__t=1503219862294&page=1&count=5
function nowPlayingData(){
    return new Promise((resolve, reject)=>{
        axios.get(`${API.nowPLaying}?__t=${new Date().getTime()}&page=1&count=5`)
        .then((response)=>{
            //  console.log(response.data.data.films);
            resolve(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

// http://m.maizuo.com/v4/api/film/coming-soon?__t=1503219862327&page=1&count=3
function willSoonData(){
    return new Promise((resolve, reject)=>{
        axios.get(`${API.comingSoon}?__t=${new Date().getTime()}&page=1&count=3`)
        .then((response)=>{
        //    console.log(response.data.data.films);
            resolve(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}



export default {
    getHomeData,
    nowPlayingData,
    willSoonData
}






















