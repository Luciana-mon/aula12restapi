import {listaproduto} from './produtos';
import {departamento} from './departamento';


class ControllerTeste{

    async storepost(req, res){
        const {name, age} = req.body

        if (!name){
            return res.status(401).json({error: 'Esta faltando algo'})
        }
        return res.json({name, age})

    }
    async indexget(req, res){
        
        if (!produto){
            return res.status(404).json({error: 'Esta faltando algo'})
        } else {
        return res.status(200).json({produto})
        }
    }

    // async indexget(req, res){
    //     const produto = { codProduto: 25659,
    //                       descricao: "SPEAKER AMAZON ECHO DOT 4 GER ALEXA/WIFI AZUL",
    //                       preco: 38.5,
    //                       qtdEstoque: 0,
    //                       disponivel: "nao",
    //                       emDestaque: "nao",
    //                       departamento: {
    //                       idDepto: 9,
    //                       nomeDepto: "Informatica" }
    // }   return res.json({produto})

    async updateput(req, res){

    }

    async delete(req, res){

    }

}

export default new ControllerTeste();