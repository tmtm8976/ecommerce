// import React, { useContext, useEffect, useState } from 'react'
// import { gState } from '../context/Context'
// import { getSingleUser } from '../services/user.service'

// export const Account = () => {
//   const {data} = useContext(gState)
//   const [userSetting, setUserSetings] = useState(null)

//   const {userData} = data
//   const {id} = userData
//   const getUserById = async (id) =>{
//     const user = await getSingleUser(id)
//     setUserSetings(user)
//   }



//   useEffect(()=>{
//     getUserById(id)
//   },[])

//   return (
//     <>
//     {userSetting && <div className='flex'>
//       <div className='flex flex-col'>   
//         <img src={userSetting.image} alt="" />
//         <h1>{userSetting.firstName+" "+userSetting.lastName}</h1>
//         <h2>{userSetting.username}</h2>
//         {/* we should have a left side menu of the diffrent data categories */}
//       </div>
//       <div>
//         {/* this is the right side of the menu */}
//         {/* here we sholud display the data of the selected category */}
//       </div>


//       {/* {"id":15, => account data
//       "firstName":"Jeanne", => account data
//       "lastName":"Halvorson", => account data
//       "maidenName":"Cummerata", => account data
//       "age":26, => general data
//       "gender":"female", => general data
//       "email":"kminchelle@qq.com",  => Conatct info
//       "phone":"+86 581 108 7855", => Conatct info
//       "username":"kminchelle", => account data
//       "password":"0lelplR", => account data
//       "birthDate":"1996-02-02", => general data
//       "image":"https://robohash.org/autquiaut.png", this one is already displayed
//       "bloodGroup":"A+",  => personal data
//       "height":176,  => personal data
//       "weight":45.7,  => personal data
//       "eyeColor":"Amber",  => personal data
//       "hair":   => personal data
//           {
//             "color":"Blond",
//             "type":"Straight"
//             },
//         "domain":"google.co.uk",  => network data
//         "ip":"78.43.74.226",     => network data
//         "address": => address is a category alone
//           {
//             "address":"4 Old Colony Way",
//             "city":"Yarmouth",
//             "coordinates":
//               {
//                 "lat":41.697168,
//                 "lng":-70.189992
//                 },
//             "postalCode":"02664",
//             "state":"MA"
//           },
//         "macAddress":"D9:DB:D9:5A:01:09", => network data
//         "university":"Donghua University, Shanghai", => education data
//         "bank":      => credit card
//           {
//             "cardExpire":"10/23",
//             "cardNumber":"3588859507772914",
//             "cardType":"jcb",
//             "currency":"Yuan Renminbi",
//             "iban":"FO12 1440 0396 8902 56"
//           },
//         "company":    => work 
//           {
//             "address":
//               {
//                 "address":"22572 Toreador Drive",
//                 "city":"Salinas",
//                 "coordinates":
//                   {
//                     "lat":36.602449,
//                     "lng":-121.699071
//                   },
//                 "postalCode":"93908",
//                 "state":"CA"
//               },
//             "department":"Marketing",
//             "name":"Hahn-MacGyver",
//             "title":"Software Test Engineer IV"
//           },
//         "ein":"62-0561095", => network data
//         "ssn":"855-43-8639", => network data
//         "userAgent":"Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.14 Safari/534.24" => network data
//         } */}
//     </div>}
//     </>
//   )
// }



import React, { useContext, useEffect, useState } from 'react'
import { gState } from '../context/Context'
import { getSingleUser } from '../services/user.service'

