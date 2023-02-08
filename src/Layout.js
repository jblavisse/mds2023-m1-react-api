import {NavLink, Outlet} from 'react-router-dom';

export default function Layout() {
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">

    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">

        <div className="flex items-center space-x-2">
            <button type="button" className="text-3xl"><i className="bx bx-menu"></i></button>
            <div>Logo</div>
        </div>


        <div>
            <button type="button" className="h-9 w-9 overflow-hidden rounded-full">
                <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
            </button>


            <div className="hidden absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
                <div className="flex items-center space-x-2 p-2">
                    <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" className="h-9 w-9 rounded-full" />
                    <div className="font-medium">Hafiz Haziq</div>
                </div>

                <div className="flex flex-col space-y-3 p-2">
                    <a href="#" className="transition hover:text-blue-600">My Profile</a>
                    <a href="#" className="transition hover:text-blue-600">Edit Profile</a>
                    <a href="#" className="transition hover:text-blue-600">Settings</a>
                </div>

                <div className="p-2">
                    <button className="flex items-center space-x-2 transition hover:text-blue-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                            </path>
                        </svg>
                        <div>Log Out</div>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div className="flex">
        <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2">
              <NavLink to="/" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                  <span className="text-2xl"><i className="bx bx-home"></i></span>
                  <span>Accueil</span>
              </NavLink>

            <NavLink to="/users" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-cart"></i></span>
                <span>Utilisateurs</span>
            </NavLink>

            <NavLink to="/tasks" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                <span>Tâches</span>
            </NavLink>

            <NavLink to="/contact" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-heart"></i></span>
                <span>Contact</span>
            </NavLink>

            <a href="https://www.google.fr" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-user"></i></span>
                <span>Retour site</span>
            </a>
        </aside>

        <div className="w-full p-4">
            <Outlet />
        </div>
     </div>
    </main>
  )
}
