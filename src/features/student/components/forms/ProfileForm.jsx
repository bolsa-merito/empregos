import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/app/components/ui/Inputs/Input';
import Button from '@/app/components/ui/Buttons/Buttons';

export function ProfileForm() {
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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
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

  const removeImage = () => {
    setForm(prev => ({
      ...prev,
      image: null,
      imagePreview: null
    }));
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

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Campo obrigatório';
    if (!form.course.trim()) newErrors.course = 'Campo obrigatório';
    if (!form.institution.trim()) newErrors.institution = 'Campo obrigatório';
    if (!form.semester.trim()) newErrors.semester = 'Campo obrigatório';
    if (!form.period.trim()) newErrors.period = 'Campo obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      console.log('Dados simulados:', form);

      await new Promise(resolve => setTimeout(resolve, 1000)); // 👈 simulação

      navigate('/');
    } catch (error) {
      console.error('Erro no envio:', error);
      alert('Erro ao salvar os dados. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full space-y-6 p-4">
      <h2 className="font-semibold text-lg">Editar informações pessoais</h2>

      <Input
        label="Nome completo"
        value={form.name}
        onChange={e => handleChange('name', e.target.value)}
        placeholder="Placeholder"
        error={errors.name}
      />

      <Input
        label="Nome do curso"
        value={form.course}
        onChange={e => handleChange('course', e.target.value)}
        placeholder="Placeholder"
        error={errors.course}
      />

      <Input
        label="Nome da instituição"
        value={form.institution}
        onChange={e => handleChange('institution', e.target.value)}
        placeholder="Placeholder"
        error={errors.institution}
      />

      <div className="flex gap-4">
        <Input
          label="Semestre"
          value={form.semester}
          onChange={e => handleChange('semester', e.target.value)}
          placeholder="Placeholder"
          className="w-full"
          error={errors.semester}
        />
        <Input
          label="Período"
          value={form.period}
          onChange={e => handleChange('period', e.target.value)}
          placeholder="Placeholder"
          className="w-full"
          error={errors.period}
        />
      </div>

      <div>
        <Input
          label="Principais habilidades"
          value={form.skill}
          onChange={e => handleChange('skill', e.target.value)}
          placeholder="Placeholder"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addSkill}
            className="text-sm text-black hover:underline mt-1"
          >
            Adicionar
          </button>
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
          <div className="mt-2 relative inline-block">
            <img
              src={form.imagePreview}
              alt="Preview"
              className="h-32 object-cover rounded-lg border"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-1 right-1 bg-white bg-opacity-80 hover:bg-red-500 hover:text-white text-xs text-black rounded-full px-2 py-1"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      <Button type="submit" variant="solid">
        Salvar
      </Button>
    </form>
  );
}
