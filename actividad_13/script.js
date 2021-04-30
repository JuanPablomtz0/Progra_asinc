/*Proceso 1: Comprar Casco, duración: 1 segundo
Proceso 2: Comprar guantes, duración 2 segundos
Proceso 3: Ir de paseo en bici: 8 segundos:*/

const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (
            {
                size: 123456,
                color:"tan",
                price: 5
            }
        )
        reject("problem checking out");
    }, 1000)
})

const comprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (
            {
                size: 123456,
                color:"yellow",
                price: 15
            }
        )
        reject("problem checking out");
    }, 2000)
})

const irBici = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (
            {
                time: 10,
                distance: 10
            }
        )
        reject("bike broke");
    }, 8000)
})


const goOut = () => {
    comprarCasco
        .then(infoPago=>{
            console.log(infoPago);
            return comprarGuantes;
        })
        .then(infoPago=>{
            console.log(infoPago);
            return irBici;
        })
        .then(infoTrip=>{
            console.log(infoTrip);
        })
        .catch(error=>{
            console.log(error);
        })
        .finally(()=> console.log("Procces end"))
}

goOut();