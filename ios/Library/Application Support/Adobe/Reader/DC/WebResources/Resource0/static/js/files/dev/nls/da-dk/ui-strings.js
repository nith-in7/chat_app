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

define({SHOW:"Vis",OPEN_SELECTED:"Åbn de markerede",SAVE:"Gem",NEW_FOLDER:"Ny mappe",UPLOAD_FILE:"Overfør fil",CANCEL_UPLOAD:"Annuller upload",SORT:"Sortér",SEARCH_HEADER:"<%= label%> (<%= count%>)",NO_FILES_IN_ROOT:"Der er i øjeblikket ingen filer i Document Cloud.",NO_FILES_IN_CONNECTOR:"Der er i øjeblikket ingen filer i <%= connector %>.",NO_FILES_IN_FOLDER:"Denne mappe er tom.",UPLOAD_TO_ACCESS:"Overfør dine filer, og få adgang til dem hvor som helst.",UNSUPPORTED_CONNECTOR_MSG:"<%= actionName %> understøttes i øjeblikket ikke for filer i <%= connectorLabel %>.",NO_SEARCH_RESULTS:"Ingen søgeresultater",NO_SEARCH_RESULTS_VIRGO:"Ingen resultater fundet",TRY_DIFFERENT_SEARCH:"Prøv en anden søgning.",TRY_DIFFERENT_SEARCH_VIRGO:"Tjek din stavning, eller udvid din søgning.",NO_SEARCH_RESULTS_FOLDER:"Der er ingen anvendelige filer i denne mappe.",TOO_MANY_SEARCH_TERMS_HEADER:"Det maksimale antal søgeforespørgsler er overskredet.",TOO_MANY_SEARCH_TERMS_MESSAGE:"Fjern nogle søgeforespørgsler for at se deres søgeresultater.",NEW_FOLDER_TITLE:"Ny mappe",NEW_FOLDER_NAME_PLACEHOLDER:"Skriv navn på ny mappe",CREATE_FOLDER:"Opret mappe",SORT_BY:"Sortér efter:",SORT_BY_FILE_NAME:"Filnavn",SORT_BY_FILE_TYPE:"Filtype",SORT_BY_SIZE:"Størrelse",SORT_BY_DATE_ADDED:"Tilføjelsesdato",SORT_BY_DATE_MODIFIED:"Ændringsdato",SORT_BY_DATE_VIEWED:"Dato for visning",SORT_BY_DATE_OPENED:"Åbningsdato",ASCENDING:"Stigende",DESCENDING:"Faldende",SORTED_BY:"SORTERET EFTER",PREVIEW_NEXT_PAGE:"Vis næste side",PREVIEW_PREVIOUS_PAGE:"Vis forrige side",DISPLAY:"Sortér",VIEW_BY:"Vis efter:",LIST:"Liste",THUMBNAIL:"Miniature",SORT_BY_FILE_SIZE:"Filstørrelse",FILTER:"Filtrer",FILTER_BY:"Filtrer efter...",TAGS_TITLE:"Mærker: Kommer snart...",TAGS:"Mærker",SEARCH_TITLE:"Søg efter filer",CLEAR_SEARCH_TITLE:"Ryd søgning",SEARCH_RESULTS:"Søgeresultater ...",SEARCH_RESULTS_COUNT:"Søgeresultater (<%= count %>)",SEARCH_RESULTS_UNAVAILABLE:"Søgeresultater er ikke tilgængelige",ADD_FILTER:"Tilføj filter",REMOVE_FILTER:"Fjern filter",SELECT_ATTRIBUTE:"Vælg attribut",SELECT_VALUE:"Vælg værdi",SELECT_FORMAT:"Vælg format",SELECT_DATES:"Vælg datoer",SELECT_TOOL:"Vælg værktøj",ENTER_VALUE:"Angiv værdi",SEARCH:"Søg",EXPORT_FROM_PDF:"Eksportér PDF",CONVERT_TO_PDF:"Opret PDF",COMBINE_TO_PDF:"Kombiner filer",FILL_SIGN:"Udfyld og underskriv",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",MARK_AS_FAVORITE:"Markér som favorit",FILE_INFO:"Filoplysninger",TYPE:"Type",ADDED:"Tilføjet",MODIFIED:"Ændret",PAGES:"Sider",SIZE:"Størrelse",SHARING_LINK:"Delingslink",UNSHARE:"annuller deling",MARK_AS_FAVORITE_COMING_SOON:"Markér som foretrukken: kommer snart...",COMING_SOON:"Kommer snart...",PREV_PAGE_TITLE:"Forrige side",NEXT_PAGE_TITLE:"Næste side",PAGE_NUM_TITLE:"Sidenummer",PAGE_NUM_SEPARATOR:"/",PAGE_COUNT_TITLE:"Antal sider",ZOOM_OUT_TITLE:"Zoom ud",ZOOM_IN_TITLE:"Zoom ind",SCROLL_PAGES_TITLE:"Rul på siderne",FIT_PAGE_WIDTH_TITLE:"Tilpas sidebredde",FIT_FULL_PAGE_TITLE:"Tilpas hele siden",SHOW_RHP:"Vis højre panel",HIDE_RHP:"Skjul højre panel",SHOW_FILE_INFO:"Vis filoplysninger",HIDE_FILE_INFO:"Skjul filoplysninger",SHOW_IMAGE_PREVIEW:"Vis klassisk eksempel",SHOW_NGDOC_PREVIEW:"Vis forbedret eksempel",UNDOCK:"Frigør",DOCK_TO_BOTTOM:"Fastgør til bund",ZERO_ITEMS:"0 elementer",ONE_FILE:"1 fil",N_FILES:"<%= numFiles %> filer",ONE_FOLDER:"1 mappe",N_FOLDERS:"<%= numFolders %> mapper",ONE_FOLDER_ONE_FILE:"1 mappe, 1 fil",ONE_FOLDER_N_FILES:"1 mappe, <%= numFiles %> filer",N_FOLDERS_ONE_FILE:"<%= numFolders %> mapper, 1 fil",N_FOLDERS_N_FILES:"<%= numFolders %> mapper, <%= numFiles %> filer",UPLOADING:"Overfører...",PROCESSING:"Behandler...",SHARED:"Delt",MAKE_PUBLIC:"Gør offentlig",MAKE_PRIVATE:"Gør privat",PRIVATE:"Privat",PUBLIC:"Offentlig",SHARE_FILES_PRIVATE_TEXT:"De valgte filer er private og kan kun vises af dig.",SHARE_FILE_PRIVATE_TEXT:"Den valgte fil er privat og kan kun vises af dig.",SHARE_FILES_PUBLIC_TEXT:"De valgte filer er offentlige, og alle, som har linkene herunder, kan vise filerne.",SHARE_FILE_PUBLIC_TEXT:"Den valgte fil er offentlig, og alle, som har linket herunder, kan vise filen.",SHARE_FILES_MIXED_TEXT:"De markerede filer indeholder både offentlige og private filer. Klik på en af knapperne herunder for at dele eller annullere deling af alle filer.",EMAIL_BUTTON_SINGLE:"E-mail link",EMAIL_BUTTON_MULTI:"E-maillink",EMAIL_LINK:"E-mail",SAVE_BUTTON:"Luk",SHARE_FILES_ERROR:"Der skete en fejl i delingstilstanden for filen/filerne: <%= error %>",SHARE_FILES_SESSION_TIMEOUT:'Din session er udløbet. Klik på "Luk" herunder for at returnere til logonsiden.',SHARE_FILE_EMAIL_BODY:"Du kan vise filen ved at klikke på linket herunder:",SHARE_FILES_EMAIL_BODY:"Du kan vise filerne ved at klikke på linkene herunder:",SHARE_FILE_EMAIL_SUBJECT:"<%= firstName %> <%= lastName %> har delt filen med dig.",SHARE_FILES_EMAIL_SUBJECT:"<%= firstName %> <%= lastName %> har delt filerne med dig.",SHARE_FILES_AV_DISALLOWED:'Deling af filen "<%= filename %>" mislykkedes, fordi det ikke er tilladt dele lyd- og videofiler.',SHARE_FILES_SHARING_DISALLOWED:'Deling af filen "<%= filename %>" mislykkedes, fordi det ikke er tilladt at dele filen.',FOLDER_UPLOAD_NOT_SUPPORTED_TITLE:"Det er ikke muligt at overføre en mappe",FOLDER_UPLOAD_NOT_SUPPORTED_MSG:"Vi kunne ikke fuldføre din overførselsanmodning. Overførsel af en mappe understøttes ikke i øjeblikket.",FILE_UPLOAD_FAILED_TITLE:"Filoverførsel mislykkedes",FILE_UPLOAD_FAILED_MSG:"Det var ikke muligt at fuldføre din overførselsanmodning. Du har muligvis forsøgt at overføre en fil, der er for stor, eller en mappe.",FILE_OFFLINE_TITLE:"Du er ikke forbundet til internettet.",FILE_OFFLINE_CONTENT:"For at få adgang til delte filer skal du oprette internetforbindelse og prøve igen.",FILE_OFFLINE_OK_LABEL:"Prøv igen",FILE_OFFLINE_ARIA_LABEL:"Ingen internetforbindelse. Prøv igen.",FILENAME_TEXT:"Filnavn",RESTRICT_EDITING:"Begræns redigering",REDUCE_FILE_SIZE:"Reducer filstørrelse",EXPORT_FILE_FORMAT:"Filformat",EXPORT_SETTINGS:"Indstillinger",EXPORT_VIEW_RESULT:"Åbn fil efter eksport",SHARED_FILE_OVERWRITE_WARNING:"Der findes en delt fil med det samme navn i denne mappe, som ikke kan erstattes. Prøv et andet navn.",FILES_SIGN_OUT_TITLE:"Adobes cloudlager",FILES_SIGN_OUT_CONTENT:"Log på for at få adgang til filer",FILES_SIGN_IN_LABEL:"Log på nu",CCLOUD_SIGN_OUT_TITLE:"Creative Cloud",CCLOUD_SIGN_OUT_CONTENT:"Log på for at få adgang til filer",FILES_NO_ACCESS_TITLE:"Ingen adgang til tjenesten",FILES_NO_ACCESS_MESSAGE:"Du har ikke adgang til denne tjeneste. Kontakt it-administratoren for at få adgang, eller prøv at  ",FILES_NO_ACCESS_SIGN_IN_LINK:"Logge på med dit Adobe ID.",MANAGE_DOCUMENTS_SENT_FOR_SIGNATURE:"Administrere dokumenter, der er sendt til underskrivelse",ENCRYPTION_KEY_DISABLED_TITLE:"Dette indhold er ikke tilgængeligt pga. virksomhedsbegrænsninger",ENCRYPTION_KEY_DISABLED_MESSAGE:"Krypteringsnøglen er blevet tilbagekaldt, og dette indhold er ikke længere tilgængeligt. Kontakt din administrator for at genaktivere krypteringsnøglen, og prøv derefter igen.",VIRGO_DOCUMENT_CLOUD:"Adobes cloudlager",VIRGO_SCANS:"Scanninger",VIRGO_NAME:"NAVN",VIRGO_HDR_SHARE:"DELING",VIRGO_MODIFIED:"ÆNDRET",VIRGO_SIZE:"STØRRELSE",VIRGO_CREATIVE_CLOUD:"Adobe Creative Cloud",VIRGO_SHAREPOINT:"SharePoint-websted",VIRGO_DROPBOX:"Dropbox",VIRGO_GOOGLE_DRIVE:"Google Drev",VIRGO_BOX:"Box",VIRGO_ONEDRIVE:"OneDrive",VIRGO_LIST_VIEW:"Listevisning",VIRGO_THUMBNAIL_VIEW:"Miniaturevisning",VIRGO_ADOBE_SCAN:"Adobe Scan",OPTIMIZE_CHECKBOX_COACKMARK_TITLE:"Reducer din filstørrelse",OPTIMIZE_CHECKBOX_COACKMARK_CONTENT:"Denne fil er større end <%= fileSizeInMB %> MB. Reducer filstørrelsen, før du sender den til andre."});