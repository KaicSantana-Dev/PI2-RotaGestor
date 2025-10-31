import { prisma } from '../prisma/index.js';

export type CarroUpdateData = {
  Modelo?: string;
  Marca?: string;
  Ano?: number;
  Placa?: string;
  URL_Imagem?: string;
  motoristaId?: number; // relação opcional
};

export type CarroFilter = {
  id?: number;
  Modelo?: string;
  Marca?: string;
  Ano?: number;
  Placa?: string;
  URL_Imagem?: string;
  motoristaId?: number;
};

export async function findCarros(filter: CarroFilter) {
  const where: any = {};
  if (filter.id) where.id = filter.id;
  if (filter.Modelo) where.Modelo = { contains: filter.Modelo, mode: 'insensitive' };
  if (filter.Marca) where.Marca = { contains: filter.Marca, mode: 'insensitive' };
  if (filter.Ano) where.Ano = filter.Ano;
  if (filter.Placa) where.Placa = { contains: filter.Placa, mode: 'insensitive' };
  if (filter.URL_Imagem) where.URL_Imagem = { contains: filter.URL_Imagem, mode: 'insensitive' };
  if (filter.motoristaId) where.motoristaId = filter.motoristaId;

  return prisma.carro.findMany({ where, include: { Motorista: true } });
}

export async function addCarro(data: CarroUpdateData) {
  const createData: any = { ...data };
  if (data.motoristaId !== undefined) {
    createData.Motorista = { connect: { id: data.motoristaId } };
    delete createData.motoristaId;
  }
  return prisma.carro.create({ data: createData });
}

export async function updateCarro(id: number, data: CarroUpdateData) {
  const updateData: any = { ...data };
  if (data.motoristaId !== undefined) {
    updateData.Motorista = { connect: { id: data.motoristaId } };
    delete updateData.motoristaId;
  }
  return prisma.carro.update({ where: { id }, data: updateData });
}

export async function deleteCarro(id: number) {
  return prisma.carro.delete({ where: { id } });
}
