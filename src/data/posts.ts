import finnAvatar from '../assets/finn-avatar.png';
import jakeAvatar from '../assets/jake-avatar.png';

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface IContent {
  type: 'paragraph' | 'link' | 'tags';
  content: string;
}

export interface IPost {
  author: IAuthor;
  id: number;
  publishedAt: Date;
  content: IContent[];
}

export const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: jakeAvatar,
      name: 'Jake, the dog',
      role: 'Magic dog'
    },
    content: [
      { type: 'paragraph', content: 'hey peeps 👋' },
      { type: 'paragraph', content: "I've just cooked tons of bacon pancakes this morning, waiting for you to get a brunch together!" },
      { type: 'tags', content: '#sunday-funday #brunch-time' },
    ],
    publishedAt: new Date('2024-01-14 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: finnAvatar,
      name: 'Finn, the human',
      role: 'Regular human boy'
    },
    content: [
      { type: 'paragraph', content: 'Great announcement' },
      { type: 'paragraph', content: 'Calling to music lovers: join to FINNLAND band! 🎸' },
      { type: 'link', content: 'finnland-band/join-us' },
    ],
    publishedAt: new Date('2024-01-10 21:00:00'),
  },
];
