import Link from 'next/link';

import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Works
      </h2>

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
            // githubUrl="https://github.com/Nailheart/chatiko"
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
      </ul>
      <Link className={styles.btn} href="/works">
        See more
      </Link>
    </section>
  );
};

export { Portfolio };
