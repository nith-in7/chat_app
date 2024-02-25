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

define({REQUESTS:"TALEPLER",NOTIFICATIONS:"BİLDİRİMLER",NO_NOTIFICATIONS:"Bildirim Yok",SHOW_MORE:"Daha Fazlasını Göster",MARKUP_ADDED:"İşaretleme eklendi",NO_NOTIFICATIONS_HEADING:"Bildirimleriniz burada görüntülenir.",NO_NOTIFICATIONS_SUBHEADING:"Görüntüleme, yorum ve imza için paylaşılan dosyalar ile ilgili güncellemeler alacaksınız.",UNREAD_NOTIFICATION:"<%= count %> Okunmamış Bildirim",UNREAD_NOTIFICATIONS:"<%= count %> Okunmamış Bildirim",SIGN:"İmzala",APPROVE:"Onayla",FILL:"Doldur",FILL_FORM:"Form Doldur",ACKNOWLEDGE:"Teyit Et",DELEGATE:"Delege Et",CLOSE:"Kapat",ACCEPT:"Kabul Et",VIEW:"Görüntüleme",REVIEW:"İncele",OPEN:"Aç",VIEW_SIGN:"Görüntüle ve İmzala",VIEW_APPROVE:"Görüntüle ve Onayla",VIEW_FILL:"Formu Görüntüle ve Doldur",VIEW_ACKNOWLEDGE:"Görüntüle ve Teyit Et",VIEW_DELEGATE:"Görüntüle ve Delege Et",VIEW_ACCEPT:"Görüntüle ve Kabul Et",SIGNED:"İmzalandı",E_SIGNED:"Elektronik olarak imzalandı",APPROVED:"Onaylandı",FILLED:"Dolduruldu",ACKNOWLEDGED:"Teyit Edildi",DELEGATED:"Delege edildi",ACCEPTED:"Kabul Edildi",VIEW_SIGN_LABEL:"Bu sözleşmeyi görüntüleyin ve imzalayın",VIEW_APRROVE_LABEL:"Bu sözleşmeyi görüntüleyin ve onaylayın",VIEW_DELEGATE_LABEL:"Bu sözleşmeyi görüntüleyin ve delege edin",VIEW_ACKNOWLEDGE_LABEL:"Bu sözleşmeyi görüntüleyin ve teyit edin",VIEW_ACCEPT_LABEL:"Bu sözleşmeyi görüntüleyin ve kabul edin",VIEW_FILL_FORM_LABEL:"Bu sözleşmeyi görüntüleyin ve doldurun",SIGN_DOC_RECEIVED:"<b><%= sender %></b> adlı kullanıcı <%= action %> işlemini tamamlamanız için sizinle bir belge paylaştı",SIGN_EMAIL_VIEWED:"<b><%= document %></b> adlı belgenin e-postası <b><%= signer %></b> tarafından açıldı",SIGN_DOC_SIGNED:"<b><%= signer %></b> adlı kullanıcı, <b><%= document %></b> adlı belgede <%= action %> işlemini gerçekleştirdi",SIGN_EXPIRED_SENDER_ONE_SIGNER:"<b><%= signer %></b> adlı kullanıcının imzasını bekleyen <b><%= document %></b> adlı belgenin <%= deadline %> olan teslim tarihi sona erdi",SIGN_EXPIRED_SENDER_MANY_SIGNERS:" <b><%= signer %></b> adlı kullanıcının ve diğer kullanıcıların imzasını bekleyen <%= document %> adlı belgenin teslim tarihi <%= deadline %> geçti",SIGN_EXPIRED_SIGNER:"<b><%= sender %></b> tarafından gönderilen <b><%= document %></b> adlı belgede <%= action %> işlemini tamamlamanız için teslim tarihi sona erdi",SIGN_EMAIL_BOUNCED:"<b><%= signer %></b> adlı kullanıcıya <b><%= document %></b> adlı belgede <%= action %> işlemini tamamlaması için e-posta geri döndü. Lütfen e-posta adresini kontrol edin.",SIGN_CANCELLED_SIGNER:"<b><%= sender %></b> adlı kullanıcı, <b><%= document %></b> adlı belgeyi iptal etti",SIGN_REMINDER_SIGNER:"Hatırlatıcı: <b><%= sender %></b> adlı kullanıcı, <b><%= document %></b> adlı belge için <%= action %> işlemini tamamlamanızı bekliyor",SIGN_REMINDER_DEADLINE_SIGNER:"Hatırlatıcı: <b><%= sender %></b> adlı kullanıcı, <b><%= document %></b> adlı belge için <%= deadline %> tarihine kadar <%= action %> işlemini tamamlamanızı bekliyor",SIGN_DOC_DECLINED:"<b><%= signer %></b> adlı kullanıcı, <b><%= document %></b> adlı belgeyi reddetti",SIGN_DELEGATE:"<b><%= delegator %></b>, <b><%= document %></b> adlı belgeyi <b><%= delegatee %></b> adlı kullanıcıya delege etti",FILL_SIGN_DOC_RECEIVED:"<b><%= signer %></b> adlı kullanıcı, <%= document %> adlı belgeyi doldurdu, elektronik olarak imzaladı ve size gönderdi",FILL_SIGN_DOC_OPENED:"<%= document %> adlı belgenin e-postası <b><%= signer %></b> adlı kullanıcı tarafından açıldı","S&T_DOC_RECEIVED":"<%= sender %>, sizinle <%= document %> adlı belgenin bir kopyasını paylaştı","S&T_DOC_OPENED":"<%= document %>, <%= recipient %> tarafından açıldı ve görüntülendi","S&T_DOC_DOWNLOADED":"<%= document %> adlı belge, <%= recipient %> tarafından indirildi",EUREKA_DOC_RECEIVED:"<b><%= sender %></b> adlı kullanıcı, <%= date %> <%= time > tarihine kadar incelemeniz için bir belgeyi sizinle paylaştı",EUREKA_DOC_RECEIVED_NO_DEADLINE:"<b><%= sender %></b> adlı kullanıcı, incelemeniz için sizinle bir belge paylaştı",FEW_SECONDS_AGO:"Birkaç saniye önce",ONE_MINUTE_AGO:"1 dakika önce",N_MINUTES_AGO:"<%= n %> dakika önce",ONE_HOUR_AGO:"1 saat önce",N_HOURS_AGO:"<%= n %> saat önce",ONE_DAY_AGO:"1 gün önce",N_DAYS_AGO:"<%= n %> gün önce",DUE_DATE:"Son Tarih: <%= date %>",PRESS_ENTER_SPACE:"Belgeyi açmak için Boşluk veya Enter tuşuna basın.",MANAGE_ACCESS:"Erişimi Yönet"});