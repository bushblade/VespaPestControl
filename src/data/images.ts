import bees from '../assets/bees.jpg'
import bpca from '../assets/bpca.jpg'
import commercial from '../assets/commercial.jpg'
import decontamination from '../assets/decontamination.jpg'
import electricVan from '../assets/electric-van.jpg'
import bedbugEggs from '../assets/gallery/bedbug-eggs.jpg'
import bedbugInfestation from '../assets/gallery/bedbug-infestation.jpg'
import gnawedBin from '../assets/gallery/gnawed-bin.jpg'
import ladybirdLarva from '../assets/gallery/ladybird-larva.jpg'
import mouseEvidence from '../assets/gallery/mouse-evidence.jpg'
import mouseHarbourage from '../assets/gallery/mouse-harbourage.jpg'
import nestBehindLight from '../assets/gallery/nest-behind-light.jpg'
import ratActivity from '../assets/gallery/rat-activity.jpg'
import ratEntrance from '../assets/gallery/rat-entrance.jpg'
import ratFood from '../assets/gallery/rat-food.jpg'
import ratFootprints from '../assets/gallery/rat-footprints.jpg'
import ratProofing from '../assets/gallery/rat-proofing.jpg'
import uvRatTrail from '../assets/gallery/uv-rat-trail.jpg'
import videoAntsNuptialFlight from '../assets/gallery/videos/ants-nuptial-flight.jpg'
import videoBedbugs from '../assets/gallery/videos/bedbugs.jpg'
import videoRatsWildlifeCam from '../assets/gallery/videos/rats-wildlife-cam.jpg'
import videoTrickyWaspsNest from '../assets/gallery/videos/tricky-wasps-nest.jpg'
import videoUnusualWaspsNest from '../assets/gallery/videos/unusual-wasps-nest.jpg'
import videoWaspsNestAttic from '../assets/gallery/videos/wasps-nest-attic.jpg'
import waspEradication from '../assets/gallery/wasp-eradication.jpg'
import waspForaging from '../assets/gallery/wasp-foraging.jpg'
import waspLarva from '../assets/gallery/wasp-larva.jpg'
import waspStages from '../assets/gallery/wasp-stages.jpg'
import waspsNestLoft from '../assets/gallery/wasps-nest-loft.jpg'
import waspsNestRemoval from '../assets/gallery/wasps-nest-removal.jpg'
import googleMaps from '../assets/google-maps.jpg'
import googleMapsBlank from '../assets/google-maps-blank.jpg'
import insectsSpiders from '../assets/insects-spiders.png'
import insurance from '../assets/insurance.png'
import logo from '../assets/logo.png'
import logoNoBorder from '../assets/logo-no-border.png'
import proofing from '../assets/proofing.png'
import ratsMice from '../assets/rats-mice.jpg'
import wasps from '../assets/wasps.png'
import workingKitchen from '../assets/working-in-kitchen.jpg'

export const images = {
  bees,
  bpca,
  commercial,
  decontamination,
  'electric-van': electricVan,
  'google-maps': googleMaps,
  'google-maps-blank': googleMapsBlank,
  'insects-spiders': insectsSpiders,
  insurance,
  logo,
  'logo-no-border': logoNoBorder,
  proofing,
  'rats-mice': ratsMice,
  wasps,
  'working-kitchen': workingKitchen,
} as const

export const galleryImages = {
  'ladybird-larva': ladybirdLarva,
  'mouse-harbourage': mouseHarbourage,
  'bedbug-infestation': bedbugInfestation,
  'wasp-eradication': waspEradication,
  'wasps-nest-loft': waspsNestLoft,
  'wasps-nest-removal': waspsNestRemoval,
  'wasp-stages': waspStages,
  'wasp-larva': waspLarva,
  'nest-behind-light': nestBehindLight,
  'wasp-foraging': waspForaging,
  'mouse-evidence': mouseEvidence,
  'rat-activity': ratActivity,
  'uv-rat-trail': uvRatTrail,
  'bedbug-eggs': bedbugEggs,
  'rat-food': ratFood,
  'gnawed-bin': gnawedBin,
  'rat-entrance': ratEntrance,
  'rat-footprints': ratFootprints,
  'rat-proofing': ratProofing,
} as const

export const galleryVideoThumbs = {
  'wasps-nest-attic': videoWaspsNestAttic,
  'ants-nuptial-flight': videoAntsNuptialFlight,
  'tricky-wasps-nest': videoTrickyWaspsNest,
  'unusual-wasps-nest': videoUnusualWaspsNest,
  'rats-wildlife-cam': videoRatsWildlifeCam,
  bedbugs: videoBedbugs,
} as const

export type ImageKey = keyof typeof images
export type GalleryImageKey = keyof typeof galleryImages
export type GalleryVideoThumbKey = keyof typeof galleryVideoThumbs
