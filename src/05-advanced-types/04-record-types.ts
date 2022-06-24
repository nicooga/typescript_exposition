(() => {
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
  type Day = Weekday | 'Sat' | 'Sun'

  let nextDay: Record<Weekday, Day> = {
    Mon: 'Tue'
  }
});
