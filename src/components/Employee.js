import React from 'react'
import EditEmployee from './EditEmployees'

export default function Employee(props) {
      console.log("{props.id}", props.id);

      return (
            <div>
                  <div className=" m-2 py-8  px-8 max-w-sm  space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
                        <img className="object-cover h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                              src={props.img} />
                        <div className="text-center space-y-2 sm:text-left">
                              <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                          {props.name}
                                    </p>
                                    <p className="text-slate-500 font-medium">
                                          {props.role}
                                    </p>
                              </div>
                              <EditEmployee removeEmployee={props.removeEmployee} id={props.id} name={props.name} role={props.role} UpdateEmployee={props.UpdateEmployee} />

                        </div>
                  </div>

            </div>
      )
}
