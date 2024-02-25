/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2018 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

define({REQUESTS:"请求",NOTIFICATIONS:"通知",NO_NOTIFICATIONS:"没有通知",SHOW_MORE:"显示更多",MARKUP_ADDED:"已添加标记",NO_NOTIFICATIONS_HEADING:"您的通知将会显示在此处。",NO_NOTIFICATIONS_SUBHEADING:"对出于查看、注释和签名目的而共享的文件，您将会在此处收到相关更新。",UNREAD_NOTIFICATION:"<%= count %> 个未读通知",UNREAD_NOTIFICATIONS:"<%= count %> 个未读通知",SIGN:"签名",APPROVE:"批准",FILL:"填写",FILL_FORM:"填写表单",ACKNOWLEDGE:"确认",DELEGATE:"委派",CLOSE:"关闭",ACCEPT:"接受",VIEW:"查看",REVIEW:"审阅",OPEN:"打开",VIEW_SIGN:"查看并签署",VIEW_APPROVE:"查看并批准",VIEW_FILL:"查看并填写表单",VIEW_ACKNOWLEDGE:"查看并确认",VIEW_DELEGATE:"查看并委派",VIEW_ACCEPT:"查看并接受",SIGNED:"已签名",E_SIGNED:"已进行电子签名",APPROVED:"已批准",FILLED:"已填充",ACKNOWLEDGED:"已确认",DELEGATED:"已委派",ACCEPTED:"已接受",VIEW_SIGN_LABEL:"查看并签署此协议",VIEW_APRROVE_LABEL:"查看并批准此协议",VIEW_DELEGATE_LABEL:"查看并委派此协议",VIEW_ACKNOWLEDGE_LABEL:"查看并确认此协议",VIEW_ACCEPT_LABEL:"查看并接受此协议",VIEW_FILL_FORM_LABEL:"查看并填写此协议",SIGN_DOC_RECEIVED:"<b><%= sender %></b> 共享了文档供您<%= action %>",SIGN_EMAIL_VIEWED:"关于 <b><%= document %></b> 的电子邮件已被 <b><%= signer %></b> 打开",SIGN_DOC_SIGNED:"<b><%= document %></b> 已由 <b><%= signer %></b> <%= action %>",SIGN_EXPIRED_SENDER_ONE_SIGNER:"等待 <b><%= signer %></b> 签名的文档 <b><%= document %></b> 已超过截止日期 (<%= deadline %>)",SIGN_EXPIRED_SENDER_MANY_SIGNERS:"等待 <b><%= signer %></b> 和其他人进行签名的文档 <%= document %> 已超过截止日期 (<%= deadline %>)",SIGN_EXPIRED_SIGNER:"由 <b><%= sender %></b> 发送给您进行<%= action %>的文档 <b><%= document %></b> 已超过截止日期",SIGN_EMAIL_BOUNCED:"发送给 <b><%= signer %></b> 对文档 <b><%= document %></b> 进行<%= action %>的电子邮件被退回。请检查电子邮件地址。",SIGN_CANCELLED_SIGNER:"<b><%= sender %></b> 已取消文档 <b><%= document %></b>",SIGN_REMINDER_SIGNER:"提醒: <b><%= sender %></b> 正等待您<%= action %>文档 <b><%= document %></b>",SIGN_REMINDER_DEADLINE_SIGNER:"提醒: <b><%= sender %></b> 正等待您在 <%= deadline %> 之前<%= action %>文档 <b><%= document %></b>",SIGN_DOC_DECLINED:"<b><%= document %></b> 已被 <b><%= signer %></b> 拒绝",SIGN_DELEGATE:"<b><%= document %></b> 已由 <b><%= delegator %></b> 委派给 <b><%= delegatee %></b>",FILL_SIGN_DOC_RECEIVED:"<b><%= signer %></b> 已填写、以电子方式签名文档 <%= document %> 并将其发送给您",FILL_SIGN_DOC_OPENED:"关于 <%= document %> 的电子邮件已被 <b><%= signer %></b> 打开","S&T_DOC_RECEIVED":"<%= sender %> 已将一份文档 <%= document %> 共享给您","S&T_DOC_OPENED":"<%= recipient %> 已打开并查看了文档 <%= document %>","S&T_DOC_DOWNLOADED":"<%= recipient %> 已下载文档 <%= document %>",EUREKA_DOC_RECEIVED:"<b><%= sender %></b> 共享了文档供您于 <%= date %> <%= time > 之前审阅",EUREKA_DOC_RECEIVED_NO_DEADLINE:"<b><%= sender %></b> 共享了文档供您审阅",FEW_SECONDS_AGO:"几秒钟前",ONE_MINUTE_AGO:"1 分钟前",N_MINUTES_AGO:"<%= n %> 分钟前",ONE_HOUR_AGO:"1 小时前",N_HOURS_AGO:"<%= n %> 小时前",ONE_DAY_AGO:"1 天前",N_DAYS_AGO:"<%= n %> 天前",DUE_DATE:"截止时间: <%= date %>",PRESS_ENTER_SPACE:"按下空格键或 Enter 键可打开该文档。",MANAGE_ACCESS:"管理访问权限"});