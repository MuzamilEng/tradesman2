import React, { useState } from "react";
import { Link, useNavigate, useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../../UserContext/UserContext";

const BookingForm = () => {
  // const {isLogedUser} = useGlobalContext();
  // const loggedUserId = isLogedUser?.token
  // const token = JSON.parse(localStorage.getItem("token"));
  //  console.log(loggedUserId, "booking transaction");
  const Background =
    "https://images.pexels.com/photos/5805491/pexels-photo-5805491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const { id } = useParams();
  const {isLogedUser} = useGlobalContext()
  const token = isLogedUser?.token
  console.log(token);
  var navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",
    addInfo: "",
  });
  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Name field is required";
      isValid = false;
    }

    // Validate email
    if (formData.email.trim() === "") {
      newErrors.email = " ";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email is not valid format";
      isValid = false;
    }

    // Validate phone
    if (formData.phone.trim() === "") {
      newErrors.phone = " ";
      isValid = false;
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Phone is not valid format";
      isValid = false;
    }

    // Validate date
    if (formData.date === "") {
      newErrors.date = "Date is required";
    }

    // Validate Start time
    if (formData.startTime === "") {
      newErrors.startTime = "Start Time is required";
    }

    // Validate End time
    if (formData.endTime === "") {
      newErrors.endTime = "End Time is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data saved:", formData);
      try {
        // const token = JSON.parse(localStorage.getItem("token"));
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/booking/book-appointment/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          const bookingId = responseData.bookingId;
          console.log("Form data submitted successfully. Booking ID:", bookingId);
          showToast("Booking saved successfully",'success');
          setTimeout(() => {
            navigate(`/tradesman/book-appointment/${id}/checkout`, { state: {...formData, bookingId} });
          }, 2000);
          // Optionally, reset the form after successful submission
          // setFormData({
          //   name: "",
          //   email: "",
          //   phone: "",
          //   date: "",
          //   startTime: "",
          //   endTime: "",
          //   addInfo: "",
          //   // Reset other form fields
          // });
          // showToast("Booking saved successfully", "success");
        } else {
          console.error("Failed to submit form data");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const isValidEmail = (email) => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    return emailRegex.test(email);
  };
  const isValidPhone = (phone) => {
    const phoneNumberRegex = /^\d{4}[-.\s]?\d{3}\d{4}$/;

    return phoneNumberRegex.test(phone);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        height: "120vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <div className="flex justify-center items-center h-full">
          <div className="bg-gray-100 opacity-75 p-4 mt-5 border shadow-md w-full md:w-1/2">
            <div className="col-12">
              <h3 className="fw-normal text-secondary text-lg uppercase mb-2">
                Schedule Appointment
              </h3>
            </div>
            <form action="post" onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full ${
                      errors.name ? "bg-rose-200" : ""
                    } ${errors.name ? "border-2 border-red-500" : ""}`}
                    placeholder="Enter your Name"
                  />
                  {/* {errors.name && <div className="text-red-500">{errors.name}</div>} */}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full ${
                      errors.email ? "bg-rose-200" : ""
                    } ${errors.email ? "border-2 border-red-500" : ""}`}
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full ${
                      errors.phone ? "bg-rose-200" : ""
                    } ${errors.phone ? "border-2 border-red-500" : ""}`}
                    placeholder="Enter your Phone Number"
                  />
                  {errors.phone && (
                    <div className="text-red-500">{errors.phone}</div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full ${
                      errors.date ? "bg-rose-200" : ""
                    } ${errors.date ? "border-2 border-red-500" : ""}`}
                    placeholder="Enter Date"
                  />
                  {/* {errors.date && <div className="text-red-500">{errors.date}</div>} */}
                </div>
                <div>
                  <label
                    htmlFor="startTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full ${
                      errors.startTime ? "bg-rose-200" : ""
                    } ${errors.startTime ? "border-2 border-red-500" : ""}`}
                    placeholder="Enter Time"
                  />
                  {/* {errors.startTime && <div className="text-red-500">{errors.startTime}</div>} */}
                </div>
                <div>
                  <label
                    htmlFor="endTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Time
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full ${
                      errors.endTime ? "bg-rose-200" : ""
                    } ${errors.endTime ? "border-2 border-red-500" : ""}`}
                    placeholder="Enter Time"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="addInfo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    name="addInfo"
                    value={formData.addInfo}
                    onChange={handleChange}
                    className={`mt-1 p-2 border border-black-on-active border-3 w-full block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300   ${
                      errors.addInfo ? "bg-rose-200" : ""
                    }`}
                    placeholder="Enter Additional Information"
                  ></textarea>
                  {/* {errors.addInfo && <div className="text-red-500">{errors.addInfo}</div>} */}
                </div>
              </div>
              <div className="col-12 mt-5 space-x-2">
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 hover:bg-orange-600 text-white hover:text-white transition  duration-300 p-[0.5vw] mt-[2vw]"
                >
                  Book Now
                </button>
                <Link to={`/tradesman/book-appointment/${id}`}>
                  <button
                    type="button"
                    className="rounded-full bg-neutral-500 hover:bg-neutral-600 text-white hover:text-white transition  duration-300 p-[0.5vw] mt-[2vw]"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
