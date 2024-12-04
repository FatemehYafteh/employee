
import { useState } from 'react';
import Employee from './Employee';
// import AddeMployee from './AddEmployee';
import AddeMployee from './AddeMployee'
export default function Employees() {
  const [name, setName] = useState();
  const [show, setShow] = useState(false);

  const [role, setRole] = useState();
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Mahyan",
        role: 'dev',
        img: "../Assets/images/EmployeeImages/mah.jpg"
      },
      {
        id: 2,
        name: "fatemeh",
        role: 'devcccccccccc',
        img: "https://shut.ir/storage/image/2024/8/6/%D8%B9%DA%A9%D8%B3-%DA%AF%D9%84-%D8%B2%DB%8C%D8%A8%D8%A7-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA.webp"
      },
      {
        id: 3,
        name: "fgn f",
        role: 'devvvvvvvv',
        img: "https://shut.ir/storage/image/2024/8/6/%D8%B9%DA%A9%D8%B3-%DA%AF%D9%84-%D8%B2%DB%8C%D8%A8%D8%A7-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA.webp"
      },
      {
        id: 4,
        name: "ngdn ",
        role: 'devhhhhhhh',
        img: "https://shut.ir/storage/image/2024/8/6/%D8%B9%DA%A9%D8%B3-%DA%AF%D9%84-%D8%B2%DB%8C%D8%A8%D8%A7-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA.webp"
      },
      {
        id: 5,
        name: "jh,hj",
        role: 'devmmm',
        img: "https://shut.ir/storage/image/2024/8/6/%D8%B9%DA%A9%D8%B3-%DA%AF%D9%84-%D8%B2%DB%8C%D8%A8%D8%A7-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA.webp"
      }
    ]
  );
  function UpdateEmployee(id, newName, newRole) {
    const newEmployee = employees.map((item) => {
      if (item.id == id) {
        return { ...item, name: newName, role: newRole }
      }
      return item;
    })
    setEmployees(newEmployee);


  }
  function removeEmployee(id) {

    const newEmployee = employees.filter((item) => (item.id !== id))
    setEmployees(newEmployee);


  }

  function addEmployee(newName , newRole) {

    const newEmployee ={
      name: name, 
      role: role
    //img:"../public/img"+ newimg +".png"
    }
   

    setEmployees([...employees,newEmployee]);


  }
  return (
    <div className='flex flex-wrap justify-center'>

      <div className='flex flex-wrap justify-center'>

        {employees.map((item) => {
          return (
            <div key={item.id}>
              <Employee
                id={item.id}
                name={item.name}
                role={item.role}
                img={item.img}
                UpdateEmployee={UpdateEmployee}
                removeEmployee={removeEmployee} />
            </div>
          );
        })}
      </div>
      <AddeMployee addEmployee={addEmployee} setName={setName} setRole={setRole} show={show} setShow={setShow} />
      <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setShow(true)}>AddeMployee</button>
    </div>
  );
}