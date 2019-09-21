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
|marketId|true|int|交易对所对应的市场id| |318,4051,4052......|
|klineType|true|string|K 线周期| |1M, 5M, 15M, 30M, 1H, 1D|
|symbol|true|string|交易对| |ETH_QC,......|
|dataSize|false|int|数据量大小||0<=dataSize<=500; 在为0，或者不传时，仅推送1条数据|


### 正确订阅的例子

正确订阅


```
{
    "dataType":"318_KLINE_1M_ETH_QC",
    "dataSize":500, 
    "action":"ADD"
}
```

订阅数据成功返回的例子：

* 全量数据

```     
[
    [
        "K",//dataType,all data
        "318",//marketId
        "eth_qc",//symbol
        "1568979540",//timestamp
        "1528.96",//open
        "1528.96",//high
        "1528.96",//low
        "1528.96",//close
        "0.012",//vol
        "0",//change
        "1",//美元汇率
        "1M",//KLineType
        "false",//is transfered
        "18.35"
    ],
    [
        "K",
        "318",
        "eth_qc",
        "1568979480",
        "1528.21",
        "1528.49",
        "1528.14",
        "1528.27",
        "0.136",
        "0.0039",
        "1",
        "1M",
        "false",
        "207.85"
    ]
]
```

* 增量数据
```
[
    "K",//dataType,update data
    "318",//marketId
    "eth_qc",//symbol
    "1568979540",//timestamp
    "1528.96",//open
    "1530.19",//high
    "1527.78",//low
    "1529.46",//close
    "3.98",//vol
    "0.0327",//change
    "1",//美元汇率
    "1M",//klineType
    "false",// is transfered
    "6091.9"//
]
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
|marketId|true|int|交易对所对应的市场id| |318,4051,4052......|
|symbol|true|string|交易对| |ETH_QC,......|
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

```
[
    [
        "AE",//dataType, all data
        "318", // marketId
        "ETH_QC",// symbol
        "1568975703",//timestamp
        {
            "asks":[
                [=
                    "2200",//price
                    "122.569"//amount
                ],
                [
                    "1889.28",//price
                    "7.897"//amount
                ],
                ......     //  more Market Depth data here
             ]
        },
        {
            "bids":[
                [
                    "1530.22",//price
                    "0.266"//amount
                ],
                [
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
[
"E",//dataType, update data
"318",// marketId
"1568975726",//timestamp
"ETH_QC",//symbol
"ASK",//type,ASK:sell,BID:buy
"1542.46",//price
"19.685"//amount,if amount == 0, it means to delete item from orderbook
]
```

#### 删除
```
[
"E",//dataType,update data
"318",// marketId
"1568975728",//timestamp
"ETH_QC",//symbol
"BID",//type,ASK:sell,BID:buy
"1529.45",//price
"0"// amount,if amount == 0, it means to delete item from orderbook
]

```


## 订阅 Trade Detail 数据 $marketId_TRADE_$symbol


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
|marketId|true|int|交易对所对应的市场id| |318,4051,4052......|
|symbol|true|string|交易对| |ETH_QC,......|
|dataSize|false|int|数据量大小||0<=dataSize<=50; 在为0，或者不传时，仅推送1条数据|

>全量数据买最多50条



### 正确订阅的例子

正确订阅

```
{
   "dataType":"318_TRADE_ETH_QC",
   "dataSize":50,
   "action":"ADD"
}
```

订阅数据成功返回的例子：

* 全量数据

```
[
    [
        "T",//dataType,all data
        "318",//marketId,
        "1568977624",//timestamp
        "ETH_QC",//symbol
        "bid",//type,ask:sell,bid:buy
        "1531.86",//price
        "0.022"//amount
    ],
    [
        "T",
        "318",
        "1568977612",
        "ETH_QC",
        "bid",
        "1531.34",
        "0.014"
    ],
    [
        "T",
        "318",
        "1568977595",
        "ETH_QC",
        "ask",
        "1531.75",
        "0.030"
    ],
    ......// more Trade Detail data here
]

```

* 增量数据

```
[
  "T",//dataType,update data
  "318",//marketId
  "1568977737",//timestamp
  "ETH_QC",//symbol
  "bid",//type,ask:sell,bid:buy
  "1529.5",//price
  "0.006"//amount
]

```





## 订阅 Tickers  数据 ALL_TRADE_STATISTIC_24H

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
|dataSize|false|int|数据量大小||0<=dataSize<=50; 在为0，或者不传时，仅推送1条数据|

>没有全量数据和增量数据的分别，只有一种格式。



### 正确订阅的例子

正确订阅

```
{
   "dataType":"ALL_TRADE_STATISTIC_24H",
   "dataSize":1,
   "action":"ADD"
}
```

订阅数据成功返回的例子：

* 数据

```
{
    "trade_statistic":[
        [
            "4051",//marketId
            "0.00619",//最新成交价
            "0.00685",// 最高价
            "0.00584",// 最低价
            "59733830",//24h 成交量
            "-3.43",//24h  涨跌幅
            "[[1, 0.00619], [2, 0.00597], [3, 0.00596], [4, 0.0062], [5, 0.00619]]",//最近6小时收盘价列表
            "0.00591",//买一价
            "0.0062",//卖一价
            "375332.4314"//24h 成交额, 即 sum(每一笔成交价 * 该笔的成交量)
        ],
        [
            "4052",
            "0.1113",
            "0",
            "0",
            "0",
            "0.0",
            "[]",
            "0.1113",
            "0.2192",
            "0"
        ],
       ......// more ticker data here 
    ]
}

```

* 最近6小时收盘价列表 数据解析

```
"[
   [1, 0.00619], //[序号，收盘价]
   [2, 0.00597], 
   [3, 0.00596], 
   [4, 0.0062], 
   [5, 0.00619]
]"
```




## 订阅 Ticker  数据 $marketId_TRADE_STATISTIC_24H

成功建立和 WebSocket API 的连接之后，向 Server 发送如下格式的数据来订阅数据：

```
{
   "dataType":"4051_TRADE_STATISTIC_24H", 
   "dataSize":"data size for you need"
   "action":"ADD"
}
```
##



|参数名称|是否必须|类型|描述|默认值|取值范围|
|-----|-------|--------|---------|-------|-------|
|marketId|true|int|交易对所对应的市场id| |90......|
|dataSize|false|int|数据量大小||0<=dataSize<=50; 在为0，或者不传时，仅推送1条数据|

>没有全量数据和增量数据的分别，只有一种格式。



### 正确订阅的例子

正确订阅

```
{
   "dataType":"4051_TRADE_STATISTIC_24H",
   "dataSize":50,
   "action":"ADD"
}
```

订阅数据成功返回的例子：

* 全量数据

```
      
{
    "trade_statistic":[
        [
            "4051",//marketId
            "0.00619",//最新价
            "0.00685",//最高价
            "0.00584",//最低价
            "59733830",//24h 成交量
            "-3.43",//24h 涨跌幅
            "[[1, 0.00619], [2, 0.00597], [3, 0.00596], [4, 0.0062], [5, 0.00619]]",// 最近6h 收盘价列表
            "0.00591",//买一价
            "0.0062",//卖一价
            "375332.4314"// 24h 成交额, 即 sum(每一笔成交价 * 该笔的成交量)
        ]
    ]
}

```
* 最近6小时收盘价列表 数据解析

```
"[
   [1, 0.00619], //[序号，收盘价]
   [2, 0.00597], 
   [3, 0.00596], 
   [4, 0.0062], 
   [5, 0.00619]
]"
```



# 错误的Response
```
{
    "dataType":"90_TRADE_STATISTIC_24H",// 订阅的dataType
    "msg":"data not exist",//错误信息
    "code":"5016"// 错误码
}
```



