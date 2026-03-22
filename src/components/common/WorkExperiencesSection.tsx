import { Fragment } from 'react';
import Section from '../ui/Section';
import { HiBuildingOffice } from "react-icons/hi2";
import Accordion from '../ui/Accordion';
import ExperiencesData from "./../../data/work_experiences.json"
import Timeline from '../ui/Timeline';

type Project = {
  name: string, 
  description: {id: string, en: string}, 
  jobdesc: {id: Array<string>, en: Array<string>},
  tech_stack: {
    frontend: Array<string>,
    backend: Array<string>
  }
}

type Experience = Array<{
  company: string,
  role: string,
  duration: {id: string, en: string}
  projects: Array<Project>,
}>


export default function WorkExperiencesSection({lang}: {lang: 'id' | 'en'}) {
  
  const AccordionContent = (experiences: Experience) => {

    
    const Projects = (projects: Array<Project>) => 
       (
        projects.map((item, idx) => (
          <Fragment key={idx}>
              <p className='text-putih font-bold'>{item.name}</p>
              <p className='text-putih'>{item.description[lang]}</p>

              <div className='mt-2'>
                <p className='text-putih'>Jobdesc:</p>
                <ul className='list-disc text-putih pl-6'>
                  {item.jobdesc[lang].map((job, idx2) => (
                    <li key={idx2}><p className='text-putih mb-2'>{job}</p></li>
                  ))}
                </ul>
              </div>

              <div className='border border-hijau p-4 rounded-md flex flex-col gap-5 mt-4 w-full sm:w-fit'>
                {/* BACKEND */}
                {item.tech_stack.backend && item.tech_stack.backend.length > 0 && (
                    <div>
                      <p className='text-putih font-bold mb-2'>Backend</p>

                      <div className='flex gap-2 flex-wrap'>
                        {item.tech_stack.backend.map((tech, beIdx) => (
                            <span key={beIdx} className="rounded-full border border-hijau px-2.5 py-0.5 text-[12px] text-hijau overflow-hidden flex justify-center items-center text-center">
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                )}


                {/* FRONTEND */}
                {item.tech_stack.frontend && item.tech_stack.frontend.length > 0 && (
                    <div>
                      <p className='text-putih font-bold mb-2'>Frontend</p>

                      <div className='flex gap-2 flex-wrap'>
                        {item.tech_stack.frontend.map((tech, feIdx) => (
                            <span key={feIdx} className="rounded-full border border-hijau px-2.5 py-0.5 text-[12px] text-hijau overflow-hidden flex justify-center items-center text-center">
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                )}
              </div>
          </Fragment>
        ))
      )
    
    
    const Title = ({company, role, duration}:{company: string, role: string, duration: string}) => (
      <div>
          <p className='text-white font-bold'>{company}</p>
          <p className='text-white font-semibold'>{role}</p>
          <p className='text-white font-medium'>{duration}</p>
      </div>
    );

    const Descripton = ({projects}:{projects: Array<Project>}) => {
      return (
        <div className='w-full'>
            <p className='text-white mb-4 font-bold'>
              {lang === "id" ? "Projects yang saya kerjakan:" : "Projects I have worked on:"}
            </p>

            <Timeline items={Projects(projects)}/>
        </div>
      )
    }


    var datas = experiences.map((val) => ({
      title: <Title company={val.company} role={val.role} duration={val.duration[lang]}/>,
      detail: <Descripton projects={val.projects}/>
    }))

    return <Accordion datas={datas}/>;
  }


  return (
      <Section title={lang == "id" ? "Pengalaman Kerja" : "Experience"} icon={<HiBuildingOffice />}>
        {AccordionContent(ExperiencesData)}
      </Section>
  )
}

