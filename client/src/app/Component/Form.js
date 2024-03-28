import React, { useState } from "react";
import { advancedSearch } from "../Data";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({});

  const nevi = useNavigate();
  function handleQuery(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    localStorage.setItem("searchTradesmanQuery", queryString);
    nevi("/searchUser");
  }
  return (
    <>
      <div className="transform translate-y-[4vw] translate-x-[5vw] ">
        <p className="text-vw">Hello, Guest!</p>

        <h1 className="font-bold text-[1.5vw] transform translate-y-[1.3vw] ">
          Find the Best Trademen Near You
        </h1>
      </div>
      <div className="mt-[5vw] ml-[2vw]">
        <form className=" p-[2vw] flex items-center " onSubmit={onSubmit}>
          {advancedSearch?.map((item, index) => {
            return (
              <main className="w-full m-vw max-w-[15vw]" key={index}>
                <label className="text-vw font-semibold" htmlFor={item?.label}>{item?.label}</label>
                {item?.type === "select" ? (
                  <select
                    placeholder={item?.placeholder}
                    name={item?.name}
                    onChange={handleQuery}
                    className="text-vw w-full rounded-md p-vw border-[1px] focus:outline-none"
                  >
                    <option value="default">Select Occupation</option>
                    {item?.options?.map((opt, idnex) => (
                      <option key={idnex} value={opt?.value}>{opt?.label}</option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input
                      type={item?.type}
                      onChange={handleQuery}
                      placeholder={item?.placeholder}
                      className="text-vw p-vw focus:outline-none w-full border-[1px] rounded-md"
                      name={item?.name}
                    />
                  </>
                )}
              </main>
            );
          })}
          <button type="submit" className="p-vw bg-amber-500 hover:bg-amber-600  text-vw text-white rounded-md mt-[1.2vw]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
