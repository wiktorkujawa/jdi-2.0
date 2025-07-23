const Loader = ({ width = 40, height = 40 }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <span
        className={`animate-spin rounded-full border-4 border-blue-400 border-t-transparent`}
        style={{ width: `${width}px`, height: `${height}px` }}
      ></span>
    </div>
  )
}
export default Loader
