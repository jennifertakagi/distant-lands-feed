import { ThumbsUp, Trash } from 'phosphor-react';

import jakeAvatar from '../../assets/jake-avatar.png';

import styles from './Comment.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src={jakeAvatar} alt="Jake, the dog" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jake, the dog</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">About 1 hour ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Great! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
