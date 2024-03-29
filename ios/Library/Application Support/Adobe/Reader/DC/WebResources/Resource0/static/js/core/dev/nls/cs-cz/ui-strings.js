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

define({ACTIONS:"Akce",ACTIONS_UC:"AKCE",ADDED:"Přidaný",ADD_ACCOUNT:"Přidat úložiště souborů",BACK:"Zpět",CLOSE:"Zavřít",CONTINUE:"Pokračovat",NEXT:"Další",EXTENSION:"(.<%- ext %>)",FILES:"Soubory",FILE_NAME:"Název souboru",FOLDER_NAME:"Název složky",LOCATION:"Umístění",MODIFIED:"Modifikovaný",LAST_ACTIVITY:"Poslední aktivita",NAME:"Název",OR:"nebo",PROPERTIES:"Vlastnosti",PROPERTIES_UC:"VLASTNOSTI",REMOVE:"Odstranit",REMOVE_SHARED:"Odebrat ze sdílených",REMOVE_SHARED_HINT:"Odebrat soubor ze seznamu sdílených",REMOVE_TODO_CARD:"Odebrat kartu Ke zpracování",SELECT_FILES:"Vybrat soubory",SELECT_FILE:"Vybrat soubor",DESELECT_FILES:"Odznačit soubory",DESELECT_FILE:"Odznačit soubor",DESELECT_ALL:"Odznačit vše",VIRGO_NON_SHARED:"Pouze vy",VIRGO_SHARED_FILE:"Sdíleno",VIRGO_EMPTY_DOCUMENT_CLOUD_TITLE:"V cloudovém úložišti Adobe zatím nejsou žádné soubory",VIRGO_EMPTY_FOLDER_SUBTITLE:"Soubory, které přidáte do cloudového úložiště Adobe, se zobrazí zde. Můžete s nimi pracovat a sdílet je pomocí webu, počítače či mobilního zařízení.",VIRGO_EMPTY_FOLDER_CC_SUBTITLE:"Soubory, které přidáte do služby Creative Cloud, se zobrazí zde. Můžete s nimi pracovat a sdílet je pomocí webu, počítače či mobilního zařízení.",VIRGO_EMPTY_SUB_FOLDER_SUBTITLE:"Zatím zde nejsou žádné soubory.",VIRGO_EMPTY_FOLDER_UPLOAD_ACTION:"Odeslat soubory",VIRGO_EMPTY_FOLDER_NEW_FOLDER_ACTION:"Vytvořit novou složku",REVERSE_SORT_ORDER:"Obrátit pořadí řazení",VIRGO_EMPTY_CREATIVE_CLOUD_TITLE:"Ve službě Creative Cloud zatím nejsou žádné soubory",VIRGO_EMPTY_FOLDER_TITLE:"Žádné soubory v této složce",VIRGO_EMPTY_MY_COMPUTER:"Při otevření souborů z počítače zde uvidíte jejich složky.",VIRGO_NON_SIGNED_IN_DC_TITLE:"Přihlaste se pro přístup k souborům v cloudovém úložišti Adobe.",VIRGO_NON_SIGNED_IN_DC_SUBTITLEE:"Upravujte, spravujte a sdílejte soubory na internetu, počítačích i mobilních zařízeních.",VIRGO_NON_SIGNED_IN_CC_TITLE:"Přihlaste se pro získání přístupu k souborům ve službě Creative Cloud.",VIRGO_NON_SIGNED_IN_CC_SUBTITLEE:"Ukládejte, spravujte a sdílejte soubory synchronizované mezi knihovnami Creative Cloud na počítačích, v knihovnách a mobilních zařízeních.",VIRGO_NON_SIGNED_IN_OTHERS_TITLE:"Přihlaste se pro přístup k souborům.",VIRGO_NON_SIGNED_IN_ACTION:"Přihlásit se",VIRGO_NO_INTERNET_CONNECTION_TITLE:"Nejste připojeni k internetu.",VIRGO_NO_INTERNET_CONNECTION_DC_SUBTITLE:"Pro přístup k souborům v cloudovém úložišti Adobe se připojte k internetu a zkuste to znovu.",VIRGO_NO_INTERNET_CONNECTION_CC_SUBTITLE:"Pro přístup k souborům ve službě Creative Cloud se připojte k internetu a zkuste to znovu.",VIRGO_NO_INTERNET_CONNECTION_OTHERS_SUBTITLE:"Pro přístup ke svým souborům se připojte k internetu a zkuste to znovu.",VIRGO_NO_INTERNET_CONNECTION_CONNECTORS_SUBTITLE:"Pro přístup ke sdíleným souborům se připojte k internetu a zkuste to znovu.",SIZE:"Velikost",SELECT_ALL:"Vybrat vše",TOTAL_FILES:"Celkem souborů",VIRGO_NAME:"NÁZEV",VIRGO_HDR_SHARE:"SDÍLENÍ",VIRGO_SIZE:"VELIKOST",VIRGO_TYPE:"TYP",VIRGO_MODIFIED:"UPRAVENO",VIRGO_CREATED:"PŘIDÁNO",VIRGO_VIEWED:"ZOBRAZENO",VIRGO_OPENED:"OTEVŘENO",SORTED_BY:"SEŘAZENO PODLE",N_ITEMS_CLICK_TO_VIEW:"<%= num %> položek. Náhled zobrazíte kliknutím.",CREATED_DATE:"Přidané datum",MODIFIED_DATE:"Datum změny",VIEWED_DATE:"Datum zobrazení",OPENED_DATE:"Otevřeno dne",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Včera",DATE_MM_DD_YYYY:"<%= month %>/<%= day %>/<%= year %>",DATE_MMM_DD:"<%= DD %>. <%= MMM %>",DATE_MMM_DD_YYYY:"<%= DD %>. <%= MMM %>. <%= YYYY %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",DATETYPE_AND_TIME:"<%= dateType %> <%= date %>",YYYY:"RRRR",AM:"AM",PM:"PM",HH:"H",HH_MM_SEPARATOR:":",MM:"M",DD:"D",ANIMATION:"Animace",AUDIO:"Zvuk",CALENDAR:"  Kalendář",CASCADING_STYLE_SHEET:"Kaskádový styl",CERTIFICATE:"Certifikát",FONT:"Písmo",IMAGE:"Obraz",PLAIN_TEXT:"Prostý text",PRESENTATION:"Prezentace",RICH_TEXT:"Text ve formátu RTF",SPREADSHEET:"Tabulka",STYLE_SHEET:"Styl",TEXT:"Text",UNKNOWN:"Neznámý",VIDEO:"Video",VIRGO_ANY_TYPE:"Jakýkoli typ",VIRGO_ANY_TIME:"Kdykoli",VIRGO_ANY_FILE_NAME:"Jakýkoli název",VIRGO_RESET_FILTER:"Obnovit",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:".",THOUSANDS_SEPARATOR:",",FILE_NAME_CONTAINS:"Název souboru obsahuje",FILE_TYPE_IS:"Typ souboru je",FILE_CONTENT:"Soubor obsahuje",DATE_LAST_MODIFIED:"Datum poslední změny je",DATE_LAST_VIEWED:"Datum posledního zobrazení je",DATE_ADDED:"Přidané datum je",FILE_ADDED_BY:"Soubor přidal/a",MIN_SIZE:"Min. velikost",MAX_SIZE:"Max. velikost",VIRGO_FILTER:"Filtr",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Vytvořit PDF",EXPORT_PDF:"Exportovat PDF",COMBINECONVERT_PDF:"Převod PDF",COMBINE_PDF:"Kombinovat PDF",FILL_SIGN:"Vyplnit a podepsat",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Dnes",YESTERDAY:"Včera",WITHIN_LAST_WEEK:"Během posledního týdne",WITHIN_LAST_MONTH:"Během posledního měsíce",ONE_TO_TWO_MONTHS_AGO:"Před 1-2 měsíci",TWO_TO_THREE_MONTHS_AGO:"Před 2-3 měsíci",THREE_TO_FOUR_MONTHS_AGO:"Před 3-4 měsíci",FOUR_TO_FIVE_MONTHS_AGO:"Před 4-5 měsíci",FIVE_TO_SIX_MONTHS_AGO:"Před 5-6 měsíci",SIX_TO_TWELVE_MONTHS_AGO:"Před 6-12 měsíci",MORE_THAN_ONE_YEAR_AGO:"Před více než rokem",CUSTOM:"Vlastní rozmezí",VIRGO_VIRGO_PAST_HOUR:"Uplynulá hodina",VIRGO_Past_24_HOUR:"Uplynulých 24 hodin",VIRGO_PAST_WEEK:"Uplynulý týden",VIRGO_PAST_MONTH:"Uplynulý měsíc",VIRGO_PAST_YEAR:"Uplynulý rok",VIRGO_CUSTOM_RANGE:"Vlastní rozmezí...",STARRED_FILE:"Tento soubor je označen hvězdičkou",STAR_FILE:"Označit tento soubor hvězdičkou",UNSTAR_FILE:"Odebrat označení souboru hvězdičkou",STARRING_FAILED_TOAST:"Označení hvězdičkou se nezdařilo",UNSTARRING_FAILED_TOAST:"Odebrání označení hvězdičkou se nezdařilo",TRY_LATER_TOAST:"Zkuste to za chvíli",OK:"OK",CANCEL:"Zrušit",DIALOG:"Dialog",TO_ACTIVATE_PRESS_SPACE_BAR:"Aktivaci provedete stisknutím mezerníku",CONFIRM_DELETE_TITLE:"Odstranit",CONFIRM_DELETE_MSG_ONE_ITEM:"Opravdu chcete odstranit tuto položku?",CONFIRM_DELETE_MSG_N_ITEMS:"Opravdu chcete odstranit těchto <%= numItems %> položek?",DOWNLOAD:"Stáhnout",DOWNLOAD_FILE:"Stáhnout soubor",DOWNLOAD_FILES:"Stáhnout soubory",DOWNLOAD_FOLDER:"Stáhnout složku",RENAME:"Přejmenovat",RENAME_ELLIPSIS:"Přejmenovat...",RENAME_FILE:"Přejmenovat soubor",RENAME_FOLDER:"Přejmenovat složku",MOVE_FILE:"Přesunout soubor",MOVE_FILES:"Přesunout soubory",MOVE_FOLDER:"Přesunout složku do jiné složky",MOVE_FOLDERS:"Přesunout složky do jiné složky",MOVE_FILE_AND_FOLDER:"Přesunout soubor a složku do jiné složky",MOVE_FILES_AND_FOLDER:"Přesunout soubory a složky do jiné složky",MOVE_FILE_AND_FOLDERS:"Přesunout soubor a složky do jiné složky",MOVE_FILES_AND_FOLDERS:"Přesunout soubory a složky do jiné složky",SHARE:"Sdílet",SHARE_ELLIPSIS:"Sdílet...",SHARE_FILE:"Sdílet soubor",SHARE_FILES:"Sdílet soubory",SEND_FILE:"Odeslat a sledovat soubor",SEND_FILES:"Odeslat a sledovat soubory",DELETE:"Odstranit",SHARED_BY_SBO_CB:"Sdíleno uživatelem ",SHARE_FILE_PDF:"Sdílet soubor",ATTACH_TO_EMAIL_PDF:"Přiložit k e-mailu",SEND_FOR_REVIEW_PDF:"Odeslat ke komentování",SEND_FOR_SIGNATURE_PDF:"Adobe Acrobat Sign",EDIT_PDF:"Upravit PDF",COMMENT_PDF:"Poznámka",ORGANIZE_PDF:"Uspořádání dokumentu PDF",FILL_SIGN_PDF:"Vyplnění a podepsání",SHARE_FILE_TOOLTIP:"Odesílejte dokumenty, sledujte počet zobrazení a stahování",SHARE_FILE_VIRGO_TOOLTIP:"Sdílejte soubory k zobrazení nebo přidání poznámek a sledujte reakce",SHARE_REVIEW_FILE_VIRGO_TOOLTIP:"Pozvěte ostatní ke komentování sdíleného souboru a sledujte reakce",SIGNATURE_FILE_VIRGO_TOOLTIP:"Odešlete soubory PDF ostatním k podpisu online, aniž byste potřebovali aplikaci Acrobat.",EXPORT_FILE_VIRGO_TOOLTIP:"Převádějte soubory PDF do formátů Microsoft Word, Excel, PowerPoint a dalších",COMMENT_FILE_VIRGO_TOOLTIP:"Přidávejte poznámky pomocí zvýraznění, lístků s poznámkami a značkovacích nástrojů",FILL_SIGN_FILE_VIRGO_TOOLTIP:"Vyplňujte a podepisujte dokumenty elektronicky",FILL_SIGN_FILE_VIRGO_TOOLTIP_NEW:"Vyplňte a podepište formuláře nebo je dejte podepsat ostatním",ORGANIZE_FILE_VIRGO_TOOLTIP:"Odstranění, vložení, vyjmutí nebo otočení stránek",RENAME_FILE_VIRGO_TOOLTIP:"Přejmenovat soubor",MOVE_FILE_VIRGO_TOOLTIP:"Přesunout soubor do jiné složky",DOWNLOAD_FILE_VIRGO_TOOLTIP:"Stáhnout soubor",DELETE_FILE_VIRGO_TOOLTIP:"Trvale odstranit soubor",DELETE_FILES_VIRGO_TOOLTIP:"Trvale odstranit soubory",DELETE_FOLDER_VIRGO_TOOLTIP:"Trvale odstranit složku",DELETE_FOLDERS_VIRGO_TOOLTIP:"Trvale odstranit složky",DELETE_FILE_FOLDER_VIRGO_TOOLTIP:"Trvale odstranit soubor a složku",DELETE_FILE_FOLDERS_VIRGO_TOOLTIP:"Trvale odstranit soubor a složky",DELETE_FILES_FOLDER_VIRGO_TOOLTIP:"Trvale odstranit soubory a složku",DELETE_FILES_FOLDERS_VIRGO_TOOLTIP:"Trvale odstranit soubory a složky",EDIT_FILE_VIRGO_TOOLTIP:"Úprava textů a obrazů v souboru PDF",SEND_FOR_REVIEW:"Automaticky sbírejte poznámky od recenzentů do jediného PDF",SEND_FOR_SIGNATURE:"Získejte podpisy od ostatních a sledujte výsledky",EDIT:"Úprava textů a obrazů v souborech PDF",COMMENT:"Přidávejte poznámky pomocí zvýraznění, lístků s poznámkami a značkovacích nástrojů",FILL_SIGN_FILE:"Vyplňujte a podepisujte dokumenty a formuláře elektronicky",ORGANIZE:"Odstranění, vložení, vyjmutí nebo otočení stránek",ATTACH_TO_EMAIL_TOOLTIP:"Odeslat soubor jako přílohu e-mailu",EXPORT_PDF_TOOLTIP:"Převádějte soubory PDF do formátů Microsoft Word, Excel, PowerPoint a dalších",CREATE_PDF_TOOLTIP:"Vytvořit PDF z libovolného formátu",COMBINECONVERT_PDF_TOOLTIP:"Převádějte  PDF na formát Word, Powerpoint, Excel, nebo z těchto nativních formátů vytvářejte PDF",RHP_ACTIVITY_TOOLTIP:"Zobrazit všechnu aktivitu pro tuto smlouvu",RHP_AUDIT_REPORT_TOOLTIP:"Stáhnout zprávu o auditu pro tuto smlouvu (otevře dokument PDF v nové kartě)",RHP_CANCEL_TOOLTIP:"Zrušit tuto smlouvu",RHP_STATUS_TOOLTIP:"Zobrazit seznam příjemců pro tuto smlouvu",RHP_REMINDER_TOOLTIP:"Odeslat připomenutí",FOLDER_PATH:"SLOŽKA",MODIFIED_PROPERTY:"Modifikovaný",HOME:"Domovská stránka",ITEMS_SELECTED:"Vybrané",ENTER_KEYWORD:"Hledání",SEARCH:"Hledání",SHARED_S:"Sdíleno",PREVIEW_NOT_AVAILABLE:"Náhled typu souboru nelze zobrazit",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Stáhněte si</a> soubor, abyste ho mohli prohlížet.",RENAME_NAME_IN_USE:'<%= existingType %> s názvem "<%= name %>" již na tomto místě existuje. Zvolte jiný název <%= renamedType %>.',RENAME_ILLEGAL_NAME:"Název obsahuje neplatné znaky, nebo příliš mnoho znaků. Zvolte jiný název <%= renamedType %>.",MOVE:"Přesunout",MOVE_FILE_TO:"Přesunout soubor do...",MOVE_FILES_TO:"Přesunout soubory do...",MOVE_FOLDER_TO:"Přesunout složku do...",MOVE_FOLDERS_TO:"Přesunout složky do...",MOVE_FILE_AND_FOLDER_TO:"Přesunout soubor a složku do...",MOVE_FILES_AND_FOLDER_TO:"Přesunout soubory a složku do...",MOVE_FILE_AND_FOLDERS_TO:"Přesunout soubor a složky do...",MOVE_FILES_AND_FOLDERS_TO:"Přesunout soubory a složky do...",DUPLICATE_NAME_TITLE:"Kopírovat <%= type %> s názvem",DUPLICATE_NAME_PROMPT:'<%= type %> s názvem "<%= name %>" již na tomto místě existuje. Co chcete dělat?',DUPLICATE_NAME_REPLACE_EXISTING:"Nahradit stávající <%= type %>",DUPLICATE_NAME_RENAME_UPLOADED:"Přejmenovat nahraný <%= type %>",DUPLICATE_NAME_DELETE_MOVED:"Odstranit přesunutý <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"Přejmenovat přesunutý <%= type %>",FILE_INITIAL_CAP:"Soubor",FILE:"soubor",FOLDER_INITIAL_CAP:"Složka",FOLDER:"složka",REPORT_ABUSE:"Oznámit zneužití",REPORT_ABUSE_TITLE:"Oznámit zneužití",REPORT_ABUSE_CONTENT_LABEL:"Obsah",REPORT_ABUSE_TITLE_LABEL:"Název",REPORT_ABUSE_DEFAMATION_LABEL:"Pomluva",REPORT_ABUSE_OFFENSIVE_LABEL:"Urážlivý obsah",REPORT_ABUSE_EXPLICIT_LABEL:"Sexuálně explicitní obsah",REPORT_ABUSE_TRADEMARK_LABEL:"Porušení obchodní známky",REPORT_ABUSE_RACIST_LABEL:"Rasistický nebo nenávistný obsah",REPORT_ABUSE_OTHER_LABEL:"Jiné",REPORT_ABUSE_BLURB:"Máte-li pocit, že tento obsah porušuje <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_cz' target='_blank'>Podmínky použití</a> společnosti Adobe, můžete jej oznámit vyplněním tohoto stručného formuláře.",REPORT_ABUSE_EMAIL_PROMPT:"Váš e-mail",REPORT_ABUSE_NAME_PROMPT:"Vaše jméno",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Co oznamujete?",REPORT_ABUSE_REASON_PROMPT:"Proč oznamujete tento obsah?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Zadejte popis svých obav.",REPORT_ABUSE_COPYRIGHT_REPORT:"Chcete-li oznámit porušení autorských práv, postupujte podle Části 17 v <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_cz' target='_blank'>Podmínkách použití</a>.",REPORT_ABUSE_REPORT_BUTTON:"Oznámit zneužití",REPORT_ABUSE_EMAIL_ERROR:"Musíte zadat platnou e-mailovou adresu.",LANGUAGE_CHANGE:"<%= lang %> (Změna)",CHOOSE_LANGUAGE:"Vyberte svůj jazyk",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Dochází místo pro uložení souborů",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Aktuálně využíváte <%= using %> svého přidělení <%= allotment %> a brzy budete mít nedostatek místa.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Překročeno množství uložených souborů",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Celkové množství uložených dat <%= using %> přesahuje maximální <%= allotment %> umožněné novým předplatným.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"Odeslaný soubor nelze uložit, protože by překročil vaši přidělenou kvótu <%= allotment %>.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Všechny stávající soubory lze zobrazit a stáhnout, pro uložení dalších souborů je však nutné účet aktualizovat.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Chcete-li uvolnit další místo, musíte odstranit některé soubory.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Aktualizujte svůj účet, a získejte větší úložiště a další funkce.",LEARN_MORE:"Další informace",UPGRADE:"Aktualizovat",ERROR:"Chyba",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Překročeno maximum otevřených souborů",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Najednou lze otevřít lze nejvýše 50 souborů.",HTTP_STATUS_DEFAULT_TITLE:"Požadavek nelze dokončit",HTTP_STATUS_DEFAULT_MSG:"Při pokusu dokončit požadavek došlo k chybě a požadavek nelze dokončit.",HTTP_STATUS_DEFAULT_MSG_CEF:"Při připojování ke službě došlo k chybě. Zkuste to později.",HTTP_STATUS_400_TITLE:"Požadavek nelze dokončit (400)",HTTP_STATUS_400_TITLE_CEF:"Požadavek nelze dokončit",HTTP_STATUS_400_MSG:"Při pokusu dokončit požadavek došlo k chybě a požadavek nelze dokončit.",HTTP_STATUS_401_TITLE:"Byli jste odhlášeni (401)",HTTP_STATUS_401_TITLE_CEF:"Byli jste odhlášeni",HTTP_STATUS_401_MSG:'Vaše relace vypršela a kvůli nečinnosti jste byli odhlášeni. Kliknutím na níže uvedenou možnost "Přihlásit" se znovu přihlásíte.',HTTP_STATUS_401_MSG_CEF:"Došlo k chybě. Zkuste se odhlásit a znovu přihlásit.",HTTP_STATUS_403_QUOTA_TITLE:"Překročena kvóta úložiště (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Překročena kvóta úložiště",HTTP_STATUS_403_QUOTA_MSG:"Soubor nelze nahrát, překročil by kvótu úložiště. Můžete odstranit některé stávající soubory, a získat tak více místa.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Složku s obsahem nelze odstranit (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Složku s obsahem nelze odstranit",HTTP_STATUS_403_DEL_FOLDER_MSG:"Odstranit lze pouze prázdné složky. Před odstraněním složky odstraňte veškerý obsah.",HTTP_STATUS_403_NO_SHARING_TITLE:"Nepovolené sdílení (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Nepovolené sdílení",HTTP_STATUS_403_NO_SHARING_MSG:"Soubor nelze sdílet, protože jde o zvukový soubor nebo soubor videa.",HTTP_STATUS_403_VIRUS_TITLE:"Zjištěn virus (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Zjištěn virus",HTTP_STATUS_403_VIRUS_MSG:"Soubor nelze nahrát, protože obsahuje virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"Dešifrování selhalo (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"Dešifrování selhalo",HTTP_STATUS_403_ENCRYPTION_MSG:"Při přístupu k vašemu obsahu došlo k chybě. Dešifrování selhalo. Obraťte se na správce IT.",HTTP_STATUS_403_TITLE:"Zakázáno (403)",HTTP_STATUS_403_TITLE_CEF:"Zakázáno",HTTP_STATUS_403_MSG:"Operaci nelze dokončit. Zkuste to později.",HTTP_STATUS_404_TITLE:"Soubor nebyl nalezen (404)",HTTP_STATUS_404_TITLE_CEF:"Soubor nebyl nalezen",HTTP_STATUS_404_MSG:"Soubor, k němuž chcete získat přístup, nelze nalézt. Mohl být odstraněn nebo přesunut v jiné relaci.",HTTP_STATUS_405_TITLE:"Nepovolená metoda (405)",HTTP_STATUS_405_TITLE_CEF:"Nepovolená metoda",HTTP_STATUS_405_MSG:"Požadavek nelze dokončit, protože metoda není povolena.",HTTP_STATUS_406_TITLE:"Nekompatibilní prohlížeč",HTTP_STATUS_406_TITLE_CEF:"Nepodporovaný typ ",HTTP_STATUS_406_MSG:"Váš prohlížeč není schopen komunikovat s tímto webem. Zkuste jiný prohlížeč. (Chyba 406: Nepodporovaný typ).",HTTP_STATUS_415_TITLE:"Nepodporovaný typ médií (415)",HTTP_STATUS_415_TITLE_CEF:"Nepodporovaný typ médií",HTTP_STATUS_415_MSG:"Požadavek nelze dokončit, protože zadaný typ médií není povolen.",HTTP_STATUS_500_TITLE:"Interní chyba serveru (500)",HTTP_STATUS_500_TITLE_CEF:"Interní chyba serveru",HTTP_STATUS_500_MSG:"Požadavek nelze dokončit kvůli vnitřní chybě serveru.",HTTP_STATUS_501_TITLE:"Neimplementovaný požadavek (501)",HTTP_STATUS_501_TITLE_CEF:"Neimplementovaný požadavek",HTTP_STATUS_501_MSG:"Požadavek, který se snažíte zadat, ještě není implementován serverem.",HTTP_STATUS_503_TITLE:"Aktuálně nedostupný server (503)",HTTP_STATUS_503_TITLE_CEF:"Aktuálně nedostupný server",HTTP_STATUS_503_MSG:"K serveru se nelze připojit, je zřejmě vypnutý. Zkuste to později.",DOWNLOAD_FORM_TITLE:"Soubor formuláře",DOWNLOAD_FORM_MESSAGE:"Soubor formuláře lze převést do PDF, aby ho bylo možné stáhnout.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Váš výběr obsahuje soubory formulářů, které nejsou k dispozici ke stažení. Tyto soubory budou vyřazeny. PDF verze lze stáhnout výběrem jednotlivého souboru formuláře ke stažení.",DOWNLOAD_FORMS_MESSAGE:"Soubory formulářů nejsou k dispozici ke stažení. PDF verze lze stáhnout výběrem jednotlivého souboru formuláře ke stažení.",SETTINGS:"Nastavení",DONE:"Hotovo",FILE_LISTS:"SOUBORY",FILE_LISTS_SEARCH:"Cloudové úložiště Adobe",SHARED_DOCUMENTS:"Jiné úložiště souborů",SIGN_SEARCH:"DOHODY",ENTERPRISE_SIGN_SEARCH:"Dohody",EDIT_ACCOUNTS:"Upravit účty",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Odstranit účet",ACROBAT_DOT_COM_FILES:"Cloudové úložiště Adobe",ACROBAT_DOT_COM_ALL_FILES:"Vaše soubory",DOWNLOAD_ALL:"Stáhnout vše",NOTIFICATION_UPLOADING:"Probíhá nahrávání...",NOTIFICATION_CONVERTING:"Převádění...",NOTIFICATION_CONVERSION_FAILURE:"Chyba převodu",NOTIFICATION_DOWNLOAD_FAILURE:"Chyba stahování",READY:"Hotovo",NOTIFICATION_WAITING:"Čekající...",NOTIFICATION_DOWNLOADING:"Stahování...",NOTIFICATION_PROCESSING:"Zpracování...",NOTIFICATION_DOWNLOAD_ERROR:"Při stahování tohoto souboru došlo k chybě.",NOTIFICATION_RETRY:"Zkusit znovu",YES:"Ano",NO:"Ne",REPLACE_EXISTING_FILE_TITLE:"Nahradit stávající soubor",REPLACE_EXISTING_FILE_MSG:"Soubor s tímto názvem již existuje. Chcete jej nahradit?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Nahradit stávající soubor. Ano",OPEN:"Otevřít",OPEN_FILE:"Otevřít soubor",OPEN_FILES:"Otevřít soubory",OPEN_FOLDER:"Otevřít složku",SAVE_AS:"Uložit jako",SAVE_AS_FILE:"Uložit jako soubor",SAVE_AS_FILES:"Uložit jako soubor ZIP",SAVED:"Uloženo",SAVE:"Uložit",SHOW_IN_FOLDER:"Zobrazit ve složce",SEND:"Poslat",CONVERT_TO_PDF:"Převést do PDF",COMBINE:"Zkombinovat",BROWSE_FOLDER:"Procházet...",CHOOSE_DIFFERENT_FOLDER:"Zvolte jinou složku...",ATTACH_TO_EMAIL:"Přiložit k e-mailu",SEND_AND_TRACK:"Odeslat a sledovat",PRINT:"Tisknout",PUBLIC_ICON_TOOLTIP:"Soubor sdílený ve službě Adobe Send & Track",RNA_VERSION_DIALOG_TITLE:"Vyskytla se chyba",RNA_VERSION_DIALOG_CONTENT:"Funkce v této oblasti se připojují ke službě Adobe Document Cloud a je nutné je aktualizovat, aby s ní zůstaly kompatibilní. Chcete-li provést aktualizaci na nejnovější verzi, zvolte možnost Zkontrolovat aktualizace z nabídky Nápověda nebo kliknutím na odkaz níže pokračujte v práci ve webovém prohlížeči.",RNA_VERSION_DIALOG_LINK_TITLE:"Přejít na službu Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_cz",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_cz",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_cz",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_cz",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_cz",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_cz",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_cz",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_cz",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_cz",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_cz",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_cz",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_cz",SERVER_OUTAGE_DIALOG_TITLE:"Vyskytla se chyba",SERVER_OUTAGE_DIALOG_CONTENT:"Požadovaná služba je dočasně nedostupná.  Zkuste to znovu později.",FROM:"Od",TO:"Do",GO:"Přejít",JANUARY:"LEDEN",FEBRUARY:"ÚNOR",MARCH:"BŘEZEN",APRIL:"DUBEN",MAY:"KVĚTEN",JUNE:"ČERVEN",JULY:"ČERVENEC",AUGUST:"SRPEN",SEPTEMBER:"ZÁŘÍ",OCTOBER:"ŘÍJEN",NOVEMBER:"LISTOPAD",DECEMBER:"PROSINEC",JANUARY_S:"Leden",FEBRUARY_S:"Únor",MARCH_S:"Březen",APRIL_S:"Duben",MAY_S:"Květen",JUNE_S:"Červen",JULY_S:"Červenec",AUGUST_S:"Srpen",SEPTEMBER_S:"Září",OCTOBER_S:"Říjen",NOVEMBER_S:"Listopad",DECEMBER_S:"Prosinec",MONTH_1:"Led",MONTH_2:"Úno",MONTH_3:"Bře",MONTH_4:"Dub",MONTH_5:"Kvě",MONTH_6:"Čvn",MONTH_7:"Čvc",MONTH_8:"Srp",MONTH_9:"Zář",MONTH_10:"Říj",MONTH_11:"Lis",MONTH_12:"Pro",SUNDAY:"NEDĚLE",MONDAY:"PONDĚLÍ",TUESDAY:"ÚTERÝ",WEDNESDAY:"STŘEDA",THURSDAY:"ČTVRTEK",FRIDAY:"PÁTEK",SATURDAY:"SOBOTA",INVALID_DATE:"Neplatné datum",INVALID_DATE_RANGE:"Neplatné rozmezí dat",PREVIOUS_MONTH:"Předcházející měsíc",NEXT_MONTH:"Další měsíc",SUNDAY_SHORT:"NE",MONDAY_SHORT:"PO",TUESDAY_SHORT:"ÚT",WEDNESDAY_SHORT:"ST",THURSDAY_SHORT:"ČT",FRIDAY_SHORT:"PÁ",SATURDAY_SHORT:"SO",MONTH_YEAR:"<%= month %> <%= year %>",MONTH_S:"MM",DAY_S:"DD",YEAR_S:"RRRR",SUNDAY_S:"Neděle",MONDAY_S:"Pondělí",TUESDAY_S:"Úterý",WEDNESDAY_S:"Středa",THURSDAY_S:"Čtvrtek",FRIDAY_S:"Pátek",SATURDAY_S:"Sobota",UNSHARE:"Zrušit sdílení",UNSHARED_STRING:"Nesdíleno",UNSHARE_FILE:"Zrušit sdílení souboru",DELETE_SHARED_FILE:"Odstranit sdílený soubor",HISTORY:"Historie",FORWARD:"Přeposlat",COPYLINK:"Zkopírovat sdílený odkaz",SAVE_A_COPY:"Uložit kopii",RHP:"RHP",SIGN:"Podepsat",AGREEMENT:"Dohoda",VIEW_SIGN:"Zobrazit a podepsat",VIEW_SIGN_LABEL:"Zobrazit a podepsat tuto smlouvu",APRROVE:"Schválit",VIEW_APRROVE:"Zobrazit a schválit",VIEW_APRROVE_LABEL:"Zobrazit a schválit tuto smlouvu",DELEGATE:"Delegovat",VIEW_DELEGATE:"Zobrazit a delegovat",VIEW_DELEGATE_LABEL:"Zobrazit a delegovat tuto smlouvu",ACKNOWLEDGE:"Potvrdit",VIEW_ACKNOWLEDGE:"Zobrazit a potvrdit",VIEW_ACKNOWLEDGE_LABEL:"Zobrazit a potvrdit tuto smlouvu",ACCEPT:"Přijmout",VIEW_ACCEPT:"Zobrazit a přijmout",VIEW_ACCEPT_LABEL:"Zobrazit a přijmout tuto smlouvu",FILL_FORM:"Vyplnit formulář",VIEW_FILL_FORM:"Zobrazit a vyplnit formulář",VIEW_FILL_FORM_LABEL:"Zobrazit a vyplnit tuto smlouvu",DUE:"Termín",CREATED:"Vytvořen",DRAFT:"Návrh",REPORT_ABUSE_TOOLTIP:"Nahlásit společnosti Adobe urážlivý nebo škodlivý obsah",DOWNLOAD_FILE_TOOLTIP:"Stáhnout soubor",COPY_SHARED_FILE_TOOLTIP:"Zkopírovat odkaz na sdílený soubordsd",SAVE_LINK_IN_DC_TOOLTIP:"Přidat odkaz na soubor do cloudového úložiště Adobe",REMOVE_LINK_FROM_DC_TOOLTIP:"Odebrat odkaz na soubor ze služby Document Cloud",DELETE_PARCEL_TOOLTIP:"Odstranit sdílený soubor ze služby Document Cloud",UNSHARE_FILES_TOOLTIP:"Přestat sdílet soubory s ostatními",UNSHARE_FILE_TOOLTIP:"Přestat soubor sdílet s ostatními",ACTIVITY_TOOLTIP:"Prohlédnout aktivitu ve sdíleném souboru",WAITING_FOR_YOU:"Čeká se na vás",SIGNED:"Podepsáno",COMPLETED:"Dokončené",WAITING:"Čeká se",CANCELLED:"Zrušené",EXPIRED:"Prošlé",APPROVED:"Schváleno",DELIVERED:"Doručeno",ACCEPTED:"Přijato",FORM_FILLED:"Formulář je vyplněn",CC:"Na kopii",DRAFT:"Návrh",SIGNED_C:"PODEPSÁNO",INITIATOR:"VLASTNÍK",REPLACE:"Nahradit",ACTIVITY:"Aktivita",REMINDERS:"Připomenutí",AUDIT_REPORT:"Zpráva o auditu",ADD:"Přidat",DIMMED:"Tlumeně",CANCEL:"Zrušit",SEE_ALL:"Zobrazit všechny",EDIT:"Úprava textů a obrazů v souborech PDF",SEE_LESS:"Zobrazit méně",ANONYMOUS:"Anonymní",REMIND_CAPTION_NEXT:"Odeslat připomenutí následujícímu autorovi podpisu:",REMIND_CAPTION_ALL:"Připomenout všem čekajícím podepisujícím",REMIND_PLACEHOLDER_NOTE_INITIAL:"Dokument ",REMIND_PLACEHOLDER_NOTE_LATER:"čeká na váš podpis.",REMIND_PLACEHOLDER_NOTE_GENERIC:"Přidejte poznámky a dokončete tento dokument.",REMINDER_SENT_SUCCESSFUL:"Vaše připomínka byla odeslána.",REMINDER_SENT_UNSUCCESUL:"Připomínku se nepodařilo odeslat. Zkuste to znovu",CANCEL_AGREEMENT:"Zrušení smlouvy",CANCEL_AGREEMENT_PLACEHOLDER:"Zadejte důvod zrušení této smlouvy. (Tento komentář obdrží všichni upozorňovaní.)",CANCEL_NOTIFY:"Upozornit účastníky pomocí e-mailu",CANCEL_SUCCESSFUL:"Váš dokument byl zrušen.",PROTECTED_DATA:"Chráněná data",ES_SESSION_SIGNIN_PROMPT:"Za účelem lepší ochrany vašich podepsaných smluv se budete muset znovu přihlásit.",COPY_REVIEW_LINK:"Zkopírovat sdílený odkaz",DOWNLOAD_A_COPY:"Stáhnout kopii",CLOSE_REVIEW:"Zavřít sdílený dokument",UNSHARE_REVIEW:"Zrušit sdílení souboru",DELETE_REVIEW:"Odstranit sdílený soubor",REMOVE_ME:"Odebrat mě",REMOVE_FROM_RECENT:"Odebrat z posledních dokumentů",REVIEWERS:"Recenzenti",REVIEWER:"Recenzent",REVIEWED:"RECENZOVÁNO",NOT_REVIEWED:"BEZ RECENZE",OPENED:"OTEVŘENO",NOT_OPENED:"NEOTEVŘENO",REMOVE_FROM_TRACKING:"Odebrat ze sledování",PARTICIPANTS:"Lidé",PARTICIPANT:"Osoba",COMMENTED:"<%= num %> z <%= total %> s poznámkou",ANY_TIME:"Jakýkoli čas",ANY_STATUS:"Jakýkoli stav",ANY_STATE:"Jakýkoli stav",HOUR:"Hodiny",MINUTES:"Minut",PAST_HOUR:"Uplynulá hodina",PAST_24_HOURs:"Uplynulých 24 hodin",PAST_WEEK:"Uplynulý týden",PAST_MONTH:"Uplynulý měsíc",PAST_YEAR:"Uplynulý rok",CUSTOM_RANGE:"Vlastní rozmezí",NOT_SIGNED:"NEPODEPSÁNO",COMPLETE:"Dokončit",NOT_SIGNED_S:"Nepodepsáno",NOT_APPROVED:"Neschváleno",NOT_ACCEPTED:"Nepřijato",DELEGATED:"Delegováno",NOT_DELEGATED:"Nedelegováno",FORM_FILLED:"Formulář je vyplněn",NOT_FORM_FILLED:"Nevyplněno",ACKNOWLEDGED:"Potvrzeno",NOT_ACKNOWLEDGED:"Nepotvrzeno",LAST_COMMENTED:"Naposledy okomentováno",GUEST:"HOST",SENDER_UC:"ODESÍLATEL",OWNER_UC:"VLASTNÍK",VIEWED_UC:"ZOBRAZENO",NOT_VIEWED_UC:"NEZOBRAZENO",SIGN_IN:"Přihlásit se",FILTER_TOOL_TIP:"Filtr",SHARE_TOOL_TIP:"Sdílet soubor",COMMENT_TOOL_TIP:"Přidávejte poznámky pomocí zvýraznění, lístků s poznámkami a značkovacích nástrojů",UPLOAD_FILE_TOOL_TIP:"Nahrát soubor do služby Document Cloud",CREATE_PDF_TOOL_TIP:"Vytvořit PDF z libovolného formátu",EXPORT_PDF_TOOL_TIP:"Převádějte soubory PDF do formátů Word, Excel, PowerPoint a dalších",COMBINE_FILES_TOOL_TIP:"Zkombinujte a uspořádejte soubory do jednoho PDF.",ORGANIZE_PAGES_TOOL_TIP:"Odstranění, vložení, vyjmutí nebo otočení stránek",SEND_FOR_REVIEW_TOOL_TIP:"Odeslat ostatním k recenzi a sledovat výsledky",SEND_FOR_SIGNATURE_TOOL_TIP:"Získejte podpisy od ostatních a sledujte výsledky",FILL_SIGN_TOOL_TIP:"Vyplňujte a podepisujte dokumenty a formuláře elektronicky",CREATE_TEMPLATE_TOOL_TIP:"Vytvořit opakovatelně použitelnou šablonu pro dokumenty a formuláře",REMOVE_FROM_RECENT_TOOL_TIP:"Odebrat soubor ze seznamu posledních dokumentů",RENAME_TOOL_TIP:"Přejmenovat soubor",MOVE_TOOL_TIP:"Přesunout soubor do jiné složky",MOVE_FILES_TOOL_TIP:"Přesunout soubory do jiné složky",DOWNLOAD_TOOL_TIP:"Stáhnout soubor",FORWARD_TOOL_TIP:"Přeposlat soubor dalším lidem",DELETE_TOOL_TIP:"Trvale odstranit soubor",DELETE_FILES_TOOL_TIP:"Trvale odstranit soubory",HISTORY_TOOL_TIP:"Historie",UNSHARE_TOOL_TIP:"Přestat soubor sdílet s ostatními",LIST_OF_OPENERS_TOOL_TIP:"Seznam lidí, kteří soubor otevřeli",LIST_OF_REVIEWERS_TOOL_TIP:"Seznam lidí",LIST_OF_SIGNERS_TOOL_TIP:"Seznam podepisujících",SIGNATURE_ACTIVITY_TOOL_TIP:"Aktivita podepisování",REMINDERS_TOOL_TIP:"Připomenutí",COPY_LINK_TOOL_TIP:"Kopírovat odkaz",PRINT_TOOL_TIP:"Tisknout soubor",EDIT_PDF_TOOL_TIP:"Úprava textů a obrazů v souborech PDF",SEND_AND_TRACK_TOOL_TIP:"Odesílejte dokumenty, sledujte počet zobrazení a stahování",STAMP_TOOL_TIP:'Add stamps such as "approved" or "draft"',MEASURE_TOOL_TIP:"Měřte vzdálenost, plochu a obvod objektů",CERTIFICATES_TOOL_TIP:"Digitálně podepisujte nebo certifikujte dokumenty a ověřujte jejich pravost",REDACT_TOOL_TIP:"Trvale odstraňujte utajovaný text, grafiku nebo skrytá data",PROTECT_TOOL_TIP:"Nedovolte jiným osobám kopírovat, tisknout a upravovat informace v souborech PDF",SEND_FOR_COMMENTS_TOOL_TIP:"Automaticky sbírejte poznámky od recenzentů do jediného PDF",OF:"z",OPENED_S:"Otevřeno",SENT:"Poslané",RECEIVED:"Přijato",SHARED_FILE:"SDÍLENÝ SOUBOR",SHARED_FILES:"SDÍLENÉ SOUBORY",SIGN_AGREEMENT:"PODEPSAT SMLOUVU",REVIEW_FILE:"RECENZOVAT SOUBOR",SHARED:"SDÍLENO",REVIEW:"RECENZOVAT",SORT_BY:"SEŘADIT PODLE",NAME_S:"Název",SENT_RECIEVED_S:"Datum odeslání/přijetí",SENDER_S:"Odesílatel",STATUS_S:"Stav",LAST_ACTIVITY_S:"Datum poslední aktivity",INITIATOR_S:"Vlastník",OWNER_S:"Majitel",SAVE_LINK_IN_DC:"Uložit odkaz do cloudového úložiště Adobe",REMOVE_LINK_FROM_DC:"Odebrat odkaz ze služby Document Cloud",ADDED_RECIPIENT_NO_COUNT:"PŘIDANÍ PŘÍJEMCI",GENERIC_ARIA_LABEL_STRING:"<%= prefix %>. <%= suffix %>",SHARE_REMOVE:"Odebrat soubor",SHARE_EMAIL_REMOVE:"Odstranit e-mail",ENTER_EMAIL_ADDR:"Zadejte jméno nebo e-mail",ADD_REVIEWERS:"Přidat osoby",ADD_RECIPIENTS:"Přidat příjemce",REVIEWER_ADD:"Přidat",ADDRESS_BOOK:"Adresář",REVIEWERS_ADDED_SUCCESSFULLY_TOAST:"Byly pozvány další osoby.",REVIEWER_ADDED_SUCCESSFULLY_TOAST:"Byla pozvána další osoba.",REVIEWER_ADDED_FAILED_TOAST:"Osoby se nepodařilo pozvat. Zkuste je přidat znovu později.",RECIPIENTS_ADDED_SUCCESSFULLY_TOAST:"Pozvánky byly odeslány.",RECIPIENT_ADDED_SUCCESSFULLY_TOAST:"Pozvánka byla odeslána.",RECIPIENT_ADDED_FAILED_TOAST:"Osoby nelze přidat, zkuste to znovu později.",COPIED_STRING:"Zkopírováno",N_RECIPIENTS:"Osob: <%= num %>",N_RECIPIENT:"Osob: <%= num %>",LAST_VIEWED_DATE:"Naposledy zobrazeno <%= date %>",LAST_ACCESSED_ON:"Poslední přístup dne",LAST_ACCESSED:"Poslední přístup",LAST_COMMENTED_ON:"Poslední poznámka dne",FINISHED_REVIEWING:"Přidávání poznámek dokončeno",COPY_REVIEW_LINK_T:"Zkopírovat odkaz na soubor do schránky",DOWNLOAD_A_COPY_T:"Stáhnout kopii tohoto sdíleného souboru",CLOSE_REVIEW_T:"Zavřít sdílený dokument a uzamknout poznámky",UNSHARE_REVIEW_T:"Přestat sdílet soubor s ostatními",DELETE_REVIEW_T:"Odstranit sdílený soubor ze služby Document Cloud",REMOVE_ME_T:"Odebrat sebe sama ze sdíleného souboru",REPORT_ABUSE_T:"Nahlásit společnosti Adobe urážlivý nebo škodlivý obsah",VIRGO_RHP_STATUS_VIEWED:"zobrazeno",COPY_REVIEW_LINK_COACHMARK:"Zkopírovat odkaz a sdílet s ostatními.",ADD_REVIEWER_COACHMARK:"Zde můžete přidat více osob.",BUTTON:"Tlačítko",GET_MS_GRAPH_CONTACTS_MSG:"Chcete-li mít přístup ke kontaktům aplikace Outlook, přihlaste se pomocí svého účtu Office.",GET_MS_GRAPH_CONTACTS_MSG_1:"Přihlaste se pomocí svého ",GET_MS_GRAPH_CONTACTS_MSG_2:" účtu a získejte přístup ",GET_MS_GRAPH_CONTACTS_MSG_3:" ke kontaktům.",CONFIRM_UNSHARE_MSG_ONE_ITEM:"Pokud zrušíte sdílení tohoto souboru, lidé k němu již nebudou mít přístup. Později jej můžete znovu nasdílet.",CONFIRM_REMOVE_TITLE:"Odstranit sdílený soubor",CONFIRM_REMOVE_BUTTON:"Odstranit soubor",CONFIRM_DELETE_MSG_ONE_ITEM_SHARED:"Odstranění tohoto sdíleného souboru jej trvale odebere ze služby Document Cloud. Tuto akci nelze vrátit zpět.",NO_FILES_TITLE:"Žádné soubory",NO_FILES_MESSAGE:"Žádné soubory nejsou k dispozici ke stažení. Soubory mohly být odstraněny.",SHARE_INITIAL_SUBJECT:"Sdílené soubory",DELETE_REVIEW_MESSAGE:"Odstraněním tohoto sdíleného souboru jej spolu se všemi asociovanými poznámkami trvale odeberete ze služby Document Cloud pro všechny účastníky. Tuto akci nelze vrátit zpět.",DUE_BY:"Termín",OPEN_UNSHARED_OR_DELETED_FILE_ERROR_TITLE_RECEPIENT:"Sdílený soubor není dostupný",OPEN_UNSHARED_OR_DELETED_FILE_ERROR_MSG_RECEPIENT:"Tento soubor již není sdílen nebo byl odstraněn. Pro více informací se obraťte na jeho vlastníka.",OPEN_UNSHARED_OR_DELETED_FILE_ERROR_BUTTON_RECEPIENT:"OK",CONFIRM_UNSHARE_TITLE:"Zrušit sdílení souboru",CONFIRM_UNSHARE_MSG:"Pokud zrušíte sdílení tohoto souboru, příjemci k němu nebudou mít přístup.",CONFIRM_UNSHARE_BUTTON:"Zrušit sdílení",CONFIRM_DELETE_FILE_TITLE:"Odstranit soubor",CONFIRM_DELETE_FILE_MSG:"Opravdu chcete odstranit „<%= filename %>“?",CONFIRM_DELETE_FILE_BUTTON:"Odstranit",CONFIRM_DELETE_SHARED_FILE_TITLE_NO_COPY_MODEL:"Odstranit sdílený soubor",CONFIRM_DELETE_SHARED_FILE_MSG_NO_COPY_MODEL:"Vy a všichni uživatelé, se kterými jste tento soubor sdíleli, ztratíte k souboru přístup v okamžiku, kdy bude odstraněn. Soubor bude odstraněn trvale, přičemž tuto akci nelze vrátit zpět.",CONFIRM_DELETE_SHARED_FILE_BUTTON_NO_COPY_MODEL:"Přesto odstranit",CONFIRM_DELETE_SHARED_FILE_TITLE_COPY_MODEL:"Odstranit sdílený soubor",CONFIRM_DELETE_SHARED_FILE_MSG_COPY_MODEL:"Vy a všichni uživatelé, se kterými jste tento soubor sdíleli, ztratíte k souboru přístup v okamžiku, kdy bude odstraněn. Soubor bude odstraněn trvale, přičemž tuto akci nelze vrátit zpět.",CONFIRM_DELETE_SHARED_FILE_BUTTON_COPY_MODEL:"Přesto odstranit",CONFIRM_DELETE_N_FILES_TITLE:"Odstranit soubory",CONFIRM_DELETE_N_FILES_MSG:"Jeden nebo více vybraných souborů bylo sdíleno. Pokud tyto soubory odstraníte, vy ani příjemci k nim již nebudete mít přístup.",CONFIRM_DELETE_N_FILES_BUTTON:"Přesto odstranit",CONFIRM_UNSHARE_FAILURE_OWNER_TITLE:"Chyba zrušení sdílení",CONFIRM_UNSHARE_FAILURE_OWNER_MSG:"Pokud budete ve zrušení sdílení tohoto souboru pokračovat, budou poznámky ztraceny. Můžete jej i přesto přestat sdílet nebo to zkusit později.",CONFIRM_UNSHARE_FAILURE_OWNER_BUTTON:"Přesto zrušit sdílení",DATE_MODIFIED_CAPS:"DATUM ZMĚNY",SAVE_COPY_TOOLTIP:"Uložit kopii souboru",CREATE_LINK_SECURITY_INFO:"Kdokoli s odkazem bude mít k souboru přístup.",DELETED_STRING:"Odstraněno",BOOTSTRAP_FAIL_MSG:"Informace o tomto souboru momentálně nemůžeme zobrazit. Zkuste to znovu později.",COPY_SHARED_LINK_FAILED_SHARING_RESTRICTION:"Nelze kopírovat sdílený odkaz. Vaše organizace povolila omezení sdílení.",PARTIAL_RECIPIENTS_FAILED_SHARING_RESTRICTION_MY_ORG:"Některé uživatele není možné pozvat, protože vaše organizace povolila omezení sdílení.",PARTIAL_RECIPIENTS_FAILED_SHARING_RESTRICTION_RECIPIENT_ORG:"Některé uživatele není možné pozvat, protože jejich organizace povolila omezení sdílení.",COPY_SHARED_LINK_FAILED_GENERIC:"Nelze vytvořit sdílený odkaz. Zkuste to znovu později.",PARTIAL_RECIPIENTS_FAILED_GENERIC:"Některé uživatele nebylo možné pozvat",UNOPENED:"Neotevřeno",AV2_COPY_REVIEW_LINK:"Zkopírovat sdílený odkaz",AV2_UNSHARE_REVIEW:"Zrušit sdílení souboru",AV2_REMOVE_ME:"Odebrat mě",AV2_REPORT_ABUSE:"Nahlásit zneužití",AV2_SAVE_A_COPY:"Uložit kopii",AV2_CLOSE_REVIEW:"Zavřít sdílený dokument",AV2_N_RECIPIENTS:"Osob: <%= num %>",AV2_ADD_REVIEWERS:"Přidat osoby",AV2_CANCEL_AGREEMENT:"Zrušit dohodu",AV2_AUDIT_REPORT:"Zpráva o auditu",EXPORT_BUTTON:"Převést na",DROPDOWN_DOCX:"Microsoft Word (*.docx)",DROPDOWN_DOC:"Microsoft Word (*.doc)",DROPDOWN_PPTX:"Microsoft PowerPoint (*.pptx)",DROPDOWN_XLSX:"Microsoft Excel (*.xlsx)",DROPDOWN_RTF:"Formát RTF (*.rtf)",DROPDOWN_JPEG:"JPEG (*.jpg)",DROPDOWN_TIFF:"TIFF (*.tiff)",DROPDOWN_PNG:"PNG (*.png)",AV2_SEND_FOR_SIGNATURE_PDF:"Požádat o elektronické podpisy",AV2_EDIT_PDF:"Upravit text a obrazy",AV2_COMMENT_PDF:"Přidávejte poznámky",AV2_ORGANIZE_PDF:"Uspořádat stránky",AV2_REMOVE_FROM_RECENT:"Odebrat z posledních souborů",AV2_EXPORT_PDF:"Exportovat PDF",AV2_COMBINECONVERT_PDF:"Převést na soubor PDF",AV2_CREATE_PDF:"Vytvoření dokumentu PDF",AV2_SEND_FOR_SIGNATURE_VIRGO_TOOLTIP:"Odešlete dokument komukoli dalšímu k rychlému elektronickému podpisu online",AV2_EDIT_VIRGO_TOOLTIP:"Upravujte nebo přidávejte text, obrázky, stránky a další obsah",AV2_COMMENT_VIRGO_TOOLTIP:"Přidávejte lístky s poznámkami, zvýrazňujte a přidávejte jiné typy anotací",AV2_FILL_SIGN_FILE_VIRGO_TOOLTIP:"Vyplňujte formuláře, přidejte svůj podpis nebo odešlete soubory ostatním k elektronickému podpisu",AV2_ORGANIZE_VIRGO_TOOLTIP:"Odstraňujte, otáčejte, extrahujte a vkládejte stránky nebo měňte jejich pořadí",AV2_EXPORT_PDF_VIRGO_TOOLTIP:"Převádějte soubory PDF do souborů sady Microsoft Office, obrázků a dalších souborů",AV2_SHARE_VIRGO_TOOLTIP:"Odešlete soubor ostatním k prohlížení nebo přidávání poznámek",AV2_EXPORT_FILE_VIRGO_TOOLTIP:"Převádějte soubory PDF do souborů sady Microsoft Office, obrázků a dalších souborů",AV2_CREATE_PDF_TOOLTIP:"Vytvářejte soubory PDF z obrázků, souborů sady Microsoft Office a dalších",AV2_COMBINECONVERT_PDF_TOOLTIP:"Převeďte téměř jakýkoli soubor do formátu PDF",AV2_USE_TEMPLATE:"Použít šablonu",AV2_CREATE_TEMPLATE:"Vytvořit šablonu",CREATE_LINK_ORG_SECURITY_INFO:"K souboru má přístup kdokoli z <%= ORGNAME %> s odkazem.",CREATE_LINK_PRIV_SECURITY_INFO:"K souboru mají přístup pouze pozvaní lidé."});