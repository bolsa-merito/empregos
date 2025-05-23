import { useState } from 'react';
import Input from '@/app/components/ui/Inputs/Input';
import Button from '@/app/components/ui/Buttons/Buttons';

export function FormationForm({ onSave }) {
  const [items, setItems] = useState([
    { course: '', startDate: '', endDate: '', institution: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updated);
  };

  const addItem = () =>
    setItems([...items, { course: '', startDate: '', endDate: '', institution: '' }]);

  const removeItem = idx =>
    setItems(items.filter((_, i) => i !== idx));

  const handleSubmit = e => {
    e.preventDefault();
    onSave(items);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full space-y-6 p-4"
    >
      <h2 className="font-semibold text-lg">Formação ou cursos</h2>

      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-full relative bg-white p-4 rounded space-y-4 border border-gray-200"
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
            label="Nome do curso"
            value={item.course}
            onChange={e => handleChange(idx, 'course', e.target.value)}
            placeholder="Placeholder"
          />

          <Input
            label="Data de início"
            type="date"
            value={item.startDate}
            onChange={e => handleChange(idx, 'startDate', e.target.value)}
          />

          <Input
            label="Data de fim"
            type="date"
            value={item.endDate}
            onChange={e => handleChange(idx, 'endDate', e.target.value)}
          />

          <Input
            label="Instituição"
            value={item.institution}
            onChange={e => handleChange(idx, 'institution', e.target.value)}
            placeholder="Placeholder"
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
