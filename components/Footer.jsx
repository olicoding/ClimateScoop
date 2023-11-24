import Link from "next/link";

const Footer = () => (
  <footer className="footer" id="footer">
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
    <p>&copy; 2023 ClimateScoop - Open Source under the MIT License.</p>
  </footer>
);

export default Footer;
