#1 API - DocController文档接口
##
###1.1   markdown文档下载   [调用中]
####请求路径
[/doc/markdown/download]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
###1.2   markdown文档生成   [调用中]
####请求路径
[/doc/markdown/create]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
#2 API - ExceptionController异常接口
##
### 2.1   添加异常信息   [调用中]
####请求路径
[/exception/create]()
####请求类型
*POST*
####参数信息
*   fullClassName:[String]
*   description:[String]
####返回结果
*没有返回值或接口调用失败*
##
###2.2   首页模糊查询   [调用中]
####请求路径
[/exception/search]()
####请求类型
*GET*
####参数信息
*   str:[String]
*   index:[Int]
####返回结果
*没有返回值或接口调用失败*
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
*   sort:[String]
*   order:[String]
####返回结果
*没有返回值或接口调用失败*
##
###2.4   查询所有当前用户解决的异常信息   [调用中]
####请求路径
[/exception/getAll/provider]()
####请求类型
*GET*
####参数信息
*   userId:[String]
*   beginTime:[String]
*   endTime:[String]
*   sort:[String]
*   order:[String]
*   page:[Int]
*   rows:[Int]
####返回结果
*没有返回值或接口调用失败*
##
###2.5   根据ID查询异常   [调用中]
####请求路径
[/exception/get/id]()
####请求类型
*GET*
####参数信息
*   id:[String]
####返回结果
*没有返回值或接口调用失败*
##
###2.6   查询12个月份的异常点击量情况   [调用中]
####请求路径
[/exception/charts/query/click]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
###2.7   查询所有异常的全限定名   [调用中]
####请求路径
[/exception/name/getAll]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
#3 API - SolveController解决方案接口
##
###3.1   创建新的解决方案   [调用中]
####请求路径
[/solve/create]()
####请求类型
*POST*
####参数信息
*   exceptionId:[String]
*   userId:[String]
*   solution:[String]
####返回结果
*没有返回值或接口调用失败*
##
###3.2   查询解决方案   [调用中]
####请求路径
[/solve/query]()
####请求类型
*GET*
####参数信息
*   exceptionId:[String]
*   userId:[String]
*   sort:[String]
*   order:[String]
*   page:[Int]
*   rows:[Int]
####返回结果
*没有返回值或接口调用失败*
##
###3.3   用户点击赞   [调用中]
####请求路径
[/solve/agree]()
####请求类型
*POST*
####参数信息
*   solveId:[String]
*   userId:[String]
####返回结果
*没有返回值或接口调用失败*
##
#4 
##
###4.1      [调用中]
####请求路径
[/test/jsp]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
#5 API - UserController用户接口
##
###5.1   用户注册   [调用中]
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
*没有返回值或接口调用失败*
##
###5.2   查询用户   [调用中]
####请求路径
[/user/getAll]()
####请求类型
*GET*
####参数信息
*   status:[Int]
*   beginTime:[String]
*   endTime:[String]
*   page:[Int]
*   rows:[Int]
*   sort:[String]
*   order:[String]
####返回结果
*没有返回值或接口调用失败*
##
###5.3   根据主键查询用户   [调用中]
####请求路径
[/user/get]()
####请求类型
*GET*
####参数信息
*   id:[String]
####返回结果
*没有返回值或接口调用失败*
##
###5.4   检查用户名是否已经被注册   [调用中]
####请求路径
[/user/check/username]()
####请求类型
*GET*
####参数信息
*   username:[String]
####返回结果
*没有返回值或接口调用失败*
##
###5.5   用户登录   [调用中]
####请求路径
[/user/login]()
####请求类型
*POST*
####参数信息
*   username:[String]
*   password:[String]
####返回结果
*没有返回值或接口调用失败*
##
###5.6   修改用户个人信息   [调用中]
####请求路径
[/user/modify]()
####请求类型
*POST*
####参数信息
*   id:[String]
*   nickname:[String]
*   password:[String]
####返回结果
*没有返回值或接口调用失败*
##
###5.7   检查用户是否已经登录   [调用中]
####请求路径
[/user/check/login]()
####请求类型
*POST*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
###5.8   查询12个月的注册量   [调用中]
####请求路径
[/user/charts/query/register]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
###5.9   查询12个月的注册量   [调用中]
####请求路径
[/user/charts/query/login]()
####请求类型
*GET*
####参数信息
*   无
####返回结果
*没有返回值或接口调用失败*
##
