const ctx = document.getElementById('myChart1');

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

  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['cash','credit','cheque','online','credit','cash'],
      datasets: [{
        label: '# of Votes',
        data: [25,20,15,10,5,12],
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

  
  const ctx3 = document.getElementById('myChart3');

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['1 Day','1-2 Day','2-4 Day','4-7 Day','7 Day'],
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
