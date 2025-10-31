import { prisma } from '../prisma/index.js';

export type FuncionarioUpdateData = {
  Nome?: string;
  CPF?: string;
  Email?: string;
  Cargo?: 'Gerente' | 'Motorista' | 'Administrador';
  carroId?: number; // relação opcional
};

export type FuncionarioFilter = {
  id?: number;
  Nome?: string;
  CPF?: string;
  Email?: string;
  Cargo?: 'Gerente' | 'Motorista' | 'Administrador';
  carroId?: number;
};

export async function findFuncionarios(filter: FuncionarioFilter) {
  const where: any = {};
  if (filter.id) where.id = filter.id;
  if (filter.Nome) where.Nome = { contains: filter.Nome, mode: 'insensitive' };
  if (filter.CPF) where.CPF = { contains: filter.CPF, mode: 'insensitive' };
  if (filter.Email) where.Email = { contains: filter.Email, mode: 'insensitive' };
  if (filter.Cargo) where.Cargo = filter.Cargo;
  if (filter.carroId) where.carroId = filter.carroId;

  return prisma.funcionario.findMany({ where, include: { Carro: true } });
}

export async function addFuncionario(data: FuncionarioUpdateData) {
  const createData: any = { ...data };
  if (data.carroId !== undefined) {
    createData.Carro = { connect: { id: data.carroId } };
    delete createData.carroId;
  }
  return prisma.funcionario.create({ data: createData });
}

export async function updateFuncionario(id: number, data: FuncionarioUpdateData) {
  const updateData: any = { ...data };
  if (data.carroId !== undefined) {
    updateData.Carro = { connect: { id: data.carroId } };
    delete updateData.carroId;
  }
  return prisma.funcionario.update({ where: { id }, data: updateData });
}

export async function deleteFuncionario(id: number) {
  return prisma.funcionario.delete({ where: { id } });
}
