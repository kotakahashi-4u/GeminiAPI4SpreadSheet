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
以下手順により作成する（詳細はYoutubeを参照のこと）。なお、すでにGoogle Cloud プラットフォームにてプロジェクト作成済みの方は以下3より対象。
1. [Google Cloud プラットフォーム](https://console.cloud.google.com/?hl=ja)へ参加する。
2. Google Cloud プラットフォーム上でプロジェクトを作成する。
3. [Google AI Studio](https://ai.google.dev/aistudio)からAPIキーを作成する。
