import { connection } from '../config/database.js';

const clienteRepository = {

    criar: async (cliente, telefone, endereco) => {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            const sqlCli = `
                INSERT INTO cliente (Nome, CPF)
                VALUES (?, ?)
            `;
            const valuesCli = [cliente.nome, cliente.cpf];
            const [rowsCli] = await conn.execute(sqlCli, valuesCli);

            const clienteId = rowsCli.insertId;

            const sqlTel = `
                INSERT INTO telefones (ClienteId, NumeroTel)
                VALUES (?, ?)
            `;
            const valuesTel = [clienteId, telefone.numero];
            const [rowsTel] = await conn.execute(sqlTel, valuesTel);

            const sqlEnd = `
                INSERT INTO enderecos
                (ClienteId, CEP, Logradouro, Numero, Complemento, Bairro, Cidade, UF)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const valuesEnd = [
                clienteId,
                endereco.cep,
                endereco.logradouro,
                endereco.numero,
                endereco.complemento,
                endereco.bairro,
                endereco.cidade,
                endereco.uf
            ];

            const [rowsEnd] = await conn.execute(sqlEnd, valuesEnd);

            await conn.commit();

            return {
                cliente: rowsCli,
                telefone: rowsTel,
                endereco: rowsEnd
            };

        } catch (error) {
            await conn.rollback();
            throw new Error(error.message);
        } finally {
            conn.release();
        }
    },

    editar: async (produto) => {
        const sql = `
            UPDATE produtos
            SET IdCategoria=?, Nome=?, Valor=?, CaminhoImagem=?
            WHERE Id=?
        `;
        const values = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.caminhoImagem,
            produto.id
        ];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    selecionar: async () => {
        const sql = 'SELECT * FROM produtos';
        const [rows] = await connection.execute(sql);
        return rows;
    },

    deletar: async (id) => {
        const sql = 'DELETE FROM produtos WHERE Id=?';
        const [rows] = await connection.execute(sql, [id]);
        return rows;
    }
};

export default clienteRepository;