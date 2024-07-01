import Factory from "../DAOs/Factory.js";
import {MODO} from "../config/config.js";


class SondaApi{
    constructor(){
        this.factory=Factory.factory(MODO)
    }
    static MIN_SONDA =1;
    static MAX_SONDA =5; 
    static MIN_TEMP =-20; 
    static MAX_TEMP =100; 



    //validar la info
    create=async(info)=>{
        try{
            if(info.id<SondaApi.MIN_SONDA || info.id>SondaApi.MAX_SONDA || 
                info.temperatura<SondaApi.MIN_TEMP || info.temperatura>SondaApi.MAX_TEMP){
                throw new Error("datos no válidos")
            }
            const data = await this.factory.SondaDao.create(info)
            return await data;    
        }
        catch(error){
            throw error;
        }
    }

    getAll=async()=>{
        try{
            const data = await this.factory.SondaDao.getAll()
            return await data;    
        }
        catch(error){
            throw error;
        }
    }

    getById=async(id)=>{
        try{
            if(id<SondaApi.MIN_SONDA || id>SondaApi.MAX_SONDA){
                throw new Error("Número de sonda incorrecto")
            }

            const data = await this.factory.SondaDao.getById(id)
            return await data;    
        }
        catch(error){
            throw error;
        }
    }
}

export default SondaApi;