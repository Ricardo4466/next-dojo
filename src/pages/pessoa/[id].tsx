
export async function getServerSideProps(context: any) {
  await new Promise((r) => setTimeout(r, 5000));
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
