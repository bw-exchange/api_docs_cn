# 安全认证
目前关于apikey申请和修改，请在“个人中心 - API设置”页面进行相关操作。其中AccessKey为API 访问密钥，SecretKey为用户对请求进行签名的密钥（**仅申请时可见**）。

**重要提示：这两个密钥与账号安全紧密相关，无论何时都请勿向其它人透露。**

## 合法请求结构

基于安全考虑，除行情API 外的 API 请求都必须进行签名运算。一个合法的请求由以下几部分组成：

* 方法请求地址 即访问服务器地址：https://www.bw.io/，比如https://www.bw.io/v1/order/orders。

* API 访问密钥（AccessKeyId） 您申请的 APIKEY 中的AccessKey。

* 签名方法（SignatureMethod） 用户计算签名的基于哈希的协议，此处使用 HmacSHA256。

* 签名版本（SignatureVersion） 签名协议的版本，此处使用2。

* 时间戳（Timestamp） 您发出请求的时间 (UTC 时区) (UTC 时区) (UTC 时区) 。在查询请求中包含此值有助于防止第三方截取您的请求。如：2017-05-11T16:22:06。再次强调是 (UTC 时区) 。

* 必选和可选参数 每个方法都有一组用于定义 API 调用的必需参数和可选参数。可以在每个方法的说明中查看这些参数及其含义。 请一定注意：对于GET请求，每个方法自带的参数都需要进行签名运算； 对于POST请求，每个方法自带的参数不进行签名认证，即POST请求中需要进行签名运算的只有AccessKeyId、SignatureMethod、SignatureVersion、Timestamp四个参数，其它参数放在body中。

* 签名 签名计算得出的值，用于确保签名有效和未被篡改。

例：
```
https://api.huobi.pro/v1/order/orders?
AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx
&SignatureMethod=HmacSHA256
&SignatureVersion=2
&Timestamp=2017-05-11T15%3A19%3A30
&order-id=1234567890
&Signature=calculated value
```
## 签名运算

API 请求在通过 Internet 发送的过程中极有可能被篡改。为了确保请求未被更改，我们会要求用户在每个请求中带上签名（行情 API 除外），来校验参数或参数值在传输途中是否发生了更改。

### 计算签名所需的步骤：

1. 规范要计算签名的请求 因为使用 HMAC 进行签名计算时，使用不同内容计算得到的结果会完全不同。所以在进行签名计算前，请先对请求进行规范化处理。下面以查询某订单详情请求为例进行说明
https://api.huobi.pro/v1/order/orders?
AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx
&SignatureMethod=HmacSHA256
&SignatureVersion=2
&Timestamp=2017-05-11T15:19:30
&order-id=1234567890
2. 请求方法（GET 或 POST），后面添加换行符\n。
GET\n
3. 添加小写的访问地址，后面添加换行符\n。
api.huobi.pro\n
访问方法的路径，后面添加换行符\n。
/v1/order/orders\n
按照ASCII码的顺序对参数名进行排序(使用 UTF-8 编码，且进行了 URI 编码，十六进制字符必须大写，如‘:’会被编码为'%3A'，空格被编码为'%20')。 例如，下面是请求参数的原始顺序，进行过编码后。
AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx
order-id=1234567890
SignatureMethod=HmacSHA256
SignatureVersion=2
Timestamp=2017-05-11T15%3A19%3A30
这些参数会被排序为：

AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx
SignatureMethod=HmacSHA256
SignatureVersion=2
Timestamp=2017-05-11T15%3A19%3A30
order-id=1234567890

按照以上顺序，将各参数使用字符’&’连接。

AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2017-05-11T15%3A19%3A30&order-id=1234567890
组成最终的要进行签名计算的字符串如下：

GET\n
api.huobi.pro\n
/v1/order/orders\n
AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2017-05-11T15%3A19%3A30&order-id=1234567890
计算签名，将以下两个参数传入加密哈希函数： 要进行签名计算的字符串

GET\n
api.huobi.pro\n
/v1/order/orders\n
AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2017-05-11T15%3A19%3A30&order-id=1234567890
进行签名的密钥（SecretKey）

b0xxxxxx-c6xxxxxx-94xxxxxx-dxxxx
得到签名计算结果并进行 Base64编码

4F65x5A2bLyMWVQj3Aqp+B4w+ivaA7n5Oi2SuYtCJ9o=
将上述值作为参数Signature的取值添加到 API 请求中。 将此参数添加到请求时，必须将该值进行 URI 编码。

最终，发送到服务器的 API 请求应该为：

https://api.huobi.pro/v1/order/orders?AccessKeyId=e2xxxxx