import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="o-theme-window relative rounded border 
        py-8 lg:px-8 md:px-6 px-4"
    >
      {children}
    </div>
  )
}

export default Container
