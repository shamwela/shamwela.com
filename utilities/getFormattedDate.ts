export const getFormattedDate = (date: string) => {
  const dateObject = new Date(date)
  const formatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' })
  const formattedDate = formatter.format(dateObject)
  return formattedDate
}
