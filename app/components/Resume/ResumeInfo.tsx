import React, {ReactNode} from 'react';

interface ResumeInfoProps {
  children: ReactNode;
  title: string;
}
function ResumeInfo({children, title}: ResumeInfoProps) {
  return (
    <section className="info-container">
      <div className="col-sm-3 col-xs-12 col-title">
        <h2 className="info-title">{title}</h2>
      </div>
      <div className="info-content col-sm-9 col-xs-12">
        <div className="static-content">{children}</div>
      </div>
    </section>
  );
}

export default ResumeInfo;
