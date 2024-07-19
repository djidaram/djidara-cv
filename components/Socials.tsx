import { NextPage } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import _ from "lodash";
import Link from "next/link";

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
];

const Socials: NextPage<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {_.map(socials, (social, index) => (
        <Link
          key={`social-${index}`}
          href={social?.path}
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
