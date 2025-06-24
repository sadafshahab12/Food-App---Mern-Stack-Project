import { useEffect, useState } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact| Food App";
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I will contact you soon.");
    // Here you can later integrate EmailJS, Formspree, or your own backend
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-amber-100 to-blue-100 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact <span className="text-amber-600">Sadaf Shahab</span>
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Want a stunning website like this? Get in touch for your next project.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-xs">
          Designed & Developed by Sadaf Shahab — MERN Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Contact;
