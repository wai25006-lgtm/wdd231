export function parkInfoTemplate(info) {
  return `
    <a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

export function mediaCardTemplate(info) {
  return `
    <article class="media-card">
      <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" />
      </a>
      <div class="media-card__content">
        <h2>
          <a href="${info.link}">${info.name}</a>
        </h2>
        <p>${info.description}</p>
      </div>
    </article>
  `;
}

export function footerTemplate(info) {
  const mailing = info.addresses.find(
    (address) => address.type === "Mailing"
  );

  const voice = info.contacts.phoneNumbers.find(
    (phone) => phone.type === "Voice"
  );

  return `
    <section class="contact">
      <h3>Contact Info</h3>

      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>

      <h4>Phone:</h4>
      <p>${voice.phoneNumber}</p>
    </section>
  `;
}


export function alertTemplate(alert) {
  let alertType = "";

  if (alert.category === "Park Closure") {
    alertType = "closure";
  } else {
    alertType = alert.category.toLowerCase();
  }

  return `
    <li class="alert">
      <svg class="icon" focusable="false" aria-hidden="true">
        <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
      </svg>
      <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
      </div>
    </li>
  `;
}

export function visitorCenterTemplate(center) {
  return `
    <li class="visitor-center">
      <h3>${center.name}</h3>
      <p>${center.description || ""}</p>
      <p>${center.directionsInfo || ""}</p>
    </li>
  `;
}

export function activityTemplate(activity) {
  return `<li>${activity.name}</li>`;
}
