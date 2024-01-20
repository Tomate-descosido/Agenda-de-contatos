const forms=document.getElementById('forms')
const numeros = []

let linhas = ''

forms.addEventListener('submit', function(e){
    e.preventDefault()

    const inputNome = document.getElementById('nome')
    const inputNumero = document.getElementById('numero')

    if(numeros.includes(inputNumero.value)) {
        alert(`${inputNumero.value} já está listado`)} 
    else{

    numeros.push(inputNumero.value)

    linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '</tr>'

    linhas += linha

    inputNome.value = ''
    inputNumero.value = ''

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}})