const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })  
        console.log('Conexion Exitosa');
    } catch (err) {
        console.log(err);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}