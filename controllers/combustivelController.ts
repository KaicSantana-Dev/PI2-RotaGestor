import { prisma } from '../prisma/index.js';

export type CombustivelUpdateData = {
  carroId?: number;
  Valor?: number;
  Gasto?: string;
  Data?: string;
  Posto?: string;
};

export type CombustivelFilter = {
  id?: number;
  carroId?: number;
  Valor?: number;
  Gasto?: string;
  Data?: string;
  Posto?: string;
};

export async function findCombustiveis(filter: CombustivelFilter) {
  const where: any = {};
  if (filter.id) where.id = filter.id;
  if (filter.carroId) where.carroId = filter.carroId;
  if (filter.Valor) where.Valor = filter.Valor;
  if (filter.Gasto) where.Gasto = filter.Gasto;
  if (filter.Data) where.Data = new Date(filter.Data);
  if (filter.Posto) where.Posto = { contains: filter.Posto, mode: 'insensitive' };

  return prisma.gastosCombustivel.findMany({ where, include: { Carro: true } });
}

export async function addCombustivel(data: CombustivelUpdateData) {
  const createData: any = { ...data };
  if (data.carroId !== undefined) {
    createData.Carro = { connect: { id: data.carroId } };
    delete createData.carroId;
  }
  if (data.Data) createData.Data = new Date(data.Data);
  return prisma.gastosCombustivel.create({ data: createData });
}

export async function updateCombustivel(id: number, data: CombustivelUpdateData) {
  const updateData: any = { ...data };
  if (data.carroId !== undefined) {
    updateData.Carro = { connect: { id: data.carroId } };
    delete updateData.carroId;
  }
  if (data.Data) updateData.Data = new Date(data.Data);
  return prisma.gastosCombustivel.update({ where: { id }, data: updateData });
}

export async function deleteCombustivel(id: number) {
  return prisma.gastosCombustivel.delete({ where: { id } });
}
