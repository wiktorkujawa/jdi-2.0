import { getEducationData } from '@/lib/api/education'

const Education = async () => {
  const data = await getEducationData()

  if (!data) {
    return null
  }

  const { header, institutions } = data

  return (
    <section className="c-education lg:my-20 my-12">
      <div className="o-container o-container--lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {header}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutions?.map((item) => (
            <div
              key={item.id}
              className="card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
