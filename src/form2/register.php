<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

// 以下はオプションリクエストに対する応答
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit;
}

// SQLiteデータベースへの接続
try {
    $db = new SQLite3('./data/user.db');
} catch (Exception $e) {
    die($e->getMessage());
}

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
