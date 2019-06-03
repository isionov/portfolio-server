# Backend для проекта Portfolio

## Технологии

- NodeJS
- Express
- MongoDB (в облаке)
- PassportJS
- JWT
  Сервер отдает статику для всех проектов, представленных в Portfolio и предоставляет API для получения и изменения контента клиентской части Portfolio.

## Если не разворачивать локально

Если не разворачивать локально, то работу можно посмотреть по адресу http://www.iliaion-dev.ru

### Что доступно

- [Портфолио](http://www.iliaion-dev.ru) / [репозиторий](https://github.com/isionov/portfolio-client.git)
- [Админка](http://www.iliaion-dev.ru/api) / [репозиторий](https://github.com/isionov/portfolio-admin.git)
- [Такси](http://www.iliaion-dev.ru/taxi) / [репозиторий](https://github.com/isionov/prj-taxi-react.git)
- [Геоотзывы](http://www.iliaion-dev.ru/geocomments) / [репозиторий](https://github.com/isionov/prj-geoComments-js.git)
- [Фильтр друзей ВК](http://www.iliaion-dev.ru/friends) / [репозиторий](https://github.com/isionov/prj-FriendsFilter-js.git)
- [Гамбургер](http://www.iliaion-dev.ru/hamburger) / [репозиторий](https://github.com/isionov/prj-hamburger-spa.git)

## Чтобы развернуть проект:

В данном репозитории уже есть все проекты. Не требуется отдельной установки MongoDB, т.к. используется облачный сервис.

- [Портфолио](http://localhost:3000/) / [репозиторий](https://github.com/isionov/portfolio-client.git)
- [Админка](http://localhost:3000/api) / [репозиторий](https://github.com/isionov/portfolio-admin.git)
- [Такси](http://localhost:3000/taxi) / [репозиторий](https://github.com/isionov/prj-taxi-react.git)
- [Геоотзывы](http://localhost:3000/geocomments) / [репозиторий](https://github.com/isionov/prj-geoComments-js.git)
- [Фильтр друзей ВК](http://localhost:3000/friends) / [репозиторий](https://github.com/isionov/prj-FriendsFilter-js.git)
- [Гамбургер](http://localhost:3000/hamburger) / [репозиторий](https://github.com/isionov/prj-hamburger-spa.git)

Для входа в панель администратора:

- Логин: ilia1
- Пароль: 12345.

```sh
$ git clone https://github.com/isionov/portfolio-server.git
$ cd portfolio-server
$ yarn || npm i
$ yarn start || npn start
```
