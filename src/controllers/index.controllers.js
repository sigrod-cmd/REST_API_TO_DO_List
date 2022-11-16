import { pool } from '../db.js';

export const data = async (req , res) =>  {
    const [resultado] =  await pool.query('select "Hola" as result')

    res.json(resultado);
}