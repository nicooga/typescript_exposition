(() => {
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
  type Day = Weekday | 'Sat' | 'Sun'

  function getNextDay(w: Weekday): Day {
    switch (w) {
      case 'Mon': return 'Tue'
    }
  }
});

(() => {
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
  type Day = Weekday | 'Sat' | 'Sun'

  function getNextDay(w: Weekday): Day {
    switch (w) {
      case 'Mon': return 'Tue';
      case 'Tue': return 'Wed';
      case 'Wed': return 'Thu';
      case 'Thu': return 'Fri';
      case 'Fri': return 'Sat';
      case 'Sat': return 'Sun';
    }
  }
});

