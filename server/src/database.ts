import mysql from "promise-mysql";

import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connetion =>{
        pool.releaseConnection(connetion);
        console.log('DB is connected');
    });

export default pool;