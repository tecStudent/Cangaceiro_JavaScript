class NegociacaoController {
    constructor (){
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

    }

    adiciona(event){
        event.preventDefault()


        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     parseInt(this._inputQuantidade.value),
        //     parseFloat(this._inputValor.value)
        // )
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice)=>{
                return item - indice % 2
            })
            )
        console.log(data)
    }
}