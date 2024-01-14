import { PencilLine } from 'phosphor-react'

import { Avatar } from '../Avatar';

import jakeAvatar from '../../assets/jake-avatar.png';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1660836521245-cdb2156050e9?w=400&auto=format&fit=crop&q=50"
      />

      <Avatar
        hasBorder
        image={jakeAvatar}
        name="Jake, the dog"
        role="Magic Dog"
      />

      <footer>
        <button>
          <PencilLine size={20} />
          Edit profile
        </button>
      </footer>
    </aside>
  );
}
