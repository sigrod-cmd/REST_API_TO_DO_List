import { pool } from "../db.js";

export const createTasks = async (req, res) => {
    
    try {
        const { Descripcion, Estado, Contenido } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO tareas (Descripcion, Estado, Contenido) VALUES (?, ?, ? )",
            [Descripcion, Estado, Contenido]
        );
        res.send({
            Id: rows.insertId,
            Descripcion,
            Estado,
            Contenido,
        });
    } catch (error) {
        return res.status(500).json({
            MessageEvent: "Algo a salido mal"
        })
    }
};

export const getTask = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tareas WHERE id = ?", [
        req.params.id,
    ]);

    if (rows.length <= 0)
        return res.status(404).json({
            MessageEvent: "No se encontro ninguna tarea",
        });
    res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            MessageEvent: 'Algo salio mal'
        })
        
    }
};

export const getTasks = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tareas");
    res.json(rows);
    } catch (error) {
        return res.status(500).json({
            MessageEvent: 'Algo salio mal'
        })
    }
};

export const deleteTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
            "DELETE FROM tareas WHERE id = ? ",
            req.params.id
        );
        if (result.affectedRows <= 0)
            return res.status(404).json({
                MessageEvent: "Tarea no encontrada",
            });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            MessageEvent: 'Algo salio mal'
        })
    }
};

export const updateTasks = async (req, res) => {
    const { id } = req.params;
    const { Descripcion, Estado, Contenido } = req.body;
    try {
        const [result] = await pool.query(
        "UPDATE tareas SET Descripcion = IFNULL(?, Descripcion) , Estado = IFNULL(?, Estado) , Contenido = IFNULL(?, Contenido) WHERE id = ?",
        [Descripcion, Estado, Contenido, id]
    );

    if (result.affectedRows === 0)
        return res.status(404).json({
            MessageEvent: "Tarea no encontrada",
        });

    const [rows] = await pool.query("SELECT * FROM tareas WHERE id = ?", [id]);

    res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            MessageEvent: 'Algo salio mal'
        })
    }
};
