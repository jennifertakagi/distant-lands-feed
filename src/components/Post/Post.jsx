import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import en from 'date-fns/locale/en-US';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './Post.module.css';

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState();

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'at' HH:mm'h'", {
    locale: en,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: en,
    addSuffix: true
  });

  const getContent = (line) => {
    if (line.type === 'paragraph') {
      return <p key={line.content}>{line.content}</p>;
    }

    return <p key={line.content}><a href="#">{line.content}</a></p>;
  }

  const handleCreateNewComment = () => {
    event.preventDefault()

    setComments([...comments, {
      content: newCommentText,
      id: comments.length + 1,
    }]);
    setNewCommentText('');
  }

  const handleNewCommentChange= () => {
    setNewCommentText(event.target.value);
  }

  const onDeleteComment = (commentId) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== commentId;
    })

    setComments(commentsWithoutDeletedOne);
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

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Leave a comment</strong>

        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          placeholder="Write here..."
          value={newCommentText}
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => <Comment
            comment={comment}
            key={comment.id}
            onDeleteComment={onDeleteComment}
          />
        )}
      </div>
    </article>
  );
}
