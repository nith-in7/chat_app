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

define({FAF:"Fill & Sign",NullString:"",OK:"U redu",Cancel:"Odustani",Close:"Zatvori",Continue:"Nastavi",Delete:"Izbriši",Accept:"Prihvati",Apply:"Primijeni",Clear:"Očisti",Back:"Natrag",Next:"Sljedeće",Done:"Gotovo",ParserError:"Odgovor dobiven od poslužitelja nije razumljiv.",ObjectNotFound:"Nije pronađen zatraženi objekt ili dokument.",UnboundFormFound:"Zatraženi obrazac ne može se otvoriti.",UnsupportedFileType:"Odabrana vrsta datoteke trenutno nije podržana.",UnsupportedPDFTooManyPages:"Trenutno podržavamo samo datoteke koje sadrže manje od 100 stranica.",UnsupportedPDFType:"Odabrana PDF datoteka trenutno nije podržana.",UnsupportedPDFTypeEditRestricted:"Datoteku ne možemo obraditi jer je autor primijenio ograničenja koja zabranjuju uređivanje.",UnsupportedPDFTypeEncrypted:"Datoteku ne možemo obraditi jer ju je autor zaštito šifriranjem.",UnsupportedPDFTypeInvalid:"Izgleda da je odabrana datoteka oštećena.",UnsupportedPDFTypeXFA:"Odabrali ste dinamičku XFA datoteku koja trenutno nije podržana. Pokušajte je ispuniti u programu Adobe Reader ili Acrobat.",UnsupportedFileSize:"Trenutno podržavamo samo datoteke koje su manje od 100 MB.",CreatePDFFailed:"Prilikom obrade datoteke došlo je do problema. Pokušajte je pretvoriti u PDF, a zatim je ponovo odaberite.",Unauthorized:"Niste ovlašteni za izvršavanje zatražene akcije.",BadRequest:"Došlo je do nepoznatog problema. Pokušajte ponovo.",Timeout:"Operacija je istekla.",Unknown:"Došlo je do neočekivane pogreške.",FilledPDFSuffix:"_ispunjeno",ErrorDownloadingPDF:"Ispunjeni PDF ne može se preuzeti. <%= message %>",RestrictedEditPermission:"Izvorni autor ovog PDF-a na datoteku je primijenio ograničenje upotrebe i ne možemo napraviti ispunjeni obrazac.",OutputFolderNotFound:"Izvorna datoteka obrasca više ne postoji. Obrazac najprije preuzmite na računalo.",UnsupportedFileTypeTitle:"Vrsta datoteke nije podržana",UnsupportedFileTypeMsg:"Datoteka se ne može otvoriti u načinu Fill & Sign.",OrganizerSubTitle:"Jednostavno pronađite i potpišite bilo koji obrazac.",OrganizerSelectForm:"Odaberite bilo koji obrazac za ispunjavanje",OrganizerSelectFormTitle:"Odaberi obrazac",OrganizerRecentFiles:"Nedavno upotrebljeni obrasci",OrganizerViewAll:"Prikaži sve",OrganizerSampleForm:"Ogledni obrazac",OrganizerSampleGuide:"Nemate obrazac za ispunjavanje? Isprobajte servis na oglednom obrascu.",OrganizerSampleFileName:"Ogledno članstvo",FileFilterLabel:"Vrsta datoteke: može se pretvoriti u obrazac",AddSelectedBtnLabel:"Otvori",PrepareDocument:"Dokument se priprema...",OpenDocument:"Obrazac se otvara...",ToolBarTextTooltip:"Unesi tekst",ToolBarCrossTooltip:"Križić",ToolBarCheckTooltip:"Kvačica",ToolBarRoundRectTooltip:"Krug",ToolBarLineTooltip:"Crta",ToolBarDotTooltip:"Ispunjena točka",ToolBarSignTooltip:"Potpiši ili parafiraj obrazac",ToolBarFillSign:"Fill &amp; Sign",ToolBarSign:"Potpiši",ToolBarPrint:"Ispiši",ToolBarPrintTooltip:"Preuzmi kao PDF, a zatim ispiši",ToolBarDownload:"Preuzmi kao PDF",ToolBarDownloadToComputer:"Preuzmi PDF na moje računalo",ToolBarDownloadToCloud:"Spremi PDF u <%= cloudName %>",ToolBarDownloadToFiles:"Spremi PDF u datoteke servisa Adobe Document Cloud",ToolBarSavingDataMessage:"Spremanje...",ToolBarSavingGuide:"Obrazac je spremljen pod nazivom <%= fileName %>",ToolBarSavedDataMessage:"Automatski spremljeno",ToolBarAddSign:"Dodaj potpis",ToolBarAddInitials:"Dodaj paraf",ToolBarSignatureSaved:"Vaš je potpis spremljen ovdje. Možete ga kasnije upotrijebiti.",ToolBarInitialsSaved:"Vaš je paraf spremljen ovdje. Možete ga kasnije upotrijebiti.",HUDPreviousPage:"Prethodna stranica",HUDNextPage:"Sljedeća stranica",HUDPageNumber:"Broj stranice",HUDNumberOfPages:"Broj stranica",HUDFitPageWidth:"Prilagodi širini stranice",HUDFitFullPage:"Prilagodi cijeloj stranici",HUDZoomIn:"Uvećaj prikaz",HUDZoomOut:"Smanji prikaz",HUDZoomLevel:"Razina zumiranja",HUDInvalidPage:"U ovom dokumentu nema stranice s brojem '<%= invalidPageNum %>'.",changeSignatureStyle:"Promijeni stil",typeSignatureButtonLabel:"Vrsta",drawSignatureButtonLabel:"Crtaj",importSignatureButtonLabel:"Slika",importSignaturePlaceholder:"Odaberi sliku",typeYourNamePlaceholder:"Ovdje unesite svoje ime.",typeYourInitialsPlaceholder:"Ovdje unesite paraf.",signHerePlaceholder:"Potpiši ovdje",initialsHerePlaceholder:"Parafiraj ovdje",saveSignature:"Spremi potpis",saveInitials:"Spremi paraf",chooseSignatureTitle:"Odaberi potpis",chooseInitialsTitle:"Odaberi paraf",chooseSignatureMessage:"Na račun ste spremili više potpisa. Odaberite potpis koji želite zadržati.",chooseInitialsMessage:"Na račun ste spremili više parafa. Odaberite paraf koji želite zadržati.",removeAllSignatures:"Ukloni sve potpise",removeAllInitials:"Ukloni sve parafe",FormViewSendUsFeedback:"Pošaljite nam povratne informacije",FormViewTypeTextHere:"Ovdje unesite tekst",FormViewTextTooLongText:"Prekoračili ste ograničenje od <%= maxAllowedChars %> znakova po polju.<br><br>Ovo polje vraćeno je na prethodnu vrijednost.<br><br>Uz ovo polje ili ispod njega možete napraviti drugo polje u koje će se staviti znakovi koji prekoračuju ograničenje.",FormViewTooManyFieldsText:"Prekoračili ste ograničenje od <%= maxAllowedFields %> polja po stranici.",FormViewFRInfo:"Prepoznata su polja u ovom obrascu.<br/><br/>Pomoću tipke tabulatora možete se pomicati kroz polja, a pomoću razmaknice možete uključiti i isključiti potvrdne okvire. Možete i pritisnuti bilo gdje kako biste napravili novo polje.",SettingsUserDataHead:"Moj profil",SettingsUserDataDesc:"Pritisnite kako biste očistili sve podatke koji su spremljeni u značajci Moj profil.",SettingsUserDataClear:"Očisti sve",SettingsUserDataClearConfirm:"Očisti sve",SettingsUserDataClearing:"Čišćenje u tijeku...",SettingsUserDataGuideClear:"Očistite sve podatke koji su zabilježeni u značajci Moj profil. Ta akcija ne može se poništiti.",SettingsUserDataConfirmHtml:"To će očistiti sve podatke koji su zabilježeni u značajci Moj profil. Ta akcija ne može se poništiti.",SettingsUserDataGuideCleared:"Očišćeni su svi podaci koji su zabilježeni u značajci Moj profil. Nove podatke možete unijeti u bilo kojem trenutku.",SettingsAutocompleteHead:"Prijedlozi",SettingsAutocompleteDesc:"Pritisnite kako biste iz unesenih podataka očistili prijedloge",SettingsAutocompleteClear:"Očisti sve",SettingsAutocompleteClearConfirm:"Očisti sve",SettingsAutocompleteClearing:"Čišćenje u tijeku...",SettingsAutocompleteGuideClear:"Očistit će se sve oznake obrasca i prijedlozi koji su zabilježeni na temelju dosad ispunjenih obrazaca. Ova akcija ne može se poništiti.",SettingsAutocompleteGuideClearRdr:"Iz unesenih podataka očistite sve zabilježene prijedloge. Ta akcija ne može se poništiti.",SettingsAutocompleteConfirmHtml:"To će iz unesenih podataka očistiti sve prijedloge. Ta akcija ne može se poništiti.",SettingsAutocompleteGuideCleared:"Očišćeni su svi zabilježeni prijedlozi.",SettingsAutocompleteToggleDesc:"Predloži riječi ili fraze na temelju oznaka obrasca i dosad unesenih podataka",SettingsAutocompleteToggleDescRdr:"Predloži riječi ili fraze na temelju unesenih podataka",SettingsRecognitionDataHead:"Predviđanje",SettingsRecognitionDataClear:"Očisti sve",SettingsRecognitionDataClearConfirm:"Očisti sve",SettingsRecognitionDataClearing:"Čišćenje u tijeku...",SettingsRecognitionDataGuideCleared:"Očišćeni su svi podaci zabilježeni za predviđanje.",SettingsRecognitionDataGuideClear:"Očistite sve podatke koji su zabilježeni za predviđanje. Ta akcija ne može se poništiti.",SettingsRecognitionDataConfirmHtml:"To će očistiti sve podatke koji su zabilježeni za predviđanje. Ta akcija ne može se poništiti.",SettingsGuideClearErr:"Zabilježeni podaci ili prijedlozi ne mogu se očistiti.",AutocompleteLabel_signature:"Potpis",AutocompleteLabel_initials:"Paraf",FormViewBadCharText:"Unijeli ste znakove koji trenutno nisu podržani. Sljedeći su znakovi promijenjeni u “#”:<br><br><%= badChars %>",FormViewFlattenFormWarning:"Kada obrazac s potpisom ili parafom spremite, više nećete moći uređivati postojeća polja obrasca.",UserDataTitle:"MOJ PROFIL",UserDataManage:"Postavke",UserDataSendUsFeedback:"Pošaljite nam povratne informacije",UserDataDragGuide:"Na obrazac možete povući bilo koji element.",UserDataSaveMessage:"Vaš profil i podaci obrasca spremaju se u oblaku kako biste lakše ispunili obrasce.<br/><br/>Spremljenim podacima možete upravljati tako da pritisnete Postavke.",UserDataSaveErrorMessage:"Podaci profila ne mogu se spremiti","UserData.name":"Ime","UserData.name.display_name":"Ime i prezime","UserData.name.first_name":"Ime","UserData.name.middle_name":"Srednje ime","UserData.name.last_name":"Prezime","UserData.address":"Adresa","UserData.address.add":"Dodaj adresu","UserData.address.new":"Nova adresa","UserData.address.group_home":"Početak","UserData.address.address_1":"Ulica 1","UserData.address.address_2":"Ulica 2","UserData.address.city":"Grad","UserData.address.state":"Županija","UserData.address.zip":"Poštanski broj","UserData.address.country":"Država","UserData.email":"Adresa e-pošte","UserData.email.add":"Dodaj adresu e-pošte","UserData.email.new":"Nova adresa e-pošte","UserData.email.group_personal":"Osobno","UserData.email.email":"Adresa e-pošte","UserData.phone":"Telefon","UserData.phone.add":"Dodaj telefon","UserData.phone.new":"Novi telefon","UserData.phone.group_personal":"Osobni","UserData.phone.phone":"Broj telefona","RHP.IPM.offline.title":"PRVI KORACI","RHP.IPM.offline.text":"Pritisnite stranicu kako biste ispunili obrazac ili odaberite alat iznad.<br><br>Prijavite se kako bi se vaši odgovori u budućnosti automatski spremili.","RHP.IPM.offline.help":'<a target="_blank" href="https://www.adobe.com/go/fillsigngetstarted_hr">Saznajte više</a>',"RHP.IPM.offline.signin":"Prijava","RHP.Send.title":"OPCIJE SLANJA","RHP.Send.track":"Pošalji i prati","RHP.Send.others":"Drugi trebaju potpisati",DblClkForSign:"Dvaput pritisnite za potpisivanje",DblClkForInitials:"Dvaput pritisnite za parafiranje",FailedToLoadSign:"Ne može se pristupiti potpisu. Zatvorite aplikaciju i pokušajte ponovo. Možda ćete morati napraviti novi potpis.",DownloadingPDF:"Preuzimanje PDF-a...",ImportingImage:"Uvoz slike potpisa...",GeneratingPDF:"Generira se ispunjeni PDF...",LoadingRHP:"Dohvat podataka...",DisconnectedMessageRHP:"Potrebna je internetska veza. Provjerite vezu i pokušajte ponovo.",DisconnectedBtnRHP:"Pokušaj ponovo",GenericDialogTitle:"Pogreška",GenericWarningTitle:"Upozorenje",GenericDialogText:"Nepoznata pogreška",UnsupportedFeatureDialogTitle:"Preglednik nije podržan",UnsupportedFeatureDialogBrowser:"Taj preglednik nije podržan.",UnsupportedFeatureDialogFeature:"Vaš preglednik ne podržava tu značajku.",UnsupportedFeatureDialogText:'<%= browserOrFeature %><br><br>Nadogradite na zadnju verziju preglednika <a href="https://www.google.com/intl/en/chrome/browser/">Google Chrome</a>, <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>, <a href="https://www.mozilla.org/en-US/firefox">Firefox</a> ili <a href="http://support.apple.com/downloads/#safari">Safari</a><%= additionalText %>',UnsupportedFeatureDialogNoText:".",UploadDocErrorDialogText:"Usluga za učitavanje ove vrste datoteke trenutno je izvan mreže. Pokušajte ponovo kasnije.",SignInToUploadDocDialogText:"Morate se prijaviti kako biste mogli učitati tu vrstu datoteke.",UnsupportedFileFormatDialogText:"Format datoteke nije podržan.",UploadErrorText:"pogreška u sloju za učitavanje",DefaultError401Text:"Odjavljeni ste. Prijavite se i pokušajte ponovo.",DefaultErrorDialogText:"Došlo je do neočekivane pogreške na poslužitelju. Ponovo učitajte stranicu i pokušajte ponovo.<%= additionalText %><%= additionalRef %>",DefaultErrorDialogAdditionalText:"<br><br><%= additionalText %>",DefaultErrorDialogLogRefText:"<br><br>[ref: <%= logRef %>]",SignatureComplicatedText:"Vaš potpis sadržavao je nešto neočekivano. Pokušajte napraviti jednostavniji potpis.",SignaturePopupText:"za upotrebu potpisa.",ToolbarFeatureText:"za upotrebu palete alata.",UnsupportedPDFLearnMore:'<br><br><a target="_blank" href="https://helpx.adobe.com/acrobat-com/kb/supported-file-formats-fill-sign.html">Saznajte više</a>',LargeSignatureImage:"Slikovna je datoteka prevelika. Odaberite drugu datoteku koja je manja od <%= sizeLimit %> MB i pokušajte ponovo.",InvalidImage:"Ova slikovna datoteka nije podržana. Odaberite drugu datoteku i pokušajte ponovo.",CorruptedFile:"Ova je slikovna datoteka oštećena. Odaberite drugu datoteku i pokušajte ponovo.",ConflictDetected:"Uređujete zastarjelu verziju ovog obrasca. Želite li promjene zapisati preko obrasca?",OverwriteText:"Zapiši preko",DiscardText:"Odbaci",DownloadFormTitle:"Spremi PDF u datoteke servisa Adobe Document Cloud",DownloadFormToCloudTitle:"Spremi PDF u <%= cloudName %>",DownloadFormWarningTitle:"Preuzmi ispunjeni obrazac",DownloadFormNoItems:'Spremate se preuzeti obrazac koji nije ispunjen. Pritisnite "Nastavi" kako biste preuzeli prazan obrazac.',DownloadedFormToCloudTitle:"Saved to <%= cloudName %>",SaveForm:"Ispunjeni obrazac “<%= formName %>” spremljen je u datoteke na servisu Adobe Document Cloud.",SaveFormToCloud:"Ispunjeni obrazac “<%= formName %>” spremljen je u <%= cloudName %>.",PrintFormTitle:"Ispiši ispunjeni obrazac",DownloadFormToPrint:"Obrazac ne možete ispisati pomoću gumba za ispis u pregledniku. Obrazac preuzmite kao PDF, a zatim ga ispišite pomoću programa Adobe Reader.",DownloadButton:"Preuzmi",ConnectorBasedFormOpenedTitle:"Upozorenje",ConnectorBasedFormOpenedMessage:"Uređujete kopiju obrasca koja je spremljena u servisu Document Cloud. Spremanje tog obrasca napravit će PDF kopiju obrasca na izvornoj lokaciji.",NPSheader:"Recite nam više o svojem iskustvu",RecommendNotLikely:"Nimalo vjerojatno",RecommendLikely:"Vrlo vjerojatno",AskForRecommend:"Koliko je vjerojatno da ćete Adobe Fill & Sign preporučiti drugima?",NPSFeedback:"Što bi vas potaklo da nas preporučite drugima?",UpgradeDialogTitle:"Nadogradi",UpgradeDialogText:"Nadogradi za upotrebu mrežnih značajki","FR.signatureDoesNotExist":"Odaberite potpis koji želite staviti na obrazac"});