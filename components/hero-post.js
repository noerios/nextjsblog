import CoverImage from '../components/cover-image'
import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    id,
}) {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage
                    title={title}
                    src={coverImage}
                    
                    height={620}
                    width={1240}
                />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="hero-title">
                        <Link as={`/posts/${id}`} href="/posts/[slug]">
                            <a className='hover:undersline'>{title}</a>
                        </Link>
                    </h3>
                    <div className="hero-date">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="hero-excerpt">{excerpt}</p>
                </div>
            </div>
        </section>
    )
}