export const Account = () => {
  const {data} = useContext(gState)
  const [userSettings, setUserSettings] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('general') // initialize with general category

  const {userData} = data
  const {id} = userData

  const getUserById = async (id) =>{
    const user = await getSingleUser(id)
    setUserSettings(user)
  }

  useEffect(()=>{
    getUserById(id)
  },[])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const displayCategoryData = () => {
    switch(selectedCategory) {
      case 'general':
        return (
          <>
            <p className='font-bold py-2 border-b-2'>Age: <span className='font-light pl-3'>{userSettings.age}</span></p>
            <p className='font-bold py-2 border-b-2'>Gender: <span className='font-light pl-3'>{userSettings.gender}</span></p>
            <p className='font-bold py-2 border-b-2'>Birth Date: <span className='font-light pl-3'>{userSettings.birthDate}</span></p>
          </>
        )
      case 'contact':
      return (
        <>
          <p className='font-bold py-2 border-b-2'>Email: <span className='font-light pl-3'>{userSettings.email}</span></p>
          <p className='font-bold py-2 border-b-2'>Phone: <span className='font-light pl-3'>{userSettings.phone}</span></p>
        </>
      )
      case 'personal':
      return (
        <>
          <p className='font-bold py-2 border-b-2'>Blood Group: <span className='font-light pl-3'>{userSettings.bloodGroup}</span></p>
          <p className='font-bold py-2 border-b-2'>Height: <span className='font-light pl-3'>{userSettings.height}</span></p>
          <p className='font-bold py-2 border-b-2'>Weight: <span className='font-light pl-3'>{userSettings.weight}</span></p>
          <p className='font-bold py-2 border-b-2'>Eye Color: <span className='font-light pl-3'>{userSettings.eyeColor}</span></p>
          <p className='font-bold py-2 border-b-2'>Hair Color: <span className='font-light pl-3'>{userSettings.hair.color}</span></p>
          <p className='font-bold py-2 border-b-2'>Hair Type: <span className='font-light pl-3'>{userSettings.hair.type}</span></p>
        </>
      )
      case 'network':
      return (
        <>
          <p className='font-bold py-2 border-b-2'>Domain: <span className='font-light pl-3'>{userSettings.domain}</span></p>
          <p className='font-bold py-2 border-b-2'>IP: <span className='font-light pl-3'>{userSettings.ip}</span></p>
          <p className='font-bold py-2 border-b-2'>MAC Address: <span className='font-light pl-3'>{userSettings.macAddress}</span></p>
          <p className='font-bold py-2 border-b-2'>User Agent: <span className='font-light pl-3'>{userSettings.userAgent}</span></p>
        </>
      )
      case 'address':
      return (
        <>
          <p className='font-bold py-2 border-b-2'>Address: <span className='font-light pl-3'>{userSettings.address.address}</span></p>
          <p className='font-bold py-2 border-b-2'>City: <span className='font-light pl-3'>{userSettings.address.city}</span></p>
          <p className='font-bold py-2 border-b-2'>Postal Code: <span className='font-light pl-3'>{userSettings.address.postalCode}</span></p>
          <p className='font-bold py-2 border-b-2'>State: <span className='font-light pl-3'>{userSettings.address.state}</span></p>
        </>
      )
      case 'credit-card':
      return (
        <>
          <p className='font-bold py-2 border-b-2'>Card Type: <span className='font-light pl-3'>{userSettings.bank.cardType}</span></p>
          <p className='font-bold py-2 border-b-2'>Card Number: <span className='font-light pl-3'>{userSettings.bank.cardNumber}</span></p>
          <p className='font-bold py-2 border-b-2'>Card Expire: <span className='font-light pl-3'>{userSettings.bank.cardExpire}</span></p>
          <p className='font-bold py-2 border-b-2'>Currency: <span className='font-light pl-3'>{userSettings.bank.currency}</span></p>
          <p className='font-bold py-2 border-b-2'>IBAN: <span className='font-light pl-3'>{userSettings.bank.iban}</span></p>
        </>
      )
      case 'work':
      return (
        <>
          <p className='font-bold py-2 border-b-2'>Company Name: <span className='font-light pl-3'>{userSettings.company.name}</span></p>
          <p className='font-bold py-2 border-b-2'>Title: <span className='font-light pl-3'>{userSettings.company.title}</span></p>
          <p className='font-bold py-2 border-b-2'>Department: <span className='font-light pl-3'>{userSettings.company.department}</span></p>
          <p className='font-bold py-2 border-b-2'>Address: <span className='font-light pl-3'>{userSettings.company.address.address}</span></p>
          <p className='font-bold py-2 border-b-2'>City: <span className='font-light pl-3'>{userSettings.company.address.city}</span></p>
          <p className='font-bold py-2 border-b-2'>Postal Code: <span className='font-light pl-3'>{userSettings.company.address.postalCode}</span></p>
          <p className='font-bold py-2 border-b-2'>State: <span className='font-light pl-3'>{userSettings.company.address.state}</span></p>
        </>
      )
      default:
        return null
    }
  }

  return (
    <>
    <div className='w-100 h-[75vh] flex flex-col items-center content-center justify-center'>
      {userSettings && <>
      <div className='flex gap-8 items-center my-10'>
          <img src={userSettings.image} alt="" className='object-cover w-24 h-24 rounded-full shadow-md' />
          <div>
            <h1 className='font-bold text-xl'>{userSettings.firstName + " " + userSettings.lastName}</h1>
            <h2 className='font-bold text-zinc-400'>{userSettings.username}</h2>
        </div>
      </div>
        <div className='flex'>
            <div className='flex flex-col'>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('general')}>General</button>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('contact')}>Contact</button>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('personal')}>Personal</button>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('network')}>Network</button>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('address')}>Address</button>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('credit-card')}>Credit Card</button>
              <button className='px-5 py-2 font-bold text-sm text-zinc-400 hover:text-black border-b-2 hover:bg-zinc-200 transition-colors ease-in-out' onClick={() => handleCategoryClick('work')}>Work</button>
            </div>
          <div className='bg-zinc-100 py-4 px-3 w-[50vw]'>
            {displayCategoryData()}
          </div>
        </div>
        </>
      }
      </div>
    </>
  )
}