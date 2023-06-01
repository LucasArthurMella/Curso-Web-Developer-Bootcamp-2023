const data = '{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}';
const parsedData = JSON.parse(data);

let dog = {breed: "lab", color: "black", isAlive: true, owner: undefined}
dog = JSON.stringify(dog);