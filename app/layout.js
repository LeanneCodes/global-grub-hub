import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Global Gub Hub</title>
        {/* <link rel="icon" href="/LG_favicon.png" /> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}