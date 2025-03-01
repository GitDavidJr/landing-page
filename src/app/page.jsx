import { Header } from '@/components/header';
import "../style/globals.scss";
import Welcome from '@/components/welcome';


export default function Home() {
  return (
    <div className='styles.container'>
      <Header />
      <Welcome />
    </div>
  );
}
