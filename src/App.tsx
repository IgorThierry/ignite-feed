import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';

import './global.css';

import styles from './App.module.css';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgorThierry.png',
      name: 'Igor Thierry',
      role: 'Sรชnior Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ๐' },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐`,
      },
      { type: 'link', content: 'https://nlw-doctorcare.vercel.app/' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ๐' },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐`,
      },
      { type: 'link', content: 'https://nlw-doctorcare.vercel.app/' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
