const express = require('express');
const mysql = require('mysql2')
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the books_db database.`)
);

const questions = [
  inquirer(prompt) {
    [
      type: "list",

    ]
  }
]