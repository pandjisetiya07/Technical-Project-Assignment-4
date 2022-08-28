import React from 'react'
import Navbar from '../Navbar/Navbar'
import Accordion from 'react-bootstrap/Accordion';
// import DataSkill from './DataSkill';
import {SkillData, SkillData2} from './DataSkill';
import './StyleSkill.css'

const Skill = () => {

  const renderSkill = (item, index) => {
    return (
      <>
      
    <div className='accordion'>
      <Accordion defaultActiveKey={index} >
        <Accordion.Item eventKey>
          <Accordion.Header>
            <div className='title'>
                {item.title}
            </div>
            </Accordion.Header>
          <Accordion.Body>
            <div className='textbody'>
              <ul>
                <li>
                  {item.textbody}
                </li>
                <div className='experience'>
                  {item.experience}
                </div>
             </ul>
                 {/* <hr/>
              <ul>
                <li>
                  {item.textbody2}
                </li>
                <div className='experience'>
                  {item.experience2}
                </div>
              </ul>
              <hr/>
              <ul>
                <li>
                  {item.textbody3}
                </li>
                <div className='experience'>
                  {item.experience3}
                </div> 
              </ul>*/}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </>
    )
  }
  return (
    <>
      <Navbar />
      <div className='skill'>
        <h1>Skill</h1>
      </div>

      <div className="container">
        <div className="col-6">
           {SkillData.map(renderSkill)}
        </div>
        <div className="col-6">
           {SkillData2.map(renderSkill)}
        </div>
      </div>

    </>
  )
}

export default Skill