const miFunc = async() => {
    //return "Hola mundo";
    return Promise.resolve("Hola Mundo");
}
//console.log(miFunc());
//miFunc().then(resultado => console.log(resultado));

const obtenerClima = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("El clime es de 69 grados");
        },4000)
    })
}

const obtenerTrafico = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Simpre hay trafico");
        },4000)
    })
}

const viajar = async () => {
    /*obtenerClima().then(res => {
        console.log(res);
        return obtenerTrafico();
    }).then(res => console.log(res))*/
    /*const clima = await obtenerClima();
    const trafico = await obtenerTrafico();
    return ([clima,trafico]);*/
    try{
        const clima = obtenerClima();
        const trafico = obtenerTrafico();
        const plan = await Promise.all([clima,trafico]);
        return plan;
    }catch(error){
        throw(error);
    }
}

viajar().then(res =>console.log(res))
    .catch(error => console.error(error))