import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "About | Food App";
  }, []);
  return (
    <>
      {/* Main About Section */}
      <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-amber-50 to-pink-50 flex items-center justify-center py-20">
        <div className="p-8 flex flex-col md:flex-row items-center max-w-6xl shadow-xl bg-white rounded-2xl">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <img
              src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/352faeb5-95f6-41e6-af4c-24ac02b46511-fried-chicken.jpg"
              alt="Delicious Food"
              className="rounded-xl shadow-2xl w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text/Blog Section */}
          <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-amber-600 mb-4">
              The Timeless Joy of Food
            </h2>
            <p className="text-gray-600 text-md mb-4 leading-relaxed">
              Food is more than just a necessity — it’s an art, a culture, a
              universal language. The crackle of fresh bread, the simmer of
              spices, the aroma of morning coffee — every bite tells a story.
            </p>
            <p className="text-gray-600 text-md mb-4 leading-relaxed">
              From the vibrant curries of India to the delicate pastries of
              Paris, food brings us together — across borders, ages, and hearts.
              Every meal shaamber carries warmth, tradition, and joy.
            </p>
            <p className="text-gray-600 text-md mb-4 leading-relaxed">
              Through this app, we deliver not just food — but comfort, delight,
              and experience right at your door.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-4xl mx-auto py-10 px-6 space-y-12">
        {/* Mission Section */}
        <div>
          <h3 className="text-3xl font-semibold text-amber-500 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            Our mission is simple — to make delicious, high-quality food
            accessible for everyone at the tap of a button. Every meal is
            crafted with love, hygiene, and passion, ensuring a delightful
            experience every time you order.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h3 className="text-3xl font-semibold text-amber-500 mb-3">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-md leading-relaxed space-y-2">
            <li>Freshly cooked meals from trusted kitchens.</li>
            <li>Wide variety of local and international cuisines.</li>
            <li>Fast and reliable delivery at your convenience.</li>
            <li>Intuitive, user-friendly app design.</li>
            <li>24/7 customer support to satisfy every craving.</li>
          </ul>
        </div>

        {/* Meet Our Team */}
        <div>
          <h3 className="text-3xl font-semibold text-amber-500 mb-3">
            Meet Our Team
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            Behind every delicious meal is a passionate team — chefs,
            developers, designers, and food lovers dedicated to delivering
            perfection. We blend technology with taste to bring you joy in every
            bite.
          </p>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-semibold text-amber-500 mb-3">
            What Our Customers Say
          </h3>
          <blockquote className="italic text-gray-600 mb-2">
            "This app changed the way I enjoy food delivery. Always fast, fresh,
            and filled with flavor!"
          </blockquote>
          <p className="text-gray-700 font-medium">— A Happy Customer</p>
        </div>

        {/* Fun Fact */}
        <div>
          <h3 className="text-3xl font-semibold text-amber-500 mb-3">
            Did You Know?
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            The world’s most expensive pizza costs over $12,000 and includes
            caviar, lobster, and edible gold! But don’t worry — here, every bite
            is affordable and delicious.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button
            className="bg-amber-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-transform transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            Order Your Favorite Dish Now
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
