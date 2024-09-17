# My React App

This is a ReactJS application that fetches data from the "example.com/api/v2" endpoint using JWT authorization code. It includes a login page and an authenticated page that renders a table of users with pagination, using data fetched from the "example.com/api/v2/users" endpoint.

## Project Structure

```
my-react-app
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── AuthenticatedPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── UserTable.tsx
│   ├── context
│   │   └── AuthContext.tsx
│   ├── hooks
│   │   └── useAuth.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── tests
│   ├── AuthenticatedPage.test.tsx
│   ├── LoginPage.test.tsx
│   └── UserTable.test.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-react-app.git
   ```

2. Install the dependencies:

   ```bash
   cd my-react-app
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

   This will start the React development server and open the application in your browser.

2. Navigate to the login page:

   Open your browser and go to `http://localhost:3000/login` to access the login page.

3. Authenticate:

   Enter your credentials and click the login button to authenticate using JWT authorization code.

4. Access the authenticated page:

   After successful authentication, you will be redirected to the authenticated page. Here, you will see a table of users with pagination, using data fetched from the "example.com/api/v2/users" endpoint.

## Testing

To run the tests, use the following command:

```bash
npm test
```

This will execute the test cases for the components `AuthenticatedPage`, `LoginPage`, and `UserTable`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.