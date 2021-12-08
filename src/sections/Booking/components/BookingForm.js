import { useState } from "react"

const initialBookingData = {
  date: "",
  roomServices: {
    newspaper: false,
    breakfast: false
  },
  spaActivities: [],
}

const BookingForm = () => {
  const [bookingData, setBookingData] = useState(initialBookingData);
  
  const handleBookingChange = event => {
    let {name, value, type, checked} = event.target;
    console.log(event.target);
    
    if(type === 'checkbox'){
      value = checked;
      if(name === 'newspaper' || name === 'breakfast'){
        setBookingData({...bookingData, roomServices: {...bookingData.roomServices, [name]: value}});
      }
      else {
        if(bookingData.spaActivities.includes(name)){
          console.log('remove: ', name);
          const indexToRemove = bookingData.spaActivities.indexOf(name);
          bookingData.spaActivities.splice(indexToRemove, 1);
          setBookingData(bookingData);
        }
        else{
          setBookingData({...bookingData, spaActivities: [...bookingData.spaActivities, name]});
        }
      }
    }

    else {
      setBookingData({...bookingData, [name]: value});
    }
  }

  const handleBookingSubmit = event => {
    event.preventDefault();
    setBookingData(bookingData);

    console.log('booking submit:', bookingData);
  }

  return (
    <form className="form-stack" onSubmit={handleBookingSubmit}>
      <label htmlFor="date">When will you be arriving?</label>
      <input 
        name="date" 
        type="datetime-local" 
        onChange={handleBookingChange}
      />
      <section>
        <h3>Spa Activities</h3>
        <input 
          type="checkbox" 
          id="pool" 
          name="pool" 
          onChange={handleBookingChange}
        />
        <label htmlFor="pool">Soak and Swim</label>
        <input 
          type="checkbox" 
          id="facial" 
          name="facial" 
          onChange={handleBookingChange}
        />
        <label htmlFor="facial">Facial</label>
        <input 
          type="checkbox" 
          id="massage" 
          name="massage" 
          onChange={handleBookingChange}
        />
        <label htmlFor="massage">Massage</label>
      </section>
      <section>
        <h3>Room Services</h3>
        <input 
          type="checkbox" 
          id="newspaper" 
          name="newspaper" 
          value="newspaper"
          checked={bookingData.roomServices.newspaper}
          onChange={handleBookingChange}
        />
        <label htmlFor="newspaper">Daily Newspaper</label>
        <input 
          type="checkbox" 
          id="breakfast" 
          name="breakfast" 
          value="breakfast"
          checked={bookingData.roomServices.breakfast}
          onChange={handleBookingChange}
          
        />
        <label htmlFor="breakfast">Breakfast</label>
      </section>
      <button type="submit">Book</button>
    </form>
  )
}

export default BookingForm