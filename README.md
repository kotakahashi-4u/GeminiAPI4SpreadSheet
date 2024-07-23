# GeminiAPI4SpreadSheet

## プロジェクトについて

Google Apps Scriptを用いて、スプレッドシートの拡張関数を定義する。

## 使い方
1. スプレッドシートのコンテナバインド型としてGASを開く。
2. GASにmain.gsの内容をコピーする。
3. GEMINI_APIの値を以下「環境変数の一覧」を参考に変更する。
4. スプレッドシートから =GeminiHelp(XX, YY) と打ち込むことでGeminiから情報を取得する。

## 環境変数の一覧
### GEMINI_API
以下手順により作成する（詳細はYoutubeを参照のこと）。
1. [Google AI Studio](https://ai.google.dev/aistudio)にアクセスする。
2. [Get API Key]よりGemini呼び出し用のAPIキーを作成する。
