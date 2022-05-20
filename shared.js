const {MongoClient}=require('mongodb');

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            const client = await MongoClient.connect("mongodb+srv://Tishan:3yhmUiSzBoxr4sru@cluster1.ucjer.mongodb.net/?retryWrites=true&w=majority");
            this.selectedDb = client.db('b30we');
            console.log(this.selectedDb)
        }
        catch(error)
        {console.log(error)}
    }
}


