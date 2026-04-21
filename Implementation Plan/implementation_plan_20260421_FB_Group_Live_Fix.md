# Implementation Plan: Finalizing Facebook Group Integration & Deployment

The Facebook Group section was added to `index.html` but was never committed, pushed, or synchronized with the Editorial Dashboard and the live Vercel site. This plan ensures the feature is properly deployed and manageable by the clan editors.

## Proposed Changes

### [Clan Portal]

#### [MODIFY] [index.html](file:///c:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/index.html)
- Ensure the Facebook section (lines 208-235) is correctly formatted.
- (Already exists locally but needs to be committed).

#### [MODIFY] [generate_editor.py](file:///c:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/generate_editor.py)
- Update the `template` to include a 7th row in the table for "7. KẾT NỐI CỘNG ĐỒNG (FACEBOOK)".
- Ensure the verbatim current content is extracted/mirrored from `index.html`.
- Note: I will need to take a screenshot of the new section locally to provide a preview image in the dashboard.

#### [REGENERATE] [editor/index.html](file:///c:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/editor/index.html)
- Run `generate_editor.py` after the update to sync the dashboard with the new homepage content.

### [Git & Deployment]

- Stage and commit all changes to `feature-v2-development`.
- Merge `feature-v2-development` into `main`.
- Push `main` to origin (GitHub) to trigger the Vercel build.

## Verification Plan

### Automated Tests
- Use `npx serve` locally to verify the layout.
- Use `git status` and `git log` to verify the deployment path.

### Manual Verification
- Use the **Browser Tool** to navigate to `https://toc-hoang-dong-yen-duy-xuyen.vercel.app/` and confirm the Facebook section is visible.
- Use the **Browser Tool** to navigate to `https://toc-hoang-dong-yen-duy-xuyen.vercel.app/editor/` and confirm the new section is editable by the clan members.
- Capture a screenshot of the live site as proof of completion (Rule 6.3).

## Auditor Review
- Verify that `generate_editor.py` correctly handles the 7th section.
- Ensure the Vercel deployment completes successfully.
