import { Era } from './types';

export const ERAS: Era[] = [
  { value: 'none', label: 'Select a Preset Era' },
  { 
    value: '1920s', 
    label: '1920s Vintage Film',
    prompt: 'Transform this entire scene into the 1920s. Alter the clothing, hairstyles, and background objects to be period-appropriate. Render the final image with a vintage look: sepia or monochrome tones, high contrast, soft focus, and authentic imperfections like film grain or light scratches, as if taken with an early camera.'
  },
  { 
    value: '1950s', 
    label: '1950s Classic B&W',
    prompt: 'Recreate this image as if it were a photograph taken in the 1950s. Change the environment, clothing, and any objects to match the 1950s era. The final image should have the quality of a classic black and white photograph from that period, with rich contrast, deep blacks, and a subtle grain.'
  },
  { 
    value: '1960s', 
    label: '1960s Psychedelic',
    prompt: 'Transform this image with a 1960s psychedelic vibe. Modify the subjects and background to reflect the counter-culture fashion and art of the era. Distort colors, use high contrast, and add swirling or abstract patterns. The final result should look like a vibrant, mind-bending piece of art from the late 60s.'
  },
  { 
    value: '1970s', 
    label: '1970s Faded Film',
    prompt: 'Transport this scene to the 1970s. Update all clothing, vehicles, and background details to be authentic to the decade. Apply a faded photograph effect: desaturate the colors, add a warm yellowish tint, soften the focus, and include subtle film grain for a nostalgic, sun-drenched feel.'
  },
  { 
    value: '1980s', 
    label: '1980s Neon & Grain',
    prompt: 'Reimagine this entire image with an authentic 1980s aesthetic. Change fashion, hairstyles, and background elements to be unmistakably from the 80s. The visual style should feature vibrant neon colors (pinks, teals), a distinct film grain, and a slightly glamorous, airbrushed look common in 80s media.'
  },
  { 
    value: '1990s', 
    label: '1990s Grunge',
    prompt: 'Recreate this scene with a 1990s grunge aesthetic. Modify clothing and the environment to fit the early 90s era. The image should look as if it was taken with a disposable camera: muted colors, high grain and contrast, a slightly underexposed, raw feel, and maybe a date stamp in the corner. The mood should be candid and edgy.'
  },
  { 
    value: 'cyberpunk', 
    label: 'Cyberpunk Future',
    prompt: 'Convert this image into a cyberpunk scene. Add neon lighting, holographic elements, and a dark, rainy, futuristic urban environment. The overall mood should be high-tech and dystopian.'
  },
  { 
    value: 'steampunk', 
    label: 'Steampunk Victorian',
    prompt: 'Reimagine this image in a steampunk style. Incorporate brass and copper machinery, gears, and Victorian-era fashion. The lighting should be warm, like gas lamps, with a sepia tint.'
  },
  { 
    value: 'fantasy', 
    label: 'Fantasy Art Style',
    prompt: 'Transform this image into a high-fantasy art piece. Add magical lighting, ethereal elements, and a painterly style. The scene should feel epic and otherworldly.'
  },
  { 
    value: 'anime', 
    label: 'Anime Scenery Style',
    prompt: 'Redraw this image in a vibrant, modern anime scenery style. Emphasize bright colors, clean lines, dramatic lighting, and a detailed, beautiful background typical of high-quality anime films.'
  },
];
