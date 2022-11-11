import Head from "next/head";
import Link from "next/link";

import { people } from "../constants/people";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Pessoas</h1>
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              {`${person.id} - ${person.name} `}
              <Link href={`/pessoa2/${person.id}`}>Ver</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
