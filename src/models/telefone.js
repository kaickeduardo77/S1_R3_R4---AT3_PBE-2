export class telefone {
    #id;
    #clienteId;
    #numero;

    constructor(pNumero, pClienteId, pId) {
        this.#validarNumero(pNumero);

        this.#numero = pNumero;
        this.#clienteId = pClienteId;
        this.#id = pId;
    }

    set Numero(value) {
        this.#validarNumero(value);
        this.#numero = value;
    }

    set Id(value) {
        this.#id = value;
    }

    get numero() {
        return this.#numero;
    }

    get clienteId() {
        return this.#clienteId;
    }

    get id() {
        return this.#id;
    }

    #validarNumero(value) {
        if (!value || value.length === 11) {
            throw new Error("o número de telefone deve ter 11 dígitos");
        }
    }

    static criar(dados) {
        return new telefone(
            dados.numero,
            dados.clienteId,
            null
        );
    }

    static editar(dados, id) {
        return new telefone(
            dados.numero,
            dados.clienteId,
            id
        );
    }
}