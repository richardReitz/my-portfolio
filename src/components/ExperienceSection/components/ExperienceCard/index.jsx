import React from 'react';
import './styles.css';
import { FaCheck, FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaRegBuilding } from 'react-icons/fa';

export default function ExperienceCard({ work, active, onClick }) {
    return (
        <div
          className={`accordion-item ${active ? 'active' : ''}`}
        >
            <div className='accordion-toggle' onClick={onClick}>
                <div>
                    <p className="accordion-title">
                        {work.name}
                    </p>
                    <p className='experience-date'>{work.start_date} - {work.end_date}</p>
                </div>
                {active ?
                    <FaChevronUp />
                :
                    <FaChevronDown />
                }
            </div>

            <div className="accordion-content">
                <div className='company-view'>
                    <FaMapMarkerAlt size={14} />
                    <p>{work.location}</p>
                </div>
                <div className='company-view'>
                    <FaRegBuilding size={14} />
                    <p>{work.company}</p>
                </div>
                <p className='experince-description'>{work.description}</p>

                <div className='exp-items-view'>
                    {work.items.map((item) =>
                        <div className='company-view'>
                            <FaCheck size={12} />
                            <p>{item}</p>
                        </div>
                    )}
                </div>

                <div className='exp-stack-view'>
                    {work.stack.map((item) =>
                        <div className='stack-item'>
                            <span>{item}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}