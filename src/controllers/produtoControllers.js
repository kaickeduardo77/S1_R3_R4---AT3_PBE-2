    import { Produto } from '../models/categoria.js';
import produtoRepo from '../repositories/produtosRepository.js';

const controllerProduto = {

    criarProduto: async (req, res) => {
        try {
            const { idCategoria, nome, valor, caminhoImagem } = req.body;

            const novoProduto = Produto.criarProduto({
                idCategoria,nome,valor,caminhoImagem
            });

            const resposta = await produtoRepo.criarProduto(novoProduto);

            return res.status(201).json({
                mensagem: 'Produto cadastrado com sucesso.',
                dados: resposta
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    },

    editarProduto: async (req, res) => {
        try {
            const codigo = Number(req.query.id);
            const { idCategoria, nome, valor, caminhoImagem } = req.body;

            const produtoAtualizado = Produto.editarProduto({
                idCategoria,
                nome,
                valor,
                caminhoImagem
            }, codigo);

            const resposta = await produtoRepo.editarProduto(produtoAtualizado);

            return res.status(200).json({
                mensagem: 'Produto atualizado com sucesso.',
                dados: resposta
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    },

    excluirProduto: async (req, res) => {
        try {
            const codigo = Number(req.params.id);

            const resposta = await produtoRepo.excluirProduto(codigo);

            return res.status(200).json({
                mensagem: 'Produto removido com sucesso.',
                dados: resposta
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: erro.message
            });
        }
    },

    listarProdutos: async (req, res) => {
        try {
            const produtos = await produtoRepo.listarProdutos();

            return res.status(200).json({
                dados: produtos
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: erro.message
            });
        }
    }
};

export default controllerProduto;