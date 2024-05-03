====================================================
Advanced CFD software development Hsinchu 2024 March
====================================================

:date: 2024-02-28 9:41
:url: workshop/2024/03-workshop
:save_as: workshop/2024/03-workshop.html

Date
----

* Date: 23rd March, Saturday, 2024
* Time: 8:30 -- 17:40

|

Agenda 
------

* 08:30 - 08:50	Check-in

* 09:00 - 10:20	Topic: the space-time CESE method

* 10:30 - 11:50	Topic: unstructured meshes of mixed elements

* 11:50 - 13:00	Lunch

* 13:00 - 14:20	Topic: HPC buffer management

* 14:30 - 15:50	Topic: Python and pybind11

* 16:00 - 17:20	Topic: Python for architecture

* 17:20 - 17:40	Conclusion and discussions

|

About the workshop
------------------

**Topic:** Advanced CFD software development

**Speaker:** Yung-Yu Chen (https://yyc.solvcon.net/)

Software development involves more than just writing code to obtain results, it also requires clear requirements and
consistency, scalability, and maintainability of behavior. Depending on different requirements, the software development
process varies. These skills and concepts fall within the realm of software engineering and are applicable to various
numerical computing software, including Computational Fluid Dynamics (CFD).

Numerical software development involves not only software engineering but also requires a strong background in applied
mathematics. It is through the combination of mathematics and software engineering that a efficient, scalable, and
maintainable numerical software can be developed.

This workshop will introduce the space-time Conservation Element and Solution Element (CESE) method and unstructured
meshes of mixed elements, also introducing some practical software engineering techniques.

Teaching code
-------------

We use the modmesh project to show the whole CFD software architecture. You can try to build the modmesh project and
you can ask question in the sciwork discord `solvcon channel <https://discord.com/channels/730297880140578906/730393342818648204>`__.

modmesh
^^^^^^^^^

- **Related Subjects:** Python, C++, PDE
- **Project Link:** `Github <https://github.com/solvcon/modmesh>`__
- **Project Contact:** Yung-Yu Chen (discord: @yyc#7718)

modmesh seamlessly mixes C++ and Python through pybind11, allowing you to leverage the strengths of 
both programming languages for efficient PDE solving. We use Qt and Python to visualize the computation 
results to give you a better understanding of your PDE solution. modmesh also supports mesh visualization, 
currently in the Gmsh mesh file format. We have recently made efforts to improve the modmesh UI/UX.

The design allows it to run on Windows, Linux, and MacOS. Everyone can use or contribute to modmesh.

Sign Up
-------

Please register at `kktix <https://sciwork.kktix.cc/events/cfdworkshop-2024-march>`__.

Venue
-----

`國立陽明交通大學 工程三館 3 樓 329 室 (Room 329, Engineering Building 3, NYCU)
<https://goo.gl/maps/TgDYwohB3CBmQgww9>`__.

.. raw:: html

  <div style="overflow:hidden; padding-bottom:56.25%; position:relative; height:0;">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.5596639949631!2d120.99673777209487!3d24.787280157478236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468360f96adabd7%3A0xedfd1ba0fa6c6bf7!2z5ZyL56uL6Zm95piO5Lqk6YCa5aSn5a24IOW3peeoi-S4iemkqA!5e0!3m2!1szh-TW!2stw!4v1678519228058!5m2!1szh-TW!2stw"
      style="left:0; top:0; height:100%; width:100%; position:absolute; border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

|

Contact us
----------

* sciwork: https://sciwork.dev/
* discord: https://discord.gg/6MAkFrD
* email: `contact@sciwork.dev (subject: I want to lead a project in scisprint) <mailto:contact@sciwork.dev?subject=[sciwork]%20I%20want%20to%20lead%20a%20project%20in%20scisprint>`__
* flickr: https://www.flickr.com/photos/sciwork/albums
