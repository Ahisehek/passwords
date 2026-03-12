import React, { useState } from "react";
import Display from "./Display";

function Main() {

  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passarray, setpassarray] = useState([]);

  // save password
  const savepass = () => {

    if (!form.site || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setpassarray((prev) => [...prev, form]);

    // reset form after save
    setform({
      site: "",
      username: "",
      password: "",
    });
  };

  // handle input change
  const handle = (e) => {
    const { name, value } = e.target;

    setform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="mt-20">
      <div className="flex justify-center mb-2">
        <input
          className="border-2 border-purple-600 h-16 w-[61%] rounded-full px-6 outline-none text-purple-800 font-bold text-[1rem]"
          type="text"
          placeholder="enter the site name"
          name="site"
          value={form.site}
          onChange={handle}
        />
      </div>

      <div className="flex justify-center gap-x-4">
        <input
          className="border-2 border-purple-600 h-16 w-[40%] rounded-full px-6 outline-none text-purple-800 font-bold text-[1rem]"
          type="text"
          placeholder="enter the username"
          name="username"
          value={form.username}
          onChange={handle}
        />

        <input
          className="border-2 border-purple-600 h-16 w-[20%] rounded-full px-6 outline-none text-purple-800 font-bold text-[1rem]"
          type="password"
          placeholder="enter the pass"
          name="password"
          value={form.password}
          onChange={handle}
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={savepass}
          className="border-2 w-32 h-12 rounded-full font-bold text-white text-lg bg-purple-500"
        >
          Save
        </button>
      </div>

      <Display data={passarray} />
    </div>
  );
}

export default Main;