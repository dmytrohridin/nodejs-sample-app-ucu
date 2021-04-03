const express = require("express");
const app = express();
const CosmosClient = require("@azure/cosmos").CosmosClient;

const port = process.env.PORT || 80
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const client = new CosmosClient({
    endpoint: '<enpoint>', 
    key: '<key>',
    });


app.get("/dbId", (request, response) => {
    const dbId = client.database('test_ucu_db').id;
    response.send(dbId);
});
app.get("/file/:id", async (request, response) => {
    const id = request.params.id;
    const db = client.database('test_ucu_db');
    const container = db.container('file_info');
      
    const { resource: item } = await container.item(id, id).read();
    response.send(item);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});