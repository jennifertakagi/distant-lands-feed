import styles from './Header.module.css';

import socialMediaLogo from '../../assets/social-feed-logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={socialMediaLogo} alt="Social Feed" />
      <p>Social Feed</p>
    </header>
  );
}
