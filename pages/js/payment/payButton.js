const payButton1 = document.getElementById('pay-button-1');
const payButton1Text = document.getElementById('pay-button-1-text');
const payButton1Icon = document.getElementById('pay-button-1-icon');

payButton1.addEventListener('click', async function () {
  // Replace the arrow icon with a spinner
  payButton1Icon.classList.remove('fa-arrow-right');
  payButton1Icon.classList.add('fa-spinner', 'fa-spin');

  const transactionToken = await generateTransactionToken(75000);
  window.snap.pay(transactionToken);

  // Change the button back to its original state
  payButton1Text.innerText = 'Berlangganan Sekarang';
  payButton1Icon.classList.remove('fa-spinner', 'fa-spin');
  payButton1Icon.classList.add('fa-arrow-right');
});

const payButton2 = document.getElementById('pay-button-2');
const payButton2Text = document.getElementById('pay-button-2-text');
const payButton2Icon = document.getElementById('pay-button-2-icon');

payButton2.addEventListener('click', async function () {
  // Replace the arrow icon with a spinner
  payButton2Icon.classList.remove('fa-arrow-right');
  payButton2Icon.classList.add('fa-spinner', 'fa-spin');

  const transactionToken = await generateTransactionToken(150000);
  window.snap.pay(transactionToken);

  // Change the button back to its original state
  payButton2Text.innerText = 'Berlangganan Sekarang';
  payButton2Icon.classList.remove('fa-spinner', 'fa-spin');
  payButton2Icon.classList.add('fa-arrow-right');
});