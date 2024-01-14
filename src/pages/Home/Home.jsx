import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import '../../styles/global.css';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
  )
}
