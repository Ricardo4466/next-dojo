import React, { useState, useEffect } from 'react'

import Head from "next/head";
import Link from "next/link";


export default function Home() {

  const [people, setPeople] = useState([])

  const getPeople = async () => {
    const response = await fetch('/api/people')
    const peopleResponse = await response.json()
    setPeople(peopleResponse)
  }

  useEffect(() => { getPeople() }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Pessoas</h1>
        <ul>
          {people.map((person: any) => (
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
