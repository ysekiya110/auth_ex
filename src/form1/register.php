<?php

header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Access-Control-Allow-Credentials: true");
header("Content-Type: text/plain; charset=utf-8");

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
$username = isset($_GET['username']) ? $_GET['username'] : '';
$secret = isset($_GET['secret']) ? $_GET['secret'] : '';


// データベースにデータを挿入
$query = "INSERT INTO users (username, secret) VALUES (:username, :secret)";
$stmt = $db->prepare($query);
$stmt->bindValue(':username', $username, SQLITE3_TEXT);
$stmt->bindValue(':secret', $secret, SQLITE3_TEXT);

$response = array(); // Associative array to hold the response data

if ($stmt->execute()) {
    $response['status'] = 'success';
    $response['message'] = 'Data inserted successfully.';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Error inserting data.';
}

// Close the database connection
$db->close();

// // Send the response as JSON
echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>
