import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <button onClick={() => onNavigate('home')} className="mb-12 text-gray-400 hover:text-white transition-colors">
          ← BACK HOME
        </button>
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8">CONTACT US</h1>
          <div className="w-12 h-1 bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
            <Mail className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3 tracking-wide">EMAIL</h3>
            <p className="text-gray-400 mb-2">hello@groundpoint.com</p>
            <p className="text-gray-400">support@groundpoint.com</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
            <Phone className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3 tracking-wide">PHONE</h3>
            <p className="text-gray-400 mb-2">+1 (555) 123-4567</p>
            <p className="text-gray-400">Mon - Fri: 9AM - 6PM EST</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
            <MapPin className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3 tracking-wide">LOCATION</h3>
            <p className="text-gray-400">123 Urban Street</p>
            <p className="text-gray-400">New York, NY 10001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold tracking-wide mb-8">SEND US A MESSAGE</h2>

            <div>
              <label className="block text-sm font-bold tracking-widest mb-3">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded focus:border-white focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold tracking-widest mb-3">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded focus:border-white focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold tracking-widest mb-3">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded focus:border-white focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-bold tracking-widest py-3 rounded hover:bg-gray-200 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>

          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-8">CONNECT WITH US</h2>
            <p className="text-gray-400 text-lg mb-8">
              Follow us on social media for exclusive drops, behind-the-scenes content, and community updates.
            </p>

            <div className="space-y-4 mb-12">
              <a href="#" className="flex items-center text-lg hover:text-gray-300 transition-colors group">
                <Instagram className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">@groundpointco</span>
              </a>
              <a href="#" className="flex items-center text-lg hover:text-gray-300 transition-colors group">
                <Twitter className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">@groundpoint</span>
              </a>
              <a href="#" className="flex items-center text-lg hover:text-gray-300 transition-colors group">
                <Facebook className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">Ground Point</span>
              </a>
            </div>

            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
