class Usuarios{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        
    }

    isAdmin(){

   
        if(this.admin == true){
            console.log('Admintrador!')
        }else(console.log('Não é ADM'))
       
    }
}

class Admin extends Usuarios{
    
    
    constructor(){
        super()
        this.admin = true;
    }
    
}


let user1 = new Usuarios('marcella@gmail.com', '9596');
let user2 = new Admin('lycan.felipe@gmail.com', '131216');

console.log(user1.isAdmin());
console.log(user2.isAdmin());

