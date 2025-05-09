import { Link } from 'react-router'
import { useState } from 'react';
import { Search, Briefcase, GraduationCap, Star, ChevronRight, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('estudantes');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap size={32} className="text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EstagioConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setActiveTab('estudantes')}
                className={`px-3 py-2 font-medium rounded-md ${
                  activeTab === 'estudantes' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Estudantes
              </button>
              <button 
                onClick={() => setActiveTab('empresas')}
                className={`px-3 py-2 font-medium rounded-md ${
                  activeTab === 'empresas' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Empresas
              </button>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'estudantes' ? (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Encontre uma vaga de estágio</h1>
                    <p className="text-xl mb-8">Conectamos empresas a estudantes talentosos prontos para iniciar suas carreiras</p>
                    <div className="flex">
                      <Link to={'/estudante/home'} className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                        Cadastrar perfil
                      </Link>
                      <button className="ml-4 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
                        Saiba Mais
                      </button>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl ml-auto" style={{ maxWidth: "400px" }}>
                      <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Entre com sua conta</h2>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">Email</label>
                          <div className="relative">
                            <input 
                              type="email" 
                              placeholder="seu@email.com" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10" 
                            />
                            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                          </div>
                        </div>
                        <div className="mb-6">
                          <div className="flex justify-between mb-2">
                            <label className="text-gray-700">Senha</label>
                            <a href="#" className="text-blue-600 text-sm hover:underline">Esqueci minha senha</a>
                          </div>
                          <div className="relative">
                            <input 
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10" 
                            />
                            <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                            <button 
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-3 text-gray-400"
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                          Entrar
                        </button>
                        <div className="mt-4 text-center">
                          <a href="#" className="text-blue-600 text-sm hover:underline">Ainda não possuo cadastro</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Company Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Encontre os melhores estagiários para sua empresa</h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto">Publique vagas de estágio e conecte-se com estudantes qualificados que atendam às necessidades específicas da sua empresa</p>
                <div className="flex justify-center">
                  <Link to={'/empresa/home'} className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center">
                    <Briefcase size={20} className="mr-2" />
                    Cadastrar Empresa
                  </Link>
                  <button className="ml-4 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
                    Como Funciona
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Por que escolher o EstagioConnect?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Star size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Estudantes Qualificados</h3>
                  <p className="text-gray-600">Acesso a estudantes classificados por desempenho acadêmico e habilidades verificadas.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Search size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Busca Avançada</h3>
                  <p className="text-gray-600">Filtre candidatos por curso, habilidades, disponibilidade e localização.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Processo Simplificado</h3>
                  <p className="text-gray-600">Gerenciamento completo do processo de seleção dentro da plataforma.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <GraduationCap size={28} />
                <span className="ml-2 text-xl font-bold">EstagioConnect</span>
              </div>
              <p className="mt-4 text-gray-400">Conectando o futuro profissional com as melhores oportunidades.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Estudantes</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Criar perfil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Buscar vagas</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresas</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Publicar vagas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Buscar candidatos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Suporte</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">contato@estagioconnect.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 EstagioConnect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}