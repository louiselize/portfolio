import Image, { StaticImageData } from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface ProfileProps {
  avatar: StaticImageData;
}

const Profile: React.FC<ProfileProps> = ({ avatar }) => {
  return (
    <div>
      <div className='text-center p-4'>
        <h2 className='text-4xl text-palette-blue font-medium md:text-4xl'>Louise Lizé</h2>
        <h3 className='text-xl py-1 md:text-3xl text-palette-blue-100 dark:text-white'>
          Computer Science Student
        </h3>

        <div className='relative mx-auto bg-gradient-to-b from-neutral-500 rounded-full w-28 h-28 mt-8 overflow-hidden md:h-70 md:w-70'>
          <Image alt='' src={avatar} layout='fill' objectFit='cover' />
        </div>

        <p className='text-md py-5 leading-7 text-palette-blue md:text-xxl max-w-xxl mx-auto dark:text-gray-400'>
          My name is Louise Lizé, and I am a computer science student engineer with a specialization in AI and Data Science 📈.
          Although I am originally studying at French engineering university{' '}
          <a href='https://www.utc.fr/' target='_blank' rel='noreferrer' className='text-palette-blue'>
            UTC
          </a>
          , I am currently pursuing a double degree program at{' '}
          <a href='https://www.uqac.ca/' target='_blank' rel='noreferrer' className='text-palette-blue'>
            UQAC
          </a>{' '}
          in Canada, which has allowed me to expand my horizons and gain a unique perspective on my field of study.
          On this platform, you can explore a selection of my favorite projects, completed during my studies at school and outside of the classroom. 💻
          <br />
          <br />
          Please feel free to explore my repositories and connect with me on LinkedIn!
        </p>
      </div>

      <div className='text-4xl flex justify-center gap-16 pb-4 text-palette-blue dark:text-gray-400'>
        <a href='https://www.linkedin.com/in/louise-lize/' target='_blank' rel='noreferrer'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/louiselize' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Profile;
