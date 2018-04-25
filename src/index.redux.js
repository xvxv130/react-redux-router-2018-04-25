const ADD_GUN='加机关枪'
const REMOVE_GUN='减机关枪'


// reducer
export function counter(state=10,action){
    switch(action.type){
        case ADD_GUN:
            return state+1
        case REMOVE_GUN:
            return state-1
        default:
            return 10  
    }
}


// action-creaters
export function Addgun(){
    return (
        {
            type:ADD_GUN
        }
    )
}

export function Removegun(){
    return (
        {
            type:REMOVE_GUN
        }
    )
}

export function addgunasync(){
    return test=>{
        setTimeout(()=>{ 
            test(Addgun())
        },2000)
    }
}