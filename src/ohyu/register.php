<?php
// SQLiteデータベースへの接続
try {
    $db = new PDO('sqlite:./data/user.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}

// テーブルの作成（すでに存在している場合は無視）
$query = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, number TEXT)';
$db->exec($query);

// GETリクエストがあるかどうか確認
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // パラメータからデータを取得
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $secret = isset($_GET['secret']) ? $_GET['secret'] : '';

    // データの挿入
    $query = 'INSERT INTO users (username, number) VALUES (:username, :number)';
    $stmt = $db->prepare($query);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':number', $secret, PDO::PARAM_STR);

    try {
        $stmt->execute();
        echo 'データが正常に保存されました。';
    } catch (PDOException $e) {
        echo 'データの保存中にエラーが発生しました: ' . $e->getMessage();
    }
}

// データベース接続を閉じる
$db = null;
?>
