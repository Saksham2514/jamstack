const sendQuery = require("./utils/sendQuery");
const { GET_LINKS } = require("./utils/queries");
const formattedResponse = require("./utils/formattedResponse");
require("dotenv").config();
exports.handler = async (e) => {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { error: err });
  }
};
