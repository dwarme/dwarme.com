import React from 'react';
import Modal from '~/package/keepsimple-ui/components/overlay/Modal/Modal';

const modalToggleId = 'modal-toggle-experience';
const ExperienceModal: React.FC & {toggleId: string} = () => {
  return (
    <Modal toggleId={modalToggleId}>
      <div>
        <p>
          With over 5 years of experience, I specialize in crafting exceptional
          web applications and tools that are resilient, scalable,
          high-performing, and visually stunning. As a passionate problem
          solver, I constantly seek opportunities to learn, grow, and excel in
          my field.
          <br />
          <br />
          As the founder of iClofy, I took the lead in developing a powerful
          marketing tool. iClofy specializes in collecting high-quality winning
          ads from Facebook for brands and dropshippers, and I paid exceptional
          attention to detail while maintaining an unwavering focus on user
          interface experience. From the initial concept to the successful
          launch, I oversaw the development of both the front-end and back-end.
          <br />
          <br />
          During my freelance work, I led the development of notable projects.
          One such project was MiniBank, a cutting-edge mobile payment app. I
          implemented secure and efficient features to ensure seamless mobile
          payments, leveraging my expertise in both front-end and back-end
          development.
          <br />
          <br />
          I also collaborated with a talented team of UI/UX designers on
          Cattown, an educational and engaging game. Together, we exceeded
          client expectations by delivering a captivating and immersive learning
          experience.
          <br />
          <br />
          Additionally, I designed and developed iShopty, my personal ecommerce
          store. With meticulous attention to detail, I created a visually
          appealing and user-friendly shopping environment that drove
          conversions.
          <br />
          <br />
          My commitment is to go above and beyond to deliver outstanding
          applications. I stay up to date with the latest trends and
          technologies, continuously improving my skills to provide innovative
          solutions.
        </p>
      </div>
    </Modal>
  );
};

ExperienceModal.toggleId = modalToggleId;
export default ExperienceModal;
