<?php
/**
 * Created by PhpStorm.
 * User => nemanja
 * Date => 12.1.18.
 * Time => 18.24
 */
header("Access-Control-Allow-Origin: *");

$contacts = [
    [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'email' => 'john@example.com'
    ],
    [
        'firstName' => 'Daniel',
        'lastName' => 'Ros',
        'email' => 'daniel@example.com'
    ],
    [
        'firstName' => 'Martin',
        'lastName' => 'Hess',
        'email' => 'martin@example.com'
    ],
    [
        'firstName' => 'Martin',
        'lastName' => 'Hessaa',
        'email' => 'martin@example.com'
    ],
    [
        'firstName' => 'Nemanja',
        'lastName' => 'Bojanic',
        'email' => 'nemanjabojanic@example.com'
    ]
];

    echo(json_encode($contacts));