var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
var pessoa1 = new Pessoa("John", 23);
console.log("Nome: " + pessoa1.nome + ", Idade: " + pessoa1.idade);
