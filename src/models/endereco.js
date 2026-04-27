export class enderecos {
    #id;
    #clienteId;
    #cep;
    #logradouro;
    #numero;
    #complemento;
    #bairro;
    #cidade;
    #uf;

    constructor(
        pCep,
        pLogradouro,
        pNumero,
        pComplemento,
        pBairro,
        pCidade,
        pUf,
        pClienteId,
        pId
    ) {
        this.#cep = pCep;
        this.#logradouro = pLogradouro;
        this.#numero = pNumero;
        this.#complemento = pComplemento;
        this.#bairro = pBairro;
        this.#cidade = pCidade;
        this.#uf = pUf;
        this.#clienteId = pClienteId;
        this.#id = pId;
    }
    get id() { 
        return this.#id; }
   
        get clienteId() { 
        return this.#clienteId; }
        
        get cep() {
        return this.#cep;
    }

    get logradouro() {
        return this.#logradouro;
    }

    get numero() {
        return this.#numero;
    }

    get complemento() {
        return this.#complemento;
    }

    get bairro() {
        return this.#bairro;
    }

    get cidade() {
        return this.#cidade;
    }

    get uf() {
        return this.#uf;
    }


    #validarNumero(value) {
        if (!value || value.length === 11) {
            throw new Error("numero inválido");
        }
    }

    static criar(dados) {
        return new endereco(
            dados.cep,
            dados.logradouro,
            dados.numero,
            dados.complemento,
            dados.bairro,
            dados.cidade,
            dados.uf,
            dados.clienteId,
            null
        );
    }

    static editar(dados, id) {
        return new endereco(
            dados.cep,
            dados.logradouro,
            dados.numero,
            dados.complemento,
            dados.bairro,
            dados.cidade,
            dados.uf,
            dados.clienteId,
            id
        );
    }
}
