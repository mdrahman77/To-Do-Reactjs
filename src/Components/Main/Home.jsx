import React, { useState } from "react";
import { BiBarcode } from "react-icons/bi";
import { CgToday } from "react-icons/cg";
import { FcAcceptDatabase, FcTodoList } from "react-icons/fc";
import { IoMdToday } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import Modal from "../Modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";


import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { use } from "react";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos,setTodos] =useState("")
  const [name, setName] =useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] =useState("10:00");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefult();
    console.log(" Submit clicked");
    if (name && time) {
      setError("");
      setTodos([
        ...todos,
        {
          id: Math.ceil(Math.random()*1000),
          names:name,
          times:moment(time,"HH:mm:ss").format("hh:mm a"),
          dates:(date).format("DD/MM/YYY"),
          checked: false,

        }
      ]);
    }else {
      setError('provide name and time');
    }
  };

console.log("names",name, date, time);

  return (
    <>
      <div className="bg-slate-400 px-px m-px pl-12 space-y-10 py-5 text-xl w-1/6">
        <p className="flex gap-3 items-center">
          <FcTodoList />
          Toodos Of
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center hover:bg-green-300 gap-3  border bg-slate-100 p-2 rounded-lg"
        >
          <IoAdd /> Make A Todo
        </button>
        <a className="flex gap-3 items-center hover:bg-blue-400">
          <IoMdToday /> Today
        </a>
        <a className="flex gap-3 items-center">
          <CgToday /> Next 7 Days
        </a>
        <a className="flex gap-3 items-center">
          <BiBarcode />
          Show All
        </a>
        <a className="flex gap-3 items-center">
          <FcAcceptDatabase />
          stuts
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="text-lg font-bold mb-4 text-center">Add A New Todo</h1>
        <form  onSubmit={handleSubmit}>
          <div>
            <input type="text"name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter the todo name"/>
          </div>
        
        
        <hr className="bg-slate-900 h-1 my-4 w-1/2" />

        <div className="flex justify-content-center items-center gap-3">
          <p className="flex gap-2 items-center">
            
            <MdDateRange></MdDateRange>Date Picker
          </p>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />;
        </div>
        <div className="flex justify-content-center items-center gap-3">
          <p className="flex gap-2 items-center">
            
            <AiOutlineFieldTime></AiOutlineFieldTime>Pick a time
          </p>
          <TimePicker
            onChange={(time) => setTime(time)}
            value={time}
            selected={time}
            amPmAriaLabe
            closeClock={true}
            disableClock={true}
            format="h:m:a"
            hourPlaceholder="hh"
            minutePlaceholder="ss"
            clearIcon={true}
            className={date}
          />
        </div>
        
        <div className="text-center mt-5 border-none p-3 outline-none w-100 cursor-pointer hover:bg-green-400">
          <input type="submit" value="Add Todo" />
        </div>
        </form>
        {
          error && 

        <p>{error}</p>
        }
      </Modal>
      ;
    </>
  );
}

export default Main;
