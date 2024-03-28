import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetTrademanByIdQuery } from "../../store/storeApi";
// import { useStripe } from './../../StripeContext/StripeContext';
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const { id } = useParams();
  const { data } = useGetTrademanByIdQuery(id);
  const location = useLocation();
  const formData = location.state;
  const bookingId = location.state;

  const startDate = new Date(`January 1, 2024 ${formData.startTime}`);
  const endDate = new Date(`January 1, 2024 ${formData.endTime}`);
  const timeDifference = endDate - startDate;
  const durationInHours = Math.floor(timeDifference / (1000 * 60 * 60));

  const totalAmount = data?.hourlyRate * durationInHours;

  // const stripe = useStripe();
  const convertTo12HourFormat = (time) => {
    const timeArray = time.split(":");
    const hours = parseInt(timeArray[0], 10);
    const minutes = timeArray[1];
    const period = hours >= 12 ? "PM" : "AM";
    const twelveHourFormat = ((hours + 11) % 12) + 1;

    return `${twelveHourFormat}:${minutes} ${period}`;
  };
  const start12HourFormat = convertTo12HourFormat(formData.startTime);
  const end12HourFormat = convertTo12HourFormat(formData.endTime);

  const handleCheckout = async () => {
    const publishKey = 'pk_test_51NO0eJITaueKIebSFIUc8DRJuY3i04evrwu2qipVRiIkwS1X6YMomm4SaQnbtSNh5l3fZBDfnt7gF250ss8CO6LB00Gns9ok1i'
    const stripe = await loadStripe(publishKey);
    const secretKey = 'sk_test_51NO0eJITaueKIebSG63NCL9BrtB8DKE3LretZtwB3ErDzj68x0yVhCVBx0RnKq9ujIposYRpeus0VeOfSBssMrV400ajOwtvCb'
    console.log(stripe);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/payment/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${secretKey}`,
        },
        body: JSON.stringify({data, totalAmount, bookingId}),
      }
    );
    const session = await response.json();
    
    // Redirect to Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
  })

    if (result.error) {
      console.error(result.error.message);
    } else {
      if(result.paymentIntent.status === "succeeded") {
        console.log("Success")
      }
    }
    // const updatePaymentStatus = async (sessionID) => {
    //   try {
    //       const response = await fetch(
    //           `${process.env.REACT_APP_API_URL}/payment/update-payment-status`,
    //           {
    //               method: "POST",
    //               headers: {
    //                   "Content-Type": "application/json",
    //               },
    //               body: JSON.stringify({ sessionID }),
    //           }
    //       );
    
    //       const data = await response.json();
    //       console.log(data);
    //   } catch (error) {
    //       console.error("Error updating payment status:", error);
    //   }
    // };
  };

  return (
    <section class="flex items-center py-16 bg-gray-100 md:py-20 font-poppins dark:bg-gray-800 ">
      <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto bg-white border rounded-md dark:border-gray-900 dark:bg-gray-900 md:py-10 md:px-10">
        <div>
          <h1 class="px-4 mb-8 text-2xl font-semibold tracking-wide text-gray-700 dark:text-gray-300 ">
            Thank you. Your booking has been saved.{" "}
          </h1>
          <div class="flex border-b border-gray-200 dark:border-gray-700  items-stretch justify-start w-full h-full px-4 mb-8 md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
            <div class="flex items-start justify-start flex-shrink-0">
              <div class="flex items-center justify-center w-full pb-6 space-x-4 md:justify-start">
                {/* <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" class="object-cover w-16 h-16 rounded-md" alt="avatar"/> */}
                <div class="flex flex-col items-start justify-start space-y-2">
                  <p class="text-lg font-semibold leading-4 text-left text-gray-800 dark:text-gray-400">
                    {formData?.name}
                  </p>
                  <p class="text-sm leading-4 text-gray-600 dark:text-gray-400">
                    {formData?.phone}
                  </p>
                  <p class="text-sm leading-4 cursor-pointer dark:text-gray-400">
                    {formData?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center pb-4 mb-10 border-b border-gray-200 dark:border-gray-700">
            <div class="w-full px-4 mb-4 md:w-1/4">
              <p class="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400 ">
                Booking Date{" "}
              </p>
              <p class="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">
                {formData?.date}
              </p>
            </div>
            <div class="w-full px-4 mb-4 md:w-1/4">
              <p class="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400 ">
                Booking Time{" "}
              </p>
              <p class="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">
                {start12HourFormat} - {end12HourFormat}
              </p>
            </div>
            <div class="w-full px-4 mb-4 md:w-1/4">
              <p class="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400 ">
                Hourly Rate{" "}
              </p>
              <p class="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">
                {data?.hourlyRate} PKR
              </p>
            </div>
          </div>
          <div class="px-4 mb-10">
            <div class="flex flex-col items-stretch justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <div class="flex flex-col w-full space-y-6 ">
                <div class="flex items-center justify-between w-full">
                  <p class="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">
                    Total
                  </p>
                  <p class="text-base font-semibold leading-4 text-gray-600 dark:text-gray-400">
                    Rs. {totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-start gap-4 px-4 mt-6 ">
            <Link to={`/tradesman/book-appointment/${id}`}>
              <button class="w-full px-4 py-2 text-orange-500 border border-orange-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-orange-600">
                Go back to booking
              </button>
            </Link>
            <button
              onClick={handleCheckout}
              class="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-gray-50 md:w-auto"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
