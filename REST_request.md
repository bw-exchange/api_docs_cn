## 请求说明
#### 访问地址
* 中国大陆用户：https://www.bw.io/

* 非中国大陆用户请使用：https://www.bw.com/

* 限频规则：现货 ：10秒100次（单个APIKEY维度限制，建议行情API访问也要加上签名，否则限频会更严格）

* POST请求头信息中必须声明 Content-Type:application/json。

* GET请求头信息中必须声明 Content-Type:application/x-www-form-urlencoded。(汉语用户建议设置 Accept-Language:zh-cn)

* 所有请求参数请按照 API 说明进行参数封装。

* 将封装好参数的 API 请求通过 POST 或 GET 的方式提交到服务器。

* Bw.com处理请求，并返回相应的 JSON 格式结果。

* 请使用 https 请求。


* 支持所有Bw.io 网站上交易中的交易对，上新币保持与网站同步。