function calculateTotal() {
    const baseFare = parseFloat(document.getElementById('baseFare').value);
  
    const baggage = document.querySelector('input[name="baggage"]:checked').value;
    const wifi = document.getElementById('wifi').checked ? parseFloat(document.getElementById('wifi').value) : 0;
    const meal = document.getElementById('meal').checked ? parseFloat(document.getElementById('meal').value) : 0;
  
    const total = baseFare + parseFloat(baggage) + wifi + meal;
  
    document.getElementById('totalCost').innerText = `Total: $${total.toFixed(2)}`;
  }
  