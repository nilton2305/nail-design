# Nayna Nails

Site de uma página para a nail designer Nayna: serviços, valores, sobre, galeria e agendamento. Feito em React + Tailwind CSS + Vite.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Gerar versão de produção

```bash
npm run build
```

Os arquivos finais vão para a pasta `dist/`, prontos para publicar em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

## Estrutura

```
src/
  App.jsx          -> monta o NaynaNails
  NaynaNails.jsx    -> todo o conteúdo e as seções do site
  index.css         -> diretivas do Tailwind
index.html
tailwind.config.js
vite.config.js
```

## Antes de publicar de verdade

- Troque as fotos de banco (Pexels) pelas fotos reais dos trabalhos da Nayna — estão todas dentro de `src/NaynaNails.jsx`, procure por `images.pexels.com`.
- Atualize WhatsApp, Instagram, endereço e horário de atendimento (também em `NaynaNails.jsx`).
- Revise os preços dos serviços.

## Subir para o GitHub

```bash
git init
git add .
git commit -m "Primeiro commit: site Nayna Nails"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```
