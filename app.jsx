const { useState } = React;
const { HashRouter, Routes, Route, Link, useLocation } = ReactRouterDOM;

// Obfuscated email component
const ObfuscatedEmail = () => {
  const [revealed, setRevealed] = useState(false);
  
  const revealEmail = () => {
    setRevealed(true);
    // Construct email to avoid scraping
    const user = 'henrik.essunger';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    });
  };
  
  if (revealed) {
    return (
      <span className="font-mono text-blue-600">
        henrik.essunger@gmail.com
      </span>
    );
  }
  
  return (
    <button 
      onClick={revealEmail}
      className="text-blue-600 hover:text-blue-800 underline"
    >
      Click to reveal & copy email
    </button>
  );
};

// Navigation component
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="mb-12 pb-8 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link to="/" className="text-2xl font-light tracking-wide hover:text-gray-600 transition-colors">
          HENRIK ESSUNGER
        </Link>
        <div className="flex gap-6 text-sm">
          <Link 
            to="/" 
            className={`hover:text-gray-600 transition-colors ${isActive('/') ? 'font-medium' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/medical" 
            className={`hover:text-gray-600 transition-colors ${isActive('/medical') ? 'font-medium' : ''}`}
          >
            Medical Translation
          </Link>
          <Link 
            to="/legal" 
            className={`hover:text-gray-600 transition-colors ${isActive('/legal') ? 'font-medium' : ''}`}
          >
            Legal Translation
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-gray-600 transition-colors ${isActive('/contact') ? 'font-medium' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Home page
const HomePage = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-light mb-8">Swedish/English Translator & Editor</h1>
      <div className="space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          I provide professional translation and editing services between Swedish and English, 
          specializing in medical and legal documentation.
        </p>
        <p>
          With years of experience working with medical literature, clinical trial documentation, 
          pharmaceutical materials, and legal contracts, I deliver precise, contextually accurate 
          translations that maintain the integrity and intent of the source material.
        </p>
        <p>
          My approach combines linguistic expertise with subject matter knowledge, ensuring 
          terminology consistency and cultural appropriateness for your target audience.
        </p>
      </div>
    </div>
  );
};

// Medical Translation page
const MedicalPage = () => {
  const examples = [
    {
      title: "Clinical Trial Protocols",
      description: "Translation of multi-site clinical trial protocols for pharmaceutical companies, maintaining strict regulatory compliance and medical terminology accuracy."
    },
    {
      title: "Medical Device Documentation",
      description: "Technical translation of instructions for use (IFU), safety documentation, and regulatory submissions for medical device manufacturers."
    },
    {
      title: "Research Publications",
      description: "Translation and editing of peer-reviewed medical research papers, ensuring scientific accuracy and publication-ready English."
    },
    {
      title: "Patient Information Materials",
      description: "Clear, accessible translation of patient-facing materials including informed consent forms, medication guides, and health education materials."
    }
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-light mb-8">Medical Translation</h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-12">
        Specialized translation services for the healthcare and pharmaceutical industries, 
        combining medical knowledge with linguistic precision.
      </p>
      
      <div className="space-y-10">
        {examples.map((example, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-6">
            <h2 className="text-xl font-medium mb-3">{example.title}</h2>
            <p className="text-gray-700 leading-relaxed">{example.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-medium mb-3">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {['Oncology', 'Cardiology', 'Neurology', 'Pharmacology', 'Clinical Trials', 
            'Medical Devices', 'Regulatory Affairs', 'Patient Safety'].map((area, i) => (
            <span key={i} className="px-3 py-1 bg-white rounded text-sm">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Legal Translation page
const LegalPage = () => {
  const examples = [
    {
      title: "Corporate Contracts",
      description: "Translation of commercial agreements, partnership contracts, and service agreements with attention to legal nuance and jurisdictional requirements."
    },
    {
      title: "Intellectual Property Documents",
      description: "Patent applications, trademark registrations, and licensing agreements translated with technical and legal precision."
    },
    {
      title: "Compliance Documentation",
      description: "GDPR compliance materials, corporate governance documents, and regulatory filings adapted for Swedish and international contexts."
    },
    {
      title: "Legal Correspondence",
      description: "Professional translation of legal letters, notices, and official communications maintaining appropriate legal tone and terminology."
    }
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-light mb-8">Legal Translation</h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-12">
        Precise legal translation services for businesses and law firms, ensuring accuracy 
        and compliance across Swedish and English legal frameworks.
      </p>
      
      <div className="space-y-10">
        {examples.map((example, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-6">
            <h2 className="text-xl font-medium mb-3">{example.title}</h2>
            <p className="text-gray-700 leading-relaxed">{example.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-medium mb-3">Practice Areas</h3>
        <div className="flex flex-wrap gap-3">
          {['Corporate Law', 'Contract Law', 'Intellectual Property', 'Data Protection', 
            'Employment Law', 'Commercial Litigation', 'M&A', 'Regulatory Compliance'].map((area, i) => (
            <span key={i} className="px-3 py-1 bg-white rounded text-sm">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact page
const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      // Replace 'YOUR_FORM_ID' with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-light mb-8">Contact</h1>
      
      <div className="mb-12">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I'd be happy to discuss your translation needs. Please fill out the form below 
          or contact me directly at <ObfuscatedEmail />.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium mb-2">
            Project Type
          </label>
          <select
            id="project"
            name="project"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a category</option>
            <option value="medical">Medical Translation</option>
            <option value="legal">Legal Translation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {formStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        {formStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
            Sorry, there was an error sending your message. Please try emailing directly.
          </div>
        )}
      </form>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Response time: Typically within 24 hours on business days
        </p>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Navigation />
          
          <main className="pb-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/medical" element={<MedicalPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6 py-4">
              <p className="text-sm text-gray-600 text-center">
                © {new Date().getFullYear()} Henrik Essunger. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
