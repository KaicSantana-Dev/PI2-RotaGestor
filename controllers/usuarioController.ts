import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();


export async function findUsuarios(filter: any) {
  try {
    const usuarios = await prisma.usuario.findMany({
      where: filter, // permite buscar por nome, email, etc.
    });
    return usuarios;
  } catch (error) {
    throw new Error(`Erro ao buscar usuários: ${error}`);
  }
}


export async function addUsuario(data: {
  Nome: string;
  Email: string;
  Senha: string;
}) {
  try {
    const novoUsuario = await prisma.usuario.create({
      data,
    });
    return novoUsuario;
  } catch (error) {
    throw new Error(`Erro ao adicionar usuário: ${error}`);
  }
}


export async function updateUsuario(
  id: number,
  data: {
    Nome?: string;
    Email?: string;
    Senha?: string;
  }
) {
  try {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data,
    });
    return usuarioAtualizado;
  } catch (error) {
    throw new Error(`Erro ao atualizar usuário: ${error}`);
  }
}


export async function deleteUsuario(id: number) {
  try {
    const usuarioDeletado = await prisma.usuario.delete({
      where: { id },
    });
    return usuarioDeletado;
  } catch (error) {
    throw new Error(`Erro ao deletar usuário: ${error}`);
  }
}
