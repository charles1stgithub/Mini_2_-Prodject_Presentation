import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components';
import { Cards } from '../components';
import { Form } from '../components';
import { SemiFooter } from '../components';
import photo1 from '../assets/villa.webp';
import photo2 from '../assets/apartment.webp';
import photo3 from '../assets/penth.webp';
import photo4 from '../assets/town.webp';
import img1 from '../assets/buy.jpg';
import img2 from '../assets/sell.jpg';

import { Tooltip } from '@material-tailwind/react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const url =
  'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=9&page=0&lang=en&categoryExternalID=25&priceMin=1000000';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
};
export default function Home() {
  // const [received, setReceived] = useState(null); // handle to received data from hero || this is the onCharge data from search input
  const { data: properties } = useFetch(url, options);

  // ------------------------------------- //receivedData from hero
  // const handleDataFromHero = (data) => {
  //   setReceived(data);
  // };

  // ---------------- //handle filter function
  // const results = properties.filter((property) => {
  //   return (
  //     property.id.includes(received) &&
  //     property.purpose === 'for-sale' &&
  //     property.priceMin >= 1000000 &&
  //     property.purpose === 'for-sale' &&
  //     property.categoryExternalID === '25'
  //   );
  // });
  // console.log(results.hits);
  // const fetchProperties = async (req, res) => {
  //   try {
  //     const response = await fetch(req, res);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setProperties(result.hits);

  //     console.log(result.hits);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProperties(url, options);
  // }, [url, options]);

  // ======================================= ito bago
  // function showSpinner() {
  //   document.querySelector('.spinner').classList.add('show');
  // }

  // function hideSpinner() {
  //   document.querySelector('.spinner').classList.remove('show');
  // }

  // if (!properties) {
  //   return showSpinner();
  // } else {
  //   hideSpinner();
  // }

  return (
    <div>
      <div>
        <HeroSection />

        <div>
          <h1
            className="font-bold text-4xl text-center  "
            style={{ marginTop: '5rem' }}
          >
            Featured Property
          </h1>
          <section className="max-w-7xl m-auto py-7">
            <div className="flex flex-wrap justify-center m-10 ">
              {properties.map((property) => (
                <Cards
                  key={property.id}
                  property={property}
                  location={property.location[1].name}
                  category={property.category[1].name}
                  coverPhoto={property.coverPhoto?.url}
                />
              ))}
              {/* <Cards /> */}
            </div>
          </section>
          <main className="">
            <section
              className="flex justify-center items-center self-center "
              style={{ height: '100vh' }}
            >
              <div className="text-left w-1/2 ms-10">
                <h3 className="text-2xl font-medium mb-4">Craft Your Dream</h3>
                <h3 className="text-4xl font-bold mb-4">
                  Bret'les Premier Real Estate
                </h3>
                <h3 className="text-2xl font-base mb-4">
                  Leading Property Broker in Abu Dhabi
                </h3>
                <p>
                  Welcome to Parker Premier Real Estate, your premium
                  destination for all your real estate needs. Whether you’re
                  looking to buy, sell, or invest in properties, we are here to
                  guide you every step of the way.
                </p>
              </div>
              <div>
                <Form />
              </div>
            </section>
          </main>
          <div>
            <div
              className="flex flex-col justify-center bg-black text-white"
              style={{ height: '70vh', width: '100%' }}
            >
              <div className="flex flex-col text-center">
                <h3 className="text-lg mb-10">We're Here To Help You</h3>
                <h1 className="mb-10 text-4xl font-medium">
                  What Are You Looking For?
                </h1>
              </div>
              <div className="flex flex-nowrap  justify-center space-x-10">
                <Link
                  to="properties/propertyList"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img className="w-44 rounded-lg h-20" src={photo2} alt="" />
                  <p className="mt-8 font-semibold text-2xl">Apartments</p>
                </Link>
                <Link
                  to="properties/propertyList"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img
                    className="w-44 rounded-lg h-20"
                    src={photo4}
                    alt="Townhouses picute"
                  />
                  <p className="mt-8 font-semibold text-2xl">Townhouse</p>
                </Link>
                <Link
                  to="properties/propertyList"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img
                    className="w-44 rounded-lg h-20"
                    src={photo3}
                    alt="Penthouses picute"
                  />
                  <p className="mt-8 font-semibold text-2xl">Penthouses</p>
                </Link>
                <Link
                  to="properties/propertyList"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img
                    className="w-44 rounded-lg h-20"
                    src={photo1}
                    alt="Villas picute"
                  />
                  <p className="mt-8 font-semibold text-2xl">Villas</p>
                </Link>
                <Link
                  to="properties/propertyList"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <Tooltip content="Click for More:">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <AddCircleIcon />
                    </span>
                  </Tooltip>
                  <p className="mt-8 font-semibold text-2xl">And More</p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: '100vh' }}
              className="flex flex-col text-center items-center justify-center"
            >
              <h2 className="text-4xl font-medium mb-14">
                HOW CAN WE HELP YOU?
              </h2>
              <p className="mb-16 font-medium w-1/2">
                We at Bret'les are committed to deliver the best brokering
                service in the market. Whether you are looking to sell your
                property or purchase your next investment, we are here to assist
                you.
              </p>
              <div className="flex space-x-24">
                <div>
                  <Link to="properties/propertyList">
                    <img
                      className="w-72 h-72 p-1 bg-gray-500 rounded-md"
                      src={img1}
                      alt="Buy_IMG"
                    />
                    <h2 className="text-3xl font-semibold mt-10 ">
                      Buy a Property
                    </h2>
                  </Link>
                </div>
                <div>
                  <Link to="properties/contactUs">
                    <img
                      className="w-72 h-72 p-1 bg-gray-500 rounded-md"
                      src={img2}
                      alt="Sell_img"
                    />
                    <h2 className="text-3xl font-semibold mt-10">
                      Sell a Property
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SemiFooter />
    </div>
  );
}
