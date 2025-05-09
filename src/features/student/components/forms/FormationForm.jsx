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
            label="Nome do curso"
            value={item.course}
            onChange={e => handleChange(idx, 'course', e.target.value)}
            placeholder="Ex: Engenharia de Software"
            className="border-[#005EB8] focus:border-[#005EB8]"
          />

          <Input
            label="Data de início"
            type="date"
            value={item.startDate}
            onChange={e => handleChange(idx, 'startDate', e.target.value)}
            className="border-[#005EB8] focus:border-[#005EB8]"
          />

          <Input
            label="Data de fim"
            type="date"
            value={item.endDate}
            onChange={e => handleChange(idx, 'endDate', e.target.value)}
            className="border-[#005EB8] focus:border-[#005EB8]"
          />

          <Input
            label="Instituição"
            value={item.institution}
            onChange={e => handleChange(idx, 'institution', e.target.value)}
            placeholder="Ex: Universidade X"
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
          + Adicionar novo curso
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
