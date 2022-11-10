import { useEffect } from "react"

const useTitle =title =>{
    useEffect(()=>{
        document.title=`${title} -photograper sport`
    },[title])
}

export default useTitle;