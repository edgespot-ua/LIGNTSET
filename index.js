const sql = require('mssql');

const config = {
    server: 'DESKTOP-UVSPOF4',
    database: 'data_1',
    options: { encrypt: true, trustServerCertificate: true },
    authentication: {
        type: 'ntlm',
        options: {
            domain: 'DESKTOP-UVSPOF4'
        }
    }
};

async function getProducts() {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM products');
        console.log(result.recordset);
    } catch (err) {
        console.error(err);
    }
}

getProducts();
