const Contact = () => {
  return (
    <div className="w-full h-screen gap-3 sm:gap-10 flex flex-col justify-center items-center bg-accent snap-start">
      <h1 id="Contact" className="text-xl font-bold text-white text-center">
        Contact Me
      </h1>
      <div className="w-3/4 flex flex-col items-center justify-center">
        <label htmlFor="email" className="form-label font-bold self-start text-white">
          Your Email:
        </label>
        <input
          name="email"
          type="email"
          className="form-input w-full px-1 py-1 shadow-md border-2 outline-black text-black bg-white"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center justify-center">
        <label htmlFor="body" className="form-label font-bold self-start text-white">
          Message:
        </label>
        <textarea
          name="body"
          className="form-textarea w-full px-1 py-1 shadow-md border-2 outline-black text-black bg-white resize-none"
          rows={12}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button className="w-2/5 sm:w-1/4 p-1 shadow-md font-bold bg-primary text-white">Send</button>
      </div>
    </div>
  );
};

export default Contact;
