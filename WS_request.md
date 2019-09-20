# 请求与订阅说明
## 1. 访问地址 
> wss://api.huobi.pro/ws
## 2. WebSocket库
【ws】 是 Node.js 下的 WebSocket 库。
## 3.请求说明
ws的API都可以在一个WebSocket 连接进行处理, 通过订阅报文中的action参数来订阅服务器数据。k线、盘口、交易记录数据三类数据服务器首先会返回一次全量数据，之后有新数据时会主动推送。
* action 参数结构:
> `{
   "dataType":"1_ENTRUST_ADD_EOS_QTUM", 
   "dataSize":1,
   "action":"ADD"
}`
> * dataType: 请求的数据类型，详细看action语法
> * dataSize: 请求的数据数量，决定首次全量数据的数量，不传或者为 0 则返回一条数据
> * action: 请求的动作类型，ADD:增加数据订阅，DEL:移除数据订阅



## 4.请求格式
订阅数据和请求数据都要使用 action，action 的语法如下：



|action 类型|action 语法(dataType)|action|描述|
|-----|-------|--------|---------|
|kline|$marketId_KLINE_$klineType_$symbol |ADD/DEL|依据周期，订阅交易对的K线数据|
|Market Depth|$marketId_ENTRUST_ADD_$klineType_$symbol |ADD/DEL|依据交易对，订阅交易对的深度数据|
|Trade Detail|$marketId_TRADE_$symbol |ADD/DEL|依据交易对，订阅交易对的成交数据|
|Market Tickers|ALL_TRADE_STATISTIC_24H |ADD/DEL|依据周期，订阅交易对的Ticker数据|
|Market Tickers-single-market|$marketId_TRADE_STATISTIC_24H |ADD/DEL|依据周期，订阅交易对的Ticker数据|

* $marketId: 为市场id；