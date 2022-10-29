import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import { Card, CardMedium } from '../typings'

interface Props {
  exploreData: Card[],
  cardsData: CardMedium[],
}

const Home = ({ exploreData, cardsData }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Project Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, location, distance}) => (
              <SmallCard key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2> 

          <div className='flex space-x-3 overflow-scroll scrollbar-hide -ml-3'>
            {
              cardsData?.map((item) => (
                <MediumCard
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
              ))
            }
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
  then((res) => res.json())

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').
  then((res) => res.json())

  console.log("Card Data", cardsData);

  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}
