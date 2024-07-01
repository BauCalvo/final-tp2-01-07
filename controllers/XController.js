import XApi from "../Api/XApi.js";




class XController{
    constructor(){
        this.xApi = new XApi();
    }

    //validar aca que la info no sea null
    create = async(req,res)=>{
        try{
            const {info}=req.body
            const data= await this.xApi.create(info)
            res.status(200).send({message: data})
        }
        catch(error){
            res.status(422).send({message:"controller Error"})
        }}
}
export default XController;