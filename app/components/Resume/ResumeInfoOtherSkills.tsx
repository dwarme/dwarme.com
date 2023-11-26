import ResumeInfo from './ResumeInfo';

function ResumeInfoOtherSkills() {
  return (
    <ResumeInfo title="Additional Skills">
      <div className="info-row">
        <div className="info-box list-box">
          <ul className="list">
            <li className="listitem">
              <span>
                GitHub Actions, Performance Optimization, Build Automation,
                Webpack.
              </span>
            </li>
            <li className="listitem">
              <span>Responsive Web Design, Accessibility auditing.</span>
            </li>
            <li className="listitem">
              <span>
                React Native, Swift/SwiftUI, Remix.run, Shopify Hydrogen,
                Shopify storefront API, Stripe API, Python, Selenium Web
                crawler, StencilJS.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </ResumeInfo>
  );
}

export default ResumeInfoOtherSkills;
