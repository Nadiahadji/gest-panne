<template>
    <div class="container-fluid">
        <h1 class="text-center my-5">Statistiques</h1>
        <!-- Icon Cards-->
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fa-solid fa-sitemap"></i>
                </div>
                <div class="mr-5">26 Sites</div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fa-solid fa-desktop"></i>
                </div>
                <div class="mr-5">140 Equipements</div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-success o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fa-solid fa-ban"></i>
                </div>
                <div class="mr-5">23 Pannes en ttentes</div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
                <div class="mr-5">13 Travaux</div>
              </div>
            </div>
          </div>
        </div>
        <div id="recente" class="my-3 row">
          <div class="col-6">
            <h3>Les dernieres pannes</h3>
            <ul>
              <li>Panne 3</li>
              <li>Panne 2</li>
              <li>Panne 1</li>
            </ul>
          </div>
          <div class="col-6">
            <h3>Les derniers travaux</h3>
            <ul>
              <li>Travail 3</li>
              <li>Travail 2</li>
              <li>Travail 1</li>
            </ul>
          </div>
        </div>
        <div id="charts" class="mb-5">
          <h3 class="text-center">Total des pannes par site</h3>
          <div class="chart">
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div id="lastMonth" class="mb-5">
          <h3 class="text-center">Annee 2022</h3>
          <div class="chart2">
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>
</template>


<script>

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
  name: "DashBoard",
 mounted() {

    const ctx =  document.getElementById('myChart');
    const myChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['site!', 'site@', 'site3', 'Site4', 'site5', 'site6'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ]
            }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Pannes par site'
            }
          }
        }
    });

    //chart2

    const ctx2 =  document.getElementById('myChart2');
    const myChart2 = new Chart(ctx2.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['janvier', 'feverie', 'mars', 'avril', 'mai', 'juin'],
            datasets: [{
                label: 'Site 1',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ]
            },
            {
                label: 'Site 2',
                data: [18, 22, 6, 0, 11, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ]
            },
            {
                label: 'Site 3',
                data: [16, 29, 12, 7, 1, 3],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    
                ]
            }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'annee en court'
            }
          }
        }
    });

  }
}
</script>

<style scoped>
.chart {
  width :50%;
  margin : auto
}
#myChart {
  width :100%;
  height : 100%
}
</style>