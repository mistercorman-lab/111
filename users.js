// Прикрепляем к window, чтобы основной скрипт мог прочитать данные
window.APP_USERS = {
    dkarmanov: {
        password : 'dimon4kj',
        name     : 'Дмитрий Карманов',
        views    : ['codes', 'vacation', 'otgul', 'price']
    },
    ngolovko: {
        password : null, // null означает, что пароль не требуется
        name     : 'Наталья Головко',
        views    : ['price']
    }
    
    // ПРИМЕР ДОБАВЛЕНИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ (не забудьте запятую сверху):
    // ivanov: {
    //     password : '12345',
    //     name     : 'Иван Иванов',
    //     views    : ['otgul', 'price']
    // }
};
