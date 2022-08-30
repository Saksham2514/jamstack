const sendQuery = require("./utils/sendQuery");
const { UPDATE_LINKS } = require("./utils/queries");
const formattedResponse = require("./utils/formattedResponse");
require("dotenv").config();
exports.handler = async (e) => {
  if (e.httpMethod !== 'PUT') {
    return formattedResponse(405, { err: 'Method not supported' });
  }
  try {
    const {_id:id,name,url,description,archived} = JSON.parse(e.body)
    
    const {updateLink: updatedLink} = await sendQuery(UPDATE_LINKS, {name,url,description,archived,id} );
    return formattedResponse(200, updatedLink);
  } catch (err) { 
    
    console.error(err);
    return formattedResponse(500, { error: err });
  }
};