/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
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

define({SELECTOR_LABEL:"Для просмотра",SELECTOR_LABEL_WEB:"Отправленные",TOOL_LABEL:"Отправить",SEND_TRACK_LABEL:"Файлы для просмотра",TYPE:"Тип",ADDED_DATE:"Добавлено",MODIFIED_DATE:"Изменено",PAGES:"Страницы",SIZE:"Размер",SENDER_NAME:"Отправитель",SENT_DATE:"Дата отправки",REPORT_ABUSE:"Пожаловаться",UNKNOWN:"Неизвестно",EXTENSION:"(.<%- ext %>)",DOWNLOAD:"Загрузить",DOWNLOAD_ALL:"Загрузить все",REPLY:"Ответить",FORWARD:"Вперед",NOTIFY_ME_WHEN_VIEWED:"Уведомлять о просмотре файла получателями",UNSHARE:"Отменить общий доступ",UNSHARED:"Без общ. доступа",VIEWED_BY:"Кем просмотрено",VIEW_FULL_ACTIVITY:"Посмотреть все действия",EMAIL_REPLY_FORMAT:"Re: <%= emailSubject %>",OPEN:"Открыть",SAVEAS:"Сохранить как",TRACK:"Отслеживать через Интернет",OPEN_LINK:"(Открыть ссылку)",MESSAGE_HEADING:"Сообщение",REMOVE:"Удалить",DELETE:"Удалить",SHARED_FILES:"Отправленные файлы",SUBJECT:"Тема",SENT_TO:"Получатель",DATE_SENT:"Дата отправки",VIEWS:"Просмотры",PARCEL_PUBLIC_SHARING:"Безымянный",EXPAND:"Развернуть",COLLAPSE:"Свернуть",SELECT_ALL:"Выделить все",NUMBER_OF_VIEWS:"Число просмотров",GO_TO_ADOBE_SEND_WEBSITE:"Перейти на веб-сайт Adobe Send",GO_TO_ADOBE_S_T_WEBSITE:"Управление документами, отправленными на подпись",DATE_VIEWED:"Дата просмотра",CONFIRM_UNSHARE_TITLE:"Отмена доступа к файлу",CONFIRM_UNSHARE_MSG_ONE_ITEM:"При отмене доступа к файлу другие пользователи больше не смогут открывать его. Доступ можно снова предоставить позже.",CONFIRM_UNSHARE_MSG_N_ITEMS:"При отмене доступа к файлу другие пользователи больше не смогут открывать его. Доступ можно снова предоставить позже.",CONFIRM_UNSHARE_MSG:"Продолжить? Ссылка на этот документ будет удалена из вашей учетной записи.",Unshare_checkbox:"Удалить файл с общим доступом из Document Cloud",CONFIRM_REMOVE_TITLE:"Удаление общего файла",CONFIRM_REMOVE_BUTTON:"Удалить файл",CONFIRM_REMOVE_MSG_ONE_ITEM:'Вы действительно хотите удалить эти файлы из списка "Отправленные"? Общий доступ к ним будет отменен, и они будут удалены из списка, но не из вашей библиотеки.',CONFIRM_REMOVE_MSG_N_ITEMS:'Вы действительно хотите удалить эти файлы из списка "Отправленные"? Общий доступ к ним будет отменен, и они будут удалены из списка, но не из вашей библиотеки.',CONFIRM_DELETE_MSG_ONE_ITEM:"При удалении этого файла с общим доступом он будет безвозвратно удален из Document Cloud. Это действие нельзя отменить.",NO_FILES_TITLE:"Нет файлов",NO_FILES_MESSAGE:"Нет файлов, доступных для загрузки. Возможно, файлы были удалены.",SHARE_TITLE:"Отправить файлы",SHARE_WELCOME:"Отправка и отслеживание крупных файлов онлайн.",SHARE_WELCOME_DESKTOP:"Быстрый и удобный способ совместного использования и отслеживания файлов.",SHARE_SELECT_FILES:"Выберите файлы для отправки",SHARE_VIEW_SHARED_FILES:"Просмотреть все отправленные файлы",READER_FILESELECT_WINDOW_TITLE:"Выбрать файлы",READER_FILESELECT_CONTINUE_BUTTON:"Продолжить",ALL_SUPPORTED_FILES:"Все поддерживаемые файлы",CHOOSE_FILES:"Выбрать файлы",ALL_SUPPORTED_FILES:"Все поддерживаемые файлы",FILE:"файл",FILES:"файлы",UPLOADING_TO_SEND:"Загрузка в Adobe Document Cloud...",SELECTED_FILES:"Выбранные файлы",ADD_MORE_FILES:"Добавить файлы",SHARE_WITH_HEADING:"Кому",SHARE_ADDRESS_BOOK:"Адресная книга",SHARE_CHOICE_WORLD:"Создать анонимную ссылку",SHARE_CHIOCE_WORLD_EXPLAIN:"(с основной информацией об использовании)",SHARE_CHOICE_INDIVIDUAL:"Отправить персонализированные приглашения",SHARE_CHOICE_INDIVIDUAL_EXPLAIN:"(с подробным отслеживанием)",SHARE_CHOICE_ALLOW_COMMENTS:"Разрешить добавление комментариев",SHARE_CHOICE_CUSTOMIZE_RECIPIENT_PAGE:"Добавить логотип и цвет",SHARE_CHOICE_CUSTOMIZE_RECIPIENT_PAGE_EDIT:"Редактировать",SHARE_ADDRESS_HEADING:"Адреса эл. почты получателей",SHARE_ADDRESS_PROMPT:"Введите адреса эл. почты получателей",SHARE_SUBJECT_MSG_HEADING:"Тема и сообщение",SHARE_INITIAL_SUBJECT:"Файлы с общим доступом",SHARE_AV_ERROR:"Отправка аудио и видео не поддерживается. Выбор этих файлов был отменен.",SHARE_AV_UPGRADE_MESSAGE:" Для отправки аудио- и видеофайлов выполните обновление.",SHARE_FORMS_ERROR:"Отправка файлов форм в настоящее время не поддерживается. Для поиска и загрузки формы перейдите в раздел «Заполнить и подписать».",SHARE_FORMS_ERROR_DESKTOP:"Этот тип файла в настоящее время не поддерживается. Выбор файлов этого типа был отменен.",SHARE_AV_FORMS_ERROR:"Отправка аудио/видео и форм не поддерживается. Выбор этих файлов был отменен.",SHARE_OVER_LIMIT_APPEND_ERROR:"<br/><br/>Кроме того, вы выбрали более <%- limit %> файлов. Выбор файлов, превышающих данное ограничение, отменен.",SHARE_OVER_LIMIT_ERROR:"Вы выбрали более <%- limit %> файлов. Выбор файлов, превышающих данное ограничение, отменен.",SHARE_OVER_LIMIT_TITLE:"Слишком много файлов.",SHARE_NON_NATIVE_APPEND_ERROR:"<br/><br/>Кроме того, некоторые из выбранных файлов находятся в одном или нескольких неподдерживаемых хранилищах. Выбор таких файлов был отменен.",SHARE_NON_NATIVE_ERROR:"Send & Track в настоящее время не поддерживает файлы, хранящиеся в <%= connectorLabel %>. Для отправки файлов из <%= connectorLabel %> сначала требуется сохранить их на компьютере.",SHARE_NON_NATIVE_ERROR_DEFAULT:"Некоторые файлы находятся в одном или нескольких неподдерживаемых месторасположениях. Выбор таких файлов был отменен.",SHARE_NON_NATIVE_ERROR_HEADING:"Неподдерживаемое хранилище файлов",SHARE_MESSAGE_HEADING:"Сообщение",SHARE_MESSAGE_PROMPT:"Я открыл(а) для вас общий доступ к нескольким файлам. Для просмотра и загрузки перейдите по ссылке.",SHARE_BUTTON:"Отправить",SHARE_BUTTON_LINK:"Создать ссылку",SHARE_CANCEL:"Отмена",SHARE_EMAIL_INVALID_PLURAL:"Следующие адреса эл. почты являются недопустимыми:",SHARE_EMAIL_INVALID_SINGULAR:"Следующий адрес эл. почты является недопустимым:",SHARE_ERROR_SEND_LIMIT_EXCEEDED_TITLE:"Не отправлено",SHARE_ERROR_SEND_LIMIT_EXCEEDED:"Выбранное количество получателей превышает допустимое. Уменьшите количество получателей или повторите попытку позже.",SHARE_ERROR_UNSUPPORTED_SHARING_MIME_TYPE:"Аудио- и видеофайлы не поддерживаются.",SHARE_ERROR_RECIPIENTS_NOT_ALLOWED:"Для отправки файлов отдельным пользователям выполните обновление.",SHARE_ERROR_CANNOT_CONVERT_FORM:"Сбой отправки файлов, так как файл формы не удалось преобразовать в PDF.",SHARE_ERROR_CANNOT_CONVERT_FORM_RESTRICTION:"Сбой отправки файлов, так как файл формы не удалось преобразовать в PDF.",SHARE_ERROR_CANNOT_CONVERT_FORM_TIMEOUT:"Сбой отправки файлов, так как истекло время на преобразование файла формы в PDF.",SHARE_INDIVIDUAL_HELP_WEB:"Примечание. Персонализированные ссылки являются уникальными для каждого получателя, однако получатель может поделиться своими ссылками с другими пользователями, чтобы предоставить им доступ к документам.",SHARE_INDIVIDUAL_HELP:"Примечание. Персонализированные приглашения являются уникальными для каждого получателя, однако получатель может поделиться своими приглашениями с другими пользователями, чтобы предоставить им доступ к документам.",SHARE_UPLOAD_ERROR_TITLE:"Ошибка при загрузке файлов",SHARE_UPLOAD_ERROR_MSG:"При загрузке одного или нескольких файлов произошла ошибка. Повторите попытку.",SHARE_NO_FILES_SELECTED:"Не выбрано ни одного файла.",SHARE_CLICK_TO_ADD_FILES:'Нажмите кнопку "Добавить файлы", чтобы начать.',SHARE_RECIPIENT_PAGE_HEADLINE:"Страница получателя",SHARE_CHOICE_INCLUDE_MESSAGE:"Включить текст сообщения",SHARE_CHOICE_RESPOND_BACK:'Добавить кнопку "Ответить"',SHARE_REMOVE:"Удалить",ADD_FILES_REJECTED_TITLE:"Недопустимый формат имени файла",ADD_FILES_REJECTED_MESSAGE:"Отправляемые файлы должны иметь расширение или относиться к известному типу файлов. Введите имя файла с допустимым расширением.",SHARE_PUBLIC_LINK_HEADING_DESKTOP:"Разослать анонимную ссылку:",SHARE_COPY_LINK_BUTTON:"Скопировать ссылку",SHARE_SUCCESS_SENT_LINK:"Перейти к отправленным файлам",SHARE_SUCCESS_SENT_LINK_FOOTER:"для просмотра всех ранее отправленных файлов",READER_GO_URL:"http://www.adobe.com/go/sendpluginrdr_12_0_0_ru",ACROBAT_GO_URL:"http://www.adobe.com/go/sendpluginacro_12_0_0_ru",SEND_UPSELL_HEADLINE:"Обновить до",SEND_UPSELL_HEADLINE_OLD:"Обновить до:",SEND_UPSELL_POINT_1:"• Отправка больших файлов, включая документы и видео",SEND_UPSELL_POINT_2:"• Получение уведомлений о просмотре файлов по эл. почте",SEND_UPSELL_POINT_3:"• Отслеживание загрузок на информационной панели в Интернете",SEND_UPSELL_LATER:"Позже",SEND_UPSELL_NOW:"Обновить",SEND_UPSELL_LEARN_MORE:"Подробнее",SEND_UPSELL_UPGRADE_REQUIRED:"Неподдерживаемые файлы",SHARE_TOO_MANY_DLG_TITLE:"Слишком много адресов электронной почты",SHARE_TOO_MANU_DLG_MESSAGE:"Вы указали слишком много адресов эл. почты (<%=numRecipients%>). Одно письмо может иметь не более <%=maxRecipients%> получателей. Удалите несколько адресов и повторите попытку.",SHARE_SUCCESS_DLG_TITLE:"Файлы в общем доступе",SHARE_PUBLIC_LINK_HEADING:"Анонимная ссылка создана",SHARE_EMAIL_LINK_BUTTON:"Отправить ссылку по эл. почте",SHARE_PUBLIC_LINK_MESSAGE:"Любой пользователь, у которого есть эта ссылка, может анонимно получить доступ к файлам.",SHARE_PUBLIC_LINK_NO_COPY_OR_EMAIL_WARNING:"Вы еще не скопировали и не отправили ссылку. Вы действительно хотите продолжить?",SHARE_PUBLIC_LINK_INSTRUCTIONS:"Скопируйте ссылку для отправки по электронной почте или обмена с другими пользователями. Любой пользователь, у которого есть эта ссылка, может получить доступ к файлам.",SHARE_INVITATIONS_HEADING:"Отправленные приглашения",SHARE_INVITATIONS_MESSAGE:"Всем получателям будет отправлена ссылка по электронной почте. Когда они перейдут по ссылке, вы получите соответствующее уведомление.",SHARE_SUCCESS_CLOSE:"Закрыть",SHARE_SUCCESS_CONTINUE:"Продолжить",SHARE_FILE_EMAIL_BODY:"Я использую Adobe Send. Вы можете просмотреть мой файл, перейдя по ссылке:",SHARE_FILES_EMAIL_BODY:"Я использую Adobe Send. Вы можете просмотреть мои файлы, перейдя по ссылке:",S_T_FILE_EMAIL_BODY:"Я использую Adobe Send & Track. Вы можете просмотреть мой файл в Adobe Document Cloud, перейдя по ссылке:",S_T_FILES_EMAIL_BODY:"Я использую Adobe Send & Track. Вы можете просмотреть мои файлы в Adobe Document Cloud, перейдя по ссылке:",SHARE_CLIPBOARD_MESSAGE:"Совет: для копирования используйте комбинацию клавиш Ctrl + C",SHARE_CLIPBOARD_MESSAGE_MAC:"Совет: для копирования используйте комбинацию клавиш Cmd + C",SHARE_CLIPBOARD_COPIED:"ссылка скопирована в буфер обмена",PARCEL_ACTIVITY_DOWNLOADED:"загружено",PARCEL_ACTIVITY_PREVIEWED:"предварительно просмотрено",PARCEL_ACTIVITY_PUBLIC_VISITOR:"пользователь, который перешел по общедоступной ссылке",PARCEL_ACTIVITY_ALL_FILES:"Все файлы",PARCEL_ACTIVITY_ALL_FILES_PREVIEW:"Страница предварительного просмотра всех файлов",PARCEL_ACTIVITY_HEADING:"Действие для “<%= emailSubject %>”",PARCEL_ACTIVITY_RECIPIENT:"Получатель",PARCEL_ACTIVITY_ACTIVITY:"Действия",PARCEL_ACTIVITY_ITEM:"Элемент",PARCEL_ACTIVITY_DATE_VIEWED:"Дата просмотра",PARCEL_ACTIVITY_CLOSE:"Закрыть",CURRENTLY_SHARED_IN:"Кому отправлено",SHARE_THIS_FILE:"Отправить этот файл",SHARE_THIS_FILE_AGAIN:"Отправить этот файл еще раз",SENT_FILES_HEADER_SEARCH_CONTROLS:"Элементы управления поиском",SENT_FILES_HEADER_REFRESH:"Обновить",SENT_FILES_NUM_FILES:"Файлов: <%= numFiles %>",NO_PARCELS_SEND_PROMPT:"Здесь пока нет файлов.",NO_PARCELS_SEND_SUBPROMPT:"Здесь отобразятся файлы, отправленные и полученные для просмотра.",NO_PARCELS_SEND_BTN:"Adobe Send",NO_PARCELS_S_T_BTN:"Подробнее об отправке файлов на редактирование",LEARN_MORE_ST_GO_URL:"http://www.adobe.com/go/LearnMoreSTEmpty_ru",NO_SENT_PARCELS_REVIEW_SUBPROMPT:"Файлы, к которым вы предоставили общий доступ, отобразятся здесь.",NO_RECEIVED_PARCELS_REVIEW_SUBPROMPT:"Файлы, к которым вам предоставлен общий доступ, отобразятся здесь.",SENT_LEARN_MORE:"Подробнее",RECEIVED_LEARN_MORE:"Подробнее",CTA_SHARE_A_FILE:"Предоставить доступ к файлу",NO_SHARED_FILE:"Общих файлов пока нет.",ON_SIGN_OUT_PROMPT:"Войдите в учетную запись для доступа к общим файлам",ON_SIGN_OUT_SUBPROMPT:"Просматривайте документы, отправленные или полученные на просмотр, и управляйте ими.",SIGN_IN_BUTTON:"Вход",ON_SIGN_OUT_SUBPROMPT_SENT_FILES:"Просматривайте файлы, к которым вы предоставили общий доступ, и управляйте ими.",ON_SIGN_OUT_SUBPROMPT_RECEIVED_FILES:"Просматривайте файлы, к которым вам предоставлен общий доступ, и управляйте ими.",COULD_NOT_SEND:"Отправка не выполнена",ENTERPRISE_USERS_ACCESS_ERROR:"У вас нет доступа к этому сервису. Обратитесь к ИТ-администратору, чтобы получить доступ, или войдите в систему с Adobe ID.",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_NOT_AVAILABLE:"Продолжить в Adobe Document Cloud",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_USE_WEB_MSG:'Изменение цвета и логотипа в настоящее время доступно только на веб-сайте Adobe Send. Чтобы перейти в Adobe Send, нажмите "<%= buttonName %>".',S_T_CUSTOMIZE_RECIPIENT_PAGE_DIALOG_USE_WEB_MSG:'Изменения вашего логотипа и цвета в настоящее время доступны только в Adobe Document Cloud. Чтобы перейти в Adobe Document Cloud, нажмите "<%= buttonName %>".',CUSTOMIZE_RECIPIENT_PAGE_DIALOG_USE_WEB_OK:"Продолжить",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_TITLE:"Добавить логотип и цвет",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_DESCRIPTION:"Добавьте логотип и выберите цвет для отображения в сообщениях электронной почты на странице получателя.",CUSTOMIZE_RECIPIENT_PAGE_ADD_LOGO:"Добавить логотип",CUSTOMIZE_RECIPIENT_PAGE_REMOVE_LOGO:"Удалить логотип",CUSTOMIZE_RECIPIENT_PAGE_CHOOSE_COLOR:"Выбрать цвет",CUSTOMIZE_RECIPIENT_PAGE_SAVE:"Сохранить",CUSTOMIZE_RECIPIENT_PAGE_CLOSE:"Отмена",CUSTOMIZE_RECIPIENT_PAGE_FILE_FILTERING_LABEL:"Тип файла: изображение",CUSTOMIZE_RECIPIENT_PAGE_UNSUPPORTED_LOGO_TITLE:"Ошибка",CUSTOMIZE_RECIPIENT_PAGE_UNSUPPORTED_LOGO_FORMAT:"Выбранный файл невозможно использовать в качестве логотипа. Выберите другой файл. ",CUSTOMIZE_RECIPIENT_PAGE_UNSUPPORTED_COLOR_FORMAT:"Указанный цвет является недопустимым. Введите шестнадцатеричное значение, например #FFFFFF или #FFF.",SURVEY_TITLE:"Ваш отзыв очень важен для нас!",SURVEY_LINK:"Поделитесь с нами своим мнением",SURVEY_QUESTION_ONE:"Почему вы используете сервис Send & Track?",SURVEY_QUESTION_TWO:"Вы довольны сервисом?",SURVEY_QUESTION_THREE:"Каких функций вам не хватает?",SURVEY_SEND:"Отправить",SURVEY_CLOSE:"Нет, спасибо",SURVEY_TEXTAREA_LIMITATION_LABEL:"симв. осталось",INVALID_PARAMETER_SURVEY_MESSAGE:"Тип ответа не разрешен",INVALID_PARAMETER_SURVEY_TITLE:"Недопустимый параметр",SEND_RHP_TITLE:"Получатель",GENERIC_ARIA_LABEL_STRING:"<%= prefix %>. <%= suffix %>",ENTERPRISE_RESTRICTIONS_ENFORCED:"Действуют ограничения на доступ",ENTERPRISE_USERS_SHARING_ACCESS:"Эта функция недоступна, так как ваша организация ограничила возможности предоставления общего доступа. ",NAME:"ИМЯ",SENT_RECEIVED:"ОТПРАВЛЕНО/ПОЛУЧЕНО",OWNER:"ОТПРАВИТЕЛЬ",STATUS:"СОСТОЯНИЕ",SHARED:"С общ. доступом",YOU:"Вы",VIEWED:"просмотр.",VIEWED_CAPS:"Просмотрено",WAITING_FOR_YOU:"Ожидает ваших действий",OF:"из",ACTIVITY_VIEWED_BY:"Просмотрено пользователем <%= participant %>",ACTIVITY_DOWNLOADED_BY:"Загружено пользователем <%= participant %>",ACTIVITY_ONE_DOWNLOADED_BY:"Пользователь <%= participant %> загрузил файл <%= file_name %>",ACTIVITY_CREATED_BY:"Создано пользователем <%= participant %>",ACTIVITY_DOCUMENT_CREATED_BY:"Пользователь <%= participant %> создал документ",ACTIVITY_SENT_TO:"Отправлено пользователю <%= participant %>",REMOVE_LINK_DC_TITLE:"Удаление ссылок из облачного хранилища Adobe",REMOVE_LINK_DC_CONTENT:"При удалении этой ссылки она также будет удалена из списка элементов, к которым вам предоставлен доступ.",REMOVE_LINK_DC_BUTTON:"Удалить ссылку",ASCENDING:"По возрастанию",DESCENDING:"По убыванию",SHARED_FILES_DOWNLOAD_TITLE:"Общие файлы",SENT_FILES_HEADER:"Вы предоставили доступ",RECEIVED_FILES_HEADER:"Вам предоставлен доступ",LAST_ACTIVITY:"ПОСЛЕДНИЕ ДЕЙСТВИЯ",DATE_LAST_ACTIVITY:"Дата последнего действия",SHARED_BY:"КЕМ ПРЕДОСТАВЛЕН ДОСТУП",SIZE:"Размер",SHARING:"ДОСТУП",DATE_SHARED:"ПРЕДОСТАВЛЕН ДОСТУП",DATE_SHARED_S:"Предоставлен доступ",FROM:"ОТ",DUE_BY:"Срок:"});