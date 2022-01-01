 //variables y selectores
 const formulario = document.querySelector('#agregar-gasto');
 const gastosListado = document.querySelector('#gastos ul');
 


 //Eventos
document.addEventListener('DOMContentLoaded', preguntarPresupuesto);


 //Classes




 //Funciones

 function preguntarPresupuesto() {
     const presupuestoUsuario = prompt('Cual es tu Presupuesto?');

     if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {

        window.location.reload();
         
     }

     console.log(presupuestoUsuario);
 }


