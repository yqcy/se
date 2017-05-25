<#list markdown.controllers as controller>
# ${controller_index+1} ${controller.name}
<#list controller.interfaces as interface>
##
### ${controller_index+1}.${interface_index+1}   ${interface.function}   <#if interface.used>[调用中]<#else>[未调用]</#if>
#### 请求路径
[${interface.path}]()
#### 请求类型
*${interface.requestType}*
#### 参数信息
<#if (interface.paramters?exists)>
    <#if (interface.paramters?size>0)>
        <#list interface.paramters as param>
*   ${param.name}:[${param.type}]
        </#list>
    </#if>
<#else>
*   无
</#if>
#### 返回结果
<#if interface.result?exists>
${interface.result}
<#else>
*没有返回值或接口调用失败*
</#if>
</#list>
##
</#list>
