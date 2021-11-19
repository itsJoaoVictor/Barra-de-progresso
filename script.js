const progress = document.getElementById('progress')
const prev = document.getElementById('prev') 
const next = document.getElementById('next') 
const circulo = document.querySelectorAll('.circulo')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive ++

    if(currentActive > circulo.length){
        currentActive = circulo.length        
    }

    update()

})

prev.addEventListener('click', () => {
    currentActive --

    if(currentActive < 1){
        currentActive = 1        
    }

    update()
})

function update(){
    circulo.forEach((circulo,idx) => {
        if(idx < currentActive){
            circulo.classList.add('ativo')
        } else{
            circulo.classList.remove('ativo')
        }
    })

    const ativo = document.querySelectorAll('.ativo')

    progress.style.width = (((ativo.length-1)/(circulo.length-1))*100 + '%')

    if (currentActive === 1) {
        prev.disabled = true        
    } else if (currentActive === circulo.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
      

    }
}
