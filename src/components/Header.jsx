import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative shadow-sm dark:bg-gray-678 border-gray-200 dark:border-gray-200 h-15 flex items-center justify-between px-6 z-10">
      {/* Back Button aligned to right */}
      <div className="flex-1 flex justify-end">
        <Link
          to="/"
          className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
            />
          </svg>
          <span className="font-medium text-base">Back</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
