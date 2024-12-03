const leia = require('readline-sync')

//Dados do usuario
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdm = false
const isGerente = true
const isBlock = false

console.log("Tela de login")

let usuarioLogin = leia.question("digite o seu usuario: ")
let senhaLogin = leia.question("digite sua senha: " {hideEchoBack: true})

if(usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "seja bem vindo! usuário autenticado com sucesso!"
}else {
    var mensagem = "Acesso Negado"
}

console.log(mensagem)

if(isBlock === true){
    console.log("usuário ativo")
}else {
    console.log("suário está inativel contate o Administrador")
    process.exit(0)
}

if(isAdm || isGerente){
    console.log("acesso ao painel administrativo liberado")
}else {
    console.log("acesso ao painel administrativo negado")
}