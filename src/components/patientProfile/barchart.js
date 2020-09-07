import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaChartBar } from 'react-icons/fa';

const BarChart = ({ props, section }) => {
  let title;
  let description;
  let bars;
  let barsData;
  let bar = [];
  let keys = [];
  let type;
  let tileId = '';
  let format;
  let measureType;
  let showLabel = true;
  const series = [];
  // TODO: Remove this validation after get rid of the graphics page
  if (props.Tiles) {
    bars = props.Tiles[0].options.dataset[0].source[0].length;
    barsData = props.Tiles[0].options.dataset[0].source;
    title = props.Tiles[0].title.replace(/(<([^>]+)>)/gi, '');
    description = props.Tiles[0].Description;
    type = props.Tiles[0].TileType;
    tileId = props.Tiles[0].TileID;
    format = props.Tiles[0].options.xAxis.type
    measureType = props.MeasureType;
  } else {
    bars = props.options.dataset[0].source[0].length;
    barsData = props.options.dataset[0].source;
    title = props.title.replace(/(<([^>]+)>)/gi, '');
    description = props.Description;
    type = props.TileType;
    tileId = props.TileID;
    format = props.options.xAxis.type
  }

  if (format === 'time') {
    format = 'datetime';
  }

  for (let i = 1; i < bars; i++) {
    keys = [];
    barsData.forEach(data => {
      const x = parseFloat(data[i]);
      bar.push(isNaN(x) ? data[i] : x);
      keys.push(data[0]);
    });
    series.push({ name: bar[0], data: bar.slice(1) });
    bar = [];
  }

  if (keys.length > 50) {
    showLabel = parseFloat(keys.slice(1)[0]) ? showLabel : false;
  }

  const stacked = type === 'StackedBarChart' ? true : false;

  const state = {
    series: series,
    options: {
      chart: {
        type: 'bar',
        stacked: stacked,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      title: {
        text: title,
        align: 'left',
      },
      xaxis: {
        categories: keys.slice(1),
        type: format,
        labels: {
          show: showLabel,
        },
      },
    },
  };

  const cardWidth = section === 'dashboard' ? 'w-100' : 'w-50';

  return (
    <div className={`card ${cardWidth}`}>
      <div className="card-header card-header-default card-header-icon">
        <div className="card-icon">
          <FaChartBar color="#FFF" size="30" />
        </div>
        {/* <h4 className="card-title" dangerouslySetInnerHTML={{ __html: props.Removabletitle }}></h4> */}
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={270} />
          </div>
          <span className="data-table-tile-description" dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
