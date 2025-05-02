import { useState } from 'react';
import { Input } from '@/components/ui/Inputs';
import { Button } from '@/components/ui/Buttons';

export function EducationForm({ onSave }) {
  const [items, setItems] = useState([
    { course: '', startDate: '', endDate: '', institution: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updated = items.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setItems(updated);
  };

  const addItem = () => setItems([...items, { course: '', startDate: '', endDate: '', institution: '' }]);
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

      <button type="button" onClick={addItem} className="text-blue-600">Adicionar novo curso</button>
      <Button type="submit">Salvar</Button>
    </form>
  );
}
