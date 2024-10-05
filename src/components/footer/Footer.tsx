const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3 class="text-3xl mb-3">Our Motto</h3>
          <p class="mb-6">
            Providing the best solutions for your business needs
          </p>
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 class="text-xl mb-4">About Us</h4>
            <ul>
              <li class="mb-2">
                <a href="/home" class="hover:text-gray-300">
                  Company Information
                </a>
              </li>
              <li class="mb-2">
                <a href="/about" class="hover:text-gray-300">
                  Our Team
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Press Releases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl mb-4">Services</h4>
            <ul>
              <li class="mb-2">
                <a href="/contact" class="hover:text-gray-300">
                  Consulting
                </a>
              </li>
              <li class="mb-2">
                <a href="/services" class="hover:text-gray-300">
                  Development
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Design
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl mb-4">Support</h4>
            <ul>
              <li class="mb-2">
                <a href="/contact" class="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Live Chat
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl mb-4">Legal</h4>
            <ul>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Cookie Policy
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-gray-300">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p class="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Zattech, 2024. All rights reserved.
          </p>
          <div class="order-1 md:order-2 mb-4 md:mb-0">
            <a href="/about" class="px-2 hover:text-gray-300">
              About us
            </a>
            <a
              href="/contact"
              class="px-2 border-l border-gray-700 hover:text-gray-300"
            >
              Contact us
            </a>
            <a
              href="#"
              class="px-2 border-l border-gray-700 hover:text-gray-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
