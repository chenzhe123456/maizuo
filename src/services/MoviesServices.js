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
            resolve(response.data.data.films)
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