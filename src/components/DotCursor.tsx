import AnimatedCursor from "react-animated-cursor"

export default function DotCursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerStyle={{
          mixBlendMode: 'exclusion',
          backgroundColor: 'rgb(255, 255, 255)',
        }}
        innerStyle={{
          backgroundColor: 'rgb(255, 255, 255)',
          mixBlendMode: 'exclusion',
        }}
      />
    </>
  )
}
