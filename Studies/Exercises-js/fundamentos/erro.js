function tratarErroELancar(){
    throw new Error('....')
}

function imprimirGritando(obj) {

    try{

    console.log(obj.name.toUpperCase() + '!!!')
    
    } catch (e) {

        tratarErroELancar(e)

    }
    finally{

        console.log('End')

    }
}

const obj = {nome: 'Felipe D. Santos'}
imprimirGritando(obj)