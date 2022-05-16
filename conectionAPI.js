const API_URL='http://localhost:9000/api/animalesMarinos/';

const loadAnimal=async() =>{
    try{
        const respuesta= await fetch(API_URL);
        
        const datosAnimal=await respuesta.json();
        console.log(datosAnimal);
    }catch(error){
        console.log(error);
    }
    
}

loadAnimal();