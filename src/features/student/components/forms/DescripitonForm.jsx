import { useState } from 'react'
import Textarea from '@/app/components/ui/Inputs/Textarea'
import Input from '@/app/components/ui/Inputs/Input'
import Button from '@/app/components/ui/Buttons/Buttons'

export function DescriptionForm({ onSave }) {
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSave({ description, email, phone })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full space-y-6 p-8 bg-gradient-to-r from-[#E8F2FD] to-white rounded-2xl shadow-lg"
    >
      <div className="w-full relative bg-white border-l-4 border-[#005EB8] p-6 rounded-xl space-y-4 shadow hover:shadow-xl transition-transform hover:-translate-y-1">
        <h2 className="text-gray-800 font-semibold text-lg mb-4">Editar Descrição</h2>
        <Textarea
          label="Quem eu sou"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Descreva quem você é..."
          className="border-[#005EB8] focus:border-[#005EB8]"
        />
      </div>

      <div className="w-full relative bg-white border-l-4 border-[#005EB8] p-6 rounded-xl space-y-4 shadow hover:shadow-xl transition-transform hover:-translate-y-1">
        <h2 className="text-gray-800 font-semibold text-lg mb-4">Contatos</h2>
        
        <div className="space-y-5">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
            className="border-[#005EB8] focus:border-[#005EB8]"
          />

          <Input
            label="Telefone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className="border-[#005EB8] focus:border-[#005EB8]"
          />
        </div>
      </div>

      <div className="flex justify-end">
         <Button
        type="submit"
        variant="solid"
        className="bg-[#005EB8] hover:bg-[#004B94] text-white w-full py-3.5 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
      >
        Salvar
      </Button>
      </div>
    </form>
  )
}