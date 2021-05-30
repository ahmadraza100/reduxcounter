

export const Increment =(arg)=>{
    return{
        type:"Incc",
        payload:arg
    }

}


export const Decrement =(arg)=>{
    return{
        type:"Decc",
        payload:arg
    }

}

export const Reset =(arg)=>{
    return{
        type:"Ress",
        payload:arg
    }

}