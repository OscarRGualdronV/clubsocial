export interface Vendedor {
  id: string
  name: string
  email: string | null
  phone: string | null
}

export type VendedorType = Pick<Vendedor, 'id' | 'name' | 'email'>