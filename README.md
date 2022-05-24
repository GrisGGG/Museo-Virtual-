## MUSEO VIRTUAL ANIMALES EN PELIGRO DE EXTINSIÓN

 Nuestro sitio fue desplegado éxitosamente, puedes encontrarlo  <a href="https://blueextinction.azurewebsites.net/" target="_blank"> AQUÍ </a>


Proyecto que pretende que de manera interactiva los usuarios tengan acceso a información de interés sobre los animales maniros en peligro de extinguirse. Creemos que si los usuarios se familiarizan con ellos, podrán crear conciencia y se puede iniciar la conversación sobre el que debemos hacer para cuidarlos, como podemos ayudar y por qué afecta a el ecosistema que estos animales se extingan.

Nuestra intención es crear una sitio web donde los usuarios puedan observar información como primera fase el diseño solo busca informar y presentar la información requerida. La segunda parte de este proyecto es la creación de una API, con datos de estos animalitos, para que más desarrolladores puedan aplicarlo a su proyecto.

### Integrantes del Equipo Museo Virtual Blue Extinction ###
----FrontEnd----

*José Dimas Alejandro Espinosa Razo*
*Pablo Yael Soto*

----BackEnd----

*Angel David Moreno Guzmán*
*Martin Otamendí*
*Guadalupe Gachupin García*

### Requerimientos

#### Frontend
1. Diseño de las vistas del sitio web
2. Implementación del diseño con las  tecnologías html y csss
3. Características de funcionalidad, botones, transiciones.
4. Conexión a la API

#### Backend
1. Delimitación de los atributos de la bd
2. Creación de la b.d
3. Conexión a la bd
4. Creación de enpoints para la consulta de datos  `animalesMarinos.Controller`

| Endpoint | Método | Response |
|---|---|---|
| `/api/animalesMarinos` | `GET` | Consultar todos los animales existentes en la api. |
| `/:id` | `GET` | Endpoint diámico para consultar animalidos de acuerdo a su id. |
| `/` | `POST` | Habilitar un endpoint para agregar animalitos. |
| `/:id` | `POST` | Endport para borrar animalitos segun su id|

5. Conexión y modelo de la API a la bd
6.  Despliegue del sitio
7. Despiegue de la API

### Estructura del proyecto

#### Frontend


<img width="1247" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/directorios-frontend.png?raw=true">


#### Backend
API
<img width="1247" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/Directorios.png?raw=true">

### El proyecto funciona así


<img width="1247" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/DiagramaProyecto.png?raw=true">



### Tecnologias Utilizadas 
1. Html
2. Css
3. Express
4. tedious
5. Cors
6. Sql azure
7. Azure Services



### Evidencias del proceso de creación del proyecto

#### Frontend
1. Diseño de las vistas del sitio web
2. Implementación del diseño con las  tecnologías html y csss
3. Características de funcionalidad, botones, transiciones.
4. Conexión a la API

#### Backend
1. Delimitación de los atributos de la bd
2. Creación de la b.d
  La base de datos se creo en `SQL AZURE`, con los siguientes datos:

` {name: 'id', type: TYPES.Int, value: id},
        {name: 'nameComun', type: TYPES.VarChar, value: nameComun},
        {name: 'nameScientist', type: TYPES.VarChar, value: nameScientist},
        {name: 'tipo', type: TYPES.VarChar, value: tipo},
        {name: 'habitat', type: TYPES.VarChar, value: habitat},
        {name: 'description', type: TYPES.VarChar, value: description},
        {name: 'urlImage', type: TYPES.VarChar, value: urlImage}
  `
       
       
 <img width="1000" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/bd_animalesMarinos.png?raw=true">

3. Servidor corriendo `index.js`

<img width="1000" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/servidor-corriendo.png?raw=true">

4. Conexión a la bd `helpers/getConecction`, `helpers/execQuery`

6. Creación de enpoints para la consulta de datos  `animalesMarinos.Controller`

| Endpoint | Método | Response |
|---|---|---|
| `/api/animalesMarinos` | `GET` | Consultar todos los animales existentes en la api. |
| `/:id` | `GET` | Endpoint diámico para consultar animalidos de acuerdo a su id. |
| `/` | `POST` | Habilitar un endpoint para agregar animalitos. |
| `/:id` | `POST` | Endport para borrar animalitos segun su id|

4. Conexión y modelo de la API a la bd
  La conexión se hizo con tedious 
  
  <img width="1000" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/api-corriendo.png?raw=true">
  
5. Despiegue de la API
  El despliegue de la Api se intento hacer a travez se azure services, pero tuvimos errores que no alcanzamos a reparar.
   <img width="1000" alt="image" src="https://github.com/GrisGGG/Museo-Virtual-/blob/main/assets/intento_despliegue-API.png?raw=true">
   
   
   
7. Despliegue del sitio
  Nuestro sitio fue desplegado éxitosamente, puedes encontrarlo  <a href="https://blueextinction.azurewebsites.net/" target="_blank"> AQUÍ </a>
  







