import { getExperienceData } from '@/lib/api/experience'

import Container from '../../templates/ContainerTemplate'

const Experience = async () => {
  const data = await getExperienceData()

  if (!data) {
    return null
  }

  const { header, positions } = data

  return (
    <section className="c-experience lg:my-16 my-10">
      <div className="o-container o-container--lg">
        <Container>
          <h1 className="text-h1 text-center mb-16 font-bold">{header}</h1>
          <ul>
            {positions?.map((item) => (
              <li className="mb-10" key={item.id}>
                <strong>{item.position}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}

export default Experience
