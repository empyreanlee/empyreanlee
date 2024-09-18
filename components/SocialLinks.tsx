import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa-solid fa-envelope"></i>
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa-brands fa-linkedin"></i>
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa-brands fa-github"></i>
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
           <i className="fa-brands fa-instagram"></i>
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <span className="btn-inner--icon">
           <i className="fa-brands fa-facebook"></i>
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span className="btn-inner--icon">
            <i className="fa-brands fa-x-twitter"></i>
          </span>
        </Button>
      )}
      {socialLinks.whatsapp && (
        <Button
          className="btn-icon-only rounded-circle"
          color="white"
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener"
          aria-label="Whatsapp"
        >
          <span className="btn-inner--icon">
            <i className="fa-brands fa-whatsapp"></i>
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
