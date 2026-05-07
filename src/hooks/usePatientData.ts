import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Patient } from "@/types/patient";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";

async function fetchPatients(): Promise<Patient[]> {
  const credentials = btoa(`${USERNAME}:${PASSWORD}`);
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch patient data");
  }

  return response.json();
}

export function usePatientData() {
  const [selectedName, setSelectedName] = useState("Jessica Taylor");

  const query = useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
  });

  const allPatients = query.data ?? [];
  const selectedPatient = allPatients.find((p) => p.name === selectedName);

  return {
    ...query,
    allPatients,
    selectedPatient,
    selectedName,
    setSelectedName,
  };
}
