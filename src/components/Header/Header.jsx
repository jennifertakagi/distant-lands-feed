import styles from './Header.module.css';

import distantLandsFeedLogo from '../../assets/distant-lands-feed-logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={distantLandsFeedLogo} alt="Distant Lands Feed logo" />
      <p>Distant Lands Feed</p>
    </header>
  );
}
