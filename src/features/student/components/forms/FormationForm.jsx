import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/app/components/ui/Inputs/Input';
import Button from '@/app/components/ui/Buttons/Buttons';

export function FormationForm() {
  const [items, setItems] = useState([
    { course: '', startDate: '', endDate: '', institution: '' }
  ]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updated);

    const newErrors = [...errors];
    if (newErrors[index]) {
      newErrors[index][field] = '';
      setErrors(newErrors);
    }
  };

  const addItem = () => {
    setItems([...items, { course: '', startDate: '', endDate: '', institution: '' }]);
    setErrors([...errors, {}]);
  };

  const removeItem = idx => {
    setItems(items.filter((_, i) => i !== idx));
    setErrors(errors.filter((_, i) => i !== idx));
  };

  const validate = () => {
    const newErrors = items.map(item => {
      const itemErrors = {};
      if (!item.course.trim()) itemErrors.course = 'Este campo é obrigatório';
      if (!item.startDate.trim()) itemErrors.startDate = 'Este campo é obrigatório';
      if (!item.endDate.trim()) itemErrors.endDate = 'Este campo é obrigatório';
      if (!item.institution.trim()) itemErrors.institution = 'Este campo é obrigatório';
      return itemErrors;
    });

    setErrors(newErrors);
    return newErrors.every(err => Object.keys(err).length === 0);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log('Dados simulados:', items);
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        navigate('/');
      } catch (error) {
        console.error('Erro no envio:', error);
        alert('Erro ao salvar os dados. Tente novamente.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full space-y-6 p-4">
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
            placeholder="Ex: Engenharia de Software"
            error={errors[idx]?.course}
          />

          <Input
            label="Data de início"
            type="date"
            value={item.startDate}
            onChange={e => handleChange(idx, 'startDate', e.target.value)}
            error={errors[idx]?.startDate}
          />

          <Input
            label="Data de fim"
            type="date"
            value={item.endDate}
            onChange={e => handleChange(idx, 'endDate', e.target.value)}
            error={errors[idx]?.endDate}
          />

          <Input
            label="Instituição"
            value={item.institution}
            onChange={e => handleChange(idx, 'institution', e.target.value)}
            placeholder="Ex: Universidade do Contestado"
            error={errors[idx]?.institution}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="text-sm text-black hover:underline"
      >
        + Adicionar nova formação
      </button>

      <Button type="submit" variant="solid">
        Salvar
      </Button>
    </form>
  );
}
