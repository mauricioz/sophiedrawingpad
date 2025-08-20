
import React from 'react';

type IconProps = {
  className?: string;
};

export const SmileyIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
);

export const FishIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4-8-10S12 2 12 2s8 4 8 10-8 10-8 10z" />
        <path d="M20 12l-4-2v4l4-2z" />
        <circle cx="10" cy="10" r="1" />
    </svg>
);

export const SimpleCatIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0110 10c0 3.5-2 6.5-5 8.5-1.5 1-3.5 1.5-5.5 1.5S7.5 21.5 6 20.5c-3-2-5-5-5-8.5A10 10 0 0112 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 3s-2 2-2 4" />
        <path d="M15 3s2 2 2 4" />
    </svg>
);


export const CatIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.5 19.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10zM2 12c0 4.4 3.6 8 8 8"/>
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/>
    <path d="M12 18c-2 0-3-1-3-2"/>
  </svg>
);

export const ArtisticCatIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.2,22.4H8.8c-2.6,0-4.8-2.2-4.8-4.8V11c0-1.8,1-3.4,2.6-4.3C7.4,6,8,5,8,4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2 c0,1-0.6,2-1.4,2.7c1.6,0.9,2.6,2.5,2.6,4.3v6.6C20,20.2,17.8,22.4,15.2,22.4z" />
        <path d="M9 16c0 2 1 3 3 3s3-1 3-3" />
    </svg>
);

export const ArtisticCatV2Icon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-3.5 0-6.5 2-8 5c-2.5 4.5-1.5 9.5 2.5 12.5c4 3 9 3 13 0c4-3 5-8 2.5-12.5C19.5 4 15.5 2 12 2z" />
        <path d="M4.5 9.5c-1-2 0-4.5 2-6" />
        <path d="M19.5 9.5c1-2 0-4.5-2-6" />
        <path d="M18.5 17.5c-2.5 2.5-6.5 2.5-9 0" />
    </svg>
);

export const ArtisticCatV3Icon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 8.5C16.5 12.5 14.5 15.5 12 15.5C9.5 15.5 7.5 12.5 7.5 8.5C7.5 4.5 9.5 2.5 12 2.5C14.5 2.5 16.5 4.5 16.5 8.5Z" />
        <path d="M12 15.5C9 15.5 7.5 21.5 12 21.5C16.5 21.5 15 15.5 12 15.5Z" />
        <path d="M8.5 7.5C7 4.5 4.5 6 5.5 8" />
        <path d="M15.5 7.5C17 4.5 19.5 6 18.5 8" />
        <path d="M15 13.5C18 13.5 19 18 15.5 19.5" />
    </svg>
);

export const ArtisticCatV4Icon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 19.5c3.5-1.5 4.5-6 1.5-9.5" />
        <path d="M18.5 8C17 5 14.5 3 12 3C9.5 3 7 5 5.5 8" />
        <path d="M9.5 19.5C6 18 5 12.5 8 9.5" />
        <path d="M16.5 8.5C16.5 12.5 14.5 15.5 12 15.5C9.5 15.5 7.5 12.5 7.5 8.5" />
        <path d="M5.5 8.5C4 5.5 1.5 7 2.5 9" />
        <path d="M18.5 8.5C20 5.5 22.5 7 21.5 9" />
    </svg>
);

export const ArtisticCatV5Icon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-4 0-7 3-8 7 2 4 6 4.5 8 4.5s6-.5 8-4.5c-1-4-4-7-8-7z" />
      <path d="M4.5 8.5c-2-1.5-2.5-4.5 0-5.5" />
      <path d="M19.5 8.5c2-1.5 2.5-4.5 0-5.5" />
      <path d="M12 13.5c-2 0-5 2.5-5 6h10c0-3.5-3-6-5-6z" />
      <path d="M7 19.5c0 1 .5 1.5 1.5 1.5" />
      <path d="M17 19.5c0 1-.5 1.5-1.5 1.5" />
      <path d="M17 14c2.5 1 3 4.5 1 6.5" />
    </svg>
);

