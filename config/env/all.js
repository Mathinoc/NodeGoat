// default app configuration
const port = process.env.PORT || 4000;
let db = "mongodb://mongoadmin:secret@localhost:27888/nodegoat?authSource=admin";
// let db = "mongodb://127.0.0.1:27017/nodegoat";
// let db = process.env.MONGODB_URI || "mongodb://localhost:27017/nodegoat?keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=3600000";
// let db = process.env.MONGODB_URI || "mongodb+srv://mathinoc:mongodb@cluster0.i2gsc.mongodb.net/nodegoat?retryWrites=true&w=majority";
// MONGO_URI=mongodb://user:password@127.0.0.1:27017/dbname?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000
module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost",
    environmentalScripts: []
};

