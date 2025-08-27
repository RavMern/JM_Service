type AboutAlbaButtonProps = {
  text: string;
};

const AboutAlbaButton = ({ text }: AboutAlbaButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-cta hover:bg-orange-600 text-white font-bold py-3 rounded-md transition"
    >
      {text}
    </button>
  );
};

export default AboutAlbaButton;
