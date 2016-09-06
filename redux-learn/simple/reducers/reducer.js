import { GET_LIST,ADD_INFO } from '../actions/index'

const defaultState={
    infoList:[]
}

export default function infolist(state=defaultState,action){
    switch(action.type){
        case GET_LIST:
            console.log("action",action)
            return {
                infoList:action.payload.data
            }
        case ADD_INFO:
            console.log("action",action.form)
            return {
                state:state.push(form)
            }
        default :
            return state
    }
}
