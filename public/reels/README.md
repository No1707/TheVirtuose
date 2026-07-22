# Footage drop

Place real showreel and project videos here, then wire them up:

- **Hero showreel** → `public/reels/showreel.mp4`, then in
  `src/components/Hero.tsx` swap the placeholder `<Screen />` for
  `<Screen src="/reels/showreel.mp4" bars={false} />`.
- **Per-project films** → `public/reels/<slug>.mp4` (e.g. `nocturne.mp4`).
  In `src/components/WorkDetail.tsx` the feature block already has the
  commented `src` line ready to enable.
- Optionally add a poster frame per video: `public/reels/<slug>.jpg` and pass
  `poster="/reels/<slug>.jpg"`.

Recommended encode: H.264 MP4, muted, ~1080p, short loop (8–20s) for ambient
backgrounds. Keep files under ~6 MB each for fast loads; use a poster image so
nothing is blank while the video buffers.
