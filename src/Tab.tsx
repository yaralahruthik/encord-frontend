interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ title, onClick, isActive }: Props) => {
  return (
    <button
      className={`w-40 rounded-sm bg-black p-4 text-white hover:opacity-90 ${
        isActive ? 'bg-gray-800' : ''
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Tab;
