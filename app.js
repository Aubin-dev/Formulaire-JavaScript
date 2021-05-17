let container =document.querySelector('.container');


// let form = document.createElement('form')

let div1 = document.createElement('div')
let span1 =document.createElement('span')
let input1 = document.createElement('input')
let span2 =document.createElement('span')
let span3 =document.createElement('span')
let span4 =document.createElement('span')
let input2 = document.createElement('input')
let input4=document.createElement('input')
let input5=document.createElement('input')

let h1= document.createElement('h1')

let input8 = document.createElement('input')
input8.setAttribute("type", "button")


// let input6=document.createElement('input')
// let input7=document.createElement('input')

input1.setAttribute("type","text")
input2.setAttribute("type","text")
input4.setAttribute('type','password')
input5.setAttribute('type','password')

h1.textContent='Formulaire'
span1.textContent='Nom'
input1.placeholder='Entrer votre nom'
span2.textContent='Prenom'
span3.textContent='Mot de Passe'
span4.textContent='Réecrivez votre mot de passe'
input2.placeholder='Entrer votre prenom'

input4.placeholder='Entrer votre mot de passe'
input5.placeholder='Réecrivez votre mot de passe'

input8.value='Submit'

container.appendChild(div1)
div1.appendChild(h1)
div1.appendChild(span1)
div1.appendChild(input1)
div1.appendChild(span2)
div1.appendChild(input2)
div1.appendChild(span3)
div1.appendChild(input4)
div1.appendChild(span4)
div1.appendChild(input5)
div1.appendChild(input8)


div1.classList.add('div1')
input8.classList.add('input8')

// div1.addEventListener('keydown',()=>{
//     if(input1.value.length === input2.value.length){
//         input1.classList.add('input1')
//         input2.classList.add('input1')
//     }
//     else{
//         input1.classList.add('input0')
//         input2.classList.add('input0')
//     }
// })

// div1.addEventListener('keydown',()=>{
//     if(input4.value.length === input5.value.length){
//         input4.classList.add('input1')
//         input5.classList.add('input1')
//     }
//     else{
//         input4.classList.add('input0')
//         input5.classList.add('input0')
//     }
// })


input1.addEventListener('keydown',caractereNom)

input8.addEventListener('click',motDePasse)






function caractereNom(){
    if(input1.value.length<7){
        input1.classList.add('input0')
    }
    else if(input1.value.length===7){
        input1.classList.add('input1')
    }
}

function verifiPrenom(){

}


function motDePasse(){
    if(input4.value.length ===0 && input5.value.length === 0){
        input4.classList.add('input0')
        input5.classList.add('input0')
    }

    else if(input4.value.length === input5.value.length){
        input4.classList.add('input1')
        input5.classList.add('input1')
        show()
    }
    else{
        input4.classList.add('input0')
        input5.classList.add('input0')
    }


}

function show(){
    console.log("Nom : " ,input1.value.trim())
    console.log("Prenom : " ,input2.value)
    console.log('Password : ',input4.value)
}


