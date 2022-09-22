export function MiniEvent ({ event, setViewingEvent }) {
    return (
      <div
        className={`miniEvent ${
          event.hasOtherHost ? 'host' : 
          event.status === 'Active' ? 'standard' : 'busy'
        }`}
        onClick={() => setViewingEvent(event)}
      >
        {event.name}
      </div>
    );
  };
  