const functions = require("firebase-functions");
const midtransClient = require("midtrans-client");

exports.storeApiKey = functions.https.onRequest((request, response) => {
  const apiKey = "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";
  // Set CORS headers
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET, POST");
  response.send(apiKey);
});


// eslint-disable-next-line max-len
exports.generateTransactionToken = functions.https.onRequest((request, response) => {
  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-qNZ_Q2JDodyCAY8EqVe3-8Ja",
    clientKey: "SB-Mid-client-uaUJlYYWHQtS7WSM",
  });

  const email = request.body.email;
  const amount = request.query.amount || 0;

  const parameter = {
    transaction_details: {
      order_id: "ORDER-" + Date.now(),
      gross_amount: amount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      email: email,
    },
  };

  response.set("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
  response.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // eslint-disable-next-line max-len
  response.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  snap.createTransaction(parameter)
      .then((transaction) => {
        const transactionToken = transaction.token;
        response.send({token: transactionToken});
      })
      .catch((error) => {
        console.error(error);
        response.status(500).send(error);
      });
});
