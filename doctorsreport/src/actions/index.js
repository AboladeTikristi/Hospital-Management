
const allDoctors =(num)=>{
    // returns compulsorily an object
    return{
        type:"STORE",
        payload:num
    }
}
const PresentPatient=(here)=>{
    // returns compulsorily an object
    return{
        type:"KEEP",
        payload:here
    }
}
export{allDoctors,PresentPatient}