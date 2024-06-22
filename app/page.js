import HeroCarousel from '@/components/HeroCarousel'
import SearchBar from '@/components/SearchBar'

const HomePage = () => {
  return (
    <section className='px-6 border-2 md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <p className='small-text'>
            Start shopping smarter today
          </p>
          <h1 className='head-text'>
            For the right prices, trust the <span className='text-primary'>Guru</span>
          </h1>
          <p className='mt-6'>
            Price comparison for tech and gadgets made easy, start saving with us today
          </p>
          <SearchBar />
        </div>
        <HeroCarousel/>
      </div>

    </section>
  )
}

export default HomePage
