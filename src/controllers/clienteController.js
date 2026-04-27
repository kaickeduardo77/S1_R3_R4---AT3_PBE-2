import clienteRepo from "../repositories/clienteRepository.js";
import { Cliente } from "../models/cliente.js";
import { Telefone } from "../models/telefone.js";
import { Endereco } from "../models/endereco.js";

const controllerCliente = {

    criarCliente: async (req, res) => {
        try {
            const {
                nome,
                cpf,
                numero,
                cep,
                logradouro,
                numeroCasa,
                complemento,
                bairro,
                cidade,
                uf
            } = req.body;

            const novoCliente = Cliente.criarCliente({
                nome,
                cpf
            });

            const novoTelefone = Telefone.criarTelefone({
                numero
            });

            const novoEndereco = Endereco.criarEndereco({
                cep,
                logradouro,
                numero,
                complemento,
                bairro,
                cidade,
                uf
            });

            const resposta = await clienteRepo.criarCliente(
                novoCliente,
                novoTelefone,
                novoEndereco
            );

            return res.status(201).json({
                mensagem: "Cliente cadastrado com sucesso.",
                dados: resposta
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    },

    editarCliente: async (req, res) => {
        try {
            const codigo = Number(req.query.id);

            const {
                nome,
                cpf,
                numero,
                cep,
                logradouro,
                numeroCasa,
                complemento,
                bairro,
                cidade,
                uf
            } = req.body;

            const clienteAtualizado = Cliente.editarCliente({
                nome,
                cpf
            }, codigo);

            const telefoneAtualizado = Telefone.criarTelefone({
                numero
            });

            const enderecoAtualizado = Endereco.criarEndereco({
                cep,
                logradouro,
                numero,
                complemento,
                bairro,
                cidade,
                uf
            });

            const resposta = await clienteRepo.editarCliente(
                clienteAtualizado,
                telefoneAtualizado,
                enderecoAtualizado
            );

            return res.status(200).json({
                mensagem: "Cliente atualizado com sucesso.",
                dados: resposta
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    },

    excluirCliente: async (req, res) => {
        try {
            const codigo = Number(req.params.id);

            const resposta = await clienteRepo.excluirCliente(codigo);

            return res.status(200).json({
                mensagem: "Cliente removido com sucesso.",
                dados: resposta
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: erro.message
            });
        }
    },

    listarClientes: async (req, res) => {
        try {
            const clientes = await clienteRepo.listarClientes();

            return res.status(200).json({
                dados: clientes
            });

        } catch (erro) {
            return res.status(500).json({
                mensagem: erro.message
            });
        }
    }
};

export default controllerCliente;