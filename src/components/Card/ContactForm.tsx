import { AiFillClockCircle, AiFillMail } from "solid-icons/ai";
import { FiPhoneForwarded } from "solid-icons/fi";
import { ImLocation } from "solid-icons/im";

const ContactForm = () => {
  return (
    <div class="max-w-screen-lg mx-auto p-5">
      <div class="grid grid-cols-1 md:grid-cols-12 border">
        <div class="bg-gray-900 md:col-span-4 p-10 text-white">
          <p class="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span class="text-indigo-600">Touch</span>
          </h3>
          <p class="mt-4 leading-7 text-gray-200">
            E-Jaad offers a range of solutions in the field of Automation and
            Industrial control! We specialize in giving automation solutions
            based on PLC, SCADA and our own Automation Products, to help you and
            your organization solve any technical problem.
          </p>

          <div class="flex items-center mt-5">
            <ImLocation class="h-8  w-8 mr-2 text-indigo-600" />
            <span class="text-sm">
              F-10/2 Islamabad, Tariq market, Pakistan.
            </span>
          </div>
          <div class="flex items-center mt-5">
            <FiPhoneForwarded class="h-8  w-8 mr-2 text-indigo-600" />
            <span class="text-sm">+92-51-2111291 </span>
          </div>

          <div class="flex items-center mt-5">
            <AiFillMail class="h-8 w-8 mr-2 text-indigo-600 bg-inherit " />
            <span class="text-sm">info@e-jaad.com</span>
          </div>
        </div>
        <form class="md:col-span-8 p-10">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div class="flex justify-between w-full px-3">
              <div class="md:flex md:items-center">
                <label class="block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
