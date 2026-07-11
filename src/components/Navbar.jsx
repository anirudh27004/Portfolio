import dayjs from "dayjs";
import { Moon, Sun } from "lucide-react";

import { navLinks, navIcons } from "#constants"
import useWindowStore from "#store/window.js";
import useThemeStore from "#store/theme.js";
import useLocationStore from "#store/location.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const { theme, toggleTheme } = useThemeStore();
    const { resetActiveLocation } = useLocationStore();

    const handleNavClick = (type) => {
        if (type === "finder") resetActiveLocation();
        openWindow(type);
    };

  return (
    <nav>
        <div>
           <img src = "/images/logo.svg" alt="Logo"/>
           <p className="font-bold">Anirudh's Portfolio</p>

           <ul>
            {navLinks.map(({id,name,type}) => (
                <li key={id} onClick={() => handleNavClick(type)}>
                    <p>{name}</p>
                </li>
            ))}
           </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id, img, type}) => (
                    <li key={id}>
                        {type === "theme" ? (
                            <button
                                type="button"
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            >
                                {theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}
                            </button>
                        ) : (
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        )}
                    </li>
                ))}
            </ul>

            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
    </nav>
  )
}

export default Navbar
