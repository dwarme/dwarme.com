import ResumeInfo from './ResumeInfo';

function ResumeInfoContact() {
  return (
    <ResumeInfo title="Contact">
      <div className="info-row">
        <div className="info-box">
          <p className="item">Email</p>
          <p className="value">DWARME99@GMAIL.COM</p>
        </div>
        <div className="info-box">
          <p className="item">Phone</p>
          <p className="value">+39 347 9917126</p>
        </div>
        <div className="info-box">
          <p className="item">LinkedIn</p>
          <p className="value">
            <a
              href="https://www.linkedin.com/in/daouda-warme-a97a361a5/"
              style={{color: '#027fff'}}
            >
              linkedin.com/in/daouda-warme-a97a361a5/
            </a>
          </p>
        </div>
        <div className="info-box">
          <p className="item">Portfolio</p>
          <p className="value">
            <a href="https://dwarme.com" style={{color: '#027fff'}}>
              dwarme.com
            </a>
          </p>
        </div>
        <div className="info-box">
          <p className="item">GitHub</p>
          <p className="value">
            <a href="https://github.com/dwarme" style={{color: '#027fff'}}>
              github.com/dwarme
            </a>
          </p>
        </div>
        <div className="info-box">
          <p className="item">Location</p>
          <p className="value">
            Italy, Bolzano (BZ) 39100, Via Nicolò Rasmo 34/17
          </p>
        </div>
      </div>
    </ResumeInfo>
  );
}

export default ResumeInfoContact;
