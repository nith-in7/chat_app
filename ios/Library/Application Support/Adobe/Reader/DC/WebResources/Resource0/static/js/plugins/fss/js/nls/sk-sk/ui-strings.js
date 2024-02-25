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
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

define({FAF:"Vyplniť a podpísať",NullString:"",OK:"OK",Cancel:"Zrušiť",Close:"Zatvoriť",Continue:"Pokračovať",Delete:"Odstrániť",Accept:"Prijať",Apply:"Aplikovať",Clear:"Vymazať",Back:"Späť",Next:"Nasledujúce",Done:"Hotovo",ParserError:"Nepodarilo sa rozlúštiť odpoveď zo servera.",ObjectNotFound:"Požadovaný objekt alebo dokument sa nepodarilo nájsť.",UnboundFormFound:"Požadovaný formulár nie je možné otvoriť.",UnsupportedFileType:"Vybratý typ súboru nie je momentálne podporovaný.",UnsupportedPDFTooManyPages:"Momentálne sú podporované len súbory, ktoré obsahujú menej ako 100 strán.",UnsupportedPDFType:"Vybratý súbor PDF nie je momentálne podporovaný.",UnsupportedPDFTypeEditRestricted:"Súbor nie je možné spracovať, pretože autor aplikoval obmedzenia, ktoré zabraňujú vykonávaniu úprav.",UnsupportedPDFTypeEncrypted:"Súbor nie je možné spracovať, pretože autor použil ochranu šifrovaním.",UnsupportedPDFTypeInvalid:"Zdá sa, že vybratý súbor je poškodený.",UnsupportedPDFTypeXFA:"Vybrali ste dynamický súbor XFA, ktorý momentálne nie je podporovaný. Skúste ho radšej vyplniť prostredníctvom aplikácie Adobe Reader alebo Acrobat.",UnsupportedFileSize:"Momentálne sú podporované len súbory s veľkosťou do 100 MB.",CreatePDFFailed:"Pri spracovaní súboru sa vyskytli problémy. Pred opätovným vybratím skúste súbor konvertovať na súbor PDF.",Unauthorized:"Nemáte oprávnenie na vykonanie požadovanej akcie.",BadRequest:"Vyskytol sa neznámy problém. Skúste to znova.",Timeout:"Časový limit operácie uplynul.",Unknown:"Vyskytla sa neočakávaná chyba.",FilledPDFSuffix:"_vyplnené",ErrorDownloadingPDF:"Nepodarilo sa prevziať vyplnený súbor PDF. <%= message %>",RestrictedEditPermission:"Pôvodný autor tohto súboru PDF obmedzil jeho používanie a nie je možné vytvoriť vyplnený súbor PDF.",OutputFolderNotFound:"Pôvodný súbor tohto formulára už neexistuje. Prevezmite si tento formulár najprv do počítača.",UnsupportedFileTypeTitle:"Nepodporovaný typ súboru",UnsupportedFileTypeMsg:"Súbor nie je možné otvoriť v režime Vyplniť a podpísať.",OrganizerSubTitle:"Jednoducho vyplňte a podpíšte akýkoľvek formulár.",OrganizerSelectForm:"Vyberte ľubovoľný formulár na vyplnenie",OrganizerSelectFormTitle:"Vyberte formulár",OrganizerRecentFiles:"Posledné formuláre",OrganizerViewAll:"Zobraziť všetky",OrganizerSampleForm:"Vzorový formulár",OrganizerSampleGuide:"Nemáte žiadny formulár na vyplnenie? Vyskúšajte vzorový formulár.",OrganizerSampleFileName:"Vzorové členstvo",FileFilterLabel:"Typ súboru: je možné previesť na formuláre",AddSelectedBtnLabel:"Otvoriť",PrepareDocument:"Pripravuje sa dokument...",OpenDocument:"Otvára sa formulár...",ToolBarTextTooltip:"Zadajte text",ToolBarCrossTooltip:"Značka začiarknutia",ToolBarCheckTooltip:"Začiarknutie",ToolBarRoundRectTooltip:"Kruh",ToolBarLineTooltip:"Čiara",ToolBarDotTooltip:"Vyplnená bodka",ToolBarSignTooltip:"Podpísať alebo vložiť iniciál na formulár",ToolBarFillSign:"Vyplniť a podpísať",ToolBarSign:"Podpísať",ToolBarPrint:"Tlačiť",ToolBarPrintTooltip:"Prevziať ako súbor PDF a potom tlačiť",ToolBarDownload:"Prevziať ako súbor PDF",ToolBarDownloadToComputer:"Prevziať súbor PDF do môjho počítača",ToolBarDownloadToCloud:"Uložiť PDF kam: <%= cloudName %>",ToolBarDownloadToFiles:"Uložiť súbor PDF do súborov služby Adobe Document Cloud",ToolBarSavingDataMessage:"Ukladá sa...",ToolBarSavingGuide:"Váš formulár sa uložil ako <%= fileName %>",ToolBarSavedDataMessage:"Automaticky uložené",ToolBarAddSign:"Pridať podpis",ToolBarAddInitials:"Pridať iniciály",ToolBarSignatureSaved:"Váš podpis bol uložený. Neskôr ho môžete opäť použiť.",ToolBarInitialsSaved:"Vaše iniciály boli uložené. Neskôr ich môžete opäť použiť.",HUDPreviousPage:"Predchádzajúca strana",HUDNextPage:"Nasledujúca strana",HUDPageNumber:"Číslo strany",HUDNumberOfPages:"Počet strán",HUDFitPageWidth:"Prispôsobiť na šírku strany",HUDFitFullPage:"Prispôsobiť na celú stranu",HUDZoomIn:"Zväčšiť",HUDZoomOut:"Zmenšiť",HUDZoomLevel:"Úroveň zväčšenia",HUDInvalidPage:"V dokumente chýba strana číslo „<%= invalidPageNum %>“.",changeSignatureStyle:"Zmeniť štýl",typeSignatureButtonLabel:"Typ",drawSignatureButtonLabel:"Kresliť",importSignatureButtonLabel:"Obrázok",importSignaturePlaceholder:"Vybrať obrázok",typeYourNamePlaceholder:"Sem zadajte svoje meno.",typeYourInitialsPlaceholder:"Sem zadajte svoje iniciály.",signHerePlaceholder:"Podpísať sem",initialsHerePlaceholder:"Iniciály sem",saveSignature:"Uložiť podpis",saveInitials:"Uložiť iniciály",chooseSignatureTitle:"Vybrať podpis",chooseInitialsTitle:"Vybrať iniciály",chooseSignatureMessage:"Vo svojom účte máte uložených viacero podpisov. Vyberte, ktorý podpis chcete uchovať.",chooseInitialsMessage:"Vo svojom účte máte uložených viacero iniciálov. Vyberte, ktoré iniciály chcete uchovať.",removeAllSignatures:"Odstrániť všetky podpisy",removeAllInitials:"Odstrániť všetky iniciály",FormViewSendUsFeedback:"Pošlite nám spätnú väzbu",FormViewTypeTextHere:"Tu zadajte text",FormViewTextTooLongText:"Prekročili ste limit <%= maxAllowedChars %> znakov v jednom poli.<br><br>Toto pole bolo obnovené na svoju pôvodnú hodnotu.<br><br>Môžete vedľa neho či pod ním vytvoriť ďalšie pole umožňujúce zadanie ďalších znakov.",FormViewTooManyFieldsText:"Prekročili ste limit <%= maxAllowedFields %> polí na jednej strane.",FormViewFRInfo:"Na tomto formulári boli rozpoznané polia.<br/><br/>Medzi poľami môžete prechádzať klávesom Tab a medzerníkom môžete prepínať začiarkavacie políčka. Tiež môžete kamkoľvek kliknúť, ak chcete vytvoriť nové pole.",SettingsUserDataHead:"Môj profil",SettingsUserDataDesc:"Kliknutím vymažete všetky údaje z položky Môj profil",SettingsUserDataClear:"Vymazať všetko",SettingsUserDataClearConfirm:"Vymazať všetko",SettingsUserDataClearing:"Vymazáva sa…",SettingsUserDataGuideClear:"Vymazať všetky údaje zaznamenané v položke Môj profil. Táto akcia sa nedá vrátiť späť.",SettingsUserDataConfirmHtml:"Týmto sa vymažú všetky údaje zaznamenané v položke Môj profil. Táto akcia sa nedá vrátiť späť.",SettingsUserDataGuideCleared:"Všetky zaznamenané údaje z položky Môj profil sa vymazali.  Kedykoľvek môžete zadať nové údaje.",SettingsAutocompleteHead:"Návrhy",SettingsAutocompleteDesc:"Kliknutím vymažete návrhy z vami zadaných údajov",SettingsAutocompleteClear:"Vymazať všetko",SettingsAutocompleteClearConfirm:"Vymazať všetko",SettingsAutocompleteClearing:"Vymazáva sa…",SettingsAutocompleteGuideClear:"Vymazať všetky označenia formulára a návrhy získané z formulárov, ktoré ste vyplnili. Táto akcia sa nedá vrátiť späť.",SettingsAutocompleteGuideClearRdr:"Vymazať všetky návrhy získané z vami zadaných údajov. Táto akcia sa nedá vrátiť späť.",SettingsAutocompleteConfirmHtml:"Týmto sa vymažú všetky návrhy získané z vami zadaných údajov. Táto akcia sa nedá vrátiť späť.",SettingsAutocompleteGuideCleared:"Všetky zaznamenané návrhy sa vymazali.",SettingsAutocompleteToggleDesc:"Navrhnúť slová alebo frázy na základe vami zadaných označení formulára a údajov",SettingsAutocompleteToggleDescRdr:"Navrhnúť slová alebo frázy na základe vami zadaných údajov",SettingsRecognitionDataHead:"Dokončovanie textu",SettingsRecognitionDataClear:"Vymazať všetko",SettingsRecognitionDataClearConfirm:"Vymazať všetko",SettingsRecognitionDataClearing:"Vymazáva sa…",SettingsRecognitionDataGuideCleared:"Všetky zaznamenané údaje na dokončovanie textu sa vymazali.",SettingsRecognitionDataGuideClear:"Vymazať všetky údaje zaznamenané na dokončovanie textu. Táto akcia sa nedá vrátiť späť.",SettingsRecognitionDataConfirmHtml:"Týmto sa vymažú všetky údaje zaznamenané na dokončovanie textu. Táto akcia sa nedá vrátiť späť.",SettingsGuideClearErr:"Vami zaznamenané údaje ani návrhy nie je možné vymazať.",AutocompleteLabel_signature:"Podpis",AutocompleteLabel_initials:"Iniciály",FormViewBadCharText:"Vami zadané znaky momentálne nie sú podporované. Nasledujúce znaky boli zmenené na „#“:<br><br><%= badChars %>",FormViewFlattenFormWarning:"Ak uložíte formulár s podpisom alebo iniciálami, existujúce polia formulára už nie je možné upravovať.",UserDataTitle:"MÔJ PROFIL",UserDataManage:"Nastavenia",UserDataSendUsFeedback:"Pošlite nám spätnú väzbu",UserDataDragGuide:"Na formulár môžete potiahnuť ľubovoľnú položku.",UserDataSaveMessage:"Váš profil a údaje z formulára sa uložili v cloudovom úložisku, aby ste mohli jednoducho vypĺňať formuláre.<br/><br/>Svoje uložené údaje môžete spravovať po kliknutí na položku „Nastavenia“.",UserDataSaveErrorMessage:"Profilové údaje nie je možné uložiť","UserData.name":"Názov","UserData.name.display_name":"Celé meno","UserData.name.first_name":"Meno","UserData.name.middle_name":"Stredné meno","UserData.name.last_name":"Priezvisko","UserData.address":"Adresa","UserData.address.add":"Pridať adresu","UserData.address.new":"Nová adresa","UserData.address.group_home":"Domov","UserData.address.address_1":"Ulica 1","UserData.address.address_2":"Ulica 2","UserData.address.city":"Mesto","UserData.address.state":"Stav","UserData.address.zip":"PSČ","UserData.address.country":"Krajina","UserData.email":"E-mail","UserData.email.add":"Pridať e-mail","UserData.email.new":"Nový e-mail","UserData.email.group_personal":"Osobná","UserData.email.email":"E-mailová adresa","UserData.phone":"Telefón","UserData.phone.add":"Pridať telefón","UserData.phone.new":"Nový telefón","UserData.phone.group_personal":"Osobná","UserData.phone.phone":"Telefónne číslo","RHP.IPM.offline.title":"ZAČÍNAME","RHP.IPM.offline.text":"Kliknutím na stránku vyplňte formulár alebo vyberte nástroj vyššie.<br><br>Prihláste sa, ak chcete svoje odpovede automaticky uložiť na využitie v budúcnosti.","RHP.IPM.offline.help":'<a target="_blank" href="https://www.adobe.com/go/fillsigngetstarted_sk">Viac informácií</a>',"RHP.IPM.offline.signin":"Prihlásiť sa","RHP.Send.title":"ODOSLAŤ MOŽNOSTI","RHP.Send.track":"Odoslať a sledovať","RHP.Send.others":"Zabezpečiť podpísanie ostatnými",DblClkForSign:"Dvojitým kliknutím vložte podpis",DblClkForInitials:"Dvojitým kliknutím vložte iniciály",FailedToLoadSign:"K podpisu sa nepodarilo získať prístup. Ukončite aplikáciu a skúste to znova. Taktiež môže byť nutné vytvoriť nový podpis.",DownloadingPDF:"Preberá sa súbor PDF...",ImportingImage:"Importuje sa obrázok podpisu...",GeneratingPDF:"Generuje sa vyplnený súbor PDF...",LoadingRHP:"Načítavajú sa vaše údaje...",DisconnectedMessageRHP:"Je nutné pripojenie na internet. Skontrolujte svoje pripojenie a skúste to znova.",DisconnectedBtnRHP:"Skúsiť znova",GenericDialogTitle:"Chyba",GenericWarningTitle:"Upozornenie",GenericDialogText:"Neznáma chyba",UnsupportedFeatureDialogTitle:"Nepodporovaný prehliadač",UnsupportedFeatureDialogBrowser:"Tento prehliadač nie je podporovaný.",UnsupportedFeatureDialogFeature:"Váš prehliadač túto funkciu nepodporuje.",UnsupportedFeatureDialogText:'<%= browserOrFeature %><br><br>Vykonajte inováciu na najnovšiu verziu aplikácie <a href="https://www.google.com/intl/en/chrome/browser/">Google Chrome</a>, <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>, <a href="https://www.mozilla.org/en-US/firefox">Firefox</a> alebo <a href="http://support.apple.com/downloads/#safari">Safari</a><%= additionalText %>',UnsupportedFeatureDialogNoText:".",UploadDocErrorDialogText:"Služba nahrávania tohto typu súborov je momentálne offline. Skúste to znova neskôr.",SignInToUploadDocDialogText:"Ak chcete nahrať tento typ súboru, musíte byť prihlásení.",UnsupportedFileFormatDialogText:"Nepodporovaný formát súboru.",UploadErrorText:"chyba vrstvy nahrávania",DefaultError401Text:"Boli ste odhlásení. Prihláste sa a skúste to znova.",DefaultErrorDialogText:"Neočakávaná chyba servera. Znova načítajte stránku a skúste to znova.<%= additionalText %><%= additionalRef %>",DefaultErrorDialogAdditionalText:"<br><br><%= additionalText %>",DefaultErrorDialogLogRefText:"<br><br>[referencia: <%= logRef %>]",SignatureComplicatedText:"Váš podpis obsahoval neočakávaný obsah. Skúste vytvoriť jednoduchší podpis.",SignaturePopupText:"na používanie podpisov.",ToolbarFeatureText:"ak chcete používať paletu nástrojov.",UnsupportedPDFLearnMore:'<br><br><a target="_blank" href="https://helpx.adobe.com/sk/acrobat-com/kb/supported-file-formats-fill-sign.html">Viac informácií</a>',LargeSignatureImage:"Tento súbor s obrázkom je príliš veľký. Vyberte iný súbor menší ako <%= sizeLimit %> MB a skúste to znova.",InvalidImage:"Tento súbor s obrázkom nie je podporovaný. Vyberte iný súbor a skúste to znova.",CorruptedFile:"Tento súbor s obrázkom je poškodený. Vyberte iný súbor a skúste to znova.",ConflictDetected:"Upravujete neaktuálnu verziu tohto formulára. Chcete formulár prepísať svojimi zmenami?",OverwriteText:"Prepísať",DiscardText:"Vypustiť",DownloadFormTitle:"Uložiť súbor PDF do súborov služby Adobe Document Cloud",DownloadFormToCloudTitle:"Uložiť PDF kam: <%= cloudName %>",DownloadFormWarningTitle:"Prevziať vyplnený formulár",DownloadFormNoItems:"Chystáte sa prevziať formulár, ktorý nie je vyplnený. Kliknutím na možnosť „Pokračovať“ prázdny formulár prevezmete.",DownloadedFormToCloudTitle:"Saved to <%= cloudName %>",SaveForm:"Vyplnený formulár „<%= formName %>“ sa uložil medzi vaše súbory služby Adobe Document Cloud.",SaveFormToCloud:"Vyplnený formulár „<%= formName %>“ sa uložil sem: <%= cloudName %>.",PrintFormTitle:"Tlačiť vyplnený formulár",DownloadFormToPrint:"Tento formulár nie je možné vytlačiť pomocou tlačidla tlače v prehliadači. Prevezmite formulár vo formáte PDF a následne ho vytlačte pomocou aplikácie Adobe Reader.",DownloadButton:"Prevziať",ConnectorBasedFormOpenedTitle:"Upozornenie",ConnectorBasedFormOpenedMessage:"Momentálne upravujete kópiu tohto formulára uloženú v službe Document Cloud. Uložením formulára vytvoríte jeho kópiu vo formáte PDF na mieste jeho pôvodného umiestnenia.",NPSheader:"Podeľte sa s nami o svoje skúsenosti",RecommendNotLikely:"Veľmi nepravdepodobne",RecommendLikely:"Veľmi pravdepodobne",AskForRecommend:"Do akej miery by ste aplikáciu Adobe Fill & Sign odporučili ostatným?",NPSFeedback:"Na základe čoho by ste nás skôr odporučili iným?",UpgradeDialogTitle:"Inovovať",UpgradeDialogText:"Vykonajte inováciu, ak chcete využívať funkcie online","FR.signatureDoesNotExist":"Vytvorte podpis, ktorý sa umiestní do formulára"});