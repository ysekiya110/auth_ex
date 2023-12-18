<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: text/plain; charset=utf-8");
header('Content-Type: application/json');


$databasePath = './data/user.db';

// SQLiteデータベースへの接続
try {
    $db = new SQLite3($databasePath);
} catch (Exception $e) {
    die($e->getMessage());
}

// テーブルが存在しない場合は作成する
$query = "CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    secret TEXT
)";
$db->exec($query);

// GETリクエストからデータを取得
$username = $_GET['username'] ?? '';
$secret = $_GET['secret'] ?? '';

// データベースにデータを挿入
$query = "INSERT INTO users (username, secret) VALUES (:username, :secret)";
$stmt = $db->prepare($query);
$stmt->bindParam(':username', $username, SQLITE3_TEXT);
$stmt->bindParam(':secret', $secret, SQLITE3_TEXT);

if ($stmt->execute()) {
    echo 'Data inserted successfully.';
} else {
    echo 'Error inserting data.';
}

// データベース接続を閉じる
$db->close();
?>
