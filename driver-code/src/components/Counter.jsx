import { useEffect, useState } from "react";


export function Counter () {
    const [count , setCount] = useState(10);
    console.log("6");
     
    // console.log("set");
    useEffect(()=>{
       const id  =  setInterval(()=> {
            console.log("11");
            setCount((prev) => {
                if(prev === 1){
                    clearInterval(id);
                }
                return prev -1;
            }) 
        },1000);
      
       console.log("12");
        return (() => {
           console.log("unmount");
            console.log("13");
           clearInterval(id);
        });
    },[]);
  
 //console.log('count 2');
  console.log("14");
    return (<h1>Counter : {count}</h1>)
}