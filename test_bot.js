const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота, который вы получили от BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Событие, которое сработает при получении сообщения от пользователя
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Отвечаем на полученное сообщение
    bot.sendMessage(chatId, `Вы написали: ${messageText}`);
});

// Событие, которое сработает при нажатии на команду /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Отправляем приветственное сообщение пользователю
    bot.sendMessage(chatId, 'Привет! Я бот на Node.js. Напиши мне что-нибудь!');
});