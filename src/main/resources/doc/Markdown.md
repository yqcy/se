#1 API - DocController文档接口
##
###1.1   markdown文档生成   [调用中]
####请求路径
[/doc/markdown/create]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
没有返回值或接口调用失败
##
###1.2   markdown文档下载   [调用中]
####请求路径
[/doc/markdown/download]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
没有返回值或接口调用失败
##
#2 API - ExceptionController异常接口
##
###2.1   添加异常信息   [调用中]
####请求路径
[/exception/create]()
####请求类型
*POST*
####参数信息
*   fullClassName:[String]
*   description:[String]
####返回结果
没有返回值或接口调用失败
##
###2.2   首页模糊查询   [调用中]
####请求路径
[/exception/search]()
####请求类型
*GET*
####参数信息
*   str:[String]
####返回结果
没有返回值或接口调用失败
##
###2.3   查询异常   [调用中]
####请求路径
[/exception/getAll]()
####请求类型
*GET*
####参数信息
*   id:[Int]
*   fullClassName:[String]
*   status:[Int]
*   userId:[Int]
*   beginTime:[String]
*   endTime:[String]
*   page:[Int]
*   rows:[Int]
####返回结果
没有返回值或接口调用失败
##
#3 
##
###3.1      [调用中]
####请求路径
[/test/jsp]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
没有返回值或接口调用失败
##
#4 API - UserController用户接口
##
###4.1   用户注册   [调用中]
####请求路径
[/user/register]()
####请求类型
*POST*
####参数信息
*   username:[String]
*   password:[String]
*   nickname:[String]
*   phone:[String]
####返回结果
没有返回值或接口调用失败
##
###4.2   检查用户名是否已经被注册   [调用中]
####请求路径
[/user/check/username]()
####请求类型
*GET*
####参数信息
*   username:[String]
####返回结果
没有返回值或接口调用失败
##
###4.3   检查用户是否已经登录   [调用中]
####请求路径
[/user/check/login]()
####请求类型
*POST*
####参数信息
*   无
####返回结果
没有返回值或接口调用失败
##
###4.4   查询用户   [调用中]
####请求路径
[/user/show]()
####请求类型
*GET*
####参数信息
*   status:[Int]
*   beginTime:[String]
*   endTime:[String]
*   page:[Int]
*   rows:[Int]
*   order:[String]
####返回结果
没有返回值或接口调用失败
##
