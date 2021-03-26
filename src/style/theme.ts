type DeviceSize = {
    [key:string]: string;
    mobile: string;
    tablet: string;
    laptop: string;
};

type Theme = {
    device: DeviceSize;
}

const deviceSizes: DeviceSize = {
    mobile: "428px",
    tablet: "768px",
    laptop: "1024px",
};
  
const device: DeviceSize = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
    mobileHeight: `screen and (max-height: ${deviceSizes.mobile})`,
    tabletHeight: `screen and (max-height: ${deviceSizes.tablet})`,
};
  
const theme: Theme = {
    device
};
  
  export default theme;