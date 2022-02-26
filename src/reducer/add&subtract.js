const initalstate = 0;
const changethenumber = (state = initalstate, action) =>{
    switch(action.type) {
        case "Increment" : return state + action.payload;
        case "Decrement" : return state - action.payload;
        default : return state;
    }
}

export default changethenumber;