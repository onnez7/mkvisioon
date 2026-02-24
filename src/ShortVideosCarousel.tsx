import React, { useRef } from 'react'

interface Video {
  title: string
  description: string
  vimeoId: string
}

interface ShortVideosCarouselProps {
  videos: Video[]
  VimeoEmbed: React.ComponentType<{ id: string; title: string; aspect: string }>
}

export function ShortVideosCarousel({ videos, VimeoEmbed }: ShortVideosCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {videos.map((video) => (
          <article
            key={video.title}
            className="flex-shrink-0 w-[min(calc(100vw-48px),400px)] md:w-[calc(33.333%-22px)] flex flex-col gap-5 rounded-2xl bg-sand p-4 text-left shadow-sm snap-center"
          >
            <div className="relative">
              <VimeoEmbed
                id={video.vimeoId}
                title={video.title}
                aspect="short"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-ink">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                {video.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      
      {/* Carousel Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-aqua/80 hover:bg-aqua text-white p-2 rounded-full shadow-lg transition"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-aqua/80 hover:bg-aqua text-white p-2 rounded-full shadow-lg transition"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
