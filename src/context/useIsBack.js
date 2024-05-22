import { useContext } from "react";
import { IsBackContext} from './IsBackContext'

export const useIsBack = () => useContext(IsBackContext);
