const generateTransactionToken = async (amount) => {
  const user = await firebase.auth().currentUser;

  if (!user) {
    console.log('No user is signed in.');
    return;
  }

  const requestBody = {
    email: user.email,
  };

  const response = await fetch(`https://us-central1-salin-c0750.cloudfunctions.net/generateTransactionToken?amount=${amount}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const data = await response.json();
  const transactionToken = data.token;

  return transactionToken;
};
