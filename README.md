# EPAM.JS.2016.Lyalkovski
Task 1
Создать пустую страницу и добавить на ней загрузку файлов JavaScript:
Инициализация массива (init.js)
Изменение элементов массива (calc.js)
Вывод данных в консоль браузера (log.js)

Файл “init.js” должен содержать следующий код:  
var data = [];
data[0] = 120;
data[1] = "40";
data[3] = null;
data[4] = 0;
  
Файл “calc.js” должен производить изменения элементов массива по следующим правилам:
Если значение элемента равно 0 – добавить 10
Если значение элемента больше 100 – вычесть 100
Если значение элемента меньше 100 – добавить 100
Если значение элемента не является числом (значение в кавычках рассматривать как число) – не производить никаких изменений
  
Файл “log.js” должен выводить в консоль браузера измененные данные массива по следующим правилам:
Выводить значения элемента в следующем формате: “data[{0}]={1}”, где {0} – порядковый номер элемента в массиве, {1} – строковое представление элемента массива (см. п.2)
Строковое представление элемента массива определяется следующим образом:
Если значение не определено (undefined) – выводить строку “не определено”
Если значение не указано (null) – выводить строку “не указано”
Во всех остальных случаях выводить числовое значение
  
Не обязательное задание (*):
Выполнить задание таким образом, чтобы скрипт “log.js” загружался первым
