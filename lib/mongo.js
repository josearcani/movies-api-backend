const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

// evita que algunos caracteres especiales den problemas al conectarnos
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.port}/${DB_NAME}?retryWrites=true&w=majority`;

// librería de mongodb
class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    // useNweUrlParser es un sistema de parseo, la última config
    this.dbName = DB_NAME;
  }

  // patrón singleton => la conexión a la DB será solo con un cliente, no creará más
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }
          console.log('Connected successfully to mongo');
          resolve(this.client.db(this.dbName));
        })
      })
    }
    return MongoLib.connection
  }
}

module.exports = MongoLib;