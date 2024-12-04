import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddeMployee(props) {
      const handleClose = () => props.setShow(false);
      const handleShow = () => props.setShow(true);


      return (
            <>
                  <Modal show={props.show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Add</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <form className="w-full max-w-sm" onSubmit={(e) => {
                                    e.preventDefault();
                                    props.addEmployee();
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
                 focus:border-purple-500" id="name" type="text" onChange={(e) => { props.setName(e.target.value) }} />
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
     focus:bg-white focus:border-purple-500" id="role" type="text"
                                                      onChange={(e) => { props.setRole(e.target.value) }} />
                                          </div>
                                    </div>
                                    <div className="md:flex md:items-center">
                                          <div className="md:w-1/3"></div>
                                    </div>
                                    <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' type='submit'>Add</button>

                              </form>
                        </Modal.Body>
                        <Modal.Footer>
                              <button onClick={handleClose} className='bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>close</button>
                        </Modal.Footer>
                  </Modal>
            </>
      );
}

export default AddeMployee;