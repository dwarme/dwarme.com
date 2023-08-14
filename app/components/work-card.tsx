import {motion, useReducedMotion, type Variants} from 'framer-motion';
import {ArrowLink} from './arrow-button.js';
import {ButtonLink} from './button.js';
import {ArrowIcon} from './icons.js';
import {H2, H3, Paragraph} from './typography.js';
import React from 'react';

const MotionButtonLink = motion(ButtonLink);

const arrowVariants: Variants = {
  initial: {x: 0, y: 0},
  hover: {x: 8, y: -8},
  tap: {x: 24, y: -24},
};
export interface WorkCardProps {
  title: string;
  description: string;
  imageProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  workUrl: string;
  technologies: string[];
}

export function WorkCard({
  title,
  description,
  imageProps,
  workUrl,
  technologies,
}: WorkCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full pt-12">
      <div className="relative block h-full w-full rounded-lg bg-gray-100 px-8 pb-10 pt-36 dark:bg-gray-800 md:px-16 md:pb-20">
        <H2 as="h3">{title}</H2>
        <div className="mt-4 max-w-sm">
          <H2 variant="secondary" as="p">
            {description}
          </H2>
        </div>

        <div className="mt-16">
          <MotionButtonLink
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate="initial"
            href={workUrl}
            prefetch="intent"
          >
            <span>Visit work</span>
            <motion.span variants={shouldReduceMotion ? arrowVariants : {}}>
              <ArrowIcon direction="top-right" size={24} />
            </motion.span>
          </MotionButtonLink>
        </div>

        <div className="flex flex-none flex-wrap gap-2 mt-10">
          {technologies.map((t) => (
            <div
              key={t}
              className="mb-4 inline-block rounded-full bg-white px-6 py-3 text-sm text-black dark:bg-gray-600 dark:text-white"
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-16 top-0">
        <img className="h-20 w-auto object-contain" {...imageProps} />
      </div>
    </div>
  );
}

export function SmallWorkCard({
  title,
  description,
  imageProps,
  workUrl,
}: WorkCardProps) {
  return (
    <div className="bg-secondary relative col-span-full mt-12 flex flex-col items-start rounded-lg px-8 py-12 lg:col-span-4 lg:mt-0 lg:px-12">
      <img loading="lazy" {...imageProps} />
      <div className="mb-4 flex flex-none items-end">
        <H3>{title}</H3>
      </div>
      <Paragraph className="mb-16 max-w-sm flex-auto">{description}</Paragraph>

      <ArrowLink href={workUrl} className="flex-none">
        Visit work
      </ArrowLink>
    </div>
  );
}
