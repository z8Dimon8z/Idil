// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Свой код пишем здесь
// акардеон
const accordion = () => { //функция переключения акардион списка вопросов
  const characteristicsListElem = document.querySelector('.questions__list'); // получаем список вопросов
  const characteristicsItemElems = document.querySelectorAll('.questions__item'); // получаем элемент списка

  //Если изначально в HTML дать какому-либо спойлеру active, то планвости не будет, так как не прописан height. Этот скрипт исправляет это:
  characteristicsItemElems.forEach(elem => { // устанавлевыет один открытый таб в верстке прописываем открытому табу active
    if (elem.children[1].classList.contains('active')) {
      elem.children[1].style.height = elem.children[1].scrollHeight + "px";
    }
  });

  const open = (button, dropDown) => { // функция открытия таба
    //Закрыть все спойлеры
    closeAllDrops(button, dropDown);

    //Изначально свойство height равно 0. Потом мы приравниваем его к scrollHeight, чтобы сработал transition. И лишь затем добавляяем класс active, который устанавливает height на auto
    dropDown.style.height = dropDown.scrollHeight + "px"; // устанавливаем высоту таба
    button.classList.add('active');
    dropDown.classList.add('active');
  };

  const close = (button, dropDown) => { // функция закрытие таба
    button.classList.remove('active');
    dropDown.classList.remove('active');
    dropDown.style.height = ''; //обнуляем значение, и он возьмет его из css(height: 0)
  };

  const closeAllDrops = (button, dropDown) => { // функция закратия других окон при открытом одном
    characteristicsItemElems.forEach(elem => { // перебор элементов всех
      if (elem.children[0] !== button && elem.children[1] !== dropDown) {
        //Закрыть все спойлеры кроме переданных button и dropDown. Здесь childern[0] и children[1] это кнопка и контент соответственно

        //Закрываем только те айтемы, у которых есть active
        if (elem.children[0].classList.contains("active")) close(elem.children[0], elem.children[1]);
      }
    });
  };

  characteristicsListElem.addEventListener('click', event => { // навешиваем событие на кнопку открытия таба с делегированием
    const target = event.target;
    if (target.classList.contains('questions__title')) { // определяем по какому элементу кликнули
      const parent = target.closest('.questions__item'); // ищем родителя кнопки подымаемся к нему с помощью closest
      const description = parent.querySelector('.questions__description'); //открываем вопрос 
      description.classList.contains('active') // проверяем наличе класса active
        ?
        close(event.target, description) :
        open(event.target, description);
    }

  });

  //Если нужно, чтобы аккордеон закрывался при клике мимо него
  document.addEventListener('click', event => {
    const target = event.target;
    if (!target.closest('.questions__list')) {
      closeAllDrops();
    }
  });
};

accordion();
