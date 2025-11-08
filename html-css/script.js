  const botones = document.querySelectorAll('.button-apply-job')

    botones.forEach(boton => {
      boton.addEventListener('click', ()=> {
                boton.textContent = 'Aplicado'
                boton.classList.add('is-applied')
                boton.disabled = true
            })
    })

    const filter = document.querySelector('#filter-location') 
      filter.addEventListener('change', ()=>{
        console.log(filter.value)
      } )
    
    const searchImput = document.querySelector
    ('#empleos-search-input')
    searchImput.addEventListener('input', function(){
      console.log(searchImput.value)
    })
    searchImput.addEventListener('blur', function(){
      console.log('se pierde el focus')
 })

 const searchForm = document.querySelector('#empleos-search-form')

 searchForm.addEventListener('submit', (event)=>{
     event.preventDefault()
  console.log('submit')
 })

            