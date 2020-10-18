const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // insert data in table
    /*await saveOrphanage(db, {
        lat: "-30.0349568",
        lng: "-51.209057",
        name: "Casa das Crianças",
        about: "Nossa missão é acolher crianças e adolescentes de 0 a 18 anos de idade, que foram vítimas de violência e que são afastadas do seu meio familiar e comunitário, como medida de proteção especial. Convocamos a todos a abraçar a nossa causa. É na primeira infância que a criança forma sua personalidade.",
        whatsapp: "51945562653",
        images: [
            "http://www.acolhida.org.br/wp-content/uploads/slide01.jpg",
            "http://www.acolhida.org.br/wp-content/uploads/2010/11/IMG_0843.jpg",
            "http://www.acolhida.org.br/wp-content/uploads/2010/11/IMG_0838.jpg"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário das visitas: das 18h até 8h",
        open_on_weekends: "0"
    });*/

    // consult data in table
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    //console.log(selectedOrphanages);

    
    // consult only ONE orphanage - by id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    //console.log(orphanage);

    // delete data in table
    //console.log(await db.run('DELETE FROM orphanages'));
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'));
});