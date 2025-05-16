"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${
        name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, " $1")
      } is required`;
    }

    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    if (error) {
      setFormErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields before submission
    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email data for the API
      const emailData = {
        to: "victorbwire3d@gmail.com", // You can set a default or use env variable
        subject: `Contact Form: ${formData.subject}`,
        text: `
          Name: ${formData.fullName}
          Email: ${formData.email}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
        `
      };

      // Send form data to API route
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-white shadow-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Background pattern for visual interest - updated to orange theme */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full -mr-20 -mt-20 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-50 to-amber-50 rounded-full -ml-16 -mb-16 opacity-70"></div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center sm:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Have a project in mind? Let&apos;s discuss how we can help.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            className="text-center py-8 sm:py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mb-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Your message has been sent successfully. We&apos;ll get back to you
              within 24-48 hours.
            </p>

            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center mx-auto"
              whileHover={{ x: -3 }}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Send another message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-medium mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-2.5 border ${
                      formErrors.fullName
                        ? "border-red-400 focus:ring-red-300"
                        : "border-gray-300 focus:ring-orange-300"
                    } rounded-lg focus:outline-none focus:ring-2 text-gray-700 text-sm sm:text-base transition-colors`}
                    placeholder="John Doe"
                  />
                </div>
                {formErrors.fullName && (
                  <p className="mt-1 text-xs text-red-500">
                    {formErrors.fullName}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-2.5 border ${
                      formErrors.email
                        ? "border-red-400 focus:ring-red-300"
                        : "border-gray-300 focus:ring-orange-300"
                    } rounded-lg focus:outline-none focus:ring-2 text-gray-700 text-sm sm:text-base transition-colors`}
                    placeholder="john@example.com"
                  />
                </div>
                {formErrors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {formErrors.email}
                  </p>
                )}
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-medium mb-1.5"
              >
                Subject
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-4 py-2.5 border ${
                    formErrors.subject
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-orange-300"
                  } rounded-lg focus:outline-none focus:ring-2 text-gray-700 text-sm sm:text-base transition-colors`}
                  placeholder="How can we help you?"
                />
              </div>
              {formErrors.subject && (
                <p className="mt-1 text-xs text-red-500">
                  {formErrors.subject}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`w-full px-4 py-3 border ${
                    formErrors.message
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-orange-300"
                  } rounded-lg focus:outline-none focus:ring-2 text-gray-700 text-sm sm:text-base transition-colors`}
                  placeholder="Tell us about your project or inquiry..."
                />
                <div className="absolute right-3 bottom-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
              {formErrors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {formErrors.message}
                </p>
              )}
            </motion.div>

            {submitError && (
              <motion.div 
                variants={itemVariants}
                className="p-3 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-red-600 text-sm">{submitError}</p>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                type="submit"
                className="w-full bg-primaryOrange text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </motion.button>

              <motion.p
                className="text-xs text-center text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We respect your privacy. Your information will never be shared
                with third parties.
              </motion.p>
            </motion.div>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;