import { useState } from 'react';
import  Textarea  from '@/app/components/ui/Inputs/Textarea';
import  Input  from '@/app/components/ui/Inputs/Input';
import  Button  from '@/app/components/ui/Buttons/Buttons';

export function PersonalInfoForm({ onSave }) {
  const [items, setItems] = useState([
    { title: '', description: '', skills: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updated = items.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setItems(updated);
  };

  const addItem = () => setItems([...items, { title: '', description: '', skills: '' }]);
  const removeItem = idx => setItems(items.filter((_, i) => i !== idx));

  const handleSubmit = e => {
    e.preventDefault();
    onSave(items);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow">
      {items.map((item, idx) => (
        <div key={idx} className="relative border p-4 rounded">
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => removeItem(idx)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
          )}
          <Input
            label="Nome projeto ou experiência"
            value={item.title}
            onChange={e => handleChange(idx, 'title', e.target.value)}
            placeholder="Placeholder"
          />
          <Input
            label="Breve descrição"
            value={item.description}
            onChange={e => handleChange(idx, 'description', e.target.value)}
            placeholder="Placeholder"
          />
          <Textarea
            label="Habilidades desenvolvidas ou o que você aprendeu"
            value={item.skills}
            onChange={e => handleChange(idx, 'skills', e.target.value)}
            placeholder="Placeholder"
          />
        </div>
      ))}

      <button type="button" onClick={addItem} className="text-blue-600">Adicionar nova experiência</button>
      <Button type="submit">Salvar</Button>
    </form>
  );
}