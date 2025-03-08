import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { SEO } from './components/SEO';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEO
        title="Contact Us - Playback Speed Calculator"
        description="Contact the Playback Speed & Audiobook Progress Calculator team for feedback, suggestions, or collaboration opportunities."
        canonicalUrl="https://playback-speed-calculator.com/contact"
      />

      {/* Introduction Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Questions, suggestions, or feedback? Feel free to contact us, we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-10">
          {/* Contact Form and Info Grid */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form - 3 columns */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Send className="h-6 w-6 text-indigo-600" />
                Send Message
              </h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline"> Your message has been sent. We'll get back to you as soon as possible.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                  ></textarea>
                  {formErrors.message && <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>}
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info - 2 columns */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Mail className="h-6 w-6 text-indigo-600" />
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@playback-speed-calculator.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">Haidian District, Beijing, China</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/lxiaolong068/Playback-Speed-Calculator" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-indigo-700 mb-2">Feedback</h3>
                  <p className="text-gray-700 text-sm">
                    We highly value your feedback and suggestions as they are crucial for improving our products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <section className="pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How do I use the Playback Speed Calculator?</h3>
                <p className="text-gray-700">
                  Simply enter the original duration of your audio or video, then select or input your desired playback speed. The calculator will automatically calculate the adjusted duration and time saved.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Is this tool free to use?</h3>
                <p className="text-gray-700">
                  Yes, the Playback Speed Calculator is completely free to use and is open source. You can view the source code on our GitHub page.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I contribute to this project?</h3>
                <p className="text-gray-700">
                  Absolutely! We welcome contributions of any kind, including code contributions, feature suggestions, or bug reports. Please visit our GitHub repository for more information.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Contact;