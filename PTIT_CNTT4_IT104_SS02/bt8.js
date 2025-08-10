const user = {
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country:"Vietnam"
    },
    contact: {
        email: "john@exampel.com",
        phone:"0123456789"
    },
    job: {
        title: "Developer",
        company: "Tech Company"
    }
}

function displayUserInfo(user) {
    let {
      name,
      age,
      location: { city, country },
      contact: { email, phone },
      job: { title, company },
    } = user;
    if (!name) name = "unknown";
    if (!age) age = "unknown";
    if (!city) city = "unknown";
    if (!country) country = "unknown";
    if (!title) title = "unknown";
    if (!company) company = "unknown";
    if (!email) email = "unknown";
    if (!phone) phone = "unknown";  
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`);
}
displayUserInfo(user);