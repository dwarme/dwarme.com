import React, {ReactNode} from 'react';

interface ResumeInfoProps {
  children: ReactNode;
  title: string;
}
function ResumeInfo({children, title}: ResumeInfoProps) {
  return (
    <section className="info-container">
      <div className="large-3 small-3 xsmall-12 col-sm-3 col-xs-12 col-title">
        <h2 className="info-title">{title}</h2>
      </div>
      <div className="info-content large-9 small-9 xsmall-12 small-9 xsmall-12 col-sm-9 col-xs-12">
        <div className="static-content">{children}</div>
      </div>
    </section>
  );
}

export default ResumeInfo;
