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

define({SHOW:"Mostrar",OPEN_SELECTED:"Abrir seleccionado",SAVE:"Guardar",NEW_FOLDER:"Nueva carpeta",UPLOAD_FILE:"Cargar archivo",CANCEL_UPLOAD:"Cancelar carga",SORT:"Ordenar",SEARCH_HEADER:"<%= label%> (<%= count%>)",NO_FILES_IN_ROOT:"Actualmente no hay archivos en Document Cloud.",NO_FILES_IN_CONNECTOR:"Actualmente no hay archivos en <%= connector %>.",NO_FILES_IN_FOLDER:"Esta carpeta está vacía.",UPLOAD_TO_ACCESS:"Cargue archivos para acceder en cualquier lugar.",UNSUPPORTED_CONNECTOR_MSG:"<%= actionName %> actualmente no se admite para los archivos almacenados en <%= connectorLabel %>.",NO_SEARCH_RESULTS:"No hay resultados de la búsqueda.",NO_SEARCH_RESULTS_VIRGO:"No se ha encontrado ningún resultado.",TRY_DIFFERENT_SEARCH:"Pruebe una búsqueda diferente.",TRY_DIFFERENT_SEARCH_VIRGO:"Compruebe que esté bien escrito o intente realizar una búsqueda más genérica.",NO_SEARCH_RESULTS_FOLDER:"No hay archivos pertinentes en esta carpeta.",TOO_MANY_SEARCH_TERMS_HEADER:"Se ha superado el límite de consultas de búsqueda.",TOO_MANY_SEARCH_TERMS_MESSAGE:"Elimine algunas consultas de búsqueda para ver los resultados de la búsqueda.",NEW_FOLDER_TITLE:"Nueva carpeta",NEW_FOLDER_NAME_PLACEHOLDER:"Editar nombre de nueva carpeta",CREATE_FOLDER:"Crear carpeta",SORT_BY:"Ordenar por:",SORT_BY_FILE_NAME:"Nombre de archivo",SORT_BY_FILE_TYPE:"Tipo de archivo",SORT_BY_SIZE:"Tamaño",SORT_BY_DATE_ADDED:"Fecha de adición",SORT_BY_DATE_MODIFIED:"Fecha de modificación",SORT_BY_DATE_VIEWED:"Visualización",SORT_BY_DATE_OPENED:"Fecha de apertura",ASCENDING:"Ascendente",DESCENDING:"Descendente",SORTED_BY:"ORDENADO POR",PREVIEW_NEXT_PAGE:"Previsualizar la página siguiente",PREVIEW_PREVIOUS_PAGE:"Previsualizar la página anterior",DISPLAY:"Ordenar",VIEW_BY:"Visto por:",LIST:"Lista",THUMBNAIL:"Miniatura",SORT_BY_FILE_SIZE:"Tamaño de archivo",FILTER:"Filtro",FILTER_BY:"Filtrar por...",TAGS_TITLE:"Etiquetas: próximamente...",TAGS:"Etiquetas",SEARCH_TITLE:"Búsqueda de archivos",CLEAR_SEARCH_TITLE:"Borrar búsqueda",SEARCH_RESULTS:"Resultados de la búsqueda...",SEARCH_RESULTS_COUNT:"Resultados de la búsqueda (<%= count %>)",SEARCH_RESULTS_UNAVAILABLE:"Los resultados de la búsqueda no están disponibles",ADD_FILTER:"Añadir filtro",REMOVE_FILTER:"Eliminar filtro",SELECT_ATTRIBUTE:"Seleccionar atributo",SELECT_VALUE:"Seleccionar valor",SELECT_FORMAT:"Seleccionar formato",SELECT_DATES:"Seleccionar fechas",SELECT_TOOL:"Seleccionar herramienta",ENTER_VALUE:"Introducir valor",SEARCH:"Buscar",EXPORT_FROM_PDF:"Exportar PDF",CONVERT_TO_PDF:"Crear PDF",COMBINE_TO_PDF:"Combinar archivos",FILL_SIGN:"Rellenar y firmar",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",MARK_AS_FAVORITE:"Marcar como favorito",FILE_INFO:"Información de archivo",TYPE:"Texto",ADDED:"Añadido",MODIFIED:"Modificado",PAGES:"Páginas",SIZE:"Tamaño",SHARING_LINK:"Vínc. uso comp.",UNSHARE:"no comp.",MARK_AS_FAVORITE_COMING_SOON:"Marcar como favorito: próximamente...",COMING_SOON:"Próximamente...",PREV_PAGE_TITLE:"Página anterior",NEXT_PAGE_TITLE:"Página siguiente",PAGE_NUM_TITLE:"Número de página",PAGE_NUM_SEPARATOR:"/",PAGE_COUNT_TITLE:"Número de páginas",ZOOM_OUT_TITLE:"Reducir",ZOOM_IN_TITLE:"Ampliar",SCROLL_PAGES_TITLE:"Desplazar páginas",FIT_PAGE_WIDTH_TITLE:"Ajustar anchura de la página",FIT_FULL_PAGE_TITLE:"Ajustar página completa",SHOW_RHP:"Mostrar el panel derecho",HIDE_RHP:"Ocultar el panel derecho",SHOW_FILE_INFO:"Mostrar información de archivo",HIDE_FILE_INFO:"Ocultar información de archivo",SHOW_IMAGE_PREVIEW:"Mostrar vista previa clásica",SHOW_NGDOC_PREVIEW:"Mostrar vista previa mejorada",UNDOCK:"Desacoplar",DOCK_TO_BOTTOM:"Acoplar a la parte inferior",ZERO_ITEMS:"0 elementos",ONE_FILE:"1 archivo",N_FILES:"<%= numFiles %> archivos",ONE_FOLDER:"1 carpeta",N_FOLDERS:"<%= numFolders %> carpetas",ONE_FOLDER_ONE_FILE:"1 carpeta, 1 archivo",ONE_FOLDER_N_FILES:"1 carpeta, <%= numFiles %> archivos",N_FOLDERS_ONE_FILE:"<%= numFolders %> carpetas, 1 archivo",N_FOLDERS_N_FILES:"<%= numFolders %> carpetas, <%= numFiles %> archivos",UPLOADING:"Cargando...",PROCESSING:"Procesando...",SHARED:"Compartido",MAKE_PUBLIC:"Hacer público",MAKE_PRIVATE:"Hacer privado",PRIVATE:"Privado",PUBLIC:"Público",SHARE_FILES_PRIVATE_TEXT:"Los archivos seleccionados son privados y solo puede revisarlos usted.",SHARE_FILE_PRIVATE_TEXT:"El archivo seleccionado es privado y únicamente puede verlo usted.",SHARE_FILES_PUBLIC_TEXT:"Los archivos seleccionados son públicos y cualquier usuario con los siguientes vínculos puede ver los archivos.",SHARE_FILE_PUBLIC_TEXT:"El archivo seleccionado es público y cualquier persona que tenga el siguiente enlace puede verlo.",SHARE_FILES_MIXED_TEXT:"Los archivos seleccionados incluyen archivos públicos y privados. Haga clic en uno de los siguientes botones para compartir o dejar de compartir todos los archivos.",EMAIL_BUTTON_SINGLE:"Enlace de correo electrónico",EMAIL_BUTTON_MULTI:"Enviar enlaces por correo electrónico",EMAIL_LINK:"Correo electrónico",SAVE_BUTTON:"Cerrar",SHARE_FILES_ERROR:"Se ha producido un error al cambiar el estado de uso compartido del archivo(s): <%= error %>",SHARE_FILES_SESSION_TIMEOUT:'La sesión ha caducado. Haga clic en "Cerrar" para volver a la página de inicio de sesión.',SHARE_FILE_EMAIL_BODY:"Para ver el archivo, haga clic en el siguiente enlace:",SHARE_FILES_EMAIL_BODY:"Para ver los archivos, haga clic en los siguientes enlaces:",SHARE_FILE_EMAIL_SUBJECT:"<%= firstName %> <%= lastName %> ha compartido un archivo con usted.",SHARE_FILES_EMAIL_SUBJECT:"<%= firstName %> <%= lastName %> ha compartido archivos con usted.",SHARE_FILES_AV_DISALLOWED:'Se ha producido un error en el uso compartido del archivo "<%= filename %>" porque no se permite el uso compartido de los archivos de audio y vídeo.',SHARE_FILES_SHARING_DISALLOWED:'Se ha producido un error al compartir el archivo "<%= filename %>" porque no se permite su uso compartido.',FOLDER_UPLOAD_NOT_SUPPORTED_TITLE:"Carga de carpeta no disponible",FOLDER_UPLOAD_NOT_SUPPORTED_MSG:"No se ha podido completar la solicitud de carga. La carga de una carpeta no se admite actualmente.",FILE_UPLOAD_FAILED_TITLE:"Error en la carga de archivo",FILE_UPLOAD_FAILED_MSG:"No se ha podido completar la solicitud de carga. Puede que haya intentado cargar un archivo demasiado grande o una carpeta.",FILE_OFFLINE_TITLE:"No dispone de conexión a Internet.",FILE_OFFLINE_CONTENT:"Para acceder a los archivos compartidos, conéctese a Internet e inténtelo de nuevo.",FILE_OFFLINE_OK_LABEL:"Reintentar",FILE_OFFLINE_ARIA_LABEL:"No hay conexión a Internet. Inténtelo de nuevo.",FILENAME_TEXT:"Nombre de archivo",RESTRICT_EDITING:"Restringir edición",REDUCE_FILE_SIZE:"Reducir tamaño de archivo",EXPORT_FILE_FORMAT:"Formato de archivo",EXPORT_SETTINGS:"Configuración",EXPORT_VIEW_RESULT:"Abrir archivo tras la exportación",SHARED_FILE_OVERWRITE_WARNING:"Existe un archivo compartido con el mismo nombre en esta carpeta, que no se puede sustituir. Use otro nombre.",FILES_SIGN_OUT_TITLE:"Nube de Adobe",FILES_SIGN_OUT_CONTENT:"Inicie sesión para acceder a los archivos",FILES_SIGN_IN_LABEL:"Iniciar sesión ahora",CCLOUD_SIGN_OUT_TITLE:"Creative Cloud",CCLOUD_SIGN_OUT_CONTENT:"Inicie sesión para acceder a los archivos",FILES_NO_ACCESS_TITLE:"Sin acceso al servicio",FILES_NO_ACCESS_MESSAGE:"No tiene acceso a este servicio. Póngase en contacto con el administrador de TI para obtener acceso o intente ",FILES_NO_ACCESS_SIGN_IN_LINK:"Iniciar sesión con su Adobe ID.",MANAGE_DOCUMENTS_SENT_FOR_SIGNATURE:"Administrar los documentos enviados para firmar",ENCRYPTION_KEY_DISABLED_TITLE:"Contenido no disponible debido a las restricciones en vigor por parte de la empresa",ENCRYPTION_KEY_DISABLED_MESSAGE:"Se ha revocado la clave de encriptación y el contenido ya no está disponible. Póngase en contacto con el administrador para que vuelva a habilitar la clave de encriptación e inténtelo de nuevo.",VIRGO_DOCUMENT_CLOUD:"Nube de Adobe",VIRGO_SCANS:"Digitalizaciones",VIRGO_NAME:"NOMBRE",VIRGO_HDR_SHARE:"ACCESO",VIRGO_MODIFIED:"FECHA DE MODIFICACIÓN",VIRGO_SIZE:"TAMAÑO",VIRGO_CREATIVE_CLOUD:"Adobe Creative Cloud",VIRGO_SHAREPOINT:"Sitio de SharePoint",VIRGO_DROPBOX:"Dropbox",VIRGO_GOOGLE_DRIVE:"Google Drive",VIRGO_BOX:"Box",VIRGO_ONEDRIVE:"OneDrive",VIRGO_LIST_VIEW:"Vista de lista",VIRGO_THUMBNAIL_VIEW:"Vista de miniatura",VIRGO_ADOBE_SCAN:"Adobe Scan",OPTIMIZE_CHECKBOX_COACKMARK_TITLE:"Reducir el tamaño de su archivo",OPTIMIZE_CHECKBOX_COACKMARK_CONTENT:"El tamaño de este archivo es superior a <%= fileSizeInMB %> MB. Reduzca el tamaño del archivo antes de enviárselo a otros usuarios."});