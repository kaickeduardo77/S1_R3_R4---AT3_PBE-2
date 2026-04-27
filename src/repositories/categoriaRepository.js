import { connection } from "../configs/database.js";

const categoriaRepository = {
    criar: async (categoria) => {
        const sql = `
            INSERT INTO categorias (Nome, Descricao)
            VALUES (?, ?)
        `;

        const values = [
            categoria.nome,
            categoria.descricao ?? null
        ];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    editar: async (categoria) => {
        const sql = `
            UPDATE categorias
            SET Nome = ?, Descricao = ?
            WHERE Id = ?
        `;

        const values = [
            categoria.nome,
            categoria.descricao ?? null,
            categoria.id
        ];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    selecionar: async () => {
        const sql = 'SELECT * FROM categorias';

        const [rows] = await connection.execute(sql);
        return rows;
    },

    deletar: async (id) => {
        const sql = 'DELETE FROM categorias WHERE Id = ?';

        const [rows] = await connection.execute(sql, [id]);
        return rows;
    }
};

export default categoriaRepository;