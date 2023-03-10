import Image from 'next/image';

import logo from '../../public/assets/images/logo.png';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <div><Image src={logo} alt="" width={25} height={25} /></div>
      <div>{AppConfig.site_name}</div>
    </span>
  );
};

export { Logo };
