==============
Sciwork portal
==============

This repository is for the website for the sciwork portal. Check-ins
to the repository will be automatically deployed to the website by
`Netlify <https://www.netlify.com>`__.

The website is built by using `pelican <https://blog.getpelican.com/>`__.  The
flow for contribution is:

1. Clone the repository
2. Run a local devserver
3. Edit the content
4. File a pull request (PR) against ``develop`` branch
5. Resolve discussions in the PR review
6. PR is merged, done

.. note::

  Do NOT file PR against the ``master`` branch.

In the working copy root, run the following command for the local devserver:

.. code-block:: bash

  env SITEURL=http://localhost:8000 make devserver [PORT=8000]

Branch convention
=================

The `master` branch is automatically deployed to the official website.

The `develop` branch is automatically deployed to the under development website.

Other branches will not be deployed.

Changes for improvement
-----------------------

To add contents or website features, create a branch named like
`feature/your-addition`.

New blog entries
----------------

To add a new blog entry, the branch name should be
`feature/blog/entry-name`.

New event entries
----------------

To add a new evnet entry, the branch name should be
`feature/event/entry-name`.

Bugfix
------

If you want to fix bugs or typographical errors, create a branch named like
`bugfix/your-fix`.
