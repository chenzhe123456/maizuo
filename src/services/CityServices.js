import axios from 'axios'

import Api from '../api'
// 城市选择// http://m.maizuo.com/v4/api/city?__t=1503660061573
function getCityData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.cityApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            var arr = res.data.data.cities
            var arrs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
            var Arrs = []   
                arrs.map((item,index)=>{
                    var str = ''
                    var first = ''
                    var obj = {}
                    var Arr = []
                    obj.font = item
                    obj.city = Arr
                    arr.map((items,index)=>{
                        str = items.pinyin
                        first = str.slice(0,1)
                        if(item == first){
                            obj.city.push(items)                            
                        }                        
                }) 
                 return Arrs.push(obj)                   
            })
            // console.log(Arrs)     
            resolve(Arrs)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

}

export default{
   getCityData 
}

















































