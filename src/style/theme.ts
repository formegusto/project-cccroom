type DeviceSize = {
    mobile: string;
    tablet: string;
    laptop: string;
};

type Theme = {
    device: DeviceSize;
}

const deviceSizes: DeviceSize = {
    mobile: "375px",
    tablet: "768px",
    laptop: "1024px",
};
  
const device: DeviceSize = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};
  
const theme: Theme = {
    device
};
  
  export default theme;