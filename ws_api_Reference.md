# WebSocket API Reference
## 订阅 KLine 数据 market.$symbol.kline.$period
成功建立和 WebSocket API 的连接之后，向 Server 发送如下格式的数据来订阅数据：

{
  "sub": "market.$symbol.kline.$period",
  "id": "id generate by client"
}