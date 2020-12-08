const tr = require("tor-request");
tr.TorControlPort.password = "TEST";

const main = async () => {
  const body = await request;
  console.info("ip1 ", body);
  tr.newTorSession((err) => {
    request.then((body) => {
      console.info("ip3 ", body);
    });
  });
  const bod2y = await request;
  console.info("ip2 ", bod2y);
};
const options = { url: "https://api.ipify.org", headers: { "user-agent": "giraffe" } };
const request = new Promise((resolve, reject) => {
  tr.request(options, function (err, res, body) {
    if (err) reject(err);
    if (res.statusCode === 200) {
      resolve(body);
    }
  });
});
main();
