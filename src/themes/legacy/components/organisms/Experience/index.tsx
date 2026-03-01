import { getExperienceData } from '@/lib/api/experience'

import Container from '../../templates/ContainerTemplate'

const formatDateRange = (startDate?: string | null, endDate?: string | null) => {
  if (!startDate) return ''
  const end = endDate === 'now' ? 'now' : endDate
  return `${startDate}–${end || 'now'}`
}

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
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span>
                    <strong>{item.position}</strong>
                    {item.company && <> — {item.company}</>}
                  </span>
                  {(item.startDate || item.endDate) && (
                    <span className="text-p2 opacity-80 shrink-0">
                      {formatDateRange(item.startDate, item.endDate)}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-p1 text-justify mt-2">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}

export default Experience
