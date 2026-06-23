export const CONTACT_FORM_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxsHK1Hyv0p4EwjJEBidGsJZifif4RnkJuPLCjt-bQ0LUQkzFfhRbNmZQ7_c8G9YqFF/exec';

export interface ContactFormPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  projectType: string;
  preferredContact: string;
  message: string;
  source: string;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  await fetch(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });
}
