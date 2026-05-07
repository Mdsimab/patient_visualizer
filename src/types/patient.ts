export interface BloodPressure {
  systolic: { value: number; levels: string };
  diastolic: { value: number; levels: string };
}

export interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: { value: number; levels: string };
  respiratory_rate: { value: number; levels: string };
  temperature: { value: number; levels: string };
}

export interface DiagnosticItem {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
}
