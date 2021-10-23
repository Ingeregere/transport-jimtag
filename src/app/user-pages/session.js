export const isAuthenticated=()=>{
    if(typeof window =='undefined'){
        return false
    }
    if(localStorage.getItem('jimtag')){
        return JSON.parse(localStorage.getItem('jimtag'))
    }
    else{
        return false
    }
}

export const authenticate=(data,next)=>{
    if(typeof window !=='undefined'){
        localStorage.setItem('jimtag',JSON.stringify(data))
        next()
    }
}