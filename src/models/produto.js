export class Produto {
    #id;
    #idCategoria;
    #nome;
    #valor;
    #caminhoImagem;
    #dataCad;

    constructor(idCategoria, nome, valor, caminhoImagem, id = null) {
        this.#idCategoria = idCategoria;
        this.#nome = nome;
        this.#valor = valor;
        this.#caminhoImagem = caminhoImagem;
        this.#dataCad = new Date();
        this.#id = id;
    }

    
    get id() { return this.#id; }
    get idCategoria() { return this.#idCategoria; }
    get nome() { return this.#nome; }
    get valor() { return this.#valor; }
    get caminhoImagem() { return this.#caminhoImagem; }
    get dataCad() { return this.#dataCad; }

    // VALIDAÇÕES
    validarIdCategoria(value) {
        if (!value || isNaN(value)) {
            throw new Error("ID da categoria inválido");
        }
    }

    validarNome(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("Nome deve ter no mínimo 3 caracteres");
        }
    }

    validarValor(value) {
        if (!value || value <= 0) {
            throw new Error("Valor deve ser maior que zero");
        }
    }

    validarPathImagem(value) {
        if (!value || value.trim().length === 0) {
            throw new Error("Caminho da imagem é obrigatório");
        }
    }

    // FACTORY
    static criar(dados) {
        return new Produto(
            dados.idCategoria,
            dados.nome,
            dados.valor,
            dados.caminhoImagem
        );
    }

    static editar(dados, id) {
        return new Produto(
            dados.idCategoria,
            dados.nome,
            dados.valor,
            dados.caminhoImagem,
            id
        );
    }
}