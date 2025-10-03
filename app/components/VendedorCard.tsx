import { Vendedor } from "@/app/types/vendedor";

interface Props {
  vendedor: Vendedor
}

export default function VendedorCard({ vendedor }: Props) {
  return (
    <div className="bg-purple-50 rounded-2xl shadow-md p-6 flex items-center gap-4">
      <img
        src={"/images/default-avatar.png"}
        alt={vendedor.name}
        className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
      />
      <div>
        <h2 className="font-bold text-gray-800">{vendedor.name}</h2>
        {vendedor.email && <p className="text-gray-600 text-sm">{vendedor.email}</p>}
        {vendedor.phone && <p className="text-gray-600 text-sm">{vendedor.phone}</p>}
      </div>
    </div>
  )
}
