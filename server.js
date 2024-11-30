
// npmはnodePackageManagerの省略
// 自作webサーバーを開発するにあたってモジュールを使用する
// 今回はHTTPというモジュールを使用する

// package.jsonのscripts内を編集してサーバーを立てる
//package.jsonのscripts内にいろいろ書いてサーバー構築
// この場合ターミナルで「npm run start(下の名前)」と書いて実行すると...
// サーバーをたてることができる！
// ファイル→touch　フォルダ→mkdir

// インストールしたhttpモジュールを呼び出す
const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");
// fsは標準モジュールで、今回はindex.htmlファイルを読み込む処理に使う;
// そしてres.writeに書き込む
// そういう処理をしたら一度サーバーを落とす
// ↑の解決として、勝手にリロードしてくれるモジュールをインストールする

// webサーバーを作る
const server = http.createServer((req, res) => {
    // ブラウザからアクセスが来たときの処理を書く
    // ステータスコード（successの200）のヘッダー情報
    res.writeHead(200, { "Content-Type": "text/html" });
    // htmlのbody要素に書き込む情報
    res.write(html);
    res.end();

    // サーバーの用途によって処理を書き換えられる
    if (req.method == "GET") {

    }
    if (req.method == "POST") {

    }
});

server.listen(PORT, () => {
    console.log("server running");
});

// expressというフレームワークを使うことが一般的