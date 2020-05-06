import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentRespository {
  private appoinments: Appointment[];

  constructor() {
    this.appoinments = [];
  }

  public all(): Appointment[] {
    return this.appoinments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appoinments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appoinments.push(appointment);

    return appointment;
  }
}

export default AppointmentRespository;
