import Image from "next/image";

import { TRAINING_DETAILS } from "../_constants";

const InfoMedia = ({ image }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="dz-media">
        <Image
          src={image}
          width={360}
          height={100}
          quality={100}
          alt="Training"
          title="Training photo"
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
        <InfoMedia image="/images/services/pic1.jpg" />
        <InfoLight
          title={TRAINING_DETAILS.championsProgram.title}
          subtitle={TRAINING_DETAILS.championsProgram.subtitle}
          description={TRAINING_DETAILS.championsProgram.description}
        />
        <InfoMedia image="/images/services/pic3.jpg" />
        <InfoMedia image="/images/services/pic4.jpg" />
        <InfoLight
          title={TRAINING_DETAILS.physicalDevelopment.title}
          subtitle={TRAINING_DETAILS.physicalDevelopment.subtitle}
          description={TRAINING_DETAILS.physicalDevelopment.description}
        />
        <InfoMedia image="/images/services/pic2.jpg" />
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
