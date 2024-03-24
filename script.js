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
        label: "# of Votes",
        data: [25, 20, 15, 10, 5],
        borderWidth: 1,
        backgroundColor: "blue",
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
        text: "Top Ordered Products",
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
        label: "# of Votes",
        data: [25, 20, 15, 10, 5, 12],
        borderWidth: 1,
        backgroundColor: "blue",
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
        text: "Payment type Category",
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
        label: "# of Votes",
        data: [25, 20, 15, 10, 5],
        borderWidth: 1,
        backgroundColor: "blue",
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
        text: "Delivery Turnaround time",
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
        backgroundColor: "blue",
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
        backgroundColor: ["#c1dcff", "#f6b654", "#007300"],
        data: [70, 20, 10],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Truck Delivering",
      },
    },
  },
});

const prog = document.getElementById("progbar");

new Chart(prog,{
  type:'bar',
  data:{
    labels:["sagar","deepak","temp driver","demo driver"],
    datasets :[
      {
        label:"pending",
        data:[15,15,30,15],
        backgroundColor:"blue",
        // borderRadius:25,
        borderWidth:1,
        borderSkipped:false,
        barPercentage:0.4,
        categoryPercentage:0.8
      },
      {
        label:"In progress",
        data:[15,25,0,15],
        backgroundColor:"yellow",
        // borderRadius:25,
        borderWidth:1,
        borderSkipped:false,
        barPercentage:0.4,
        categoryPercentage:0.8
      },
      {
        label:"completed",
        data:[50,0,86,20],
        backgroundColor:"green",
        // borderRadius:25,
        borderWidth:1,
        borderSkipped:false,
        barPercentage:0.4,
        categoryPercentage:0.8
      },
    ],
  
  },
  options:{
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Delivery Timelines",
      },
    },
    responsive: true,
    indexAxis:"y",
    scales: {
      x: {
        stacked:true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks:{
          display:false
        }
        
      },
      y: {
        beginAtZero: true,
        stacked:true,
        grid: {
          display: false,
          drawBorder: false,
        },
        
      },
    },
    
  }
})