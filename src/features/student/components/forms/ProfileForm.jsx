import { useState } from 'react';
import Input from '@/app/components/ui/Inputs/Input';
import Button from '@/app/components/ui/Buttons/Buttons';
import PropTypes from 'prop-types';

export function ProfileForm({ onSave }) {
  const [form, setForm] = useState({
    name: '',
    course: '',
    institution: '',
    semester: '',
    period: '',
    skill: '',
    skills: [],
    image: null,
    imagePreview: null
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const addSkill = () => {
    const trimmed = form.skill.trim();
    if (trimmed && !form.skills.includes(trimmed)) {
      setForm(prev => ({
        ...prev,
        skills: [...prev.skills, trimmed],
        skill: ''
      }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...form,
      image: form.image,
    };
    onSave(dataToSend);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full space-y-6 p-4"
    >
      <h2 className="font-semibold text-lg">Editar informações pessoais</h2>

      <Input label="Nome completo" value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="Placeholder" />
      <Input label="Nome curso" value={form.course} onChange={e => handleChange('course', e.target.value)} placeholder="Placeholder" />
      <Input label="Nome instituição" value={form.institution} onChange={e => handleChange('institution', e.target.value)} placeholder="Placeholder" />
      
      <div className="flex gap-4">
        <Input label="Semestre" value={form.semester} onChange={e => handleChange('semester', e.target.value)} placeholder="Placeholder" className="w-full" />
        <Input label="Período" value={form.period} onChange={e => handleChange('period', e.target.value)} placeholder="Placeholder" className="w-full" />
      </div>

      <div>
        <Input label="Principais habilidades" value={form.skill} onChange={e => handleChange('skill', e.target.value)} placeholder="Placeholder" />
        <div className="flex justify-end">
          <button type="button" onClick={addSkill} className="text-sm text-black hover:underline mt-1">Adicionar</button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {form.skills.map(skill => (
            <span 
              key={skill} 
              className="bg-gray-200 text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300"
              onClick={() => removeSkill(skill)}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-800">Upload de imagem</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mt-1 text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-black file:text-white
            hover:file:bg-gray-800"
        />
        {form.imagePreview && (
          <img
            src={form.imagePreview}
            alt="Preview"
            className="mt-2 h-32 object-cover rounded-lg border"
          />
        )}
      </div>

      <Button
        type="submit"
        variant="solid"
      >
        Salvar
      </Button>
    </form>
  );
}

ProfileForm.propTypes = {
  onSave: PropTypes.func,
};
