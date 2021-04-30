const comprarCasco = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar casco");
        },1000)
    })
}

const ComprarGuantes = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar Guantes");
        },2000)
    })
}

const irBici = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Ir en bici");
        },8000)
    })
}

const irDeCompras = async () => {
    const casco = await comprarCasco();
    const guantes = await ComprarGuantes();
    const bici = await irBici();
    return ([casco,guantes,bici]);
}

irDeCompras().then(res =>console.log(res));