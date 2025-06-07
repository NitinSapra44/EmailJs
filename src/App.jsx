import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   "service_1ddcg94",       // e.g., service_abc123
    //   "template_tep4hne",      // e.g., template_xyz789
    //   form.current,
    //   "8ER0hCu-g-JCliQ9T"       // e.g., ND8YHXXXXXXXXXX
    // ).then(
    //   (result) => {
    //     console.log(result.text);
    //     alert("Message sent successfully!");
    //     form.current.reset(); // clear the form
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     alert("Something went wrong. Please try again.");
    //   }
    // );

  Promise.all([
  emailjs.sendForm('service_1ddcg94', 'template_tep4hne', form.current, '8ER0hCu-g-JCliQ9T'),
  emailjs.sendForm('service_1ddcg94', 'template_holvcag', form.current, '8ER0hCu-g-JCliQ9T')
])
.then(([res1, res2]) => {
  alert("We Will Reach you out soon");
  form.current.reset();
})
.catch((err) => {
  console.error('Email error:', err);
});

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-4 py-10">
      <div className="max-w-xl w-full bg-white shadow-xl border border-gray-200 rounded-2xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter your mobile number"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="user_address"
              placeholder="Enter your address"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Purpose of Visiting
            </label>
            <textarea
              name="visit_purpose"
              placeholder="Enter the purpose of your visit"
              required
              rows={3}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
