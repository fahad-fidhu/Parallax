const title = document.querySelector('.title')

const lt =document.querySelector('.lt')
const rt =document.querySelector('.rt')

document.addEventListener('scroll' ,()=>{
    let value  = window.scrollY
    
    title.style.marginTop = value*2.5+'px'

    
    lt.style.marginLeft = -value + 'px'
   
    rt.style.marginLeft = value + 'px'
  
    
})