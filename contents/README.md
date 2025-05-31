# Creating Meetup and Sprint Articles

This guide explains how to add new meetup and sprint articles to the sciwork website. Follow these steps to ensure your content is properly formatted and successfully deployed.

## 1. Fork and Checkout

First, fork the repository and create a local branch following the [Commitizen](https://github.com/commitizen/cz-cli) format:

```bash
# Clone your forked repo (if you haven't already)
git clone https://github.com/your-username/swportal.git
cd swportal

# Create a new branch with commitizen naming convention
git checkout -b docs/0521-meetup
```

The branch name should follow the format: `type/description`, where common types include:

- `docs`: For content additions or documentation changes
- `feat`: For new features
- `fix`: For bug fixes
- `chore`: For maintenance tasks

## 2. File Structure and Placement

Place your MDX files in the appropriate directory according to this structure:

- For meetups: `contents/meetup/YYYY/MMDD-location.mdx`

  - Example: `contents/meetup/2025/0521-nycu.mdx`

- For sprints: `contents/sprint/YYYY/MM-location.mdx`
  - Example: `contents/sprint/2025/05-hsinchu.mdx`

## 3. MDX File Format

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

## 4. Committing Your Changes

After creating or editing your file, commit with a message following the Commitizen format:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "docs: add the 5/21 meetup page"
```

Recommended commit formats:

- `docs: add the MMDD meetup page`
- `docs: add the MM sprint page`

## 5. Creating a Pull Request

Push your branch to your forked repository:

```bash
git push origin docs/0521-meetup
```

Then create a pull request:

1. Go to your forked swportal GitHub repo
2. Click "Pull requests" > "New pull request"
3. You should see a message like "There isn't anything to compare"
4. Set the base repository to the upstream `sciwork/swportal` and base branch to `develop`
5. Set the head repository to your fork and the compare branch to your feature branch (e.g., `docs/0521-meetup`)
6. Assign reviewers to review your PR
7. Submit the pull request

## 6. Review and Deployment Process

After your PR is approved:

1. A maintainer will merge your PR into the `develop` branch
2. The maintainer will create a new PR named like "Publish: Add the 20250521 agenda"
3. This PR will target `master` from `develop`
4. When merged to `master`, the content will automatically deploy to [https://sciwork.dev/](https://sciwork.dev/)

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
