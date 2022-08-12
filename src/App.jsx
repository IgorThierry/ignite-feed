import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Gabriel Buzzi"
            content="Officia reprehenderit mollitia molestiae doloremque fuga inventore voluptate! Architecto, ullam corrupti."
          />
        </main>
      </div>
    </div>
  );
}
