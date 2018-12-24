'use strict';

// Функция округления элементов массива до целого числа
var roundArrayElements = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.round(array[i]);
  }
}

// Функция поиска элемента массива с наибольшим значением
var getMaxElement = function (array) {
  var maxElement = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramMaxHeight = 150, //px
      histogramColWidth = 40,   //px
      histogramColBetween = 50, //px
      histogramInitialX = 120,  //px
      histogramInitialY = 270,  //px
      histogramStep = 20,       //px
      histogramColColorUser = 'rgba(255, 0, 0, 1.0)',
      histogramColColorOther = 'rgba(0, 0, 255, ' + Math.random() + ')';

  // Округляем время попытки до целого значения милисекунд
  roundArrayElements(times);

  // Ищем максимальное время попытки
  var max = getMaxElement(times);

  // Получаем высоты столбцов гистограммы и строим гистограмму
  var histogramColHeight = 0;
  for (i = 0; i < times.length; i++) {
    histogramColHeight = Math.round(times[i] * histogramMaxHeight / max);
    if (names[i] == 'Вы') {
      ctx.fillStyle = histogramColColorUser;
    } else {
      ctx.fillStyle = histogramColColorOther;
    }
    ctx.fillRect(histogramInitialX + i * histogramColBetween, histogramInitialY - histogramStep * 2, histogramColWidth, -histogramColHeight);
    ctx.fillText(names[i], histogramInitialX + i * histogramColBetween, histogramInitialY - histogramStep);
  }
};
