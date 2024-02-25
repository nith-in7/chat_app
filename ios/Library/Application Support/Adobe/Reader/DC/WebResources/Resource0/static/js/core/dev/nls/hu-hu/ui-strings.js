/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and may be covered by U.S. and Foreign Patents,
* patents in process, and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

define({ACTIONS:"Műveletek",ACTIONS_UC:"MŰVELETEK",ADDED:"Hozzáadott",ADD_ACCOUNT:"Fájltárolás hozzáadása",BACK:"Vissza",CLOSE:"Bezárás",CONTINUE:"Folytatás",NEXT:"Következő",EXTENSION:"(.<%- ext %>)",FILES:"Fájlok",FILE_NAME:"Fájlnév",FOLDER_NAME:"Mappa neve",LOCATION:"Hely",MODIFIED:"Módosítva",LAST_ACTIVITY:"Legutóbbi tevékenység",NAME:"Név",OR:"vagy",PROPERTIES:"Tulajdonságok",PROPERTIES_UC:"TULAJDONSÁGOK",REMOVE:"Eltávolítás",REMOVE_SHARED:"Eltávolítás a megosztottak közül",REMOVE_SHARED_HINT:"Fájl eltávolítása a megosztottak listájáról",REMOVE_TODO_CARD:"Teendőlista-kártya eltávolítása",SELECT_FILES:"Fájlok kiválasztása",SELECT_FILE:"Fájl kiválasztása",DESELECT_FILES:"Fájlok kijelölésének megszüntetése",DESELECT_FILE:"Fájl kijelölésének megszüntetése",DESELECT_ALL:"Minden kijelölés megszüntetése",VIRGO_NON_SHARED:"Csak Ön",VIRGO_SHARED_FILE:"Megosztott",VIRGO_EMPTY_DOCUMENT_CLOUD_TITLE:"Még nincsenek fájlok az Adobe felhőalapú tárhelyen",VIRGO_EMPTY_FOLDER_SUBTITLE:"Az Adobe felhőalapú tárhelyéhez hozzáadott fájljai itt fognak megjelenni. Dolgozhat velük, és megoszthatja azokat a weben, valamint az asztali és mobilalkalmazásban.",VIRGO_EMPTY_FOLDER_CC_SUBTITLE:"A Creative Cloudhoz hozzáadott fájljai itt fognak megjelenni. Dolgozhat velük, és megoszthatja azokat a weben, valamint az asztali és mobilalkalmazásban.",VIRGO_EMPTY_SUB_FOLDER_SUBTITLE:"Még nincsenek itt fájlok.",VIRGO_EMPTY_FOLDER_UPLOAD_ACTION:"Fájlok feltöltése",VIRGO_EMPTY_FOLDER_NEW_FOLDER_ACTION:"Új mappa létrehozása",REVERSE_SORT_ORDER:"Fordított rendezési sorrend",VIRGO_EMPTY_CREATIVE_CLOUD_TITLE:"Még nincsenek fájlok a Creative Cloudban",VIRGO_EMPTY_FOLDER_TITLE:"Nincsenek fájlok ebben a mappában",VIRGO_EMPTY_MY_COMPUTER:"Ha a számítógépéről nyit meg fájlokat, itt jelennek meg azok mappái.",VIRGO_NON_SIGNED_IN_DC_TITLE:"Jelentkezzen be az Adobe felhőalapú tárhelyén tárolt fájlok eléréséhez.",VIRGO_NON_SIGNED_IN_DC_SUBTITLEE:"Dolgozzon fájljaival, valamint kezelje és ossza meg azokat az interneten, az asztali alkalmazásban vagy a mobilalkalmazásban.",VIRGO_NON_SIGNED_IN_CC_TITLE:"Jelentkezzen be a Creative Cloud fájljainak eléréséhez.",VIRGO_NON_SIGNED_IN_CC_SUBTITLEE:"Tároljon, kezeljen és osszon meg szinkronizált fájlokat a Creative Cloud asztali alkalmazásaiban, könyvtáraiban és mobilalkalmazásaiban.",VIRGO_NON_SIGNED_IN_OTHERS_TITLE:"Jelentkezzen be a fájlok eléréséhez.",VIRGO_NON_SIGNED_IN_ACTION:"Bejelentkezés",VIRGO_NO_INTERNET_CONNECTION_TITLE:"Nincs internetkapcsolat.",VIRGO_NO_INTERNET_CONNECTION_DC_SUBTITLE:"Az Adobe felhőalapú tárhelyéhez hozzáadott fájlok eléréséhez kérjük, csatlakozzon az internethez, és próbálja újra.",VIRGO_NO_INTERNET_CONNECTION_CC_SUBTITLE:"A Creative Cloud fájlok eléréséhez csatlakozzon az internethez, és próbálja újra.",VIRGO_NO_INTERNET_CONNECTION_OTHERS_SUBTITLE:"Fájljai eléréséhez csatlakozzon az internethez, és próbálja újra.",VIRGO_NO_INTERNET_CONNECTION_CONNECTORS_SUBTITLE:"A megosztott fájlok eléréséhez csatlakozzon az internethez, és próbálja újra.",SIZE:"Méret",SELECT_ALL:"Mindent kijelöl",TOTAL_FILES:"Fájlok száma összesen",VIRGO_NAME:"NÉV",VIRGO_HDR_SHARE:"MEGOSZTÁS",VIRGO_SIZE:"MÉRET",VIRGO_TYPE:"TÍPUS",VIRGO_MODIFIED:"MÓDOSÍTVA",VIRGO_CREATED:"HOZZÁADVA",VIRGO_VIEWED:"MEGTEKINTVE",VIRGO_OPENED:"MEGNYITVA",SORTED_BY:"RENDEZÉSI SZEMPONT:",N_ITEMS_CLICK_TO_VIEW:"<%= num %> elem Kattintson a megtekintésért.",CREATED_DATE:"Hozzáadva",MODIFIED_DATE:"Módosítva",VIEWED_DATE:"Megtekintve",OPENED_DATE:"Megnyitás dátuma",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Tegnap",DATE_MM_DD_YYYY:"<%= month %>/<%= day %>/<%= year %>",DATE_MMM_DD:"<%= MMM %> <%= DD %>.",DATE_MMM_DD_YYYY:"<%= YYYY %>. <%= MMM %> <%= DD %>.",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",DATETYPE_AND_TIME:"<%= dateType %> <%= date %>",YYYY:"ÉÉÉÉ",AM:"De.",PM:"Du.",HH:"H",HH_MM_SEPARATOR:":",MM:"M",DD:"D",ANIMATION:"Animáció",AUDIO:"Hang",CALENDAR:"Naptár",CASCADING_STYLE_SHEET:"Lépcsőzetes stíluslap",CERTIFICATE:"Tanúsítvány",FONT:"Betűtípus",IMAGE:"Kép",PLAIN_TEXT:"Normál szöveg",PRESENTATION:"Előadás",RICH_TEXT:"Rich Text",SPREADSHEET:"Táblázat",STYLE_SHEET:"Stíluslap",TEXT:"Szöveg",UNKNOWN:"Ismeretlen",VIDEO:"Videó",VIRGO_ANY_TYPE:"Bármilyen típus",VIRGO_ANY_TIME:"Bármikor",VIRGO_ANY_FILE_NAME:"Bármilyen név",VIRGO_RESET_FILTER:"Visszaállítás",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= szám %> GB",DECIMAL_SEPARATOR:".",THOUSANDS_SEPARATOR:",",FILE_NAME_CONTAINS:"Fájlnév tartalmaz",FILE_TYPE_IS:"Fájltípus:",FILE_CONTENT:"Fájl tartalma",DATE_LAST_MODIFIED:"Utolsó módosítás dátuma",DATE_LAST_VIEWED:"Utolsó megtekintés dátuma",DATE_ADDED:"Hozzáadott dátum",FILE_ADDED_BY:"Fájlt hozzáadta",MIN_SIZE:"Min. méret",MAX_SIZE:"Max. méret",VIRGO_FILTER:"Szűrő",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"PDF létrehozása",EXPORT_PDF:"PDF exportálása",COMBINECONVERT_PDF:"PDF konvertálása",COMBINE_PDF:"PDF kombinálása",FILL_SIGN:"Kitöltés és aláírás",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Ma",YESTERDAY:"Tegnap",WITHIN_LAST_WEEK:"Elmúlt héten",WITHIN_LAST_MONTH:"Elmúlt hónapban",ONE_TO_TWO_MONTHS_AGO:"1-2 hónappal ezelőtt",TWO_TO_THREE_MONTHS_AGO:"2-3 hónappal ezelőtt",THREE_TO_FOUR_MONTHS_AGO:"3-4 hónappal ezelőtt",FOUR_TO_FIVE_MONTHS_AGO:"4-5 hónappal ezelőtt",FIVE_TO_SIX_MONTHS_AGO:"5-6 hónappal ezelőtt",SIX_TO_TWELVE_MONTHS_AGO:"6-12 hónappal ezelőtt",MORE_THAN_ONE_YEAR_AGO:"1+ évvel ezelőtt",CUSTOM:"Egyedi dátumtartomány",VIRGO_VIRGO_PAST_HOUR:"Az elmúlt órában",VIRGO_Past_24_HOUR:"Az elmúlt 24 órában",VIRGO_PAST_WEEK:"Múlt héten",VIRGO_PAST_MONTH:"Az elmúlt hónapban",VIRGO_PAST_YEAR:"Tavaly",VIRGO_CUSTOM_RANGE:"Egyedi dátumtartomány...",STARRED_FILE:"Ez egy megcsillagozott fájl",STAR_FILE:"Fájl megcsillagozása",UNSTAR_FILE:"Fájl megcsillagozásának megszüntetése",STARRING_FAILED_TOAST:"Megcsillagozás sikertelen",UNSTARRING_FAILED_TOAST:"Megcsillagozás visszavonása sikertelen",TRY_LATER_TOAST:"Próbálja újra később",OK:"OK",CANCEL:"Mégse",DIALOG:"Párbeszédpanel",TO_ACTIVATE_PRESS_SPACE_BAR:"Nyomja meg a szóközt az aktiváláshoz",CONFIRM_DELETE_TITLE:"Törlés",CONFIRM_DELETE_MSG_ONE_ITEM:"Biztosan törölni kívánja ezt: az elemet?",CONFIRM_DELETE_MSG_N_ITEMS:"Biztos abban, hogy törölni akarja <%= numItems %> elemeket?",DOWNLOAD:"Letöltés",DOWNLOAD_FILE:"Fájl letöltése",DOWNLOAD_FILES:"Fájlok letöltése",DOWNLOAD_FOLDER:"Mappa letöltése",RENAME:"Átnevezés",RENAME_ELLIPSIS:"Átnevezés...",RENAME_FILE:"Fájl átnevezése",RENAME_FOLDER:"Mappa átnevezése",MOVE_FILE:"Fájl áthelyezése",MOVE_FILES:"Fájlok áthelyezése",MOVE_FOLDER:"Mappa áthelyezése másik mappába",MOVE_FOLDERS:"Mappák áthelyezése másik mappába",MOVE_FILE_AND_FOLDER:"Fájl és a mappa áthelyezése másik mappába",MOVE_FILES_AND_FOLDER:"Fájlok és a mappa áthelyezése másik mappába",MOVE_FILE_AND_FOLDERS:"Fájl és a mappák áthelyezése másik mappába",MOVE_FILES_AND_FOLDERS:"Fájlok és a mappák áthelyezése másik mappába",SHARE:"Megosztás",SHARE_ELLIPSIS:"Megosztás...",SHARE_FILE:"Fájl megosztása",SHARE_FILES:"Fájlok megosztása",SEND_FILE:"Fájl küldése és nyomon követése",SEND_FILES:"Fájlok küldése és nyomon követése",DELETE:"Törlés",SHARED_BY_SBO_CB:"Megosztotta: ",SHARE_FILE_PDF:"Fájl megosztása",ATTACH_TO_EMAIL_PDF:"Csatolás e-mailhez",SEND_FOR_REVIEW_PDF:"Küldés megjegyzésekhez",SEND_FOR_SIGNATURE_PDF:"Adobe Acrobat Sign",EDIT_PDF:"PDF szerkesztése",COMMENT_PDF:"Megjegyzés",ORGANIZE_PDF:"PDF rendszerezése",FILL_SIGN_PDF:"Kitöltés és aláírás",SHARE_FILE_TOOLTIP:"Dokumentumok küldése, valamint megtekintések és letöltések követése",SHARE_FILE_VIRGO_TOOLTIP:"Fájl megosztása megtekintésre vagy megjegyzések hozzáadására és a válaszok nyomon követésére",SHARE_REVIEW_FILE_VIRGO_TOOLTIP:"Hívjon meg embereket megjegyzések hozzáfűzésére a megosztott fájlhoz, és kövesse nyomon a válaszokat",SIGNATURE_FILE_VIRGO_TOOLTIP:"Küldjön PDF-fájlokat online aláírásra az Acrobat használata nélkül.",EXPORT_FILE_VIRGO_TOOLTIP:"Egy PDF Microsoft Word, Excel, PowerPoint stb. fájllá konvertálása",COMMENT_FILE_VIRGO_TOOLTIP:"Megjegyzések hozzáadása kiemeléssel, cetlikkel és jelölő eszközökkel",FILL_SIGN_FILE_VIRGO_TOOLTIP:"Dokumentumok elektronikus kitöltése és aláírása",FILL_SIGN_FILE_VIRGO_TOOLTIP_NEW:"Kitölthet és aláírhat űrlapokat, vagy elküldheti azokat másoknak aláírásra",ORGANIZE_FILE_VIRGO_TOOLTIP:"Oldalak törlése, beszúrása, kivágása vagy elforgatása",RENAME_FILE_VIRGO_TOOLTIP:"Fájl átnevezése",MOVE_FILE_VIRGO_TOOLTIP:"Fájl áthelyezése másik mappába",DOWNLOAD_FILE_VIRGO_TOOLTIP:"Fájl letöltése",DELETE_FILE_VIRGO_TOOLTIP:"Fájl végleges törlése",DELETE_FILES_VIRGO_TOOLTIP:"Fájlok végleges törlése",DELETE_FOLDER_VIRGO_TOOLTIP:"Mappa végleges törlése",DELETE_FOLDERS_VIRGO_TOOLTIP:"Mappák végleges törlése",DELETE_FILE_FOLDER_VIRGO_TOOLTIP:"Fájl és mappa végleges törlése",DELETE_FILE_FOLDERS_VIRGO_TOOLTIP:"Fájl és mappák végleges törlése",DELETE_FILES_FOLDER_VIRGO_TOOLTIP:"Fájlok és mappa végleges törlése",DELETE_FILES_FOLDERS_VIRGO_TOOLTIP:"Fájlok és mappák végleges törlése",EDIT_FILE_VIRGO_TOOLTIP:"PDF-fájl szövegeinek és képeinek szerkesztése",SEND_FOR_REVIEW:"Megjegyzések automatikus összegyűjtése az ellenőrzőktől egy PDF-be",SEND_FOR_SIGNATURE:"Másoktól aláírások kérése és az eredmények követése",EDIT:"PDF-fájlok szövegeinek és képeinek szerkesztése",COMMENT:"Megjegyzések hozzáadása kiemeléssel, cetlikkel és jelölő eszközökkel",FILL_SIGN_FILE:"Dokumentumok és űrlapok kitöltése és aláírása elektronikusan",ORGANIZE:"Oldalak törlése, beszúrása, kivágása vagy elforgatása",ATTACH_TO_EMAIL_TOOLTIP:"Fájl küldése e-mail mellékleteként",EXPORT_PDF_TOOLTIP:"Egy PDF Microsoft Word, Excel, PowerPoint stb. fájllá konvertálása",CREATE_PDF_TOOLTIP:"PDF készítése bármilyen formátumból",COMBINECONVERT_PDF_TOOLTIP:"Konvertáljon  PDF-et Word, Powerpoint vagy Excel dokumentumba, vagy hozzon létre PDF-et ezekből az eredeti formátumokból",RHP_ACTIVITY_TOOLTIP:"A szerződés minden tevékenységének megtekintése",RHP_AUDIT_REPORT_TOOLTIP:"A szerződés vizsgálati jelentésének letöltése (PDF-ben, új lapon nyílik meg)",RHP_CANCEL_TOOLTIP:"Szerződés törlése",RHP_STATUS_TOOLTIP:"A szerződés címzettlistájának megtekintése",RHP_REMINDER_TOOLTIP:"Emlékeztető küldése",FOLDER_PATH:"MAPPA",MODIFIED_PROPERTY:"Módosítva",HOME:"Eleje",ITEMS_SELECTED:"kijelölve",ENTER_KEYWORD:"Keresés",SEARCH:"Keresés",SHARED_S:"Megosztott",PREVIEW_NOT_AVAILABLE:"Fájltípus előnézete nem lehetséges",PREVIEW_NOT_AVAILABLE_DESC:"Kérjük, megtekintéshez <a class='preview-download' href='javascript:void(0)'>töltse le</a> a fájlt.",RENAME_NAME_IN_USE:'<%= existingType %> "<%= name %>" elnevezéssel már létezik ezen a helyen. Válasszon másik <%= renamedType %> nevet.',RENAME_ILLEGAL_NAME:"A név érvénytelen karaktereket vagy túl sok karaktert tartalmaz. Válasszon másik <%= renamedType %> nevet.",MOVE:"Áthelyezés",MOVE_FILE_TO:"Fájl áthelyezése ide...",MOVE_FILES_TO:"Fájlok áthelyezése...",MOVE_FOLDER_TO:"Mappa áthelyezése ide...",MOVE_FOLDERS_TO:"Mappák áthelyezése ide...",MOVE_FILE_AND_FOLDER_TO:"Fájl és mappa áthelyezése ide...",MOVE_FILES_AND_FOLDER_TO:"Fájlok és mappa áthelyezése ide...",MOVE_FILE_AND_FOLDERS_TO:"Fájl és mappák áthelyezése ide...",MOVE_FILES_AND_FOLDERS_TO:"Fájlok és mappák áthelyezése ide...",DUPLICATE_NAME_TITLE:"<%= type %> név megkettőzése",DUPLICATE_NAME_PROMPT:'<%= type %> named "<%- name %>" már létezik ezen a helyen. Mit kíván csinálni?',DUPLICATE_NAME_REPLACE_EXISTING:"Létező <%= type %> cseréje",DUPLICATE_NAME_RENAME_UPLOADED:"Feltöltött <%= type %> átnevezése",DUPLICATE_NAME_DELETE_MOVED:"Áthelyezett <%= type %> törlése",DUPLICATE_NAME_RENAME_MOVED:"Áthelyezett <%= type %> átnevezése",FILE_INITIAL_CAP:"Fájl",FILE:"fájl",FOLDER_INITIAL_CAP:"Mappa",FOLDER:"mappa",REPORT_ABUSE:"Visszaélés jelentése",REPORT_ABUSE_TITLE:"Visszaélés jelentése",REPORT_ABUSE_CONTENT_LABEL:"Tartalom",REPORT_ABUSE_TITLE_LABEL:"Title",REPORT_ABUSE_DEFAMATION_LABEL:"Rágalmazás",REPORT_ABUSE_OFFENSIVE_LABEL:"Sértő tartalom",REPORT_ABUSE_EXPLICIT_LABEL:"Szexuális jellegű tartalom",REPORT_ABUSE_TRADEMARK_LABEL:"Védjegyhasználat megsértése",REPORT_ABUSE_RACIST_LABEL:"Rasszista vagy gyűlöletkeltő tartalom",REPORT_ABUSE_OTHER_LABEL:"Egyéb",REPORT_ABUSE_BLURB:"Ha úgy érzi, hogy ez a tartalom sérti az Adobe <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_hu' target='_blank'>Felhasználási feltételeit</a>, akkor jelentse a tartalmat ennek a gyors űrlapnak a kitöltésével.",REPORT_ABUSE_EMAIL_PROMPT:"E-mail címe",REPORT_ABUSE_NAME_PROMPT:"Név",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Mit jelent?",REPORT_ABUSE_REASON_PROMPT:"Miért jelenti ezt a tartalmat?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Kérjük, adja meg, hogy mire vonatkozik.",REPORT_ABUSE_COPYRIGHT_REPORT:"A szerzői jogok megsértésének jelentéséhez kövesse a <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_hu' target='_blank'>Felhasználási feltételek</a> 17. szakaszában leírtakat.",REPORT_ABUSE_REPORT_BUTTON:"Visszaélés jelentése",REPORT_ABUSE_EMAIL_ERROR:"Érvényes e-mail címet kell megadnia.",LANGUAGE_CHANGE:"<%= lang %> (Csere)",CHOOSE_LANGUAGE:"Válasszon nyelvet",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Fájltárolási lehetőség elfogyott",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Jelenleg <%= using %> részét használja <%= allotment %> kiosztásának, és hamarosan elfogy a tárolóhelye.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Fájltárolási lehetőség túllépve",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"<%= using %> teljes tárolása meghaladta a megengedett maximumot <%= allotment %> ami az új előfizetéssel engedélyezett.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"A feltöltött fájl nem menthető, mert az meghaladja a kiosztott kvótát <%= allotment %>.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Az összes létező fájl megtekinthető és letölthető, de további fájlok mentéséhez frissíteni kell fiókját.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"További hely felszabadításához törölni kell néhány fájlt.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Frissítse fiókját több tárolásért és további funkciókért.",LEARN_MORE:"További tudnivalók",UPGRADE:"Frissítés",ERROR:"Hiba",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Fájlmegnyitás maximuma elérve",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Egy időben legfeljebb 50 fájlt nyithat meg.",HTTP_STATUS_DEFAULT_TITLE:"Nem lehetett teljesíteni a kérést",HTTP_STATUS_DEFAULT_MSG:"Hiba történt kérése teljesítése közben, és nem lehetett végrehajtani.",HTTP_STATUS_DEFAULT_MSG_CEF:"Hiba történt a szolgáltatáshoz kapcsolódáskor. Próbálja meg később.",HTTP_STATUS_400_TITLE:"Nem lehetett teljesíteni a kérést (400)",HTTP_STATUS_400_TITLE_CEF:"Nem lehetett teljesíteni a kérést",HTTP_STATUS_400_MSG:"Hiba történt kérése teljesítése közben, és nem lehetett végrehajtani.",HTTP_STATUS_401_TITLE:"Kijelentkezett (401)",HTTP_STATUS_401_TITLE_CEF:"Kijelentkezett",HTTP_STATUS_401_MSG:"A munkamenet lejárt és ki lett jelentkeztetve inaktivitás miatt. Kattintson a lenti „Bejelentkezés” elemre, hogy újból bejelentkezzen.",HTTP_STATUS_401_MSG_CEF:"Hiba lépett fel. Próbáljon meg kijelentkezni, majd újból bejelentkezni",HTTP_STATUS_403_QUOTA_TITLE:"Tárolási határ túllépve (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Tárolási határ túllépve",HTTP_STATUS_403_QUOTA_MSG:"A fájlt nem lehetett feltölteni, mert az meghaladja a tárolási határt. Törölni kell néhány meglévő fájlt több hely felszabadítása végett.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Nem törölhető mappa tartalommal együtt (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Nem törölhető mappa tartalommal együtt ",HTTP_STATUS_403_DEL_FOLDER_MSG:"Csak üres mappákat lehet törölni. A mappa törlése előtt annak teljes tartalmát törölnie kell.",HTTP_STATUS_403_NO_SHARING_TITLE:"A megosztás nem megengedett (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"A megosztás nem megengedett",HTTP_STATUS_403_NO_SHARING_MSG:"A fájlt nem lehetett megosztani, mert ez egy audio- vagy videofájl.",HTTP_STATUS_403_VIRUS_TITLE:"Vírus észlelve (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Vírus észlelve",HTTP_STATUS_403_VIRUS_MSG:"A fájl nem tölthető fel, mert vírust tartalmaz.",HTTP_STATUS_403_ENCRYPTION_TITLE:"A visszafejtés nem sikerült (403).",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"A visszafejtés nem sikerült",HTTP_STATUS_403_ENCRYPTION_MSG:"A tartalom elérése közben hiba történt. A visszafejtés nem sikerült. Forduljon a rendszergazdához.",HTTP_STATUS_403_TITLE:"Tiltott (403)",HTTP_STATUS_403_TITLE_CEF:"Tiltott",HTTP_STATUS_403_MSG:"A művelet nem teljesíthető. Próbálja meg ismét később.",HTTP_STATUS_404_TITLE:"A fájl nem található (404)",HTTP_STATUS_404_TITLE_CEF:"A fájl nem található",HTTP_STATUS_404_MSG:"Az elérni kívánt fájl nem található. A fájl törölve lett vagy másik szakaszba lett áthelyezve.",HTTP_STATUS_405_TITLE:"Módszer nem megengedett (405)",HTTP_STATUS_405_TITLE_CEF:"Módszer nem megengedett",HTTP_STATUS_405_MSG:"A kérés nem teljesíthető, mert a módszer nem megengedett.",HTTP_STATUS_406_TITLE:"Böngésző-inkompatibilitás",HTTP_STATUS_406_TITLE_CEF:"Típus nem támogatott",HTTP_STATUS_406_MSG:"A böngésző nem tud kommunikálni a weboldallal. Használjon másik böngészőt. (Hiba 406: Nem támogatott típus.)",HTTP_STATUS_415_TITLE:"Nem támogatott médiatípus (415)",HTTP_STATUS_415_TITLE_CEF:"Nem támogatott médiatípus",HTTP_STATUS_415_MSG:"A kérés nem teljesíthető, mert a megadott médiatípus nem támogatott.",HTTP_STATUS_500_TITLE:"Belső kiszolgálóhiba (500)",HTTP_STATUS_500_TITLE_CEF:"Belső kiszolgálóhiba",HTTP_STATUS_500_MSG:"A kérés nem teljesíthető egy belső kiszolgálóhiba miatt.",HTTP_STATUS_501_TITLE:"Kérés nincs implementálva (501)",HTTP_STATUS_501_TITLE_CEF:"Kérés nincs implementálva",HTTP_STATUS_501_MSG:"A készítendő kérés még nincs implementálva a kiszolgálón.",HTTP_STATUS_503_TITLE:"A kiszolgáló jelenleg nem érhető el (503)",HTTP_STATUS_503_TITLE_CEF:"A kiszolgáló jelenleg nem érhető el",HTTP_STATUS_503_MSG:"A kiszolgáló nem érhető el, lehet, hogy le lett állítva. Próbálja meg később.",DOWNLOAD_FORM_TITLE:"Űrlapfájl",DOWNLOAD_FORM_MESSAGE:"Az űrlapfájlt letöltéshez PDF formátumra kell konvertálni.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"A kiválasztott elemek között űrlapfájlok vannak, melyek nem tölthetők le. Ezek a fájlok kizárásra kerülnek. Letölthetők PDF verziók a letöltéshez egy űrlapfájl választásával.",DOWNLOAD_FORMS_MESSAGE:"Űrlapfájlok nem tölthetők le. Letölthetők PDF verziók a letöltéshez egy űrlapfájl választásával.",SETTINGS:"Beállítások",DONE:"Kész",FILE_LISTS:"FÁJLOK",FILE_LISTS_SEARCH:"Adobe felhőalapú tárhely",SHARED_DOCUMENTS:"Egyéb fájltárolás",SIGN_SEARCH:"MEGÁLLAPODÁSOK",ENTERPRISE_SIGN_SEARCH:"Szerződések",EDIT_ACCOUNTS:"Fiókok szerkesztése",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Fiók eltávolítása",ACROBAT_DOT_COM_FILES:"Adobe felhőalapú tárhely",ACROBAT_DOT_COM_ALL_FILES:"Saját fájlok",DOWNLOAD_ALL:"Összes letöltése",NOTIFICATION_UPLOADING:"Feltöltés...",NOTIFICATION_CONVERTING:"Átalakítás...",NOTIFICATION_CONVERSION_FAILURE:"Sikertelen konvertálás",NOTIFICATION_DOWNLOAD_FAILURE:"Letöltési hiba",READY:"Kész",NOTIFICATION_WAITING:"Folyamatban...",NOTIFICATION_DOWNLOADING:"Letöltés...",NOTIFICATION_PROCESSING:"Feldolgozás...",NOTIFICATION_DOWNLOAD_ERROR:"Hiba történt a fájl letöltése közben",NOTIFICATION_RETRY:"Újra",YES:"Igen",NO:"Nem",REPLACE_EXISTING_FILE_TITLE:"Meglévő fájl cseréje",REPLACE_EXISTING_FILE_MSG:"Egy fájl ezzel a névvel már létezik. Szeretné lecserélni?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Meglévő fájl cseréje. Igen",OPEN:"Megnyitás",OPEN_FILE:"Fájl megnyitása",OPEN_FILES:"Fájlok megnyitása",OPEN_FOLDER:"Mappa megnyitása",SAVE_AS:"Mentés másként",SAVE_AS_FILE:"Mentés fájlként",SAVE_AS_FILES:"Mentés Zip formátumban",SAVED:"Mentett",SAVE:"Mentés",SHOW_IN_FOLDER:"Megjelenítés mappában",SEND:"Küldés",CONVERT_TO_PDF:"Konvertálás PDF-re",COMBINE:"Kombinálás",BROWSE_FOLDER:"Tallózás...",CHOOSE_DIFFERENT_FOLDER:"Válasszon egy másik mappát...",ATTACH_TO_EMAIL:"Csatolás e-mailhez",SEND_AND_TRACK:"Küldés és követés",PRINT:"Nyomtatás",PUBLIC_ICON_TOOLTIP:"Az Adobe Send és Track szolgáltatással megosztott fájlok",RNA_VERSION_DIALOG_TITLE:"Hiba történt",RNA_VERSION_DIALOG_CONTENT:"Ennek a területnek a funkciói csatlakoznak az Adobe Document Cloud szolgáltatáshoz és frissíteni kell őket, hogy kompatibilisek maradjanak a szolgáltatással. A legújabb verzióra frissítéshez válassza a Frissítések keresése elemet a Súgó menüből, vagy kattintson az alábbi linkre, hogy folytassa a munkát egy webböngészőben.",RNA_VERSION_DIALOG_LINK_TITLE:"Ugrás a Document Cloud szolgáltatásra",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_hu",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_hu",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_hu",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_hu",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_hu",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_hu",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_hu",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_hu",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_hu",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_hu",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_hu",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_hu",SERVER_OUTAGE_DIALOG_TITLE:"Hiba történt",SERVER_OUTAGE_DIALOG_CONTENT:"Az elérni kívánt szolgáltatás átmenetileg nem érhető el.  Próbálja meg később.",FROM:"Kezdete",TO:"Vége",GO:"Mehet",JANUARY:"JANUÁR",FEBRUARY:"FEBRUÁR",MARCH:"MÁRCIUS",APRIL:"ÁPRILIS",MAY:"MÁJUS",JUNE:"JÚNIUS",JULY:"JÚLIUS",AUGUST:"AUGUSZTUS",SEPTEMBER:"SZEPTEMBER",OCTOBER:"OKTÓBER",NOVEMBER:"NOVEMBER",DECEMBER:"DECEMBER",JANUARY_S:"január",FEBRUARY_S:"február",MARCH_S:"március",APRIL_S:"április",MAY_S:"máj",JUNE_S:"június",JULY_S:"július",AUGUST_S:"augusztus",SEPTEMBER_S:"szeptember",OCTOBER_S:"október",NOVEMBER_S:"november",DECEMBER_S:"december",MONTH_1:"jan",MONTH_2:"feb",MONTH_3:"már",MONTH_4:"ápr",MONTH_5:"máj",MONTH_6:"jún",MONTH_7:"júl",MONTH_8:"aug",MONTH_9:"szept",MONTH_10:"okt",MONTH_11:"nov",MONTH_12:"dec",SUNDAY:"VASÁRNAP",MONDAY:"HÉTFŐ",TUESDAY:"KEDD",WEDNESDAY:"SZERDA",THURSDAY:"CSÜTÖRTÖK",FRIDAY:"PÉNTEK",SATURDAY:"SZOMBAT",INVALID_DATE:"Érvénytelen dátum",INVALID_DATE_RANGE:"Érvénytelen dátumtartomány",PREVIOUS_MONTH:"Előző hónap",NEXT_MONTH:"Következő hónap",SUNDAY_SHORT:"VA",MONDAY_SHORT:"HÉ",TUESDAY_SHORT:"KE",WEDNESDAY_SHORT:"SZ",THURSDAY_SHORT:"CS",FRIDAY_SHORT:"PÉ",SATURDAY_SHORT:"SZ",MONTH_YEAR:"<%= year %>. <%= month %>",MONTH_S:"HH",DAY_S:"NN",YEAR_S:"ÉÉÉÉ",SUNDAY_S:"vasárnap",MONDAY_S:"hétfő",TUESDAY_S:"kedd",WEDNESDAY_S:"szerda",THURSDAY_S:"csütörtök",FRIDAY_S:"péntek",SATURDAY_S:"szombat",UNSHARE:"Megosztás visszavonása",UNSHARED_STRING:"Megosztás visszavonva",UNSHARE_FILE:"Fájl megosztásának visszavonása",DELETE_SHARED_FILE:"Megosztott fájl törlése",HISTORY:"Előzmények",FORWARD:"Továbbítás",COPYLINK:"Megosztott hivatkozás másolása",SAVE_A_COPY:"Másolat mentése",RHP:"RHP",SIGN:"Aláírás",AGREEMENT:"Szerződés",VIEW_SIGN:"Megtekintés és aláírás",VIEW_SIGN_LABEL:"Szerződés megtekintése és aláírása",APRROVE:"Jóváhagyás",VIEW_APRROVE:"Megtekintés és jóváhagyás",VIEW_APRROVE_LABEL:"Szerződés megtekintése és jóváhagyása",DELEGATE:"Delegálás",VIEW_DELEGATE:"Megtekintés és delegálás",VIEW_DELEGATE_LABEL:"Szerződés megtekintése és delegálása",ACKNOWLEDGE:"Nyugtázás",VIEW_ACKNOWLEDGE:"Megtekintés és nyugtázás",VIEW_ACKNOWLEDGE_LABEL:"Szerződés megtekintése és nyugtázása",ACCEPT:"Elfogadás",VIEW_ACCEPT:"Megtekintés és elfogadás",VIEW_ACCEPT_LABEL:"Szerződés megtekintése és elfogadása",FILL_FORM:"Űrlap kitöltése",VIEW_FILL_FORM:"Megtekintés és űrlap kitöltése",VIEW_FILL_FORM_LABEL:"Szerződés megtekintése és kitöltése",DUE:"Határidő:",CREATED:"Létrehozva",DRAFT:"Előzetes",REPORT_ABUSE_TOOLTIP:"Sértő vagy káros tartalom jelentése az Adobe-nak",DOWNLOAD_FILE_TOOLTIP:"Fájl letöltése",COPY_SHARED_FILE_TOOLTIP:"Megosztott fájl hivatkozásának másolása",SAVE_LINK_IN_DC_TOOLTIP:"Fájl hivatkozásának hozzáadása az Adobe felhőalapú tárhelyéhez.",REMOVE_LINK_FROM_DC_TOOLTIP:"Fájl hivatkozásának eltávolítása a Document Cloudból",DELETE_PARCEL_TOOLTIP:"Megosztott fájl törlése a Document Cloudból",UNSHARE_FILES_TOOLTIP:"Fájlok megosztásának leállítása",UNSHARE_FILE_TOOLTIP:"Fájl megosztásának leállítása",ACTIVITY_TOOLTIP:"Megosztott fájl aktivitásának megtekintése",WAITING_FOR_YOU:"Önre vár",SIGNED:"Aláírva",COMPLETED:"Kész",WAITING:"Várakozik",CANCELLED:"Visszavonva",EXPIRED:"Lejárt",APPROVED:"Jóváhagyva",DELIVERED:"Kézbesítve",ACCEPTED:"Elfogadva",FORM_FILLED:"Űrlap kitöltve",CC:"Másolatot kap",DRAFT:"Előzetes",SIGNED_C:"ALÁÍRVA",INITIATOR:"TULAJDONOS",REPLACE:"Csere",ACTIVITY:"Tevékenység",REMINDERS:"Emlékeztetők",AUDIT_REPORT:"Vizsgálati jelentés",ADD:"Hozzáadás",DIMMED:"Szürkített",CANCEL:"Mégse",SEE_ALL:"Összes megjelenítése",EDIT:"PDF-fájlok szövegeinek és képeinek szerkesztése",SEE_LESS:"Kevesebb megjelenítése",ANONYMOUS:"Névtelen",REMIND_CAPTION_NEXT:"Emlékeztető küldése a következő aláíró számára:",REMIND_CAPTION_ALL:"Összes függőben lévő aláíró emlékeztetése",REMIND_PLACEHOLDER_NOTE_INITIAL:"A dokumentum",REMIND_PLACEHOLDER_NOTE_LATER:"az Ön aláírására vár.",REMIND_PLACEHOLDER_NOTE_GENERIC:"Kérjük, adjon hozzá megjegyzéseket, és fejezze be a dokumentumot.",REMINDER_SENT_SUCCESSFUL:"Emlékeztető elküldve.",REMINDER_SENT_UNSUCCESUL:"Az emlékeztetőt nem sikerült elküldeni; próbálja meg újra",CANCEL_AGREEMENT:"Szerződés törlése",CANCEL_AGREEMENT_PLACEHOLDER:"Indokolja meg a szerződés törlését. (Minden értesített fél meg fogja kapni.)",CANCEL_NOTIFY:"Felek értesítése e-mailben",CANCEL_SUCCESSFUL:"Dokumentum törölve.",PROTECTED_DATA:"Védett adat",ES_SESSION_SIGNIN_PROMPT:"A szerződések biztonságos aláírása érdekében ismét be kell jelentkeznie.",COPY_REVIEW_LINK:"Megosztott hivatkozás másolása",DOWNLOAD_A_COPY:"Másolat letöltése",CLOSE_REVIEW:"Megosztott dokumentum bezárása",UNSHARE_REVIEW:"Fájl megosztásának visszavonása",DELETE_REVIEW:"Megosztott fájl törlése",REMOVE_ME:"Magam eltávolítása",REMOVE_FROM_RECENT:"Eltávolítás a legutóbbiak közül",REVIEWERS:"Ellenőrzők",REVIEWER:"átnéző",REVIEWED:"ELLENŐRIZVE",NOT_REVIEWED:"NINCS ELLENŐRIZVE",OPENED:"MEGNYITVA",NOT_OPENED:"NINCS MEGNYITVA",REMOVE_FROM_TRACKING:"Eltávolítás a nyomon követettek közül",PARTICIPANTS:"Emberek",PARTICIPANT:"személy",COMMENTED:"<%= num %>/<%= total %> fűzött hozzá megjegyzést",ANY_TIME:"Bármikor",ANY_STATUS:"Bármilyen állapotú",ANY_STATE:"Bármilyen állapotú",HOUR:"óra",MINUTES:"perc",PAST_HOUR:"Az elmúlt órában",PAST_24_HOURs:"Az elmúlt 24 órában",PAST_WEEK:"Múlt héten",PAST_MONTH:"Az elmúlt hónapban",PAST_YEAR:"Tavaly",CUSTOM_RANGE:"Egyedi dátumtartomány",NOT_SIGNED:"NINCS ALÁÍRVA",COMPLETE:"Befejezés",NOT_SIGNED_S:"Nincs aláírva",NOT_APPROVED:"Nincs jóváhagyva",NOT_ACCEPTED:"Nem lett elfogadva",DELEGATED:"Delegálva",NOT_DELEGATED:"Nincs delegálva",FORM_FILLED:"Űrlap kitöltve",NOT_FORM_FILLED:"Nincs kitöltve",ACKNOWLEDGED:"Nyugtázva",NOT_ACKNOWLEDGED:"Nincs nyugtázva",LAST_COMMENTED:"Legutóbbi kommentáló",GUEST:"VENDÉGSZÁMÍTÓGÉP",SENDER_UC:"FELADÓ",OWNER_UC:"TULAJDONOS",VIEWED_UC:"MEGTEKINTVE",NOT_VIEWED_UC:"NINCS MEGTEKINTVE",SIGN_IN:"Bejelentkezés",FILTER_TOOL_TIP:"Szűrő",SHARE_TOOL_TIP:"Fájl megosztása",COMMENT_TOOL_TIP:"Megjegyzések hozzáadása kiemeléssel, cetlikkel és jelölő eszközökkel",UPLOAD_FILE_TOOL_TIP:"Fájl feltöltése a Document Cloudba",CREATE_PDF_TOOL_TIP:"PDF készítése bármilyen formátumból",EXPORT_PDF_TOOL_TIP:"PDF-ek konvertálása Word, Excel, PowerPoint és más formátumokba",COMBINE_FILES_TOOL_TIP:"Fájlok kombinálása egyetlen PDF-fájlba",ORGANIZE_PAGES_TOOL_TIP:"Oldalak törlése, beszúrása, kivágása vagy elforgatása",SEND_FOR_REVIEW_TOOL_TIP:"Elküldés másoknak átnézésre és az eredmények nyomon követésére",SEND_FOR_SIGNATURE_TOOL_TIP:"Másoktól aláírások kérése és az eredmények követése",FILL_SIGN_TOOL_TIP:"Dokumentumok és űrlapok kitöltése és aláírása elektronikusan",CREATE_TEMPLATE_TOOL_TIP:"Újrahasználható sablon létrehozása dokumentumokhoz és űrlapokhoz",REMOVE_FROM_RECENT_TOOL_TIP:"Fájl eltávolítása a legutóbbiak listájáról",RENAME_TOOL_TIP:"Fájl átnevezése",MOVE_TOOL_TIP:"Fájl áthelyezése másik mappába",MOVE_FILES_TOOL_TIP:"Fájlok áthelyezése másik mappába",DOWNLOAD_TOOL_TIP:"Fájl letöltése",FORWARD_TOOL_TIP:"Fájl továbbítása másoknak",DELETE_TOOL_TIP:"Fájl végleges törlése",DELETE_FILES_TOOL_TIP:"Fájlok végleges törlése",HISTORY_TOOL_TIP:"Előzmények",UNSHARE_TOOL_TIP:"Fájl megosztásának leállítása",LIST_OF_OPENERS_TOOL_TIP:"Személyek listája, akik a fájlt megnyitották",LIST_OF_REVIEWERS_TOOL_TIP:"Személyek listája",LIST_OF_SIGNERS_TOOL_TIP:"Aláírók listája",SIGNATURE_ACTIVITY_TOOL_TIP:"Aláírási tevékenység",REMINDERS_TOOL_TIP:"Emlékeztetők",COPY_LINK_TOOL_TIP:"Hivatkozás másolása",PRINT_TOOL_TIP:"Fájl nyomtatása",EDIT_PDF_TOOL_TIP:"PDF-fájlok szövegeinek és képeinek szerkesztése",SEND_AND_TRACK_TOOL_TIP:"Dokumentumok küldése; megtekintések és letöltések követése",STAMP_TOOL_TIP:'Add stamps such as "approved" or "draft"',MEASURE_TOOL_TIP:"Mérhető az objektumok távolsága, területe és kerülete",CERTIFICATES_TOOL_TIP:"Dokumentumok digitális aláírása vagy tanúsítása és a hitelesség érvényesítése",REDACT_TOOL_TIP:"Érzékeny szöveg, grafikák vagy rejtett adat végleges törlése",PROTECT_TOOL_TIP:"Megakadályozható a PDF-ek tartalmának illetéktelen másolása, nyomtatása és szerkesztése",SEND_FOR_COMMENTS_TOOL_TIP:"Megjegyzések automatikus összegyűjtése az ellenőrzőktől egy PDF-be",OF:"összesen:",OPENED_S:"Megnyitva",SENT:"Elküldve",RECEIVED:"Fogadva",SHARED_FILE:"MEGOSZTOTT FÁJL",SHARED_FILES:"MEGOSZTOTT FÁJLOK",SIGN_AGREEMENT:"SZERZŐDÉS ALÁÍRÁSA",REVIEW_FILE:"FÁJL ÁTNÉZÉSE",SHARED:"MEGOSZTOTT",REVIEW:"ÁTNÉZÉS",SORT_BY:"RENDEZÉSI SZEMPONT:",NAME_S:"Név",SENT_RECIEVED_S:"Küldés/beérkezés dátuma",SENDER_S:"Küldő",STATUS_S:"Állapot",LAST_ACTIVITY_S:"Legutóbbi művelet dátuma",INITIATOR_S:"Tulajdonos",OWNER_S:"Tulajdonos",SAVE_LINK_IN_DC:"Hivatkozás mentése az Adobe felhőalapú tárhelyére.",REMOVE_LINK_FROM_DC:"Hivatkozás eltávolítása a Document Cloudból",ADDED_RECIPIENT_NO_COUNT:"FELVETT CÍMZETTEK",GENERIC_ARIA_LABEL_STRING:"<%= prefix %>. <%= suffix %>",SHARE_REMOVE:"Fájl eltávolítása",SHARE_EMAIL_REMOVE:"E-mail eltávolítása",ENTER_EMAIL_ADDR:"Adja meg a nevet vagy az e-mail-címet",ADD_REVIEWERS:"Személyek hozzáadása",ADD_RECIPIENTS:"Címzettek hozzáadása",REVIEWER_ADD:"Hozzáadás",ADDRESS_BOOK:"Címjegyzék",REVIEWERS_ADDED_SUCCESSFULLY_TOAST:"Új embereket hívott meg.",REVIEWER_ADDED_SUCCESSFULLY_TOAST:"Új személyt hívott meg.",REVIEWER_ADDED_FAILED_TOAST:"Nem sikerült embereket meghívnia. Kérjük, próbálja újra később.",RECIPIENTS_ADDED_SUCCESSFULLY_TOAST:"Meghívók elküldve.",RECIPIENT_ADDED_SUCCESSFULLY_TOAST:"Meghívó elküldve.",RECIPIENT_ADDED_FAILED_TOAST:"Emberek hozzáadása sikertelen, kérjük, próbálkozzon később.",COPIED_STRING:"Másolva",N_RECIPIENTS:"<%= num %> személy",N_RECIPIENT:"<%= num %> személy",LAST_VIEWED_DATE:"Legutóbbi megtekintés: <%= date %>",LAST_ACCESSED_ON:"Legutóbb megnyitva",LAST_ACCESSED:"Legutóbbi megnyitás",LAST_COMMENTED_ON:"Legutóbbi megjegyzés",FINISHED_REVIEWING:"Megjegyzések hozzáadása befejezve",COPY_REVIEW_LINK_T:"Fájl hivatkozásának másolása a vágólapra",DOWNLOAD_A_COPY_T:"Megosztott fájl másolatának letöltése",CLOSE_REVIEW_T:"Megosztott dokumentum bezárása és megjegyzések zárolása",UNSHARE_REVIEW_T:"Fájl megosztásának leállítása",DELETE_REVIEW_T:"Megosztott fájl törlése a Document Cloudból",REMOVE_ME_T:"Önmaga eltávolítása a megosztott fájlból",REPORT_ABUSE_T:"Sértő vagy káros tartalom jelentése az Adobe-nak",VIRGO_RHP_STATUS_VIEWED:"megtekintve",COPY_REVIEW_LINK_COACHMARK:"A hivatkozás másolása és megosztása.",ADD_REVIEWER_COACHMARK:"Itt további embereket adhat hozzá.",BUTTON:"Gomb",GET_MS_GRAPH_CONTACTS_MSG:"Jelentkezzen be Office fiókjába az Outlook névjegyek eléréséhez.",GET_MS_GRAPH_CONTACTS_MSG_1:"Jelentkezzen be fiókjával, ",GET_MS_GRAPH_CONTACTS_MSG_2:" hogy elérje a ",GET_MS_GRAPH_CONTACTS_MSG_3:" névjegyeket.",CONFIRM_UNSHARE_MSG_ONE_ITEM:"Ha visszavonja a fájl megosztását, az emberek többé nem férhetnek hozzá. Később ismét megoszthatja.",CONFIRM_REMOVE_TITLE:"Megosztott fájl törlése",CONFIRM_REMOVE_BUTTON:"Fájl törlése",CONFIRM_DELETE_MSG_ONE_ITEM_SHARED:"A megosztott fájl törlésével az a Document Cloudból is véglegesen törlődik. Ez nem vonható vissza.",NO_FILES_TITLE:"Nincsenek fájlok",NO_FILES_MESSAGE:"Nincsenek letölthető fájlok. Lehet, hogy a fájlok törölve lettek.",SHARE_INITIAL_SUBJECT:"Megosztott fájlok",DELETE_REVIEW_MESSAGE:"A megosztott fájl törlésével a fájl és az ahhoz tartozó minden megjegyzés az összes résztvevő számára véglegesen törlődik a Document Cloudból. Ez nem vonható vissza.",DUE_BY:"Határidő lejár:",OPEN_UNSHARED_OR_DELETED_FILE_ERROR_TITLE_RECEPIENT:"A megosztott fájl nem érhető el",OPEN_UNSHARED_OR_DELETED_FILE_ERROR_MSG_RECEPIENT:"Visszavonták a fájl megosztását vagy törölték. További információért vegye fel a kapcsolatot a tulajdonossal.",OPEN_UNSHARED_OR_DELETED_FILE_ERROR_BUTTON_RECEPIENT:"OK",CONFIRM_UNSHARE_TITLE:"Fájl megosztásának visszavonása",CONFIRM_UNSHARE_MSG:"Ha visszavonja a fájl megosztását, akkor a címzettek nem férhetnek hozzá.",CONFIRM_UNSHARE_BUTTON:"Megosztás visszavonása",CONFIRM_DELETE_FILE_TITLE:"Fájl törlése",CONFIRM_DELETE_FILE_MSG:'Biztosan törli a következőt: "<%= filename %>"?',CONFIRM_DELETE_FILE_BUTTON:"Törlés",CONFIRM_DELETE_SHARED_FILE_TITLE_NO_COPY_MODEL:"Megosztott fájl törlése",CONFIRM_DELETE_SHARED_FILE_MSG_NO_COPY_MODEL:"Ön és azok a személyek, akikkel megosztotta a fájlt, nem fognak hozzáférni a fájlhoz annak törlése után. A fájl végleg törlésre kerül, és ez a művelet nem visszavonható.",CONFIRM_DELETE_SHARED_FILE_BUTTON_NO_COPY_MODEL:"Törlés mindenképpen",CONFIRM_DELETE_SHARED_FILE_TITLE_COPY_MODEL:"Megosztott fájl törlése",CONFIRM_DELETE_SHARED_FILE_MSG_COPY_MODEL:"Ön és azok a személyek, akikkel megosztotta a fájlt, nem fognak hozzáférni a fájlhoz annak törlése után. A fájl végleg törlésre kerül, és ez a művelet nem visszavonható.",CONFIRM_DELETE_SHARED_FILE_BUTTON_COPY_MODEL:"Törlés mindenképpen",CONFIRM_DELETE_N_FILES_TITLE:"Fájlok törlése",CONFIRM_DELETE_N_FILES_MSG:"Egy vagy több kiválasztott fájl meg lett osztva. Ha törli ezeket a fájlokat, akkor sem Ön, sem a címzettek férhetnek hozzá azokhoz a továbbiakban.",CONFIRM_DELETE_N_FILES_BUTTON:"Törlés  mindenképpen",CONFIRM_UNSHARE_FAILURE_OWNER_TITLE:"Hiba megosztásának visszavonása",CONFIRM_UNSHARE_FAILURE_OWNER_MSG:"Ha folytatja a fájl megosztásának megszakításával, elvesznek a megjegyzések. Megszakíthatja a fájl megosztásának visszavonását, vagy később megpróbálhatja újra.",CONFIRM_UNSHARE_FAILURE_OWNER_BUTTON:"Megosztás visszavonása mindenképpen",DATE_MODIFIED_CAPS:"MÓDOSÍTÁS DÁTUMA",SAVE_COPY_TOOLTIP:"A fájl másolatának mentése",CREATE_LINK_SECURITY_INFO:"A hivatkozás birtokában bárki hozzáférhet a fájlhoz.",DELETED_STRING:"Törölve",BOOTSTRAP_FAIL_MSG:"Jelenleg nem jeleníthetők meg a fájllal kapcsolatos információk. Kérjük, próbálja újra később.",COPY_SHARED_LINK_FAILED_SHARING_RESTRICTION:"Nem lehet másolni a megosztott hivatkozást. Szervezete korlátozta a megosztást.",PARTIAL_RECIPIENTS_FAILED_SHARING_RESTRICTION_MY_ORG:"Néhány személyt nem lehet meghívni, mert szervezete korlátozta a megosztást.",PARTIAL_RECIPIENTS_FAILED_SHARING_RESTRICTION_RECIPIENT_ORG:"Néhány személyt nem lehet meghívni, mert szervezetük korlátozta a megosztást.",COPY_SHARED_LINK_FAILED_GENERIC:"Nem lehet létrehozni a megosztott hivatkozást. Kérjük, próbálja újra később.",PARTIAL_RECIPIENTS_FAILED_GENERIC:"Néhány személy meghívása sikertelen volt",UNOPENED:"Nem megnyitott",AV2_COPY_REVIEW_LINK:"Megosztott hivatkozás másolása",AV2_UNSHARE_REVIEW:"Fájl megosztásának visszavonása",AV2_REMOVE_ME:"Magam eltávolítása",AV2_REPORT_ABUSE:"Visszaélés bejelentése",AV2_SAVE_A_COPY:"Másolat mentése",AV2_CLOSE_REVIEW:"Megosztott dokumentum bezárása",AV2_N_RECIPIENTS:"<%= num %> személy",AV2_ADD_REVIEWERS:"Személyek hozzáadása",AV2_CANCEL_AGREEMENT:"Szerződés törlése",AV2_AUDIT_REPORT:"Vizsgálati jelentés",EXPORT_BUTTON:"Átalakítás formátuma",DROPDOWN_DOCX:"Microsoft Word (*.docx)",DROPDOWN_DOC:"Microsoft Word (*.doc)",DROPDOWN_PPTX:"Microsoft PowerPoint (*.pptx)",DROPDOWN_XLSX:"Microsoft Excel (*.xlsx)",DROPDOWN_RTF:"Rich Text Format (*.rtf)",DROPDOWN_JPEG:"JPEG (*.jpg)",DROPDOWN_TIFF:"TIFF (*.tiff)",DROPDOWN_PNG:"PNG (*.png)",AV2_SEND_FOR_SIGNATURE_PDF:"Elektronikus aláírások kérése",AV2_EDIT_PDF:"Szöveg és képek szerkesztése",AV2_COMMENT_PDF:"Megjegyzések hozzáadása",AV2_ORGANIZE_PDF:"Oldalak rendezése",AV2_REMOVE_FROM_RECENT:"Eltávolítás a legutóbbiak közül",AV2_EXPORT_PDF:"PDF exportálása",AV2_COMBINECONVERT_PDF:"Konvertálás PDF-re",AV2_CREATE_PDF:"PDF létrehozása",AV2_SEND_FOR_SIGNATURE_VIRGO_TOOLTIP:"Küldjön dokumentumot bárkinek, hogy gyorsan aláírhassa online.",AV2_EDIT_VIRGO_TOOLTIP:"Szöveg, képek, oldalak stb. módosítása vagy hozzáadása",AV2_COMMENT_VIRGO_TOOLTIP:"Öntapadó jegyzetek, kiemelések és egyéb megjegyzések hozzáadása",AV2_FILL_SIGN_FILE_VIRGO_TOOLTIP:"Űrlapok kitöltése, saját aláírás hozzáadása, vagy elküldés másoknak e-aláírásra",AV2_ORGANIZE_VIRGO_TOOLTIP:"Oldalak törlése, forgatása, kivonása, beszúrása vagy átrendezése",AV2_EXPORT_PDF_VIRGO_TOOLTIP:"PDF-ek konvertálása Microsoft Office-fájlokká, képekké és egyebekké",AV2_SHARE_VIRGO_TOOLTIP:"Küldjön el egy fájlt másoknak megjegyzés hozzáfűzésére vagy aláírásra",AV2_EXPORT_FILE_VIRGO_TOOLTIP:"PDF-ek konvertálása Microsoft Office-fájlokká, képekké és egyebekké",AV2_CREATE_PDF_TOOLTIP:"PDF-ek létrehozása képekből, Microsoft Office-fájlokból és más fájlokból",AV2_COMBINECONVERT_PDF_TOOLTIP:"Készítsen PDF-et gyakorlatilag bármilyen fájlból",AV2_USE_TEMPLATE:"Sablon használata",AV2_CREATE_TEMPLATE:"Sablon létrehozása",CREATE_LINK_ORG_SECURITY_INFO:"A hivatkozás birtokában az <%= ORGNAME %> vállalaton belül bárki hozzáférhet a fájlhoz.",CREATE_LINK_PRIV_SECURITY_INFO:"Csak a meghívott személyek férhetnek hozzá a fájlhoz."});