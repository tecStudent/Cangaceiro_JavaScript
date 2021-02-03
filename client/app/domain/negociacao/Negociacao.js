class Negociacao{
    constructor(date, quantidade, valor){
        this.date = date 
        this.quantidade = quantidade 
        this.valor = valor
    }
    obtemVolome(){
        return this.quantidade * this.valor
    }
}