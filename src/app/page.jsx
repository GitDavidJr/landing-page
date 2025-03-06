import { Header } from '@/components/header';
import Head from 'next/head'; // Correção
import "../style/globals.scss";
import Welcome from '@/components/welcome';
import Features from '@/components/features';
import Contato from '@/components/contato';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='styles.container'>
      <Head> {/* Correção */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                emailjs.init({
                  publicKey: "4NpCzVVu9XRNP95mU",
                });
              })();
            `,
          }}
        />
      </Head>
      <Header />
      <Welcome />
      <Features />
      <Contato />
      <Footer />
    </div>
  );
}
