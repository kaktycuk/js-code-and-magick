'use strict';

var SIMILAR_WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SIMILAR_WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var SIMILAR_WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var SIMILAR_WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// получаем случайный элемент массива
var getRandomElement = function (array) {
  var randomElement = array[Math.floor(Math.random()*array.length)];
  return randomElement;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizards = [];
for (var i = 0; i < 4; i++) {
  similarWizards[i] = {};
  similarWizards[i].name = getRandomElement(SIMILAR_WIZARD_NAMES) + ' ' + getRandomElement(SIMILAR_WIZARD_SURNAMES);
  similarWizards[i].coatColor = getRandomElement(SIMILAR_WIZARD_COAT_COLORS);
  similarWizards[i].eyesColor = getRandomElement(SIMILAR_WIZARD_EYES_COLORS);
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var similarWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(similarWizardElement(similarWizards[i]));
};

var setupSimilarList = document.querySelector('.setup-similar-list');
setupSimilarList.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
