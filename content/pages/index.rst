====
home
====

:url:
:save_as: index.html

.. raw:: html

    <div id="upcoming-events">
        <h2 class="text-2xl text-center mb-5">Upcoming Events</h2>

        <a href="/sprint/2025/04-hsinchu.html" class="flex w-full rounded-lg shadow-md no-underline overflow-hidden my-4">
          <div class="flex w-24 flex-col items-center justify-center bg-red-800 py-4 text-white">
            <span class="text-3xl">19</span>
            <span class="text-xl">Apr</span>
          </div>
          <div class="flex flex-1 flex-col justify-center p-4">
            <h4 class="text-gray-800">scisprint 2025 April in Hsinchu</h4>
            <span class="text-gray-600"><i class="fa fa-map-marker mr-2"></i>Center for Theory and Computation (National Tsing Hua University)</span>
            <span class="text-gray-600"><i class="fa fa-clock mr-2"></i>10:00 AM - 05:00 PM</span>
          </div>
        </a>


        <a href="/meetup/2025/0402-nycu.html" class="flex w-full rounded-lg shadow-md no-underline overflow-hidden my-4">
          <div class="flex w-24 flex-col items-center justify-center bg-red-800 py-4 text-white">
            <span class="text-3xl">2</span>
            <span class="text-xl">Apr</span>
          </div>
          <div class="flex flex-1 flex-col justify-center p-4">
            <h4 class="text-gray-800">Meetup 2025 April 2nd in NYCU</h4>
            <span class="text-gray-600"><i class="fa fa-map-marker mr-2"></i>Room 329, Engineering Building 3, NYCU</span>
            <span class="text-gray-600"><i class="fa fa-clock mr-2"></i>06:30 PM - 09:30 PM</span>
          </div>
        </a>

    </div>

    <script type="text/javascript">
      // Find all event elements within upcoming-events
      const upcomingEventsContainer = document.getElementById('upcoming-events');
      const eventElements = document.querySelectorAll('#upcoming-events a');

      // Initialize countdowns
      eventElements.forEach((element, index) => {
        // Find the datetime text from the event element
        const dayEl = element.querySelector('div:first-child span:first-child');
        const monthEl = element.querySelector('div:first-child span:last-child');
        const timeEl = element.querySelector('i.fa-clock').parentNode;

        const month = monthEl.textContent.trim();
        const day = dayEl.textContent.trim();
        const currentYear = new Date().getFullYear();
        const startTime = timeEl.textContent.trim().split('-')[0].trim();
        const dateStr = `${month} ${day}, ${currentYear} ${startTime}`;

        // Store the date in a data attribute for easy access
        element.dataset.eventDate = dateStr;

        // Add a new span for countdown after the clock span if it doesn't exist
        let countdownSpan = element.querySelector('.countdown-display');
        if (!countdownSpan) {
          countdownSpan = document.createElement('span');
          countdownSpan.className = 'text-gray-700 text-sm mt-2';
          countdownSpan.id = `countdown-${index}`;

          // Add the countdown span after the time span
          const parentDiv = timeEl.parentNode;
          parentDiv.appendChild(countdownSpan);
        }
      });

      function updateCountdowns() {
        const now = new Date();
        let visibleEventsCount = 0;

        eventElements.forEach((element, index) => {
          const countdownElement = document.getElementById(`countdown-${index}`);
          if (!countdownElement) return;

          // Get date from data attribute
          const eventDateStr = element.dataset.eventDate;
          if (!eventDateStr) return;

          const eventDate = new Date(eventDateStr);
          const distance = eventDate.getTime() - now.getTime();

          if (distance < 0) {
            if (eventDate.toDateString() === now.toDateString()) {
              visibleEventsCount++;

              // Event is today and has started
              countdownElement.textContent = "Happening now!";
            } else {
              // Event is from a past day
              element.style.display = 'none';
            }
          } else {
            visibleEventsCount++;

            // Format and display countdown
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownElement.textContent = `Starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
          }
        });

        // Hide the entire container if there are no upcoming events
        if (visibleEventsCount === 0 && upcomingEventsContainer) {
          upcomingEventsContainer.style.display = 'none';
        }
      }

      // Initial update
      updateCountdowns();

      // Update every second
      setInterval(updateCountdowns, 1000);
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
