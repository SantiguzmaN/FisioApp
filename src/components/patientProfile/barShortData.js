const endPointResponse = {
  ShowPinnedItems: false,
  Tiles: [
    {
      tileType: 'BarChart',
      options: {
        dataset: [
          {
            source: [
              ['Appointment', 'Total Time'],
              ['First Appointment', 60],
              ['Second Appointment', 58],
              ['Third Appointment', 45]
            ],
            sourceHeader: true
          }
        ],
        xAxis: { type: 'category', scale: false },
        yAxis: [{ scale: false }],
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        series: [{ type: 'bar', name: 'Total Sales', label: { show: true } }],
        responsive: true,
        maintainAspectRatio: false
      },
      title: "<span class='highlight'>Total Appointments </span> by <span class='highlight'>Patients</span>",
      filter: '',
      removableTitle:
        "<a class='removableTitle blue lighten-4'>Total Sales <i ItemType='Value' ItemID='0' SubItemID='' class='close fas fa-times'></i></a> by <a class='removableTitle blue lighten-4'>Ship Mode <i ItemType='Category' ItemID='0' SubItemID='' class='close fas fa-times'></i></a>",
      removableFilter: '',
      description: '',
      isEmpty: false,
      tileId: 'e0836c24-8ad6-4091-8253-f59ea7952a7a',
      isTruncatedForPerformance: false,
      truncatedDownRowCount: -1,
      rowCount: 4,
      showQueryIcon: false,
      filterPlainText: ''
    }
  ],
  SelectedTileIndex: 0,
  viewMode: 'Tile',
  measureType: { 'Total Time': 'Currency' }
};

export default endPointResponse;
