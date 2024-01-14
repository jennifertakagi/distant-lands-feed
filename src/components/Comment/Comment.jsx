import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';

import jakeAvatar from '../../assets/jake-avatar.png';

import styles from './Comment.module.css';

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Avatar
        image={jakeAvatar}
      />

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

          <p>{comment.content}</p>
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
