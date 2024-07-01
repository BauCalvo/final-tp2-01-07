import XMemoryDAO from "./Memory/XMemoryDAO.js";

class Factory{
    constructor(){
        
    }

    static factory=(modo)=>{
        if(modo =="memory"){
            return {XDao:new XMemoryDAO()}
        }
    }
}

export default Factory;