class Pessoa {
  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }
  //criando os atributos nome e idade
  nome: string;
  idade: number;
}

let pessoa1 = new Pessoa("John", 23)


console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}`)