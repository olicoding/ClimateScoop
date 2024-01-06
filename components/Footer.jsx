import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer" data-testid="footer">
      <nav>
        <ul className="footer-list">
          <li>
            <Link href="/tos">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
      <p>
        &copy; {currentYear} ClimateScoop - Open Source under the MIT License.
      </p>
    </footer>
  );
};

export default Footer;
