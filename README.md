# E-Commerce-Back-End

## Description

Back end for an e-commerce site using an Express.js API and Sequelize to interact with a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- Download the files in this repository
- Open the directory where the files are saved in git bash / terminal, run the following:

```bash
npm install
```

- Chcek your package.json and node_modules folder to ensure all dependencies have been installed

## Usage

- Use the `schema.sql` file in the `db` folder to create the ecommerce_db database with MySQL shell commands
- On your open git bash / terminal, run the following to create and seed the Category, Product, Tag, and ProductTags wit data:

```bash
npm run seed
```

- Once the tables are created and seeded, run the following to run the app locally:

```bash
npm run start
```

- Use Insomnia Core, or Postman, etc... To Get, Post, Put and Delete data within the ecommerce_db.

[Click here for a video walkthrough of this application](TBD)

- The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./assets/13-orm-homework-demo-01.gif)

- The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./assets/13-orm-homework-demo-02.gif)

- The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./assets/13-orm-homework-demo-03.gif)

## Credits

- [bahuisken](https://github.com/bahuisken/)
- Lessons from University of Denver Fullstack Coding Bootcamp

## License

None

## Contributing

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

N/A

## Questions

If you have any questions about the repo, open an issue or contact me directly at [brice.huisken@gmail.com](mailto:brice.huisken@gmail.com). You can find more of my work at [bahuisken](https://github.com/bahuisken/)
