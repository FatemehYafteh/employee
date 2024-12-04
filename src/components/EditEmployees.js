import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  return (
    <>
    <div className='flex gap-4'>
      
      <button
        onClick={handleShow}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white
    hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">update</button>
      <button
        onClick={()=>props.removeEmployee(props.id)}
        className="px-4 py-1 text-sm text-red-700 font-semibold rounded-full border border-red-500 hover:text-red
   text-red-700 0 hover:border-transparent focus:outline-none focus:ring-2 focus:text-red-700  focus:ring-offset-2">delete</button>
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-full max-w-sm" onSubmit={(e) => {
            e.preventDefault();
            props.UpdateEmployee(props.id, name, role);
            handleClose();
          }
          }>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
                 focus:border-purple-500" id="name" type="text" defaultValue={name} 
                 onChange={(e) => { setName(e.target.value) }} />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
     focus:bg-white focus:border-purple-500" id="role" type="text" defaultValue={role}
                  onChange={(e) => { setRole(e.target.value) }} />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
            </div>
            <button className='bg-purple-600 hover:bg-purple-700
             text-white font-bold py-2 px-4 rounded' type='submit'>update</button>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='bg-slate-400 hover:bg-blue-700
           text-white font-bold py-2 px-4 rounded'>close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;