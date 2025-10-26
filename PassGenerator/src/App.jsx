import { useState, useCallback, useEffect } from "react";

import "./index.css";

function App() {
  const [len, setlen] = useState(8);
  const [number, setnumber] = useState(false);
  const [chars, setchars] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    if (number) str += "1234567890";
    if (chars) str += "!@#$%^&*()_+-=~[]{};:";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [len, number, chars, setpassword]);

  useEffect(()=>{
    passwordgenerator();
  },[len,number,chars,setpassword])


  return (
    <>
      <div className="w-full max-w-md rounded-md shadow-2xl mt-10 py-3 mx-auto bg-gray-600">
        <h1 className="text-white  text-center mt-4">PASSWORD GENERATOR</h1>
        <div className="flex mb-4 w-full h-full shadow overflow-hidden rounded-lg">
          <div className="w-full">
            <div className="block w-full">
              <input
                type="text"
                className="outline-none w-full my-4 rounded-2xl bg-white"
                value={password}
                placeholder="password"
                readOnly
              />
            </div>
            <div className="w-full flex justify-center">
              <button className="bg-teal-400  cursor-pointer w-[150px]">
                COPY
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={len}
              className="cursor-pointer "
              onChange={(e) => {
                setlen(e.target.value);
              }}
            />
            <label className="text-amber-700">length:{len}</label>
          </div>
          <div className="flex items-center justify-around w-full">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberinput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={chars}
              id="numberinput"
              onChange={() => {
                setchars((prev) => !prev);
              }}
            />
            <label htmlFor="">Chars</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
