
export interface FormatTimeProps {
    startDate: string,
    endDate: string
}

const getFormattedTime = (props: FormatTimeProps) => {
    const { startDate, endDate } = props;
    const startDateInstance = new Date(startDate)
    const endDateInstance = new Date(endDate)
    console.log({ startDate, endDate }, startDateInstance, endDateInstance);
    const time = {
      date: `${startDateInstance.toString().substring(4, 7)}`,
      initialTime: endDateInstance.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }),
      finalTime: endDateInstance.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    }

    return time.date + ", " + time.initialTime + " - " + time.finalTime
}

export default getFormattedTime;