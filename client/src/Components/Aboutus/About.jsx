import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import ABOUT from "./aboutusbg.webp";
import Aminities from "./1.webp";
import skydle from "./6.webp";
import Ceo from "./imagechnage.webp";
import Logo from "./Logo.webp";

const About = () => {
  return (
    <div style={{ fontFamily: '"Montserrat"', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
      {/* Background image Section */}
      <div className="relative w-full h-[64vh] overflow-hidden">
        <img src={ABOUT} alt="Units Background" className="absolute top-0 left-0 w-full h-full " />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            ABOUT US
          </motion.h1>
        </div>
      </div>

      {/* About Us Content detail */}
      <div className="min-h-screen bg-[#142B2B] text-white px-6 sm:px-10 py-16 flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-4">
          <img src={Logo} alt="BARIAN" className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />
          <h2 className="text-xl sm:text-2xl font-light">ABOUT US</h2>

          <p className="text-lg sm:text-lg leading-relaxed">
            GeoCon Enterprises is a multidisciplinary design and
            development firm committed to <br /> delivering excellence in
            architecture, construction, and real estate development. <br />
            With a focus on innovation, sustainability, and timeless
            design, GeoCon has earned <br /> a reputation for crafting
            spaces that are both functional and inspiring. <br />
          </p>
          <br />

          <p className="text-lg sm:text-lg leading-relaxed">
            From residential communities to commercial complexes
            and bespoke villas,<br /> GeoCon offers end-to-end solutions—
            covering architectural design, structural engineering, MEP
            planning, <br />  interior  design,  and construction execution.
            Each project reflects a commitment to quality, integrity,
            and client satisfaction.
          </p>
          <br />
          <p className="text-lg sm:text-lg leading-relaxed">
            Operating with a forward-thinking vision, GeoCon
            continues to lead <br />the way in modern,  nature-integrated
            developments—like the <br />Barian Pine Lodges in  Murree and
            premium urban housing across Pakistan and beyond.
          </p>

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center h-screen">
          <ul className="text-[#c08d31] space-y-6 text-center">
            {["TOWN LODGES", "2 BED LODGES", "3 BED LODGES"].map((project, index) => (
              <li key={index} className="text-4xl font-semibold ">
                {project}
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      {/* Vision & Mission Section */}
      <div className="flex flex-col items-center justify-center py-16 px-6 sm:px-8 bg-white text-[#142B2B]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {/* Vision */}
          <div className="relative">
            <img src={Aminities} alt="Vision" className="w-full h-64 md:h-[58vh] rounded-lg object-cover" />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">Vision</h2>
            <p className="text-lg sm:text-2xl leading-relaxed">
              To be recognized as the premier luxury mountain retreat in
              Pakistan , offering a unique blend of modern living and natural
              serenity. We envision Barian Pine Lodges Murree as a symbol of
              timeless elegance, where every guest experiences the peace of pine-covered hills, the warmth of refined design, and the essence of
              sustainable, high-altitude living.
              <p></p>
              <br />
              Our goal is to set a new benchmark for Eco-conscious hospitality
              and hill-station living in South Asia
            </p>

            <div className="absolute border-black top-0 right-0 border-t-4 border-r-4 w-16 h-16"></div>
          </div>

          {/* Mission */}
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">Mission</h2>
            <p className="text-lg sm:text-2xl leading-relaxed">
              At Barian Pine Lodges Murree, our mission is to create a sanctuary of luxury,
              tranquility, and natural harmony in the heart of the Barian Hills Murree. We are
              dedicated to offering an exceptional mountain retreat experience through
              thoughtfully designed lodges that blend modern comfort with rustic charm.
              <p></p> <br />
              With a focus on quality, sustainability, and innovation,
              we aim to exceed expectations and provide an exceptional residential
              experience. Valor Vista is not just a home—it’s a lifestyle redefined.

            </p>
            <br />

            <div className="absolute bottom-0 border-black -left-6 border-b-4 border-l-4 w-16 h-16"></div>
          </div>
          <div className="relative">
            <img src={skydle} alt="Mission" className="w-full h-64 md:h-[45vh] rounded-lg object-cover" />
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="border-t border-gray-500 my-12"></div>
      <div className="flex flex-col lg:flex-row items-center justify-around p-6 sm:p-10 lg:p-20 text-[#142B2B]">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-wider">CEO Message</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            After serving over 10 years in the real estate construction business, I feel privileged writing
            this message as the chief executive officer of The Jamsil Properties. This is a very special time,
            aiming to become the real estate leaders in Accra,Ghana. we are celebrating the launch of our
            company . With an impeccable experience of 2 decades in
            construction and building sector, we have delivered quality projects across the country. I believe
            that construction is the need of civilized communities . I am fortunate enough that my
            passion has become my profession, as I take pride in transforming dreams into reality, through
            planning, building and completing projects with utmost dedication
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            We have planned to expand our presence globally, by providing exceptional client services and
            liveability following our core values; excellence, leading by example, integrity and transparency
            , focusing comprehensively on the client and employee-centered attitude.
          </p>
          <p className="text-lg sm:text-xl">
            We will remain focused on accelerating the execution of our growth strategy while continuing
            to build on the strength of our brand, by facilitating our clients through sharing knowledge and
            creating innovation, resulting in bringing positive change to the communities in which we work
            and live. I am incredibly excited about this journey and truly believe the best of real estate
            business is yet to come.
          </p>
          <div>
            <h3 className="text-2xl sm:text-4xl font-semibold">P.K APPIAH</h3>
            <p className="text-lg sm:text-xl">Chief Executive Officer</p>
            <p className="text-lg sm:text-xl">The Jamsil Properties</p>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gray-900 rounded-full overflow-hidden">
            <img src={Ceo} alt="CEO" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;