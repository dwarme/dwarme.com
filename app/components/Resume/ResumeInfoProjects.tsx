import ResumeInfo from './ResumeInfo';

function ResumeInfoProjects() {
  return (
    <ResumeInfo title="Projects">
      <div className="info-row">
        <div className="info-box text-box">
          <p className="value">
            Links to some of my work can be found on{' '}
            <a
              href="https://dwarme.com"
              target="__blank"
              className="link-works"
            >
              dwarme.com
            </a>{' '}
            and details can be provided upon request via a scheduled demo call.
          </p>
        </div>
      </div>
    </ResumeInfo>
  );
}

export default ResumeInfoProjects;
