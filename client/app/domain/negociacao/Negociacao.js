class Negociacao{
    constructor(date, quantidade, valor){
        this._date = date 
        this._quantidade = quantidade 
        this._valor = valor
        Object.freeze(this)
    }
    get volome(){
        return this._quantidade * this._valor
    }
    get date(){
        return new Date(this._date.getTime())
    }
    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }
}