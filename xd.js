console.log('cargando página...')

//hacemos que el Script se ejecute cuando la página cargue completamente
window.onload = script

//Código
function script ()
{
    //Página cargada
    console.log('cargada :D')
    
    //Trayendo las listas principales del DOM
    const listasNodeList = document.querySelectorAll('.lst__item.lvl1')
    const listasArray = [...listasNodeList]
    console.log(listasArray)
    listasArray.forEach((lista) => {
        const titulo = lista.querySelector('.lst__title.lvl1')
        titulo.addEventListener('mouseup', manejador)
    });
    
    //funcion que maneja las listas
    function manejador()
    {
        //Cerrando todo
        cerrarTodo();
        
        //Cambiando los colores de la lista
        if (this.parentElement.open)
        {
            this.parentElement.classList.remove('open')
        }
        else {
            this.parentElement.classList.add('open')
            this.classList.add('titleMargin-open')
        }

        //Cambiando el estilo del título
    }



    //manejando el boton cerrar todo
    const btn = document.querySelector('.btn')
    btn.addEventListener('mouseup', cerrarTodo)

    function cerrarTodo()
    {
        listasArray.forEach((lista) => {
            const titulo = lista.querySelector('.lst__title.lvl1')
            lista.open = false 
            lista.classList.remove('open')

            titulo.classList.remove('titleMargin-open')

            console.log('oprimidoxd')
        })
    }

    //Efectos para los estudiantes
        //Traer students elements del DOM
        const stuWrp_nodeList = document.querySelectorAll('.studentWrapper')
        const stuWrp_array = [...stuWrp_nodeList]
        
        stuWrp_array.forEach((item) => {
            item.addEventListener('mouseover', showStudentDet)
            item.addEventListener('mouseleave', hideStudentDet)
        })

        function showStudentDet ()
        {
            const nombre = this.querySelector('.student__name')
            const description = this.querySelector('.student__description')
            const letra = this.querySelector('.student__letter')
            
            this.classList.add('bg_black')

            console.log(`hover on ${nombre.textContent}`)

            nombre.classList.remove('hidden')
            description.classList.remove('hidden')
        }

        function hideStudentDet ()
        {
            const nombre = this.querySelector('.student__name')
            const description = this.querySelector('.student__description')
            const letra = this.querySelector('.student__letter')

            this.classList.remove('bg_black')

            console.log(`leaving ${nombre.textContent}`)

            nombre.classList.add('hidden')
            description.classList.add('hidden')
        }

        
       /*  const stuName_nodeList = document.querySelector('.student__name')
        const stuName_array = [...stuName_nodeList]
        
        const stuDts_nodeList = document.querySelector('.student__description')
        const stuDts_array = [...stuDts_nodeList]
        
        const stuLetter_nodeList = document.querySelector('.student__letter')
        const stuLetter_array = [...stuLetter_nodeList] */


        
}   
