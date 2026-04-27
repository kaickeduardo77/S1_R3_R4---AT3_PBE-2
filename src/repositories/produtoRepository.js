import { connection } from "../config/database.js";

const produtoRepository = {
    criar: async (produto) => {
        const sql = `
            INSERT INTO produtos (idCategoria, nomeProduto, valorProduto, caminhoImag)
            VALUES (?, ?, ?, ?)
        `;

        const values = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.vinculoImagem
        ];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    editar: async (produto) => {
        const sql = `
            UPDATE produtos
            SET idCategoria = ?, nomeProduto = ?, valorProduto = ?
            WHERE id = ?
        `;

        const values = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.id
        ];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    selecionar: async () => {
        const sql = `SELECT * FROM produtos`;

        const [rows] = await connection.execute(sql);
        return rows;
    },

    deletar: async (id) => {
        const sql = `DELETE FROM produtos WHERE id = ?`;

        const values = [id];

        const [rows] = await connection.execute(sql, values);
        return rows;
    }
};

export default produtoRepository;