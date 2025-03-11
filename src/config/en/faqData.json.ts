import { type FaqItem } from "../types/configDataTypes";

// replace this data with whatever you want in your FAQ section
export const faqData: FaqItem[] = [
	{
		question: "How often should I schedule maintenance for my HVAC system?",
		answer: `Most experts recommend scheduling maintenance at least once a year—typically in the spring f
		or cooling systems and fall for heating systems—to ensure optimal performance and longevity.`,
	},
	{
		question: "What are the signs my HVAC system needs repair?",
		answer: `Common signs include unusual noises, weak airflow, uneven temperatures, higher-than-normal energy bills, 
		or the system frequently cycling on and off.`,
	},
	{
		question: 'How long does an HVAC system typically last?',
		answer: `With proper maintenance, an HVAC system can last 10-15 years for air conditioners and heat pumps, 
		and 15-20 years for furnaces, though this varies based on usage and care.`,
	},
	{
		question: "Can I install a new HVAC system myself, or should I hire a professional?",
		answer: `HVAC installation requires specialized knowledge, tools, and permits, so it’s strongly recommended 
		to hire a licensed professional to ensure safety and efficiency.`,
	},
	{
		question: "What size HVAC system do I need for my home?",
		answer: `The right size depends on factors like square footage, insulation, and climate. A professional 
		can perform a load calculation (often using Manual J) to determine the perfect fit.`,
	},
	{
		question: "Why is my HVAC system running but not cooling/heating?",
		answer: `This could be due to a clogged filter, low refrigerant, a broken thermostat, or a failing component 
		like the compressor. A technician can diagnose and fix the issue.`,
	},
];

export default faqData;