import { PrismaClient } from './generated/prisma/index.js';
const prisma = new PrismaClient();

async function connect(){
    await prisma.$connect();
}

connect();

export function getUsuarios(){
    return prisma.usuario.findMany();
}

export function getUsuario(id: number){
    return prisma.usuario.findUnique({
        where: { id }

    });
}
type Usuario = {
    Nome: string;
    Senha: string;
    Email: string;
}

export function addUsuario(newusuario: Usuario){
    return prisma.usuario.create({
        data: newusuario
    })
}

export function deleteUsuario(id: number){
    return prisma.usuario.delete({
        where: { id }
    })
}