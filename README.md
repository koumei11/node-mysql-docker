# アプリを立ち上げるまで

* プロジェクト直下で以下のコマンドを実行し、必要な依存ファイルをインストールしてください。
```
npm install
```

* プロジェクト直下に.envファイルを作成し以下の環境変数を設定してください、
```
PORT=3000
MYSQL_ROOT_PASSWORD=お好きなパスワード
MYSQL_DATABASE=sample-api-db
MYSQL_ROOT_USER=root
MYSQL_HOST=db
MYSQL_PORT=3306
```

* docker-composeを使用してアプリを立ち上げます。
```
docker-compose up --build
```

* 以下のURLにアクセスして通信が返ってくるか確認してください。
```
localhost:3000/api
```
