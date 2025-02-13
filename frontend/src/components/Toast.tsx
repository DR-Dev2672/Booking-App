import { useEffect } from "react";

type ToastProps={
    message:string,
    type:"SUCCESS"|"ERROR",
    onClose:()=>void
};




const Toast=({message,type,onClose}:ToastProps)=>{
    

    useEffect(()=>{
        const timer=setTimeout(()=>{
        onClose();
        },5000)

        return ()=>{
            clearTimeout(timer);
        }

    },[onClose])

    const styles=type==="SUCCESS"?"fixed top-5 right-5 z-50 bg-green-500 text-white px-5 py-2 rounded max-w-md":
    "fixed top-5 right-5 z-50 bg-red-500 text-white px-5 py-2 rounded max-w-md";

    return(
        <div className={styles}>
            <div className="flex justify-center items-center">
                <span className="text-lg font-semibold">{message}</span>
            </div>
        </div>


    )
}

