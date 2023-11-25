const PagePrivacy = () => (
  <div className="content-page-tos-privacy">
    <h1 className="page-title">Privacy Policy</h1>
    <div className="page-content">
      <h2>Introduction</h2>
      <p>
        Welcome to ClimateScoop, a web application dedicated to providing
        detailed visualizations and insights into climate data. We are committed
        to maintaining the privacy and security of our users personal
        information.
      </p>

      <h2>Data Collection and Use</h2>
      <p>
        During user registration, we collect basic personal information such as
        email and name through Auth0 and supported social identity providers,
        including Google. It is important to note that ClimateScoop does not
        directly handle or store your password data. Authentication involving
        passwords is managed securely by Auth0 and your chosen social identity
        provider, ensuring that your password remains confidential and
        protected. The information we do collect, such as your name, is used
        solely for authentication purposes and to enhance your experience on
        ClimateScoop. Additionally, we utilize Vercel Analytics to anonymously
        track visitor counts and countries of origin. This helps us understand
        user engagement and continuously improve our platform.
      </p>

      <h2>Data Storage and Security</h2>
      <p>
        Personal data collected is securely and solely stored in Auth0&apos;s
        database, which adheres to high standards of security. We employ
        industry-standard security practices to protect your data from
        unauthorized access or disclosure.
      </p>

      <h2>Future Functionalities</h2>
      <p>
        As ClimateScoop evolves, we may introduce social media integrations,
        allowing users to like or share content. Any data associated with these
        interactions will be handled with the utmost respect for user privacy.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        ClimateScoop does not use cookies or any tracking mechanisms that
        collect personal data. Our visitor analytics strictly involve aggregate,
        non-personally identifiable information.
      </p>

      <h2>User Rights</h2>
      <p>
        In accordance with GDPR, users have the right to access, rectify, erase,
        or restrict the processing of their personal data. If you wish to
        exercise any of these rights, please contact us at
        support@climatescoop.app.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We encourage you to review our Privacy Policy periodically, as it may be
        updated to reflect changes in our practices. Any significant changes
        will be communicated on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy or data
        practices, please contact us at support@climatescoop.app.
      </p>
    </div>
  </div>
);

export default PagePrivacy;