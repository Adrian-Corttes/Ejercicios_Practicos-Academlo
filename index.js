//Imports de los módulos
const fs = require('fs/promises');
const path = require('path');

const fileRoute = path.resolve('users.json')
const fileRoute2 = path.resolve('hello.txt')

const readFileUsers = async() => {
    //Imprimir en consola el arreglo de usuarios
    try{
        const data = await fs.readFile(fileRoute, "utf8");
        console.log(data);
    }catch(error){
        console.log(error)
    }
 };



const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(fileRoute2, "hello world!", (error) => {
        if(error){
            console.log("No se ha podido escribir en este archivo");
        }
    });
  
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
      try{
        await fs.readFile(fileRoute, "utf8");
        await fs.writeFile(fileRoute,'');

        console.log(fileRoute)
        
    }catch(error){
        console.log(error)
    }
};

//?QUEDO PENDIENTE POR PASAR ESTE ÍTEM 
//! × Debería de llamar al método writeFile con la lista de usuarios + username como argumento (8 ms)


//No hace falta ejecutar las funciones
module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};

