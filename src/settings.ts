export const defaultSettings: CustomFramesSettings = {
    frames: [],
    padding: 5
};
export const presets: Record<string, CustomFrame> = {
    "obsidian": {
        url: "https://forum.obsidian.md/",
        displayName: "Obsidian Forum",
        icon: "edit",
        hideOnMobile: true,
        minimumWidth: 367,
        customCss: ""
    },
	"calendar": {
        url: "https://calendar.google.com/calendar/u/0/r/day",
        displayName: "Google Calendar",
        icon: "calendar",
        hideOnMobile: true,
        minimumWidth: 490,
        customCss: `/* hide right-side menu, and some buttons */
div.d6McF,
div.pw6cBb,
div.gb_Td.gb_Va.gb_Id,
div.Kk7lMc-QWPxkf-LgbsSe-haAclf,
div.h8Aqhb,
div.gboEAb,
div.dwlvNd {
    display: none !important;
}`
    },
    "keep": {
        url: "https://keep.google.com",
        displayName: "Google Keep",
        icon: "files",
        hideOnMobile: true,
        minimumWidth: 370,
        customCss: `/* hide the menu bar and the "Keep" text */
.PvRhvb-qAWA2, .gb_2d.gb_Zc { 
	display: none !important; 
}`
    },
	"todoist": {
		url: "https://todoist.com",
		displayName: "Todoist",
		icon: "list-checks",
		hideOnMobile: true,
		minimumWidth: 350,
		customCss: `/* hide the help, home, search, and productivity overview buttons, create extra space, and prevent toast pop-up from acting weird */
[aria-label="Go to Home view"], #quick_find, [aria-label="Productivity"], [aria-label="Help & Feedback"] {
	display: none !important;
}

.view_content {
	padding-left: 15px;
}

.view_header {
	padding-left: 15px;
	padding-top: 10px;
}

.undo_toast {
	width: 95%;
}` 
	},
    "notion": {
        url: "https://www.notion.so/",
        displayName: "Notion",
        icon: "box",
        hideOnMobile: true,
        minimumWidth: 400,
        customCss: ""
    },
    "twitter": {
        url: "https://twitter.com",
        displayName: "Twitter",
        icon: "twitter",
        hideOnMobile: true,
        minimumWidth: 400,
        customCss: ""
    }
};

export interface CustomFramesSettings {
    frames: CustomFrame[];
    padding: number;
}

export interface CustomFrame {
    url: string;
    displayName: string;
    icon: string;
    hideOnMobile: boolean;
    minimumWidth: number;
    customCss: string;
}
