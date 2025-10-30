import {deleteUsuario} from "./usuariosRepository.ts";

async function start(){
    const usuarios = await deleteUsuario(2)
    console.log(usuarios);
}

start();