import classNames from 'classnames';

import styles from './Avatar.module.css';

export const Avatar = ({ hasBorder, image, isInline, name, role, }) => {
  return (
    <div
      className={classNames(styles.avatar, {
        [styles.avatarInline]: !!isInline
      })}
    >
      <img
        className={classNames(styles.avatarImage, {
          [styles.avatarWithBorder]: !!hasBorder,
        })}
        src={image}
      />

      {name && <div className={styles.avatarText}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      }
    </div>
  );
}
