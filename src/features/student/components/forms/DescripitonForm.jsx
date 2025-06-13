import { useState } from 'react'
import Textarea from '@/app/components/ui/Inputs/Textarea'
import Input from '@/app/components/ui/Inputs/Input'
import Button from '@/app/components/ui/Buttons/Buttons'
import PropTypes from 'prop-types'; 

export function DescriptionForm({ onSave }) {
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState([])



  const handleSubmit = e => {
    e.preventDefault()
    onSave({ description, email, phone })
  }

  

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full space-y-8 p-4"
    >
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">Editar descrição</h2>

        <Textarea
          label="Quem eu sou"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Placeholder"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg">Contatos</h2>

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Placeholder"
        />

        <Input
          label="Telefone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Placeholder"
        />
      </div>

      <div className="pt-6">
        <Button
          type="submit"
          variant="solid"
        >
          Salvar
        </Button>
      </div>
    </form>
  );
}

DescriptionForm.propTypes = {
  onSave: PropTypes.func,
};