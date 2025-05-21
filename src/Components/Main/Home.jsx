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
import dayjs from "dayjs";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    if (name && time) {
      setError("");
      setTodos([
        ...todos,
        {
          id: Math.ceil(Math.random() * 1000),
          names: name,
          times: time,
          dates: dayjs(date).format("DD/MM/YYY"),
          checked: false,
        },
      ]);
      setIsModalOpen(false);
    } else {
      setError("provide name and time");
      setIsModalOpen(false);
    }
  };
  console.log(todos);

  return (
    <>
      <div className="flex p-5 bg-slate-200">
        <div className="bg-slate-400 px-px m-px pl-12 space-y-10 py-5 text-xl w-2/6">
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
        <a
          className="flex gap-3 items-center hover:bg-blue-400"
          onClick={(e) => {
            e.preventDefault();
            setShowUI("Today");
          }}
        >
          <IoMdToday /> Today
        </a>
        <a
          className="flex gap-3 items-center"
          onClick={(e) => {
            e.preventDefault();
            setShowUI("Next 7 days");
          }}
        >
          <CgToday /> Next 7 Days
        </a>
        <a
          className="flex gap-3 items-center"
          onClick={(e) => {
            e.preventDefault();
            setShowUI("show All");
          }}
        >
          <BiBarcode />
          Show All
        </a>
        <a
          className="flex gap-3 items-center"
          onClick={(e) => {
            e.preventDefault();
            setShowUI("stuts");
          }}
        >
          <FcAcceptDatabase />
          stuts
        </a>
        </div>
        <div className="flex flex-col justify-center items-center w-4/6">
          <h1 className="text-2xl font-bold text-center">Todo List</h1>
          {
            todos.length > 0 ? (
              <div className="grid grid-cols-3 gap-4 mt-5">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="bg-green-200 p-2 rounded-lg"
                  >
                    <h2 className="text-lg font-bold">{todo.id}</h2>
                    <h2 className="text-lg font-bold">{todo.names}</h2>
                    <h2>{todo.times}</h2>
                    <h2>{todo.dates}</h2>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-green-400">
                <h1>No todos available</h1>
              </div>
            )
          }
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="text-lg font-bold mb-4 text-center">Add A New Todo</h1>
        {error && <p className="capitalize text-red-600">{error}</p>}
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the todo name"
          />
        </div>

        <hr className="bg-slate-900 h-1 my-2 w-1/2" />

        <div className="flex justify-content-center items-center gap-3">
          <p className="flex gap-2 items-center">
            <MdDateRange></MdDateRange>Date Picker
          </p>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
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

        {/* <div className="text-center mt-5 border-none p-3 outline-none w-100 cursor-pointer hover:bg-green-400">
          <input type="submit" value="Add Todo" />
        </div> */}
        <div className="text-center mt-5 border-none p-3 text-black font-bold outline-none w-100 cursor-pointer hover:bg-red-400">
          <button
            type="submit"
            value="Add Todo"
            onClick={(e) => handleSubmit(e)}
          >
            Add Todo
          </button>
        </div>
      </Modal>
      ;
    </>
  );
}

export default Home;
