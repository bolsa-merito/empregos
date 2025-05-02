import { useState } from 'react';
import { Input, Textarea } from '@/components/ui/Inputs';
import { Button } from '@/components/ui/Buttons';

export function DescriptionForm({ onSave }) {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ description, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow">
      <Textarea label="Quem eu sou" value={description} onChange={e => setDescription(e.target.value)} placeholder="Placeholder" />
      <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Placeholder" />
      <Input label="Telefone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Placeholder" />
      <Button type="submit">Salvar</Button>
    </form>
  );
}

