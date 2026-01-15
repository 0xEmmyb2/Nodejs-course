import  path  from 'path';
import os from 'os';
import { readFile, writeFile } from 'node:fs';
import EventEmitter from 'events';
import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/api/status'){
        res.writeHead(200, {'content-type' : 'application/json'});
        res.end(JSON.stringify({status: 'Connected to Ethereum'}));
    }
});
server.listen(3000, () => console.log('Server is running on port 3000'));

const myEmmitter = new EventEmitter();
//Listener
myEmmitter.on('tx_confirmed', (data) => {
    console.log(`Transaction ${data.id} confirmed on ${data.block}`);
})

//Emmitting with arguments
myEmmitter.emit('tx_confirmed', { id: '0x123...', block: 19235689});

//Extending the Event Emmitter
class PriceTracker extends EventEmitter{
    start(){
        setInterval(() => {
            this.emit('priceUpdate', { Price: Math.random() * 100});
        }, 1000);
    }
}

const tracker = new PriceTracker();
tracker.on('priceUpdate', (data) => console.log('New Price:', data.price));
tracker.start();

async function manageConfig(){
    try{
        await writeFile('Config.txt', 'Network: Ethereum');
        const data = await readFile('Config.txt', 'utf8');
        console.log(data);
    } catch(err){
        console.log('File Error:', err);
    }
}


console.log(`Free Memory: ${os.freemem() / 1024 / 1024} MB`);
console.log(`User Info: ${os.userInfo().username}`);

const fullPath = path.join('contracts', 'artifacts', 'Token.json');

console.log(path.extname(fullPath));