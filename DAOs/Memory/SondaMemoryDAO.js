class SondaMemoryDAO {
    constructor(){
        this.SondasMemory=[]
    }

    create=async(info)=>{
        try{
            this.SondasMemory.push(info)
            console.log(this.SondasMemory);
            return  info  
        }
        catch(error){
            throw error;
        }
    }

    getAll=async()=>{
        try{
            return  this.SondasMemory
        }
        catch(error){
            throw error;
        }
    }
    getById=async(id)=>{
        try{
            const sondas = this.SondasMemory.filter(sonda => sonda.id == id)
            if(sondas.length == 0){
                throw new Error("Sonda no encontrada")
            }
            return sondas
        }
        catch(error){
            throw error;
        }
    }

}
export default SondaMemoryDAO;