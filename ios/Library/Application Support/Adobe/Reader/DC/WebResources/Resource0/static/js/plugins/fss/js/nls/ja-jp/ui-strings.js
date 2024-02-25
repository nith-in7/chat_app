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

define({FAF:"入力と署名",NullString:"",OK:"OK",Cancel:"キャンセル",Close:"閉じる",Continue:"続行",Delete:"削除",Accept:"同意する",Apply:"適用",Clear:"消去",Back:"戻る",Next:"次へ",Done:"完了",ParserError:"サーバーからの応答を理解できません。",ObjectNotFound:"要求されたオブジェクトまたは文書が見つかりません。",UnboundFormFound:"要求されたフォームを開くことができません。",UnsupportedFileType:"選択したファイル形式は、現在、サポートされていません。",UnsupportedPDFTooManyPages:"現在は、100 ページ未満のファイルのみをサポートしています。",UnsupportedPDFType:"選択した PDF ファイルは、現在、サポートされていません。",UnsupportedPDFTypeEditRestricted:"作成者が編集を許可しない制限を適用しているので、このファイルを処理できません。",UnsupportedPDFTypeEncrypted:"作成者が暗号化で保護しているので、このファイルを処理できません。",UnsupportedPDFTypeInvalid:"選択したファイルは、破損している可能性があります。",UnsupportedPDFTypeXFA:"現在サポートされていないダイナミック XFA ファイルが選択されました。代わりに、Adobe Reader または Acrobat から入力してみてください。",UnsupportedFileSize:"現在は、100 MB 未満のファイルのみをサポートしています。",CreatePDFFailed:"このファイルの処理中に問題が発生しました。PDF に変換してからもう一度選択してみてください。",Unauthorized:"要求された操作を実行する権限がありません。",BadRequest:"不明な問題が発生しました。もう一度やり直してください。",Timeout:"操作はタイムアウトしました。",Unknown:"予期しないエラーが発生しました。",FilledPDFSuffix:"_入力済み",ErrorDownloadingPDF:"入力が完了した PDF をダウンロードできません。<%= message %>",RestrictedEditPermission:"この PDF の元の作成者がファイルに使用制限を適用しているので、記入済み PDF を作成できません。",OutputFolderNotFound:"このフォームの元のフォルダーはもう存在しません。このフォームは、まずご使用のコンピューターにダウンロードしてください。",UnsupportedFileTypeTitle:"サポートされていないファイルタイプ",UnsupportedFileTypeMsg:"入力と署名モードでファイルを開くことができません。",OrganizerSubTitle:"フォームに簡単に入力および署名できます。",OrganizerSelectForm:"入力するフォームを選択",OrganizerSelectFormTitle:"フォームを選択",OrganizerRecentFiles:"最近使用したフォーム",OrganizerViewAll:"すべてを表示",OrganizerSampleForm:"サンプルフォーム",OrganizerSampleGuide:"入力するフォームがない場合は、サンプルフォームを試してください。",OrganizerSampleFileName:"サンプルメンバーシップ",FileFilterLabel:"ファイルタイプ : フォームに変換可能",AddSelectedBtnLabel:"開く",PrepareDocument:"文書の準備中...",OpenDocument:"フォームを開いています...",ToolBarTextTooltip:"テキストを入力",ToolBarCrossTooltip:"バツマーク",ToolBarCheckTooltip:"チェックマーク",ToolBarRoundRectTooltip:"丸",ToolBarLineTooltip:"線",ToolBarDotTooltip:"塗りつぶし点",ToolBarSignTooltip:"署名またはイニシャルフォーム",ToolBarFillSign:"入力と署名",ToolBarSign:"署名",ToolBarPrint:"印刷",ToolBarPrintTooltip:"PDF としてダウンロードして印刷",ToolBarDownload:"PDF としてダウンロード",ToolBarDownloadToComputer:"PDF をマイコンピューターにダウンロード",ToolBarDownloadToCloud:"PDF を <%= cloudName %> に保存",ToolBarDownloadToFiles:"PDF を Adobe Document Cloud ファイルに保存",ToolBarSavingDataMessage:"保存中...",ToolBarSavingGuide:"フォームは「<%= fileName %>」として保存されました",ToolBarSavedDataMessage:"自動保存",ToolBarAddSign:"署名を追加",ToolBarAddInitials:"イニシャルを追加",ToolBarSignatureSaved:"署名はここに保存されました。後で再度利用できます。",ToolBarInitialsSaved:"イニシャルはここに保存されました。後で再度利用できます。",HUDPreviousPage:"前のページ",HUDNextPage:"次のページ",HUDPageNumber:"ページ番号",HUDNumberOfPages:"ページ数",HUDFitPageWidth:"ページ幅に合わせる",HUDFitFullPage:"ページ全体に合わせる",HUDZoomIn:"拡大",HUDZoomOut:"縮小",HUDZoomLevel:"ズームレベル",HUDInvalidPage:"この文書に「<%= invalidPageNum %>」ページはありません。",changeSignatureStyle:"スタイルを変更",typeSignatureButtonLabel:"タイプ",drawSignatureButtonLabel:"手書き",importSignatureButtonLabel:"画像",importSignaturePlaceholder:"画像を選択",typeYourNamePlaceholder:"ここに名前を入力してください。",typeYourInitialsPlaceholder:"ここにイニシャルを入力してください。",signHerePlaceholder:"ここに署名",initialsHerePlaceholder:"ここにイニシャルを入力",saveSignature:"署名を保存",saveInitials:"イニシャルを保存",chooseSignatureTitle:"署名を選択",chooseInitialsTitle:"イニシャルを選択",chooseSignatureMessage:"アカウントに複数の署名が保存されています。保持する署名を選択してください。",chooseInitialsMessage:"アカウントに複数のイニシャルが保存されています。保持するイニシャルを選択してください。",removeAllSignatures:"すべての署名を削除",removeAllInitials:"すべてのイニシャルを削除",FormViewSendUsFeedback:"フィードバックを送信",FormViewTypeTextHere:"ここにテキストを入力",FormViewTextTooLongText:"フィールドごとの文字制限である <%= maxAllowedChars %> 文字を超えました。<br><br>このフィールドは、以前の値に戻されました。<br><br>このフィールドの隣または下に別のフィールドを作成して、超過した文字を保持できます。",FormViewTooManyFieldsText:"ページごとのフィールド数の上限である <%= maxAllowedFields %> フィールドを超えました。",FormViewFRInfo:"このフォームのフィールドを認識しました。<br/><br/>タブキーを使用してフィールド間を移動したり、スペースバーを使用してチェックボックスの選択を切り替えたりすることができます。任意の場所をクリックして新しいフィールドを作成することもできます。",SettingsUserDataHead:"マイプロファイル",SettingsUserDataDesc:"クリックすると、マイプロファイルに保存したすべての情報が消去されます",SettingsUserDataClear:"すべてを消去",SettingsUserDataClearConfirm:"すべてを消去",SettingsUserDataClearing:"消去中...",SettingsUserDataGuideClear:"マイプロファイルに記録されたすべての情報を消去します。この操作は取り消しできません。",SettingsUserDataConfirmHtml:"マイプロファイルに記録されたすべての情報を消去します。この操作は取り消しできません。",SettingsUserDataGuideCleared:"マイプロファイルに記録されたすべての情報が消去されました。いつでも新しい情報を入力できます。",SettingsAutocompleteHead:"候補",SettingsAutocompleteDesc:"クリックすると、入力したデータからの候補が消去されます",SettingsAutocompleteClear:"すべてを消去",SettingsAutocompleteClearConfirm:"すべてを消去",SettingsAutocompleteClearing:"消去中...",SettingsAutocompleteGuideClear:"入力したフォームから記録されたすべてのフォームラベルと候補が消去されます。この操作は取り消しできません。",SettingsAutocompleteGuideClearRdr:"入力したデータから記録されたすべての候補を消去します。この操作は取り消しできません。",SettingsAutocompleteConfirmHtml:"入力したデータから記録されたすべての候補が消去されます。この操作は取り消しできません。",SettingsAutocompleteGuideCleared:"記録された候補はすべて消去されました。",SettingsAutocompleteToggleDesc:"フォームラベルと入力された情報に基づいて単語または語句の候補を表示する",SettingsAutocompleteToggleDescRdr:"入力された情報に基づいて単語または語句の候補を表示する",SettingsRecognitionDataHead:"予測",SettingsRecognitionDataClear:"すべてを消去",SettingsRecognitionDataClearConfirm:"すべてを消去",SettingsRecognitionDataClearing:"消去中...",SettingsRecognitionDataGuideCleared:"予測用に記録されたすべての情報が消去されました。",SettingsRecognitionDataGuideClear:"予測用に記録されたすべての情報を消去します。この操作は取り消しできません。",SettingsRecognitionDataConfirmHtml:"予測用に記録されたすべての情報を消去します。この操作は取り消しできません。",SettingsGuideClearErr:"記録された情報または候補を消去できませんでした。",AutocompleteLabel_signature:"署名",AutocompleteLabel_initials:"イニシャル",FormViewBadCharText:"現在サポートされていない文字を入力しました。次の文字は、「#」に変更されました :<br><br><%= badChars %>",FormViewFlattenFormWarning:"署名やイニシャルを含むフォームを保存すると、既存のフォームフィールドを編集できなくなります。",UserDataTitle:"マイプロファイル",UserDataManage:"設定",UserDataSendUsFeedback:"フィードバックを送信",UserDataDragGuide:"項目をフォームにドラッグできます。",UserDataSaveMessage:"プロファイルとフォームの情報はクラウドに保存されるので、フォームへの入力を簡単に行えます。<br/><br/>保存された情報を管理するには、「設定」をクリックします。",UserDataSaveErrorMessage:"プロファイルデータを保存できません","UserData.name":"名前","UserData.name.display_name":"氏名","UserData.name.first_name":"名","UserData.name.middle_name":"ミドルネーム","UserData.name.last_name":"姓","UserData.address":"住所","UserData.address.add":"住所を追加","UserData.address.new":"新しいアドレス","UserData.address.group_home":"ホーム","UserData.address.address_1":"番地","UserData.address.address_2":"建物名","UserData.address.city":"市区町村","UserData.address.state":"都道府県","UserData.address.zip":"郵便番号","UserData.address.country":"国","UserData.email":"電子メール","UserData.email.add":"電子メールを追加","UserData.email.new":"新しい電子メール","UserData.email.group_personal":"個人用","UserData.email.email":"電子メールアドレス","UserData.phone":"電話","UserData.phone.add":"電話を追加","UserData.phone.new":"新しい電話","UserData.phone.group_personal":"個人用","UserData.phone.phone":"電話番号","RHP.IPM.offline.title":"開始","RHP.IPM.offline.text":"ページをクリックしてフォームを入力するか、上のツールを選択してください。<br><br>将来使用するために返答を自動的に保存するには、サインインします。","RHP.IPM.offline.help":'<a target="_blank" href="https://www.adobe.com/go/fillsigngetstarted_jp">さらに詳しく</a>',"RHP.IPM.offline.signin":"サインイン","RHP.Send.title":"送信オプション","RHP.Send.track":"送信とトラック","RHP.Send.others":"署名を依頼",DblClkForSign:"ダブルクリックして署名",DblClkForInitials:"ダブルクリックしてイニシャルを記入",FailedToLoadSign:"署名にアクセスできませんでした。アプリケーションを終了してもう一度やり直してください。新しい署名の作成が必要な場合があります。",DownloadingPDF:"PDF をダウンロード中...",ImportingImage:"署名の画像を読み込み中...",GeneratingPDF:"入力済み PDF の生成中...",LoadingRHP:"情報を取得中...",DisconnectedMessageRHP:"インターネットへの接続が必要です。接続を確認してやり直してください。",DisconnectedBtnRHP:"再試行",GenericDialogTitle:"エラー",GenericWarningTitle:"警告",GenericDialogText:"原因不明のエラー",UnsupportedFeatureDialogTitle:"サポートされていないブラウザーです",UnsupportedFeatureDialogBrowser:"このブラウザーはサポートされていません。",UnsupportedFeatureDialogFeature:"この機能は、お使いのブラウザーではサポートされていません。",UnsupportedFeatureDialogText:'<%= browserOrFeature %><br><br>最新バージョンの <a href="https://www.google.com/intl/ja/chrome/browser/">Google Chrome</a>、<a href="http://windows.microsoft.com/ja-jp/internet-explorer/download-ie">Internet Explorer</a>、<a href="https://www.mozilla.org/ja/firefox">Firefox</a> または <a href="http://support.apple.com/ja_JP/downloads/#safari">Safari</a> にアップグレードしてください<%= additionalText %>',UnsupportedFeatureDialogNoText:"。",UploadDocErrorDialogText:"このタイプのファイルのアップロードサービスは、現在、オフラインです。後でもう一度やり直してください。",SignInToUploadDocDialogText:"このタイプのファイルをアップロードするには、サインインする必要があります。",UnsupportedFileFormatDialogText:"サポートされていないファイル形式です。",UploadErrorText:"アップロードでのエラー",DefaultError401Text:"サインアウトしています。サインインしてもう一度やり直してください。",DefaultErrorDialogText:"予期しないサーバーエラーです。ページを再読み込みしてから、もう一度やり直してください。<%= additionalText %><%= additionalRef %>",DefaultErrorDialogAdditionalText:"<br><br><%= additionalText %>",DefaultErrorDialogLogRefText:"<br><br>[ref: <%= logRef %>]",SignatureComplicatedText:"署名に予期しない要素が含まれています。もっとシンプルな署名を作成してください。",SignaturePopupText:"署名を使用します。",ToolbarFeatureText:"ツールパレットを使用します。",UnsupportedPDFLearnMore:'<br><br><a target="_blank" href="https://helpx.adobe.com/acrobat-com/kb/supported-file-formats-fill-sign.html">さらに詳しく</a>',LargeSignatureImage:"この画像ファイルは大きすぎます。<%= sizeLimit %> MB よりも小さい別のファイルを選択してやり直してください。",InvalidImage:"この画像ファイルはサポートされていません。別のファイルを選択してやり直してください。",CorruptedFile:"この画像ファイルは破損しています。別のファイルを選択してやり直してください。",ConflictDetected:"このフォームの旧版を編集しています。フォームを変更した内容で上書きしますか？",OverwriteText:"上書き",DiscardText:"破棄",DownloadFormTitle:"PDF を Adobe Document Cloud ファイルに保存",DownloadFormToCloudTitle:"PDF を <%= cloudName %> に保存",DownloadFormWarningTitle:"入力済みフォームをダウンロード",DownloadFormNoItems:"入力が済んでいないフォームをダウンロードしようとしています。「続行」をクリックして、空のフォームをダウンロードしてください。",DownloadedFormToCloudTitle:"Saved to <%= cloudName %>",SaveForm:"入力済みフォーム「<%= formName %>」は、Adobe Document Cloud ファイルに保存されました。",SaveFormToCloud:"入力済みのフォーム「<%= formName %>」は、<%= cloudName %> に保存されました。",PrintFormTitle:"入力済みフォームを印刷",DownloadFormToPrint:"ブラウザーの印刷ボタンを使用してフォームを印刷することはできません。フォームを PDF としてダウンロードしてから、Adobe Reader を使用して印刷してください。",DownloadButton:"ダウンロード",ConnectorBasedFormOpenedTitle:"警告",ConnectorBasedFormOpenedMessage:"Document Cloud に保存されたこのフォームのコピーを編集しています。このフォームを保存すると、元の場所にこのフォームの PDF のコピーが作成されます。",NPSheader:"エクスペリエンスについてお聞かせください",RecommendNotLikely:"まったく勧めない",RecommendLikely:"強く勧める",AskForRecommend:"Adobe Fill & Sign を他のユーザーに勧めたいと思いますか。",NPSFeedback:"他のユーザーに勧めたい項目は何ですか。",UpgradeDialogTitle:"アップグレード",UpgradeDialogText:"アップグレードしてオンライン機能を使用","FR.signatureDoesNotExist":"フォームに入力する署名を作成してください"});