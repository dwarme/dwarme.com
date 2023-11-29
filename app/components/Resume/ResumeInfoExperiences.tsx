import {ReactNode} from 'react';
import ResumeInfo from './ResumeInfo';

interface ExperienceProps {
  company: string;
  jobTitle: string;
  dateStartEnd: string;
  duration: string;
  description: string;
  keyTasks: ReactNode[];
  note?: string;
}

function ResumeInfoExperiences() {
  return (
    <ResumeInfo title="Experiences">
      <Experience
        company="MiniBz Pay"
        jobTitle="Fullstack Engineer"
        dateStartEnd="2022 - Present"
        duration="1.6 Years"
        description="Led the development of MiniBz Pay payment web and mobile app, ensuring a visually appealing and high-performance application."
        keyTasks={[
          <>
            Employed React for the web, Node.js for the backend, and React
            Native for mobile apps.
          </>,
          <>
            Collaborated with UI/UX designers for a visually appealing and
            user-friendly design.
          </>,
          <>
            Implemented REST API and GraphQL for efficient data communication
            and retrieval.
          </>,
          <>
            Implemented performance optimization techniques, including code
            splitting and lazy loading, resulting in blazing-fast load times.
          </>,
          <>
            Ensured app adherence to accessibility standards, promoting
            inclusivity.
          </>,
          <>
            Ensured robust security measures, including data encryption,
            authentication, and authorization, to protect user information and
            transactions.
          </>,
        ]}
      />
      <Experience
        company="Cattown"
        jobTitle="Frontend Engineer"
        dateStartEnd="03/2022 - 12/2022"
        duration="9 Months"
        description="Led the development of the Cattown mobile web app from scratch, using React.js and custom CSS."
        keyTasks={[
          <>
            Collaborated with designers to create wireframes and mockups for an
            engaging user interface.
          </>,
          <>
            Implemented state management using React Context API and Redux for
            efficient data management.
          </>,
          <>Integrated external APIs for map data and QR code functionality.</>,
          <>
            Ensured app responsiveness on various devices through responsive
            design.
          </>,
        ]}
      />
      <Experience
        company="Trovads"
        jobTitle="Founder"
        dateStartEnd="2021 - 2023"
        duration="1.2 Years"
        description="Led the development of Trovads, a multifunctional marketing tool for discovering winning Facebook ads."
        keyTasks={[
          <>
            Orchestrated the entire project, from concept to execution, using
            React, Node.js, PHP Laravel, Python, and Google Vision API.
          </>,
          <>
            Implemented REST API and GraphQL for efficient data communication
            and retrieval.
          </>,
          <>
            Ensured robust security measures and integrated Stripe for secure
            payment processing.
          </>,
          <>
            Developed core functionalities for ad discovery and image search.
          </>,
        ]}
      />
      <Experience
        company="Wardiak Marketing"
        jobTitle="Self Employed"
        dateStartEnd="2020 - 2022"
        duration="2+ Years"
        description="Managed multiple Shopify stores, advertising globally through Facebook and Snapchat Ads Manager."
        keyTasks={[
          <>
            Created individual Shopify stores for each product, emphasizing a
            user-friendly experience.
          </>,
          <>
            Collaborated with Chinese suppliers, leading to over 900 worldwide
            sales.
          </>,
          <>Utilized Stripe for seamless transactions.</>,
          <>Utilized Facebook and Snapchat Ads Manager for advertising.</>,
        ]}
      />
      <Experience
        company="426 - Your Digital Upgrade"
        jobTitle="Web Developer"
        dateStartEnd="11/2018 - 11/2018"
        duration="3 Weeks"
        description="Collaborated on WordPress PHP Plugin for an E-Commerce store"
        keyTasks={[
          <>
            Developed and enhanced functionalities for a WordPress PHP Plugin in
            support of an E-Commerce store.
          </>,
          <>
            Gained hands-on experience in customizing and optimizing E-Commerce
            features.
          </>,
        ]}
      />
      <Experience
        company="Innovation Discovery"
        jobTitle="Software Developer"
        dateStartEnd="06/2017 - 09/2017"
        duration="3 Months"
        description="Converted Java program to Python Selenium Crawler, improved code quality, and implemented innovative solutions"
        keyTasks={[
          <>
            Translated and optimized a Java program into a Python Selenium
            Crawler, enhancing code quality and performance.
          </>,
          <>
            Engineered a software solution to search and analyze websites
            related to specific topics, extracting keywords to accurately score
            pages. Utilized Artificial Intelligence to rewrite articles and
            automated posting.
          </>,
          <>
            Developed JavaScript programs to call Google Sheet API, converting
            data into MySQL DB, and interfacing with an internal Python Django
            API for seamless data integration.
          </>,
          <>
            Collaborated with cross-functional teams to ensure smooth
            communication and integration of diverse technologies.
          </>,
        ]}
      />
    </ResumeInfo>
  );
}

function Experience({
  company,
  jobTitle,
  dateStartEnd,
  duration,
  description,
  keyTasks,
  note,
}: ExperienceProps) {
  return (
    <div className="info-row info-row-experience">
      <div className="info-box">
        <p className="item">Company</p>
        <p className="value">
          <strong>{company}</strong> - {jobTitle}
        </p>
      </div>
      <div className="info-box">
        <p className="item">{dateStartEnd}</p>
        <p className="value">{duration}</p>
      </div>
      <div className="info-box text-box">
        <p className="value">{description}</p>
      </div>
      <div className="info-box list-box">
        <ul className="list">
          {keyTasks.map((task, index) => (
            <li key={`item-task-${index}`} className="listitem">
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
      {note && (
        <div className="info-box text-box">
          <p className="value">{note}</p>
        </div>
      )}
    </div>
  );
}

export default ResumeInfoExperiences;
