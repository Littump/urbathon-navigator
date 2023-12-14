import { memo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
  responsive: true,
  maintainAspectRatio: true,
};
export default memo(function ProfileSidebarFinanceGraph() {
  const money = 150;
  const total = 1500;
  const data = {
    labels: [" заработано ", " можно заработать "],
    datasets: [
      {
        label: "",
        data: [money, total - money],
        backgroundColor: ["#31BB04", "#6E63E6"],
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
});
