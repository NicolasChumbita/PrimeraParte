
class tipoSeguro {

    constructor (tipo,precio) {

      this.tipo = tipo

      this.precio = precio

    }

    comision(precio) {

      let calculoComision = ((precio * 0.10) + precio)

      return calculoComision

    }

}


class nuevoUsado {

    constructor(estado) {

        this.estado = estado
    }
}



alert ("Bienvenido a Chumbita Aseguradora, contamos con los siguientes tipos de Seguro: ")

let seleccion = prompt("Seleccione cual categoria de Seguro desea (escriba el numero): \n1.Moto \n2.Auto Pequeño \n3.Auto Mediano \n4.Auto Grande \n5.Camioneta/SUV \n6.Camión");


switch(seleccion){

    case "1":

        const tipoSeguro1 = new tipoSeguro ("Moto", 2500)

        const nuevoUsado1 = new nuevoUsado (prompt(`Ha seleccionado ${tipoSeguro1.tipo}, ahora defina el estado (Nuevo/Usado) de su vehiculo: \n1.Nuevo \n2.Usado`))
            
        if(nuevoUsado1.estado == 1){

            let comisionNuevo = ((tipoSeguro1.precio * 0.15) + tipoSeguro1.precio)

            alert (`Perfecto!, el valor del seguro de su ${tipoSeguro1.tipo} nuevo final mensual junto con la comision de la casa del 10% es de $${comisionNuevo}.`)

        }

        else{

            alert (`Perfecto!, el valor del seguro de su ${tipoSeguro1.tipo} usado final mensual junto con la comision de la casa del 10% es de $${tipoSeguro1.comision(tipoSeguro1.precio)}.`)
            
        }

    break;


    case "2":

        const tipoSeguro2 = new tipoSeguro ("Auto Pequeño", 5000)
        
        const nuevoUsado2 = new nuevoUsado (prompt(`Ha seleccionado ${tipoSeguro2.tipo}, ahora defina el estado (Nuevo/Usado) de su vehiculo: \n1.Nuevo \n2.Usado`))
            
        if(nuevoUsado2.estado == 1){

            let comisionNuevo = ((tipoSeguro2.precio * 0.15) + tipoSeguro2.precio)

            alert (`Perfecto!, el valor del seguro de su ${tipoSeguro2.tipo} nuevo final mensual junto con la comision de la casa del 10% es de $${comisionNuevo}.`)

        }

        else{

            alert (`Perfecto!, el valor del seguro de su ${tipoSeguro2.tipo} usado final mensual junto con la comision de la casa del 10% es de $${tipoSeguro2.comision(tipoSeguro2.precio)}.`)
            
        }


    break;


    case "3":

        const tipoSeguro3 = new tipoSeguro ("Auto Mediano", "Usuario", 6500)



          
    break

    default:

          alert("Elegi una opcion valida");

    break;

    }