const initalstate = 1;
const multNumber = (state = initalstate, action) =>{
    switch(action.type) {
        case "MULT" : return state * action.payload;
        case "DIVI" : return state / action.payload;
        default : return state;
    }
}

export default multNumber;