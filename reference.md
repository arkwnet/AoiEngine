# AoiEngine リファレンス（日本語）

## 関数

### AoiInit(id)

id : 使用するcanvasのID (String)

AoiEngineを初期化します。最初にこの関数を実行して下さい。

### main

毎フレーム実行される関数です。後述のAoiMain関数が途中で呼び出す関数ですので、内容に関係なく必ず用意してください。

### AoiMain

AoiEngineの内部で使用する関数です。外部からは実行しないで下さい。

### AoiDrawImage(img, x, y)

img : 表示する画像 (Image)  
x : 表示先のX座標 (int)  
y : 表示先のY座標 (int)

画像を描画します。

### AoiDrawText(text, x, y, color, font)

text : 表示する文字列 (String)  
x : 表示先のX座標 (int)  
y : 表示先のY座標 (int)  
color : 塗り色 (String)  
font : フォント (String)

文字を描画します。

### AoiDrawBox(x, y, w, h)

x : 表示先のX座標 (int)  
y : 表示先のY座標 (int)  
w : 表示する図形の幅 (int)
h : 表示する図形の高さ (int)

塗りつぶし四角形を描画します。

### AoiSetColor(color)

color : 設定する色 (string)

塗りつぶしに使用する色を変更します。

### AoiGeneratePNGImage

戻り値 : base64形式に変換したcanvasのPNG画像 (string)

canvasをPNG画像に変換し、base64形式で返します。


## 変数

### AoiVersion
AoiEngineのバージョンです。

### AoiWidth
使用しているcanvasの幅 (px) です。

### AoiHeight
使用しているcanvasの高さ (px) です。

### AoiFrame
実行開始からの経過フレーム数です。60フレーム経過すると0に戻ります。

### AoiTime
実行開始からの経過時間です。60フレーム = 1秒で計算しています。