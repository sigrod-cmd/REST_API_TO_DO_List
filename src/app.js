import express from "express";
import  tasksRoutes  from './routes/tasks.routes.js';
import indexRoutes  from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api', tasksRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        MessageEvent: 'Endpoint Not found'
    })
});

export default app;