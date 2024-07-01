import Factory from "../DAOs/Factory.js";
import {MODO} from "../config/config.js";


class XApi{
    constructor(){
        this.factory=Factory.factory(MODO)
    }

    //validar la info
    create=async(info)=>{
        try{
            const data = await this.factory.XDao.create(info)
            return await info;    
        }
        catch(error){
            throw error;
        }
    }
}

export default XApi;