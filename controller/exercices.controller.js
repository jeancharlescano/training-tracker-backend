import { pool } from "../config/database.js";

pool.connect

export const createExercice = async (req, _res) => {
    const { libelle, description, image } = req.body;

    let result = null;
    await pool
        .query (
            "INSERT INTO exercices (libelle, description,image VALUES ($1, $2, $3;",
            [libelle, description, image]
        ) 
        .then ((_response) => {
            result = true
        })
        .catch((error) => {
            console.log(error);
            result = false
        })
}

export const getAllExercices= async (_req, res) => {
    let result = null;

    await pool
        .query("SELECT * FROM exercices")
        .then((res) => {
            result = res.rows;
        })
        .catch((error) => console.log(error));
    return res.json(result);
};

export const getExerciceById = async (req, res) => {
    const { id } = req.params;

    let result = null;
    await pool
        .query("SELECT * FROM exercices WHERE id = $1;", [id])
        .then((res) => {
            result = res.rows;
        })
        .catch((error) => console.error(error.stack));
    return res.json(result);
};

export const updateExerciceById = async (req, res) => {
    const { id } = req.params;
    const { libelle, description, image } =
        req.body;

    let result = null;
    pool.query(
        "UPDATE exercices SET libelle = $1, description = $2, image = $3 WHERE id = $4;",
        [libelle, description, image, id]
    )
        .then((_res) => {
            result = true;
        })
        .catch((error) => {
            console.log(error);
            result = false;
        });
    return res.json(result);
};

export const deleteExerciceById = async (req, res) => {
    const { id } = req.params;

    let result = null;
    await pool
        .query("DELETE FROM exercices WHERE id = $1;", [id])
        .then((res) => {
            result = res.rows;
        })
        .catch((error) => console.error(error.stack));
    return res.json(result);
};