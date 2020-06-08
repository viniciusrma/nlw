//Import sqlite3 depedencies
const sqlite3 = require("sqlite3").verbose()

//Create the object that will work in the database
const db = new sqlite3.Database("./src/database/database.db");


module.exports = db
//use database object to the operations
//db.serialize(() => {
  
//     //1. Create a table
//     db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
//   `)

//     //2. Add data to the table
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
//   `

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº XXX",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos eletrônicos, lâmpadas"
//     ]


//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)  
    
    // //3. Consult data from the table
    // db.all('SELECT name FROM places', function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // }) 
      
    
    //4. Delete data from the table
    // db.run('DELETE FROM places WHERE id = ?', [1], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
//})


