import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/app/components/ui/Inputs/Input';
import Textarea from '@/app/components/ui/Inputs/Textarea';
import Button from '@/app/components/ui/Buttons/Buttons';
import InputMask from 'react-input-mask';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function DescriptionForm() {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    phone.replace(/\D/g, '').length >= 10;

  const validate = () => {
    const newErrors = {};
    if (!description.trim()) newErrors.description = 'Campo obrigatório';
    if (!email.trim()) {
      newErrors.email = 'Campo obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Formato de e-mail inválido';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Campo obrigatório';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Telefone inválido (mínimo 10 dígitos)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      console.log('Dados simulados:', { description, email, phone });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Dados salvos com sucesso!', {
        onClose: () => navigate('/estudante/home'),
        autoClose: 1500,
        hideProgressBar: true,
        position: 'top-right',
      });
    } catch (error) {
      console.error('Erro no envio:', error);
      toast.error('Erro ao salvar os dados!');
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="w-full max-w-full space-y-8 p-4">
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Editar descrição</h2>
          <Textarea
            label="Quem eu sou"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale um pouco sobre você..."
            rows={4}
            error={errors.description}
          />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Contatos</h2>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
            error={errors.email}
          />

          {/* Máscara no campo telefone */}
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                label="Telefone"
                placeholder="(00) 90000-0000"
                error={errors.phone}
              />
            )}
          </InputMask>
        </div>

        <div className="pt-6">
          <Button type="submit" variant="solid">
            Salvar
          </Button>
        </div>
      </form>
    </>
  );
}
