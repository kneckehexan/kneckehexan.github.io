import React from 'react'
import '../styles/resume.css'

function Resume() {
  return (
    <div>
      <section>
        <header><h1>Resumé</h1></header>
        <article>
          <header><h2>Employment</h2></header>
          <table className='employment-table'>
            <tbody>
              <tr>
                <td>2015 - now</td>
                <td>Bjerking AB</td>
                <td rowSpan={3}>Life Science consultant</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>ARFY</td>
              </tr>
              <tr>
                <td>2014 - 2015</td>
                <td>PRC Engineering AB</td>
              </tr>
              <tr>
                <td>2012 - 2013</td>
                <td>Axis Communications AB</td>
                <td>Design Engineer</td>
              </tr>
              <tr>
                <td>2010, 2011, 2012</td>
                <td>Hexicon AB</td>
                <td>Design Engineer</td>
              </tr>
              <tr>
                <td>2008</td>
                <td>Fagerdala World Foams AB</td>
                <td>Contractor</td>
              </tr>
              <tr>
                <td>2006 - 2007</td>
                <td>Armed Forces</td>
                <td>Conscripted</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <header><h2>Assignments</h2></header>
          <table className='assignments-table'>
            <tbody>
              <tr>
                <td>2021</td>
                <td>
                  <span className='bold-text'>Validation Engineer</span>, Cytiva Sweden AB, via Bjerking AB <br />
                  <p>Write installation and operational qualification protocols as well as comissioning protocols for various pumps and a loading/unloading system of solvent media.</p>
                </td>
              </tr>
              <tr>
                <td>2020 - 2021</td>
                <td>
                  <span className='bold-text'>Project manager</span>, Cytiva Sweden AB, via Bjerking AB <br />
                  <p>Leading a team to investigate the possibility of optimizing current facilities (lab, offices, storage) comprising of about 16 000 m<span className='sup'>2</span> for future staff expansion.</p>
                </td>
              </tr>
              <tr>
                <td>2014 - 2020</td>
                <td>
                  <span className='bold-text'>Project manager / Project engineer</span>, New Karolinska Hospital, via PRC Engineering AB, ARFY and Bjerking AB <br />
                  <p>- Procurement of and planning for medical device to be installed in new hospital environments.</p>
                  <p>- Planning, CAD-coordination, public purchasing, delivery- and installation coordination, commissioning and handover of medical equipment, ranging from a hyperbaric oxygen chamber to examination lights.</p>
                </td>
              </tr>
              <tr>
                <td>2014</td>
                <td>
                  <span className='bold-text'>Design Engineer</span>, Crucell Swden AB, via PRC Engineering AB<br />
                  <p>Produce an updated P&amp;ID-scheme using AutoCad for the part of the plant that handles steam and condensate.</p>
                </td>
              </tr>
              <tr>
                <td>2014</td>
                <td>
                  <span className='bold-text'>Design Engineer</span>, Studsvik Nuclear AB, via PRC Engineering AB<br />
                  <p>Produce an isometry of a new sewer system using Plant 3D.</p>
                </td>
              </tr>
              <tr>
                <td>2013</td>
                <td>
                  <span className='bold-text'>Design Engineer</span>, Axis Communications AB<br />
                  <p>Build a library of standard components using CAD and storing these with attributes in a database (Windchill).</p>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <header><h2>Education</h2></header>
          <table className='education-table'>
            <tr>
              <td>2007 - 2013</td>
              <td><span className='bold-text'>Mechanical Engineering (M.Sc.)</span>, Faculty of Engineering at Lund University</td>
            </tr>
            <tr>
              <td>2020</td>
              <td><span className='bold-text'>Web Development I</span>, Stockholm University</td>
            </tr>
            <tr>
              <td>2020</td>
              <td><span className='bold-text'>Algorithms and Data Structures</span>, Uppsala University</td>
            </tr>
            <tr>
              <td>2020</td>
              <td><span className='bold-text'>Object Oriented Programming with Java</span>, Uppsala University</td>
            </tr>
            <tr>
              <td>2019</td>
              <td><span className='bold-text'>Scientific Commputing I</span>, Uppsala University</td>
            </tr>
            <tr>
              <td>2004</td>
              <td><span className='bold-text'>Mathematics Alfa</span>, Faculty of Engineering at Lund University</td>
            </tr>
            <tr>
              <td>2001 - 2004</td>
              <td><span className='bold-text'>Science Programme</span>, Katedralskolan (upper secondary school), Lund</td>
            </tr>
          </table>
        </article>
        <article>
          <header><h2>Certificates &amp; Courses</h2></header>
          <table className='courses-table'>
            <tr>
              <td>CS50x</td>
              <td><a href="https://cs50.harvard.edu/certificates/9ad2c518-f268-46d3-bec0-4bc159616749" title='Link to CS50x certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Responsive Web Design</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/responsive-web-design" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>JavaScript Algorithms and Data Structures</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/javascript-algorithms-and-data-structures" title='Link to  certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Front End Development Libraries</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/front-end-development-libraries" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Data Visualization</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/data-visualization" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Back End Development and API's</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/back-end-development-and-apis" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Quality Assurance</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/quality-assurance-v7" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Scientific Computing with Python</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/scientific-computing-with-python-v7" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Data Analysis with Python</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/data-analysis-with-python-v7" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Information Security</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/information-security-v7" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
            <tr>
              <td>Machine Learning with Python</td>
              <td><a href="https://www.freecodecamp.org/certification/ptunbjer/machine-learning-with-python-v7" title='Link to certificate' target='_blank' rel='noopener noreferrer'>Link to Certificate</a></td>
            </tr>
          </table>
        </article>
      </section>
    </div>
  )
}

export default Resume