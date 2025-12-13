import { getExperienceData } from '@/lib/api/experience'

const Experience = async () => {
  const data = await getExperienceData()

  if (!data) {
    return null
  }

  const { header, positions } = data

  const formatDateRange = (startDate?: string | null, endDate?: string | null) => {
    if (!startDate) return ''
    const end = endDate === 'now' ? 'now' : endDate
    return `${startDate}-${end || 'now'}`
  }

  return (
    <section className="c-experience lg:my-20 my-12">
      <div className="o-container o-container--lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {header}
        </h1>
        <ul className="space-y-6">
          {positions?.map((item) => (
            <li key={item.id} className="mb-10">
              <div className="card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-indigo-500 dark:border-indigo-400">
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <strong className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {item.position}
                      {item.company && ` - ${item.company}`}
                    </strong>
                    {(item.startDate || item.endDate) && (
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {formatDateRange(item.startDate, item.endDate)}
                      </span>
                    )}
                  </div>
                </div>
                {item.description && (
                  <div className="o-rich-text text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience

