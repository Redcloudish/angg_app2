const conservationAreas = [
  { id: 1, name: "Northern Forest", description: "A peaceful forest with diverse wildlife" },
  { id: 2, name: "Lakeside Meadows", description: "Beautiful meadows around a serene lake" },
  { id: 3, name: "Mountain Ridge", description: "A high-altitude conservation area with scenic views" },
  { id: 4, name: "Desert Oasis", description: "A unique desert ecosystem with rare flora and fauna" }
];

const timeSlots = [
  { id: 1, startTime: "9:00 AM", endTime: "12:00 PM" },
  { id: 2, startTime: "12:00 PM", endTime: "3:00 PM" },
  { id: 3, startTime: "3:00 PM", endTime: "6:00 PM" }
];

let reservations = [];

// Functions for accessing and modifying data
const getConservationAreas = () => conservationAreas;
const getTimeSlots = () => timeSlots;

const makeReservation = (areaId, slotId, user) => {
  const area = conservationAreas.find(a => a.id === areaId);
  const slot = timeSlots.find(s => s.id === slotId);

  if (area && slot) {
    const existingReservation = reservations.find(r => r.areaId === areaId && r.slotId === slotId);
    if (existingReservation) {
      return "Time slot already booked!";
    }
    reservations.push({ areaId, slotId, user });
    return "Reservation successful!";
  } else {
    return "Invalid conservation area or time slot.";
  }
};

const getReservations = () => reservations.map(reservation => {
  const area = conservationAreas.find(a => a.id === reservation.areaId);
  const slot = timeSlots.find(s => s.id === reservation.slotId);
  return {
    user: reservation.user,
    area: area.name,
    time: `${slot.startTime} - ${slot.endTime}`
  };
});

// Exporting as a module
module.exports = function () {
  return {
    conservationAreas,
    timeSlots,
    getConservationAreas,
    getTimeSlots,
    makeReservation,
    getReservations,
    orders: []
  };
};
