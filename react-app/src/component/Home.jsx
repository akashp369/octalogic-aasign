import React from "react";
import people from "../assets/people.png";
import "../styles/Home.css";
const Home = () => {
    const data = [
        { enr: 1545412, name: 'John', cname: "Percussion" , fee:"$200" },
        { enr: 4785451, name: 'John', cname: "Percussion" , fee:"$200" },
        { enr: 1478187, name: 'John', cname: "Percussion" , fee:"$200" },
        { enr: 7899711, name: 'John', cname: "Percussion" , fee:"$200" },
        { enr: 1775487, name: 'John', cname: "Percussion" , fee:"$200" },
       
      ];
    const data1 = [
        { enr: 1545412, name: 'John', lname: "Doe" ,course:"3", fee:"$200" },
        { enr: 4785451, name: 'John', lname: "Doe" ,course:"3", fee:"$200" },
        { enr: 1478187, name: 'John', lname: "Doe" ,course:"3", fee:"$200" },
        { enr: 7899711, name: 'John', lname: "Doe" ,course:"3", fee:"$200" },
        { enr: 1775487, name: 'John', lname: "Doe" ,course:"3", fee:"$200" },
       
      ];
  return (
    <div className="homecomp">
      <div className="firstcomp">
        <h2>Overview</h2>
        <div className="firstinnercomp">
          <div>
            <img src={people} alt="" />
            <div>
              <h4>164</h4>
              <p>total number of students</p>
            </div>
          </div>
          <div>
            <img src={people} alt="" />
            <div>
              <h4>12</h4>
              <p>total number of courses</p>
            </div>
          </div>
          <div>
            <img src={people} alt="" />
            <div>
              <h4>$2000</h4>
              <p>total amount earned</p>
            </div>
          </div>
          <div>
            <img src={people} alt="" />
            <div>
              <h4>Guitar</h4>
              <p>best performing courses</p>
            </div>
          </div>
          <div>
            <img src={people} alt="" />
            <div>
              <h4>Flute</h4>
              <p>worst performing course</p>
            </div>
          </div>
        </div>
      </div>
      <div className="secondinnercomp">
        <div className="secfirst">
          <div>
            <h3>LATEST ENROLMENTS</h3>
          </div>
          <div>
            <a href="">view all course</a>
          </div>
        </div>
        <div className="sectable">
        <table>
        <thead>
          <tr>
            <th>Enr. No</th>
            <th>S.Name</th>
            <th>C.Name</th>
            <th>Fees</th>
            <th>Enr. Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.enr}</td>
              <td>{row.name}</td>
              <td>{row.name}</td>
              <td>{row.fee}</td>
              <td>{new Date().toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
      <div className="secondinnercomp">
        <div className="secfirst">
          <div>
            <h3>BEST STUDENTS</h3>
          </div>
          <div>
            <a href="">view all course</a>
          </div>
        </div>
        <div className="sectable">
        <table>
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>F.Name</th>
            <th>L.Name</th>
            <th>Course#</th>
            <th>Total Fees</th>
            <th>Reg. Date</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((row) => (
            <tr key={row.id}>
              <td>{row.enr}</td>
              <td>{row.name}</td>
              <td>{row.lname}</td>
              <td>{row.course}</td>
              <td>{row.fee}</td>
              <td>{new Date().toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
