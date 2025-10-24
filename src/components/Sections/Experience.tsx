import ExperienceCard from "../SubComponents/ExperienceCard"
import intersystems from "../../assets/company_logos/intersystem.svg"
import usyd from "../../assets/company_logos/Usyd.svg"
import Prop from "../../assets/company_logos/42Prop.jpg"
import kfc from "../../assets/company_logos/kfc.png"

function Experience(){
    const experiences = [
        { 
            logo_path: Prop, 
            role: 'Junior Developer', 
            start: 'Sept 2025', 
            end: 'Present',
            responsibilities: [
                "Engineered modular system architecture in Odoo, designing relational data models (Clients, Agents, Properties,Portfolios) with computed fields and dynamic visibility conditions to improve data integrity and usability",
                "Automated key performance metric calculations (rental yield, capital growth, portfolio ROI), eliminating manualtracking and ensuring analytics consistency",
                "Supported the creation of analytics and AI integration frameworks to guide future data-driven decision-makingand enhance product scalability",
            ],
            align: true
        },
        { 
            logo_path: usyd, 
            role: 'Research Intern', 
            start: 'Jan 2025', 
            end: 'Mar 2025',
            responsibilities: [
                "Automated NDVI feature extraction by replacing manual QGIS workflows with a Python-based pipeline that ingests and preprocesses satellite imagery for scalable downstream analysis.",
                "Optimized satellite data collection using multi-threading with the Sentinel-2 API and Google Earth Engine, reducing data processing time by 50%",
                "Analyzed and visualized NDVI time-series across spatial regions to uncover trends in vegetation health, contributing to data-driven insights on land productivity",
            ],
            align: true
        },
        { 
            logo_path: intersystems, 
            role: 'Software Engineer Intern', 
            start: 'Dec 2023', 
            end: 'Feb 2024',
            responsibilities: [
                "Developed a data pipeline to transform unstructured clinical inputs (doctor’s notes, PDFs, voice memos) into structured FHIR messages, streamlining healthcare documentation workflows",
                "Managed and queried vector databases to support LLM-driven semantic search, mapping medical terms to SNOMED codes for structured interoperability",
                "Engineered a full-stack prototype using Flask and React, integrating a backend vector similarity engine to support clinical terminology retrieval",
            ],
            align: true
        }, 
    ]

    return(
        <section className="w-full py-12 md:py-16 2xl:py-20" id="Work">
            <div className="mx-auto flex flex-col w-full max-w-7xl gap-6 px-4 md:px-8 md:gap-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <span className="font-inter text-gray-600">Work Experience</span>
                        </div>
                    </div>
                    <p className="font-inter text-gray-600">A quick summary of my recent work experiences</p>
                </div>
                {/* Cards of work experience here */}
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} logo_path={experience.logo_path} role={experience.role} start={experience.start} end = {experience.end} responsibilities={experience.responsibilities} align={experience.align}/>
                ))}
            </div>
        </section>
    )
}

export default Experience