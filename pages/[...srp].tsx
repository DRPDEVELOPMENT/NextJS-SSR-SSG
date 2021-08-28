import { fetchRepo } from "../components/srp/apiCalls";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import styles from "../components/srp/Srp.module.scss";

const Srp = ({ repo, repoId }) => {
  console.log("Beers  is", repo);

  const router = useRouter();

  return (
    <>
      <h1>This is SRP page</h1>
      <h2>SRP Route path is {router.asPath}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Private</th>
            <th>Description</th>
            <th>Size</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>{repo?.id}</td>
              <td>{repo?.name ?? "NA"}</td>
              <td>{repo?.full_name ?? "NA"}</td>
              <td>{repo?.private ? "Yes" : "No"}</td>
              <td>{repo?.description ?? "NA"}</td>
              <td>{repo?.size ?? "NA"}</td>
              <td>{repo?.language ?? "NA"}</td>
            </tr>
          }
        </tbody>
      </table>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const repoId = query?.srp[query?.srp.length - 1];
  const repo = await fetchRepo(repoId);
  return {
    props: {
      repo: repo || null,
      repoId: repoId || null,
    },
  };
}

export default Srp;