export const ArtisticCatV6Icon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 9.5c.5-2.5-1-5-3.5-6.5-2.5-1.5-5.5-1.5-8 0-2.5 1.5-4 4-3.5 6.5.5 2.5 2.5 4.5 5.5 5.5-2.5 2.5-3 6.5-1.5 8.5h10c1.5-2 .5-6-1.5-8.5 3-1 5-3 5.5-5.5z" />
        <path d="M5 6.5C3.5 4.5 1.5 5 2.5 7" />
        <path d="M19 6.5c1.5-2.5 3.5-2 2.5 0" />
        <path d="M16 20.5c0 .5-.5 1-1 1" />
        <path d="M9 20.5c0 .5.5 1 1 1" />
    </svg>
);

export const DogIcon: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 17c-1.5 1.5-3.5 2.5-5.5 2.5S6.5 18.5 5 17" />
    <path d="M12 4c-4 0-6 3-5.5 7 .5 4 3.5 7 5.5 7s5-3 5.5-7c.5-4-1.5-7-5.5-7z" />
    <path d="M8 8c-2 1-3 6 0 5" />
    <path d="M16 8c2 1 3 6 0 5" />
  </svg>
);


export const HouseIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export const CarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
    <line x1="5" y1="11" x2="19" y2="11"/>
    <circle cx="7.5" cy="16.5" r="2.5"/>
    <circle cx="16.5" cy="16.5" r="2.5"/>
  </svg>
);

export const ArtisticDogIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7a3 3 0 0 0-3 3v2c0 2.5-2 4.5-4.5 4.5S-1 14 2 11.5s4-5 7-5" />
        <path d="M12 7a3 3 0 0 1 3 3v2c0 2.5 2 4.5 4.5 4.5s5.5-2.5 2.5-5S16 3.5 13 3.5" />
        <path d="M10 16.5c0 .5.5 1 1 1s1.5-.5 1.5-1.5" />
        <path d="M14.5 16c0 .5-.5 1.5-1.5 1.5s-1-.5-1-1" />
        <path d="M12 12c-1.5 0-2.5 1.5-2.5 3" />
    </svg>
);

export const ArtisticFishIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-3-3-6-3-9-1s-3 4 0 7c3 3 6 3 9 1" />
        <path d="M12 12c3-3 6-3 9-1s3 4 0 7c-3 3-6 3-9 1" />
        <path d="M12 10c-1 0-1.5-1-1.5-2s.5-2 1.5-2" />
        <path d="M10 11.5c-1.5 0-3-.5-4.5-1.5" />
    </svg>
);

export const CozyHouseIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4L4 9v11h16V9l-8-5z" />
        <path d="M9 20v-6a3 3 0 0 1 6 0v6" />
        <path d="M15 10l-3 3-3-3" />
        <path d="M17.5 2.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2z" />
    </svg>
);

export const CuteCarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM20 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
        <path d="M8 18H4.5a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h1.3" />
        <path d="M16 18h3.5a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-1.3" />
        <path d="M5.8 9l1.4-3.5A2 2 0 0 1 9.2 4h5.6a2 2 0 0 1 2 1.5L18.2 9" />
        <path d="M8 13h8" />
    </svg>
);


export const HappyIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
);

export const SadIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
);

export const SurprisedIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="15" r="1" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
);

export const PrevIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

export const NextIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export const StartOverIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.181-3.183m-3.181-4.991-3.182-3.182a8.25 8.25 0 0 0-11.664 0l-3.182 3.182" />
  </svg>
);

export const LoadingSpinner: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-4.5c0-3.314-2.686-6-6-6S1.5 4.936 1.5 8.25c0 1.63.633 3.16 1.684 4.25L12 18Z" />
    </svg>
);

export const BackIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

export const TrashIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const subjectIcons: { [key: string]: React.FC<IconProps> } = {
  SmileyIcon,
  ArtisticFishIcon,
  SimpleCatIcon,
  ArtisticCatV6Icon,
  CatIcon,
  DogIcon,
  ArtisticDogIcon,
  CozyHouseIcon,
  CuteCarIcon,
  ArtisticCatIcon,
  ArtisticCatV2Icon,
  ArtisticCatV3Icon,
  ArtisticCatV4Icon,
  ArtisticCatV5Icon,
};

export const customizationIcons: { [key: string]: React.FC<IconProps> } = {
  HappyIcon,
  SadIcon,
  SurprisedIcon,
};
