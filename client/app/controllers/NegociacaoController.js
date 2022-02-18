class NegociacaoController {
    adiciona(event){
        event.preventDefault()

        let inputdata = document.querySelector('#data')
        let inputquantidade = document.querySelector('#quantidade')
        let inputvalor = document.querySelector('#valor')

        console.log(inputdata.value)
        console.log(inputquantidade.value)
        console.log(inputvalor.value)
    }
}