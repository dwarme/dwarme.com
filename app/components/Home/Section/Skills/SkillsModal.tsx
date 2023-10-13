import React from 'react';
import Modal from '~/package/keepsimple-ui/components/overlay/Modal/Modal';
import MY_SKILLS from '~/resources/resource-skills';

const modalToggleId = 'modal-toggle-skills';
const SkillsModal: React.FC & {toggleId: string} = () => {
  return (
    <Modal toggleId={modalToggleId}>
      <p>
        {MY_SKILLS.map((skill) => (
          <span
            key={skill}
            style={{margin: 5}}
            className="violator violator-secondary"
          >
            {skill}
          </span>
        ))}
      </p>
    </Modal>
  );
};

SkillsModal.toggleId = modalToggleId;
export default SkillsModal;
