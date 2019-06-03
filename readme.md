# Backend для проекта Portfolio

## Технологии

- NodeJS
- Express
- MongoDB (в облаке)
- PassportJS
- JWT
  Сервер отдает статику для всех проектов, представленных в Portfolio и предоставляет API для получения и изменения контента клиентской части Portfolio.

## Чтобы развернуть проект:

В данном репозитории уже есть все проекты. Не требуется отдельной установки MongoDB, т.к. используется облачный сервис.

Сайт Portfolio доступен по адресу http://localhost:3000/
Исходный код - [репозиторий](https://github.com/isionov/portfolio-client.git)

Панель администратора - http://localhost:3000/api
Исходный код - [репозиторий](https://github.com/isionov/portfolio-admin.git)

Для входа в панель администратора:

- Логин: ilia1
- Пароль: 12345.

```sh
$ git clone https://github.com/isionov/portfolio-server.git
$ cd ls-advanced-portfolio
$ yarn || npm i
$ yarn start || npn start
```
