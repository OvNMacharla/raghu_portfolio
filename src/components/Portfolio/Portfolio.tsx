import React from 'react'
import { projects } from '../../data/UserDetails.ts'
import { Project } from '../../types/UserDetailsType.ts'

const Portfolio = () => {
  const handleClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <div className="relative">
      <span className="text-4xl font-semibold">Projects</span>
      <div
        className="bg-[#fcd303] h-1.5 rounded-full mt-5"
        style={{ width: '5%' }}
      ></div>
      <div className="flex flex-wrap p-5 gap-6">
        {projects.map((detail: Project) => (
          <div
            key={detail.id}
            onClick={() => handleClick(detail.link)}
            className="md:w-2/5 border brightness-75 border-border-color rounded-lg p-2 shadow-md bg-border-background hover:brightness-100 cursor-pointer"
          >
            <img src={detail.image} />
            <p className="text-base font-semibold pt-3">{detail.title}</p>
            <p className="text-sm pt-3">
              <span className="text-base font-bold pt-3">Objective: </span>
              {detail.objective}
            </p>
            <p className="text-sm pt-3">
              <span className="text-base font-bold pt-3">Methodology: </span>
              {detail.methodology}
            </p>
            <p className="text-sm pt-3">
              <span className="text-base font-bold pt-3">Outcome: </span>
              {detail.outcome}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
