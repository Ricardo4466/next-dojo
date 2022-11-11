import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Pessoas</h1>
        <ul>
          <li>
            1 Ana <Link href="/pessoa/1">Ver</Link>
          </li>
          <li>
            2 Everton <Link href="/pessoa/2">Ver</Link>
          </li>
          <li>
            3 Hercules <Link href="/pessoa/3">Ver</Link>
          </li>
          <li>
            4 Ricardo <Link href="/pessoa/4">Ver</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
