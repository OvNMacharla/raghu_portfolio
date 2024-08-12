import React from 'react'
import {
  workDetails,
  certifications,
  appreciations,
} from '../../data/UserDetails.ts'
import {
  Appreciation,
  Certification,
  WorkDetail,
} from '../../types/UserDetailsType.ts'

const About = () => (
  <div className="relative">
    <span className="text-4xl font-semibold">About Me</span>
    <div
      className="bg-[#fcd303] h-1.5 rounded-full mt-5"
      style={{ width: '5%' }}
    ></div>
    <p className="pt-4 text-sm text-cap-text">
      As an aspiring Project Manager with a solid foundation in Mechanical
      Engineering, I bring a unique blend of technical expertise and leadership
      skills to the table. My experience spans diverse projects, from
      engineering analysis and fabrication to renewable energy solutions. I have
      a proven ability to drive strategic initiatives, manage complex projects,
      and cultivate strong client relationships. Currently pursuing a Master’s
      in Engineering Management, I am eager to leverage my skills in a
      challenging environment that fosters growth and innovation. My goal is to
      contribute to projects that exceed client expectations while continuously
      enhancing my professional capabilities.
    </p>
    <div className="pt-5">
      <span className="text-lg font-semibold">What i&apos;m Doing</span>
      <div className="flex flex-wrap ">
        {workDetails.map((detail: WorkDetail) => (
          <div
            key={detail.id}
            className="p-4 md:w-[47%] flex border border-border-color rounded-lg p-2 shadow-md bg-border-background m-3"
          >
            <span>
              <img src={detail.emoji} className="w-10 mr-8" />
            </span>
            <div>
              <p className="font-bold text-sm">{detail.title}</p>
              <p className="text-sm text-cap-text">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    {certifications.length > 0 && (
      <div className="pt-5">
        <span className="text-lg font-semibold">Certifications</span>
        <div className="flex flex-wrap ">
          {certifications.map((detail: Certification) => (
            <div
              key={detail.id}
              onClick={() => window.open(detail.link)}
              className="p-4 md:w-[47%] w-screen flex border border-border-color rounded-lg p-2 shadow-md bg-border-background hover:border-button hover:cursor-pointer m-3"
            >
              <div>
                <p className="font-bold text-sm">{detail.title}</p>
                <p className="text-sm text-cap-text">{detail.issuer}</p>
                <p className="text-sm text-cap-text">{detail.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    <div className="pt-5">
      <span className="text-lg font-semibold">Appreciations</span>
      <div className="flex flex-wrap ">
        {appreciations.map((detail: Appreciation) => (
          <div
            key={detail.id}
            className="p-4 md:w-[47%] flex border border-border-color rounded-lg p-2 shadow-md bg-border-background m-3"
          >
            <div>
              <p className="font-bold text-sm">{detail.title}</p>
              <p className="text-sm text-cap-text">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default About
