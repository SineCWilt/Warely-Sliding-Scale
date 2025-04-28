const userRange = document.getElementById('userRange');
const userCount = document.getElementById('userCount');
const priceDisplay = document.getElementById('price');
const billingToggle = document.getElementById('billingToggle');
const billingType = document.getElementById('billingType');

// Pricing rules
function calculatePrice(users, isYearly) {
  let pricePerUser;

  // Pricing tiers
  if (users <= 10) {
    pricePerUser = 5;
  } else if (users <= 50) {
    pricePerUser = 4.5;
  } else {
    pricePerUser = 4;
  }

  let total = users * pricePerUser;
  
  if (isYearly) {
    total = total * 12 * 0.8; // 20% discount for yearly
  }

  return total.toFixed(2); // 2 decimal places
}

function updateDisplay() {
  const users = parseInt(userRange.value);
  const isYearly = billingToggle.checked;
  
  userCount.textContent = users;
  priceDisplay.textContent = `$${calculatePrice(users, isYearly)}`;
  
  billingType.textContent = isYearly ? "Yearly Billing (20% off)" : "Monthly Billing";
}

// Event listeners
userRange.addEventListener('input', updateDisplay);
billingToggle.addEventListener('change', updateDisplay);

// Initialize
updateDisplay();
