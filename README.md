# Лендинг на NextJs

<img src="./.trash/cover.png">

## Развёртывание
### Для разработки
```bash
docker-compose -f docker-compose.dev.yaml build
docker-compose -f docker-compose.dev.yaml up
```

### Для деплоя
```bash
docker-compose -f docker-compose.prod.yaml build
docker-compose -f docker-compose.prod.yaml up
```

## Прочее
## Скрипт для для гугл-таблицы
Данный скрипт принимает запросы от серверной части некста и записывает данные в таблицу
```js
const app = SpreadsheetApp.getActiveSpreadsheet();
const view = app.getSheetByName('order');

// утилиты
const getCurrDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
}

// основная логика
const main = (data) => {
    const {details, user} = data;

    view.appendRow(
        [
            getCurrDate(),
            user.contactEmail,
            ...details.services,
            user.comment
        ]
    );
}

// обработка post-запроса
const doPost = (e) => {
    const data = JSON.parse(e.postData.contents);

    let isError = !data || !data.details || !data.details.services || !data.user || data.user.comment === undefined || data.user.contactEmail === undefined;
    let errorMessage = '';

    if (!isError) {
        try {
            main(data);
        } catch (error) {
            isError = true;
            errorMessage = 'Ошибка исполнения скрипта: ' + error;
        }
    } else {
        errorMessage = 'Отсутствуют необходимые поля';
    }

    const response = {
        status: !isError,
        message: isError ? errorMessage : undefined
    };

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}

```
