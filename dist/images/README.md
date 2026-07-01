# Section images

These are real, on-brand stills auto-extracted from `public/video/hero-dramify.mp4`
(the studio / craft scene), then purple-graded in CSS. They ship as-is.

| File                     | Used in                        |
|--------------------------|--------------------------------|
| `about-studio.jpg`       | Секция «О нас» (studio shot)    |
| `couple.jpg`             | Карточка «Для свадьбы»          |
| `craft-scene.jpg`        | Карточка «Для близкого человека»|
| `studio-wide.jpg`        | Карточка «Для детей»            |
| `animator-portrait.jpg`  | CTA-карточка в FAQ              |

To swap any of these for custom art, drop a file with the SAME name here
(PNG or JPG). Recommended ~1200px+ on the long side. To re-extract different
frames from the video:

```
node_modules/ffmpeg-static/ffmpeg.exe -ss <seconds> -i public/video/hero-dramify.mp4 \
  -frames:v 1 -q:v 2 public/images/<name>.jpg -y
```
