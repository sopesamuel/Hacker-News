import { openDatabase } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'task_db';


export async function getDbConnection(){
    if (Platform.OS === "web") {
        return {
          transaction: () => {
            return {
              executeSql: () => {},
            };
          },
        };
      }
    const db = await SQLite.openDatabase({name: DATABASE_NAME, location:'default'});
    return db;
}


export async function createTables(db){
    const query =
    'CREATE TABLE IF NOT EXISTS task(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(512))';
    return db.transaction((tx) =>{
        tx.executeSql(query);
})
}

export async function initDatabase(){
    const db = await getDbConnection();
    await createTables(db);
    db.close();
}

export async function insertTask(db, title){
    const insertQuery = `INSERT INTO task (title) values ('${title}')`;
    return db.transaction((tx) =>{
        tx.executeSql(insertQuery);
})
}
export async function getTasks(db){

    const tasks = [];
    const results = await db.transaction((tx) => tx.executeSql('SELECT id, title FROM task')); 
    results.forEach(function (resultSet){
        for(let index = 0; index < resultSet.rows.length; index++){
            tasks.push(resultSet.rows.item(index));
        }
    });
    return tasks;
}