/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/",
	},

	// mega menu
	{
		text: "About",
		link: "/about",
	},

	// regular dropdown
	{
		text: "Services",
		dropdown: [
			{
				text: "Installation",
				link: "/services/installation",
			},
			{
				text: "Maintenance",
				link: "/services/maintenance",
			},
			{
				text: "Repair",
				link: "/services/repair",
			},
		],
	},
	{
		text: "FAQ",
		link: "/#faq1",
	},
];

export default navConfig;