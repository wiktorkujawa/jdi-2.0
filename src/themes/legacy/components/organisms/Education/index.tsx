import Container from '@/themes/legacy/components/templates/ContainerTemplate'
import { getEducationData } from '@/lib/api/education'

const Education = async () => {
  const { header, institutions } = await getEducationData()

  return (
    <section className="c-education lg:my-16 my-10">
      <div className="o-container o-container--lg">
        <Container>
          <h1 className="text-h1 text-center mb-16 font-bold">{header}</h1>
          <ul>
            {institutions?.map((item) => (
              <li className="mb-10" key={item.id}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}
export default Education
