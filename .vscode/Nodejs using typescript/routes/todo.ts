import {Router} from 'express';

import {Todo} from '../models/todo'

const todos: Todo[]= [];

const router = Router()

router.get('/',(_req: any, _res: any, _next: any) => {

_res.status(200).json.responce({todos:todos})

});

router.post('/todos',(_req: any, _res: any, _next: any)=>{
    const newtodos : Todo={
        id: new Date().toISOString(),
        text: _req.body.text
    }

    _res.status(201).json.responce({todos:todos})
    })
    
export default router;