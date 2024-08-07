import {
  SERVICES1,
  SERVICES2,
  SERVICES3,
  SERVICES4,
  TRAINING_DETAILS,
} from "@/constants";

const InfoMedia = ({ image }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="dz-media">
        <img src={image} alt="Trainings" />
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
          <h4 className="title text-white">{subtitle}</h4>
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
          <h4 className="title theme-text-color">{subtitle}</h4>
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
        <InfoMedia image={SERVICES1} />
        <InfoLight
          title={TRAINING_DETAILS.championsProgram.title}
          subtitle={TRAINING_DETAILS.championsProgram.subtitle}
          description={TRAINING_DETAILS.championsProgram.description}
        />
        <InfoMedia image={SERVICES3} />
        <InfoMedia image={SERVICES4} />
        <InfoLight
          title={TRAINING_DETAILS.physicalDevelopment.title}
          subtitle={TRAINING_DETAILS.physicalDevelopment.subtitle}
          description={TRAINING_DETAILS.physicalDevelopment.description}
        />
        <InfoMedia image={SERVICES2} />
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
