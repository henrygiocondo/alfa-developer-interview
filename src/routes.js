import { Router } from 'express';

import ODataController from './app/controllers/ODataController';

const routes = Router();

routes.get('/searchAiports', ODataController.searchAiports);
routes.get('/searchUser', ODataController.searchUser);
routes.post('/create', ODataController.create);
routes.delete('/delete', ODataController.delete);

export default routes;
