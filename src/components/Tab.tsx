interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ title, onClick, isActive }: Props) => {
  return (
    <button
      className={`w-30 rounded-sm bg-black p-3 text-sm text-white hover:opacity-90 md:w-40 md:p-4 md:text-base ${
        isActive ? 'bg-gray-800' : ''
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Tab;
