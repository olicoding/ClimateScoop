import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageProfile from "../components/PageProfile";

export default function Profile() {
  return <PageProfile />;
}

export const getServerSideProps = withPageAuthRequired();
