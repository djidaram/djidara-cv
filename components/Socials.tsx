import { NextPage } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import _ from "lodash";
import Link from "next/link";

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  { icon: <FaGithub />, path: "https://github.com/djidaram/djidara-cv" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/marko-djidara-846010150/",
  },
];

const Socials: NextPage<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {_.map(socials, (social, index) => (
        <Link
          key={`social-${index}`}
          href={social?.path}
          className={iconStyles}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
