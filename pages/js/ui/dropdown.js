function setupDropdown(dropdownButton, dropdownDisplay) {
    dropdownDisplay.forEach(function(item) {
      item.addEventListener('click', function() {
        var selectedText = this.textContent.trim();
        dropdownButton.textContent = selectedText;
      });
    });
  }
  
  const dropdownButton2 = document.querySelector('#dropdownMenuNada');
  const dropdownDisplay2 = document.querySelectorAll('.dropdown-nada');
  setupDropdown(dropdownButton2, dropdownDisplay2);
  
  const dropdownButton3 = document.querySelector('#dropdownMenuKreativitas');
  const dropdownDisplay3 = document.querySelectorAll('.dropdown-kreativitas');
  setupDropdown(dropdownButton3, dropdownDisplay3);
  
  const dropdownButton4 = document.querySelector('#dropdownMenuVariasi');
  const dropdownDisplay4 = document.querySelectorAll('.dropdown-variasi');
  setupDropdown(dropdownButton4, dropdownDisplay4);