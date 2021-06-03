import {Router} from 'express';
import ControlllerTeste from './app/controllers/ControllerTeste';


const routes = Router();

routes.get('/', ControlllerTeste.indexget ); 

routes.post('/teste',ControlllerTeste.storepost);

routes.put('/alterar',ControlllerTeste.updateput);

routes.delete('/deletar',ControlllerTeste.delete);
   

export default routes;