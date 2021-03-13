//action types
//using this action types, our reducer will update the store.

const GOODMORNING="GOODMORNING";
const GOODAFTERNOON="GOODAFTERNOON";
const GOODNIGHT="GOODNIGHT";

let sayGMAction=()=>{
    console.log("Testing123....");
    return{
        type: GOODMORNING,
    };
};
let sayGAAction=()=>{
    return{
        type: GOODAFTERNOON,
    };
};
let sayGNAction=()=>{
    return{
        type: GOODNIGHT,
    };
};
export { GOODMORNING,GOODAFTERNOON,GOODNIGHT,sayGMAction,sayGAAction,sayGNAction};