import { format, formatDistanceToNow } from 'date-fns';
import en from 'date-fns/locale/en-US';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './Post.module.css';

export const Post = ({ author, content, publishedAt }) => {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'at' HH:mm'h'", {
    locale: en,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: en,
    addSuffix: true
  });

  const getContent = (line) => {
    if (line.type === 'paragraph') {
      return <p>{line.content}</p>;
    }

    return <p><a href="#">{line.content}</a></p>;
  }

  return (
    <article className={styles.post}>
      <header>
        <Avatar
          hasBorder
          image={author?.avatarUrl}
          isInline
          name={author?.name}
          role={author?.role}
        />

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => getContent(line))}
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
      </div>
    </article>
  );
}
