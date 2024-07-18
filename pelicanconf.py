#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

import os

AUTHOR = 'Sciwork Team'
SITENAME = 'sciwork'
SITEURL = os.environ.get('SITEURL', '')

PATH = 'content'
THEME = 'theme'

TIMEZONE = 'Asia/Taipei'

DEFAULT_LANG = 'en'

MENUITEMS = (
    ('home', ''),
    ('blog', 'blog'),
    ('sprint', 'sprint'),
    ('meetup', 'meetup'),
    ('training', 'training'),
    ('conference', 'conference'),
    ('project', 'project'),
    ('about', 'about'),
)


ARCHIVES_SAVE_AS = ''
ARTICLE_URL = '{category}/{date:%Y}/{slug}'
ARTICLE_SAVE_AS = '{category}/{date:%Y}/{slug}.html'
AUTHORS_SAVE_AS = ''
AUTHOR_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
CATEGORY_SAVE_AS = '{slug}.html'
TAGS_SAVE_AS = ''
TAG_SAVE_AS = ''


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#           ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['headerid', 'sitemap']
HEADERID_LINK_CHAR = '<i class="fa fa-link"></i>'

SITEMAP = {
    "format": "xml"
}
