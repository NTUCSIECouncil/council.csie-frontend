'use client';

import { FaFacebook, FaInstagram, FaThreads } from 'react-icons/fa6';

const Footer = (): React.JSX.Element => {
  const socialLinks = [
    { name: 'Facebook', link: 'https://www.facebook.com/ntucsiecouncil', icons: FaFacebook },
    { name: 'Instagram', link: 'https://www.instagram.com/ntucsie_council/', icons: FaInstagram },
    { name: 'Threads', link: 'https://www.threads.net/@ntucsie_council', icons: FaThreads },
  ];

  return (
    <footer className="relative z-30 bg-linear-to-r from-gray-900 to-black text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">NTU CSIE Council</h2>
          <p className="text-sm text-gray-400 mt-1">
            &copy;
            {new Date().getFullYear()}
            {' '}
            All rights reserved.
          </p>
        </div>

        <div className="flex space-x-8 my-4 md:my-0">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            首頁
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            關於我們
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            瑞克搖
          </a>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          {socialLinks.map(socialLink => (
            <a
              key={socialLink.name}
              href={socialLink.link}
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <socialLink.icons className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
