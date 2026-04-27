export default class Cliente {
    #clienteId;
    #nome;
    #cpf;
    #cep;

    constructor(nome, cpf, cep, clienteId = null) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#cep = cep;
        this.#clienteId = clienteId;
    }

    get clienteId() {
        return this.#clienteId;
    }

    set clienteId(value) {
        this.#clienteId = value;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        if (!value || value.trim() === "") {
            throw new Error("Nome é obrigatório");
        }
        this.#nome = value;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(value) {
        if (!value || value.length !== 11) {
            throw new Error("CPF deve ter 11 caracteres");
        }
        this.#cpf = value;
    }

    get cep() {
        return this.#cep;
    }

    set cep(value) {
        if (!value || value.length !== 8) {
            throw new Error("CEP deve ter 8 caracteres");
        }
        this.#cep = value;
    }

}