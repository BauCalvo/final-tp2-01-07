import SondaMemoryDAO from "./Memory/SondaMemoryDAO.js";

class Factory{
    constructor(){
        
    }

    static factory=(modo)=>{
        if(modo =="memory"){
            return {SondaDao:new SondaMemoryDAO()}
        }
    }
}

export default Factory;