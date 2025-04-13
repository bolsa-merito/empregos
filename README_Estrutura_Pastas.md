# 🗂 Estrutura de Pastas — Projeto React + Vite + Tailwind + React Router

Este projeto foi estruturado com foco em escalabilidade, organização e separação clara de responsabilidades, utilizando Vite como bundler, React com React Router para navegação e Tailwind CSS para estilização.

## 📁 Estrutura

```
src/
│
├── assets/                # Arquivos estáticos (imagens, ícones, fontes)
│
├── components/            # Componentes reutilizáveis e genéricos
│   └── ui/                # Componentes de UI (Botões, Inputs, etc)
│
├── features/              # Funcionalidades por domínio (Domain Driven Design)
│   └── auth/              # Exemplo: autenticação (login, cadastro, etc)
│       ├── components/    # Componentes específicos dessa funcionalidade
│       ├── hooks/         # Hooks específicos
│       ├── services/      # Requisições e lógica de API
│       └── pages/         # Páginas internas da feature
│
├── hooks/                 # Hooks reutilizáveis em todo o projeto
│
├── lib/                   # Instâncias de bibliotecas e helpers (ex: axios)
│
├── pages/                 # Páginas principais do app (ex: Home, About)
│
├── router/                # Configuração das rotas com React Router
│
├── store/                 # Gerenciamento de estado global (Context API, Zustand, etc)
│
├── styles/                # Estilos globais e configurações do Tailwind
│
├── utils/                 # Funções utilitárias reutilizáveis
│
└── main.tsx               # Entry point do projeto
```

## 📌 Boas Práticas

- **Separação por funcionalidade (features/)** ajuda na escalabilidade e manutenibilidade do projeto.
- **Componentes genéricos** ficam em `components/ui`, enquanto específicos por funcionalidade vão em `features/xxx/components`.
- Utilize **hooks personalizados** para encapsular lógica reutilizável em `hooks/` ou dentro das features.
- Configure **aliases** no `vite.config.ts` para facilitar os imports:

```ts
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

Com isso, você pode importar com:

```tsx
import { Button } from '@/components/ui/Button'
```

---

## 📁 Exemplo de Rota

```tsx
// src/router/routes.tsx
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/features/auth/pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])
```

---

## ✅ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---