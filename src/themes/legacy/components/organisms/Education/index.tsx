import Container from '@/themes/legacy/components/templates/ContainerTemplate'
import { getEducationData } from '@/lib/api/education'

const Education = async () => {

  const { header, institutions} = await getEducationData();

  return (
    <section className="my-16 o-container o-container--lg">
        <Container>
        <h1 className="text-h1 text-center mb-16 font-bold">
            {header}
        </h1>
        <ul>
            {institutions?.map((item) => (
            <li className="mb-10" key={item.id}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
            </li>
            ))}
        </ul>
        </Container>
    </section>
  )
}
export default Education;

