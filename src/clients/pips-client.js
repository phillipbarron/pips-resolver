const axios = require("axios");
const fs = require("fs");
const https = require("https");

const buildCosmosPath = (filename) =>
  `${process.env.LAMBDA_TASK_ROOT}/cosmos/${filename}`;

const getClientCertificates = () => {
  const certificate = process.env.DEV_CERT_PEM || buildCosmosPath("client.crt");
  const clientKey = process.env.DEV_CERT_PEM || buildCosmosPath("client.key");
  const certificateAuthority =
    process.env.COSMOS_CA || buildCosmosPath("trust.pem");
  return {
    cert: fs.readFileSync(certificate),
    key: fs.readFileSync(clientKey),
    ca: fs.readFileSync(certificateAuthority),
  };
};

const getPipsResponse = async (pid) => {
  const httpsAgent = new https.Agent({
    ...getClientCertificates(),
  });
  const requestUrl = `https://api.live.bbc.co.uk/pips/api/v1/id/?id=${pid}`;
  console.log({ recc: requestUrl });

  const response = await axios.get(requestUrl, {
    httpsAgent,
    headers: {
      Accept: "application/xml",
    },
  });
  return response.data;
};

module.exports = {
  getPipsResponse,
};
