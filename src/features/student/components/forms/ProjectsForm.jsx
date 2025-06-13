import { useState } from 'react';
import Textarea from '@/app/components/ui/Inputs/Textarea';
import Input from '@/app/components/ui/Inputs/Input';
import Button from '@/app/components/ui/Buttons/Buttons';
import PropTypes from 'prop-types';

export function ProjectsForm({ onSave }) {
  const [items, setItems] = useState([{ title: '', description: '', skills: '' }]);
  const [errors, setErrors] = useState([]);

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
    setItems([...items, { title: '', description: '', skills: '' }]);
    setErrors([...errors, {}]);
  };

  const removeItem = idx => {
    setItems(items.filter((_, i) => i !== idx));
    setErrors(errors.filter((_, i) => i !== idx));
  };

  const validate = () => {
    const newErrors = items.map(item => {
      const itemErrors = {};
      if (!item.title.trim()) itemErrors.title = 'Este Campo é Obrigatório!!!!';
      if (!item.description.trim()) itemErrors.description = 'Este Campo é Obrigatório!!!!';
      if (!item.skills.trim()) itemErrors.skills = 'Este Campo é Obrigatório!!!!';
      return itemErrors;
    });

    setErrors(newErrors);
    return newErrors.every(err => Object.keys(err).length === 0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      onSave(items);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full space-y-6 p-4">
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
            error={errors[idx]?.title}
          />

          <Input
            label="Breve descrição"
            value={item.description}
            onChange={e => handleChange(idx, 'description', e.target.value)}
            placeholder="Placeholder"
            error={errors[idx]?.description}
          />

          <Textarea
            label="Habilidades desenvolvidas ou o que você aprendeu"
            value={item.skills}
            onChange={e => handleChange(idx, 'skills', e.target.value)}
            placeholder="Placeholder"
            rows={3}
            error={errors[idx]?.skills}
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

      <Button type="submit" variant="solid">
        Salvar
      </Button>
    </form>
  );
}

ProjectsForm.propTypes = {
  onSave: PropTypes.func
};
