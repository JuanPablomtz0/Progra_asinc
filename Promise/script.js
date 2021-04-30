/*const pedioComido = new Promise((resolve, reject) => {
    //resolve("Comidad entregada")
    reject("problema con la entrega de comida")
})

console.log(pedioComido);

pedirComida
    .then(unresultadox => console.log(unresultadox))
    .catch(errpr => console.log(error))
    .finally(()=> console.log("El proceso se ha terminado"))
*/
const payPal = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("paypal")
    },4000)
})

const payCard = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Card")
    },6000)
})




const pagarComida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        /*resolve (
            {
                id: 123456,
                idCliente:6969,
                estatus: true
            }
        )*/

        Promise.race([payPal,payCard]).then(proveedor => {
            resolve(
                {
                    id: 123456,
                    idCliente:6969,
                    estatus: true,
                    proveedor
                }
            )
        })
    }, 4000)
})

const recibirComida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (
            {
                id: 123456,
                idCliente:6969,
                estatus: true,
            }
        )
        reject("problemas con el repartidor");
    }, 5000)
})



const pedirComida = () => {
    /*pagarComida
        .then(infoPago=>{
            console.log(infoPago);
            return recibirComida;
        })
            .then(infoRepartidor=>{
                console.log(infoRepartidor);
            })
            .catch(error=>{
                console.log(error)
            })
    */
    Promise.all([pagarComida,recibirComida])
        .then(pedido=>{
            console.log(pedido);
        })
        .catch(error=>{
            console.log(error);
        })
}

pedirComida();

