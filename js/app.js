 //variables y selectores
 const formulario = document.querySelector('#agregar-gasto');
 const gastosListado = document.querySelector('#gastos ul');
 


 //Eventos
document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

formulario.addEventListener('submit', agregarGastos);

 //Classes

    class Presupuesto{
                constructor(presupuesto){
                        this.presupuesto = Number(presupuesto);
                        this.restante = Number(presupuesto);
                        this.gastos = [];
                }

                nuevoGastos(gastos){
                    this.gastos = [...this.gastos, gastos];

                    console.log(this.gastos);
                }
    }

    class UI{
            insertarPresupuesto( cantidad ){
                const {presupuesto,restante} = cantidad;
                document.querySelector('#total').textContent = (presupuesto);
                document.querySelector('#restante').textContent = (restante);
            }

            imprimirAlerta(mensaje, tipo) {
                    const mensajeDiv = document.createElement('div');
                    mensajeDiv.classList.add('text-center','alert');

                    if (tipo === 'error') {
                        mensajeDiv.classList.add('alert-danger');
                    }else{
                        mensajeDiv.classList.add('alert-success');
                    }

                    mensajeDiv.textContent =mensaje;

                    document.querySelector('.primario').insertBefore(mensajeDiv,formulario);

                    setTimeout(() => {
                            mensajeDiv.remove();
                    }, 2000);

            }

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

        ui.insertarPresupuesto(presupuesto);
 }

 function agregarGastos(e) {
            e.preventDefault();



            //leer los  inputs 
            const nombre = document.querySelector('#gasto').value;
            const cantidad = Number(document.querySelector('#cantidad').value);
            

            if ( nombre === '' || cantidad === '') {
                    ui.imprimirAlerta('Ambos campos son obligatorios','error');
                    return;
            }else if( cantidad <= 0 || isNaN(cantidad) ) {
                    ui.imprimirAlerta('Cantidad no vaalidad', 'error');
                    return;
            }

          //generar un gasto

          const gasto = {nombre, cantidad,id: Date.now() } ;

          presupuesto.nuevoGastos(gasto);


          ui.imprimirAlerta('Agregado Correctamente');

          formulario.reset();


 }

