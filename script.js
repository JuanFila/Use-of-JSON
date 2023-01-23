const objs = [
    {
        "nome": "Juan",
        "idade": 21,
        "esta_trabalhando": true,
        "detalhes_profissão": {
            "profissão": "Programador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar", "Correr", "Ler"]
    },

    {
        "nome": "fulano",
        "idade": 14,
        "esta_trabalhando": false,
        "detalhes_profissão": {
            "profissão": null,
            "empresa": null
        },
        "hobbies": ["Estudar", "Brincar"]
    }
]

//conversor de objeto para json
const jsonData = JSON.stringify(objs) //Exemplo de uso p/ um post

//Array de objetos
console.log(objs)

//Convertido o array de objetos para json
console.log(jsonData)

//converter json para objeto

const objData = JSON.parse(jsonData); //Exemplo de uso p/ um get

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})