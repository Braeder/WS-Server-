const WebSocket = require('ws');
const Walk = require('random-walk');
const ws = new WebSocket.Server({port: 8080});
ws.on('connection', function connection(ws) {


    for (i = 0; i < 26000; i++) {
        let symbolLength = (Math.floor(Math.random() *10) + 1) //+1
        let sym = getRandomString(symbolLength)
        createWalk(sym)
    }


    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    function createWalk(newSymbol) {
        const walk = new Walk
        price = Math.floor(Math.random() * 2000) + 1
        let params = {
            pseudo: true,
            rate: 50,
            type: "positive",
            base: price,
            scale: 1000,
        }
        walk.get("walk", params)
        let arraySend = []
        walk.on("result", result => {
// the one in the for loop sets the amount of objects in the array. to add more objects, change the arguement value to greater than 1
            let eventType = "T"
            let T = "t"
            let S = newSymbol
            //let S = "TSLA"
            let p = result
            let s = (Math.floor(Math.random() * 150) + 1)
            let as = (Math.floor(Math.random() * 20) + 1)
            let bs = (Math.floor(Math.random() * 20) + 1)
            let t = new Date().toISOString()
            let convertedMessage2 = {
                T,
                S,
                p,
                s,
                t,
                // as,
                // bs,
            }
            arraySend.push(convertedMessage2)
            ws.send(JSON.stringify(arraySend));
            arraySend.splice(0, arraySend.length)
        })
    }
})



