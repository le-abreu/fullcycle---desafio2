const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const config = {
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb'
};
const mysql = require('mysql')


/*
 * 
 * Http Post - Criar a people
 * 
 */
app.post('/insert', (req, res) => {
    const name = req.body.name;
    if (!name) {
        return res.status(400).send('Nome é obrigatório.');
    }
    const sqlInsert = `INSERT INTO people(name) VALUES('${name}')`;
    const connection = mysql.createConnection(config)
    connection.query(sqlInsert, (err, results) => {
        if (err) {
            return res.send('Erro ao inserir dados: ' + err.message);
        }
        res.send(`<h1>${name} inserido com sucesso!</h1>`);
    });
});


/*
 *
 * Http Get - Lista as peoples
 * 
 */
app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    const sqlSelect = `SELECT name, created_at FROM people`;
    connection.query(sqlSelect, (err, results, fields) => {
        if (err) {
            connection.end();
            return res.send('Erro ao recuperar dados: ' + err.message);
        }
        let responseText = '<h1>Full Cycle Rocks!</h1>';
        responseText += '<ul>';
        for (let i = 0; i < results.length; i++) {
            let date = results[i].created_at;
            let formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
            responseText += `<li>${results[i].name} - ${formattedDate}</li>`;
        }
        responseText += '</ul>';
        connection.end();
        res.send(responseText);
    });
});



app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})