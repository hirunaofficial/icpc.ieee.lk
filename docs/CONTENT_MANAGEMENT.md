# Content Management Guide

This document explains how to manage and update content on the ICPC Sri Lanka website without modifying code.

## Overview

All website content is stored in JSON files located in the `src/data/` directory. This makes it easy to update text, dates, and other information without touching the codebase.

## Content Files

### 1. Timeline (`src/data/timeline.json`)

Contains all event dates and information for the competition timeline.

**Structure:**
```json
{
  "events": [
    {
      "id": "unique-id",
      "date": "11th November 2025",
      "title": "Event Title",
      "description": "Event description",
      "icon": "FaIconName",
      "color": "bg-[#143C68]",
      "highlight": false,
      "actions": ["Action 1", "Action 2"]
    }
  ]
}
```

**How to Update:**
- Change dates in the `date` field
- Update event titles and descriptions
- Add or remove events from the array
- Set `highlight: true` for important events

### 2. FAQ (`src/data/faq.json`)

Contains all frequently asked questions organized by category.

**Structure:**
```json
{
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "questions": [
        {
          "id": "question-id",
          "question": "Question text?",
          "answer": "Answer text"
        }
      ]
    }
  ]
}
```

**How to Update:**
- Add new questions to existing categories
- Create new categories
- Update question text and answers
- Remove outdated questions

### 3. Statistics (`src/data/stats.json`)

Contains all numerical statistics displayed on the website.

**Structure:**
```json
{
  "global": {
    "countries": {
      "value": "100+",
      "label": "Countries",
      "description": "Participating",
      "fullDescription": "From every continent"
    }
  },
  "contest": {
    "teamSize": {
      "value": "3 Students",
      "label": "Team Size",
      "description": "from the same university"
    }
  }
}
```

**How to Update:**
- Update stat values (e.g., "100+" to "120+")
- Change descriptions and labels
- Add new statistics as needed

### 4. Benefits (`src/data/benefits.json`)

Contains benefits and reasons to join ICPC.

**Structure:**
```json
{
  "benefits": [
    {
      "id": "benefit-id",
      "icon": "IconName",
      "title": "Benefit Title",
      "description": "Benefit description",
      "color": "bg-[#143C68]"
    }
  ]
}
```

**How to Update:**
- Add or remove benefits
- Update benefit descriptions
- Change colors (use Tailwind CSS color classes)

### 5. Requirements (`src/data/requirements.json`)

Contains registration requirements and eligibility criteria.

**Structure:**
```json
{
  "requirements": [
    {
      "id": "requirement-id",
      "icon": "IconName",
      "title": "Requirement Title",
      "items": ["Item 1", "Item 2", "Item 3"]
    }
  ]
}
```

**How to Update:**
- Modify requirement items
- Add new requirement categories
- Update registration fee information

## Making Updates

### Step 1: Edit the JSON File

1. Navigate to `src/data/`
2. Open the relevant JSON file in a text editor
3. Make your changes following the structure above
4. Save the file

### Step 2: Validate JSON

Ensure your JSON is valid:
- Use a JSON validator (e.g., jsonlint.com)
- Check for missing commas, brackets, or quotes
- Ensure proper formatting

### Step 3: Test Locally

```bash
npm run dev
```

Visit the affected pages to verify your changes appear correctly.

### Step 4: Deploy

Once changes are verified:
```bash
npm run build
```

Deploy the updated `out/` directory to your hosting platform.

## Common Updates

### Updating Event Dates

File: `src/data/timeline.json`

Change the `date` field for the relevant event:
```json
{
  "date": "15th November 2025",  // OLD
  "date": "20th November 2025"   // NEW
}
```

### Adding a New FAQ

File: `src/data/faq.json`

Add a new question object to the appropriate category:
```json
{
  "id": "new-question",
  "question": "What is the venue?",
  "answer": "The venue will be announced soon."
}
```

### Updating Registration Fee

File: `src/data/requirements.json`

Find the "Registration Fee" requirement and update the items:
```json
{
  "items": [
    "LKR 2,500 per team",  // Updated price
    "Covers meals on contest day",
    "Covers event logistics",
    "Early bird discounts may apply"
  ]
}
```

### Changing Statistics

File: `src/data/stats.json`

Update the values:
```json
{
  "value": "150+",  // Updated from 100+
  "label": "Countries"
}
```

## Best Practices

1. **Always validate JSON** before committing changes
2. **Keep backups** of original files before making major changes
3. **Test locally** before deploying to production
4. **Use consistent formatting** (proper indentation, spacing)
5. **Document major changes** in commit messages

## Color Reference

Use these official ICPC colors:

- Blue: `bg-[#143C68]`
- Yellow: `bg-[#FDBC1D]`
- Red: `bg-[#B22E1B]`

## Icon Names

Available icons (prefix with library name):

**From Heroicons:**
- TrophyIcon
- GlobeAltIcon
- UserGroupIcon
- AcademicCapIcon
- etc.

**From React Icons (Font Awesome):**
- FaTrophy
- FaUsers
- FaLaptopCode
- FaCode
- etc.

## Troubleshooting

### Changes Not Appearing

1. Clear browser cache
2. Rebuild the site: `npm run build`
3. Check for JSON syntax errors
4. Verify file path is correct

### JSON Syntax Errors

Common issues:
- Missing comma between items
- Unmatched brackets `[]` or braces `{}`
- Missing quotes around strings
- Trailing commas (not allowed in JSON)

Use a JSON validator to identify specific issues.

## Need Help?

If you encounter issues:

1. Check the JSON validator output
2. Review this documentation
3. Contact the development team
4. Check the GitHub repository for issues

## Future Enhancements

Planned features:
- CMS integration (Contentful, Sanity, etc.)
- Admin dashboard for content editing
- Real-time preview of changes
- Version control for content
- Automated content backups

