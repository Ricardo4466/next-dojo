import Head from "next/head";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: 'Ana'
  },
  {
    id: 2,
    name: 'Everton'
  },
  {
    id: 3,
    name: 'Hercules'
  },
  {
    id: 4,
    name: 'Ricardo'
  }
]


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
              {`${person.id} - ${person.name} `}<Link href={`/pessoa/${person.id}`}>Ver</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
