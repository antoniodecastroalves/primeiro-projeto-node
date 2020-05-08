import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRespository {
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

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appoinments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRespository;
