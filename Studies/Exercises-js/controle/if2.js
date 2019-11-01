function teste1(num){

    if (num > 7)
        console.log(num)

    console.log('Final')

}

teste1(8)
teste1(6)

function teste2(num){

    if (num > 7) ; { //Cuidado com os ';' nas estruturas de controle

        console.log(num)

    }

}

teste2(2)
teste2(10)