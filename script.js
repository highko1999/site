// Находим нашу ссылку по id
const link = document.getElementById('pulse-link');

// Добавляем обработчик события "наведение курсора"
link.addEventListener('mouseenter', function() {
    // Добавляем класс с анимацией
    this.classList.add('pulse');
    
    // Убираем класс после завершения анимации (500ms = 0.5s)
    setTimeout(() => {
        this.classList.remove('pulse');
    }, 500);
});
