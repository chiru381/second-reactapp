import {GOODMORNING, GOODAFTERNOON, GOODNIGHT} from '../WishAction/WishAction';
let initialState={
    message: "Hello",
};
let wishReducer=(state=initialState, action)=>{
    switch(action.type){
        case GOODMORNING:
            return { message: "GoodMorning-Reducer"};
        case GOODAFTERNOON:
            return { message: "GoodAfternoon-Reducer"};
        case GOODNIGHT:
            return { message: "GoodNight-Reducer"};
        default:
            return state;
    }
};
export {wishReducer};