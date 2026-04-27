import { categoria } from '../models/categoria.js';
import categoriaRepo from '../repositories/categoriaRepository.js';

const controllerCategoria = {

    cadastrar: async (req, res) => {
        try {
            const { nome, descricao } = req.body;

            if (!nome || typeof nome !== 'string' || nome.trim() === '') {
                return res.status(400).json({
                    mensagem: 'O nome da categoria é obrigatório.'
                });
            }

            const novaCategoria = categoria.criar({
                nome: nome.trim(),
                descricao: descricao ? descricao.trim() : null
            });

            const resposta = await categoriaRepo.criar(novaCategoria);

            return res.status(201).json({
                mensagem: 'Categoria cadastrada com sucesso.',
                dados: resposta
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: 'Erro interno no servidor.',
                detalhe: erro.message
            });
        }
    },

    editar: async (req, res) => {
        try {
            const codigo = Number(req.params.id);
            const { nome, descricao } = req.body;

            if (!codigo || isNaN(codigo)) {
                return res.status(400).json({
                    mensagem: 'Informe um ID válido.'
                });
            }

            const categoriaAtualizada = categoria.editar({
                nome: nome.trim(),
                descricao: descricao ? descricao.trim() : null
            }, codigo);

            const resposta = await categoriaRepo.editar(categoriaAtualizada);

            return res.status(200).json({
                mensagem: 'Categoria atualizada com sucesso.',
                dados: resposta
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: 'Erro interno no servidor.',
                detalhe: erro.message
            });
        }
    },

    excluir: async (req, res) => {
        try {
            const codigo = Number(req.params.id);

            if (!codigo || isNaN(codigo)) {
                return res.status(400).json({
                    mensagem: 'Informe um ID válido.'
                });
            }

            const resposta = await categoriaRepo.deletar(codigo);

            return res.status(200).json({
                mensagem: 'Categoria removida com sucesso.',
                dados: resposta
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: 'Erro interno no servidor.',
                detalhe: erro.message
            });
        }
    },

    listar: async (req, res) => {
        try {
            const categorias = await categoriaRepo.selecionar();

            return res.status(200).json({
                dados: categorias
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: 'Erro interno no servidor.',
                detalhe: erro.message
            });
        }
    }
};

export default controllerCategoria;