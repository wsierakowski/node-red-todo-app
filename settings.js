const path = require("path");

module.exports = {
    uiPort: process.env.PORT,
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,
    httpAdminRoot: false,
    httpStatic: path.join(__dirname,"public")
}