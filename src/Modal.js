export const Modal = ({ toggle, openModal }) => {
  return (
    <div className="">
      <div className=" w-[80%] h-[70%] z-10 bg-purple-200 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
          <h2>Hello ji</h2>
          <section>
            <button
              type="button"
              className="btn"
              onClick={() => toggle(!openModal)}
            >
              close
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
