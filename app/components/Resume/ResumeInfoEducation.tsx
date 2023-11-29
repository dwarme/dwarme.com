import ResumeInfo from './ResumeInfo';

function ResumeInfoEducation() {
  return (
    <ResumeInfo title="Education">
      <div className="info-row">
        <div className="info-box">
          <p className="item">Degree</p>
          <p className="value">High School</p>
        </div>
        <div className="info-box">
          <p className="item">
            Italy, Trentino Alto Adige, Bolzano, 2015 - 2020l
          </p>
          <p className="value"></p>
        </div>
        <div className="info-box">
          <p className="item">School</p>
          <p className="value">IIS G. Galilei · Computer Science</p>
        </div>
      </div>
    </ResumeInfo>
  );
}

export default ResumeInfoEducation;
