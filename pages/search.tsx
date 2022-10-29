import { useRouter } from "next/router";
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { SearchResultStruct } from "../typings";

type Props = {
  searchResults: SearchResultStruct[]
}

export default function Search({ searchResults }: Props) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = new Date(startDate as string).toLocaleDateString();
  const formattedEndDate = new Date(endDate as string).toLocaleDateString();
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {
              searchResults?.map(item => (
                <InfoCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  title={item.title}
                  description={item.description}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                />
              ))
            }
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}