import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <title>Global Grub Hub</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}