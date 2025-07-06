const HeroSection = () => (
  <div className="bg-gray-100 px-6 py-16 lg:px-8 pt-36 ">
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
        Join the 169k+ email marketers already using Really Good Emails
      </h1>
      <p className="mx-auto mt-5 mb-6 max-w-xl text-xl text-gray-500">
        We’ve got over 15,000+ emails waiting to be collected and shared with your client or team.
      </p>
      <a
        href="/signup"
        className="inline-flex items-center justify-center bg-red-500 text-white font-medium px-6 py-3 rounded-md hover:bg-red-600 transition"
      >
        Get started
      </a>
    </div>
  </div>
);

export default HeroSection;