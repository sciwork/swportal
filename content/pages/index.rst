====
home
====

:url:
:save_as: index.html

.. raw:: html

    <h2 class="text-2xl text-center mb-5">Upcoming Events</h2>
        <div id="events-container" class="space-y-2">
    </div>
     <script src="https://cdn.tailwindcss.com"></script>
  <script>
    const events = [      
        { date: 'March 15, 2025 09:30:00', title: 'Taipei', type: 'Sprint', startTime: '09:30 AM', endTime: '05:00 PM', location: 'Department of Physics (National Taiwan University)', url: '/sprint/2025/03-taipei.html' },
      { date: 'March 22, 2025 10:00:00', title: 'Hsinchu', type: 'Sprint', startTime: '10:00 AM', endTime: '05:00 PM', location: 'Center for Theory and Computation (National Tsing Hua University)', url: '/sprint/2025/03-taipei.html' },
    ];

    function renderEvents() {
      const container = document.getElementById('events-container');
      container.innerHTML = '';

      events.forEach((event, index) => {
        const eventDate = new Date(event.date);

        const eventCard = document.createElement('a');
        eventCard.href = event.url;
        eventCard.className = 'flex shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300';

        eventCard.innerHTML = `
          <div class="bg-indigo-600 text-white flex flex-col items-center justify-center p-4 w-24 flex-shrink-0">
            <span class="text-3xl font-bold">${eventDate.getDate()}</span>
            <span class="text-xl">${eventDate.toLocaleString('default', { month: 'short' })}</span>
          </div>
          <div class="p-6 flex-1 transition duration-300" id="event-details-${index}">
            <h2 class="text-xl font-semibold mb-2">${event.title} 
              <span class="ml-2 inline-block px-2 py-1 text-xs uppercase font-semibold rounded bg-indigo-200 text-indigo-800">
                ${event.type}
              </span>
            </h2>
            <p class="text-gray-600">📍 ${event.location}</p>
            <p class="text-gray-600">🕒 ${event.startTime} - ${event.endTime}</p>
            <div id="countdown-${index}" class="mt-2 text-indigo-600 font-semibold"></div>
          </div>
        `;

        container.appendChild(eventCard);
        countdown(event.date, `countdown-${index}`, eventCard);
      });
    }

    function countdown(eventDate, elementId, eventCard) {
      const element = document.getElementById(elementId);
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(eventDate).getTime() - now;

        if (distance < 0) {
          clearInterval(interval);
          element.innerHTML = 'Event has started!';
          eventCard.classList.add('bg-gray-200');
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (days <= 3) {
          eventCard.classList.add('bg-red-100');
        } else {
          eventCard.classList.add('bg-indigo-50');
        }
      }, 1000);
    }
    setTimeout(renderEvents, 0);
  </script>
    <h2 class="text-2xl text-center mt-10">About sciwork</h2>

sciwork is a community for researchers and engineers to share and discuss
computer code for scientific, numerical, and engineering work.  We believe in
the power of openness, and use open source as a means to advance software
development for computational sciences.

As information technology blending in every aspect of human activities,
proficient use of programming languages is a prerequisite for conducting most
research and engineering work.  As the practitioners observed, the work evolved
into a hierarchy of skills that take years to acquire.  We need a thorough
understanding of the problem to solve as well as the mastery of computer
programming to deliver reliable solution.  It is overly challenging since
either of both is already complicated.  Sciwork would like to get involved in
the global effort to solve the issue of code development entangling with
science and engineering.

Our activities include but are not limited to `coding sprints <sprint>`__,
hands-on tutorials, and technical talks and `conferences <https://conf.sciwork.dev/>`__ (ex, sciwork 2023), on-line or off-line.
You are welcome to `join us <about.html>`__!