import Link from "next/link";
import React from "react";

const Footer = () => {
  const navItems = [
    { display: "The camp.", slug: "/" },
    { display: "The experience.", slug: "/experience" },
    { display: "The blog.", slug: "/blog" },
    { display: "The events.", slug: "/events" },
  ];

  const policies = [
    { display: "Imprint", slug: "/imprint" },
    { display: "Terms and Conditions", slug: "/toc" },
    { display: "Data Protection", slug: "/data-protection" },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img className="footer__logo" src="/assets/logo.svg" alt="" />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__policies">
        <ul className="footer__policies-nav">
            {policies.map((policy) => (
                <li key={policy.slug}>
                    <p className="copy">{policy.display}</p>
                </li>
            ))}
        </ul>
        <p className="copy">© Juans Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
