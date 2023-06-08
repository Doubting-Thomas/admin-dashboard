import { create } from "zustand";
import { calendarEvents } from "../data/data";

const useCalendar = create((set) => ({
  currentEvents: calendarEvents,
  setCurrentEvents: (events) => set({ currentEvents: events }),
}));

export default useCalendar;
