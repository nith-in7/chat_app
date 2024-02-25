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

define({IDENTITY_LIST_HEADER_TEXT:"Signatura amb un ID digital",IDENTITY_LIST_DESCRIPTION:"Trieu l'ID digital que voleu fer servir per a la signatura:",REFRESH_BUTTON_TEXT:"Actualitza",CANCEL_BUTTON_TEXT:"Cancel·la",BACK_BUTTON_TEXT:"Enrere",CONTINUE_BUTTON_TEXT:"Continua",SAVE_BUTTON_TEXT:"Desa",CREATE_NEW_BUTTON_TEXT:"Crea un ID digital nou",CONFIGURE_NEW_BUTTON_TEXT:"Configura l'ID digital nou",MANAGE_DIGITAL_ID_BUTTON_TEXT:"Administra l'ID digital",HELP_BUTTON_TEXT:"Ajuda",VIEW_DETAILS_LINK_TEXT:"Mostra'n els detalls",NO_IDENTITY_LABEL:"No s'ha trobat cap identitat. Creeu-ne una de nova.",CONFIGURE_DIALOG_HEADER:"Configuració d'un ID digital per a la signatura",CONFIGURE_DIALOG_LEFT_SIDE_DESCIPTION:"Es necessita un ID digital per crear una signatura digital. Els ID digitals més segurs pertanyen a entitats de certificació de confiança i es basen en dispositius de seguretat com ara les targetes intel·ligents i els testimonis. Alguns també es basen en fitxers.",CONFIGURE_DIALOG_LEFT_SIDE_SUB_DESCIPTION:"També podeu crear un ID digital nou, però el nivell de garantia de la identitat que ofereix és baixa.",CONFIGURE_DIALOG_OPTIONS_INTRO:"Seleccioneu el tipus d'ID digital:",CONFIG_OPTION_1_HEADING:"Ús d'un dispositiu de creació de signatures",CONFIG_OPTION_1_SUB_HEADING:"Configureu una targeta intel·ligent o un testimoni connectats a l'ordinador.",CONFIG_OPTION_2_HEADING:"Ús d'un ID digital des d'un fitxer",CONFIG_OPTION_2_SUB_HEADING:"Importeu un ID digital existent des d'un fitxer.",CONFIG_OPTION_3_HEADING:"Creació d'un ID digital nou",CONFIG_OPTION_3_SUB_HEADING:"Creeu el vostre ID digital signat automàticament.",SIGNATURE_CREATION_DEVICE_DIALOG_HEADER:"Ús d'un dispositiu de creació de signatures",SIGNATURE_CREATION_DEVICE_DIALOG_LEFT_SIDE_DESCIPTION:"Els ID digitals del maquinari dels dispositius de creació de signatures, com ara els testimonis USB i les targetes intel·ligents, han d'estar disponibles automàticament per al seu ús quan el dispositiu en qüestió estigui connectat correctament.",SIGNATURE_CREATION_DEVICE_DIALOG_LEFT_SIDE_SUB_DESCIPTION:"Seguiu els passos següents o sol·liciteu ajuda al fabricant del dispositiu en cas que s'hagi de configurar res més.",SIGNATURE_CREATION_OPTION_1_HEADING:"Adquisició d'un dispositiu de signatures d'un soci",SIGNATURE_CREATION_OPTION_1_SUB_HEADING:"Si no teniu cap dispositiu de signatures, podeu adquirir-ne un dels nostres socis. ",SIGNATURE_CREATION_OPTION_2_HEADING:"Descàrrega i instal·lació dels controladors",SIGNATURE_CREATION_OPTION_2_SUB_HEADING:"Assegureu-vos que hàgiu descarregat i instal·lat tots els controladors que siguin necessaris. Si necessiteu ajuda, aneu al lloc web del fabricant del controlador.",SIGNATURE_CREATION_OPTION_3_HEADING:"Connexió del dispositiu de signatura",SIGNATURE_CREATION_OPTION_3_SUB_HEADING:"Assegureu-vos que el dispositiu de signatura estigui connectat correctament a l'ordinador. És possible que les targetes intel·ligents necessitin disposar d'un lector.",CONNECTED_HARDWARE_HEADING:"Maquinari connectat",CONNECTED_HARDWARE_SUB_HEADING:"Assegureu-vos que el dispositiu estigui connectat a l'ordinador mitjançant un port USB",CONNECTED_DEVICE_DRIVER_HEADING:"Descàrrega i instal·lació dels controladors",CONNECTED_DEVICE_DRIVER_SUB_HEADING:"Assegureu-vos que hàgiu descarregat i instal·lat tots els controladors que siguin necessaris. Si necessiteu ajuda, aneu al lloc web del fabricant del controlador.",CONNECTED_DEVICE_ORDER_HEADING:"Adquiriu un dispositiu d'un soci",CONNECTED_DEVICE_ORDER_SUBHEADING:"Si no disposeu d'un dispositiu connectat, podeu adquirir-ne un d'algun dels nostres socis.",FIND_DIGITAL_ID_HEADER:"Cerca d'un fitxer d'ID digital",FIND_DIGITAL_ID_BROWSE_HEADING:"Cerqueu un fitxer d'ID digital. Els ID digitals estan protegits amb contrasenya. No podreu accedir a l'ID digital sense la contrasenya.",FIND_DIGITAL_ID_PASSWORD_HEADING:"Escriviu la contrasenya de l'ID digital",BROWSE_BUTTON:"Explora",FIND_DIGITAL_ID_LEFT_PANE_DESCIPTION:"Normalment, els fitxers d'ID digital tenen l'extensió PFX o P12 i contenen el fitxer de la clau pública (certificat) i el de la privada (certificat) que hi estigui associat.",FIND_DIGITAL_ID_LEFT_PANE_SUB_DESCIPTION:"Per signar amb un ID digital disponible com a fitxer, seguiu les instruccions en què s'indiquen els passos per cercar i seleccionar el fitxer i, després, introduïu la contrasenya amb què es protegeix la clau privada.",CREATE_LOCAL_CERTIFICATE_HEADER:"Creació d'un ID digital signat automàticament",ADD_DIGITAL_ID_FILE_HEADER:"Afegir ID digitals des d'un fitxer",ADD_DIGITAL_ID_SIGNATURE_DEVICE_HEADER:"Afegir ID digitals des d'un dispositiu de creació de signatures",ADD_DIGITAL_ID_DESC:"L'ID digital següent s'afegirà a la llista dels que podeu fer servir per signar documents de manera digital:",SAVE_DIGITAL_ID_HEADER:"Deseu l'ID digital signat automàticament en un fitxer",SAVE_DIGITAL_ID_BROWSE_HEADING:"L'ID digital es desarà a la ubicació següent:",SAVE_DIGITAL_ID_PASSWORD:"Apliqueu la contrasenya per protegir l'ID digital:",SAVE_DIGITAL_ID_CONFIRM_PASSWORD:"Confirmeu la contrasenya:",CREATE_OPTIONS_HEADER:"Selecció de la destinació de l'ID digital nou",CREATE_OPTIONS_LEFT_PANE_DESCRIPTION:"Els ID digitals normalment pertanyen a entitats de certificació de confiança que garanteixen la validesa de la identitat.<br>És possible que els ID digitals signats automàticament no ofereixin les mateixes garanties, de manera que pot ser que en alguns casos no s'acceptin.",CREATE_OPTIONS_LEFT_PANE_SUB_DESCRIPTION:"Consulteu els destinataris si es tracta d'una manera d'autenticació vàlida.",CREATE_FORM_LEFT_PANE_DESCRIPTION:"Escriviu la informació d'identitat que s'utilitzarà per crear l'ID digital signat automàticament.",CREATE_FORM_LEFT_PANE_SUB_DESCRIPTION:"Els ID digitals signats automàticament per individus no ofereixen cap garantia que la informació de la identitat sigui vàlida. És per això que pot ser que en alguns casos no s'acceptin.",SAVE_DIALOG_LEFT_PANE_DESCRIPTION:"Afegiu una contrasenya per protegir la clau privada de l'ID digital. Tornareu a necessitar la contrasenya per fer servir l'ID digital a l'hora de signar.",SAVE_DIALOG_LEFT_PANE_SUB_DESCRIPTION:"Deseu el fitxer d'identificació digital en una ubicació coneguda per poder copiar-lo o crear-ne una còpia de seguretat.",SAVE_TO_APPLE_KEYCHAIN_HEADER:"Desament en un Clauer d'Apple",SAVE_TO_APPLE_KEYCHAIN_DESC:"Deseu l'ID digital en un Clauer d'Apple per compartir-lo amb altres aplicacions.",SAVE_TO_FILE_HEADER:"Desar en un fitxer",SAVE_TO_FILE_DESC:"Deseu l'ID digital en un fitxer de l'ordinador.",SAVE_TO_WIN_HEADER:"Desament al magatzem de certificats del Windows",SAVE_TO_WIN_DESC:"Deseu l'ID digital al magatzem de certificats del Windows per compartir-lo amb altres aplicacions.",EXPIRE_TEXT:"Caduca",FILE_PASSWORD_ERROR:"La contrasenya no és correcta. Torneu a escriure-la.",SAVE_FILE_PASSWORD_MISMATCH:"Les contrasenyes no coincideixen.",ISSUED_BY_TEXT:"Emès per:",LEARN_MORE_TEXT:"Més informació",NAME_LABEL_TEXT:"Nom",ORG_UNIT_LABEL_TEXT:"Departament",ORG_NAME_LABEL_TEXT:"Nom de l'empresa",EMAIL_ADDRESS_LABEL_TEXT:"Adreça electrònica",COUNTRY_LABEL_TEXT:"País o regió",KEY_ALGO_LABEL_TEXT:"Algorisme clau",KEY_USAGE_LABEL_TEXT:"Ús de l'ID digital",NAME_PLACEHOLDER_TEXT:"Escriviu el nom...",ORG_UNIT_PLACEHOLDER_TEXT:"Escriviu el nom del departament...",ORG_NAME_PLACEHOLDER_TEXT:"Escriviu el nom de l'empresa...",EMAIL_ADDRESS_PLACEHOLDER_TEXT:"Escriviu l'adreça electrònica...",SIGN_AS_TEXT:"Signatura com a ",APPEARANCE_LABEL_TEXT:"Aparença",EDIT_BUTTON_TEXT:"Edita",CREATE_BUTTON_TEXT:"Crea",VIEW_CERTIFICATE_DETAILS_LABEL_TEXT:"Mostra els detalls del certificat",LOCK_DOCUMENT_AFTER_SIGNING_LABEL_TEXT:"Bloqueja el document després de signar-lo",REASON_LABEL_TEXT:"Motiu",LOCATION_LABEL_TEXT:"Ubicació",CONTACT_INFO_LABEL_TEXT:"Informació de contacte",PERMITTED_ACTION_AFTER_SIGNING_LABEL_TEXT:"Accions permeses després de la certificació",REVIEW_DOCUMENT_CONTENT_LABEL_TEXT:"Reviseu el contingut del document que pugui afectar la signatura.",DOCUMENT_HAS_BEEN_REVIEWED_LABEL_TEXT:"S'han revisat els avisos del document.",REVIEW_BUTTON_TEXT:"Revisió",SIGNING_DIALOG_PASSWORD_PLACEHOLDER_TEXT:"Escriviu el PIN o la contrasenya de l'ID digital...",SIGN_BUTTON_TEXT:"Signa",CUTOMIZE_DIALOG_TITLE_TEXT:"Personalització de l'aparença de la signatura",TEXT_BUTTON_TEXT:"Text",IMAGE_BUTTON_TEXT:"Imatge",DRAW_BUTTON_TEXT:"Dibuix",NONE_BUTTON_TEXT:"Cap",INCLUDE_TEXT_LABEL_TEXT:"Text inclòs",NAME_CHECKBOX_LABEL_TEXT:"Nom",DATE_CHECKBOX_LABEL_TEXT:"Data",LOCATION_CHECKBOX_LABEL_TEXT:"Ubicació",REASON_CHECKBOX_LABEL_TEXT:"Motiu",DN_CHECKBOX_LABEL_TEXT:"Nom distintiu",VERSION_CHECKBOX_LABEL_TEXT:"Versió de l'Adobe Acrobat:  ",LOGO_CHECKBOX_LABEL_TEXT:"Logotip",LABEL_CHECKBOX_LABEL_TEXT:"Etiquetes",DIGITS_FORMAT_LABEL_TEXT:"Format dels dígits",DIGITS_LABEL_TEXT:"Dígits",TEXT_DIRECTION_LABEL_TEXT:"Direcció del text",AUTO_LABEL_TEXT:"Automàtic",CLEAR_LABEL_TEXT:"Suprimeix",PRESET_NAME_TEXT:"Nom predefinit",OK_BUTTON_TEXT:"Accepta",CLICK_TO_DRAW_TEXT:"Clic aquí per dibuixar",APPLY_BUTTON_TEXT:"Aplica",INVALID_EMAIL_ADDRESS:"L'adreça electrònica no es vàlida.",PASSWORD_LENGTH_ERROR:"La contrasenya no és adequada. Ha de contenir almenys sis caràcters.",CERTIFICATE_ANNOT_WARNING:"Les anotacions es poden utilitzar per afegir elements visuals al document que poden arribar a semblar contingut original. Segur que voleu permetre l'addició d'anotacions després de certificar el document?"});