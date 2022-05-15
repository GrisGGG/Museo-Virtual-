var animal=1;
const pokemon=(pokeId,value)=>{
    
    const url='https://pokeapi.co/api/v2/pokemon/'+pokeId;
    const urldesc='https://pokeapi.co/api/v2/pokemon-species/'+pokeId;
    fetch(url).then((res)=>{
        if(res.status != 200){
            console.log('Error fetchingPokemon');
        }
        else
        {
        console.log(res);
        return res.json();
    }
    }).then((data)=>{
        console.log(data);
        let pokeurl=data.sprites.front_default;
        console.log(pokeurl);
        let pokename=data.forms[0].name;
        let pokeno=data.id;
        id=pokeno;
        let poketype=data.types[0].type.name;

    
        if(value==0){animalIMG(pokeurl,pokeId,pokename);}
        else{animInfo(pokeurl,pokename,poketype);}
        
      
    });//es una funcion para hacer peticiones a una api

}
const animalID=()=>{
    for(let i=1;i<=9;i++){
    pokemon(i,0);
    }
} 
const animalInfo=()=>{
    pokemon(animal,1);
}
animalInfo();
animalID();

ventModal=()=>{
    document.getElementsByClassName('fondo_transparent')[0].style.display="block";
    const body=document.body;
    body.classList.add('block-scroll');
    window.scroll(0,0);

}
closeventModal=()=>{
    document.getElementsByClassName('fondo_transparent')[0].style.display="none";
    const body=document.body;
    body.classList.remove('block-scroll');
}

const animalIMG=(url,id,name)=>{
    const newdiv=document.createElement('button');
    newdiv.classList.add('img_div');
    newdiv.classList.add('id'+id);
    document.getElementById('lista_animal').appendChild(newdiv);
    const newp=document.createElement('p');
    document.getElementsByClassName('id'+id)[0].appendChild(newp);
    newp.innerText=name;
    const newimg=document.createElement('img');
    newimg.classList.add('img');
    newimg.classList.add('img'+id);
    document.getElementsByClassName('id'+id)[0].appendChild(newimg);
    newimg.src=url;
    const press=document.getElementsByClassName('id'+id)[0];
    press.onclick=()=>{
        console.log('press');
        animal=id;
        console.log(animal);
        animalInfo();
        ventModal();
    
    };

}

const animInfo=(imagen,nombre,datos)=>{
    const na=document.getElementById('animalnomb');
    na.innerText=(nombre);
    const img=document.getElementById('animal_img');
    img.src=(imagen);
    const dat=document.getElementById('datos');
    dat.innerText=(datos);

}