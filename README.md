# Memorio (pet project для отработки принципов работы с React App)

## Макет

### Общая информация

Figma - [макет](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=42%3A47)
Макет представлен 2 размерами

- Mobile - 366px
- Desktop - 1366px

Переходный размер для Tablet устройств работает в произвольной переходной вёрстки

### Структура макетов

- [Главная](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=42%3A48)
- [Страница разделов](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A1654)
- [Страница товара](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=156%3A92)
- [Монтаж](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A594)
- [Отзывы](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A1124)
- [Гарантии](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A35)
- [Портфолио](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A1389)
- [Оплата и доставка](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A859)
- [Контакты](https://www.figma.com/file/C9sPnysvW52WBOPMgrMmlR/Memorio?node-id=107%3A329)

## Технологии

Для данного учебного проекта главной целью является отработка навыков и технологий для построения UI приложения. Поэтому в качестве сервера будет выступать локальный сервер на основе [json-server](https://github.com/typicode/json-server). В рамках fake server будут развёрнуты роуты с fake-данными для интеграции на frontend часть приложения.

Frontend часть данного приложения представлена React v18, в основе проекта лежит boilerplate [Create React App](https://create-react-app.dev/). Также используется [React Router](https://v5.reactrouter.com/web/guides/quick-start) для управления навигацией приложения. В качестве state-manager используется [React-Redux](https://react-redux.js.org/).

Список технологий:

- [React](https://ru.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [React-Redux](https://react-redux.js.org/)
- [React-Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [SASS/SCSS preprocessor](https://sass-lang.com/guide)
- [css-modules](https://devopedia.org/css-modules)

## Стурктура приложения

- App.tsx - точка входа в приложения
- lib - директория для хранения вспомогательный функций, store и прочее
  - store - храниение файлов, папок для store
    - action
    - reducers
    - selectors
  - utils - директория с утилитами
- components
- containers
