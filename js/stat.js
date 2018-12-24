'use strict';

// Функция округления элементов массива до целого числа
var roundArrayElements = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.round(array[i]);
  }
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

  var histogramMaxHeight = 150,        //px
      histogramColWidth = 40,       //px
      histogramColBetween = 50,     //px
      histogramColColorUser = 'rgba(255, 0, 0, 1.0)',
      histogramColColorOther = 'rgba(0, 0, 255, ' + Math.random() + ')';

  // Округляем время попытки до целого значения милисекунд
  roundArrayElements(times);

  // Ищем максимальное время попытки
  var max = 0;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  // Получаем высоты столбцов гистограммы и строим гистограмму
  var histogramColHeight = 0;
  for (i = 0; i < times.length; i++) {
    histogramColHeight = Math.round(times[i] * histogramMaxHeight / max);
    if (names[i] == 'Вы') {
      ctx.fillStyle = histogramColColorUser;
    } else {
      ctx.fillStyle = histogramColColorOther;
    }
    ctx.fillRect(120 + i * histogramColBetween, 230, histogramColWidth, -histogramColHeight);
    ctx.fillText(names[i], 120 + i * histogramColBetween, 250);
  }

};
