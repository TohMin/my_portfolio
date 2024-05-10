import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

        <ul className={styles.list}>
          <li>
            <Card
              img="/img/works/react.jpg"
              title="IPCC"
              description="Task manager to keep track of your goals."
              href="https://www.ipcc.ch/"
              topics={[
                'react',
                'prisma',
                'typescript',
                'stripe',
                'tailwindcss',
              ]}
            />
          </li>
          <li>
          <Card
            img="/img/works/taskify.jpg"
            title="Taskify"
            description="Task manager to keep track of your goals."
            href="https://taskify-ashen-delta.vercel.app/"
            // githubUrl="https://github.com/Nailheart/taskify"
            topics={['nextjs', 'prisma', 'typescript', 'stripe', 'tailwindcss']}
          />
          </li>
          <li>
            <Card
              img="/img/works/chatiko.jpg"
              title="Chatiko"
              description="Realtime chat app."
              topics={[
                'nextjs',
                'typescript',
                'pusher',
                'upstash',
                'redis',
                'tailwindcss',
              ]}
            />
          </li>
          
          <li>
            <Card
              img="/img/works/figma-land.jpg"
              title="Figma land"
              description="Landing page."
              href="https://nailheart.github.io/figma-land/"
              topics={['html',  'green-sock']}
            />
          </li>
          <li>
            <Card
              img="/img/works/mogo.jpg"
              title="Mogo"
              description="Creative landing page template."
              href="https://nailheart.github.io/Mogo/"
              topics={['simple-bar',  'html', 'google-maps']}
            />
          </li>
          
          <li>
            <Card
              img="/img/works/cat-energy.jpg"
              title="Cat Energy"
              description="Online food store for cats."
              href="https://nailheart.github.io/377731-cat-energy-21/"
              topics={['html', 'less', 'google-maps']}
            />
          </li>
          <li>
            <Card
              img="/img/works/technomart.jpg"
              title="Technomart"
              description="Store of building materials and repair tools."
              href="https://nailheart.github.io/377731-technomart-29/"
              topics={['html', 'css']}
            />
          </li>
          <li>
            <Card
              img="/img/works/todo.jpg"
              title="Todo"
              description="Simple to do list with save on localStorage."
              href="https://nailheart.github.io/Todo/"
              topics={['js', 'react']}
            />
          </li>

          <li>
            <Card
              img="/img/works/memory-game.jpg"
              title="Memory game"
              description="Responsive memory game."
              href="https://brave.pigg.ameba.jp/"
              topics={['html', 'js', 'php' ]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
