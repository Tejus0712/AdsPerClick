import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.city.trim()) newErrors.city = "city is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email city";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://adsperclick.onrender.com/send-email", formData);
      console.log("Form submitted successfully", response.data);
      alert("Thank you for contacting.");
      setFormData({
        name: "",
        phone: "",
        city: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Text section */}
          <div className="space-y-5 order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
             <span className="text-primary">Get In Touch!</span>
            </h1>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              CREATE, INNOVATE, AND OPTIMIZE YOUR BUSINESS
            </b>
            <p data-aos="fade-up" data-aos-delay="300">
              We offer e-commerce, digital marketing, and website design and
              development services. We are the one-stop solution for all your
              business needs. We help your business flourish and tackle the
              fierce market competition with our years of expertise and a team
              of highly qualified professionals. We specialize in Amazon and
              Flipkart account management (All services), Digital Marketing
              (Social Media Marketing, PPC, SEO, Content Marketing, Video
              Marketing, Display ads), and website development (Shopify, UX/UI,
              WordPress).
            </p>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              "We have solutions for all your online business requirements"
            </b>
          </div>

          {/* Contact Us Form */}
          <div data-aos="fade-up" className=" dark:bg-gray-900 p-6 rounded-2xl shadow-md max-w-3xl mx-auto order-2 flex-1 w-full" style={{background:"linear-gradient(90deg, rgba(254,62,107,1) 35%, rgba(254,62,179,0.9781162464985994) 100%)"}}>
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="flex w-full gap-2">
                <div className="flex-1">
                  {/* <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full  bg-opacity-40 bg-white placeholder:text-white border-gray-300 rounded-2xl focus:bg-white  focus:ring-primary focus:border-primary p-3 shadow-md"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Phone Field */}
                <div className="flex-1">
                  {/* <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label> */}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full  bg-opacity-40 bg-white placeholder:text-white border-gray-300 rounded-2xl focus:bg-white  focus:ring-primary focus:border-primary p-3 shadow-md"                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>
              <div className="flex w-full gap-2">
              {/* city Field */}
              <div className="flex-1">
                {/* <label htmlFor="city" className="block text-sm font-medium mb-1">
                  city
                </label> */}
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full  bg-opacity-40 bg-white placeholder:text-white border-gray-300 rounded-2xl focus:bg-white  focus:ring-primary focus:border-primary p-3 shadow-md"                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>

              {/* Email Field */}
              <div className="flex-1">
                {/* <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full  bg-opacity-40 bg-white placeholder:text-white border-gray-300 rounded-2xl focus:bg-white  focus:ring-primary focus:border-primary p-3 shadow-md"                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              </div>

              {/* Subject Field */}
              <div>
                {/* <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label> */}
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject"
                  className="w-full  bg-opacity-40 bg-white placeholder:text-white border-gray-300 rounded-2xl focus:bg-white  focus:ring-primary focus:border-primary p-3 shadow-md"                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              {/* Message Field */}
              <div>
                {/* <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label> */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full  bg-opacity-40 bg-white placeholder:text-white border-gray-300 rounded-2xl focus:bg-white  focus:ring-primary focus:border-primary p-3 shadow-md"                ></textarea>
                </div>
                 <div className="text-center">
            <button
              type="submit"
              className={`bg-white text-primary font-bold py-2 px-6 rounded-2xl ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>)
}
export default ContactUs;
