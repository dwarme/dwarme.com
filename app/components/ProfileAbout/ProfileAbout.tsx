import './ProfileAbout.css';
function ProfileAbout() {
  return (
    <div className="profile-about">
      <div className="profile-about-photo__container">
        <img
          className="profile-about-photo"
          src="/assets/about.png"
          height={400}
          width={400}
          role="presentation"
          alt=""
          decoding="async"
        />
      </div>
    </div>
  );
}

export default ProfileAbout;
