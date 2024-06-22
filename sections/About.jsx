'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Air Jordan" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
      The<span className="font-extrabold text-white"> Nike Air Jordan AJ </span> shoes are iconic basketball sneakers that combine high performance with streetwear style. Known for their{' '}
        <span className="font-extrabold text-white">
        premium materials, innovative design, and superior comfort,
        </span>{' '}
        they feature signature elements like the{' '}
        <span className="font-extrabold text-white">Jumpman logo</span> and <span className="font-extrabold text-white">Air cushioning.</span>{' '}
        <span className="font-extrabold text-white">Popular</span> among athletes and fashion enthusiasts alike, these shoes offer excellent support and a distinctive look that has made them a staple in sneaker culture.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
