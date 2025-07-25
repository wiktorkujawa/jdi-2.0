import { getEducationData } from '@/lib/api/education'

import Container from '../../templates/ContainerTemplate'

const Education = async () => {
  const data = await getEducationData()

  if (!data) {
    return null
  }

  const { header, institutions } = data

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
