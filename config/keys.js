const mongoAtlasCredentials = {
    username: 'abc123',
    password: '123abc',
    secret: "mysecretkey"
}

const dbname = 'fullstack_mevn';

if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: `mongodb+srv://${mongoAtlasCredentials.username}:${mongoAtlasCredentials.password}>@fullstackmevn.j20j2.mongodb.net/${dbname}?retryWrites=true&w=majority`,
        secret: mongoAtlasCredentials.secret
    };    
} else {

    module.exports = {
        mongoURI: "mongodb://localhost:27017/" + dbname,
        secret: mongoAtlasCredentials.secret
    }

}