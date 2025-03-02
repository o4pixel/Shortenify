# URL Shortener

A simple URL shortener built with `Node.js`, `Express`, and `MongoDB`.

## Features
- Shorten long URLs.
- Redirect short URLs to their original destinations.
- Stores URLs in MongoDB.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/url-shortener.git
   ```
2. Navigate to the project folder:
   ```sh
   cd url-shortener
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=your-mongodb-uri
   ```
5. Start the server:
   ```sh
   node server.js
   ```

## API Endpoints
### Shorten a URL
**POST** `/shorten`
- **Body:** `{ "originalUrl": "https://example.com" }`
- **Response:** `{ "originalUrl": "https://example.com", "shortUrl": "http://localhost:5000/abc123" }`

### Redirect to Original URL
**GET** `/:shortUrl`
- Redirects to the stored original URL.

## License
This project is open-source.

## Contact
For issues or suggestions, open an issue on the [GitHub repository](https://github.com/o4pixel/Shortenify/).

