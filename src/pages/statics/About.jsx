import React from 'react'

const aboutUsData = [
  {
    title: 'Our Story',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisl vel risus suscipit tincidunt. Nullam auctor commodo nunc, vitae venenatis augue pretium et.'
  },
  {
    title: 'Our Mission',
    content: 'Praesent vel nisl euismod, bibendum mi sed, cursus metus. Nulla facilisi. Integer auctor velit nec sapien pharetra, sit amet consectetur elit euismod.'
  },
  {
    title: 'Our Team',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Cras sagittis ligula ut ante congue, vel consequat nisi ullamcorper.'
  }
]

export const About = () => {
  return (
    <div className="bg-white h-[75vh]">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <hr className='w-full pt-[0.5px] mb-5 border-0 bg-[#fe9900]' />
        {aboutUsData.map((item, index) => (
          <div key={index} className="mb-8 py-7">
            <h2 className="text-2xl font-bold mb-2 ">{item.title}</h2>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}