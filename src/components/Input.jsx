const Input = (props) => {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className='block mt-4 text-sm font-semibold text-black'
      >
        {props.label}
      </label>
      <input
        {...props}
        required
        className='relative block w-full px-3 py-2 mt-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 green:z-10 sm:text-sm'
      />
    </div>
  );
};

export default Input;
