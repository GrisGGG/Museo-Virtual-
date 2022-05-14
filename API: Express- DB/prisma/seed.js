const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


(async function main() {
    try {
      const user1 = await prisma.animalesMarinos_api.create({
       
        data:{
        nameComun: 'Totoaba',
        nameScientis: 'Totoaba macdonaldi',
        type: 'Pez',
        habitad:'Golfo de California o Mar de Cortés',
        description: 'Debido a su sobre-explotación, su población disminuyó alarmantemente hasta acercarla peligrosamente a su casi extinción. Se convirtió por decreto en una especie protegida',
        urlImage:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Totoaba.jpg'
        }        
      },
    );
  
    const user2 = await prisma.animalesMarinos_api.create({
      data:{
        nameComun: 'Tortuga carey',
        nameScientis: 'Eretmochelys imbricata',
        type: 'Reptilia',
        habitad: 'océano Atlántico',
        description: 'Su aspecto es similar al de otras tortugas marinas. Tiene un cuerpo plano, un caparazón protector, y sus extremidades en forma de aletas están adaptadas para nadar en mar abierto. Se distingue fácilmente de otras tortugas marinas por su pico puntiagudo y curvo con una prominente mandíbula superio',
        urlImage:'https://www.bioenciclopedia.com/wp-content/uploads/2012/01/tortuga-carey3.jpg'
      }
      
      });
  
      const user3 = await prisma.animalesMarinos_api.create({
          data:{
        nameComun: 'Ballena azul',
        nameScientis: 'Balaenoptera musculus',
        type: 'mamífero marino',
        habitad: 'Oceano Atlántico norte y Pacífico',
        description:'es una especie de cetáceo misticeto de la familia Balaenopteridae. Su tamaño medio es de entre 24 y 27 metros de longitud y pesan entre 100 y 120 toneladas, aunque hay registros de ejemplares de más de 30 m de longitud y 170 t de peso, que lo convierten en el mayor animal del planeta Tierra',
        urlImage: 'https://static.nationalgeographic.es/files/styles/image_3200/public/02-whale-gallery.jpg?w=768'
          }
          
        
      });
  
      console.log('Create bd animalsM - table 2 ');
    } catch(e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  })();