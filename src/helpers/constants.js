const MODE = 'developer'; // production || developer

export const API_ROOT = 'http://localhost:5500/api'; // сервер node js endpoint

// используеться только для static file в режиме разработки на реальном хостинге должно быть пустая строка
export const staticFiles = MODE === 'developer' ? 'http://localhost:5500/' : '';
