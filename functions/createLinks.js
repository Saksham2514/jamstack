const sendQuery = require("./utils/sendQuery");
const { CREATE_LINKS } = require("./utils/queries");
const formattedResponse = require("./utils/formattedResponse");
require("dotenv").config();
exports.handler = async (e) => {
  try {
    if (e.httpMethod !== 'POST') {
      return formattedResponse(405, { err: 'Method not supported' });

    }
    const {name,url,description} = JSON.parse(e.body)
    const {createLink: createdLink} = await sendQuery(CREATE_LINKS, {name,url,description,archived:false} );
    return formattedResponse(200, createdLink);
  } catch (err) {
    console.error(err); 
    return formattedResponse(500, { error: err });
  } 
};