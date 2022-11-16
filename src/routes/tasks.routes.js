import { Router } from 'express'
import { 
    getTasks,
    getTask,
    createTasks, 
    updateTasks, 
    deleteTasks 
} from '../controllers/tasks.controllers.js'

const router = Router();

router.get('/tareas', getTasks);
router.get('/tareas/:id', getTask);
router.post('/tareas', createTasks);
router.patch('/tareas/:id', updateTasks );
router.delete('/tareas/:id', deleteTasks);

export default router