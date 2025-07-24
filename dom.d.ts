interface Element {
  msRequestFullscreen(): Promise<void>
  webkitRequestFullscreen(): Promise<void>
  mozRequestFullScreen(): Promise<void>
}
