import Lenis from '@studio-freight/lenis'

export default function SmoothScroll() {

  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  return (
    <div>
    </div>
  )
}
