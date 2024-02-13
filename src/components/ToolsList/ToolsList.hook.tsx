import { FaTrello } from 'react-icons/fa';
import { SiWebpack, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';

const useToolsList = () => {
  const toolsIcons = {
    trello: <FaTrello className="text-blue-500" />,
    webpack: <SiWebpack className="text-blue-600" />,
    vite: <TbBrandVite className="text-purple-500" />,
    vsCode: <SiVisualstudiocode className="text-blue-600" />,
  };

  return {
    toolsIcons,
  };
};

export default useToolsList;
