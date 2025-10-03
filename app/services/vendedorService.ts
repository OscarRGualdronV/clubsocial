// services/vendedorService.ts
import { prisma } from '@/app/lib/prisma'
import { VendedorType } from '../types/vendedor'

class VendedorService {
  createVendedor = async ({ id, name, email }: VendedorType) => {
    return prisma.vendedor.create({
      data: { id, name, email }
    })
  }

  getAllVendedores = async () => {
    return prisma.vendedor.findMany({
      include: { users: true }
    })
  }

  getVendedorById = async (vendedorId: string) => {
    return prisma.vendedor.findUnique({
      where: { id: vendedorId },
      include: { users: true }
    })
  }
}

export const vendedorService = new VendedorService()
