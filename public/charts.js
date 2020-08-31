var ctx = document.getElementById('myChart');

var stars = [5, 2, 1, 5, 2];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

var myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

        labels: frameworks,
        datasets: [{
            label: 'Skills',
            fill:false,
            backgroundColor: 'rgb(255, 99, 132)',

            borderColor: 'rgb(255, 99, 132)',
            data: stars
        },
        {
        label: 'second data set',
            fill:false,
            backgroundColor: 'rgb(250, 99, 132)',

            borderColor: 'rgb(130, 50, 50)',
            data: [2, 3, 4, 5, 2, 3]
        }
    }
}