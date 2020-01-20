axios.get('https://api.github.com/users/lycan-nt')
    .then(function(response){
        console.log(response)
    })
    .catch(function(erro){
        console.log(erro)
    })