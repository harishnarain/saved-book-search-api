# Saved Searches API - Saved Searches for Yet another book search

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is the accompanying CRUD API that accompanies the Yet Another Book Search project available here: https://github.com/harishnarain/book-search

## Table of Contents

- [Saved Searches API - Saved Searches for Yet another book search](#saved-searches-api---saved-searches-for-yet-another-book-search)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation

1. Clone this GitHub repository

   ```
   git@github.com:harishnarain/saved-book-search-api.git
   ```

2. Install all dependent npm packages

   ```
   npm install --save
   ```

3. Run the development server

   ```
   npm start
   ```

4. Add MongoDB connection string as MONGODB_URI to .env file or hosting platform environment variables.

5. If deploying to a hosting platform follow the instructions of that platform for deploying React apps

## Usage

REST API interface with the following:

ADD route: [POST] /api/books
DELETE route: [DELETE] /api/books/<id of document from MongoDB>
GET route: [GET] /api/books or /api/books/<id of document from MongoDB>

A demo of the application is available at: https://cryptic-springs-62387.herokuapp.com/

## License

This project uses the MIT license

## Contributing

Pull requests are welcome

## Questions

Checkout my GitHub [profile](https://github.com/harishnarain)

Please feel free to email at: <harishnarain@gmail.com>
