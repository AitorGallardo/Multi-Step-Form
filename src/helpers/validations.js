const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:\+\d{1,3}\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  return phoneRegex.test(phoneNumber);
}

export const formValidations = {
    name: [
      (value) => value.length > 0 , 'Name is required',
    ],
    email: [
      (value) => value.length > 0 &&  isValidEmail(value) , 'Invalid email. Must contain @.',
    ],
    phone: [
      (value) =>value.length > 0 &&  isValidPhoneNumber(value) , 'Invalid phone number.Example: +34782544221',
    ]
  }