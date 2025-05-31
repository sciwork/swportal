==============
Sciwork portal
==============

This repository is for the website for the sciwork portal. Check-ins
to the repository will be automatically deployed to the website by
`Netlify <https://www.netlify.com>`__.

The website is built by using `Next.js <https://nextjs.org>`__.  The
flow for contribution is:

1. Clone the repository
2. Run a local devserver
3. Edit the content
4. File a pull request (PR) against ``develop`` branch
5. Resolve discussions in the PR review
6. PR is merged, done

.. note::

  Do NOT file PR against the ``master`` branch.

Before you start, make sure you have the following installed:

1. ``node`` (v22.13.1). We recommend using `nvm <https://github.com/nvm-sh/nvm>`__ to manage your node versions. Once you have ``nvm`` installed, run ``nvm install v22.13.1`` to install node. Then use `avn <https://github.com/wbyoung/avn>`__ to automatically switch to the correct node version when you enter the project directory.
2. ``pnpm``

Install the necessary dependencies via:

.. code-block:: bash
  pnpm install

In the working copy root, run the following command for the local devserver:

.. code-block:: bash

  env SITEURL=http://localhost:8000 make devserver [PORT=8000]

You can start editing the page by modifying ``app/page.tsx``. The page auto-updates as you edit the file.

To generate static html files for the site, run:

.. code-block:: bash

  make html

The generated files will be in the ``output/`` directory.

Branch convention
=================

The ``master`` branch is deployed to the official website https://sciwork.dev
and https://swportal.netlify.app.

The ``develop`` branch is deployed to the under development
https://develop--swportal.netlify.app.

Other branches are deployed to https://{branch}--swportal.netlify.app.  Replace
``/`` in the branch name with ``-``.

Pull requests are deployed to
https://deploy-preview-{id}--swportal.netlify.app.  ``{id}`` is the PR ID.

Changes for improvement
-----------------------

To add contents or website features, create a branch named like
``feature/your-addition``.

New blog entries
----------------

To add a new blog entry, the branch name should be
``feature/blog/entry-name``.

New event entries
-----------------

To add a new evnet entry, the branch name should be
``feature/event/entry-name``.

Bugfix
------

If you want to fix bugs or typographical errors, create a branch named like
``bugfix/your-fix``.

Writing content
===============

Pelican supports writing content in reStructuredText format (with a file ending
in ``.rst``) or Markdown syntax (with a file ending in ``.md``, ``.markdown``,
``.mkd``, or ``.mdown``).

Scisprint
---------

To add a new Scisprint event, save the pages into
``content/pages/sprint/{date:%Y}`` directory,
and the URL should be ``sprint/{date:%Y}/{slug}``.
