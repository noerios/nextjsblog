export default function Intro() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt=16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                #BYENOE
            </h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Testing out NextJS by building out a component-based blog.
            </h4>
            <p>
              (The content is pulled from my trip around the globe with Remote Year for Ayzenberg Group. For the full story,{' '}
              <a href="https://noe-rios.squarespace.com/blog/">Click Here</a>.)
            </p>
        </section>
    )
}