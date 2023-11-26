import {ReactNode} from 'react';
import './Resume.css';
import ResumeInfoAbout from './ResumeInfoAbout';
import ResumeInfoContact from './ResumeInfoContact';
import ResumeInfoExperiences from './ResumeInfoExperiences';
import ResumeInfoKeyQualifications from './ResumeInfoKeyQualifications';
import ResumeInfoProjects from './ResumeInfoProjects';
import ResumeInfoOtherSkills from './ResumeInfoOtherSkills';

function Resume() {
  return (
    <ResumeEmpty>
      <ResumeInfoAbout />
      <ResumeInfoContact />
      <ResumeInfoExperiences />
      <ResumeInfoKeyQualifications />
      <ResumeInfoOtherSkills />
      <ResumeInfoProjects />
    </ResumeEmpty>
  );
}

export function ResumeEmpty({children}: {children: ReactNode}) {
  return (
    <div className="resume-container">
      <div className="resume-content">{children}</div>
    </div>
  );
}

export default Resume;
