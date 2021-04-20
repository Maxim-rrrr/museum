# museum

Всё приложение спроектировано на коленке и написано за неделю,
ибо "всё срочно, дедлайн вчера"

## Стек технологий

---

Использован стек MERN (MongoDB, Express, React, Node.js)

Монга развёрнута на Mongo Atlas так, что всё что надо это создать там БД и добавить наждые IP

## Конфиг

---

В любом случае нужна папка _config_ её шаблон лежит _config.example_

- Файл _default.json_ - конфиг для разработки
- Файл _production.json_ - конфиг для проды

```
{
  "port": 4000,           // Порт на, котором запуститься сервер, на проде указываем порт тот куда перенаправляет веб-сервер, или по варворски указываем сразу 80 или 443
  "url_main_page": "",    // Ссылка на главную страницу, вообще, так-то нигде не используется, но пусть будет
  "mongoUrl": "",         // Ссылка конекта к монге
  "emailSendMessage": "", // Логин от почтового ящика для рассылки сообщений, лучше использовать mail.ru
  "passSendMessage": "",  // Пароль от почтового ящика

  "crypto_key": "",       // Ключ шифрования, да, знаю, руки мне оторвать. Генерируешь строчку да побольше и не меняешь

  "admin_login": "",      // Логин от админки
  "admin_pass": ""        // Пароль от админки
}
```

После заполнения конфигов проверь должна быть ещё в корне папка _uploads_, если нет просто создай пустую

## Зависимости

---

Не знаю, стоит ли вообще уточнять, но приложение как-бы на JS так, что не забываем устанавливать зависимости

```
$ npm i
$ npm run client:install
```

## Для разработки

---

Сервер на _TypeScript_ по этому надо после изменений его каждый раз пересобирать, команда:

```
$ npm run build:ts
```

Костыльно и надо бы нормальный автоматический сборщик написать типо _gulp_

---

Запуск в режиме разработки:

```
$ npm run dev
```

Так же можно запустить отдельно сервер:

```
$ npm run server
```

Отдельно фронтенд:

```
$ npm run client
```

## Прода

---

Надо собрать фронтенд:

```
$ npm run client:build
```

А дальше просто запускаем

```
$ npm start
```

На сервере для запуска я использую _pm2_:

- установка

```
$ npm install pm2 -g
```

- запуск

```
$ pm2 start npm --name "museum" -- start
```

_По хорошему упаковать бы это всё в docker..._

## О приложениии

---

По сути есть всего одна модель в приложении это модель страницы _./Schemes/HeroPage.ts_

Страницы деляться на:

- Главная _/_
- Страница конструктора _/add-hero_
- Админка _/admin & /admin/*_
- Страницы ветеранов _/hero/*_

## Road map

---

- ~~(Баг) Пофиксить баг с картинками в Опере~~
- (Конструктор) Адаптив конструктора под мобилки
- (Админка) Отправка уведомлений о проверке страницы пользователю
- (Админка) Удаление страниц админом
- (Конструктор / Админка) Возможность внесения изменений админом
- (Сервер) Автоматическое удаление отклонёных страниц через какое-то время
- ~~(Конструктор) Добавление подписей к картинкам~~
- ~~(Конструктор) Добавление строчек снизу и сверху секции~~
- (Конструктор) Возможность менять местами секции
- (Конструктор) Возможность менять шрифт
- (Конструктор) Возможность менять размер картинки
- (Конструктор / Hero) Приближение картинок
