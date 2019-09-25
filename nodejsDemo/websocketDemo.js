const WebSocket = require('ws');
const ws_url = 'wss://kline.bw.io/websocket'
let ws = undefined;
(function main(){
    console.log('start to conection bw websocket')
    ws = new WebSocket(ws_url);
    ws.on('open',()=>{
        console.log('websocket has connected');
        //TODO:订阅数据
        ws.send(JSON.stringify({
            "dataType":"281_KLINE_15M_BTC_USDT",
            "dataSize":500, 
            "action":"ADD"
        }))
    })
    ws.on('message',(msg)=>{
        console.log('websocket receiver message');
        //TODO 数据处理
        console.log(JSON.stringify(msg))
    })
    ws.on('close',()=>{
        console.log('websocket has connected');
        //TODO something else
    })
    ws.on('error',()=>{
        console.log('websocket has connected');
        //TODO something else
    })

    

})();