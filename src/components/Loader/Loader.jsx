import css from './Loader.module.css';
import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className={css.loaderElement}>
      <Oval
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};
