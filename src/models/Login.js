import validator from 'validator'

export default class login{
    constructor(){
        this.form = document.querySelector(formClass)
    }
    init(){
        this.events()  
    }
    events(){
        if(!this.form) return
        this.form.addEventListener('submit', e =>{
            e.preventDefault()    
            alert('FORM NAO ENVIADO')
            this.validate()
        })
    }
    validate(e){
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')

        let error = false
        if(!validator.isEmail(emailInput.value)){
            alert('E-mail invalido')
            error = true
        }

        if(passwordInput.value.lenght < 3 || passwordInput.value.lenght > 50 ){
            alert('Senha precisa ter entre 3 e 50 caracteres')
            error = true
        }

        if(!error)

        console.log(emailInput.value, passwordInput.value)
    }
}