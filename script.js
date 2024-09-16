// Appending characters to the display
function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
  }
  
  // Clearing the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Deleting last character
  function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // Calculating the result
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  