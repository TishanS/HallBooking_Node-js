const {MongoClient}=require('mongodb');

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            const client = await MongoClient.connect("mongodb+srv://Tishan:ZS7jEzX5qsbmgTI2@cluster1.ucjer.mongodb.net/?retryWrites=true&w=majority");
            this.selectedDb = client.db('b30we');
            console.log(this.selectedDb)
        }
        catch(error)
        {console.log(error)}
    }
}


