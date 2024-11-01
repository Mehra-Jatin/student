"use client";
import students from "@/lib/students";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";


export default function Home() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-[100vw] bg-[#ffffff]">
        {/* Navbar */}
        <div className="w-[100%] h-[70px] shadow-md px-[50px] flex items-center">
          <CiSearch className="w-[20px] h-[20px] relative left-[40px] text-black" />
          <input
            className="w-[400px] h-[40px] rounded-3xl border-black border-[1px] px-[50px] text-black"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search students"
          />
        </div>

        {/* Topbar */}
        <div className="w-[100%] h-[100px] px-[50px] text-black flex items-center justify-between">
          <p className="text-[30px] font-bold">Students</p>
          <div className="flex items-center">
            <p className="bg-[#a7a7a7] text-white px-[20px] text-[15px] mx-[20px] rounded-xl cursor-pointer">All</p>
            <p className="bg-[#e2e2e2] text-black px-[20px] text-[15px] mx-[20px] rounded-xl cursor-pointer">Active</p>
            <p className="bg-[#e2e2e2] text-black px-[20px] text-[15px] mx-[20px] rounded-xl cursor-pointer">Inactive</p>
          </div>
        </div>

        {/* Cards */}
        <div className="w-[80%] mt-[0px] h-[100%] grid grid-cols-3 mx-auto gap-y-10">
          {filteredStudents.map((student, index) => (
            <div key={index} className="w-[350px] h-[200px] rounded-md bg-[#ffffff] shadow-md text-black">
              <div className="w-[100%] h-[100px] px-[40px] flex items-center">
                <div
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-[20px] text-white"
                  style={{ backgroundColor: student.color }}
                >
                  {student.image}
                </div>
                <span>
                  <p className="text-black text-[20px] px-[30px] font-[500]">{student.name}</p>
                  <p className="text-black text-[10px] px-[30px] font-[500]">+91 {student.phone}</p>
                </span>
              </div>
              <div className="w-[100%] py-[20px] px-[50px] flex justify-between text-[12px]">
                <p className="font-[500]">Email ID</p>
                <p>{student.gmail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
