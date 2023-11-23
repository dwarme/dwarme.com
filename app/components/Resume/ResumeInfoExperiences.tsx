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
        description="Lead the development of MiniBz Pay payment web and mobile app with focus on creating a visually appealing and high-performance application, ensuring a seamless and secure payment experience for users."
        keyTasks={[
          <>
            <strong>Technology Stack:</strong> Chose React for the web, Node.js
            for the backend, React Native for mobile apps, ensuring a robust,
            cross-platform foundation.
          </>,
          <>
            <strong>Aesthetic Design:</strong> Collaborated with UI/UX designers
            to create a visually appealing, user-friendly design with a focus on
            aesthetics.
          </>,
          <>
            <strong>Performance Optimization:</strong> Employed various
            techniques such as code splitting, lazy loading, and bundle size
            reduction to achieve blazing-fast load times and smooth user
            interactions.
          </>,
          <>
            <strong>Web Caching:</strong> Implemented intelligent web caching
            strategies to reduce server load and minimize data transfer,
            enhancing app responsiveness.
          </>,
          <>
            <strong>Image Optimization:</strong> Utilized advanced image
            optimization techniques like lazy loading, responsive images, and
            CDN integration to maintain high-quality visuals while improving
            load times.
          </>,
          <>
            <strong>Security: </strong> Ensured robust security measures,
            including data encryption, authentication, and authorization, to
            protect user information and transactions.
          </>,
          <>
            <strong>Cross-Platform Compatibility:</strong> Employed React Native
            for mobile apps to provide a consistent and responsive experience on
            iOS and Android.
          </>,
          <>
            <strong>User Feedback:</strong> Incorporated user feedback loops and
            A/B testing to continuously improve the app&apos;s aesthetic and
            functionality.
          </>,
          <>
            <strong>Automated Testing:</strong> Implemented automated testing
            and continuous integration pipelines to maintain code quality and
            reliability.
          </>,
          <>
            <strong>Accessibility: </strong>Ensured the app adhered to
            accessibility standards, making it inclusive for all users.
          </>,
        ]}
      />
      <Experience
        company="Cattown"
        jobTitle="Frontend Engineer"
        dateStartEnd="03/2022 - 12/2022"
        duration="9 Months"
        description="I led the development of the Cattown mobile web app from scratch, using React.js and custom CSS. Cattown is an engaging digital treasure hunt designed for children aged 10 to 13. The app fosters a sense of autonomy by challenging players to navigate the streets of cities like Bolzano, Merano, Bressanone, and Brunico."
        keyTasks={[
          <>
            <strong>Project Initiation:</strong> Defined project scope and
            requirements.
          </>,
          <>
            <strong>Technology Stack:</strong> Utilized React.js for a flexible
            front-end.
          </>,
          <>
            <strong>UI/UX Design: </strong> Collaborated with designers to
            create wireframes and mockups, ensuring an engaging and
            user-friendly interface.
          </>,
          <>
            <strong>State Management:</strong> Implemented state management
            using React&apos;s Context API to efficiently manage game data and
            user progress.
          </>,
          <>
            <strong>Custom CSS:</strong> Designed and implemented custom CSS
            styles to match the game&apos;s unique aesthetic, optimizing for
            mobile screens.
          </>,
          <>
            <strong>API Integration:</strong> Integrated external APIs for map
            data and QR code functionality, ensuring seamless interaction
          </>,
          <>
            <strong>Multi-Language Support:</strong> Implemented content
            translation and language switch functionality.
          </>,
          <>
            <strong>Responsive Design:</strong> Ensured the app&apos;s
            responsiveness on various mobile devices and screen sizes for a
            consistent user experience.
          </>,
          <>
            <strong>Testing and Debugging:</strong> Rigorously tested the app,
            identifying and resolving bugs and issues to enhance stability.
          </>,
          <>
            <strong>Collaboration:</strong> Worked closely with a team of
            developers, designers to meet project milestones and objectives.
          </>,
          <>
            <strong>User Feedback:</strong> Gathered user feedback and iterated
            on the app to improve gameplay and address user needs.
          </>,
          <>
            <strong>Maintenance:</strong> Continued to provide ongoing
            maintenance and updates to keep the app running smoothly.
          </>,
        ]}
      />
      <Experience
        company="Trovads"
        jobTitle="Founder"
        dateStartEnd="2021 - 2023"
        duration="1.2 Years"
        description="Trovads is a multifunctional marketing tool designed to help users discover winning Facebook ads from dropshipping and brand campaigns, offering valuable insights.  I led the development of Trovads, ensuring it is feature-rich and user-friendly."
        keyTasks={[
          <>
            <strong>Project Leadership:</strong> Orchestrated the entire
            project, from concept to execution.
          </>,
          <>
            <strong>Tech Stack:</strong> Chose React for the web, Node.js for
            robust back-end functionality and API integration, Python for web
            crawling and Google Vision API for image analysis, Stripe for secure
            payment processing.
          </>,
          <>
            <strong>UI/UX Design: </strong> Designed an intuitive and responsive
            user interface to enhance the user experience.
          </>,
          <>
            <strong>Authentication and Security:</strong> Ensured robust
            security measures, including data encryption, authentication, and
            authorization, to protect user information and transactions.
          </>,
          <>
            <strong>Ad Discovery and Image Search:</strong> Developed core
            functionalities for discovering successful Facebook ads and
            performing image searches with Google Vision.
          </>,
          <>
            <strong>Keyword Crawling and Analysis: </strong> Implemented Python
            and Selenium for efficient web crawling to extract store marketing
            keywords and product image data.
          </>,
          <>
            <strong>Payment Integration: </strong> Integrated Stripe to enable
            secure transactions for premium features.
          </>,
        ]}
      />
      <Experience
        company="Wardiak Marketing"
        jobTitle="Self Employed"
        dateStartEnd="2020 - 2022"
        duration="2+ Years"
        description="I managed multiple Shopify stores, each focused on a single product. Using Facebook and Snapchat Ads Manager, I advertised to a global audience. Collaboration with Chinese suppliers, ongoing store analysis, and seamless Stripe payments led to over 900 sales worldwide."
        keyTasks={[
          <>
            <strong>Store Setup:</strong> Created individual Shopify stores for
            each product. Designed stores for a user-friendly experience.
          </>,
          <>
            <strong>Supplier Relations:</strong> Collaborated with Chinese
            suppliers for product sourcing. Negotiated favorable terms for
            pricing and shipping.
          </>,
          <>
            <strong>Product Selection:</strong> Conducted thorough research to
            choose high-demand products.
          </>,
          <>
            <strong>Advertising Channels:</strong> Utilized Facebook and
            Snapchat Ads Manager for advertising. Tailored ad campaigns to
            target specific audiences.
          </>,
          <>
            <strong>Shopify Analysis:</strong> Regularly analyzed store
            performance, including traffic, conversion rates, and revenue.
          </>,
          <>
            <strong>International Sales:</strong> Made 900+ sales worldwide,
            including Italy, France, and the USA. Used Stripe as the payment
            processor for seamless transactions.
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
