const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Baskin Robins','product 2','product 3','product 4','product 5'],
      datasets: [{
        label: '# of Votes',
        data: [25,20,15,10,5],
        borderWidth: 1,
        backgroundColor:"blue"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  