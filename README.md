# 📘 Dashboard Settings – Next.js + TailwindCSS + Radix UI

<div align="center">

<!-- Badges principais -->
![Next.js](https://img.shields.io/badge/Next.js-16.0.1-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<!-- UI / animação / utilitários -->
![Radix UI](https://img.shields.io/badge/Radix_UI-%20-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![Tailwind Variants](https://img.shields.io/badge/Tailwind_Variants-3.1-9333EA?style=for-the-badge)
![tailwind-merge](https://img.shields.io/badge/tailwind--merge-1.14-0ea5e9?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![AutoAnimate](https://img.shields.io/badge/AutoAnimate-0.9-00C7B7?style=for-the-badge)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-%20-7C3AED?style=for-the-badge)

</div>

---

✨ Sobre o Projeto

Este projeto é um Dashboard de Configurações totalmente customizado, construído com componentes reutilizáveis, animações suaves e foco em boas práticas.

A aplicação inclui:

✅ Sidebar responsiva com collapsible

✅ Tabs com scroll horizontal (Radix Scroll Area)

✅ Formulário completo com Inputs compostos

✅ Upload de arquivos com pré-visualização e estados (progresso, sucesso, erro)

✅ Select customizado utilizando Radix Select + animações

✅ Dark mode com Tailwind

✅ Arquitetura limpa e organizada em componentes desacoplados

✅ Animações de clique e interação usando Framer Motion

✅ AutoAnimate para transições automáticas

✅ Tailwind Variants para organização e variação de estilos

---

🧩 Principais Funcionalidades:


🔹 1. Sidebar Responsiva com Radix Collapsible

Sidebar que se expande e retrai, mantendo acessibilidade e animações suaves.

🔹 2. Tabs animadas com Scroll Horizontal

Utilizando @radix-ui/react-tabs e @radix-ui/react-scroll-area.

🔹 3. Formulário completo com Inputs Compositivos

Divididos em:

Input.Root

Input.Prefix

Input.Control

🔹 4. Upload de Arquivos com Preview

Componente totalmente modular usando:

FileInput.Root

FileInput.Trigger

FileInput.Control

FileInput.ImagePreview

FileInput.FileList

FileItem com estados: progress, success, error

🔹 5. Select Customizado

Criado com Radix Select + animações personalizadas via CSS e Tailwind Variants.

🔹 6. Modo Escuro

Habilitado via darkMode: 'class' no Tailwind.

---

🐛 Resolução de Bugs Enfrentados
<br>
1. Tailwind não aplicava estilos

Erro:
````
No utility classes were detected in your source files.
````
Causa: tailwind.config.js apontava para ./src/**/* mas o projeto usa app/ e components/.

Correção aplicada:
````
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
````
2. Erro: Module not found: Can't resolve 'tailwind-merge'

Causa: instalação do tailwind-variants sem a dependência peer tailwind-merge.

Correção:
````
npm install tailwind-merge
````
<br>

3. Duplicação da seção de upload

Causa: duas implementações coexistiam no mesmo formulário. Correção: removido o bloco antigo e mantido apenas o componente FileInput.

<br>

4. Problemas de foco e acessibilidade

Solução com focus-visible e group-focus-visible.

Ajuste de navegação via teclado.

<br>

5. Select quebrando

Causa: falta de animações personalizadas + configuração incorreta do Radix. Correção:

Criados keyframes slideDownAndFade e slideUpAndFade.

Ajustes no Trigger e Content.

<br>

6. Sidebar não responsiva

Solução: uso de @radix-ui/react-collapsible para controlar abertura e responsividade.
---

📁 Estrutura de Pastas
```
app/
 ├── components/
 │    ├── Button/
 │    ├── SettingsTabs/
 │    ├── Form/
 │    │    ├── Input/
 │    │    ├── FileInput/
 │    │    ├── Select/
 │    │    └── Textarea/
 ├── page.tsx
 └── globals.css
````
---
🚀 Como Rodar o Projeto
1. Instale as dependências
````
   npm install
`````

2. Rode o projeto
````
npm run dev
````
3. Abra no navegador
````
http://localhost:3000
````

---
🔧 Tecnologias & Conceitos

Componentização avançada

API de Slots com Tailwind Variants

Responsividade com Radix UI

Hooks para controle de estado e IDs exclusivos

Acessibilidade (ARIA) integrada
---

 Desenvolvido por

Vanessa Gomes – Desenvolvedora Web




