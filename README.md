# アプリを立ち上げるまで

* プロジェクト直下で以下のコマンドを実行し、必要な依存ファイルをインストールしてください。
```
npm install
```

* .env.exampleファイルをコピーして.envファイルを作成してください。
```
cp .env.example .env
```

* docker-composeを使用してアプリを立ち上げます。
```
docker-compose up --build
```

* 以下のURLにアクセスして通信が返ってくるか確認してください。
```
localhost:3000/api
```
