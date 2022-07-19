const initState={
    allDoctors:{},
    PresentPatient:{},
    count:0,
    name:"hey",
    arr:[
        {name:"phil"}
    ]
}
// const student =(state=initState,action)=>{
//     return state
// }
const counter=(state=initState,action)=>{
    if (action.type=="STORE") {
        return {
            // to retai  previous citizens of the state
            ...state,
            allDoctors:action.payload
        }
        
    }
    else if (action.type=="KEEP") {
        return {
            // to retai  previous citizens of the state
            ...state,
            PresentPatient:action.payload
        }
        
    }

    // else if(action.type=="DECREASE"){
    //     return{
    //         // to retai  previous citizens of the state
    //         ...state,
    //         count:state.count-1}
    // }
    else{

        return state;
    }
}
export default counter;