import { db } from '.../config/Database.js';

const produtoRepository = {

    criar: async (produto) => {
        const sql = ` INSERT INTO produtos (IdCategoria, Nome=?, Valor=?, CaminhoImagem=?, DataCad=?)   VALUES  NOW())`;
        const values = [produto.idCategoria, produto.nome,produto.valor,produto.caminhoImagem ];
        const [rows] = await db.execute(sql, values);
        return rows;
    },

    editar: async (produto) => {
        const sql = `UPDATE produtos SET IdCategoria=?, Nome=?, Valor=?, CaminhoImagem=?   WHERE Id=? `;
        const values = [ produto.idCategoria, produto.nome, produto.valor, produto.caminhoImagem, produto.id ];
        const [rows] = await db.execute(sql, values);
        return rows;
    },

    selecionar: async () => {
        const sql = 'SELECT * FROM produtos';
        const [rows] = await db.execute(sql);
        return rows;
    },

    deletar: async (id) => {
        const sql = 'DELETE FROM produtos WHERE Id=?';
        const [rows] = await db.execute(sql, [id]);
        return rows;
    }
};

export default produtoRepository;