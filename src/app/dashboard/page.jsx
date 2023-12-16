import Card from "@/ui/dashboard/card/card";
import Chart from "@/ui/dashboard/chart/chart";
import Rightbar from "@/ui/dashboard/rightbar/rightbar";
import Transactions from "@/ui/dashboard/transactions/transactions";

import styles from "@/ui/dashboard/dashboard.module.css";

export default function DashboardPage() {
  const item = {
    title: "A title",
    number: "12345",
    detail: "A detail",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card item={item} />
          <Card item={item} />
          <Card item={item} />
        </div>

        <Transactions />

        <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
