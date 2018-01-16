exports.Responsaveis = class Responsaveis{
    constructor(){ }

    set nome_responsavel(nome_responsavel){ this._nome_responsavel = nome_responsavel }
    get nome_responsavel(){ return this._nome_responsavel }

    set sobrenome_responsavel(sobrenome_responsavel){ this._sobrenome_responsavel = sobrenome_responsavel }
    get sobrenome_responsavel(){ return this._sobrenome_responsavel }

    set endereco_responsavel(endereco_responsavel){ this._endereco_responsavel = endereco_responsavel }
    get endereco_responsavel(){ return this._endereco_responsavel }

    set cidade_responsavel(cidade_responsavel){ this._cidade_responsavel = cidade_responsavel }
    get cidade_responsavel(){ return this._cidade_responsavel }

    set estado_responsavel(estado_responsavel){ this._estado_responsavel = estado_responsavel }
    get estado_responsavel(){ return this._estado_responsavel }

    set tel_responsavel(tel_responsavel){ this._tel_responsavel = tel_responsavel }
    get tel_responsavel(){ return this._tel_responsavel }

    set cpf_responsavel(cpf_responsavel){ this._cpf_responsavel = cpf_responsavel }
    get cpf_responsavel(){ return this._cpf_responsavel }
}