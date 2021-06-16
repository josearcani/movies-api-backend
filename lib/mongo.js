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
  // todos deben retornar la conexión que creamos arriba
  // regresa una instancia de la DB con los metodos de Mongo
  getAll(collection, query) {
    return this.connect().then(db => {
      return db.collection(collection).find(query).toArray();
    })
  }

  // findOne creamos nuestro query para que regrese un objeto
  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    })
  }

  // en Create, Update y Delete retornamos el Id
  create(collection, data) {
    return this.connect().then(db => {
      return db.collection(collection).insertOne(data);
    }).then(result => result.insertedId);
  }

  // en caso de que no exista, lo va a crear
  update(collection, id, data) {
    return this.connect().then(db => {
      return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    }).then(result => result.upsertedId || id);
  }

  // mostramos el id eliminado
  delete(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) });
    }).then(() => id);
  }

}

module.exports = MongoLib;