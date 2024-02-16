
import { useAppDispatch, useAppSelector } from "../state/store";
import { toggleTheme } from "../state/features/theme/themeSlice";


export default function Theme() {
  // const theme = useSelector((state: RootState) => state.theme);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleChange = () => dispatch(toggleTheme());

  const color = theme === "light" ?  "Red": "Blue";

  return (
    <>
      <h1 style={{color}}>Theme</h1>
      <div>{theme}</div>
      <button onClick={handleChange}>Change Theme</button>
    </>
 );
}