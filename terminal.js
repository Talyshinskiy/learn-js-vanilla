document.addEventListener('DOMContentLoaded', function () {
  var terminalOutput = document.getElementById('terminal-output');
  var terminalInput = document.getElementById('terminal-input');

  // Функция для добавления текста в терминал
  function writeToTerminal(text, className) {
      var outputElement = document.createElement('div');
      outputElement.className = className || '';
      outputElement.textContent = text;
      terminalOutput.appendChild(outputElement);

      // Прокручиваем терминал до конца
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Обработка ввода команды
  terminalInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
          var command = terminalInput.value;
          writeToTerminal('> ' + command, 'command-line');

          // Здесь можно добавить свою логику выполнения команды
          // Например, можно использовать fetch для отправки команды на сервер и получения результата
          // Или просто выводить результат на терминале

          // Пример: выводим результат обратно в терминал
          var result = executeCommandLocally(command);
          writeToTerminal('Результат: ' + result, 'command-output');

          // Очищаем поле ввода
          terminalInput.value = '';
      }
  });

  // Пример выполнения команды локально
  function executeCommandLocally(command) {
      // Здесь можно добавить свою логику выполнения команды
      // В данном случае, просто возвращаем фиктивный результат
      return 'Выполнено успешно';
  }
});
