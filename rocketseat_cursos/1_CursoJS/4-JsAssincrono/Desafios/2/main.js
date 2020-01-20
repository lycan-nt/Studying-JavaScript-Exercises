let name = document.querySelector('input[name=user]')

let elementDiv = document.querySelector('div')
let elementUl = document.createElement('ul')




function carregando(){
    var carregandoElement = document.createElement('h3')
    var textCarrega = document.createTextNode('Caregando...')
    carregandoElement.appendChild(textCarrega)
    elementDiv.appendChild(carregandoElement)
}


function Add(text){

    var elementLi = document.createElement('li')
    
    var elementText = document.createTextNode(text)
    elementLi.appendChild(elementText)
    
    elementUl.appendChild(elementLi)
    elementDiv.appendChild(elementUl)
}

let btnAdd = document.querySelector('button')

btnAdd.onclick = function () {

    elementUl.innerHTML = ''
    elementDiv.innerHTML = ''

        carregando()        



        axios.get(`https://api.github.com/users/${name.value}/repos`)
            .then(function(response){
                
                var item = response.data
             
                 setTimeout(function(){

 
                    for( let i = 0; i < item.length; i++ ){
                  
                        var listar = item[i].name
                        Add(listar)
                     }
                 }, 3000) 
                
            })
            .catch(function(erro){
                console.log(erro)
                alert('Usuario não encontrado, tente novamente')
                name.value = ''
            })
    ;}