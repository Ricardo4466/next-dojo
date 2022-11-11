import { useRouter } from 'next/router'
import { people } from '../../constants/people'

export async function getServerSideProps(context: any) {
  const person = people.find((p: any) => p.id == context.params.id)

  return { props: person }
}


export default function Person(props: any) {

  return (
    <h1>{props?.id} - {props?.name}</h1>
  )
}