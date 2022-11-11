import { useRouter } from 'next/router'
import { people } from '../../constants/people'

export default function Person() {
  const router = useRouter()
  const { id } =  router.query

  const person = people.find((p: any) => p.id == id)
  
  return (
    <h1>{person?.id} - {person?.name}</h1>
  )
}