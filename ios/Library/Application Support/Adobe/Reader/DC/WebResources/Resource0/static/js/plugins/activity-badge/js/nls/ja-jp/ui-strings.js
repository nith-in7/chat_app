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

define({REQUESTS:"要求",NOTIFICATIONS:"通知",NO_NOTIFICATIONS:"通知はありません",SHOW_MORE:"その他を表示",MARKUP_ADDED:"注釈が追加されました",NO_NOTIFICATIONS_HEADING:"ここに通知が表示されます。",NO_NOTIFICATIONS_SUBHEADING:"表示、コメント、および署名用に共有されたファイルについての更新情報を取得します。",UNREAD_NOTIFICATION:"<%= count %> 件の未読通知",UNREAD_NOTIFICATIONS:"<%= count %> 件の未読通知",SIGN:"署名",APPROVE:"承認",FILL:"入力",FILL_FORM:"フォームを入力",ACKNOWLEDGE:"確認",DELEGATE:"委任",CLOSE:"閉じる",ACCEPT:"受領",VIEW:"表示",REVIEW:"レビュー",OPEN:"開く",VIEW_SIGN:"表示 & 署名",VIEW_APPROVE:"表示 & 承認",VIEW_FILL:"フォームを表示して入力",VIEW_ACKNOWLEDGE:"表示 & 確認",VIEW_DELEGATE:"表示 & 委任",VIEW_ACCEPT:"表示 & 受領",SIGNED:"署名済み",E_SIGNED:"電子サイン済み",APPROVED:"承認済み",FILLED:"入力済み",ACKNOWLEDGED:"受領確認済み",DELEGATED:"委任済み",ACCEPTED:"受領済み",VIEW_SIGN_LABEL:"この契約書を表示して署名",VIEW_APRROVE_LABEL:"この契約書を表示して承認",VIEW_DELEGATE_LABEL:"この契約書を表示して委任",VIEW_ACKNOWLEDGE_LABEL:"この契約書を表示して確認",VIEW_ACCEPT_LABEL:"この契約書を表示して合意",VIEW_FILL_FORM_LABEL:"この契約書を表示して入力",SIGN_DOC_RECEIVED:"<b><%= sender %></b> さんが <%= action %> 用に文書を共有しました",SIGN_EMAIL_VIEWED:"<b><%= document %></b> についての電子メールを <b><%= signer %></b> さんが開封しました",SIGN_DOC_SIGNED:"<b><%= signer %></b> さんが <b><%= document %></b> を <%= action %> しました",SIGN_EXPIRED_SENDER_ONE_SIGNER:"<b><%= document %></b> の <b><%= signer %></b> さんの署名期限が過ぎました。期限 : <%= deadline %>",SIGN_EXPIRED_SENDER_MANY_SIGNERS:"<b><%= signer %></b> さんを含むユーザーに対して設定された <%= document %> の期限が過ぎました。期限 : <%= deadline %>",SIGN_EXPIRED_SIGNER:"<b><%= sender %></b> さんから送信された <b><%= document %></b> の <%= action %> 期限が過ぎました",SIGN_EMAIL_BOUNCED:"<b><%= document %></b> の <%= action %> 用に <b><%= signer %></b> さんに送信した電子メールが返送されました。電子メールアドレスを確認してください。",SIGN_CANCELLED_SIGNER:"<b><%= sender %></b> さんが <b><%= document %></b> をキャンセルしました",SIGN_REMINDER_SIGNER:"再通知 : <b><%= sender %></b> さんが、<b><%= document %></b> についてあなたの <%= action %> を待っています",SIGN_REMINDER_DEADLINE_SIGNER:"再通知 : <b><%= sender %></b> さんが、<b><%= document %></b> についてあなたの <%= action %> が <%= deadline %> までにおこなわれることを待っています",SIGN_DOC_DECLINED:"<b><%= signer %></b> さんが <b><%= document %></b> を拒否しました",SIGN_DELEGATE:"<b><%= delegator %></b> さんが <b><%= document %></b> を <b><%= delegatee %></b> さんに代理委任しました",FILL_SIGN_DOC_RECEIVED:"<b><%= signer %></b> さんから入力電子サイン済みの <%= document %> が届いています",FILL_SIGN_DOC_OPENED:"<%= document %> についての電子メールを <b><%= signer %></b> さんが開封しました","S&T_DOC_RECEIVED":"<%= sender %> さんがあなたと <%= document %> のコピーを共有しました","S&T_DOC_OPENED":"<%= recipient %> さんが <%= document %> を開いて閲覧しました","S&T_DOC_DOWNLOADED":"<%= recipient %> さんが <%= document %> をダウンロードしました",EUREKA_DOC_RECEIVED:"<b><%= sender %></b> さんがあなたに対して文書を共有しました。<%= date %> の <%= time %> までにレビューしてください",EUREKA_DOC_RECEIVED_NO_DEADLINE:"<b><%= sender %></b> さんがあなたに対して文書を共有しました。レビューしてください",FEW_SECONDS_AGO:"数秒前",ONE_MINUTE_AGO:"1 分前",N_MINUTES_AGO:"<%= n %> 分前",ONE_HOUR_AGO:"1 時間前",N_HOURS_AGO:"<%= n %> 時間前",ONE_DAY_AGO:"1 日前",N_DAYS_AGO:"<%= n %> 日前",DUE_DATE:"共有期限 <%= date %>",PRESS_ENTER_SPACE:"スペースまたは Enter を押して文書を開きます。",MANAGE_ACCESS:"アクセスを管理"});