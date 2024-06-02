Проект создан с помощью [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Использует Next.js, TypeScript, react-hook-form и Material UI. Состоит из стартовой страницы с временными лотами для записи на прием, при клике по одному из которых открывается реакт форма с несколькими полями.

## Getting Started

Для запуска ввести:

```bash
npm install

npm run dev
```

Далее открыть [http://localhost:3000](http://localhost:3000) в браузере.

## Реализовано:
- Стартовая страница с лотами для записи
- Роутинг при клике на слот на страницу с формой
- Верстка формы (с react-hook-form) с рядом инпутов: выбор даты, выбор времени, имя/никнейм, email, телефон, промокод, согласия (чекбоксы)
- Валидация имейла
- Валидация телефона с маской
- Имитация отправки формы

## TODO:
- Динамически создавать слоты исходя из текущего времени
- Передавать дату и время выбранного слота в форму в DatePicker и TimePicker
- Модальное окно с вводом кода, отправленного на телефон
- Сохранение данных со всех инпутов
- При отправке формы роутинг на страницу с поздравлением об успешной оплате с выводом данных из формы
- Поправить типизацию
- Доработать адаптив под мобильные устройства
