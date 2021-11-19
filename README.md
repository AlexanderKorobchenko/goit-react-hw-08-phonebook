Настройка проекта на React:

- установка React "npx create-react-app ."
- установка prettier "npm install --save-dev prettier"
- копирорвание файлов-настроек для prettier: .prettierrc.yaml, .prettierrc.json
- установка eslint "npm i eslint@7.11.0"
- инициализация lint-staged и husky "npx mrm@2 lint-staged"
- файл-настройка .huskyrc
- файл-настройка .lintstagedrc
- настройка расширения файлов (внутри package.json): ".{js,jsx}": "eslint
  --cache --fix", ".{js,jsx,css,scss}": "prettier --write"
- установить пакет "npm install --save prop-types"
- установить пакет "npm install gh-pages --save-dev" и настроить его
  (https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

Настройка Netlify:

Глобально:

- npm install netlify-cli -g
- netlify login

В проекте:

- В файл package.json добавляем "predeploy": "npm run build", "deploy": "netlify
  deploy -p"
- Файл-настройка netlify.toml
- Запускаем деплой. При первом деплое: создать и настроить новый сайт, команда
  разработчикой, имя
- Настройка сайта на Netlify:
  https://drive.google.com/file/d/1cTg_FOfymCJdC5_DLyo1l8-_ePNdBryZ/view

Redux:

- npm i redux
- npm i react-router-dom
- npm install react-redux
- npm i @reduxjs/toolkit
- npm i redux-devtools-extension
- npm i redux-persist

Axios
