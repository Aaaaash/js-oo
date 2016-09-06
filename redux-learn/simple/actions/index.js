import axios from 'axios'

const GET_URL='/info.json'
export const GET_LIST='GET_LIST'
export const ADD_INFO='ADD_INFO'
export function getList(){
    let request=axios.get(GET_URL)
    return {
        type:GET_LIST,
        payload:request
    }
}

export function addInfo(from){
    return {
        type:ADD_INFO,
        payload:{
            title:from.title,
            age:from.age,
            school:from.school,
            sex:from.sex
        }
    }
}
