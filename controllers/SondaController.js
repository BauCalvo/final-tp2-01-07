import SondaApi from "../Api/SondaApi.js";
import dateUtils from "../Utils/dateUtils.js";


class SondaController {
    constructor() {
        this.sondaApi = new SondaApi();
    }

    //validar aca que la info no sea null
    create = async (req, res) => {
        try {
            const { id, temperatura } = req.body;


            const fecha = dateUtils.getFechaActual();
            const hora = dateUtils.getHoraActual();
            const info = {
                id: id,
                temperatura: temperatura,
                fecha: fecha,
                hora: hora
            };
            const data = await this.sondaApi.create(info)
            res.status(200).send(data)
        }
        catch (error) {
            res.status(422).send(error.message)
        }
    }

    getAll = async (req, res) => {
        try {
            const data = await this.sondaApi.getAll()
            res.status(200).send(data)
        }
        catch (error) {
            res.status(422).send(error.message)
        }
    }
    getById = async (req, res) => {
        try {
            const { id } = req.params;
            
            const data = await this.sondaApi.getById(id)
            res.status(200).send(data)
        }
        catch (error) {
            res.status(422).send(error.message)
        }
    }

}
export default SondaController;