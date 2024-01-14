import jakeAvatar from '../../assets/jake-avatar.png';

import { Comment } from '../Comment';

import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={jakeAvatar} />
          <div className={styles.authorInfo}>
            <strong>Jake, the dog</strong>
            <span>Magic Dog</span>
          </div>
        </div>

        <time title="January, 14th at 02:00pm" dateTime="2024-01-14 02:00:00">Published 1 hour ago</time>
      </header>

      <div className={styles.content}>
        <p>Hey folks 👋</p>
        <p>I've just cooked tons of bacon pancakes this morning, waiting for you to get a brunch together!</p>
        <p>
          <a href="">#bacon-pancakes</a>{' '}
          <a href="">#brunch-time</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>

        <textarea
          placeholder="Write here..."
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
