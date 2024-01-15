import { ImgHTMLAttributes } from "react";

import classNames from 'classnames';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  image?: string;
  isInline?: boolean;
  name?: string;
  role?: string;
}

export const Avatar = ({ hasBorder, image, isInline, name, role, ...props}: AvatarProps) => {
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
        {...props}
      />

      {name && <div className={styles.avatarText}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      }
    </div>
  );
}
