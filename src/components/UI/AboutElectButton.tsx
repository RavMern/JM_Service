type AboutElectButtonProps = {
  text: string;
};

const AboutElectButton = ({ text }: AboutElectButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-cta hover:bg-orange-600 text-white font-bold py-3 rounded-md transition"
    >
      {text}
    </button>
  );
};

export default AboutElectButton;
