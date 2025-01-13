const GoogleCalendar = require('google-calendar');
const calendar = new GoogleCalendar('YOUR_CALENDAR_ID', 'YOUR_API_KEY');

exports.handler = async (event) => {
  const taskName = event.currentIntent.slots.taskName;
  const dueDate = event.currentIntent.slots.dueDate;
  const time = event.currentIntent.slots.time;

  const eventObject = {
    summary: taskName,
    start: {
      dateTime: `${dueDate}T${time}:00.000Z`
    },
    end: {
      dateTime: `${dueDate}T${time}:00.000Z`
    }
  };

  try {
    await calendar.events.insert({
      calendarId: 'primary',
      resource: eventObject
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Task created successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating task' })
    };
  }
};
