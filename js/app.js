 //variables y selectores
 const formulario = document.querySelector('#agregar-gasto');
 const gastosListado = document.querySelector('#gastos ul');
 


 //Eventos
document.addEventListener('DOMContentLoaded', preguntarPresupuesto);


 //Classes

    class Presupuesto{
                constructor(presupuesto){
                        this.presupuesto = Number(presupuesto);
                        this.restante = Number(presupuesto);
                        this.gastos = [];
                }
    }

    class UI{


    }

    //Instanciar UI
    const ui = new UI();

    let presupuesto;


 //Funciones

 function preguntarPresupuesto() {
     const presupuestoUsuario = prompt('Cual es tu Presupuesto?');

     if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {

        window.location.reload();
         
     }

        presupuesto = new Presupuesto(presupuestoUsuario);
        console.log(presupuesto);
 }


