#### 发明者量化([FMZ.COM](https://www.fmz.com)) 是中国最大的数字货币量化交易平台。 它支持 Javascript/Python/C++/麦语言/可视化 五种编程语言, 平台策略完全支持[币网](https://www.bw.io)的所有币种, 可以快速上手量化交易。

目前关于apikey申请和修改，请在“个人中心 - API设置”页面进行相关操作。

常见问题请参考[**Issues**](https://github.com/bw-exchange/api_docs_cn/issues)

##

欢迎有优秀 maker 策略且交易量大的用户参与长期做市商项目。
具体的费率如下:


|用户等级|净资产(等值BTC)|30天交易量(等值BTC)|挂单手续费|吃单手续费|
|----|:---:|----:|----:|----:|
|**Level 1**|<50|<500|0.10%|0.10%|
|**Level 2**|>=80|>=1000|0|0|



在计算手续费等级时，用户需要同时满足净资产和30天交易量条件。

如果您的BW现货账户符合 **Level 2** 的条件，请提供以下信息发送邮件至：

* BW（现货 ）做市商申请：**support@bw.com** ；
> 1. 提供uid（需不存在返佣关系的uid）
>2. 提供其他交易平台maker交易量截图证明（比如30天内成交量，或者VIP等级等）
>3. 简要阐述做市方法，不需要细节

**做市商项目不支持VIP、交易量相关活动以及任何形式的返佣活动**


##

# 现货

## WebSocket行情，交易推送API

> 地址: wss://kline.bw.com/websocket

* [订阅说明](https://github.com/bw-exchange/api_docs_cn/wiki/WebSocket-API-%E8%AE%A2%E9%98%85%E8%AF%B4%E6%98%8E)
* [API Reference](https://github.com/bw-exchange/api_docs_cn/wiki/WebSocket-API-Reference)
* [错误代码](https://github.com/bw-exchange/api_docs_cn/wiki/WebSocket-API-%E9%94%99%E8%AF%AF%E7%A0%81)
* 代码示例：[Java](https://github.com/bw-exchange/api/tree/master/java) [Python](https://github.com/bw-exchange/api/tree/master/python) [Nodejs](https://github.com/bw-exchange/api_docs_cn/blob/master/nodejsDemo/websocketDemo.js)

## REST行情、交易API

> 域名地址: https://www.bw.com

* [REST API 请求说明](https://github.com/bw-exchange/api_docs_cn/wiki/REST-API-%E8%AF%B7%E6%B1%82%E8%AF%B4%E6%98%8E)
* [签名认证(重要，请仔细阅读)](https://github.com/bw-exchange/api_docs_cn/wiki/REST-API-%E7%AD%BE%E5%90%8D%E8%AE%A4%E8%AF%81(%E9%87%8D%E8%A6%81%EF%BC%8C%E8%AF%B7%E4%BB%94%E7%BB%86%E9%98%85%E8%AF%BB))
* [API Reference](https://github.com/bw-exchange/api_docs_cn/wiki/REST-API-Reference)
* [错误代码](https://github.com/bw-exchange/api_docs_cn/wiki/REST-API--%E9%94%99%E8%AF%AF%E7%A0%81)
* 代码示例：[Java](https://github.com/bw-exchange/api/tree/master/java) [Python](https://github.com/bw-exchange/api/tree/master/python) [Nodejs](https://github.com/bw-exchange/api_docs_cn/blob/master/nodejsDemo/restApiDemo.js)
