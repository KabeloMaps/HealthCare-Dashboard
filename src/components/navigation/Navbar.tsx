import logo from "../../assets/NavBar/TestLogo.svg";
import homeIcon from "../../assets/NavBar/home.svg";
import patientsIcon from "../../assets/NavBar/group_fIll.svg";
import scheduleIcon from "../../assets/NavBar/calendar.svg";
import messagesIcon from "../../assets/NavBar/chat_bubble.svg";
import transactionsIcon from "../../assets/NavBar/credit_card.svg";
import settingsIcon from "../../assets/NavBar/settings.svg";
import optionsIcon from "../../assets/NavBar/Options.svg";
import doctorIcon from "../../assets/NavBar/doctor.png";

export default function NavBar() {
  const navItems = [
    { label: "Overview", icon: homeIcon },
    { label: "Patients", icon: patientsIcon },
    { label: "Schedule", icon: scheduleIcon },
    { label: "Messages", icon: messagesIcon },
    { label: "Transactions", icon: transactionsIcon },
  ];

  const navProfile = {
    icon: doctorIcon,
    name: "Dr. Jose Simmons",
    description: "General Practitioner",
  };

  const navItemClass =
    "flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer hover:bg-[#01F0D0] shrink-0 whitespace-nowrap";

  const navListStyle = {
    fontFamily: "Manrope, 'Manrope', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "19px",
  };

  return (
    <div className="navbar flex items-center justify-between bg-[#FFFFFF] rounded-full p-5 m-5 absolute inset-x-0 top-0 h-16">
      <div className="flex items-center justify-start">
        <img src={logo} alt="nav-logo" className="h-8 w-auto" />
      </div>
      ``
      <nav className="flex items-center justify-center overflow-hidden">
        <ul
          className="flex items-center justify-center gap-3"
          style={navListStyle}
        >
          {navItems.map((item) => (
            <li key={item.label} className={navItemClass}>
              <img
                src={item.icon}
                alt={`${item.label.toLowerCase()}-icon`}
                className="h-4 w-4"
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-3 text-sm">
        <div className="flex items-center gap-2">
          <img
            src={navProfile.icon}
            alt="doctor icon"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="flex items-center gap-3 divide-x-2 divide-solid divide-[#e0e0e0]">
            <div className="info pr-3">
              <span className="font-semibold text-[#1b1b1b]">
                {navProfile.name}
              </span>
              <p className="text-[0.85rem] text-[#4f4f4f]">
                {navProfile.description}
              </p>
            </div>
            <div className="options flex items-center justify-center gap-3 pl-3">
              <img
                src={settingsIcon}
                alt="settings-icon"
                className="h-5 w-5 cursor-pointer"
              />
              <img
                src={optionsIcon}
                alt="options-icon"
                className="h-5 w-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
