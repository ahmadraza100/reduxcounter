
export const initialState = 0;



const NumCounter = (state = initialState, { type, payload }) => {
    
    localStorage.setItem('value',state);
    switch (type) {
        case "Incc":
            return state = state + 1;
        case "Decc":
            if(state===0){
                return state=0;
            }
            else{
               return state = state - 1;

            }
        case "Ress":
            return state = 0;
        default:
            return state;
    }
}

export default NumCounter;
