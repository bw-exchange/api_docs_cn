const CryptoJS = require('crypto-js');
const https = require('https');
const qs       = require ('qs')
const BwHost = 'www.bw.io'

const md5 = (payload) =>{
    return CryptoJS.MD5(payload).toString(CryptoJS.enc["Hex"]);
}
const keySort =(x, out = {}) => {
    for (const k of Object.keys (x).sort ())
        out[k] = x[k]
    return out
}
const urlEncode = (Params)=>{
    return qs.stringify(Params);
}

const sign = (Apiid,Timestamp,Params,SecretKey,method) =>{
    let content="";
    let body="";
    if(method == "GET") {
        let query = keySort(Params);
        let keys = Object.keys(query);
        if(keys.length > 0)
            for(let i in keys){
                content += keys[i] + query[keys[i]];
            }
    } else {
        if(Params) {
            content= JSON.stringify(Params);
            body = content;
        }
    }
    let payload = Apiid + Timestamp + content + SecretKey;
    Sign = md5(payload);
    return [body,Sign];
}

const httpsGet= (url,Params,Apiid,Timestamp,Sign)=>{
    let content = urlEncode(Params);
    if (content) {
        url += "?" + content;
    }
    console.log("url",url)
    let options= {
        host:BwHost,
        path:url,
        method:"GET"
    }
    if (Sign) {
        options.headers={
            Apiid,
            Timestamp,
            Sign
        }
    }
    let req = https.request(options, function (res) {  
        console.log('STATUS: ' + res.statusCode);  
        console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (response) {  
            console.log('BODY: ' + response); 
            //TODO: write your code here to handle response 
        });  
    });  
      
    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });  
      
    req.end();  
}


const httpsPost= (url,Params,Apiid,Timestamp,Sign)=>{
  
    let options= {
        host:BwHost,
        path:url,
        method:"POST"
    }
    if (Sign) {
        options.headers={
            Apiid,
            Timestamp,
            Sign
        }
    }
    let req = https.request(options, function (res) {  
        console.log('STATUS: ' + res.statusCode);  
        console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (response) {  
            console.log('BODY: ' + response);  
            //TODO: write your code here to handle response
        });  
    });  
      
    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });  
      
    // 将数据写入请求体
    req.write(Params);//注意这个地方  
      
    req.end(); 
}

const testFetchOrderBook =() => {
    let url = "/api/data/v1/entrusts";
    let Params = {
        marketId:281,
        dataSize:50
    }
    httpsGet(url,Params)
}


const testFetchMarket =() => {
    let url = "/exchange/config/controller/website/marketcontroller/getByWebId";
    httpsGet(url)
}


const testCreateOrder =() => {
    let url = "/exchange/entrust/controller/website/EntrustController/addEntrust";
    let Params = {
        "marketId":"318",
        "price":1025,
        "amount":10,
        "rangeType":0,
        "type":1
    }
    let Apiid ="your Access Key";
    let Timestamp=Date.now();
    let SecretKey="your SecretKey";
    let [body,Sign] = sign(Apiid,Timestamp,Params,SecretKey,"POST");
    httpsPost(url,body,Apiid,Timestamp,Sign);
}


const testFetchOrder =() => {
    let url = "/exchange/entrust/controller/website/EntrustController/getEntrustById";
    let Params = {
        "marketId":"318",
        "entrustId":"your order_id"
    }
    let Apiid ="your Access Key";
    let Timestamp=Date.now();
    let SecretKey="your SecretKey";
    let [body,Sign] = sign(Apiid,Timestamp,Params,SecretKey,"GET");
    httpsGet(url,Params,Apiid,Timestamp,Sign);
}




(function main(){
    // testFetchOrderBook();
    // testFetchMarket();
    // testCreateOrder();
    // testFetchOrder();
})();