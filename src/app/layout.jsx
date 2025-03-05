import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto',
});


export default function Layout({ children }) {
    return (
      <html>
        <body className={roboto.variable}>
          {children}
        </body>
      </html>
    );
  }