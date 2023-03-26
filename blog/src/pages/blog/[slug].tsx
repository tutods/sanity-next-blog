import { GetServerSideProps } from "next";

type Porps = {};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Post() {
  return <div>Post details</div>;
}
