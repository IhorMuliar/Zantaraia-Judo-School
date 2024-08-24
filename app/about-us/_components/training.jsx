import Image from "next/image";

import { TRAINING_DETAILS } from "../_constants";

const InfoMedia = ({ image, alt }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="dz-media">
        <Image
          src={image}
          width={360}
          height={100}
          quality={100}
          alt={alt}
          title={alt}
        />
      </div>
    </div>
  );
};

const InfoDark = ({ title, subtitle, description }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="dz-info bg-secondary">
        <div className="clearfix text-white">
          <span className="text-primary subtitle">{title}</span>
          <h3 className="title text-white">{subtitle}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
const InfoLight = ({ title, subtitle, description }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="dz-info bg-primary">
        <div className="clearfix theme-text-color">
          <span className="subtitle">{title}</span>
          <h3 className="title theme-text-color">{subtitle}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Training = () => {
  return (
    <>
      <div className="row g-0">
        <InfoDark
          title={TRAINING_DETAILS.childrenSection.title}
          subtitle={TRAINING_DETAILS.childrenSection.subtitle}
          description={TRAINING_DETAILS.childrenSection.description}
        />
        <InfoMedia
          image="/images/gallery/photo9.jpg"
          alt="Діти на спортивних зборах у Карпатах"
        />
        <InfoLight
          title={TRAINING_DETAILS.championsProgram.title}
          subtitle={TRAINING_DETAILS.championsProgram.subtitle}
          description={TRAINING_DETAILS.championsProgram.description}
        />
        <InfoMedia
          image="/images/gallery/photo2.jpg"
          alt="Новорічний зал Георгія Зантарая з дітьми"
        />
        <InfoMedia
          image="/images/gallery/photo1.jpg"
          alt="Зал Георгія Зантарая з дітьми"
        />
        <InfoLight
          title={TRAINING_DETAILS.physicalDevelopment.title}
          subtitle={TRAINING_DETAILS.physicalDevelopment.subtitle}
          description={TRAINING_DETAILS.physicalDevelopment.description}
        />
        <InfoMedia
          image="/images/gallery/photo4.jpg"
          alt="Зал в Швейцарії з дітьми"
        />
        <InfoDark
          title={TRAINING_DETAILS.friendlyAtmosphere.title}
          subtitle={TRAINING_DETAILS.friendlyAtmosphere.subtitle}
          description={TRAINING_DETAILS.friendlyAtmosphere.description}
        />
      </div>
    </>
  );
};

export default Training;
