import {AnchorOrLink} from '~/utils/misc';
import {externalLinks} from '~/external-links';
import {IconLink} from './icon-link';
import {GithubIcon, LinkedInIcon} from './icons';
import {H4, H6} from './typography';

function ContactSection() {
  return (
    <div>
      <H6 as="div">Contact</H6>
      <ul className="mt-4">
        <FooterLink name="Email Me" href="/contact" />
      </ul>
    </div>
  );
}
function GeneralSection() {
  return (
    <div>
      <H6 as="div">General</H6>
      <ul className="mt-4">
        <FooterLink name="Privacy policy" href="/transparency#privacy" />
        <FooterLink name="Terms of use" href="/transparency#terms" />
      </ul>
    </div>
  );
}

function SitemapSection() {
  return (
    <div>
      <H6 as="div">Sitemap</H6>
      <ul className="mt-4">
        <FooterLink name="Home" href="/" />
        <FooterLink name="Blog" href="/blog" />
        <FooterLink name="Courses" href="/courses" />
        <FooterLink name="Discord" href="/discord" />
        <FooterLink name="Chats Podcast" href="/chats" />
        <FooterLink name="Workshops" href="/workshops" />
        <FooterLink name="Talks" href="/talks" />
        <FooterLink name="Testimony" href="/testimony" />
        <FooterLink name="Testimonials" href="/testimonials" />
        <FooterLink name="About" href="/about" />
        <FooterLink name="Credits" href="/credits" />
        <FooterLink name="Sitemap.xml" reload href="/sitemap.xml" />
      </ul>
    </div>
  );
}

function AboutSection() {
  return (
    <div>
      <H4 as="div">Daouda Warme</H4>

      <p className="text-secondary mt-6 max-w-md text-2xl">
        Full stack developer.
      </p>

      <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
        <div className="flex gap-4">
          <IconLink href={externalLinks.github}>
            <GithubIcon size={32} />
          </IconLink>
          <IconLink href={externalLinks.linkedin}>
            <LinkedInIcon size={32} />
          </IconLink>
        </div>
      </div>
    </div>
  );
}

function FooterLink({
  name,
  href,
  reload,
}: {
  name: string;
  href: string;
  reload?: boolean;
}) {
  return (
    <li className="py-1">
      <AnchorOrLink
        prefetch={href.startsWith('http') ? undefined : 'intent'}
        href={href}
        className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
        reload={reload}
      >
        {name}
      </AnchorOrLink>
    </li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-3 xl:row-span-2">
            <AboutSection />
          </div>
          {false && (
            <>
              <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
                <ContactSection />
              </div>

              <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
                <GeneralSection />
              </div>

              <div className="col-span-full mt-24 text-lg text-gray-500 dark:text-slate-500 md:mt-44">
                <span>All rights reserved</span>{' '}
                <span className="block md:inline">{`© Daouda Warme ${new Date().getFullYear()}`}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

export {Footer};
