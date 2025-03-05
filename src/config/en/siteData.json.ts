import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Gold Coast Heating & Air",
	// Your website's title and description (meta fields)
	title: "Gold Coast Heating & Air - Installation, Maintenance, Repair",
	description:
		"San Diego's trusted choice for Heating & Air.",

	// used on contact page and footer
	contact: {
		address1: "13465 Camino Canada #106-406",
		address2: "El Cajon, CA 92021",
		phone: "(619) 800-3525",
		email: "GoldCoastHVAC.sd@gmail.com",
	},

	// Your information for blog post purposes
	author: {
		name: "Jose Ortiz",
		email: "GoldCoastHVAC.sd@gmail.com",
		twitter: "GoldCoastHVAC",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/goldcoastlogo.png",
		alt: "Gold Coast HVAC logo",
	},
};

export default siteData;