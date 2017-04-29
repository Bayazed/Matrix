# Найденные баги
## Метод write - 2 бага
### Баг с **sizeLetter**
1. Вызывается метод **write** с входным параметром **word** = "тест" через конструктор класса **Pen** с двумя параметрами. Параметр **inkContainerValue** должен иметь любое позитивное значение больше 0. Параметр **sizeLetter** должен иметь любое негативное значение меньше либо равно 0. Ожидается, что метод **write** вернет пустую строку "". В действительности метод возвращает строку "тест" либо ее часть.
2. Вызывается метод **write** с входным параметром **word** = "тест" через конструктор класса **Pen** с тремя параметрами. Параметр **color** должен иметь любое позивное значение. Остальные интсрукции выполняются аналогично шагу 1.
### Баг с комбинациями **inkContainerValue** и **sizeLetter**
1. Вызывается метод **write** с входным параметром **word** = "тест" через конструктор класса **Pen** с двумя параметрами. Параметру **inkContainerValue** присваиватеся значение 8. Параметру **sizeLetter** присваиватеся значение 2,01. Ожидается, что метод **write** вернет строку "тес". В действительности метод **write** кидает исключение **StringIndexOutOfBoundsException**.
2. Вызывается метод **write** с входным параметром **word** = "тест" через конструктор класса **Pen** с двумя параметрами. Параметру **inkContainerValue** присваиватеся значение 2. Параметру **sizeLetter** присваиватеся значение 0,6. Ожидается, что метод **write** вернет строку "тес". В действительности метод **write** возвращает строку "те".
<br>
## Метод getColor - 2 бага
### Баг с существующими цветами
1. Вызвается метод **getColor** через конструктор класса **Pen** с тремя параметрами. Параметры констурктора **inkContainerValue** и **sizeLette** можно задать любыми. Параметру **color** задать значение "BLACK". Ожидается, что метод **getColor** вернет строку "BLACK". В действительности метод возвращает строку "BLUE".
### Баг с пустым(null) цветом
1. Вызвается метод **getColor** через конструктор класса **Pen** с тремя параметрами. Параметры констурктора **inkContainerValue** и **sizeLette** можно задать любыми. Параметру **color** задать значение null. Ожидается, что метод **getColor** вернет строку "INVISIBLE". В действительности метод возвращает строку "BLUE".
<br>
## Метод doSomethingElse - 1 баг
1. Вызвается метод **doSomethingElse** через конструктор класса **Pen** с тремя параметрами. Параметры констурктора **inkContainerValue** и **sizeLette** можно задать любыми. Параметру **color** задать значение null. Ожидается, что метод **doSomethingElse** выведет в консоль "INVISIBLE". В действительности метод выводит в консоль "null".
