const generalError = (req,res,next)=>{
    res.status(404).send("Not Found")
}
export default generalError;