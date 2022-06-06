import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  to: string;
}

const SocialMediaLink = ({ icon, to }: Props) => {
  return (
    <Link href={to} passHref>
      <a>{icon}</a>
    </Link>
  );
};

export default SocialMediaLink;
