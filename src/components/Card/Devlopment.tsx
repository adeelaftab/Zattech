const Development = () => {
  return (
    <div class="shadow-xl md:py-14 ">
      <div class="flex flex-col md:flex-row h-3/4 ">
        <div class="w-full md:w-1/2 p-4">
          <div class="h-full relative">
            <img
              src="/WebDevlopment.png"
              alt="Web Development Image"
              class="w-full  object-cover rounded-full h-3/4"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-4xl  md:mt-28">
            <span class="text-blue-700 font-bold">Web</span> Development
            Services
          </h2>
          <h2 class="text-xl font-semibold text-center mb-4">
            Need a website that stands out?
          </h2>
          <p class="text-gray-500 text-lg text-center ">
            We craft stunning, custom websites tailored to your unique needs.
            From concept to completion, our experienced developers deliver
            pixel-perfect designs and robust functionality.
          </p>
          <ul class="mt-8 list-disc list-inside text-gray-700 text-lg py-2">
            <li>Custom web development</li>
            <li>E-commerce solutions</li>
            <li>Responsive design</li>
            <li>SEO optimization</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:flex-row h-3/4">
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-3xl font-semibold md:mt-28">
            <span class="text-blue-600">Mobile App</span> Development Services
          </h2>
          <p class="text-gray-700 md:mt-5 text-2xl font-semibold text-center">
            Level up your business with a custom mobile app !
          </p>
          <p class="text-gray-500 text-lg text-center md:pt-3">
            We specialize in crafting **native** iOS and Android apps that look
            stunning and perform flawlessly. Whether you need a simple
            e-commerce app or a complex enterprise solution, we've got the
            skills to bring your vision to life.
          </p>
          <ul class="mt-8 list-disc list-inside text-gray-700 text-lg">
            <li>User-friendly interfaces</li>
            <li>Seamless performance</li>
            <li>Intuitive navigation</li>
            <li>Cross-platform compatibility</li>
            <li>Latest technologies and trends</li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <div class="h-full relative">
            <img
              src="Mobile.png"
              alt="Web Development Image"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row h-3/4 md:mt-40 ">
        <div class="w-full md:w-1/2 p-4">
          <div class="h-full relative">
            <img
              src="/Hardware.png"
              alt="Embedded Hardware Services Image"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-3xl font-semibold md:mt-28">
            <span class="text-blue-600">Embedded</span> Hardware Services
          </h2>
          <p class="text-gray-700 md:mt-5 text-2xl font-semibold text-center">
            Design and develop reliable embedded hardware !
          </p>
          <p class="text-gray-500 text-lg text-center md:pt-3">
            We offer a comprehensive range of embedded hardware services, from
            concept development and prototyping to production and lifecycle
            management. Our team of experienced engineers has the expertise to
            bring your ideas to life, ensuring your hardware meets the highest
            standards of performance, reliability, and efficiency.
          </p>
          <ul class="mt-8 list-disc list-inside text-gray-700 text-lg">
            <li>Concept development and prototyping</li>
            <li>Hardware design and schematics</li>
            <li>Firmware development and programming</li>
            <li>PCB design and layout</li>
            <li>Production and manufacturing support</li>
            <li>Lifetime maintenance and support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Development;
