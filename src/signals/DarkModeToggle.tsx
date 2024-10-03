import { FaRegularMoon, FaRegularSun } from "solid-icons/fa";
import { dark, setDark } from "./Signal";

export default function DarkModeToggle() {
  return (
    <>
      <button
        onClick={() => setDark((d) => !d)}
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      >
        <FaRegularMoon classList={{ hidden: dark() }} />
        <FaRegularSun classList={{ hidden: !dark() }} />
      </button>
    </>
  );
}
