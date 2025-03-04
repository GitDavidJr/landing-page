import { Header } from '@/components/header';
import "../style/globals.scss";
import Welcome from '@/components/welcome';
import Features from '@/components/features';
import Contato from '@/components/contato';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <div className='styles.container'>
      <Header />
      <Welcome />
      {/* <Features /> */}
      {/* <Contato /> */}
      {/* <Footer /> */}
    </div>
  );
}
