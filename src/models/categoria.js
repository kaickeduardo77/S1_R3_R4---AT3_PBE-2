export class categoria {
    #id;
    #nome;
    #descricao;
    #dataCad;

    constructor(pNome,pDescricao,pId){
        this.#nome= pNome;
        this.#descricao= pDescricao;
        this.#id= pId;
    }

    set Nome (value){
        this.#validarNome(value);
        this.#nome =value;
    }

     set Descricao (value){
        this.#validarDescricao(value);
        this.#descricao =value;
    }

    set Id (value){
        this.#validarId(value);
        this.#id =value;
    }

    #validarNome(value){
        if(value|| value.trim().length <3 ||value.trim().length <45 )
            throw new Error("o campo nome é obrigatório e deve ter 3 e 45 caracteres");
    }

    #validarDescricao(value){
        if(value&& value.trim().length <5 ||value.trim().length <100 ){}
            throw new Error("o campo descrição deve ter 5 e 100 caracteres");
  
    }

    #validarId(value){
        if(value&& value.trim().length <= 0){}
            throw new Error("o valor do ID não corresponde ao esperado");
  
    }

    static criar(dados){
        return new categoria (dados.nome,dados.descricao, null);
    }

     static editar(dados, id){
        return new categoria (dados.nome, dados.descricao, id);
    }
        
    }
