import { useState } from 'react';
import Textarea from '@/app/components/ui/Inputs/Textarea';
import Input from '@/app/components/ui/Inputs/Input';
import Button from '@/app/components/ui/Buttons/Buttons';

export function ProjectsForm({ onSave }) {
  const [items, setItems] = useState([{ title: '', description: '', skills: '' }]);

  const handleChange = (index, field, value) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updated);
  };

  const addItem = () =>
    setItems([...items, { title: '', description: '', skills: '' }]);

  const removeItem = idx => setItems(items.filter((_, i) => i !== idx));

  const handleSubmit = e => {
    e.preventDefault();
    onSave(items);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full space-y-6 p-4"
    >
      <h2 className="font-semibold text-lg">Projetos ou experiências</h2>

      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-full relative p-4 bg-white rounded space-y-4 border border-gray-200"
        >
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => removeItem(idx)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
              aria-label="Remover"
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
            rows={3}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="text-sm text-black hover:underline"
      >
        + Adicionar nova experiência
      </button>

      <Button
        type="submit"
        variant="solid"
      >
        Salvar
      </Button>
    </form>
  );
}
