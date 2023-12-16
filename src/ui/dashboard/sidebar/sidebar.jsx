import Image from "next/image";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

import styles from "@/ui/dashboard/sidebar/sidebar.module.css";
import MenuLink from "@/ui/dashboard/sidebar/menuLink/menuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/logo-erischon-new.png"
          alt=""
          width="50"
          height="50"
          className={styles.userImage}
        />

        <div className={styles.userDetail}>
          <span className={styles.userName}>John Joe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <span className={styles.cat}>{cat.title}</span>

            {cat.list.map((item, index) => (
              <MenuLink item={item} key={index} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
