import { FaTrello } from 'react-icons/fa';
import {
  SiWebpack,
  SiVisualstudiocode,
  SiEslint,
  SiPrettier,
} from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { PiDogFill } from 'react-icons/pi';

const useToolsList = () => {
  const toolsIcons = {
    trello: <FaTrello className="text-blue-500" />,
    webpack: <SiWebpack className="text-blue-600" />,
    vite: <TbBrandVite className="text-purple-500" />,
    vsCode: <SiVisualstudiocode className="text-blue-600" />,
    eslint: <SiEslint className="text-purple-700" />,
    prettier: <SiPrettier className="text-purple-500" />,
    husky: <PiDogFill className="text-yellow-800" />,
  };

  return {
    toolsIcons,
  };
};

export default useToolsList;
