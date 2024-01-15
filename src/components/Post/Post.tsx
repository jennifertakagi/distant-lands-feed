import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import en from 'date-fns/locale/en-US';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './Post.module.css';
import { IContent, IPost } from '../../data/posts';

interface PostProps {
  post: IPost;
}

interface Comment {
  id: number;
  content: string;
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  const { author, content, publishedAt, } = post;

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'at' HH:mm'h'", {
    locale: en,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: en,
    addSuffix: true
  });

  const getContent = (line: IContent) => {
    if (line.type === 'paragraph') {
      return <p key={line.content}>{line.content}</p>;
    }

    return <p key={line.content}><a href="#">{line.content}</a></p>;
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([...comments, {
      content: newCommentText,
      id: comments.length + 1,
    }]);
    setNewCommentText('');
  }

  const handleNewCommentChange= (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('This is a required field');
  }

  const onDeleteComment = (commentId: number) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== commentId;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
          onInvalid={handleNewCommentInvalid}
          placeholder="Write here..."
          required
          value={newCommentText}
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publish</button>
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
