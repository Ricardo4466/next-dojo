
export async function getStaticPaths() {
  await new Promise((r) => setTimeout(r, 5000));

  const response = await fetch('/api/people')
  const people = await response.json()

  return {
    paths: people.map((p: any) => {
      return {
        params: {
          id: p.id.toString()
        }
      }
    }),
    fallback: true, // false true blocking
  };
}

export async function getStaticProps(context: any) {
  const response = await fetch(`/api/people/${context.params.id}`)
  const person = await response.json()
  return { props: person };
}

export default function Person(props: any) {
  return (
    <h1>
      {props?.id} - {props?.name}
    </h1>
  );
}
