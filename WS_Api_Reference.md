# WebSocket API Reference
## 订阅 KLine 数据  $marketId_KLINE_$klineType_$symbol

成功建立和 WebSocket API 的连接之后，向 Server 发送如下格式的数据来订阅数据：

```
{
   "dataType":"$marketId_KLINE_$klineType_$symbol", 
   "dataSize":"data size for you need"
   "action":"ADD"
}
```
##

|参数名称|是否必须|类型|描述|默认值|取值范围|
|-----|-------|--------|---------|-------|-------|
|marketId|true|int|交易对所对应的市场id| |90......|
|klineType|true|string|K 线周期| |1M, 5M, 15M, 30M, 1H, 1D|
|symbol|true|string|交易对| |BTC_KRW,ETH_USDT,BTC_USDT......|
|dataSize|false|int|数据量大小||0<=dataSize<=500; 在为0，或者不传时，仅推送1条数据|


### 正确订阅的例子

正确订阅

```
{
    "dataType":"90_KLINE_1M_BTC_KRW",
    "dataSize":500, 
    "action":"ADD"
}
```

订阅数据成功返回的例子：

```
{
// 后面统一补充
}
```

## 订阅 Market Depth 数据 $marketId_ENTRUST_ADD_$klineType_$symbol


成功建立和 WebSocket API 的连接之后，向 Server 发送如下格式的数据来订阅数据：

```
{
   "dataType":"$marketId_ENTRUST_ADD_$klineType_$symbol", 
   "dataSize":"data size for you need"
   "action":"ADD"
}
```
##



|参数名称|是否必须|类型|描述|默认值|取值范围|
|-----|-------|--------|---------|-------|-------|
|marketId|true|int|交易对所对应的市场id| |90......|
|symbol|true|string|交易对| |BTC_KRW,ETH_USDT,BTC_USDT......|
|dataSize|false|int|数据量大小||0<=dataSize<=50; 在为0，或者不传时，仅推送1条数据|

>买盘卖盘各自最多50条，后续版本全量数据可能会发多次，接收到全量数据后清空替换掉所有盘口。



### 正确订阅的例子

正确订阅

```
{
   "dataType":"318_ENTRUST_ADD_ETH_QC",
   "dataSize":50,
   "action":"ADD"
}
```

订阅数据成功返回的例子：

* 全量数据

```[
    [
        "AE",// all data
        "318", // marketId
        "ETH_QC",// symbol
        "1568975703",//timestamp
        {
            "asks":[
                [             //sell1
                    "2200",//price
                    "122.569"//amount
                ],
                [             //sell2
                    "1889.28",//price
                    "7.897"//amount
                ],
                ......     //  more Market Depth data here
             ]
        },
        {
            "bids":[
                [             //buy1
                    "1530.22",//price
                    "0.266"//amount
                ],
                [             //buy2
                    "1529.64",//price
                    "0.524"//amount
                ],
                ...... //  more Market Depth data here
             ]
        }
    ]
]
```

* 增量数据
#### 新增/修改

```
["E","318","1568975726","ETH_QC","ASK","1542.46","19.685"]
```

#### 删除
```
["E","318","1568975728","ETH_QC","BID","1529.45","0"]

```


## 订阅 Market Depth 数据 $marketId_TRADE_$symbol


成功建立和 WebSocket API 的连接之后，向 Server 发送如下格式的数据来订阅数据：

```
{
   "dataType":"$marketId_TRADE_$symbol", 
   "dataSize":"data size for you need"
   "action":"ADD"
}
```
##



|参数名称|是否必须|类型|描述|默认值|取值范围|
|-----|-------|--------|---------|-------|-------|
|marketId|true|int|交易对所对应的市场id| |90......|
|symbol|true|string|交易对| |BTC_KRW,ETH_USDT,BTC_USDT......|
|dataSize|false|int|数据量大小||0<=dataSize<=50; 在为0，或者不传时，仅推送1条数据|

>全量数据买最多50条



### 正确订阅的例子

正确订阅

```
{
   "dataType":"90_TRADE_BTC_KRW",
   "dataSize":50,
   "action":"ADD"
}
```

订阅数据成功返回的例子：

* 全量数据

```
{
// 后面统一补充
}

```

* 增量数据

```
{
// 后面统一补充
}

```





## 订阅 Market Depth 数据 ALL_TRADE_STATISTIC_24H

成功建立和 WebSocket API 的连接之后，向 Server 发送如下格式的数据来订阅数据：

```
{
   "dataType":"ALL_TRADE_STATISTIC_24H", 
   "dataSize":"data size for you need"
   "action":"ADD"
}
```
##



|参数名称|是否必须|类型|描述|默认值|取值范围|
|-----|-------|--------|---------|-------|-------|
|marketId|true|int|交易对所对应的市场id| |90......|
|symbol|true|string|交易对| |BTC_KRW,ETH_USDT,BTC_USDT......|
|dataSize|false|int|数据量大小||0<=dataSize<=50; 在为0，或者不传时，仅推送1条数据|

>全量数据买最多50条



### 正确订阅的例子

正确订阅

```
{
   "dataType":"ALL_TRADE_STATISTIC_24H",
   "dataSize":50,
   "action":"ADD"
}
```

订阅数据成功返回的例子：

* 全量数据

```
{
// 后面统一补充
}

```

* 增量数据

```
{
// 后面统一补充
}

```








