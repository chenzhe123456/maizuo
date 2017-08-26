import {createStore} from 'redux'
    
let reducer = function(state,action){
    
    if( state == null ){
          state = {
           city:'深圳',
           msg : [{username:'张三'},{password:'123456'}],
          }
    }
    if(action.type == 'changeCity' ){
        state.city = action.val
    }
    //  console.log(state)
   return state
  
}

export default createStore(reducer)















