function searchCards(query) {
    const cards = document.querySelectorAll('.card-dashboard');
    cards.forEach((card) => {
      if (card.textContent.toLowerCase().includes(query.toLowerCase())) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  
  
  