# Task-manager
Приложение представляет из себя реализацию Kanban-доски с возможностью авторизации пользователей и создании различных досок с задачами.
___
## Frontend
Frontend-часть реализована с помощью библиотек React, Redux, а также языка программирования Typescript.  
Также для организации связи с Backend-ом была использована библиотека Axios.  

#### На данный момент клиентская часть включает в себя 7 веб-страниц:
- [Главная страница;](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/HomePage)
- [Главная страница авторизованного пользователя;](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/DesksPage)
- [Страница регистрации;](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/RegistrationPage)
- [Страница авторизации;](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/LoginPage)
- [Страница редактирования рабочего пространства;](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/WorkspacePage)
- [Страница Kanban-доски;](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/DeskPage)
- [Страница "Не найдена";](https://github.com/Vsevolod021/task-manager/tree/main/client/src/pages/NotFoundPage)

## Backend
Backend написан с помощью библиотеки express. В качестве СУБД выбран PostgreSQL, a само взаимодействие с БД выполняется с помощью ORM Sequelize.   
Модели БД представлены в файле [models.js](https://github.com/Vsevolod021/task-manager/blob/main/server/src/models/models.js).  

![Снимок экрана 2023-08-18 220715](https://github.com/Vsevolod021/task-manager/assets/86188778/30df5dea-2624-44e7-b081-105d5cf7262d)

Также приложение поддерживает авторизацию с помощью jwt-токена. 
