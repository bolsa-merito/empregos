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
      className="w-full max-w-full space-y-6 p-8 bg-gradient-to-r from-[#E8F2FD] to-white rounded-2xl shadow-lg"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-full relative bg-white border-l-4 border-[#005EB8] p-6 rounded-xl space-y-4 shadow hover:shadow-xl transition-transform hover:-translate-y-1"
        >
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => removeItem(idx)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
            >
              ×
            </button>
          )}

          <Input
            label="Nome do projeto ou experiência"
            value={item.title}
            onChange={e => handleChange(idx, 'title', e.target.value)}
            placeholder="Ex: App de Tarefas"
            className="border-[#005EB8] focus:border-[#005EB8]"
          />

          <Input
            label="Breve descrição"
            value={item.description}
            onChange={e => handleChange(idx, 'description', e.target.value)}
            placeholder="Descrição rápida…"
            className="border-[#005EB8] focus:border-[#005EB8]"
          />

          <Textarea
            label="Habilidades desenvolvidas ou o que você aprendeu"
            value={item.skills}
            onChange={e => handleChange(idx, 'skills', e.target.value)}
            placeholder="Liste skills, libs, metodologias…"
            className="border-[#005EB8] focus:border-[#005EB8]"
          />
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={addItem}
          className="text-[#005EB8] hover:text-[#003f8a] font-medium"
        >
          + Adicionar nova experiência
        </button>

        <Button
          type="submit"
          variant="solid"
          className="bg-[#005EB8] hover:bg-[#004a9f] text-white px-6 py-2 rounded-lg"
        >
          Salvar
        </Button>
      </div>
    </form>
  );
}
