var animal=1;
var valscroll=0;
var numscroll=2;
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
        let pokehab=data.abilities[0].ability.name;
        id=pokeno;
        console.log(id);
        let poketype=data.types[0].type.name;
        let pokealt=data.height;

    
        if(value==0){animalIMG(pokeurl,pokeId,pokename);}
        else{animInfo(pokeurl,pokename,poketype,pokehab,pokealt);}
        
      
    });//es una funcion para hacer peticiones a una api
    // fetch(urldesc).then((res)=>{
    //     return res.json();}).then((data)=>{
    
    //         let val=0;
    //         for(let i=0; data.flavor_text_entries[i].language.name != 'es'; i++){
    //             val=i;
    //         }
    //         val++;
    //         let descripcion=data.flavor_text_entries[val].flavor_text;
    //         animalDesc(descripcion);

    //     });

}
const animalID=()=>{
    for(let i=1;i<=9;i++){
        var id=valscroll+i;
    pokemon(id,0);
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

// const animalDesc=(descripcion)=>{
//     const desc=document.getElementById('descripcion');
//     desc.innerHTML=(descripcion);
// }

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

const animInfo=(imagen,nombre,datos,habitat,ubicacion)=>{
    const na=document.getElementById('animalnomb');
    na.innerText=(nombre);
    const img=document.getElementById('animal_img');
    img.src=(imagen);
    const dat=document.getElementById('datos');
    dat.innerText=(datos);
    const hab=document.getElementById('habitat');
    hab.innerText=(habitat);
    const ubi=document.getElementById('ubicacion');
    ubi.innerText=(ubicacion);

}
window.onscroll=function(){
    console.log(window.scrollY);
    // console.log(screen.height);
    console.log(window.innerHeight);
    var scroll=window.scrollY;
    var tam=window.innerHeight*numscroll;
    if(tam-scroll >=200){
        valscroll=valscroll+9;
        numscroll=numscroll+1;
        animalID();
    }

};
