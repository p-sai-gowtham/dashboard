const ctx = document.getElementById("myChart1");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Baskin Robins",
      "product 2",
      "product 3",
      "product 4",
      "product 5",
    ],
    datasets: [
      {
        label: "Product",
        data: [25, 20, 15, 10, 5],
        borderWidth: 1,
        backgroundColor: "#6787ff",
        barThickness: 30,
      },
    ],
  },
  options: {
    //   indexAxis:'y',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        
        position:"top",
        align:"start",
        title:{
          text:"products"
        },
        labels:{
          boxWidth:20,
        }

      },
      title: {
        display: true,
        text: "Top Ordered Products",
        position:"top",
        align:"start"
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["cash", "credit", "cheque", "online", "credit", "cash"],
    datasets: [
      {
        label: "Category",
        data: [25, 20, 15, 10, 5, 12],
        borderWidth: 1,
        backgroundColor: "#6787ff",
        barThickness: 30,

      },
    ],
  },
  options: {
    //   indexAxis:'y',
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position:"top",
        align:"start",
        
        labels:{
          boxWidth:20,
        }
      },
      title: {
        display: true,
        text: "Payment type Category",
        position:"top",
        align:"start"
      },
    },
  },
});

const ctx3 = document.getElementById("myChart3");

new Chart(ctx3, {
  type: "bar",
  data: {
    labels: ["1 Day", "1-2 Day", "2-4 Day", "4-7 Day", "7 Day"],
    datasets: [
      {
        label: "Days",
        data: [25, 20, 15, 10, 5],
        borderWidth: 1,
        backgroundColor: "#6787ff",
        barThickness: 30,
      },
    ],
  },
  options: {
    //   indexAxis:'y',
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position:"top",
        align:"start",
        
        labels:{
          boxWidth:20,
        }
        
      },
      title: {
        display: true,
        text: "Delivery Turnaround time",
        position:"top",
        align:"start"
      },
    },
  },
});
const ctx4 = document.getElementById("myChart4");

new Chart(ctx4, {
  type: "bar",
  data: {
    labels: ["1 Day", "1-2 Day", "2-4 Day", "4-7 Day", "7 Day"],
    datasets: [
      {
        label: "# of Votes",
        data: [25, 20, 15, 10, 5],
        borderWidth: 1,
        backgroundColor: "#6787ff",
      },
    ],
  },
  options: {
    //   indexAxis:'y',
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  },
});

const pie = document.getElementById("piech");

new Chart("piech", {
  type: "pie",
  data: {
    labels: ["in progress", "pending", "completed"],
    datasets: [
      {
        backgroundColor: ["#c1dcff", "#f6b654", "#496ef6"],
        data: [20, 6, 31],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          // useBorderRadius: true,
          // borderRadius:25,
        },
      },
      title: {
        display: true,
        text: "Truck Delivering",
        font:{
          size:20
        },
        
      },
    },
  },
});

const prog = document.getElementById("progbar");

new Chart(prog, {
  type: "bar",
  data: {
    labels: ["sagar","driver","deepak", "temp driver", "demo driver"],
    datasets: [
      {
        label: "pending",
        data: [15,40, 15, 30, 15],
        backgroundColor: "blue",
        // borderRadius:25,
        borderWidth: 1,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
      },
      {
        label: "In progress",
        data: [15,0, 25, 0, 15],
        backgroundColor: "yellow",
        // borderRadius:25,
        borderWidth: 1,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
      },
      {
        label: "completed",
        data: [50, 60,0, 86, 20],
        backgroundColor: "green",
        // borderRadius:25,
        borderWidth: 1,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position:"top",
        align:"start",
        labels: {
          boxWidth: 20,
          
        },
      },
      title: {
        display: true,
        text: "Delivery Timelines",
        position:"top",
        align:"start"
      },
    },
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});
