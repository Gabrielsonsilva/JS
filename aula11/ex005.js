var idade = 19
console.log(`Você tem ${idade} anos!`)

if (idade < 16 ) {
    console.log('Você não Vota!')
} else if (idade >= 16 && idade < 18  || idade >= 65) {
    console.log ('Seu voto é opcional!')
} else if (idade >= 18) {
    console.log('Seu voto é obrigatorio!')
}