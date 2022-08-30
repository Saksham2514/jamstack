const sendQuery = require("./utils/sendQuery");
const { DELETE_LINKS } = require("./utils/queries");
const formattedResponse = require("./utils/formattedResponse");
require("dotenv").config();
exports.handler = async (e) => {
  if (e.httpMethod !== 'DELETE') {
    return formattedResponse(405, { err: 'Method not supported' });
  }
  try {

    const {id} = JSON.parse(e.body)
    const {deleteLink: deletedLink} = await sendQuery(DELETE_LINKS, {id} );
    return formattedResponse(200, deletedLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { error: err });
  }
};