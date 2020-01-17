let name = document.querySelector('input[name=user]')

let elementDiv = document.querySelector('div')
let elementUl = document.createElement('ul')

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

        axios.get(`https://api.github.com/users/${name.value}/repos`)
            .then(function(response){
                
                var item = response.data
             
                for( let i = 0; i < item.length; i++ ){
                  
                   var listar = item[i].name
                   Add(listar)
                }
                
            })
            .catch(function(erro){
                console.log(erro)
                alert('Usuario não encontrado, tente novamente')
                name.value = ''
            })
    ;}