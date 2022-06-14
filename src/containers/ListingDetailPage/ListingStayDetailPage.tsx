import React, { FC, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import LocationMarker from 'components/AnyReactComponent/LocationMarker'
import GuestsInput from 'components/HeroSearchForm/GuestsInput'
import StayDatesRangeInput from 'components/HeroSearchForm/StayDatesRangeInput'
import { DateRage } from 'components/HeroSearchForm/StaySearchForm'
import GoogleMapReact from 'google-map-react'
import useWindowSize from 'hooks/useWindowResize'
import moment from 'moment'
import { FocusedInputShape } from 'react-dates'
import Avatar from 'shared/Avatar/Avatar'
import Badge from 'shared/Badge/Badge'
import ButtonPrimary from 'shared/Button/ButtonPrimary'
import ButtonSecondary from 'shared/Button/ButtonSecondary'
import ButtonClose from 'shared/ButtonClose/ButtonClose'
import NcImage from 'shared/NcImage/NcImage'
import LikeSaveBtns from './LikeSaveBtns'
import ModalPhotos from './ModalPhotos'

export interface ListingStayDetailPageProps {
  className?: string
  isPreviewMode?: boolean
}

const PHOTOS: string[] = [
  'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const Amenities_demos = [
  { name: 'la-key', icon: 'la-key' },
  { name: 'la-luggage-cart', icon: 'la-luggage-cart' },
  { name: 'la-shower', icon: 'la-shower' },
  { name: 'la-smoking', icon: 'la-smoking' },
  { name: 'la-snowflake', icon: 'la-snowflake' },
  { name: 'la-spa', icon: 'la-spa' },
  { name: 'la-suitcase', icon: 'la-suitcase' },
  { name: 'la-suitcase-rolling', icon: 'la-suitcase-rolling' },
  { name: 'la-swimmer', icon: 'la-swimmer' },
  { name: 'la-swimming-pool', icon: 'la-swimming-pool' },
  { name: 'la-tv', icon: 'la-tv' },
  { name: 'la-umbrella-beach', icon: 'la-umbrella-beach' },
  { name: 'la-utensils', icon: 'la-utensils' },
  { name: 'la-wheelchair', icon: 'la-wheelchair' },
  { name: 'la-wifi', icon: 'la-wifi' },
  { name: 'la-baby-carriage', icon: 'la-baby-carriage' },
  { name: 'la-bath', icon: 'la-bath' },
  { name: 'la-bed', icon: 'la-bed' },
  { name: 'la-briefcase', icon: 'la-briefcase' },
  { name: 'la-car', icon: 'la-car' },
  { name: 'la-cocktail', icon: 'la-cocktail' },
  { name: 'la-coffee', icon: 'la-coffee' },
  { name: 'la-concierge-bell', icon: 'la-concierge-bell' },
  { name: 'la-dice', icon: 'la-dice' },
  { name: 'la-dumbbell', icon: 'la-dumbbell' },
  { name: 'la-hot-tub', icon: 'la-hot-tub' },
  { name: 'la-infinity', icon: 'la-infinity' }
]

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({
  className = '',
  isPreviewMode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openFocusIndex, setOpenFocusIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, 'days')
  })

  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
    useState<FocusedInputShape>('startDate')
  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false)

  const windowSize = useWindowSize()

  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34
    }
    if (windowSize.width <= 500) {
      return undefined
    }
    if (windowSize.width <= 1280) {
      return 56
    }
    return 48
  }

  function closeModalAmenities() {
    setIsOpenModalAmenities(false)
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true)
  }

  const handleOpenModal = (index: number) => {
    setIsOpen(true)
    setOpenFocusIndex(index)
  }

  const handleCloseModal = () => setIsOpen(false)

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge name="My Trip My Adventure" />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Beach House in Collingwood
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1"> Bali, Indonesia</span>
          </span>
        </div>

        {/* 4 */}
        <div className="flex items-center">
          <Avatar sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{' '}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Kevin Francis
            </span>
          </span>
        </div>

        {/* 5 */}

        {/* 6 */}
        {/* <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              6 <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              6 <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              3 <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2 <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div> */}
      </div>
    )
  }

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>
            Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
            accommodation, an outdoor swimming pool, a bar, a shared lounge, a
            garden and barbecue facilities. Complimentary WiFi is provided.
          </span>
          <br />
          <br />
          <span>
            There is a private bathroom with bidet in all units, along with a
            hairdryer and free toiletries.
          </span>
          <br /> <br />
          <span>
            The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental
            service and a car rental service are available at the accommodation,
            while cycling can be enjoyed nearby.
          </span>
        </div>
      </div>
    )
  }

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Amenities </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            About the property's amenities and services
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {Amenities_demos.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>

        {/* ----- */}
        <div className="w-14 border-b border-neutral-200"></div>
        <div>
          <ButtonSecondary onClick={openModalAmenities}>
            View more 20 amenities
          </ButtonSecondary>
        </div>
        {renderMotalAmenities()}
      </div>
    )
  }

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full">
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {Amenities_demos.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-6 space-x-8"
                      >
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}
                        ></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    )
  }

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            San Diego, CA, United States of America (SAN-San Diego Intl.)
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
          <div className="rounded-xl overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyDxJaU8bLdx7sSJ8fcRdhYS1pLk8Jdvnx0'
              }}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{
                lat: 55.9607277,
                lng: 36.2172614
              }}
            >
              <LocationMarker lat={55.9607277} lng={36.2172614} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    )
  }

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Refund 50% of the booking value when customers cancel the room
            within 48 hours after successful booking and 14 days before the
            order time. <br />
            Then, cancel the room 14 days before the order time, get a 50%
            refund of the total amount paid (minus the service fee).
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Barang bawaan</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Pakaian ganti</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Snack Pribadi</span>
            </div>
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>PowerBank</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Kamera</span>
            </div>
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Obat Pribadi</span>
            </div>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Special Note</h4>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>
                Ban and I will work together to keep the landscape and
                environment green and clean by not littering, not using
                stimulants and respecting people around.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const renderSidebar = () => {
    return (
      <div className="listingSection__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">RP. 3.850.000,-</span>
        </div>

        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <StayDatesRangeInput
            wrapClassName="divide-x divide-neutral-200 dark:divide-neutral-700"
            onChange={(date) => setSelectedDate(date)}
            numberOfMonths={1}
            fieldClassName="p-5"
            defaultValue={selectedDate}
            anchorDirection={windowSize.width > 1400 ? 'left' : 'right'}
          />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInput
            fieldClassName="p-5"
            defaultValue={{
              guestAdults: 1,
              guestChildren: 2,
              guestInfants: 0
            }}
          />
        </form>

        {/* SUBMIT */}
        <ButtonPrimary>Reserve</ButtonPrimary>
      </div>
    )
  }

  return (
    <div
      className={`nc-ListingStayDetailPage  ${className}`}
      data-nc-id="ListingStayDetailPage"
    >
      {/* SINGLE HEADER */}
      <>
        <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(0)}
            >
              <NcImage
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={PHOTOS[0]}
                prevImageHorizontal
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? 'hidden sm:block' : ''
                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ''}
                  prevImageHorizontal
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>
        {/* MODAL PHOTOS */}
        <ModalPhotos
          imgs={PHOTOS}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
        />
      </>

      {/* MAIn */}
      <main className="container mt-11 flex ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10 mb-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSection7()}
          {renderSection8()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow mb-10">
          <div className="sticky top-24">{renderSidebar()}</div>
        </div>
      </main>

      {/* STICKY FOOTER MOBILE */}
      {!isPreviewMode && (
        <div className="block lg:hidden fixed bottom-0 inset-x-0 py-4 bg-white text-neutral-900 border-t border-neutral-200 z-20">
          <div className="container flex items-center justify-between">
            <span className="text-2xl font-semibold">IDR. 3.850.000,-</span>

            <ButtonPrimary href="##">Reserve</ButtonPrimary>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListingStayDetailPage
