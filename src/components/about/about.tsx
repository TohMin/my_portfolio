import Link from 'next/link';
import Image from 'next/image';

import { Skill } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const About = () => {
  const skills: Skill[] = [
    { title: 'HTML', iconName: 'html', href: 'https://html.spec.whatwg.org/multipage/' },
    { title: 'CSS', iconName: 'css', href: 'https://www.w3.org/Style/CSS/' },
    { title: 'JavaScript', iconName: 'js', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
    { title: 'TypeScript', iconName: 'typescript', href: 'https://www.typescriptlang.org/' },
    { title: 'Next.js', iconName: 'nextjs', href: 'https://nextjs.org/' },
    { title: 'React', iconName: 'react', href: 'https://react.dev/' },
    { title: 'Vue', iconName: 'vue', href: 'https://vuejs.org/' },
    { title: 'Php', iconName: 'php', href: 'https://phpgurukul.com/php-projects-free-downloads/#' },
    { title: 'Python', iconName: 'python', href: 'https://realpython.com/tutorials/projects/' },
    { title: 'Laravel', iconName: 'laravel', href: 'https://laravel.com/docs/4.2/quick' },
    { title: 'Django', iconName: 'django', href: 'https://en.wikipedia.org/wiki/Django_(web_framework)' },

  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.png"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />

        <div className={styles.content}>
          <h2 className={styles.title}>About <span>Me</span></h2>
          <p className={styles.text}>Greetings! I&apos;m <span>Tooru Ichikawa</span>, a dedicated fullstack developer driven by my love for crafting fully responsive and user-centric websites. On the frontend, I am proficient in <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>, and have experience with popular frameworks such as <span>React</span>, <span>Vue</span> and <span>Next</span>. On the backend, I have expertise in <span>PHP</span> and <span>PYTHON</span>, and am familiar with frameworks like <span>Laravel</span> and <span>Django</span>. With a strong foundation in both frontend and backend technologies, I offer comprehensive development solutions to meet diverse project requirements. I am constantly working to hone my skills and keep up with ever-changing industry trends.
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => (
            <li key={skill.title}>
              <Link
                className={styles.skillsLink}
                href={skill.href}
                title={skill.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  aria-label={skill.title + ' logo'}
                  name={skill.iconName}
                  size={50}
                />    
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { About };