# Creating Meetup and Sprint Articles

This guide explains how to add new meetup and sprint articles to the sciwork website. Follow these steps to ensure your content is properly formatted and successfully deployed.

## 1. File Structure and Placement

Place your MDX files in the appropriate directory according to this structure:

- For meetups: `contents/meetup/YYYY/MMDD-location.mdx`

  - Example: `contents/meetup/2025/0521-nycu.mdx`

- For sprints: `contents/sprint/YYYY/MM-location.mdx`
  - Example: `contents/sprint/2025/05-hsinchu.mdx`

## 2. MDX File Format

### Frontmatter

Every MDX file must include frontmatter at the beginning of the file. This is a YAML block between triple dashes (`---`) that contains metadata.

Required frontmatter fields,

Meetup:

```yaml
---
date: "YYYY-MM-DD HH:MM" # The date and time of the event
title: "Event Title" # Title of the event
location: "Venue Name" # Location where the event takes place
---
```

Sprint:

```yaml
---
date: "YYYY-MM-DD HH:MM" # The date and time of the event
eventTime: "10:30 - 17:00" # Time range of the event
title: "Event Title" # Title of the event
location: "Venue Name" # Location where the event takes place
author: "Author Name" # Author of the article
description: "Brief description of the event"
---
```

### Using AgendaTable Component

For structured agenda sections, use the `AgendaTable` component:

```jsx
<AgendaTable>
  <AgendaTable.Row time="18:30 ~ 19:30">
    <AgendaTable.Topic title="Welcome and Introduction">
      Brief description or bullet points about this session.
        1. Point one
        2. Point two
        3. Point three
    </AgendaTable.Topic>
  </AgendaTable.Row>

  <AgendaTable.Row time="19:30 ~ 20:30">
    <AgendaTable.Topic title="Topic 1">Content for topic 1</AgendaTable.Topic>
    <AgendaTable.Topic title="Topic 2">Content for topic 2</AgendaTable.Topic>
  </AgendaTable.Row>
</AgendaTable>
```

Key points about using AgendaTable:

- `<AgendaTable.Row>` defines a time slot with the `time` prop
- Each row can contain multiple `<AgendaTable.Topic>` elements
- Each topic requires a `title` prop and can contain optional content (markdown/text)
- For lists inside topics, add two spaces after each line for proper line breaks

### Using Map Component

To embed a Google Maps location, use the `Map` component:

```jsx
<Map src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL" />
```

To get the embed URL from Google Maps:

1. Go to Google Maps and find your location
2. Click "Share" and select "Embed a map"
3. Copy the provided iframe src URL
4. Use this URL in the Map component's `src` attribute

## Example MDX Template

Here's a basic template for a meetup page:

```mdx
---
date: "2025-05-21 18:30"
title: "Meetup 2025 May 21st in NYCU"
location: "National Yang Ming Chiao Tung University"
---

# Date

- Date: May 21st, 2025
- Time: 18:30 -- 21:30 (3 hours)

# Agenda

<AgendaTable>
  <AgendaTable.Row time="18:30 ~ 19:00">
    <AgendaTable.Topic title="Check-in" />
  </AgendaTable.Row>
  <AgendaTable.Row time="19:00 ~ 20:30">
    <AgendaTable.Topic title="Main Talk: Topic Title">
      1. Introduction to the topic
      2. Key concepts
      3. Demonstration
    </AgendaTable.Topic>
  </AgendaTable.Row>
  <AgendaTable.Row time="20:30 ~ 21:30">
    <AgendaTable.Topic title="Open Discussion" />
  </AgendaTable.Row>
</AgendaTable>

# Subjects

...

# Sign up

...

# About Meetup

...

# Venue

...

<div
  style={{
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: 0,
  }}
>
  <Map src="GOOGLE_MAP_EMBED_URL" />
</div>

# Contact Us

...
```
