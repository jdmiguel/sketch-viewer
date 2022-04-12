import { ReactNode, createContext, useState } from 'react';
import { ArtBoard } from 'src/helpers/types';

const defaultBasicArtboard = {
  files: [
    {
      height: 0,
      scale: 0,
      thumbnails: [
        {
          height: 0,
          width: 0,
          url: '',
        },
      ],
      url: '',
      width: 0,
    },
  ],
  isArtboard: true,
  name: '',
};

const ArtboardNavigationContext = createContext({
  step: 0,
  totalSteps: 0,
  isArtboardDetailMode: false,
  selectedArtboard: defaultBasicArtboard,
  selectThumbnail: (_name: string) => {},
  selectPrevStep: () => {},
  selectNextStep: () => {},
  closeArtboardDetailMode: () => {},
});

type Props = {
  artboards: ArtBoard[];
  children: ReactNode;
};

export const ArtboardNavigationContextProvider = ({ artboards, children }: Props) => {
  const [isArtboardDetailMode, setIsArtboardDetailMode] = useState(false);
  const [selectedArtboard, setSelectedArtboard] = useState<ArtBoard>(defaultBasicArtboard);
  const [step, setStep] = useState(0);

  const totalSteps = artboards.length;

  const selectThumbnail = (name: string) => {
    const currentArtboard = artboards.find((artboard) => artboard.name === name);
    const currentArtboardIndex = artboards.findIndex(
      (artboard) => artboard.name === currentArtboard?.name,
    );

    if (currentArtboard) {
      setSelectedArtboard(currentArtboard);
    }

    setStep(currentArtboardIndex + 1);
    setIsArtboardDetailMode(true);
  };

  const selectPrevStep = () => {
    const currentStep = step === 1 ? totalSteps : step - 1;
    setStep(currentStep);

    const currentArtboard = artboards[currentStep - 1];
    setSelectedArtboard(currentArtboard);
  };

  const selectNextStep = () => {
    const currentStep = step === totalSteps ? 1 : step + 1;
    setStep(currentStep);

    const currentArtboard = artboards[currentStep - 1];
    setSelectedArtboard(currentArtboard);
  };

  const closeArtboardDetailMode = () => {
    setSelectedArtboard(defaultBasicArtboard);
    setIsArtboardDetailMode(false);
  };

  const value = {
    step,
    totalSteps,
    isArtboardDetailMode,
    selectedArtboard,
    selectThumbnail,
    selectPrevStep,
    selectNextStep,
    closeArtboardDetailMode,
  };

  return (
    <ArtboardNavigationContext.Provider value={value}>
      {children}
    </ArtboardNavigationContext.Provider>
  );
};

export default ArtboardNavigationContext;
