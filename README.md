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

### Страницы авторизации и регистрации
![auth](https://github.com/Vsevolod021/task-manager/assets/86188778/dab93d39-7cd7-43a9-b05b-52187a34909a) 

![reg](https://github.com/Vsevolod021/task-manager/assets/86188778/0d6abfee-b6b9-4e78-bff8-17e1b7ed5379)
___
### Страница доски
___
На данный момент реалиовано только создание доски и выбор его названия.   
Сама страница доски уже сверстана и реализована, однако создание задач, их описание и установка времены выполнения задач на данный момент в процессе разработки, хотя и в модели БД все эти опции уже предусмотрены.   
Ниже находится пример этой страницы в Figma  

![deskPage](https://github.com/Vsevolod021/task-manager/assets/86188778/fc897687-e677-45f2-ad7f-cfb04ec3e949)


## Backend
Backend написан с помощью библиотеки express. В качестве СУБД выбран PostgreSQL, a само взаимодействие с БД выполняется с помощью ORM Sequelize.   
Модели БД представлены в файле [models.js](https://github.com/Vsevolod021/task-manager/blob/main/server/src/models/models.js).  

![database](https://github.com/Vsevolod021/task-manager/assets/86188778/30df5dea-2624-44e7-b081-105d5cf7262d)

Также приложение поддерживает авторизацию с помощью jwt-токена. 
