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
___
### Страницы авторизации и регистрации
![auth](https://github.com/Vsevolod021/task-manager/assets/86188778/dab93d39-7cd7-43a9-b05b-52187a34909a) 

![reg](https://github.com/Vsevolod021/task-manager/assets/86188778/0d6abfee-b6b9-4e78-bff8-17e1b7ed5379)
___
### Страница доски

На странице доски реализовано создание рабочих спринтов, состояний выполнения, задач. Перемещение между спринтами возможно с помощью select'а, а создание в меню доски (символ многоточия).

![deskPage](https://github.com/Vsevolod021/task-manager/assets/86188778/9eb6fbce-6281-4efb-9575-5a2c48ab2303)

Перемещение задач между состояниями осуществляется с помощью drag'n'drop. Также при нажатии на конкретную задачу открытвает модальное окно с возможностью изменения названия задачи, описания и уровня приоритета. Более того, задачи и состояния выполнения задач при необходимости можно удалить. 
___
### Главная страница 

Если пользователь не авторизован, то на главной странице у него отображается приветственная надпись "Добро пожаловать в Task Manager". 
Если же он авторизован, то на экран выводится либо кпопка создания новой доски, либо список уже имеющихся досок.

![mainPage](https://github.com/Vsevolod021/task-manager/assets/86188778/f8297c24-742f-4177-a7ad-504336f7e781)
![mainPageNoDesks](https://github.com/Vsevolod021/task-manager/assets/86188778/88993bad-9260-4615-9ceb-af60fd9a302c)
___
### Страница рабочего пространства

Предусмотрена небольшая кастомизация рабочего пространства: темная и светлая тема, а также цвет рабочей доски.
На данный момент на фронтенде темная тема не реализована, а выбор цвета доступен только среди стандартных. 

![workSpacePage](https://github.com/Vsevolod021/task-manager/assets/86188778/c75e1df2-caa1-4030-9d68-532b9727a618)
___

## Backend
Backend написан с помощью библиотеки express. В качестве СУБД выбран PostgreSQL, a само взаимодействие с БД выполняется с помощью ORM Sequelize.   
Модели БД представлены в файле [models.js](https://github.com/Vsevolod021/task-manager/blob/main/server/src/models/models.js).  

![database](https://github.com/Vsevolod021/task-manager/assets/86188778/30df5dea-2624-44e7-b081-105d5cf7262d)

Также приложение поддерживает авторизацию с помощью jwt-токена. 
