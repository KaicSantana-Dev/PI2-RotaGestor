import { prisma } from '../prisma/index.js';

export type ManutencaoUpdateData = {
  carroId?: number;
  Valor?: number;
  Gasto?: string;
  Data?: string;
  Local?: string;
};

export type ManutencaoFilter = {
  id?: number;
  carroId?: number;
  Valor?: number;
  Gasto?: string;
  Data?: string;
  Local?: string;
};

export async function findManutencoes(filter: ManutencaoFilter) {
  const where: any = {};
  if (filter.id) where.id = filter.id;
  if (filter.carroId) where.carroId = filter.carroId;
  if (filter.Valor) where.Valor = filter.Valor;
  if (filter.Gasto) where.Gasto = filter.Gasto;
  if (filter.Data) where.Data = new Date(filter.Data);
  if (filter.Local) where.Local = { contains: filter.Local, mode: 'insensitive' };

  return prisma.gastosManutencao.findMany({ where, include: { Carro: true } });
}

export async function addManutencao(data: ManutencaoUpdateData) {
  const createData: any = { ...data };
  if (data.carroId !== undefined) {
    createData.Carro = { connect: { id: data.carroId } };
    delete createData.carroId;
  }
  if (data.Data) createData.Data = new Date(data.Data);
  return prisma.gastosManutencao.create({ data: createData });
}

export async function updateManutencao(id: number, data: ManutencaoUpdateData) {
  const updateData: any = { ...data };
  if (data.carroId !== undefined) {
    updateData.Carro = { connect: { id: data.carroId } };
    delete updateData.carroId;
  }
  if (data.Data) updateData.Data = new Date(data.Data);
  return prisma.gastosManutencao.update({ where: { id }, data: updateData });
}

export async function deleteManutencao(id: number) {
  return prisma.gastosManutencao.delete({ where: { id } });
}
